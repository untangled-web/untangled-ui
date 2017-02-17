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

(defcard labels-visual-regressions
  (dom/div nil
    (e/ui-label {} "Default")
    (e/ui-label {:color :positive} "Positive")
    (e/ui-label {:color :informative} "Informative")
    (e/ui-label {:color :informative-alt} "Informative Alt")
    (e/ui-label {:color :neutral} "Neutral")
    (e/ui-label {:color :live} "Live")
    (e/ui-label {:color :alterable} "Alterable")
    (e/ui-label {:color :negative} "Negative")
    (e/ui-label {:color :positive} (icon :add) "Add")
    (e/ui-label {:color :negative} (icon :close) "Remove")))
