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

(def element-layout-header
  "# Layouts

  The main layout depends on the `.s-app` class to render a holy grail layout that scales down nicely to mobile.\n\n
 [Use the master layout CodePen](http://codepen.io/stephenway/pen/EKORdr)\n\n
 <svg width=\"725\" height=\"465\" viewBox=\"0 0 725 465\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\"><title>Artboard 1</title><desc>Created with Sketch.</desc><g sketch:type=\"MSArtboardGroup\" fill=\"none\"><g id=\"Group\" sketch:type=\"MSLayerGroup\"><path fill=\"#047\" sketch:type=\"MSShapeGroup\" d=\"M26 31h356v44h-356z\"/><path fill=\"#cef\" sketch:type=\"MSShapeGroup\" d=\"M26 80h77v310h-77z\"/><path fill=\"#FCFCF9\" sketch:type=\"MSShapeGroup\" d=\"M109 80h273v310h-273z\"/><path fill=\"#EEEEE7\" sketch:type=\"MSShapeGroup\" d=\"M26 395h356v44h-356z\"/></g><g sketch:type=\"MSLayerGroup\"><path fill=\"#047\" sketch:type=\"MSShapeGroup\" d=\"M518 31h181.672v44h-181.672z\"/><path fill=\"#FCFCF9\" sketch:type=\"MSShapeGroup\" d=\"M518 80h181.672v262h-181.672z\"/><path fill=\"#EEEEE7\" sketch:type=\"MSShapeGroup\" d=\"M518 395h181.672v44h-181.672z\"/><path fill=\"#CAEEFF\" sketch:type=\"MSShapeGroup\" d=\"M518 346h181.672v44h-181.672z\"/></g><path d=\"M435 248v-30l30 15-30 15z\" fill=\"#EEEEE7\" sketch:type=\"MSShapeGroup\"/></g></svg>\n\nMore on this is available at Mozilla Developer Network's [Holy Grail Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes#Holy_Grail_Layout_example)")

(defexample element-layout
  "### Example"
  (dom/div #js {:className "_example-layout"}
    (dom/div #js {:className "s-app__view"}
      (dom/header #js {:className "o-header"} " Header ")
      (dom/main #js {:className "o-main"}
        (dom/nav #js {:className "o-nav"} " Nav ")
        (dom/article #js {:className "o-article"} " Article "))
      (dom/footer #js {:className "o-footer"} " Footer "))))

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
                       :title "Layouts"
                       :documentation element-layout-header
                       :examples [element-layout]}
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
