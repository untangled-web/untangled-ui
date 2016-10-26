(ns untangled.components.ui.forms
  (:require [om.dom :as dom]
            [untangled.i18n :refer [tr]]
            [om.next :as om :refer [defui]]
            [clojure.string :as str]
            [untangled.client.logging :as log]
            [untangled.client.mutations :as m]
            [untangled.client.core :as uc]
            [untangled.client.data-fetch :as df]
            [om.util :as util]))

(defprotocol IForm
  (form-elements [this] "Returns the subform/field definitions for form support."))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ELEMENT DEFINITIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn subform-element
  "Declare that the current form links to subforms through the given entity property in a :one or :many capacity. this
  must be included in your list of form elements if you want form interactions to trigger across a form group."
  ([field FormClass] (subform-element field FormClass :one))
  ([field FormClass cardinality]
   (with-meta {:input/name        field
               :input/is-form?    true
               :input/cardinality (or (#{:one :many} cardinality) :many)
               :input/type        ::subform}
              {:component FormClass})))

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
;; FORM CONSTRUCTION
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn default-state
  "INTERNAL METHOD. Get the default state configuration for the given field definitions.
  MUST ONLY BE PASSED PURE FIELDS. Not subforms."
  [fields]
  (zipmap (map :input/name fields) (map (fn [f] (if (= ::identity (:input/type f))
                                                  {:input/valid :valid
                                                   :input/value (om/tempid)}
                                                  {:input/valid :unchecked
                                                   :input/value (:input/default-value f)})) fields)))

(defn initialized-state
  "INTERNAL. Get the initialized state of the form based on default state of the fields and the current entity state"
  [empty-form-state field-keys-to-initialize entity]
  {:pre [(and (seq field-keys-to-initialize) (every? keyword? field-keys-to-initialize))]}
  (reduce (fn [s k] (if-let [v (get entity k)]
                      (assoc-in s [k :input/value] v)
                      s)) empty-form-state field-keys-to-initialize))

(defn build-form
  "Build an empty form based on the given entity state. Returns an entity that is compatible with the original, but
   that has had form support added. If any fields are declared on
   the form that do not exist in the entity, then the form will fill those with
   the  default field values for the declared input fields.
   This function does **not** recursively build out nested forms, even when declared. See `init-form`."
  [form-class entity-state]
  (let [elements (form-elements form-class)
        subforms (filter :input/is-form? elements)
        fields (filter #(not= ::subform (:input/type %)) elements)
        elements-by-name (zipmap (map :input/name elements) elements)
        normal-keys (keys elements-by-name)
        empty-state (default-state fields)
        state (initialized-state empty-state normal-keys entity-state)]
    (assoc entity-state :ui/form (with-meta {:ident            (om/ident form-class entity-state)
                                             :elements/by-name elements-by-name
                                             :subforms         (or subforms [])
                                             :state            state}
                                            {:component form-class}))))

(declare init-form)

(defn initialized? "Returns true if the given form is already initialized with form setup data"
  [form]
  (map? (:ui/form form)))

(defn init-one
  [state base-form subform-spec]
  (let [k (:input/name subform-spec)
        subform-class (some-> subform-spec meta :component)
        subform-ident (get base-form k)]
    (assert (or (nil? subform-ident)
                (util/ident? subform-ident)) "Initialize-one form did not find a to-one relation in the database")
    (init-form state subform-class subform-ident)))

(defn init-many
  [state base-form subform-spec]
  (let [k (:input/name subform-spec)
        subform-idents (get base-form k)
        subform-class (some-> subform-spec meta :component)]
    (assert (or (nil? subform-idents)
                (every? util/ident? subform-idents)) "Initialize-many form did not find a to-many relation in the database")
    (reduce (fn
              ([] state)
              ([st f-ident]
                 (init-form st subform-class f-ident))) state subform-idents)))

(defn init-form
  "Recursively initialize a form from an app state database. Will follow subforms. Returns the new app state (can be
  used to `swap!` on app state atom). Will **not** add forms where there is not already an entity in the database."
  [app-state form-class form-ident]
  (if-let [form (get-in app-state form-ident)]
    (if (initialized? form)
      app-state
      (let [elements (form-elements form-class)
            subforms (filter :input/is-form? elements)
            base-form (build-form form-class form)
            base-app-state (assoc-in app-state form-ident base-form)]
        (reduce (fn [state subform-spec]
                  (if (= :many (:input/cardinality subform-spec))
                    (init-many state form subform-spec)
                    (init-one state form subform-spec))) base-app-state subforms)))
    app-state))


(comment
  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  ;; GENERAL FORM STATE ACCESS
  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  (defn- subforms*
    "Returns a map whose keys are the keys of the component's query that point to subforms, and whose values are the
    defui component of that form. This will give you ALL of the current subforms declared in the static query and IForm
    fields. If your form crosses unions or has other data dependencies, then this will return all of them. Use get-forms to obtain the
    current state of active forms. It is a gathering mechanism only."
    ([form-class] (subforms* form-class []))
    ([form-class current-path]
     (let [ast (om/query->ast (om/get-query form-class))
           allowed-fields (set (keep (fn [f] (when (= ::subform (:input/type f)) (:input/name f))) (fields form-class)))
           is-form? (fn [ast-node] (let [form-class (:component ast-node)]
                                     (and
                                       (contains? allowed-fields (:key ast-node))
                                       (= :join (:type ast-node))
                                       (implements? om/IQuery form-class)
                                       (implements? om/Ident form-class)
                                       (implements? IForm form-class))))
           sub-forms (->> ast
                          :children
                          (keep (fn [ast-node] (when (is-form? ast-node) ast-node)))
                          (mapv (fn [node] [(conj current-path (:key node)) (:component node)])))
           all-forms (reduce (fn [collected-so-far [path component]]
                               (let [nested-forms (subforms* component path)]
                                 (if (seq nested-forms)
                                   (into collected-so-far nested-forms)
                                   collected-so-far)))
                             sub-forms
                             sub-forms)]
       all-forms)))

  (defn- to-idents
    "Follows a key-path through the graph database started from the current object. Follows to-one and to-many joins
    are results in a sequence of all of the idents of the items indicated by the given key-path from the given object."
    [app-state current-object key-path]
    (loop [path key-path obj current-object]
      (let [k (first path)
            remainder (rest path)
            v (get obj k)
            to-many? (and (vector? v) (every? util/ident? v))
            ident? (and (not to-many?) (util/ident? v))
            many-idents (if to-many? (apply concat (map-indexed (fn [idx _] (to-idents app-state v (conj remainder idx))) v)) [])
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
          result (flatten (map (fn [[k class]]
                                 (for [ident (to-idents app-state form k)]
                                   (let [value (get-in app-state ident)]
                                     {:ident ident :class class :form value}))) subforms))]
      (filter #(:ident %) (conj result {:ident form-ident :class root-form-class :form form}))))

  (defn update-forms
    "Similar to update-in, but walks your form declaration to affect all nested forms. Useful for applying validation
    or some mutation to all forms. Returns the new app-state. You supply a (form-update-fn form-spec) => form', where
    form-spec is a map with keys `:class` (the component that has the form), `:ident` (of the form in app state),
    and `:form` (the value of the form in app state)."
    [app-state root-form-class form-ident form-update-fn]
    (let [form-specs (get-forms app-state root-form-class form-ident)
          updated-form-specs (map (fn [form-spec]
                                    (assoc form-spec :form (form-update-fn form-spec))) form-specs)]
      (reduce (fn [s {:keys [ident form]}]
                (assoc-in s ident form)) app-state updated-form-specs)))

  (defn init-form
    "Adds form support data to the given (nested) form."
    [app-state form-class form-ident]
    (update-forms app-state form-class form-ident (fn [{:keys [class form]}] (build-form class form))))

  (defn reduce-forms
    "Similar to reduce, but walks the forms. Useful for gathering information from
    nested forms (are all of them valid?). At each form it calls (form-fn accumulator {:keys [ident value class]}). The first visit will
    use `starting-value` as the initial accumulator, and the return value of form-fn will become the new accumulator.

    The `form-fn`'s second argument is a map that contains the form's class, ident, and current value.

    Returns the final accumulator value."
    [app-state root-form-class form-ident form-fn starting-value]
    (let [form-specs (get-forms app-state root-form-class form-ident)]
      (reduce (fn [acc spec] (form-fn acc spec)) starting-value form-specs)))

  (defn form-component
    "Get the component that declared the given form data."
    [form]
    (-> form :ui/form meta :component))

  (defn form-id
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
    [form name]
    (= ::subform (field-type form name)))

  (defn current-value
    "Gets the current value of a field in a form."
    [form field]
    (get-in form [:ui/form :state field :input/value]))

  (defn css-class
    "Gets the css class for the form field"
    [form field]
    (get-in form [:ui/form :state field :input/css-class]))

  (defn field-value
    "Get the current value of a form field in the app state."
    ([app-state form-id field-name] (field-value app-state form-id field-name ""))
    ([app-state form-id field-name dflt] (get-in app-state (conj form-id :state field-name :input/value) dflt)))

  (defn field-names
    "Get all of the field names that are defined on the form. Does not return subform fields"
    [form]
    (keep (fn [k] (is-subform? form k) nil k) (keys (get-in form [:ui/form :elements/by-name]))))

  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  ;; VALIDATION SUPPORT
  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  (defn current-validity
    [form field]
    (get-in form [:ui/form :state field :input/valid]))

  (defn invalid?
    "Returns true iff the form or field has been validated, and the validation failed. Using this on a form ignores unchecked
    fields, so you should run validate-entire-form! before trusting this value on a form."
    ([form] (reduce (fn [result field] (or result (invalid? form field))) false (field-names form)))
    ([form field] (= :invalid (current-validity form field))))

  (defn valid?
    "Returns true iff the field has been validated, and the validation is ok. Running this on a form is only reliable if
    you've already validated the entire form (validate-entire-form!)."
    ([form] (reduce (fn [result field] (and result (valid? form field))) true (field-names form)))
    ([form field] (= :valid (current-validity form field))))

  ;; Extensible form field validation. Triggered by symbols. Arguments (args) are declared on the fields themselves.
  (defmulti form-field-valid? (fn [symbol value args] symbol))

  (defn validator
    "Returns the validator symbol from the form field"
    [form field]
    (get-in form [:ui/form :elements/by-name field :input/validator]))

  (defn validator-args
    "Returns the validator args from the form field"
    [form field]
    (get-in form [:ui/form :elements/by-name field :input/validator-args] {}))

  ;; Sample validator that requires a number be in the (inclusive) range.
  (defmethod form-field-valid? 'in-range? [_ value {:keys [min max]}]
    (let [value (int value)]
      (<= min value max)))

  (defn update-validation
    "Given a form and a field, returns a new form with that field validated. Does NOT recurse into subforms."
    [form field]
    (if-let [validator (and (validator form field))]
      (let [validator-args (validator-args form field)
            valid? (form-field-valid? validator (current-value form field) validator-args)]
        (assoc-in form [:ui/form :state field :input/valid] (if valid? :valid :invalid)))
      (if (is-subform? form field)
        form
        (assoc-in form [:ui/form :state field :input/valid] :valid))))

  ;; Mutation to run validation on a specific field
  (defmethod m/mutate 'untangled.components.form/validate [{:keys [state]} k {:keys [form-id field]}]
    {:action #(swap! state update-in form-id update-validation field)})

  (defn validate-fields
    "Runs validation on the defined fields and returns a new form with them properly marked."
    [form]
    (let [field-ids (field-names form)]
      (reduce (fn [form field-id] (update-validation form field-id)) form field-ids)))

  ;; Mutation to run validation on an entire form
  (defmethod m/mutate 'untangled.components.form/validate-form! [{:keys [state]} k {:keys [form-id]}]
    {:action (fn []
               (let [form (get-in @state form-id)
                     form-class (form-component form)]
                 (if form-class
                   (swap! state update-forms form-class form-id (fn [{:keys [form]}] (validate-fields form)))
                   (log/error "Unable to validate form. No component associated with form. Did you remember to use build-form?"))))})

  (defn validate-entire-form!
    "Trigger whole-form validation as a TRANSACTION. The form will not be validated upon return of this function,
     but the UI will update after validation is complete. If you want to test if a form is valid use validate-fields on
     the state of the form to obtain an updated validated form. If you want to trigger validation as *part* of your
     own transaction (so your mutation can see the validated form), you may use the underlying
     `(untangled.components.form/validate-form! {:form-id fid})` Om mutation in your own call to `transact!`."
    [comp-or-reconciler form]
    (om/transact! comp-or-reconciler `[(untangled.components.form/validate-form! ~{:form-id (form-id form)}) :ui/form-root]))

  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  ;; GENERAL FORM MUTATION METHODS
  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  (defmethod m/mutate 'untangled.components.form/toggle-field [{:keys [state]} k {:keys [form-id field]}]
    {:action (fn [] (swap! state update-in (conj form-id :ui/form :state field :input/value) not))})

  (defmethod m/mutate 'untangled.components.form/update-field [{:keys [state]} k {:keys [form-id field value]}]
    {:action (fn [] (swap! state assoc-in (conj form-id :ui/form :state field :input/value) value))})

  (defn dirty?
    "Returns true if the entity state does not match the form state, or if it contains a tempid."
    [form]
    (some #(or (om/tempid? (current-value form %))
               (not= (current-value form %) (get form %))) (field-names form)))

  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  ;; FORM FIELD RENDERING
  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  ;; Multimethod for rendering field types. Dispatches on field :input/type
  (defmulti form-field
            (fn [component form name & params]
              (let [dispatch (get-in form [:ui/form :elements/by-name name :input/type])]
                dispatch)))

  (defmethod form-field :default [component form name]
    (log/error "Cannot dispatch to form-field renderer on form " form " for field " name))

  (defn render-text-field [component form name]
    (let [id (form-id form)
          text-value (current-value form name)
          cls (or (css-class form name) "form-control")]
      (dom/input #js {:type      "text"
                      :name      name
                      :value     text-value
                      :className cls
                      :onBlur    (fn [event]
                                   (om/transact! component
                                     `[(untangled.components.form/validate ~{:form-id id :field name})
                                       :ui/form-root]))
                      :onChange  (fn [event]
                                   (om/transact! component
                                     `[(untangled.components.form/update-field
                                         ~{:form-id id
                                           :field   name
                                           :value   (.. event -target -value)})
                                       :ui/form-root]))})))

  ;; Field renderer for a ::text form field
  (defmethod form-field ::text [component form name] (render-text-field component form name))

  (defn render-integer-field [component form name]
    (let [id (form-id form)
          cls (or (css-class form name) "form-control")
          text-value (current-value form name)]
      (dom/input #js {:type      "number"
                      :name      name
                      :className cls
                      :value     text-value
                      :onBlur    (fn [_]
                                   (om/transact! component
                                     `[(untangled.components.form/validate ~{:form-id id :field name})
                                       :ui/form-root]))
                      :onChange  (fn [event]
                                   (let [raw-value (.. event -target -value)
                                         v (if (seq (re-matches #"^[0-9]*$" raw-value))
                                             (int raw-value)
                                             raw-value)]
                                     (om/transact! component
                                       `[(untangled.components.form/update-field ~{:form-id id
                                                                                   :field   name
                                                                                   :value   v})
                                         :ui/form-root])))})))

  ;; Field renderer for a ::integer form field
  (defmethod form-field ::integer [component form name] (render-integer-field component form name))

  (defmethod m/mutate 'untangled.components.form/select-option
    [{:keys [state]} k {:keys [form-id field value]}]
    {:action (fn [] (let [value (.substring value 1)]
                      (swap! state assoc-in (conj form-id :ui/form :state field :input/value) (keyword value))))})

  (defmethod form-field ::dropdown [component form name]
    (let [id (form-id form)
          selection (current-value form name)
          cls (or (css-class form name) "form-control")
          field (field-config form name)
          optional? (= ::none (:input/default-value field))
          options (:input/options field)]
      (dom/select #js {:name      name
                       :className cls
                       :value     selection
                       :onChange  (fn [event] (om/transact! component `[(untangled.components.form/select-option ~{:form-id id
                                                                                                                   :field   name
                                                                                                                   :value   (.. event -target -value)}) :ui/form-root]))}
                  (when optional?
                    (dom/option #js {:value ::none} ""))
                  (map (fn [{:keys [option/key option/label]}] (dom/option #js {:key key :value key} label)) options))))

  ;; Field renderer for a ::checkbox form field
  (defmethod form-field ::checkbox [component form name]
    (let [id (form-id form)
          cls (or (css-class form name) "")
          bool-value (current-value form name)]
      (dom/input #js {:type      "checkbox"
                      :name      name
                      :className cls
                      :checked   bool-value
                      :onChange  (fn [event] (om/transact! component `[(untangled.components.form/toggle-field ~{:form-id id
                                                                                                                 :field   name}) :ui/form-root]))})))


  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  ;; LOAD AND SAVE FORM TO/FROM ENTITY
  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

  (defn reset-from-entity!
    "Reset the form from a given entity in your application database using an Om transaction and update the validation state.
     You may compose your own Om transactions and use `(untangled.components.form/reset-from-entity! {:form-id [:entity id]})` directly."
    [comp-or-reconciler form]
    (let [form-id (form-id form)]
      (om/transact! comp-or-reconciler `[(untangled.components.form/reset-from-entity! ~{:form-id form-id})
                                         (untangled.components.form/validate-form! ~{:form-id form-id}) :ui/form-root])))

  (defn commit-to-entity!
    "Copy the given form state into the given entity. If remote is supplied, then it will optimistically update the app
    database and also post the entity to the server.

    IMPORTANT: This function checks the validity of the form. If it is invalid, it will NOT commit the changes, but will
    instead trigger an update of the form in the UI to show validation errors.

    For remotes to work you must implement `(untangled.components.form/commit-to-entity! {:form-id [:id id] :value {...})`
    on the server. "
    [comp-or-reconciler form & {:keys [remote rerender] :or {remote false rerender []}}]
    (let [validated-form (validate-fields form)]
      (if (valid? validated-form)
        (let [form-id (form-id form)]
          (om/transact! comp-or-reconciler `[(untangled.components.form/commit-to-entity! ~{:form-id form-id :remote remote}) :ui/form-root]))
        (om/transact! comp-or-reconciler `[(untangled.components.form/validate-form! ~{:form-id form-id}) :ui/form-root]))))

  ;; Mutation for moving form data from the form into an entity
  (defmethod m/mutate 'untangled.components.form/commit-to-entity! [{:keys [state ast]} k {:keys [form-id remote]}]
    (letfn [(form-state [form-id] (get-in @state (conj form-id :ui/form :state)))
            (old-entity [form-id] (get-in @state form-id {}))
            (updated-entity [form-id] (into (old-entity form-id) (map (fn [[k v]] [k (:input/value v)]) (form-state form-id))))]
      {:remote false                                        ; TODO
       :action (fn [] (let [top-form (get-in @state form-id)
                            top-class (form-component top-form)]
                        (swap! state update-forms top-class form-id (fn [{:keys [ident]}]
                                                                      (updated-entity ident)))))}))

  ;; Mutation for moving form data from the an entity into the form
  (defmethod m/mutate 'untangled.components.form/reset-from-entity! [{:keys [state]} k {:keys [form-id]}]
    ;; TODO: Make this use update-forms
    (let [form (get-in @state form-id {})
          new-state (reduce (fn [s k] (if-let [v (get form k)]
                                        (assoc-in s [k :input/value] v)
                                        s)) (get form [:ui/form :state]) (field-names form))]
      {:action (fn [] (swap! state assoc-in (conj form-id :ui/form :state) new-state))}))
  )
