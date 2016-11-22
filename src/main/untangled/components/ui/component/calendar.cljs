(ns untangled.components.ui.component.calendar
  (:require [clojure.set :refer [difference]]
            [untangled.components.ui.dom :as n]
            [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]
            [untangled.client.mutations :as m]
            [untangled.i18n :refer-macros [tr-unsafe tr trc trf]]
            [untangled.client.logging :as log]))

(defonce ms-in-a-day 86400000)

(defn- make-callbacks [id parent-component]
  {
   :onPriorMonth    #(om/transact! parent-component `[(cal/prior-month {:ident [:calendar/by-id ~id]})])
   :onToggleOverlay #(om/transact! parent-component `[(cal/toggle-overlay {:ident [:calendar/by-id ~id]})])
   :onSetDate       (fn [dt]
                      (let [date (or dt (js/Date.))]
                        (om/transact! parent-component `[(cal/set-date {:date ~date :ident [:calendar/by-id ~id]})])))
   :onNextMonth     #(om/transact! parent-component `[(cal/next-month {:ident [:calendar/by-id ~id]})])
   })

(defn weeks-of-interest
  "Returns a sequence of weeks (each of which contains 7 days) that should be included on a sunday-aligned calendar.
  The weeks are simple lists. The days are javascript Date objects. Their position in the week list indicates their
  day of the week (first position is sunday)."
  [month year]
  (letfn [(prior-day [dt] (js/Date. (- (.getTime dt) ms-in-a-day)))
          (next-day [dt] (js/Date. (+ (.getTime dt) ms-in-a-day)))]
    (let [zero-based-month (- month 1)
          first-day-of-month (js/Date. year zero-based-month 1 1 0 0 0)
          all-prior-days (iterate prior-day first-day-of-month)
          prior-sunday (first (drop-while #(not= 0 (.getDay %)) all-prior-days))
          all-weeks-from-prior-sunday (partition 7 (iterate next-day prior-sunday))
          contains-this-month? (fn [week] (some #(= zero-based-month (.getMonth %)) week))
          all-weeks-from-starting-sunday (drop-while (comp not contains-this-month?) all-weeks-from-prior-sunday)]
      (take-while contains-this-month? all-weeks-from-starting-sunday))))

(defn initial-calendar
  "Create a calendar with the given ID and date (as a JS date object)"
  ([id label-lambda] (initial-calendar id label-lambda (js/Date.)))
  ([id label-lambda starting-js-date]
   (let [month (+ 1 (.getMonth starting-js-date))
         day (.getDate starting-js-date)
         year (.getFullYear starting-js-date)]
     {:id               id
      :labeller         label-lambda
      :month            month
      :day              day
      :year             year
      :weeks            (weeks-of-interest month year)
      :overlay-visible? false})))

(defn in-month? [calendar jsdt] (= (:month calendar) (+ 1 (.getMonth jsdt))))
(defn selected-day? [calendar jsdt]
  (and
    (in-month? calendar jsdt)
    (= (:day calendar) (.getDate jsdt))))

(defn cal->Date [{:keys [year month day]}] (js/Date. year (- month 1) day 12 0 0))

;; Pure calendar operations
(defn displayed-date
  "Give back a calendar's current day setting in i18n form."
  [calendar]
  (trf "{dt,date}" :dt (cal->Date calendar)))

(defn toggle-calendar-overlay
  "Returns an updated calendar with the overlay toggled."
  [calendar] (update calendar :overlay-visible? not))

(defn set-date
  "Returns an updated calendar set to the given date (map with :month/:day/:year OR js date)"
  [calendar new-dt]
  (try
    (let [is-js-date? (= js/Date (type new-dt))
          month (if is-js-date? (+ 1 (.getMonth new-dt)) (:month new-dt))
          day (if is-js-date? (.getDate new-dt) (:day new-dt))
          year (if is-js-date? (.getFullYear new-dt) (:year new-dt))]
      (assoc calendar :month month :day day :year year :weeks (weeks-of-interest month year)))
    (catch :default e (log/info "Failed to set date: " e))))

(defn prior-year
  "Returns an updated calendar with the year backed up by one."
  [calendar]
  (let [{:keys [month year]} calendar
        prior-year (- year 1)]
    (assoc calendar :year prior-year :weeks (weeks-of-interest month prior-year))))

(defn next-year
  "Returns an updated calendar with the year moved forward by one."
  [calendar]
  (let [{:keys [month year]} calendar
        next-year (+ year 1)]
    (assoc calendar :year next-year :weeks (weeks-of-interest month next-year))))

(defn prior-month
  "Returns an updated calendar for the prior month."
  [calendar]
  (let [
        {:keys [month year]} calendar
        this-month month
        prior-month (if (= this-month 1) 12 (- this-month 1))
        this-year year
        year (if (= 12 prior-month) (- this-year 1) this-year)]
    (assoc calendar :month prior-month :year year :weeks (weeks-of-interest prior-month year))))

(defn next-month
  "Returns an updated calendar for the next month."
  [calendar]
  (let [{:keys [month year]} calendar
        this-month month
        next-month (if (= this-month 12) 1 (+ 1 this-month))
        this-year year
        year (if (= 1 next-month) (+ 1 this-year) this-year)]
    (assoc calendar :month next-month :year year :weeks (weeks-of-interest next-month year))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Om Mutation methods
;; ALL mutations on calendars can be done "remotely" by specifying the ident of the calendar to update via params

(defmethod m/mutate 'cal/toggle-overlay [{:keys [state ref]} k {:keys [ident]}]
  {:action (fn [] (swap! state update-in (or ident ref) toggle-calendar-overlay))})

(defmethod m/mutate 'cal/close-overlay [{:keys [state ref]} k {:keys [ident]}]
  {:action (fn [] (swap! state assoc-in (conj (or ident ref) :overlay-visible?) false))})

(defmethod m/mutate 'cal/next-month [{:keys [state ref]} k {:keys [ident]}]
  {:action (fn [] (swap! state update-in (or ident ref) next-month))})

(defmethod m/mutate 'cal/prior-month [{:keys [state ref]} k {:keys [ident]}]
  {:action (fn [] (swap! state update-in (or ident ref) prior-month))})

(defmethod m/mutate 'cal/prior-year [{:keys [state ref]} k {:keys [ident]}]
  {:action (fn [] (swap! state update-in (or ident ref) prior-year))})

(defmethod m/mutate 'cal/next-year [{:keys [state ref]} k {:keys [ident]}]
  {:action (fn [] (swap! state update-in (or ident ref) next-year))})

(defmethod m/mutate 'cal/set-date [{:keys [state ref]} k {:keys [date ident]}]
  {:action (fn [] (swap! state update-in (or ident ref) set-date date))})

(defui ^:once Calendar
  static om/IQuery
  (query [this] [:id :month :day :year :weeks :overlay-visible? :labeller])
  static om/Ident
  (ident [this {:keys [id]}] [:calendar/by-id id])

  Object
  (render [this]
    (dom/div #js {:className ""}
      (let [{:keys [weeks labeller overlay-visible?] :as calendar} (om/props this)
            {:keys [onNextMonth onPriorMonth onSetDate onToggleOverlay]} (om/get-computed this)]
        (let [days-of-week [(trc "Abbrev for sunday" "Su") (trc "Abbrev for monday" "M")
                            (trc "Abbrev for tuesday" "Tu") (trc "Abbrev for wednesday" "W") (trc "Abbrev for thursday" "Th")
                            (trc "Abbrev for friday" "F") (trc "Abbrev for saturday" "Sa")]]
          (dom/div #js {:className "o-calendar-container"}
            (js/console.log calendar)
            (dom/span #js {:className "o-button-group-label"} (cond
                                                                (string? labeller) labeller
                                                                labeller (labeller)
                                                                :else "Date: "))
            (dom/div #js {:className "o-calendar-wrapper"}
              (dom/input #js {:className "o-calendar-date"
                              :readOnly  "true"
                              :onClick   onToggleOverlay
                              :value     (displayed-date calendar)})

              (when overlay-visible?
                (dom/div #js {:className "c-calendar c-card"}
                  (dom/header #js {:className "c-calendar__control u-middle"}
                    (dom/div #js {:className "u-column--2"}
                      (dom/button #js {:className "c-calendar__button"
                                       :title     "Last Month"
                                       :onClick   onPriorMonth
                                       } (n/get-icon "arrow_back")))
                    (dom/div #js {:className "u-column--8"}
                      (dom/span #js {:className "current"
                                     :onClick   onToggleOverlay
                                     } (displayed-date calendar))
                      (dom/button #js {:className "control"
                                       :title     "Today"
                                       :onClick   #(onSetDate (js/Date.))
                                       } (n/get-icon "today")))
                    (dom/div #js {:className "u-column--2"}
                      (dom/button #js {:className "c-calendar__button"
                                       :title     "Next Month"
                                       :onClick   onNextMonth
                                       } (n/get-icon "arrow_forward"))))

                  (dom/div #js {:className "c-calendar__month o-overlay"}
                    (dom/hr nil)
                    (dom/table nil
                      (dom/thead nil
                        (dom/tr nil
                          (for [label days-of-week]
                            (dom/th #js {:key label :className "o-day-name"} (tr-unsafe label)))))
                      (dom/tbody nil
                        (for [week weeks]
                          (dom/tr #js {:key (.getDate (first week)) :className "week"}
                            (for [day week]
                              (dom/td #js {
                                           :key       (str "d" (.getMonth day) "-" (.getDate day))
                                           ;; TODO If a day is selected, then it should also have the .is-active class for .o-day. Likewise for off-month days (not for current month), it should also have .is-inactive.
                                           :className (cond-> "o-day"
                                                        (not (in-month? calendar day)) (str " is-inactive")
                                                        (selected-day? calendar day) (str " is-active"))
                                           :onClick   (fn []
                                                        (onSetDate day)
                                                        (om/transact! this '[(cal/close-overlay)]))
                                           } (.getDate day)))))))))))))))))

(def calendar-factory (om/factory Calendar {:keyfn :id}))

(defn ui-calendar
  "Hook up callbacks and render a calendar. Component should be the parent owner. calendar should be the props for
  a calendar."
  [component {:keys [id] :as calendar}]
  (calendar-factory (om/computed calendar (make-callbacks id component))))


