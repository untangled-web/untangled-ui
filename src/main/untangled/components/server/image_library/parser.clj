(ns untangled.components.server.image-library.parser
  (:require
    [untangled.components.server.image-library.storage :as storage])
  (:import
    (java.util Base64)))

(defn decode-base64 [data]
  (.decode (Base64/getDecoder) data))

(defn chain-parser [this chain disp-map]
  (fn [env k params]
    ((if-let [F (get disp-map k)]
       (partial F (merge env this))
       (partial chain env))
     k params)))

(defn build-mutate [{:keys [owner-fn auth-fn] :as this} M]
  (chain-parser this M
    {'untangled.component.image-library/store
     (fn [env k params]
       {:action
        (fn []
          (let [params (update params :content/data decode-base64)
                im (owner-fn env (storage/make-image-meta params))]
            (auth-fn env im :store)
            (let [img-meta (storage/save (::storage/meta env) im)]
              (storage/store (::storage/blob env) img-meta (:content/data params))
              {:tempids {(:db/id params) (:id img-meta)}})))})}))

(defn build-read [{:keys [auth-fn owner-fn] :as this} R]
  (chain-parser this R
    {:images
     (fn [env k params]
       (let [im (owner-fn env (storage/make-image-meta params))]
         (auth-fn env im :read-all)
         {:value (mapv storage/unravel-image-meta (storage/grab (::storage/meta env) im))}))}))
