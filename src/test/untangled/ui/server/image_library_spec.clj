(ns untangled.ui.server.image-library-spec
  (:require
    [clojure.java.io :as io]
    [clojure.test :as t]
    [com.stuartsierra.component :as component]
    [taoensso.timbre :as timbre]
    [untangled-spec.core :refer [specification behavior component assertions provided when-mocking]]
    [untangled.ui.server.image-library :as src]
    [untangled.ui.server.image-library.parser :as src.parser]
    [untangled.ui.server.image-library.storage :as src.storage]
    [untangled.ui.server.image-library.image :as src.img]
    [untangled.server.core :as usc])
  (:import
    (clojure.lang ExceptionInfo)
    (java.util Base64)))

(t/use-fixtures
  :once #(timbre/with-merged-config
           {:ns-blacklist ["untangled.ui.server.image-library"]}
           (%)))

(defn test-image-library [& [opts [meta blob]]]
  (-> (src/image-library
        (merge {:owner-fn src/example-owner-fn}
          (or opts {})))
    (assoc ::src.storage/meta
           (component/start (or meta (src.storage/map->InMemMetaStore {}))))
    (assoc ::src.storage/blob
           (component/start (or blob (src.storage/map->FileStore {}))))))

(specification "image-library"
  (behavior "implements component/Lifecycle"
    (provided "once started has :middleware for use in your handler stack"
      (src/image-library-middleware this) => {::middleware? true}
      (assertions
        (:middleware (component/start (test-image-library)))
        =fn=> ::middleware?)))
  (behavior "implements usc/Module"
    (assertions
      "system-key"
      (usc/system-key (test-image-library))
      => ::src/image-library
      "components"
      (usc/components (test-image-library))
      => {}))
  (behavior "implements usc/APIHandler"
    (when-mocking
      (src.parser/build-read this) => {::api-read? true}
      (src.parser/build-mutate this) => {::api-mutate? true}
      (assertions
        (usc/api-read (test-image-library)) =fn=> ::api-read?
        (usc/api-mutate (test-image-library)) =fn=> ::api-mutate?)))
  (behavior "depends on the user to construct a meta and blob store"
    (assertions
      (component/start
        (usc/untangled-system
          {:components {}
           :modules    [(test-image-library)]}))
      =throws=> (ExceptionInfo #"Missing dependency.*blob")
      (component/start
        (usc/untangled-system
          {:components {::src.storage/blob {}}
           :modules    [(test-image-library)]}))
      =throws=> (ExceptionInfo #"Missing dependency.*meta")))
  (behavior "must take an :owner-fn"
    (assertions
      (component/start (src/image-library {}))
      =throws=> (AssertionError #"owner-fn"))))

(defn test-img-middleware [req & [img-lib]]
  (as-> (component/start (or img-lib (test-image-library))) <>
    (:middleware <>)
    (<> (constantly ::src/not-handled))
    (<> req)))

(defn store-image [img-lib params]
  (with-redefs
    [src.img/infer-img-ext (constantly "TEST")]
    (let [api-mutate    (.api-mutate img-lib)
          base64-encode #(.encodeToString (Base64/getEncoder) (.getBytes %))
          {:keys [tempids]} ((:action (api-mutate img-lib 'untangled.component.image-library/store
                                        (update params :content/data base64-encode))))]
      (get tempids (:db/id params)))))

(specification "image-library-middleware"
  (behavior "gets an image at an id"
    (let [test-string "TEST CONTENT PLEASE IGNORE"]
      (when-mocking
        (src.img/crop-image-from x _) => x
        (src.img/as-stream-with-format x _) => (slurp x)
        (assertions
          (test-img-middleware {:uri "asdf"})
          => ::src/not-handled
          (test-img-middleware {:uri "/assets/0"})
          => {:status 404}
          (let [img-lib (test-image-library)
                id      (store-image img-lib {:db/id (rand-int 1e5) :content/data test-string})]
            (test-img-middleware {:uri (str "/assets/" id)} img-lib))
          => {:status  200
              :headers {"Content-Type" "image/TEST"}
              :body    test-string}))))
  (behavior "can request an image to have an certain extension"
    (when-mocking
      (src.img/crop-image-from x _) => x
      (src.img/as-stream-with-format _ img-ext) => img-ext
      (assertions
        (let [img-lib (test-image-library)
              id      (store-image img-lib {:db/id (rand-int 1e5) :content/data "TEST CONTENT PLEASE IGNORE"})]
          (test-img-middleware {:uri (str "/assets/" id ".png")} img-lib))
        => {:status  200
            :headers {"Content-Type" "image/png"}
            :body    "png"})))
  (behavior "image path prefix is modifiable"
    (assertions
      (test-img-middleware {:uri "/assets/0"}
        (test-image-library {:assets-root "/images/"}))
      => ::src/not-handled
      (test-img-middleware {:uri "/images/0"}
        (test-image-library {:assets-root "/images/"}))
      => {:status 404}))
  (component ":owner-fn"
    (provided "takes an ImageMeta, and returns one with an :owner"
      (src.img/crop-image-from x _) => x
      (src.img/as-stream-with-format x _) => (slurp x)
      (assertions "all other usages of the ImageMeta will have an :owner"
        (let [test-owner-fn (fn [this im]
                              (assertions "called with the ImageLibrary (and :request) as the env"
                                (set (keys this)) => #{:request :assets-root :auth-fn :owner-fn
                                                       ::src.storage/meta ::src.storage/blob})
                              (assoc im :owner ::test-owner))
              test-auth-fn  (fn [this im loc]
                              (assertions ":auth-fn asserts that the request is auth(enticat|oriz)ed"
                                (:owner im) => ::test-owner)
                              (assert (= (:owner im) ::test-owner)))
              test-meta     (reify
                              src.storage/IMetaStorage
                              (grab [this im]
                                (assertions (:owner im) => ::test-owner)
                                im))
              test-blob     (reify
                              src.storage/IBlobStorage
                              (fetch [this im]
                                (assertions (:owner im) => ::test-owner)
                                (io/input-stream (.getBytes "PLEASE IGNORE"))))
              img-lib       (test-image-library {:owner-fn test-owner-fn :auth-fn test-auth-fn}
                              [test-meta test-blob])]
          (:status (test-img-middleware {:uri "/assets/1337"} img-lib)))
        => 200))))
