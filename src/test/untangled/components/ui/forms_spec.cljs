(ns untangled.components.ui.forms-spec
  (:require [untangled-spec.core :refer-macros [behavior specification assertions component]]
            [untangled.components.ui.forms :as f]
            [om.next :as om :refer [defui]]
            [untangled.client.core :as uc]))

(specification "Form Field Declarations"
  (component "text-input"
    (let [field (f/text-input :name 'valid? {:v 1})]
      (assertions
        "has a name"
        (:input/name field) => :name
        "has the correct type"
        (:input/type field) => ::f/text
        "can have a validator"
        (:input/validator field) => 'valid?
        "supports validator args"
        (:input/validator-args field) => {:v 1})))
  (component "integer-input"
    (let [field (f/integer-input :age 'valid? {:v 1})]
      (assertions
        "has a name"
        (:input/name field) => :age
        "has the correct type"
        (:input/type field) => ::f/integer
        "can have a validator"
        (:input/validator field) => 'valid?
        "supports validator args"
        (:input/validator-args field) => {:v 1})))
  (component "checkbox-input"
    (let [field (f/checkbox-input :name)]
      (assertions
        "has a name"
        (:input/name field) => :name
        "has the correct type"
        (:input/type field) => ::f/checkbox))))

(defui LeafForm
  static uc/InitialAppState
  (initial-state [this {:keys [id]}] {:id id :value 1 :leaf true})
  static om/IQuery
  (query [this] [:id :leaf])
  static om/Ident
  (ident [this props] [:leaf (:id props)])
  static f/IForm
  (fields [this] [(f/id-field :id)]))

(defui NonForm
  static om/IQuery
  (query [this] [:id :data])
  static om/Ident
  (ident [this props] [:data (:id props)]))

(defui ToManyForm
  static uc/InitialAppState
  (initial-state [this params] {:id      99
                                :to-many true
                                :value   1
                                :leaves  [(uc/initial-state LeafForm {:id 3}) (uc/initial-state LeafForm {:id 4})]})
  static om/IQuery
  (query [this] [{:leaves (om/get-query LeafForm)} :value])
  static om/Ident
  (ident [this props] [:tomform (:id props)])
  static f/IForm
  (fields [this] [(f/subform :leaves)]))


(defui Level2Form
  static uc/InitialAppState
  (initial-state [this params] {:id     2
                                :level2 true
                                :value  1
                                :leaf1  (uc/initial-state LeafForm {:id 5})
                                :leaf2  (uc/initial-state LeafForm {:id 6})})
  static om/IQuery
  (query [this] [{:leaf1 (om/get-query LeafForm)}
                 {:non-form (om/get-query NonForm)}
                 {:leaf2 (om/get-query LeafForm)}
                 {:leaf3 (om/get-query LeafForm)}])
  static om/Ident
  (ident [this props] [:level2 (:id props)])
  static f/IForm
  (fields [this] [(f/subform :leaf1)
                  (f/subform :leaf2)
                  (f/subform :leaf3)]))

(defui OtherRootForm
  static uc/InitialAppState
  (initial-state [this {:keys [id]}] {:id id :value 50 :other true})
  static om/IQuery
  (query [this] [:id :other])
  static om/Ident
  (ident [this props] [:other (:id props)])
  static f/IForm
  (fields [this] []))

(defui Level3Form
  static uc/InitialAppState
  (initial-state [this params] {:id         1
                                :level3     true
                                :other-root (uc/initial-state OtherRootForm {:id 100})
                                :level2     (uc/initial-state Level2Form {})})
  static om/IQuery
  (query [this] [{:other-root (om/get-query OtherRootForm)}
                 {:level2 (om/get-query Level2Form)}])
  static om/Ident
  (ident [this props] [:level3 (:id props)])
  static f/IForm
  (fields [this] [(f/subform :level2)]))

(specification "subforms*"
  (assertions
    "Are empty on non-nested forms"
    (f/subforms* LeafForm) => []
    "gives back pairs of [prop-path class] on a singly-nested form"
    (f/subforms* Level2Form) => [[[:leaf1] LeafForm] [[:leaf2] LeafForm] [[:leaf3] LeafForm]]
    "gives back pairs of [prop-path class] on a nested form"
    (f/subforms* Level3Form) => [[[:level2] Level2Form] [[:level2 :leaf1] LeafForm] [[:level2 :leaf2] LeafForm] [[:level2 :leaf3] LeafForm]]
    "supports to-many sub-forms"
    (f/subforms* ToManyForm) => [[[:leaves] LeafForm]]))

(def person-db {:person/by-id {1 {:name "A" :friend [:person/by-id 2]}
                               2 {:name "B" :friend [:person/by-id 3]}
                               3 {:name "C"}}})
(def nested-form-db (om/tree->db [{:root (om/get-query Level3Form)}] {:root (uc/initial-state Level3Form {})} true))
(def tomany-form-db (om/tree->db [{:root (om/get-query ToManyForm)}] {:root (uc/initial-state ToManyForm {})} true))

(specification "to-idents"
  (assertions
    "finds a sequence of idents by walking the graph"
    (f/to-idents person-db (get-in person-db [:person/by-id 1]) [:friend]) => [[:person/by-id 2]]
    (f/to-idents person-db (get-in person-db [:person/by-id 1]) [:friend :friend]) => [[:person/by-id 3]]
    (f/to-idents tomany-form-db (get-in tomany-form-db [:tomform 99]) [:leaves]) => [[:leaf 3] [:leaf 4]]))


(specification "get-forms"
  (assertions
    "Obtains a list of nested forms and idents that are BOTH declared as subforms AND are present (others are skipped)."
    (f/get-forms nested-form-db Level3Form [:level3 1]) => [{:ident [:level3 1] :class Level3Form :form {:id 1 :level3 true :other-root [:other 100] :level2 [:level2 2]}}
                                                            {:ident [:level2 2] :class Level2Form :form {:id 2 :value 1 :level2 true :leaf1 [:leaf 5] :leaf2 [:leaf 6]}}
                                                            {:ident [:leaf 5] :class LeafForm :form {:id 5 :value 1 :leaf true}}
                                                            {:ident [:leaf 6] :class LeafForm :form {:id 6 :value 1 :leaf true}}]
    "Can pull to-many relations of sub-forms"
    (f/get-forms tomany-form-db ToManyForm [:tomform 99]) => [{:ident [:tomform 99]
                                                               :class ToManyForm
                                                               :form  {:id 99 :to-many true :value 1 :leaves [[:leaf 3] [:leaf 4]]}}
                                                              {:ident [:leaf 3]
                                                               :class LeafForm
                                                               :form  {:id 3 :value 1 :leaf true}}
                                                              {:ident [:leaf 4]
                                                               :class LeafForm
                                                               :form  {:id 4 :value 1 :leaf true}}]
    ))


(specification "update-forms"
  (let [new-state (f/update-forms nested-form-db Level3Form [:level3 1] (fn [{:keys [form]}] (assoc form :touched true)))]
    (assertions
      "Updates the state of the correct forms using a supplied function."
      (get-in new-state [:level3 1]) => {:id 1 :level3 true :other-root [:other 100] :level2 [:level2 2] :touched true}
      (get-in new-state [:level2 2]) => {:id 2 :value 1 :level2 true :leaf1 [:leaf 5] :leaf2 [:leaf 6] :touched true}
      (get-in new-state [:leaf 5]) => {:id 5 :value 1 :leaf true :touched true}
      (get-in new-state [:leaf 6]) => {:id 6 :value 1 :leaf true :touched true}
      (get-in new-state [:other 100]) => {:id 100 :value 50 :other true})))

(specification "reduce-forms"
  (assertions "Can accumulate values from all forms"
    (f/reduce-forms nested-form-db Level3Form [:level3 1] (fn [acc spec] (+ acc (get-in spec [:form :value]))) 0) => 3))

(specification "init-form"
  (let [augmented-state (f/init-form nested-form-db LeafForm [:leaf 5])
        form (get-in augmented-state [:leaf 5])]
    (assertions
      "Adds form state to forms"
      (get-in form [:ui/form :fields/by-name]) => {:id {:input/name :id :input/type ::f/identity}}
      "Adds form class as metadata"
      (-> form (get :ui/form) meta :component) => LeafForm))
  (let [augmented-state (f/init-form nested-form-db Level3Form [:level3 1])
        leaf-form (get-in augmented-state [:leaf 5])
        top-form (get-in augmented-state [:level3 1])]
    (assertions
      "Adds form state to nested, declared subforms"
      (get-in leaf-form [:ui/form :fields/by-name]) => {:id {:input/name :id :input/type ::f/identity}}
      (get-in top-form [:ui/form :fields/by-name]) => {:level2 {:input/name :level2 :input/type ::f/subform}}
      "Adds form class as metadata"
      (-> top-form (get :ui/form) meta :component) => Level3Form)))
