(ns styles.patterns
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react defexample defarticle defview]]
            [untangled.icons :as icons]
            [om.dom :as dom]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF EXAMPLES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defarticle none
  "# TODO")


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF SECTIONS (within a feature set...e.g. components)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; NOTE: This is where you add the sections for index
(def sections
  (vec (sort-by :title
                [
                 ; NOTE: :examples is a list of example names, rendered in order given
                 {:id :postfixing
                  :title "TODO"
                  :examples [
                             none
                             ]}
                 ])))
