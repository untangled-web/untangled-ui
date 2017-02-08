(ns untangled.components.server.image-library.parser-spec
  (:require
    [com.stuartsierra.component :as component]
    [untangled-spec.core :refer [specification behavior component assertions]]
    [untangled.components.server.image-library.parser :as src]
    [untangled.components.server.image-library :as src.lib]
    [untangled.components.server.image-library.image :as src.img]
    [untangled.components.server.image-library.storage :as src.storage]
    [untangled.server.core :as usc])
  (:import
    (java.util Base64)))

(defn test-image-library [& [opts [meta blob]]]
  (-> (src.lib/image-library
        (merge {:owner-fn src.lib/example-owner-fn}
          (or opts {})))
    (assoc ::src.storage/meta
           (component/start (or meta (src.storage/map->InMemMetaStore {}))))
    (assoc ::src.storage/blob
           (component/start (or blob (src.storage/map->FileStore {}))))))

(defn store-image [img-lib params]
  (with-redefs
    [src.img/infer-img-ext (constantly "TEST")]
    (let [api-mutate    (.api-mutate img-lib)
          base64-encode #(.encodeToString (Base64/getEncoder) (.getBytes %))
          {:keys [tempids]} ((:action (api-mutate img-lib 'untangled.component.image-library/store
                                        (update params :content/data base64-encode))))]
      (get tempids (:db/id params)))))

(specification "build-mutate"
  (component "'untangled.component.image-library/store"
    (assertions
      "the image should in the params be under :content/data base 64 encoded"
      (with-redefs
        [src.img/infer-img-ext (constantly "TEST")]
        (let [img-lib (test-image-library)]
          ((:action ((.api-mutate img-lib) img-lib 'untangled.component.image-library/store
                      {:db/id (rand-int 1e6) :content/data "(*&@#%NM<DSV:SL#PO%_@"})))))
      =throws=> (IllegalArgumentException #"Illegal base64 character")
      "returns a tempids mapping"
      (store-image (test-image-library) {:db/id (rand-int 1e6) :content/data "hello"}) => 0
      "relies on owner-fn and auth-fn for ownership and authorization"
      (let [owner-fn (fn [_ im]
                       (assertions (:id im) => 42)
                       (assoc im :owner "test owner"))
            auth-fn  (fn [_ im loc]
                       (assertions
                         (:id im) => 42
                         (:owner im) => "test owner"
                         loc => :store))]
        (store-image (test-image-library
                       {:owner-fn owner-fn
                        :auth-fn  auth-fn})
          {:db/id 42 :content/data "hello"}))
      => 0
      "if it does not handle the dispatch-key it return nil"
      (let [img-lib (test-image-library)]
        ((.api-mutate img-lib) img-lib ::should-not-handle {}))
      => nil)))

(defn read-images [img-lib]
  (:value ((.api-read img-lib) img-lib :images {})))

(specification "build-read"
  (component ":images"
    (let [owner-fn (fn [_ im]
                     (assoc im :owner "test owner"))
          auth-fn  (fn [_ im loc]
                     (assertions
                       (:owner im) => "test owner"
                       loc =fn=> #{:store :read-all}))]
      (assertions
        "reads all the images currently stored"
        0 => 0
        "relies on owner-fn and auth-fn for ownership and authorization"
        (let [img-lib (test-image-library
                        {:owner-fn owner-fn
                         :auth-fn  auth-fn})]
          (store-image img-lib
            {:db/id 42 :content/data "hello"})
          (read-images img-lib))
        => [{:db/id            0
             :image/owner      "test owner"
             :image/name       nil
             :image/size       nil
             :image/dimensions nil
             :image/extension  "TEST"}]
        "if it does not handle the dispatch-key it return nil"
        (let [img-lib (test-image-library)]
          ((.api-read img-lib) img-lib ::should-not-handle {})) => nil))))
