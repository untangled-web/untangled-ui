(ns untangled.ui.calendar-spec
  (:require [untangled-spec.core :refer-macros [behavior specification assertions component]]
            yahoo.intl-messageformat-with-locales
            [untangled.i18n.core :as i18n]
            [cljs.test :refer [is]]
            [om.next :as om :refer [defui]]
            [untangled.ui.calendar :as c]
            [om.dom :as dom]))

(let [cal (c/calendar :start-date (js/Date. "2013-09-03 12:00:00"))]
  (specification "Calendar"
    (component "Initial State"
      (assertions
        "Has an ID"
        (:calendar/id cal) => :start-date

        "Includes the current date"
        (:calendar/month cal) => 9
        (:calendar/day cal) => 3
        (:calendar/year cal) => 2013

        "Overlay is initially hidden"
        (:calendar/overlay-visible? cal) => false

        "Starts the weeks on the prior Sunday"
        (.getDate (ffirst (:calendar/weeks cal))) => 1
        (.getMonth (ffirst (:calendar/weeks cal))) => 8              ; js/Date numbers from zero

        "Includes the last Saturday"
        (.getDate (last (last (:calendar/weeks cal)))) => 5
        (.getMonth (last (last (:calendar/weeks cal)))) => 9))

    (behavior "Displayed Date is Internationalized"
      (reset! i18n/*current-locale* "de-DE")
      (is (= "3.9.2013" (c/displayed-date cal)))
      (reset! i18n/*current-locale* "en-US")
      (is (= "9/3/2013" (c/displayed-date cal))))))
