(ns untangled.ui.calendar-cards
  (:require-macros
    [untangled.client.cards :refer [untangled-app]]
    [devcards.core :refer [defcard]])
  (:require
    [devcards.core :as dc]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [untangled.i18n :refer [tr trc trf]]
    [untangled.i18n.core :as i18n]
    [untangled.client.core :as uc]
    [untangled.ui.calendar :as c]))

(defui ^:once CalRoot
  static uc/InitialAppState
  (initial-state [cls params] {:start-date (c/calendar :start-date "Start Date")})
  static om/IQuery
  (query [this] [{:start-date (om/get-query c/Calendar)}])
  Object
  (render [this]
    (let [{:keys [start-date]} (om/props this)]
      (dom/div nil
        (dom/button #js {:className "c-button"
                         :onClick   (fn [evt]
                                      (.stopPropagation evt)
                                      (om/transact! this `[(c/toggle-overlay {:calendar-id :start-date})]))}
          "Start Date: " (c/displayed-date start-date))
        (c/ui-calendar start-date
          :onDateSelected #(js/alert (str "Selected Date " %))
          :refresh [:start-date])))))


(defcard calendar-viewer
  "#A Calendar Widget."
  (untangled-app CalRoot)
  {}
  {:inspect-data true})
