(ns untangled.components.server.image-library.parser
  (:require
    [untangled.components.server.image-library.storage :as storage])
  (:import
    (java.util Base64)))

(defn decode-base64 [data]
  (.decode (Base64/getDecoder) data))

(defn build-mutates [{:keys [owner-fn auth-fn]}]
  {'untangled.component.image-library/store
   (fn [env k params]
     {:action
      (fn []
        (let [params (update params :content/data decode-base64)
              im (owner-fn env (storage/make-image-meta params))]
          (auth-fn env im :store)
          (let [img-meta (storage/save (::storage/meta env) im)]
            (storage/store (::storage/blob env) img-meta (:content/data params))
            {:tempids {(:db/id params) (:id img-meta)}})))})})

(defn build-reads [{:keys [auth-fn owner-fn]}]
  {:images
   (fn [env k params]
     (let [im (owner-fn env (storage/make-image-meta params))]
       (auth-fn env im :read-all)
       {:value (mapv storage/unravel-image-meta (storage/grab (::storage/meta env) im))}))})
