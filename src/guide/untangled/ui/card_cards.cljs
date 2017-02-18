(ns untangled.ui.card-cards
  (:require
    [devcards.core :as dc :refer-macros [defcard defcard-doc parse-card-args]]
    [devcards.util.utils :as utils]
    [untangled.ui.sample-card :refer-macros [sample-card]]
    [om.dom :as dom]
    [untangled.ui.card :as c]
    [untangled.ui.elements :as ele]
    [untangled.client.core :as uc]))

(defcard-doc
  "# Card

   A card compontent applies syling to ui elements that represent a card

  ```
    (c/ui-card {:active true/false
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

(sample-card ui-card "ui-card"
  (c/ui-card {}
    (dom/div nil "Content")))

(sample-card active-card "Active Card"
  (c/ui-card {:active true}
    (dom/div nil "Content")))

(sample-card title "Title"
  (c/ui-card {:title "Hey There"}
    (dom/div nil "Content")))

(sample-card rounded "Rounded"
  (c/ui-card {:type :rounded}
    (dom/div nil "Content")))

(sample-card transparent "Transparent"
  (c/ui-card {:type :transparent}
    (dom/div nil "Content")))

(sample-card zone "Zone"
  (c/ui-card {:type :zone}
    (dom/div nil "Content")))

(sample-card ruled "Ruled"
  (c/ui-card {:type :ruled}
    (dom/div nil "Content")
    (dom/div nil "Content")
    (dom/div nil "Content")
    (dom/div nil "Content")
    (dom/div nil "Content")))

(sample-card ruled-zone "Ruled Zone"
  (c/ui-card {:type :ruled-zone}
    (dom/div nil "Content")))

(sample-card density-inset "Density Inset"
  (c/ui-card {:density :inset}
    (dom/div nil "Content")))

(sample-card density-collapse "Density Collapse"
  (c/ui-card {:density :collapse}
    (dom/div nil "Content")))
