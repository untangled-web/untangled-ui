(ns untangled.components.ui.forms-spec
  (:require [untangled-spec.core :refer-macros [behavior specification assertions component when-mocking provided]]
            [untangled.components.ui.forms :as f]
            [om.next :as om :refer [defui]]
            [untangled.client.core :as uc]))

(specification "Form Elements Declarations"
  (component "subform-element"
    (let [f (f/subform-element :name 'Cls)]
      (assertions
        "defaults as a to-one relation"
        (:input/cardinality f) => :one
        "is marked as a subform"
        (true? (:input/is-form? f)) => true
        "has the correct type"
        (:input/type f) => ::f/subform
        "tracks the class of the subform UI"
        (-> f meta :component) => 'Cls)))
  (component "form-switcher-input"
    (let [f (f/form-switcher-input :name 'Cls :k)]
      (assertions
        "defaults as a to-many relation"
        (:input/cardinality f) => :many
        "is marked as a subform"
        (true? (:input/is-form? f)) => true
        "has a subform selection key"
        (:input/select-key f) => :k
        "has the correct type"
        (:input/type f) => ::f/switcher
        "tracks the class of the subform UI"
        (-> f meta :component) => 'Cls)))
  (component "id-field"
    (let [field (f/id-field :name)]
      (assertions
        "marks the field on the entity that represents the PK"
        (:input/name field) => :name
        "has the correct type"
        (:input/type field) => ::f/identity)))
  (component "text-input"
    (let [field (f/text-input :name :default-value "abc" :placeholder "Name" :className "fg" :validator 'valid? :validator-args {:v 1})]
      (assertions
        "has a name"
        (:input/name field) => :name
        "has a placeholder"
        (:input/placeholder field) => "Name"
        "supports a default value"
        (:input/default-value field) => "abc"
        "has the correct type"
        (:input/type field) => ::f/text
        "can have a validator"
        (:input/validator field) => 'valid?
        "supports a CSS class"
        (:input/css-class field) => "fg"
        "supports validator args"
        (:input/validator-args field) => {:v 1}))
    (let [field (f/text-input :name)]
      (assertions
        "placeholder defaults to empty string"
        (:input/placeholder field) => ""
        "default value defaults to empty string"
        (:input/default-value field) => ""
        "CSS class defaults to nothing"
        (:input/css-class field) => "")))
  (component "integer-input"
    (let [field (f/integer-input :age :default-value 55 :className "fg" :validator 'valid? :validator-args {:v 1})]
      (assertions
        "supports a default value"
        (:input/default-value field) => 55
        "supports a CSS class"
        (:input/css-class field) => "fg"
        "has a name"
        (:input/name field) => :age
        "has the correct type"
        (:input/type field) => ::f/integer
        "can have a validator"
        (:input/validator field) => 'valid?
        "supports validator args"
        (:input/validator-args field) => {:v 1}))
    (let [field (f/integer-input :age)]
      (assertions
        "default value defaults to 0"
        (:input/default-value field) => 0
        "CSS class defaults to empty string"
        (:input/css-class field) => "")))
  (component "checkbox-input"
    (let [field (f/checkbox-input :name)
          field-1 (f/checkbox-input :name :default-value true)]
      (assertions
        "has a name"
        (:input/name field) => :name
        "defaults to false"
        (false? (:input/default-value field)) => true
        "can be set to default to true"
        (true? (:input/default-value field-1)) => true
        "has the correct type"
        (:input/type field) => ::f/checkbox)))
  (component "dropdown-input"
    (let [field (f/dropdown-input :name [(f/option :a "A") (f/option :b "B")])]
      (assertions
        "has a name"
        (:input/name field) => :name
        "CSS class defaults to empty string"
        (:input/css-class field) => ""
        "Requires a list of options"
        (f/dropdown-input :name []) =throws=> (js/Error.)
        (f/dropdown-input :name [{:a 1}]) =throws=> (js/Error.)
        "Defaults to 'unselected'"
        (:input/default-value field) => ::f/none
        "Has the correct type"
        (:input/type field) => ::f/dropdown))
    (let [field (f/dropdown-input :name [(f/option :a "A") (f/option :b "B")]
                                  :default-value :a
                                  :className "fld")]
      (assertions
        "CSS class defaults to empty string"
        (:input/css-class field) => "fld"
        "Can default to one of the options"
        (:input/default-value field) => :a
        "Throws an exception if the default isn't defined in the option list"
        (f/dropdown-input :name [(f/option :a "A")] :default-value :x) =throws=> (js/Error.)))))

(specification "Building a Form"
  (component "The default state of a form"
    (component "id fields"
      (let [fields [(f/id-field :db/id)]
            default-state (f/default-state fields)]
        (assertions
          "are marked as valid to start"
          (-> default-state :db/id :input/valid) => :valid
          "are given an Om tempid by default"
          (-> default-state :db/id :input/value om/tempid?) => true)))
    (component "non-id fields"
      (let [fields [(f/text-input :name :default-value :ABC)]
            default-state (f/default-state fields)]
        (assertions
          "are marked as validation :unchecked to start"
          (-> default-state :name :input/valid) => :unchecked
          "are given a default value defined by the field type"
          (-> default-state :name :input/value) => :ABC))))
  (component "The initialized state of a form"
    (let [entity {:a 1}
          field-keys [:a :b]
          default-state {:a {:input/value 0} :b {:input/value "X"}}
          initial-state (f/initialized-state default-state [:a :b] entity)]
      (assertions
        "overwrites the defaults with the entity state being augmented"
        (-> initial-state :a :input/value) => 1
        "leaves defaults alone when the entity state does not contain them"
        (-> initial-state :b :input/value) => "X"
        "tolerates nil and empty entities"
        (f/initialized-state default-state field-keys {}) => default-state
        (f/initialized-state default-state field-keys nil) => default-state))))

(defui Person
  static om/Ident
  (ident [this props] [:people/by-id (:db/id props)])
  static f/IForm
  (form-elements [this] [(f/subform-element :person/mate Person :one)]))

(specification "Initializing a to-one form relation"
  (let [app-state {:people/by-id {1 {:db/id 1 :person/mate [:people/by-id 2]}
                                  2 {:db/id 2 :person/mate [:people/by-id 1]}
                                  3 {:db/id 3}
                                  4 {:db/id 4 :person/mate [[:people/by-id 3] [:people/by-id 1]]}}}
        base-form (get-in app-state [:people/by-id 1])
        spec (-> (f/form-elements Person) first)]
    (when-mocking
      (f/init-form* state class ident v) =1x=> (do
                                                 (assertions
                                                   "initializes the proper target form"
                                                   ident => [:people/by-id 2]
                                                   "finds the proper class of the form"
                                                   class => Person)
                                                 :new-state)
      (let [actual (f/init-one app-state base-form spec {})]
        (assertions
          "returns the value of a call to init-form"
          actual => :new-state)))
    (when-mocking
      (f/init-form* state class ident v) =1x=> :A

      (assertions
        "Is ok when the target is nil"
        (f/init-one app-state (get-in app-state [:people/by-id 3]) spec {}) => :A
        "Throws an error when targeting a to-many"
        (f/init-one app-state (get-in app-state [:people/by-id 4]) spec {}) =throws=> (js/Error.)
        ))))

(defui PolyPerson
  static om/Ident
  (ident [this props] [:people/by-id (:db/id props)])
  static f/IForm
  (form-elements [this] [(f/subform-element :person/mate PolyPerson :many)]))

(specification "Initializing a to-many form relation"
  (let [app-state {:people/by-id {1 {:db/id 1 :person/mate [:people/by-id 2]}
                                  2 {:db/id 2 :person/mate [:people/by-id 1]}
                                  3 {:db/id 3}
                                  4 {:db/id 4 :person/mate [[:people/by-id 3] [:people/by-id 1]]}}}
        base-form (get-in app-state [:people/by-id 4])
        spec (-> (f/form-elements PolyPerson) first)]
    (when-mocking
      (f/init-form* state class ident v) =1x=> (do
                                                 (assertions
                                                   "initializes the first item"
                                                   ident => [:people/by-id 3]
                                                   "finds the proper class of the form"
                                                   class => PolyPerson)
                                                 state)
      (f/init-form* state class ident v) =1x=> (do
                                                 (assertions
                                                   "initializes the other item(s)"
                                                   ident => [:people/by-id 1]
                                                   "finds the proper class of the form"
                                                   class => PolyPerson)
                                                 :new-state)
      (let [actual (f/init-many app-state base-form spec {})]
        (assertions
          "returns the state of the final init-state"
          actual => :new-state)))
    (assertions
      "Is ok when the target is nil"
      (f/init-many app-state (get-in app-state [:people/by-id 3]) spec #{}) => app-state
      "Throws an error when targeting a to-one"
      (f/init-many app-state (get-in app-state [:people/by-id 1]) spec #{}) =throws=> (js/Error.))))

(specification "Initializing a recursive form"
  (assertions
    "detects initialized forms by looking for form state"
    (f/initialized? {:db/id 1}) => false
    (f/initialized? {:db/id 1 :ui/form {}}) => true)
  (let [app-state {:people/by-id {1 {:db/id 1 :person/mate [:people/by-id 2]}
                                  2 {:db/id 2 :person/mate [:people/by-id 1]}}}
        tm-app-state {:people/by-id {1 {:db/id 1 :person/mate [[:people/by-id 2] [:people/by-id 3]]}
                                     2 {:db/id 2 :person/mate [[:people/by-id 1]]}
                                     3 {:db/id 3 :person/mate [[:people/by-id 1]]}}}]
    (provided "when the form is already initialized"
      (f/initialized? f) => true

      (assertions
        "Just returns the unmodified app state"
        (f/init-form app-state Person [:people/by-id 1]) => app-state))
    (provided "when the form is partially initialized (to-one)"
      (f/initialized? f) => (= 1 (:db/id f))

      (let [result (f/init-form app-state Person [:people/by-id 1])]
        (assertions
          "still initializes the nested form"
          (get-in result [:people/by-id 2 :ui/form :ident]) => [:people/by-id 2])))
    (provided "when the form is partially initialized (to-many)"
      (f/initialized? f) => (= 1 (:db/id f))

      (let [result (f/init-form tm-app-state PolyPerson [:people/by-id 1])]
        (assertions
          "still initializes the nested form"
          (get-in result [:people/by-id 2 :ui/form :ident]) => [:people/by-id 2]
          (get-in result [:people/by-id 3 :ui/form :ident]) => [:people/by-id 3])))
    (let [actual (f/init-form app-state Person [:people/by-id 1])]
      (assertions
        "properly initializes a nested to-one form (integration)"
        (get-in actual [:people/by-id 1 :ui/form :ident]) => [:people/by-id 1]
        (get-in actual [:people/by-id 2 :ui/form :ident]) => [:people/by-id 2]))
    (let [actual (f/init-form tm-app-state PolyPerson [:people/by-id 1])]
      (assertions
        "properly initializes a nested to-many form (integration)"
        (get-in actual [:people/by-id 1 :ui/form :ident]) => [:people/by-id 1]
        (get-in actual [:people/by-id 3 :ui/form :ident]) => [:people/by-id 3]
        (get-in actual [:people/by-id 2 :ui/form :ident]) => [:people/by-id 2]))))

(comment
  (defui LeafForm
    static uc/InitialAppState
    (initial-state [this {:keys [id]}] {:id id :value 1 :leaf true})
    static om/IQuery
    (query [this] [:id :leaf])
    static om/Ident
    (ident [this props] [:leaf (:id props)])
    static f/IForm
    (subforms [this] [])
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
    (subforms [this] [(f/subform-element :leaves)])
    (fields [this] []))


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
    (subforms [this] [(f/subform-element :leaf1)
                      (f/subform-element :leaf2)
                      (f/subform-element :leaf3)])
    (fields [this] []))

  (defui OtherRootForm
    static uc/InitialAppState
    (initial-state [this {:keys [id]}] {:id id :value 50 :other true})
    static om/IQuery
    (query [this] [:id :other])
    static om/Ident
    (ident [this props] [:other (:id props)])
    static f/IForm
    (subforms [this] [])
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
    (subforms [this] [(f/subform-element :level2)])
    (fields [this] []))

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
  )
