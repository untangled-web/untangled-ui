(ns untangled.ui.calendar-cards
  (:require
    [devcards.core :as dc :refer-macros [defcard]]
    [untangled.client.cards :refer [untangled-app]]
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [untangled.i18n :refer [tr trc trf]]
    [untangled.i18n.core :as i18n]
    [untangled.client.core :as uc]
    [untangled.ui.calendar :as c]))

(defui ^:once CalRoot
  static uc/InitialAppState
  (initial-state [cls params]
    {:start-date (c/calendar :start-date)
     :end-date   (c/calendar :end-date)})
  static om/IQuery
  (query [this] [{:start-date (om/get-query c/Calendar)}
                 {:end-date (om/get-query c/Calendar)}])
  Object
  (render [this]
    (let [{:keys [start-date end-date]} (om/props this)]
      (dom/div #js {:className "u-row"}
        (dom/div #js {:className "u-column--3"}
          (c/ui-calendar start-date
            ;:onDateSelected #(js/alert (str "Start " %))
            :overlay-trigger (fn [toggle cal] (dom/button #js {:onClick toggle :className "c-button"}
                                                (tr "Start Date: ") (c/displayed-date cal)))))
        (dom/div #js {:className "u-column--3 u-push--6 u-end"}
          (c/ui-calendar end-date
            ;:onDateSelected #(js/alert (str "End " %))
            :align :bottom-right-edge
            :overlay-trigger (fn [toggle cal] (dom/button #js {:onClick toggle :className "c-button"}
                                                (tr "End Date: ") (c/displayed-date cal)))))))))


(defcard calendar-viewer
  "#A Calendar Widget."
  (untangled-app CalRoot)
  {}
  {:inspect-data true})
