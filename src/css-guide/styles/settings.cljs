(ns styles.settings
  (:require [om.next :as om :refer-macros [defui]]
    ;; NOTE: This is where the interesting macros and such are at:
            [styles.util :as util
             :refer [to-cljs]
             :refer-macros [source->react defexample defarticle]]
            [om.dom :as dom]
            [clojure.string :as str]))


(def sections
  (vec [;; NOTE: :examples is a list of example names, rendered in order given
        ]))
