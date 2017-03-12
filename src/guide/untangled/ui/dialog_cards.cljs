(ns untangled.ui.dialog-cards
  (:require
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [untangled.ui.sample-card :refer [defsample]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [untangled.i18n.core :as i18n]
    [untangled.client.core :as uc]
    [untangled.ui.layout :as layout]
    [untangled.icons :refer [icon]]
    [untangled.ui.elements :as e]
    [untangled.ui.dialogs :as d]
    [untangled.client.core :as uc]
    [untangled.client.cards :refer [untangled-app]]
    [untangled.client.mutations :as m]))

(defui CDRoot
  static om/IQuery
  (query [this] [{:dialog (om/get-query d/ConfirmationDialog)}])
  static uc/InitialAppState
  (initial-state [c p] {:dialog (d/make-confirmation-dialog :ok true "Continue?"
                                  :title "Really?"
                                  :yes-label "OK"
                                  :no-label "Cancel")})
  Object
  (render [this]
    (let [{:keys [dialog]} (om/props this)]
      (dom/div nil
        (d/ui-confirmation-dialog dialog)))))

(defcard ConfirmationDialog-one
  ""
  (untangled-app CDRoot)
  {}
  {:inspect-data true})
