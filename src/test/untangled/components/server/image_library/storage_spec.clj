(ns untangled.components.server.image-library.storage-spec
  (:require
    [clojure.java.io :as io]
    [com.stuartsierra.component :as component]
    [untangled-spec.core :refer [specification behavior assertions when-mocking]]
    [untangled.components.server.image-library.storage :as src]
    [untangled.server.core :as usc]))

(def example-image-meta-params
  {:db/id 123 :image/owner "owner"
   :image/name "name" :image/size "size"
   :image/dimensions "dimensions"
   :image/extension "extension"})

(specification "make-image-meta"
  (assertions "makes an ImageMeta w/ inferred image extension"
    (src/make-image-meta
      example-image-meta-params)
    => (src/map->ImageMeta
         {:id 123 :owner "owner"
          :name "name" :size "size"
          :dimensions "dimensions"
          :extension "extension"})))
(specification "unravel-image-meta"
  (assertions "turns the ImageMeta back into params"
    (src/unravel-image-meta
      (src/make-image-meta
        example-image-meta-params))
    => example-image-meta-params))

(defn test-file-store [& [opts]]
  (component/start (src/map->FileStore (or opts {}))))
(specification "FileStore"
  (when-mocking
    (io/make-parents file) => nil
    (assertions
      ":tmpdir is configurable, defaults to use ${java.io.tmpdir}"
      (:images-root (test-file-store)) =fn=> #(re-find (re-pattern (System/getProperty "java.io.tmpdir")) (str %))
      (:images-root (test-file-store)) =fn=> #(= java.io.File (type %))
      (:images-root (test-file-store {:tmpdir "/tmp"})) =fn=> #(re-find #"/tmp" (str %))))
  (assertions
    "stores binary data"
    (src/store (test-file-store) (src/make-image-meta {:db/id 0}) "asdf")
    =throws=> (IllegalArgumentException)
    "returns data in an input stream"
    ((juxt identity io/input-stream) (src/fetch (test-file-store) (src/make-image-meta {:db/id 0})))
    =fn=> (partial apply =)
    "on stop it deletes the images folder from :tmpdir"
    (let [fs (test-file-store {:tmpdir "/tmp"})
          id (rand-int 1e6)
          im (src/make-image-meta {:db/id id})]
      (src/store fs im (.getBytes ":ok"))
      (let [before (slurp (src/fetch fs im))]
        (component/stop fs)
        [before (.exists (io/file (:images-root fs)))]))
    => [":ok" false]))

(defn test-meta-store []
  (component/start (src/map->InMemMetaStore {})))

(specification "InMemMetaStore"
  (assertions
    "stores ImageMeta's in itself"
    ((juxt :id :name) (src/save (test-meta-store) (src/make-image-meta {:db/id 0 :image/name "test"})))
    => [0 "test"]
    (let [ms (test-meta-store)
          im (src/save ms (src/make-image-meta {:db/id 0 :image/name "test"}))]
      ((juxt :id :name) (src/grab ms im)))
    => [0 "test"]
    "has an :id counter that auto increments on save"
    (let [ms (test-meta-store)
          _ (src/save ms (src/make-image-meta {:db/id 0 :image/name "really :id 0"}))
          im (src/save ms (src/make-image-meta {:db/id 0 :image/name "really :id 1"}))]
      ((juxt :id :name) (src/grab ms im)))
    => [1 "really :id 1"]))
