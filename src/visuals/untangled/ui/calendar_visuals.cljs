(ns untangled.ui.calendar-visuals
  (:require
    [devcards.core :as dc :refer-macros [defcard]]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.ui.calendar :as c]
    [untangled.i18n :as i :refer [tr trf]]))

(def cal-1 (c/calendar :cal1 "Calendar 1" (js/Date. 1998 1 1)))
(def cal-1-open (c/set-overlay-visible-impl cal-1 true))

(defcard calendar-no-overlay
  "This is how the calendar widget looks without the overlay showing"
  (c/ui-calendar cal-1))

(defcard calendar-overlay
  "This is how the calendar widget looks with the overlay showing"
  (c/ui-calendar cal-1-open))
