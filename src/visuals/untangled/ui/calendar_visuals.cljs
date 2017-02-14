(ns untangled.ui.calendar-visuals
  (:require
    [devcards.core :as dc :refer-macros [defcard]]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.ui.calendar :as c]
    [untangled.i18n :as i :refer [tr trf]]))

(def height "800px")
(def offset "400px")
(def cal-1 (c/calendar :cal1 (js/Date. 1998 1 1)))
(def cal-1-open (c/set-overlay-visible-impl cal-1 true))

(defcard calendar-no-overlay
  "This is how the calendar widget looks without the overlay showing"
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--3 u-push--4"}
      (c/ui-calendar cal-1 :overlay-trigger (fn [t cal] (dom/span nil "TRIGGER"))))))

(defcard calendar-no-overlay-no-trigger
  "A calendar with no trigger cannot be hidden."
  (dom/div nil
    (c/ui-calendar cal-1)
    (c/ui-calendar cal-1)))

(defcard calendar-overlay-tl
  (dom/div #js {:style #js {:marginTop offset :height height} :className "u-row"}
    (dom/div #js {:className "u-column--3 u-push--4"}
      (c/ui-calendar cal-1-open
        :overlay-trigger (fn [t cal] (dom/span nil "TRIGGER"))
        :align :top-left-edge))))

(defcard calendar-overlay-tr
  (dom/div #js {:style #js {:marginTop offset :height height} :className "u-row"}
    (dom/div #js {:className "u-column--3 u-push--4 u-end"}
      (c/ui-calendar cal-1-open
        :overlay-trigger (fn [t cal] (dom/span nil "TRIGGER"))
        :align :top-right-edge))))

(defcard calendar-overlay-bl
  (dom/div #js {:style #js {:height height} :className "u-row"}
    (dom/div #js {:className "u-column--3 u-push--4"}
      (c/ui-calendar cal-1-open
        :overlay-trigger (fn [t cal] (dom/span nil "TRIGGER"))
        :align :bottom-left-edge))))

(defcard calendar-overlay-br
  (dom/div #js {:style #js {:height height} :className "u-row"}
    (dom/div #js {:className "u-column--3 u-push--4 u-end"}
      (c/ui-calendar cal-1-open
        :overlay-trigger (fn [t cal] (dom/span nil "TRIGGER"))
        :align :bottom-right-edge))))
