(ns untangled.ui.element-visuals
  (:require
    [devcards.core :as dc :refer-macros [defcard]]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.ui.menu :as dropdowns :refer [menu menu-item]]
    [untangled.ui.elements :as e]
    [untangled.icons :refer [icon]]
    [untangled.i18n :as i :refer [tr trf]]))

(defcard buttons-visual-regression-testing
  (dom/div nil
    (for [shape #{:default :large :xlarge :round :wide}
          color #{:default :secondary :alert :passive :text :anchor}]
      (e/ui-button {:className "extra" :shape shape :color color} (str shape color)))
    (e/ui-button {} "Label" (icon :arrow_forward))
    (e/ui-button {} (icon :arrow_back) "Label")))

(defcard badges-visual-regressions
  (dom/div nil
    (e/ui-button {} "Notifications " (e/ui-badge {} "8"))
    (e/ui-badge {:className "hello"} "7")
    (e/ui-badge {} (icon :arrow_back))
    (e/ui-badge {} (icon :arrow_back) (icon :arrow_forward))))

(defcard messages-for-visual-regressions
         "Messages are decorated via a normal function.  The properties are a normal clj(s) map that can contain any of the normal HTML/React attributes"
         (dom/div nil
                  (e/ui-message {} "This is default message.")
                  (e/ui-message {:className "a b c" :color :neutral} "This is a neutral message.")
                  (e/ui-message {:color :alert} "This is an alert message.")
                  (e/ui-message {:color :success} "This is a success message.")
                  (e/ui-message {:color :warning} "This is a warning message.")
                  (e/ui-message {:color :warning} "This is a warning message with another child." (icon :arrow_forward))))
