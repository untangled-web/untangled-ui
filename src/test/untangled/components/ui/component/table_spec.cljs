(ns untangled.components.ui.component.table-spec
  (:require [untangled-spec.core :refer-macros [behavior specification assertions component]]
            yahoo.intl-messageformat-with-locales
            [untangled.components.ui.component.table :as t :refer [sort-table money-formatter number-formatter]]))

(def table-state
  {:available-columns #{:a :b}
   :visible-columns   [:a :b]                               ; the ordered keys for what columns should be shown
   :sort-key          :b
   :column-formatters {:a money-formatter :b number-formatter}
   :sort-compare      (fn [key row-a row-b]
                        (compare (get row-a key) (get row-b key))) ; a function that can compare rows by the given key
   :sort-direction    :ascending
   :left-headings     true                                  ; does row data include a first element that acts as a label?
   :sections          [{:section-label "Primary Group 1"
                        :columns       {:a "1999 Col A" :b "Col B"}
                        :summary-row   {:label "Totals" :a 5 :b 6}
                        :rows          [{:db/id 1 :label "Subgroup 1" :a 12820.948 :b 2}
                                        {:db/id 2 :label "Subgroup 2" :a 5.01 :b 9}]}
                       {:section-label "Primary Group 2"
                        :columns       {:a "2000 Col A" :b "Col B"}
                        :summary-row   {:label "Totals" :a 9 :b 11}
                        :rows          [{:db/id 3 :label "Subgroup 1" :a 7.6 :b 0}
                                        {:db/id 4 :label "Subgroup 2" :a -1.1 :b 22}]}
                       ]})

(specification "Table Sorting"
  (let [table table-state
        sorted-table (sort-table table :a :ascending)
        sorted-table-b (sort-table table :b :descending)]
    (assertions
      "Sorts data by proper columns (ascending)"
      (get-in sorted-table [:sections 0 :rows 0 :a]) => 5.01
      (get-in sorted-table [:sections 1 :rows 0 :a]) => -1.1
      "Sorts data by proper columns (descending)"
      (get-in sorted-table-b [:sections 0 :rows 0 :b]) => 9
      (get-in sorted-table-b [:sections 1 :rows 0 :b]) => 22
      )))

#_(specification "Column Formatters"
  (component "Money"
    (assertions
      "Is rounded properly"
      (t/money-formatter 833.20123) => "$833.20"
      (t/money-formatter 833.20823) => "$833.21"
      "Zero formats with proper placeholders"
      (t/money-formatter 0) => "$0.00"
      "Negatives include sign"
      (t/money-formatter -233) => "-$233.00"
      "Digit groupings appear"
      (t/money-formatter 277833.20) => "$277,833.20"))

  (component "Number formatters"
    (assertions
      "Show groupings"
      (t/number-formatter 277833.20) => "277,833.2"))

  (component "Percent formatter"
    (assertions
      "formats to two significant digits between 0 and 100"
      (t/percent-formatter 0.01) => "1%"
      (t/percent-formatter 0.1) => "10%"
      (t/percent-formatter 0.115) => "12%"
      (t/percent-formatter 0.89) => "89%"
      (t/percent-formatter 1) => "100%"
      "Supports percentages over 100"
      (t/percent-formatter 3.45) => "345%")))

(specification "Summary Row Calculations"
  (let [new-table (t/add-summary-rows table-state {:a :sum :b :avg})]
    (assertions
      "Columns can be summed"
      (-> new-table :sections first :summary-row :a) => 12825.958
      (-> new-table :sections second :summary-row :a) => 6.5
      "Columns can be averaged"
      (-> new-table :sections first :summary-row :b) => 5.5
      (-> new-table :sections second :summary-row :b) => 11.0
      )))
