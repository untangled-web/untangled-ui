(ns untangled.components.server.image-library.parser
  (:require
    [untangled.components.server.image-library.storage :as storage])
  (:import
    (java.util Base64)))

(defn decode-base64 [data]
  (.decode (Base64/getDecoder) data))

(defn build-mutate [{:keys [owner-fn auth-fn] :as this}]
  (fn [env k params]
    (case k
      'untangled.component.image-library/store
      {:action
       (fn []
         (let [params (update params :content/data decode-base64)
               im (owner-fn env (storage/make-image-meta params))]
           (auth-fn env im :store)
           (let [img-meta (storage/save (::storage/meta env) im)]
             (storage/store (::storage/blob env) img-meta (:content/data params))
             {:tempids {(:db/id params) (:id img-meta)}})))} )))

(defn build-read [{:keys [auth-fn owner-fn] :as this}]
  (fn [env k params]
    (case k
      :images
      (let [im (owner-fn env (storage/make-image-meta params))]
        (auth-fn env im :read-all)
        {:value (mapv storage/unravel-image-meta (storage/grab (::storage/meta env) im))}))))
