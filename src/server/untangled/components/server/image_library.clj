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

(defn get-ext [[_ _ ext] act-ext _opts]
  ;;TODO use opts to tell if we're outside the image & => need png
  (if (#{"gif"} act-ext) act-ext
    (if ext ext act-ext)))

(defn build-extra-routes [{:keys [assets-path auth-fn owner-fn]}]
  (let [id+ext-regex #"(\d+)\.?(\w+)?"]
    {:routes [assets-path {[:id] ::assets}]
     :handlers
     {::assets
      (fn [{:as env :keys [request]} {{:keys [id]} :route-params}]
        ;;FIXME: workaround because https://github.com/juxt/bidi/issues/141
        (when-let [[_ id ext] (re-find #"(\d+)\.?(\w+)?" id)]
          (auth-fn env {:db/id id})
          (let [owner (first (owner-fn env {:db/id id}))
                opts (into {} (mapv (comp #(update % 0 keyword)
                                      #(update % 1 (comp edn/read-string (partial re-find #"\d+"))))
                                (:query-params request)))
                rid (second (re-find id+ext-regex id))]
            (timbre/debug {:rid rid, :opts opts, :owner owner :id id})
            (if-let [meta-info (->> rid edn/read-string
                                 (storage/grab (::storage/meta env) owner)
                                 (timbre/spy :debug "meta-info"))]
              (let [img-ext (get-ext
                              (re-find id+ext-regex id)
                              (:extension meta-info)
                              opts)]
                {:status  200
                 :headers {"Content-Type" (str "image/" img-ext)}
                 :body    (-> (storage/fetch (::storage/blob env) meta-info)
                            (img/crop-image-from opts)
                            (img/as-stream-with-format img-ext))})
              {:status 404}))))}}))

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
  {::storage/meta (build-switcher (or meta-deps [:config])
            (or meta-fn
                (fn [_] ["in-memory meta store" storage/map->InMemMetaStore])))
   ::storage/blob (build-switcher (or blob-deps [:config])
            (or blob-fn
                (fn [_] ["file-system blob store" storage/map->FileStore])))})

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
     :parser {:reads (parser/build-reads params)
              :mutates (parser/build-mutates params)}
     :extra-routes (build-extra-routes params)}))
