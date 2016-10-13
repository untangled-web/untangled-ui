(ns untangled.components.server.image-library.parser
  (:require
    [untangled.components.server.image-library.storage :as storage])
  (:import
    (java.util Base64)))

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
                img-meta (storage/save (::storage/meta env) owner (storage/make-image-meta params))]
            (storage/store (::storage/blob env) img-meta (:content/data params))
            {:tempids {(:db/id params) (:id img-meta)}})))})})

(defn build-reads [{:keys [owner-fn]}]
  {:images
   (fn [env k params]
     (let [[owner _params] (owner-fn env params)]
       {:value (mapv storage/unravel-image-meta (storage/grab (::storage/meta env) owner))}))})
