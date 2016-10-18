(ns untangled.components.tables
  (:require-macros [devcards.core :as dc :refer [defcard dom-node]])
  (:require
    [om.next :as om :refer-macros [defui]]
    [cljs.test :refer-macros [is are]]
    [untangled.i18n :as i :refer-macros [tr trf]]
    [om.dom :as dom]
    [untangled.components.ui.component.table :refer [money-formatter number-formatter toggle-groupings sort-table sort-by-label
                                                     ui-grouped-table GroupedTable]]
    [untangled.client.core :as uc]))

(defonce state (atom {
                      :table [:tables/by-id :a]
                      :tables/by-id
                             {:a
                              {:id         :a
                               :table/data {
                                            :available-columns #{:a :b}
                                            :visible-columns   [:a :b] ; the ordered keys for what columns should be shown
                                            :sort-key          :a
                                            :column-formatters {:a :money :b :number}
                                            :sort-direction    :ascending
                                            :left-headings     true ; does row data include a first element that acts as a label?
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
                               }}}))

(defonce client (atom (uc/new-untangled-test-client :initial-state state)))

(defui ^:once TableRoot
  static om/IQuery
  (query [this] [{:table (om/get-query GroupedTable)}])
  Object
  (render [this]
    (let [{:keys [table]} (om/props this)]
      (ui-grouped-table table))))

(defcard sample-table
  "Demonstration of a generalized table widget."
  (dom-node
    (fn [state-atom node]
      (reset! client (uc/mount @client TableRoot node))))
  state
  {:watch-atom false})

