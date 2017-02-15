(ns styles.elements
  (:require [om.next :as om :refer-macros [defui]]
    ;; NOTE: This is where the interesting macros and such are at:
            [styles.util :as util
             :refer [to-cljs]
             :refer-macros [source->react defexample]]
            [om.dom :as dom]))

(defexample element-button
  "# Button
  A simple button element"
  (dom/span #js {}
    (dom/button #js {} "Normal")
    (dom/button #js {:disabled true} "Disabled")
    (dom/button #js {:type "submit"} "Submit")
    (dom/button #js {:type "reset"} "Reset")))

(def element-form-header
  "# Input
  Basic styles for form elements like `input`, `select` and `label`")

(defexample element-input
  "### Example"
  (dom/div #js {}
    (dom/label #js {:htmlFor "input-1"} "Label")
    (dom/input #js {:id "input-1" :type "text" :placeholder "Input"})
    ))

(defexample element-select
  "# Select box"
  (dom/div nil
    (dom/label #js {:htmlFor "select-1"} "Select")
    (dom/select #js {:id "select-1"}
      (dom/option #js {} "Option 1")
      (dom/option #js {} "Option 2")
      (dom/option #js {} "Option 3"))))

(def element-image-header "This section covers how we handle images. By default all `<img>` tags are 100% wide.")

(defexample element-image
  "# Image"
  (dom/img #js {:src    "/img/candy.jpeg"
                :alt    "generic image"
                :height "80"}))


(def element-headings-header
  "# Headings

  All headings are the same size from the start, so we can concentrate on semantics out of the gate without having to
  worry about what size the heading will be. This is better than overwriting it with more styles, or choosing the wrong
  semantic heading to make it look right based on what size it gives you.")

(defexample element-headings
  "### Example"

  (dom/div nil
    (dom/h1 nil "The quick, brown fox (20px)")
    (dom/h2 nil "The quick, brown fox (20px)")
    (dom/h3 nil "The quick, brown fox (20px)")
    (dom/h4 nil "The quick, brown fox (20px)")
    (dom/h5 nil "The quick, brown fox (20px)")
    (dom/h6 nil "The quick, brown fox (20px)")))

(defexample element-text
  "# Text"
  (dom/div #js {:className "is-featured"}
    (dom/p nil "For the execution of the voyage to the Indies, I did not make use of intelligence, mathematics or maps. (24px)") " "
    (dom/p nil "After having dispatched a meal, I went ashore, and found no habitation save a single house, and that without an occupant; we had no doubt that the people had fled in terror at our approach, as the house was completely furnished. (16px)")))

(defexample element-lists
  "# Lists"
  (dom/div nil
    (dom/ol nil
      (dom/li nil "This is how an ordered list looks.")
      (dom/li nil "I am struggling to say anything more about them.")
      (dom/li nil "That brings us to the next type of list…"))
    (dom/ul nil
      (dom/li nil "This is how an unordered list looks.")
      (dom/li nil "I am struggling to say anything more about them.")
      (dom/li nil "That brings us to tiny copy…"))))

(def sections (vec (sort-by :title
                     [;; NOTE: :examples is a list of example names, rendered in order given
                      ;; {:id :forms :title "Button" :examples [button]}
                      {:id :forms
                       :title "Input"
                       :documentation element-form-header
                       :examples [element-input]}
                      {:id :forms
                       :title "Select"
                       :examples [element-select]}
                      ;; {:id :images :title "Images" :examples [element-image] :documentation image-header}
                      {:id :layouts
                       :title "Headings"
                       :documentation element-headings-header
                       :examples [element-headings]}
                      {:id :typographies
                       :title "Text"
                       :examples [element-text]}
                      {:id :typographies
                       :title "List"
                       :examples [element-lists]}
                      ])))
