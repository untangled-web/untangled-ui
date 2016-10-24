(ns untangled.components.server.image-library
  (:require
    [clojure.edn :as edn]
    [clojure.java.io :as io]
    [clojure.set :as set]
    [clojure.string :as str]
    [com.stuartsierra.component :as component]
    [om.next.server :as oms]
    [taoensso.timbre :as timbre]
    [untangled.components.server.image-library.image :as img]
    [untangled.components.server.image-library.parser :as parser]
    [untangled.components.server.image-library.storage :as storage]
    [untangled.server.core :as usc])
  (:import
    (javax.imageio ImageIO)
    (java.util Arrays Base64)
    (java.io ByteArrayInputStream)))

(defn image-library-middleware [{:as this :keys [assets-root auth-fn owner-fn]}]
  (let [id+ext-regex #"(\d+)\.?(\w+)?"]
    (fn [handler]
      (fn [request]
        (if-not (re-find (re-pattern assets-root) (:uri request)) (handler request)
          (when-let [[_ id ext] (re-find id+ext-regex (str/replace (:uri request) assets-root ""))]
            (let [env (assoc this :request request)
                  im (->> id edn/read-string (hash-map :id) storage/map->ImageMeta)]
              (let [im (owner-fn env im)
                    opts (into {} (mapv (comp #(update % 0 keyword)
                                          #(update % 1 (comp edn/read-string (partial re-find #"\d+"))))
                                    (:query-params request)))]
                (timbre/debug {:opts opts, :im im :id id})
                (auth-fn env im :read)
                (if-let [meta-info (->> im (storage/grab (::storage/meta this))
                                     (timbre/spy :debug "meta-info"))]
                  (let [img-ext (img/get-ext ext (:extension meta-info) opts)]
                    {:status  200
                     :headers {"Content-Type" (str "image/" img-ext)}
                     :body    (-> (storage/fetch (::storage/blob this) meta-info)
                                (img/crop-image-from opts)
                                (img/as-stream-with-format img-ext))})
                  {:status 404})))))))))

(defrecord Switcher [switch-fn]
  component/Lifecycle
  (start [this]
    (let [[comp-name comp-builder] (switch-fn this)
          component (component/start (comp-builder (dissoc this :switch-fn)))]
      (timbre/debug "Started the" comp-name "component.")
      component))
  (stop [this]
    (component/stop this)))
(defn build-switcher [deps switch-fn]
  (component/using
    (map->Switcher {:switch-fn switch-fn})
    deps))

(defn build-components [{:keys [meta-deps blob-deps meta-fn blob-fn]}]
  {::storage/meta (build-switcher meta-deps
                    (some-fn meta-fn
                             (fn [_] ["in-memory meta store" storage/map->InMemMetaStore])))
   ::storage/blob (build-switcher blob-deps
                    (some-fn blob-fn
                             (fn [_] ["file-system blob store" storage/map->FileStore])))})

(defn example-owner-fn [_this im]
  (assoc im :owner "Example Owner"))

(defn with-defaults [params defaults]
  (merge defaults params))

(defrecord ImageLibrary [meta-deps blob-deps assets-root]
  usc/Module
  (system-key [this] ::image-library)
  (components [this] (build-components this))
  usc/APIHandler
  (api-read [this R] (parser/build-read this R))
  (api-mutate [this M] (parser/build-mutate this M))
  component/Lifecycle
  (stop [this] this)
  (start [this]
    (assoc this :middleware
      (image-library-middleware this))))

(defn image-library [opts]
  (assert (fn? (:owner-fn opts)))
  (component/using
    (map->ImageLibrary
      (with-defaults
        (select-keys opts
          [:meta-fn :meta-deps
           :blob-fn :blob-deps
           :auth-fn :owner-fn
           :assets-root])
        {:auth-fn (fn [this im loc] :ok)
         :assets-root "/assets/"
         :meta-fn (constantly nil)
         :meta-deps []
         :blob-fn (constantly nil)
         :blob-deps []}))
    [::storage/blob ::storage/meta]))
