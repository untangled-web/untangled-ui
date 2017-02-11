(ns untangled.ui.table-cards
  (:require-macros
    [untangled.client.cards :refer [untangled-app]])
  (:require
    [cljs.test :refer-macros [is are]]
    [devcards.core :as dc]
    [om.dom :as dom]
    [om.next :as om :refer-macros [defui]]
    [untangled.client.core :as uc]
    [untangled.i18n :as i :refer-macros [tr trf]]
    [untangled.client.mutations :as m]))

(def money-formatters
  {"en-US" (Intl.NumberFormat. "en-US" #js {:style "currency" :currency "USD" :maximumFractionDigits 0})})

(defn money-formatter
  "Format a column that contains money (2 dec places)"
  [v] (.format (get money-formatters (i/current-locale) (get money-formatters "en-US")) v))

(defn number-formatter
  "Format a column that contains numbers. Adds in proper separators (e.g. commas and points)"
  [v] (trf "{v,number}" :v v))

(defn percent-formatter
  "Format a column as a percentage"
  [v] (trf "{v,number,percent}" :v v))

(def formatters {:money   money-formatter
                 :number  number-formatter
                 :percent percent-formatter})

(defn column-formatter
  [table colkey] (or (get formatters (get-in table [:column-formatters colkey])) identity))

(defn sort-by-label
  "Sort the given table by the row labels."
  [table] (update table :sections
            #(map (fn [s] (update s :rows (fn [rows] (sort-by :label rows)))) %)))

(defn sort-table
  "Sort the given table by the indicated column key. Direction can be :ascending or :descending. Returns
  the new table. Refuses to sort a table if it is in top-headings mode, since that would make no sense."
  [table key direction]
  (if (:left-headings table)
    (let [cmp-k         (cond->> (fn [k a b] (compare (get a k) (get b k)))
                          (= :descending direction) (comp -))
          cmp           (partial cmp-k key)
          sort-rows     (fn [rows] (into [] (sort cmp rows)))
          sort-body     (fn [body] (update body :rows sort-rows))
          sort-sections (fn [b] (mapv sort-body b))]
      (-> table
        (update :sections sort-sections)
        (assoc :sort-key key)
        (assoc :sort-direction direction)))
    table))

(defn add-summary-rows
  "Returns a table with summary rows added to each section based on the aggregation map. The
  aggregation is a map keyed by column ID whose values can be :sum or :avg"
  [table aggregation]
  (letfn [(zeroed [summary] (reduce (fn [summary' k] (assoc summary' k 0.0)) summary (keys aggregation)))
          (compute-summary [summary section]
            (let [n (+ 0.0 (count (:rows section)))]
              (reduce (fn [sumrow row]
                        (reduce (fn [sumrow k]
                                  (case (get aggregation k)
                                    :sum (update sumrow k (fn [v] (+ v (get row k))))
                                    :avg (if (zero? n)
                                           0.0
                                           (update sumrow k (fn [v] (+ v (/ (get row k) n)))))
                                    sumrow
                                    )) sumrow (keys aggregation))
                        ) (zeroed summary) (:rows section))))
          (compute-summary-row [section] (update section :summary-row compute-summary section))
          (compute-summary-rows [sections] (map compute-summary-row sections))]
    (update table :sections compute-summary-rows)))

(defn toggle-groupings
  "Change the groupings on the table. If using top-headings, this method makes sure the sections are sorted by label
  instead of columns, since there is no total order possible that makes sense."
  [table]
  (let [top-headings? (:left-headings table)]
    (cond-> table
      :always (update :left-headings not)
      top-headings? sort-by-label
      (not top-headings?) (sort-table (:sort-key table) (:descending table)))))

(defn- tcell [d]
  (let [{:keys [label content]} d]
    (dom/td #js {:className "o-table__priority-1"}
      (dom/span #js {:className "o-table__label"} label)
      (dom/span #js {:className "o-table__content"} content)
      )))
(defn- heading [label kind onSort] (dom/th #js {:onClick #(onSort) :scope kind :className "o-table__priority-1"} label))
(defn- colh
  ([label] (colh label identity))
  ([label onSort] (heading label "col" onSort)))
(defn- rowh [label] (heading label "row" identity))

(defui Row
  Object
  (render [this]
    (let [{:keys [label] :as row} (om/props this)
          {:keys [left-headings columns visible-columns summary?] :as table} (om/get-computed this)]
      (dom/tr nil
        (rowh label)
        (mapv #(tcell {:label     (get columns %)
                       :className (if summary? "bold" "")
                       :content   ((column-formatter table %) (get row %))}) visible-columns)))))

(def ui-row (om/factory Row {:keyfn :db/id}))

(defn column-label [columns key sort-key sort-direction]
  (let [label (get columns key)]
    (if (= key sort-key)
      (dom/a #js {:className (str "is-" (name sort-direction))} label)
      (dom/a #js {} label))))

(defn- left-grouped-body [table onSort]
  (let [{:keys [sections visible-columns sort-key sort-direction]} table]
    (map (fn [{:keys [section-label columns rows summary-row]}]
           (dom/tbody nil
             (dom/tr #js {:key section-label} (rowh section-label) (map #(colh (column-label columns % sort-key sort-direction) (fn [] (onSort %))) visible-columns))
             (mapv #(ui-row (om/computed % table)) rows)
             (ui-row (om/computed summary-row (assoc table :summary? true)))))
      sections)))

(defn- top-grouped-body [table]
  (let [{:keys [sections columns visible-columns]} table
        all-labels    (into (sorted-set) (flatten (for [section sections row (:rows section)] (:label row))))
        rows-by-label (fn [section] (reduce (fn [acc row] (assoc acc (:label row) row)) {} (:rows section)))
        section-rows  (map rows-by-label sections)]
    (dom/tbody nil
      (map (fn [label]
             (dom/tr #js {:key label}
               (dom/th nil label)
               (for [rows section-rows]
                 (let [section (get rows label)]
                   (map #(tcell {:label   label
                                 :content ((column-formatter table %) (get section %))}) visible-columns)))))
        all-labels)
      (dom/tr #js {:key :summary}
        (dom/th nil (-> sections first :summary-row :label))
        (for [s sections]
          (map #(tcell {:label   (get columns %)
                        :content ((column-formatter table %) (get-in s [:summary-row %]))}) visible-columns))))))

(defn- left-grouped-heading [table])

(defn- top-grouped-heading [table]
  (let [{:keys [sections visible-columns]} table
        columns          (map :columns sections)
        ncols            (count visible-columns)
        group-heading    (fn [s] (dom/th #js {:colSpan ncols} (:section-label s)))
        section-headings (fn [heading] (mapv #(colh (get heading %)) visible-columns))]
    (dom/thead nil
      (dom/tr nil (dom/th nil "") (map group-heading sections))
      (dom/tr nil (dom/th nil "") (map section-headings columns)))))

(defn- left-grouped-content [table onSort]
  (dom/table #js {:className "o-table o-table--toggle"}
    (left-grouped-heading table)
    (left-grouped-body table onSort)))

(defn- top-grouped-content [table]
  (dom/table #js {:className "o-table o-table--toggle"}
    (top-grouped-heading table)
    (top-grouped-body table)))

(defui GroupedTable
  static om/IQuery
  (query [this] [:id :table/data])
  static om/Ident
  (ident [this {:keys [id]}] [:tables/by-id id])
  Object
  (componentDidMount [this props state]
    (let [{:keys [id] :as table} (om/props this)
          {:keys [sort-key sort-direction]} (:table/data table)]
      #_(om/transact! this `[(table/sort {:sort-by ~sort-key :direction ~sort-direction :id ~id})])))
  (render [this]
    (let [{:keys [id table/data]} (om/props this)
          {:keys [left-headings] :as table} data
          onSort (fn [col] (om/transact! this `[(sort {:sort-by ~col :id ~id})]))]
      (if left-headings
        (left-grouped-content table onSort)
        (top-grouped-content table)))))

(def ui-grouped-table (om/factory GroupedTable))

(defmethod m/mutate `sort
  [{:keys [state]} k {:keys [sort-by direction id]}]
  {:action (fn []
             (let [old-sort      (get-in @state [:tables/by-id id :table/data :sort-key])
                   old-direction (get-in @state [:tables/by-id id :table/data :sort-direction])
                   new-direction (cond
                                   direction direction
                                   (not= old-sort sort-by) :ascending
                                   (= :ascending old-direction) :descending
                                   :else :ascending)]
               (swap! state update-in [:tables/by-id id :table/data] sort-table sort-by new-direction)))})

(defui ^:once TableRoot
  static om/IQuery
  (query [this] [{:table (om/get-query GroupedTable)}])
  Object
  (render [this]
    (let [{:keys [table]} (om/props this)]
      (ui-grouped-table table))))

(dc/defcard sample-table
  "Demonstration of a generalized table widget. This is a tech spike play space. No library code exists yet to make tables."
  (untangled-app TableRoot)
  {:table [:tables/by-id :a]
   :tables/by-id
          {:a
           {:id         :a
            :table/data {
                         :available-columns #{:a :b}
                         :visible-columns   [:a :b]         ; the ordered keys for what columns should be shown
                         :sort-key          :a
                         :column-formatters {:a :money :b :number}
                         :sort-direction    :ascending
                         :left-headings     true            ; does row data include a first element that acts as a label?
                         :sections          [{:section-label "Primary Group 1"
                                              :columns       {:a "1999 Col A" :b "Col B"}
                                              :summary-row   {:label "Totals" :a 5 :b 6}
                                              :rows          [{:db/id 1 :label "Subgroup 1" :a 12820.948 :b 2}
                                                              {:db/id 2 :label "Subgroup 2" :a 5.01 :b 9}]}
                                             {:section-label "Primary Group 2"
                                              :columns       {:a "2000 Col A" :b "Col B"}
                                              :summary-row   {:label "Totals" :a 9 :b 11}
                                              :rows          [{:db/id 3 :label "Subgroup 1" :a 7.6 :b 0}
                                                              {:db/id 4 :label "Subgroup 2" :a -1.1 :b 22}]}]}
            }}}
  {:watch-atom false})

