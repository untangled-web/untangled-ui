(ns untangled.components.server.image-library
  (:require
    [clojure.edn :as edn]
    [clojure.java.io :as io]
    [clojure.set :as set]
    [com.stuartsierra.component :as component]
    [om.next.server :as oms]
    [taoensso.timbre :as timbre]
    [untangled.components.server.image-library.image :as img]
    [untangled.components.server.image-library.parser :as parser]
    [untangled.components.server.image-library.storage :as storage])
  (:import
    (javax.imageio ImageIO)
    (java.util Arrays Base64)
    (java.io ByteArrayInputStream)))

(defn get-ext [desired-ext actual-ext _opts]
  ;;TODO use opts to tell if we're outside the image & => need png
  (if (#{"gif"} actual-ext) actual-ext
    (if desired-ext desired-ext actual-ext)))

(defn build-extra-routes [{:keys [assets-path auth-fn owner-fn]}]
  (let [id+ext-regex #"(\d+)\.?(\w+)?"]
    {:routes [assets-path {[:id] ::assets}]
     :handlers
     {::assets
      (fn [{:as env :keys [request]} {{:keys [id]} :route-params}]
        ;;FIXME: workaround because https://github.com/juxt/bidi/issues/141
        (when-let [[_ id ext] (re-find id+ext-regex id)]
          (let [im (->> id edn/read-string (hash-map :id) storage/map->ImageMeta)]
            (let [im (owner-fn env im)
                  opts (into {} (mapv (comp #(update % 0 keyword)
                                        #(update % 1 (comp edn/read-string (partial re-find #"\d+"))))
                                  (:query-params request)))]
              (timbre/debug {:opts opts, :im im :id id})
              (auth-fn env im :read)
              (if-let [meta-info (->> im (storage/grab (::storage/meta env))
                                   (timbre/spy :debug "meta-info"))]
                (let [img-ext (get-ext ext (:extension meta-info) opts)]
                  {:status  200
                   :headers {"Content-Type" (str "image/" img-ext)}
                   :body    (-> (storage/fetch (::storage/blob env) meta-info)
                              (img/crop-image-from opts)
                              (img/as-stream-with-format img-ext))})
                {:status 404})))))}}))

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
  {::storage/meta (build-switcher (or meta-deps [:config])
                    (some-fn meta-fn
                             (fn [_] ["in-memory meta store" storage/map->InMemMetaStore])))
   ::storage/blob (build-switcher (or blob-deps [:config])
                    (some-fn blob-fn
                             (fn [_] ["file-system blob store" storage/map->FileStore])))})

(defn example-owner-fn [_env im]
  (assoc im :owner "Example Owner"))

(defn with-defaults [params defaults]
  (merge defaults params))

(defn image-library [params]
  (let [params (with-defaults params
                 {:auth-fn (fn [env im loc] :ok)
                  :assets-path "/assets/"
                  :meta-fn (constantly nil)
                  :blob-fn (constantly nil)})
        components (build-components params)]
    {:components components
     :parser-injections (keys components)
     :parser {:reads (parser/build-reads params)
              :mutates (parser/build-mutates params)}
     :extra-routes (build-extra-routes params)}))
