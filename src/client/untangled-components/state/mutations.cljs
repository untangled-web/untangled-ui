(ns untangled-components.state.mutations
  (:require [om.next :as om]
            [untangled.client.mutations :as m :refer [mutate]]
            [untangled-components.initial-state :as s]
            [untangled.client.impl.data-fetch :as df]
            [untangled.client.logging :as log]))

;; Application-specific mutations

(defmethod mutate 'app/set-tab [{:keys [state]} k {:keys [tab]}]
  {:action (fn [] (swap! state assoc :content-pane [tab :main]))})

(defmethod mutate 'reports/set-pane [{:keys [state]} k {:keys [pane]}]
  {:action (fn [] (swap! state assoc-in [:reports-tab :main :current-pane] [pane :report]))})

(defmethod mutate 'dashboards/set-pane [{:keys [state]} k {:keys [pane]}]
  {:action (fn [] (swap! state assoc-in [:dashboards-tab :main :current-pane] [pane :dashboard]))})

(defmethod mutate 'dashboards/set-email-file-segment [{:keys [state]} k {:keys [segment active]}]
  {:action (fn []
             (swap! state assoc-in [:visualizations :email-file :active] active)
             (swap! state assoc-in [:visualizations :email-file :data :delta] segment))})

(defmethod mutate 'dashboards/set-email-capture-segment [{:keys [state]} k {:keys [segment]}]
  {:action (fn [] (swap! state assoc-in [:visualizations :email-capture :data :dataset] (get s/email-capture-data segment)))})

(defmethod mutate 'dashboards/set-email-capture-dropdown [{:keys [state]} k {:keys [selection]}]
  {:action (fn [] (swap! state assoc-in [:ui :email-capture-dropdown :dropdown-selection-active] selection))})

(defmethod mutate 'reports/clear-filters [{:keys [state]} k {:keys [pane]}]
  {:action (fn [] (swap! state update-in [:ui :report-filters] #(assoc % :ui/top-n-selection "10" :ui/stay-type "L" :ui/date-type "arrival" :ui/channel "0" :ui/visit "0" :ui/rate-code "0")))})

(defmethod mutate 'reports/hide-controls [{:keys [state]} k {:keys [except]}]
  {:action (fn [] (letfn [(should-close? [i] (not (contains? except i)))]
                    (swap! state (fn [v]
                                   (cond-> v
                                     (should-close? :report-filters) (assoc-in [:ui :report-filters :ui/active] false)
                                     (should-close? :start-date) (assoc-in [:calendar/by-id :start-date :overlay-visible?] false)
                                     (should-close? :end-date) (assoc-in [:calendar/by-id :end-date :overlay-visible?] false))))))})


(defmethod mutate 'reports/set-controls [{:keys [state]} k {:keys [except]}]
  {:action (fn [] (letfn [(should-close? [i] (not (contains? except i)))]
                    (swap! state (fn [v]
                                   (cond-> v
                                           (should-close? :report-filters) (assoc-in [:ui :report-filters :ui/active] true))))))})
