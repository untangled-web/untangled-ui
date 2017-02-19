(ns untangled.ui.card-visuals
  (:require
    [om.dom :as dom]
    [devcards.core :as dc :refer-macros [defcard]]
    [untangled.ui.elements :as ele]))


(defcard card-visual-regressions
  (dom/div nil
    (ele/ui-card {}
      (dom/div nil "Content"))

    (ele/ui-card {:active true}
      (dom/div nil "Content"))

    (ele/ui-card {:title "Hey There"}
      (dom/div nil "Content"))

    (ele/ui-card {:type :rounded}
      (dom/div nil "Content"))

    (ele/ui-card {:type :transparent}
      (dom/div nil "Content"))

    (ele/ui-card {:type :zone}
      (dom/div nil "Content"))

    (ele/ui-card {:type :ruled}
      (dom/div nil "Content")
      (dom/div nil "Content")
      (dom/div nil "Content")
      (dom/div nil "Content")
      (dom/div nil "Content"))

    (ele/ui-card {:type :ruled-zone}
      (dom/div nil "Content"))

    (ele/ui-card {:density :inset}
      (dom/div nil "Content"))

    (ele/ui-card {:density :collapse}
      (dom/div nil "Content"))
    ))

