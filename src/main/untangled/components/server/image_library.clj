(ns untangled.components.server.image-library
  (:require
    [om.next.server :as oms]
    [clojure.edn :as edn]
    [com.stuartsierra.component :as component]
    [clojure.java.io :as io]
    [clojure.set :as set]
    [image-resizer.util :as img-util]
    [image-resizer.core :as img-core]
    [image-resizer.format :as img-format])
  (:import
    (javax.imageio ImageIO)
    (java.util Arrays Base64)
    (java.io ByteArrayInputStream)))

;; STORAGE

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

;; READS & MUTATES

(defn decode-base64 [data]
  (.decode (Base64/getDecoder) data))

(defn build-mutates [{:keys [owner-fn auth-fn]}]
  {'untangled.component.image-library/store
   (fn [env k _params]
     {:action
      (fn []
        (let [params (update _params :content/data decode-base64)]
          (auth-fn env params)
          (let [[owner params] (owner-fn env params)
                img-meta (save (::meta env) owner (make-image-meta params))]
            (store (::blob env) img-meta (:content/data params))
            {:tempids {(:db/id params) (:id img-meta)}})))})})

(defn build-reads [{:keys [owner-fn]}]
  {:images
   (fn [env k params]
     (let [[owner _params] (owner-fn env params)]
       {:value (mapv unravel-image-meta (grab (::meta env) owner))}))})

;; IMAGE

(defn animated-gif? [data]
  (let [bitvalue (bit-and (bit-and (nth data 10) 0x000000ff) 2r111)
        global-len (* 3 (Math/pow 2 (+ 1 bitvalue)))
        netscape-bytes (byte-array [33 255 11, 78 69 84 83 67 65 80 69 50, 46 48]) ;; NETSCAPE2.0
        animexts-bytes (byte-array [33 255 11, 65 78 73 77 69 88 84 83 49, 46 48]) ;; ANIMEXTS1.0
        simmons-bytes  (byte-array [33 255 11, 83 73 77 77 79 78 83 52 50, 46 48]) ;; SIMMONS42.0
        app-ext-block  (byte-array (take 14 (drop (+ 13 global-len) data)))]
    (boolean
      (some #(Arrays/equals app-ext-block %)
            [netscape-bytes animexts-bytes simmons-bytes]))))

(defn as-stream-with-format [this fmt]
  (img-format/as-stream this fmt))

(defn get-dimensions [this]
  (->> this
       img-util/dimensions
       (zipmap [:width :height])))

(defn crop-image-from [this {:as opts :keys [x1 y1 x2 y2 width height]
                             :or {x1 0 y1 0}}]
  (assert (every? number? (vals opts)))
  (let [buf-img (img-util/buffered-image this)
        dims ((juxt :width :height) (get-dimensions buf-img))
        [x2 y2] (if (and x2 y2) [x2 y2] dims)
        w-h (/ (- x2 x1) (- y2 y1))
        resize-dimensions (cond
                            height [(* w-h height) height]
                            width [width (* width (/ 1 w-h))]
                            :else [(- x2 x1) (- y2 y1)])]
    (as-> buf-img <>
          (img-core/crop-from <> x1 y1 (- x2 x1) (- y2 y1))
          (apply img-core/resize <> resize-dimensions))))

;; SYSTEM
(defn get-ext [[_ _ ext] act-ext _opts]
  ;;TODO use opts to tell if we're outside the image & => need png
  (if (#{"gif"} act-ext) act-ext
    (if ext ext act-ext)))

(defn build-extra-routes [{:keys [assets-path auth-fn owner-fn]}]
  (let [id+ext-regex #"(\d+)\.?(\w+)?"]
    {:routes [assets-path {[id+ext-regex :id] ::assets}]
     :handlers
     {::assets
      (fn [{:as env :keys [request]} {{:keys [id]} :route-params}]
        (auth-fn env {:db/id id})
        (let [owner (first (owner-fn env {:db/id id}))
              opts (into {} (mapv (comp #(update % 0 keyword)
                                    #(update % 1 (comp edn/read-string (partial re-find #"\d+"))))
                              (:query-params request)))
              rid (second (re-find id+ext-regex id))]
          (if-let [meta-info (->> rid edn/read-string
                               (grab (::meta env) owner))]
            (let [img-ext (get-ext
                            (re-find id+ext-regex id)
                            (:extension meta-info)
                            opts)]
              {:status  200
               :headers {"Content-Type" (str "image/" img-ext)}
               :body    (-> (fetch (::blob env) meta-info)
                          (crop-image-from opts)
                          (as-stream-with-format img-ext))})
            {:status 404})))}}))

(defrecord Switcher [switch-fn]
  component/Lifecycle
  (start [this]
    (let [[comp-name comp-builder] (switch-fn this)
          component (component/start (comp-builder (dissoc this :switch-fn)))]
      component))
  (stop [this]
    (component/stop this)))
(defn build-switcher [deps switch-fn]
  (component/using
    (map->Switcher {:switch-fn switch-fn})
    deps))

(defn build-components [{:keys [meta-deps blob-deps meta-fn blob-fn]}]
  {::meta (build-switcher (or meta-deps [:config])
            (or meta-fn
                (fn [_] ["in-memory meta store" map->InMemMetaStore])))
   ::blob (build-switcher (or blob-deps [:config])
            (or blob-fn
                (fn [_] ["file-system blob store" map->FileStore])))})

(defn example-owner-fn [_ {:as params :keys [owner]}]
  (if owner
    [owner params]
    ["Scrooge McDuck" (assoc params :image/owner "Scrooge McDuck")]))

(defn image-library [params]
  (let [params (merge {:auth-fn (fn [env params] :ok)
                       :assets-path "/assets/"}
                      params)
        components (build-components params)]
    {:components components
     :parser-injections (keys components)
     :parser {:reads (build-reads params)
              :mutates (build-mutates params)}
     :extra-routes (build-extra-routes params)}))
