(ns untangled.ui.card-visuals
  (:require [untangled.ui.card :as c]
            [om.dom :as dom]
            [devcards.core :as dc :refer-macros [defcard]]
            ))


(defcard card-visual-regressions
  (dom/div nil
    (c/ui-card {}
      (dom/div nil "Content"))

    (c/ui-card {:active true}
      (dom/div nil "Content"))

    (c/ui-card {:title "Hey There"}
      (dom/div nil "Content"))

    (c/ui-card {:type :rounded}
      (dom/div nil "Content"))

    (c/ui-card {:type :transparent}
      (dom/div nil "Content"))

    (c/ui-card {:type :zone}
      (dom/div nil "Content"))

    (c/ui-card {:type :ruled}
      (dom/div nil "Content")
      (dom/div nil "Content")
      (dom/div nil "Content")
      (dom/div nil "Content")
      (dom/div nil "Content"))

    (c/ui-card {:type :ruled-zone}
      (dom/div nil "Content"))

    (c/ui-card {:density :inset}
      (dom/div nil "Content"))

    (c/ui-card {:density :collapse}
      (dom/div nil "Content"))
    ))

