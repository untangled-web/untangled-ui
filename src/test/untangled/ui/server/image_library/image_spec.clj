(ns untangled.ui.server.image-library.image-spec
  (:require
    [clojure.java.io :as io]
    [com.stuartsierra.component :as component]
    [image-resizer.util :as img-util]
    [untangled-spec.core :refer [specification behavior component assertions]]
    [untangled.ui.server.image-library.image :as src]
    [untangled.server.core :as usc])
  (:import
    (org.apache.commons.io IOUtils)))

(def get-img
  (comp #(IOUtils/toByteArray %) io/input-stream io/resource))

(specification "infer-img-ext"
  (behavior "infers the extension of an image in a byte array"
    (assertions
      (src/infer-img-ext (get-img "test/babyturtle6.jpeg"))
      => "jpeg"
      (src/infer-img-ext (get-img "test/kermit.png"))
      => "png"
      ((juxt src/infer-img-ext src/animated-gif?) (get-img "test/mogli.gif"))
      => ["gif" true]
      ((juxt src/infer-img-ext src/animated-gif?) (get-img "test/sunflower.gif"))
      => ["gif" false])))

(defn test-image-xf [path & [xf]]
  (-> path io/resource img-util/buffered-image ((or xf identity)) src/get-dimensions))

(specification "process image"
  (assertions
    "gets dimensions of image stream"
    (test-image-xf "test/mogli.gif")
    => {:width 500 :height 284}
    "TODO: src/crop-image-from"
    :todo => :todo))
