(ns untangled.components.ui.component.calendar-spec
  (:require [untangled-spec.core :refer-macros [behavior specification assertions component]]
            yahoo.intl-messageformat-with-locales
            [untangled.components.ui.component.table :as t :refer [sort-table money-formatter number-formatter]]
            [untangled.i18n.core :as i18n]
            [cljs.test :refer-macros [is]]
            [om.next :as om :refer-macros [defui]]
            [untangled.components.ui.component.calendar :as c]
            [om.dom :as dom]))



(let [cal (c/initial-calendar :start-date #(str "Date: ") (js/Date. "2013-09-03 12:00:00"))]
  (specification "Calendar"
    (component "Initial State"
      (assertions
        "Has an ID"
        (:id cal) => :start-date

        "Includes the current date"
        (:month cal) => 9
        (:day cal) => 3
        (:year cal) => 2013

        "Overlay is initially hidden"
        (:overlay-visible? cal) => false

        "Starts the weeks on the prior Sunday"
        (.getDate (ffirst (:weeks cal))) => 1
        (.getMonth (ffirst (:weeks cal))) => 8              ; js/Date numbers from zero

        "Includes the last Saturday"
        (.getDate (last (last (:weeks cal)))) => 5
        (.getMonth (last (last (:weeks cal)))) => 9))

    (behavior "Displayed Date is Internationalized"
      (reset! i18n/*current-locale* "de-DE")
      (is (= "3.9.2013" (c/displayed-date cal)))
      (reset! i18n/*current-locale* "en-US")
      (is (= "9/3/2013" (c/displayed-date cal))))

    (let [initial-state {:start-date cal}]

      )))
