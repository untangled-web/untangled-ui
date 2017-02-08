(ns untangled.components.calendar
  (:require-macros
    [untangled.client.cards :refer [untangled-app]]
    [devcards.core :refer [defcard]])
  (:require
    [devcards.core :as dc]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [untangled.i18n.core :as i18n]
    [untangled.client.core :as uc]
    [untangled.components.ui.component.calendar :as c]))

(defui ^:once CalRoot
  static om/IQuery
  (query [this] [{:start-date (om/get-query c/Calendar)}])
  Object
  (render [this]
    (let [{:keys [start-date]} (om/props this)]
      (dom/div nil
        (dom/button #js {:onClick #(om/transact! this '[(cal/toggle-overlay {:ident [:calendar/by-id :start-date]})])}
          "External mutation (Toggle overlay)")
        (c/ui-calendar this start-date)))))

(defcard calendar-viewer
  "#A Calendar Widget."
  (untangled-app CalRoot)
  {:start-date     [:calendar/by-id :start-date]
   :calendar/by-id {:start-date (c/initial-calendar :start-date #(str "Start Date")
                                  (js/Date. "2013-09-03 12:00:00"))}}
  {:inspect-data false})
