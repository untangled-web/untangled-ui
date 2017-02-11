(ns untangled.ui.server.image-library.storage
  (:require
    [clojure.java.io :as io]
    [clojure.set :as set]
    [com.stuartsierra.component :as component]
    [untangled.ui.server.image-library.image :as img]))

(defrecord ImageMeta [id owner name size dimensions extension])

(let [remap {:db/id            :id
             :image/owner      :owner
             :image/name       :name
             :image/size       :size
             :image/dimensions :dimensions
             :image/extension  :extension}]
  (defn unravel-image-meta [im]
    (-> im
      (set/rename-keys (set/map-invert remap))))
  (defn make-image-meta [params]
    (-> params
      ((fn [{:as m :keys [content/data]}]
         (cond-> m
           data (assoc :image/extension
                       (img/infer-img-ext data)))))
      (select-keys (keys remap))
      (set/rename-keys remap)
      map->ImageMeta)))

(defprotocol IMetaStorage
  (save [this ^ImageMeta im]
    "Store the metadata for an image, returning ImageMeta with the ID set to the permanent ID of the metadata.")
  (grab [this ^ImageMeta im]
    "Get the metadata for a specific image (or all images). Returns (a seq of) ImageMeta."))

(defprotocol IBlobStorage
  (store [this ^ImageMeta im value] "Store value (binary). Uses ImageMeta to name the image in the store.")
  (fetch [this ^ImageMeta im] "Fetch the content of the given path. Returns an input stream or nil if missing."))

(defn- delete-folder [file]
  (when (.isDirectory file)
    (doseq [f (.listFiles file)]
      (delete-folder f)))
  (io/delete-file file))

(defrecord FileStore [images-root tmpdir]
  IBlobStorage
  (store [this im value]
    (with-open [w (io/output-stream (io/file images-root (str (:id im))))]
      (.write w value)))
  (fetch [this im]
    (io/input-stream (io/file images-root (str (:id im)))))
  component/Lifecycle
  (start [this]
    (let [images-root (io/file (or tmpdir (System/getProperty "java.io.tmpdir")) "content_server")]
      (io/make-parents (io/file images-root "not-used"))
      (assoc this :images-root images-root)))
  (stop [this]
    (delete-folder images-root)))

(defrecord InMemMetaStore [value]
  IMetaStorage
  (save [this im]
    (let [rid (::counter @value)
          nim (assoc im :id rid)]
      (swap! value assoc rid nim)
      (swap! value update ::counter inc)
      nim))
  (grab [this im]
    (cond (:id im) (get @value (:id im))
          (:owner im) (filter (comp #{(:owner im)} :owner)
                        (vals (dissoc @value ::counter)))
          :else (throw (ex-info (str "InMemMetaStore failed to grab for " im)
                         {:this this :im im :value @value}))))
  component/Lifecycle
  (start [this] (assoc this :value (atom {::counter 0})))
  (stop [this] (dissoc this :value)))
