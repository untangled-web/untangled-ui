(ns untangled.components.calendar
  (:require-macros [devcards.core :as dc :refer [defcard]])
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [untangled.i18n.core :as i18n]
    [untangled.client.core :as uc]
    [untangled.components.ui.component.calendar :as c]))

(defonce state (atom {:start-date     [:calendar/by-id :start-date]
                      :calendar/by-id {:start-date (c/initial-calendar :start-date #(str "Start Date")
                                                     (js/Date. "2013-09-03 12:00:00"))}}))
(defonce client (atom (uc/new-untangled-test-client :initial-state state)))

(defn sample-external-mutation []
  (om/transact! (:reconciler @client) '[(cal/toggle-overlay {:ident [:calendar/by-id :start-date]})]))

(defui ^:once CalRoot
  static om/IQuery
  (query [this] [{:start-date (om/get-query c/Calendar)}])
  Object
  (render [this]
    (let [{:keys [start-date]} (om/props this)]
      (dom/div nil
        (dom/button #js {:onClick #(sample-external-mutation)}
          "External mutation (Toggle overlay)")
        (c/ui-calendar this start-date)))))

(defcard calendar-viewer
  "#A Calendar Widget."
  (dc/dom-node
    (fn [state-atom node]
      (reset! client (uc/mount @client CalRoot node))))
  state
  {:inspect-data false})

