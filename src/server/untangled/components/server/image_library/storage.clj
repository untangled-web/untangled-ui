(ns untangled.components.server.image-library.storage
  (:require
    [clojure.java.io :as io]
    [clojure.set :as set]
    [com.stuartsierra.component :as component])
  (:import
    (javax.imageio ImageIO)
    (java.io ByteArrayInputStream)))

(defrecord ImageMeta [id owner name size dimensions extension])

(let [remap {:db/id            :id
             :image/owner      :owner
             :image/name       :name
             :image/size       :size
             :image/dimensions :dimensions
             :image/extension  :extension}]
  (defn infer-img-ext [bain]
    (-> bain
      ByteArrayInputStream.
      ImageIO/createImageInputStream
      ImageIO/getImageReaders
      iterator-seq first
      .getFormatName
      .toLowerCase))
  (defn unravel-image-meta [im]
    (-> im
      (set/rename-keys (set/map-invert remap))))
  (defn make-image-meta [params]
    (-> params
      ((fn [{:as m :keys [content/data]}]
         (cond-> m
           data (assoc :image/extension
                       (infer-img-ext data)))))
      (select-keys (keys remap))
      (set/rename-keys remap)
      map->ImageMeta)))

(defprotocol IMetaStorage
  (save [this owner ^ImageMeta im]
    "Store the metadata for an image, returning ImageMeta with the ID set to the permanent ID of the metadata.")
  (grab [this owner] [this owner ^ImageMeta im]
    "Get the metadata for a specific image (or all images). Returns (a seq of) ImageMeta."))

(defprotocol IBlobStorage
  (store [this ^ImageMeta im value] "Store value (binary). Uses ImageMeta to name the image in the store.")
  (fetch [this ^ImageMeta im] "Fetch the content of the given path. Returns an input stream or nil if missing."))

(defrecord FileStore [config temp-path]
  IBlobStorage
  (store [this im value]
    (with-open [w (io/output-stream (io/file temp-path (str (:id im))))]
      (.write w value)))
  (fetch [this im]
    (io/input-stream (io/file temp-path (str (:id im)))))
  component/Lifecycle
  (start [this]
    (let [temp-path (io/file (System/getProperty "java.io.tmpdir") "content_server")]
      (io/make-parents (io/file temp-path "not-used"))
      (assoc this :temp-path temp-path)))
  (stop [this]
    (letfn [(delete-folder [file]
              (when (.isDirectory file)
                (doseq [f (.listFiles file)]
                  (delete-folder f)))
              (io/delete-file file))]
      (delete-folder temp-path))))

(defrecord InMemMetaStore [config value]
  IMetaStorage
  (save [this _owner im]
    (let [rid (::counter @value)
          nim (assoc im :id rid)]
      (swap! value assoc rid nim)
      (swap! value update ::counter inc)
      nim))
  (grab [this _owner id]
    (get @value id))
  (grab [this _owner]
    (vals (dissoc @value ::counter)))
  component/Lifecycle
  (start [this] (assoc this :value (atom {::counter 0})))
  (stop [this] (dissoc this :value)))
