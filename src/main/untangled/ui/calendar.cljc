(ns untangled.ui.calendar
  (:require [clojure.set :refer [difference]]
            [om.dom :as dom]
            [untangled.client.mutations :as m :refer [defmutation]]
            [om.next :as om :refer [defui]]
            [untangled.icons :refer [icon]]
            [untangled.i18n :refer [tr-unsafe tr trc trf]]
            [untangled.client.logging :as log]))

(def table-name ::by-id)
(defn calendar-ident [id] [table-name id])

(defonce ms-in-a-day 86400000)

(defn date
  ([] #?(:clj (java.util.Date.) :cljs (js/Date.)))
  ([base offset-ms]
    #?(:clj  (java.util.Date. (+ offset-ms (.getTime base)))
       :cljs (js/Date. (+ (.getTime base) ms-in-a-day))))
  ([y m day]
    #?(:clj  (java.util.Date. (- y 1900) m day 12 0 0)
       :cljs (js/Date. y m day 12 0 0))))

(defn weeks-of-interest
  "Returns a sequence of weeks (each of which contains 7 days) that should be included on a sunday-aligned calendar.
  The weeks are simple lists. The days are javascript Date objects. Their position in the week list indicates their
  day of the week (first position is sunday)."
  [month year]
  (letfn [(prior-day [dt] (date dt (- ms-in-a-day)))
          (next-day [dt] (date dt ms-in-a-day))]
    (let [zero-based-month               (- month 1)
          first-day-of-month             (date year zero-based-month 1)
          all-prior-days                 (iterate prior-day first-day-of-month)
          prior-sunday                   (first (drop-while #(not= 0 (.getDay %)) all-prior-days))
          all-weeks-from-prior-sunday    (partition 7 (iterate next-day prior-sunday))
          contains-this-month?           (fn [week] (some #(= zero-based-month (.getMonth %)) week))
          all-weeks-from-starting-sunday (drop-while (comp not contains-this-month?) all-weeks-from-prior-sunday)]
      (take-while contains-this-month? all-weeks-from-starting-sunday))))

(defn make-calendar
  "Create a calendar with the given ID and date (as a JS date object)"
  ([id label] (make-calendar id label (date)))
  ([id label starting-js-date]
   (let [month (+ 1 (.getMonth starting-js-date))
         day   (.getDate starting-js-date)
         year  (.getFullYear starting-js-date)]
     {:calendar/id               id
      :calendar/label            label
      :calendar/month            month
      :calendar/day              day
      :calendar/year             year
      :calendar/weeks            (weeks-of-interest month year)
      :calendar/overlay-visible? false})))

(defn in-month? [calendar jsdt] (= (:calendar/month calendar) (+ 1 (.getMonth jsdt))))
(defn selected-day? [calendar jsdt]
  (and
    (in-month? calendar jsdt)
    (= (:calendar/day calendar) (.getDate jsdt))))

(defn cal->Date [{:keys [calendar/year calendar/month calendar/day]}] (date year (- month 1) day))

;; Pure calendar operations
(defn displayed-date
  "Give back a calendar's current day setting in i18n form."
  [calendar]
  (trf "{dt,date}" :dt (cal->Date calendar)))

(defn calendar-set-overlay-visible
  "Returns an updated app state with the cal overlay toggled."
  [state-map calendar-id visible?] (assoc-in state-map [table-name calendar-id :calendar/overlay-visible?] visible?))

(defn calendar-close-overlay
  "Returns an updated app state with the overlay closed."
  [state-map calendar-id] (assoc-in state-map [table-name calendar-id :calendar/overlay-visible?] false))

(defn calendar-close-all-overlays
  "Returns an updated app state with the all calendar overlays closed."
  [state-map] (reduce (fn [m id] (assoc-in m [table-name id :calendar/overlay-visible?] false))
                state-map (keys (get state-map table-name))))

(defn calendar-set-date
  "Returns an updated calendar set to the given date"
  [state-map calendar-id new-dt]
  (try
    (let [is-js-date? #?(:cljs (= js/Date (type new-dt)) :clj false)
          month                                               (if is-js-date? (+ 1 (.getMonth new-dt)) (:calendar/month new-dt))
          day                                                 (if is-js-date? (.getDate new-dt) (:calendar/day new-dt))
          year                                                (if is-js-date? (.getFullYear new-dt) (:calendar/year new-dt))]
      (update-in state-map [table-name calendar-id] assoc :calendar/month month :calendar/day day :calendar/year year :calendar/weeks (weeks-of-interest month year)))
    (catch #?(:clj Exception :cljs :default) e (log/info "Failed to set date: " e))))

(defn calendar-prior-year
  "Returns an updated calendar with the year backed up by one."
  [state-map calendar-id]
  (let [{:keys [calendar/month calendar/year]} (get-in state-map [table-name calendar-id])
        prior-year (- year 1)]
    (update-in state-map [table-name calendar-id] assoc :calendar/year prior-year :calendar/weeks (weeks-of-interest month prior-year))))

(defn calendar-next-year
  "Returns an updated calendar with the year moved forward by one."
  [state-map calendar-id]
  (let [{:keys [calendar/month calendar/year]} (get-in state-map [table-name calendar-id])
        next-year (+ year 1)]
    (update-in state-map [table-name calendar-id] assoc :calendar/year next-year :calendar/weeks (weeks-of-interest month next-year))))


(defn calendar-prior-month
  "Returns an updated calendar for the prior month."
  [state-map calendar-id]
  (let [{:keys [calendar/month calendar/year]} (get-in state-map [table-name calendar-id])
        this-month  month
        prior-month (if (= this-month 1) 12 (- this-month 1))
        this-year   year
        year        (if (= 12 prior-month) (- this-year 1) this-year)]
    (update-in state-map [table-name calendar-id] assoc :calendar/month prior-month :calendar/year year :calendar/weeks (weeks-of-interest prior-month year))))

(defn calendar-next-month
  "Returns an updated calendar for the next month."
  [state-map calendar-id]
  (let [{:keys [calendar/month calendar/year]} (get-in state-map [table-name calendar-id])
        this-month month
        next-month (if (= this-month 12) 1 (+ 1 this-month))
        this-year  year
        year       (if (= 1 next-month) (+ 1 this-year) this-year)]
    (update-in state-map [table-name calendar-id] assoc :calendar/month next-month :calendar/year year :calendar/weeks (weeks-of-interest next-month year))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Om Mutation methods
;; ALL mutations on calendars can be done "remotely" by specifying the ident of the calendar to update via params

(defmutation toggle-overlay
  "Om Mutation: Toggle the full calendar overlay visibility. All other overlays are closed."
  [{:keys [calendar-id]}]
  (action [{:keys [state]}]
    (let [visible-now?    (get-in @state [table-name calendar-id :calendar/overlay-visible?] false)
          target-visible? (not visible-now?)]
      (swap! state
        (fn [state-map]
          (-> state-map
            (calendar-close-all-overlays)
            (calendar-set-overlay-visible calendar-id target-visible?)))))))

(defmutation set-overlay-visible
  "Om Mutation: Toggle the full calendar overlay visibility. Pass the calendar ID to be toggled."
  [{:keys [calendar-id visible?]}]
  (action [{:keys [state]}] (swap! state calendar-set-overlay-visible calendar-id visible?)))

(defmutation close-overlay
  "Om Mutation: Close the overlay on the given calendar"
  [{:keys [calendar-id]}]
  (action [{:keys [state]}] (swap! state calendar-close-overlay calendar-id)))

(defmutation close-all-overlays
  "Om Mutation: Close the overlay on the given calendar"
  [params-ignored]
  (action [{:keys [state]}] (swap! state calendar-close-all-overlays)))

(defmutation next-month
  "Om mutation: Move the calendar with id to the next month."
  [{:keys [calendar-id]}]
  (action [{:keys [state]}] (swap! state calendar-next-month calendar-id)))

(defmutation prior-month
  "Om mutation: Move the calendar with id to the prior month."
  [{:keys [calendar-id]}]
  (action [{:keys [state]}] (swap! state calendar-prior-month calendar-id)))

(defmutation prior-year
  "Om mutation: Move the calendar with id to the prior month."
  [{:keys [calendar-id]}]
  (action [{:keys [state]}] (swap! state calendar-prior-year calendar-id)))

(defmutation next-year
  "Om mutation: Move the calendar with id to the prior month."
  [{:keys [calendar-id]}]
  (action [{:keys [state]}] (swap! state calendar-next-year calendar-id)))

(defmutation set-date
  "Om mutation: Move the calendar with id to the prior month."
  [{:keys [calendar-id date]}]
  (action [{:keys [state]}] (swap! state calendar-set-date calendar-id date)))

(defn- calendar-toolbar [this]
  (let [{:keys [calendar/id calendar/overlay-visible?] :as calendar} (om/props this)]
    (dom/header #js {:className "o-calendar__control u-middle"}
      (dom/div #js {:className "u-column--2"}
        (dom/button #js {:className "o-calendar__button"
                         :title     "Last Month"
                         :onClick   #(om/transact! this `[(prior-month ~{:calendar-id id})])}
          (icon :arrow_back)))
      (dom/div #js {:className "u-column--8"}
        (dom/span #js {:className "current"
                       :onClick   #(om/transact! this `[(set-overlay-visible ~{:calendar-id id :visible? (not overlay-visible?)})])}
          (displayed-date calendar))
        (dom/button #js {:className "control"
                         :title     "Today"
                         :onClick   #(om/transact! this `[(set-date ~{:date (date) :calendar-id id})])}
          (icon :today)))
      (dom/div #js {:className "u-column--2"}
        (dom/button #js {:className "o-calendar__button"
                         :title     "Next Month"
                         :onClick   #(om/transact! this `[(next-month ~{:calendar-id id})])}
          (icon :arrow_forward))))))

(def days-of-week-labels
  [(trc "Abbrev for sunday" "Su") (trc "Abbrev for monday" "M") (trc "Abbrev for tuesday" "Tu")
   (trc "Abbrev for wednesday" "W") (trc "Abbrev for thursday" "Th") (trc "Abbrev for friday" "F")
   (trc "Abbrev for saturday" "Sa")])

(defn- calendar-month-view [this]
  (let [{:keys [calendar/id calendar/weeks] :as calendar} (om/props this)
        {:keys [refresh onDateSelected] :or {refresh []}} (om/get-computed this)]
    (dom/div #js {:className "o-calendar__month o-overlay"}
      (dom/hr nil)
      (dom/table nil
        (dom/thead nil
          (dom/tr nil
            (for [label days-of-week-labels]
              (dom/th #js {:key label :className "o-day-name"} (tr-unsafe label)))))
        (dom/tbody nil
          (for [week weeks]
            (dom/tr #js {:key (.toUTCString (first week)) :className "week"}
              (for [day week]
                (dom/td #js {:key       (str "d" (.getMonth day) "-" (.getDate day))
                             :className (cond-> "o-day"
                                          (not (in-month? calendar day)) (str " is-inactive")
                                          (selected-day? calendar day) (str " is-active"))
                             :onClick   (fn []
                                          (om/transact! this `[(set-date ~{:calendar-id id :date day})
                                                               (close-overlay {:calendar-id ~id})
                                                               ~@refresh])
                                          (when onDateSelected (onDateSelected day)))}
                  (.getDate day))))))))))

(defui ^:once Calendar
  static om/IQuery
  (query [this] [:calendar/id :calendar/month :calendar/day :calendar/year :calendar/weeks :calendar/overlay-visible? :calendar/label])
  static om/Ident
  (ident [this {:keys [calendar/id]}] (calendar-ident id))
  Object
  (render [this]
    (dom/div #js {:className ""}
      (let [{:keys [calendar/id calendar/overlay-visible? calendar/label] :as calendar} (om/props this)]
        (dom/div #js {:className "o-calendar-container"}
          (dom/span #js {:className "o-button-group-label"} (if label (tr-unsafe label) (tr "Date: ")))
          (dom/div #js {:className "o-calendar-wrapper"}
            (when overlay-visible?
              (dom/div #js {:className "o-calendar c-card"}
                (calendar-toolbar this)
                (calendar-month-view this)))))))))

(def ui-calendar-factory (om/factory Calendar {:keyfn :calendar/id}))

(defn ui-calendar
  "Render a calendar. onDateSelected will be called when a date is selected, and refresh is a sequence of Om keywords to trigger re-render if needed."
  [props & {:keys [onDateSelected refresh]}]
  (ui-calendar-factory (om/computed props {:onDateSelected onDateSelected :refresh refresh})))
