(ns untangled.components.ui.forms
  (:require
    [clojure.set :as set]
    [clojure.string :as str]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [om.util :as util]
    [untangled.client.core :as uc]
    [untangled.client.data-fetch :as df]
    [untangled.client.logging :as log]
    [untangled.client.mutations :as m]
    [untangled.i18n :refer [tr]]))

(defprotocol IForm
  (form-elements [this] "Returns the subform/field definitions for form support."))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ELEMENT DEFINITIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn subform-element
  "Declare that the current form links to subforms through the given entity property in a :one or :many capacity. this
  must be included in your list of form elements if you want form interactions to trigger across a form group."
  ([field form-class] (subform-element field form-class :one))
  ([field form-class cardinality]
   (when (not (and (implements? om/Ident form-class)
                   (implements? IForm form-class)
                   (implements? om/IQuery form-class)))
     (log/error "Subform element " field " (ignored). It points at " form-class " which MUST implement IForm, IQuery, and Ident."))
   (with-meta {:input/name        field
               :input/is-form?    true
               :input/cardinality (or (#{:one :many} cardinality) :many)
               :input/type        ::subform}
              {:component form-class})))

(defn form-switcher-input
  "Create a field that understands it points to a to-many list of subforms, only one of which
  can be interacted with at a time, but all of which will be affected by top-level form operations like commit and
  validate. Functions like `valid?` check the validity of the list of subforms when applied to such a
  field. Rendering such a field requires that you pass the desired value of `select-key` to select the subform."
  [field FormClass select-key]
  (assoc (subform-element field FormClass :many)
    :input/type ::switcher
    :input/select-key select-key))

(defn id-field
  "Declare a hidden identity field. Required to read/write to/from other db tables, and to make sure tempids and such
  follow along properly."
  [name]
  {:input/name name
   :input/type ::identity})

(defn text-input
  "Declare a text input on a form"
  [name & {:keys [validator validator-args className default-value placeholder] :or {placeholder "" default-value "" className ""}}]
  {:input/name           name
   :input/default-value  default-value
   :input/placeholder    placeholder
   :input/validator      validator
   :input/validator-args validator-args
   :input/css-class      className
   :input/type           ::text})

(defn integer-input
  "Declare an integer input on a form"
  [name & {:keys [validator validator-args className default-value] :or {default-value 0 className ""}}]
  {:input/name           name
   :input/default-value  default-value
   :input/validator      validator
   :input/validator-args validator-args
   :input/css-class      className
   :input/type           ::integer})

(defn checkbox-input
  "Declare a checkbox on a form"
  [name & {:keys [className default-value] :or {default-value false}}]
  {:input/type          ::checkbox
   :input/default-value (boolean default-value)
   :input/css-class     className
   :input/name          name})

(defn dropdown-input
  "Declare a dropdown menu selector."
  [name options & {:keys [default-value className] :or {default-value ::none className ""}}]
  {:pre [(or (= default-value ::none)
             (some #(= default-value (:option/key %)) options))
         (and (seq options)
              (every? :option/key options))]}
  {:input/type          ::dropdown
   :input/default-value default-value
   :input/options       options
   :input/css-class     className
   :input/name          name})

(defn option
  "Create an option for use in a dropdown"
  [key label]
  {:option/key   key
   :option/label label})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; GENERAL FORM STATE ACCESS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn form-component
  "Get the UI component that declared the given form."
  [form]
  (-> form :ui/form meta :component))

(defn form-ident
  "Get the ident of this form's entity"
  [form]
  (get-in form [:ui/form :ident]))

(defn field-config
  "Get the configuration for the given field in the form."
  [form name]
  (get-in form [:ui/form :elements/by-name name]))

(defn field-type
  "Get the configuration for the given field in the form."
  [form name]
  (:input/type (field-config form name)))

(defn is-subform?
  ([element]
   (:input/is-form? element))
  ([form name]
   (:input/is-form? (field-config form name))))

(defn- is-ui-query-fragment?
  "TODO: Maybe make public from untangled-client ?"
  [kw] (when (keyword? kw) (some->> kw namespace (re-find #"^ui(?:\.|$)"))))

(defn ui-field?
  "For checking if a field is only a ui concern.
   eg: should therefore not be sent to the server."
  [form field]
  (-> (field-config form field)
    :input/name is-ui-query-fragment?))

(defn current-value
  "Gets the current value of a field in a form."
  [form field] (get form field))

(defn update-current-value
  "Updates the current value of a field in a form (with a fn)."
  [form field f & args] (apply update form field f args))

(defn set-current-value
  "Sets the current value of a field in a form."
  [form field value] (update-current-value form field (constantly value)))

(defn css-class
  "Gets the css class for the form field"
  [form field]
  (:input/css-class (field-config form field)))

(defn element-names
  "Get all of the field names that are defined on the form."
  [form]
  (keys (get-in form [:ui/form :elements/by-name])))

(defn get-original-data
  "Get the unmodified copy of the form state from when it was first initialized."
  ([form] (get-in form [:ui/form :origin]))
  ([form field] (get (get-original-data form) field)))

(declare validator)

(defn validatable-fields
  "Get all of the names of the validatable fields that are defined on the (initialized) form."
  [form] (filter #(not (is-subform? (field-config form %)))
                 (element-names form)))

(defn commit-state
  "Commits the state of the form to the entity, making it the new original data."
  [form] (assoc-in form [:ui/form :origin]
           (select-keys form (keys (get-original-data form)))))

(defn reset-entity
  "Resets the form back to the original state, ie when it was first created/initialized"
  [form] (merge form (get-original-data form)))

(defn- subforms*
  "Returns a map whose keys are the query key-path from the component's query that point to subforms, and whose values are the
   defui component of that form (e.g. `{ [:k :k2] Subform }`). This will give you ALL of the current subforms declared in the static query and IForm
   fields. NOTE: union queries in grouped forms are not supported, since there would be no way to auto-gather non-displayed
   forms in the 'current' state.

   Use get-forms to obtain the current state of active forms. It is a gathering mechanism only."
  ([form-class] (subforms* form-class []))
  ([form-class current-path]
   (let [ast (om/query->ast (om/get-query form-class))
         elements (form-elements form-class)
         subform-fields (set (keep (fn [f] (when (is-subform? f) (:input/name f))) elements))
         get-class (fn [ast-node] (let [subquery (:query ast-node)]
                                    (if (or (int? subquery) (= '... subquery))
                                      (do
                                        (log/error "Forms do not support recursive-query-based subforms!")
                                        form-class)
                                      (:component ast-node))))
         is-form-node? (fn [ast-node]
                         (let [form-class (get-class ast-node)
                               prop (:key ast-node)
                               join? (= :join (:type ast-node))
                               union? (and join? (map? (:query ast-node)))
                               wants-to-be? (contains? subform-fields prop)]
                           (when (and union? wants-to-be?)
                             (log/error "Subforms cannot be on union queries. You will have to manually group your subforms if you use unions."))
                           (when (and
                                   wants-to-be?
                                   (not (and (implements? om/Ident form-class) (implements? IForm form-class)
                                          (implements? om/IQuery form-class))))
                             (log/error "Declared subform for property " prop " does not implement IForm, IQuery, and Ident." ast-node))
                           (and form-class wants-to-be? join? (not union?) (implements? om/IQuery form-class)
                             (implements? om/Ident form-class) (implements? IForm form-class))))
         sub-forms (->> ast :children
                     (keep (fn [ast-node]
                             (when (is-form-node? ast-node)
                               (let [path (conj current-path (:key ast-node))
                                     form-class (get-class ast-node)]
                                 [path form-class])))))]
     (reduce (fn [collected-so-far [path component]]
               (-> collected-so-far
                 (conj [path component])
                 (into (subforms* component path))))
       [] sub-forms))))

(defn- to-idents
  "Follows a key-path through the graph database started from the current object. Follows to-one and to-many joins.
   Results in a sequence of all of the idents of the items indicated by the given key-path from the given object."
  [app-state current-object key-path]
  (loop [path key-path obj current-object]
    (let [k (first path)
          remainder (rest path)
          v (get obj k)
          to-many? (and (vector? v) (every? util/ident? v))
          ident? (and (not to-many?) (util/ident? v))
          many-idents (if-not to-many? []
                        (apply concat
                          (map-indexed (fn [idx _] (to-idents app-state v (conj remainder idx)))
                            v)))
          result (vec (keep identity (conj many-idents (when ident? v))))]
      (if (and ident? (seq remainder))
        (recur remainder (get-in app-state v))
        result))))

(defn get-forms
  "Reads the app state database starting at form-ident, and returns a sequence of :

  {:ident ident :class form-class :form form-value}

  for the top form and all of its **declared** subforms. Useful for running transforms and collection across a nested form.

  If there are any to-many relations in the database, they will be expanded to individual entries of the returned sequence.
  "
  [app-state root-form-class form-ident]
  (let [form (get-in app-state form-ident)
        subforms (subforms* root-form-class)
        result (mapcat (fn [[query-key-path class]]
                         (for [ident (to-idents app-state form query-key-path)]
                           (let [value (get-in app-state ident)]
                             {:ident ident :class class :form value})))
                 subforms)]
    (filter :ident (conj result {:ident form-ident :class root-form-class :form form}))))

(defn update-forms
  "Similar to update-in, but walks your form declaration to affect all (initialized and preset) nested forms.
  Useful for applying validation or some mutation to all forms. Returns the new app-state. You supply a
  `(form-update-fn form-spec) => form`, where `form-spec` is a map with keys `:class` (the component that has the form),
  `:ident` (of the form in app state), and `:form` (the value of the form in app state)."
  [app-state form form-update-fn]
  (let [form-ident (form-ident form)
        class (form-component form)
        form-specs (get-forms app-state class form-ident)
        updated-form-specs (map (fn [form-spec]
                                  (assoc form-spec :form (form-update-fn form-spec)))
                             form-specs)]
    (reduce (fn [s {:keys [ident form]}]
              (assoc-in s ident form))
      app-state updated-form-specs)))

(defn reduce-forms
  "Similar to reduce, but walks the forms. Useful for gathering information from nested forms (eg: are all of them valid?).
   At each form it calls (form-fn accumulator {:keys [ident form class]}). The first visit will
   use `starting-value` as the initial accumulator, and the return value of form-fn will become the new accumulator.

   Returns the final accumulator value."
  [app-state form form-fn starting-value]
  (let [form-ident (form-ident form)
        class (form-component form)
        form-specs (get-forms app-state class form-ident)]
    (reduce (fn [acc spec] (form-fn acc spec))
      starting-value form-specs)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; FORM CONSTRUCTION
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn default-state
  "INTERNAL METHOD. Get the default state configuration for the given field definitions.
   MUST ONLY BE PASSED PURE FIELDS. Not subforms."
  [fields]
  (let [names (map :input/name fields)
        parsed-fields (map (fn [f] (if (= ::identity (:input/type f))
                                     {:value (om/tempid) :valid :valid}
                                     {:value (:input/default-value f) :valid :unchecked}))
                        fields)]
    {:state (zipmap names (map :value parsed-fields))
     :validation (zipmap names (map :valid parsed-fields))}))

(defn initialized-state
  "INTERNAL. Get the initialized state of the form based on default state of the fields and the current entity state"
  [empty-form-state field-keys-to-initialize entity]
  {:pre [(and (seq field-keys-to-initialize) (every? keyword? field-keys-to-initialize))]}
  (reduce (fn [s k] (if-let [v (get entity k)]
                      (assoc s k v)
                      s))
    empty-form-state field-keys-to-initialize))

(defn build-form
  "Build an empty form based on the given entity state. Returns an entity that is compatible with the original, but
   that has had form support added. If any fields are declared on
   the form that do not exist in the entity, then the form will fill those with
   the default field values for the declared input fields.
   This function does **not** recursively build out nested forms, even when declared. See `init-form`."
  [form-class entity-state]
  (let [elements (form-elements form-class)
        element-keys (map :input/name elements)
        elements-by-name (zipmap element-keys elements)
        {:keys [state validation]} (default-state elements)
        entity-state-of-interest (select-keys entity-state element-keys)
        init-state (initialized-state state element-keys entity-state-of-interest)
        final-state (merge entity-state init-state)]
    (-> final-state
      (assoc :ui/form
        (with-meta {:elements/by-name elements-by-name
                    :ident            (om/ident form-class final-state)
                    :origin           (into {} (map (fn [[k v]]
                                                      [k (if (and (is-subform? (elements-by-name k))
                                                               (not (or (util/ident? v)
                                                                        (every? util/ident? v))))
                                                           (case (:input/cardinality (elements-by-name k))
                                                             :many (mapv form-ident v)
                                                             (form-ident v))
                                                           v)])
                                                 init-state))
                    :subforms         (or (filterv :input/is-form? elements) [])
                    :validation       validation}
          {:component form-class})))))

(declare init-form*)

(defn initialized? "Returns true if the given form is already initialized with form setup data"
  [form]
  (map? (:ui/form form)))

(defn init-one
  [state base-form subform-spec visited]
  (let [k (:input/name subform-spec)
        subform-class (some-> subform-spec meta :component)
        subform-ident (get base-form k)
        visited (update-in visited subform-ident inc)]
    (assert (or (nil? subform-ident)
                (util/ident? subform-ident))
      "Initialize-one form did not find a to-one relation in the database")
    (if (or (nil? (second subform-ident))
            (> (get-in visited subform-ident) 1))
      state
      (init-form* state subform-class subform-ident visited))))

(defn init-many
  [state base-form subform-spec visited]
  (let [k (:input/name subform-spec)
        subform-idents (get base-form k)
        subform-class (some-> subform-spec meta :component)
        visited (reduce (fn [v ident] (update-in v ident inc)) visited subform-idents)]
    (assert (or (nil? subform-idents)
                (every? util/ident? subform-idents))
      "Initialize-many form did not find a to-many relation in the database")
    (reduce (fn [st f-ident]
              (if (or
                    (nil? (second f-ident))
                    (> (get-in visited f-ident) 1))
                st
                (init-form* st subform-class f-ident visited)))
      state subform-idents)))

(defn- init-form*
  [app-state form-class form-ident forms-visited]
  (if-let [form (get-in app-state form-ident)]
    (let [elements (form-elements form-class)
          subforms (filter :input/is-form? elements)
          base-form (if (initialized? form) form (build-form form-class form))
          base-app-state (assoc-in app-state form-ident base-form)]
      (reduce (fn [state subform-spec]
                (if (= :many (:input/cardinality subform-spec))
                  (init-many state base-form subform-spec forms-visited)
                  (init-one state base-form subform-spec forms-visited)))
        base-app-state subforms))
    app-state))

(defn init-form
  "Recursively initialize a form from an app state database. Will follow subforms (even when top-levels are initialized).
  Returns the new app state (can be used to `swap!` on app state atom). Will **not** add forms where there is not
  already an entity in the database. If there are subforms, this function will only initialize those that are present
  AND uninitialized. Under no circumstances will this function re-initialize a form or subform."
  [app-state form-class form-ident] (init-form* app-state form-class form-ident {}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; VALIDATION SUPPORT
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn current-validity
  [form field]
  (get-in form [:ui/form :validation field]))

(defn invalid?
  "Returns true iff the form or field has been validated, and the validation failed. Using this on a form ignores unchecked
  fields, so you should run validate-entire-form! before trusting this value on a form."
  ([form] (reduce (fn [result field] (or result (invalid? form field)))
            false (validatable-fields form)))
  ([form field] (= :invalid (current-validity form field))))

(defn valid?
  "Returns true iff the field has been validated, and the validation is ok.
   Running this on a form is only reliable if you've already validated the entire form (validate-entire-form!)."
  ([form] (reduce (fn [result field] (and result (valid? form field)))
            true (validatable-fields form)))
  ([form field] (= :valid (current-validity form field))))

(defn validator
  "Returns the validator symbol from the form field"
  [form field]
  (:input/validator (field-config form field)))

(defn validator-args
  "Returns the validator args from the form field"
  [form field]
  (:input/validator-args (field-config form field) {}))

(defn set-validation [form field value]
  (assoc-in form [:ui/form :validation field] value))

(defmulti form-field-valid? "Extensible form field validation. Triggered by symbols. Arguments (args) are declared on the fields themselves."
  (fn [symbol value args] symbol))

;; Sample validator that requires a number be in the (inclusive) range.
(defmethod form-field-valid? 'in-range? [_ value {:keys [min max]}]
  (let [value (int value)]
    (<= min value max)))

(defn validate-field
  "Given a form and a field, returns a new form with that field validated. Does NOT recurse into subforms."
  [form field]
  (set-validation form field
    (if-let [validator (validator form field)]
      (let [validator-args (validator-args form field)
            valid? (form-field-valid? validator (current-value form field) validator-args)]
        (if valid? :valid :invalid))
      :valid)))

(defn validate-fields
  "Runs validation on the defined fields and returns a new form with them properly marked."
  [form]
  (let [field-ids (validatable-fields form)]
    (reduce (fn [form field-id] (validate-field form field-id))
      form field-ids)))

(defn dirty?
  "Returns true if the entity state does not match the form state, or if it contains a tempid.
   Does NOT recurse into subforms"
  [form]
  (boolean
    (some #(let [curr (current-value form %)]
             (or (om/tempid? curr)
                 (not= curr (get-original-data form %))))
          (validatable-fields form))))

(defn any-dirty?
  "Checks if the top-level form, or any of the subforms, are dirty."
  [app-state form]
  (reduce-forms app-state form
    (fn [d? {:keys [form]}] (or d? (dirty? form)))
    false))

(defn validate-forms
  "Run validation on an entire form (by ident) with subforms. Returns an updated app-state."
  [app-state form-id]
  (let [form (get-in app-state form-id)
        form-class (form-component form)]
    (if form-class
      (update-forms app-state form (comp validate-fields :form))
      (do
        (log/error "Unable to validate form. No component associated with form. Did you remember to use build-form?")
        app-state))))

;; TODO: TESTME
(defmethod m/mutate `validate-field [{:keys [state]} k {:keys [form-id field]}]
  {:doc "Mutation to run validation on a specific field"
   :action #(swap! state update-in form-id validate-field field)})

;; TODO: TESTME
(defmethod m/mutate `validate-form [{:keys [state]} k {:keys [form-id]}]
  {:doc "Mutation to run validation on an entire form"
   :action (fn []
             (let [form (get-in @state form-id)]
               (if form
                 (swap! state update-forms form (comp validate-fields :form))
                 (log/error "Unable to validate form. No component associated with form. Did you remember to use build-form?"))))})

;; TODO: TESTME
(defn validate-entire-form!
  "Trigger whole-form validation as a TRANSACTION. The form will not be validated upon return of this function,
   but the UI will update after validation is complete. If you want to test if a form is valid use validate-fields on
   the state of the form to obtain an updated validated form. If you want to trigger validation as *part* of your
   own transaction (so your mutation can see the validated form), you may use the underlying
   `(f/validate-form {:form-id fident})` mutation in your own call to `transact!`."
  [comp-or-reconciler form]
  (om/transact! comp-or-reconciler
    `[(validate-form ~{:form-id (form-ident form)})
      :ui/form-root]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; GENERAL FORM MUTATION METHODS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmethod m/mutate `toggle-field [{:keys [state]} k {:keys [form-id field]}]
  {:action (fn [] (swap! state update-in form-id update-current-value field not))})

(defmethod m/mutate `set-field [{:keys [state]} k {:keys [form-id field value]}]
  {:action (fn [] (swap! state update-in form-id set-current-value field value))})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; FORM FIELD RENDERING
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; TODO: TESTME
(defmulti form-field*
  "Multimethod for rendering field types. Dispatches on field :input/type."
  (fn [component form name & params]
    (:input/type (field-config form name))))

(defmethod form-field* :default [component form name]
  (log/error "Cannot dispatch to form-field renderer on form " form " for field " name))

;; TODO: TESTME
(defn form-field
  "Function for rendering form fields. Call this to render, but `defmethod` on `form-field*`."
  [component form name & params]
  (apply form-field* component form name params))

(defn render-text-field [component form name]
  (let [id (form-ident form)
        text-value (or (current-value form name) "")
        cls (or (css-class form name) "form-control")]
    (dom/input #js
      {:type      "text"
       :name      name
       :value     text-value
       :className cls
       :onChange  (fn [event]
                    (om/transact! component
                      `[(set-field
                          ~{:form-id id
                            :field   name
                            :value   (.. event -target -value)})
                        :ui/form-root]))})))

(defmethod form-field* ::text [component form name]
  (render-text-field component form name))

(defn render-integer-field [component form name]
  (let [id (form-ident form)
        cls (or (css-class form name) "form-control")
        text-value (current-value form name)]
    (dom/input #js
      {:type      "number"
       :name      name
       :className cls
       :value     text-value
       :onBlur    (fn [_]
                    (om/transact! component
                      `[(validate-field
                          ~{:form-id id :field name})
                        :ui/form-root]))
       :onChange  (fn [event]
                    (let [raw-value (.. event -target -value)
                          v (if (seq (re-matches #"^[0-9]*$" raw-value))
                              (int raw-value)
                              raw-value)]
                      (om/transact! component
                        `[(set-field
                            ~{:form-id id
                              :field   name
                              :value   v})
                          :ui/form-root])))})))

(defmethod form-field* ::integer [component form name]
  (render-integer-field component form name))

(defmethod m/mutate `select-option
  [{:keys [state]} k {:keys [form-id field value]}]
  {:action (fn [] (let [value (.substring value 1)]
                    (swap! state assoc-in
                      (conj form-id field)
                      (keyword value))))})

(defmethod form-field* ::dropdown [component form name]
  (let [id (form-ident form)
        selection (current-value form name)
        cls (or (css-class form name) "form-control")
        field (field-config form name)
        optional? (= ::none (:input/default-value field))
        options (:input/options field)]
    (dom/select #js
      {:name      name
       :className cls
       :value     selection
       :onChange  (fn [event]
                    (om/transact! component
                      `[(select-option
                          ~{:form-id id
                            :field   name
                            :value   (.. event -target -value)})
                        :ui/form-root]))}
      (when optional?
        (dom/option #js {:value ::none} ""))
      (map (fn [{:keys [option/key option/label]}]
             (dom/option #js {:key key :value key} label))
        options))))

(defmethod form-field* ::checkbox [component form name]
  (let [id (form-ident form)
        cls (or (css-class form name) "")
        bool-value (current-value form name)]
    (dom/input #js
      {:type      "checkbox"
       :name      name
       :className cls
       :checked   bool-value
       :onChange  (fn [event]
                    (om/transact! component
                      `[(toggle-field
                          ~{:form-id id
                            :field   name})
                        :ui/form-root]))})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; LOAD AND SAVE FORM TO/FROM ENTITY
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn diff-form
  "Returns the diff between the form's current state and its original data.
   The return value is a map where the keys are the idents of the forms that have changed,
   and the values are vectors of the keys for the fields that changed on that form."
  [app-state form & [xf]]
  (reduce-forms app-state form
    (fn [diff {:keys [ident form]}]
      (let [fields (element-names form)
            diff-for-form
            (into {}
              (cond->>
                (map #(let [curr (current-value form %)
                            orig (get-original-data form %)]
                        (when-not (= curr orig)
                          [% (let [cfg (field-config form %)]
                               (case (:input/cardinality cfg)
                                 :many (let [additions (set/difference (set curr) (set orig))
                                             deletions (set/difference (set orig) (set curr))]
                                         (cond-> {}
                                           (seq deletions) #_=> (assoc :del (vec deletions))
                                           (seq additions) #_=> (assoc :add (vec additions))))
                                 (cond-> {}
                                   curr #_=> (assoc :new curr)
                                   orig #_=> (assoc :old orig))))])))
                xf (comp (xf form)))
              fields)]
        (cond-> diff (seq diff-for-form)
          (assoc ident diff-for-form))))
    {}))

(defn reset-from-entity!
  "Reset the form from a given entity in your application database using an Om transaction and update the validation state.
   You may compose your own Om transactions and use `(f/reset-from-entity {:form-id [:entity id]})` directly."
  [comp-or-reconciler form]
  (let [form-id (form-ident form)]
    (om/transact! comp-or-reconciler
      `[(reset-from-entity ~{:form-id form-id})
        (validate-form ~{:form-id form-id})
        :ui/form-root])))

(defn commit-to-entity!
  "Copy the given form state into the given entity. If remote is supplied, then it will optimistically update the app
   database and also post the entity to the server.

   IMPORTANT: This function checks the validity of the form. If it is invalid, it will NOT commit the changes, but will
   instead trigger an update of the form in the UI to show validation errors.

   For remotes to work you must implement `(f/commit-to-entity {:form-id [:id id] :value {...})`
   on the server. "
  [component & {:keys [remote rerender] :or {remote false}}]
  (let [form (om/props component)]
    (om/transact! component
      (reduce conj
        [(let [form-id (form-ident form)]
           (if (valid? (validate-fields form))
             `(commit-to-entity ~{:form-id form-id :remote remote})
             `(validate-form ~{:form-id form-id})))
         :ui/form-root]
        rerender))))

(defn entity-x-form
  "Modify the form's (under `form-id`) using `update-forms` and a passed in transform `xf`"
  [state form-id xf]
  (update-forms state
    (get-in state form-id)
    (comp xf :form)))

(defmethod m/mutate `commit-to-entity
  [{:keys [state ast]} k {:keys [form-id remote]}]
  (let [delta (diff-form @state (get-in @state form-id)
                (fn [form] (remove (partial ui-field? form))))]
    {:doc "Mutation for moving form data from the form into an entity
           eg: commit an entity to storage & make it the new origin for the entity"
     :remote (and remote (update ast :params #(-> % (dissoc :remote) (assoc :delta delta))))
     :action (fn [] (swap! state entity-x-form form-id commit-state))}))

(defmethod m/mutate `reset-from-entity
  [{:keys [state ast]} k {:keys [form-id remote]}]
  {:doc "Mutation for moving form data from the entity into the form
         eg: reset an entity to its original value"
   :remote (and remote (update ast :params dissoc :remote))
   :action (fn [] (swap! state entity-x-form form-id reset-entity))})
