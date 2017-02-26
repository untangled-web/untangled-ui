(ns untangled.ui.card-cards
  (:require
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [devcards.util.utils :as utils]
    [untangled.ui.sample-card :refer [defsample]]
    [om.dom :as dom]
    [untangled.ui.elements :as ele]
    [untangled.client.core :as uc]))

(defcard-doc
  "# Card

   A card compontent applies syling to ui elements that represent a card

  ```
    (ele/ui-card {:active true/false
                :title \"Some Title\"
                :type :rounded
                        or :transparent
                        or :ruled
                        or :zone
                        or :ruled-zone
                 :density :collapse
                        or :inset}
    ...)
  ```
  ")

(defsample ui-card "ui-card"
  (ele/ui-card {}
    (dom/div nil "Content")))

(defsample active-card "Active Card"
  (ele/ui-card {:active true}
    (dom/div nil "Content")))

(defsample title "Title"
  (ele/ui-card {:title "Hey There"}
    (dom/div nil "Content")))

(defsample rounded "Rounded"
  (ele/ui-card {:type :rounded}
    (dom/div nil "Content")))

(defsample transparent "Transparent"
  (ele/ui-card {:type :transparent}
    (dom/div nil "Content")))

(defsample zone "Zone"
  (ele/ui-card {:type :zone}
    (dom/div nil "Content")))

(defsample ruled "Ruled"
  (ele/ui-card {:type :ruled}
    (dom/div nil "Content")
    (dom/div nil "Content")
    (dom/div nil "Content")
    (dom/div nil "Content")
    (dom/div nil "Content")))

(defsample ruled-zone "Ruled Zone"
  (ele/ui-card {:type :ruled-zone}
    (dom/div nil "Content")))

(defsample density-inset "Density Inset"
  (ele/ui-card {:density :inset}
    (dom/div nil "Content")))

(defsample density-collapse "Density Collapse"
  (ele/ui-card {:density :collapse}
    (dom/div nil "Content")))
