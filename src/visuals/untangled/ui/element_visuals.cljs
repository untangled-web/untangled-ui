(ns untangled.ui.element-visuals
  (:require
    [devcards.core :as dc :refer-macros [defcard]]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.ui.elements :as ele]
    [untangled.i18n :as i :refer [tr trf]]))

(defcard tooltips
  (dom/div nil
    (dom/button (clj->js (ele/add-tooltip {} :label "Hi!")) "Label")
    ))

(defcard card
  (dom/div nil
    (ele/add-card {:type :round} (dom/p nil "round card no title"))
    (ele/add-card {:type :transparent :title "Transparent Card Title"})
    (ele/add-card {:type :ruled :title-bar true :title "Ruled Title"} (dom/p nil "Text for ruled card"))))