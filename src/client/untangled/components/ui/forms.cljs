(ns untangled.components.ui.forms
  (:require [om.dom :as dom]
            [untangled.i18n :refer [tr]]
            [om.next :as om :refer [defui]]
            [clojure.string :as str]
            [untangled.client.logging :as log]
            [untangled.client.mutations :as m]
            [untangled.client.core :as uc]
            [untangled.client.data-fetch :as df]))

(defprotocol IForm
  (fields [this] "Returns the field definitions for form support."))

(defn id-field
  "Declare a hidden identity field. Required to read/write to/from other db tables, and to make sure tempids and such
  follow along properly."
  [name]
  {:input/name name
   :input/type ::identity})

(defn text-input
  "Declare a text input on a form"
  ([name] (text-input name nil {}))
  ([name validator] (text-input name validator {}))
  ([name validator validator-args]
   {:input/name           name
    :input/default-value  ""
    :input/validator      validator
    :input/validator-args validator-args
    :input/type           ::text}))

(defn numeric-input
  "Declare an integer input on a form"
  ([name] (numeric-input name (constantly true) {}))
  ([name validator] (numeric-input name validator {}))
  ([name validator validator-args]
   {:input/name           name
    :input/default-value  ""
    :input/validator      validator
    :input/validator-args validator-args
    :input/type           ::numeric}))

(defn checkbox-input
  "Declare a checkbox on a form"
  [name]
  {:input/type          ::checkbox
   :input/default-value false
   :input/name          name})

(defn dropdown-input
  "Declare a dropdown menu selector."
  [name options]
  {:input/type          ::dropdown
   :input/default-value ::none
   :input/options       options
   :input/name          name})

(defn option
  "Create an option for use in a dropdown"
  [key label]
  {:option/key   key
   :option/label label})

(defn field-config
  "Get the configuration for the given field in the form."
  [form name]
  (get-in form [:ui/form :fields/by-name name]))

(defn current-value
  "Gets the current value of a field in a form"
  [form field]
  (get-in form [:ui/form :state field :input/value]))

(defn current-validity
  [form field]
  (get-in form [:ui/form :state field :input/valid]))

(defn field-names
  [form]
  (keys (get-in form [:ui/form :fields/by-name])))

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

(defn checked?
  "Returns true iff the field is a boolean control that is true."
  [form field]
  (= true (current-value form field)))

(defn default-state
  "INTERNAL METHOD. Get the default state configuration for the given field definitions."
  [fields]
  (zipmap (map :input/name fields) (map (fn [f] (if (= ::identity (:input/type f))
                                                  {:input/valid :valid
                                                   :input/value (om/tempid)}
                                                  {:input/valid :unchecked
                                                   :input/value (:input/default-value f)})) fields)))

(defn form-id
  [form]
  (get-in form [:ui/form :ident]))

(defmethod m/mutate 'untangled.components.form/toggle-field [{:keys [state]} k {:keys [form-id field]}]
  {:action (fn [] (swap! state update-in (conj form-id :ui/form :state field :input/value) not))})

(defmethod m/mutate 'untangled.components.form/update-field [{:keys [state]} k {:keys [form-id field value]}]
  {:action (fn [] (swap! state assoc-in (conj form-id :ui/form :state field :input/value) value))})

(defmethod m/mutate 'untangled.components.form/reset-form! [{:keys [state]} k {:keys [form-id]}]
  {:action (fn []
             (let [fields (vals (get-in @state [::by-id form-id :fields/by-name]))
                   new-state (default-state fields)]
               (swap! state assoc-in [::by-id form-id :state] new-state)))})

;; Extensible form field validation. Triggered by symbols. Arguments (args) are declared on the fields themselves.
(defmulti form-field-valid? (fn [symbol value args] symbol))

(defn validator
  "Returns the validator symbol from the form field"
  [form field]
  (get-in form [:ui/form :fields/by-name field :input/validator]))

(defn validator-args
  "Returns the validator args from the form field"
  [form field]
  (get-in form [:ui/form :fields/by-name field :input/validator-args] {}))

(defn dirty?
  "Returns true if the entity state does not match the form state, or if it contains a tempid."
  [form]
  (some #(or (om/tempid? (current-value form %))
             (not= (current-value form %) (get form %))) (field-names form)))

(defn update-validation
  "Given a form and a field, returns a new form with that field validated."
  [form field]
  (if-let [validator (validator form field)]
    (let [validator-args (validator-args form field)
          valid? (form-field-valid? validator (current-value form field) validator-args)]
      (assoc-in form [:ui/form :state field :input/valid] (if valid? :valid :invalid)))
    (assoc-in form [:ui/form :state field :input/valid] :valid)))

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
  {:action (fn [] (swap! state update-in form-id validate-fields))})

;; Multimethod for rendering field types. Dispatches on field :input/type
(defmulti form-field
          (fn [component form name]
            (let [dispatch (get-in form [:ui/form :fields/by-name name :input/type])]
              dispatch)))

(defmethod form-field :default [component form name]
  (log/error "Cannot dispatch to form-field renderer on form " form "for field " name))

;; Field renderer for a ::text form field
(defmethod form-field ::text [component form name]
  (let [id (form-id form)
        text-value (current-value form name)]
    (dom/input #js {:type     "text"
                    :name     name
                    :value    text-value
                    :onBlur   (fn [event] (om/transact! component `[(untangled.components.form/validate ~{:form-id id :field name}) :ui/root-form]))
                    :onChange (fn [event] (om/transact! component `[(untangled.components.form/update-field ~{:form-id id
                                                                                                              :field   name
                                                                                                              :value   (.. event -target -value)}) :ui/root-form]))})))

;; Field renderer for a ::numeric form field
(defmethod form-field ::numeric [component form name]
  (let [id (form-id form)
        text-value (current-value form name)]
    (dom/input #js {:type     "number"
                    :name     name
                    :value    text-value
                    :onBlur   (fn [_] (om/transact! component `[(untangled.components.form/validate ~{:form-id id :field name}) :ui/root-form]))
                    :onChange (fn [event] (om/transact! component `[(untangled.components.form/update-field ~{:form-id id
                                                                                                              :field   name
                                                                                                              :value   (let [v (.. event -target -value)]
                                                                                                                         (if (seq (re-matches #"^[0-9]*$" v))
                                                                                                                          (int v)
                                                                                                                          v))}) :ui/root-form]))})))

(defmethod m/mutate 'untangled.components.form/select-option
  [{:keys [state]} k {:keys [form-id field value]}]
  {:action (fn [] (let [value (.substring value 1)]
                    (swap! state assoc-in (conj form-id :ui/form :state field :input/value) (keyword value))))})

(defmethod form-field ::dropdown [component form name]
  (let [id (form-id form)
        selection (current-value form name)
        field (field-config form name)
        optional? (= ::none (:input/default-value field))
        options (:input/options field)]
    (dom/select #js {:name     name
                     :value    selection
                     :onChange (fn [event] (om/transact! component `[(untangled.components.form/select-option ~{:form-id id
                                                                                                                :field   name
                                                                                                                :value   (.. event -target -value)}) :ui/root-form]))}
                (when optional?
                  (dom/option #js {:value ::none} ""))
                (map (fn [{:keys [option/key option/label]}] (dom/option #js {:key key :value key} label)) options))))

;; Field renderer for a ::checkbox form field
(defmethod form-field ::checkbox [component form name]
  (let [id (form-id form)
        bool-value (current-value form name)]
    (dom/input #js {:type     "checkbox"
                    :name     name
                    :checked  bool-value
                    :onChange (fn [event] (om/transact! component `[(untangled.components.form/toggle-field ~{:form-id id
                                                                                                              :field   name}) :ui/root-form]))})))
;; Sample validator that requires there be at least two words
(defmethod form-field-valid? 'name-valid? [_ value args]
  (let [trimmed-value (str/trim value)]
    (str/includes? trimmed-value " ")))

;; Sample validator that requires a number be in the (inclusive) range.
(defmethod form-field-valid? 'in-range? [_ value {:keys [min max]}]
  (let [value (int value)]
    (<= min value max)))

(defn build-form
  "Build an empty form with default field values."
  [form-class entity-state]
  (let [fields (fields form-class)
        fields-by-name (zipmap (map :input/name fields) fields)
        empty-state (default-state fields)
        state (reduce (fn [s k] (if-let [v (get entity-state k)]
                                  (assoc-in s [k :input/value] v)
                                  s)) empty-state (keys fields-by-name))]
    (assoc entity-state :ui/form {:ident          (om/ident form-class entity-state)
                                  :fields/by-name fields-by-name
                                  :state          state})))

(defn field-value
  "Get the current value of a form field in the app state"
  ([app-state form-id field-name] (field-value app-state form-id field-name ""))
  ([app-state form-id field-name dflt] (get-in app-state (conj form-id :state field-name :input/value) dflt)))

(defn validate-entire-form!
  "Trigger whole-form validation as a TRANSACTION. The form will not be validated upon return of this function,
   but the UI will update after validation is complete. If you want to test if a form is valid use validate-fields on
   the state of the form to obtain an updated validated form. If you want to trigger validation as *part* of your
   own transaction (so your mutation can see the validated form), you may use the underlying
   `(untangled.components.form/validate-form! {:form-id fid})` Om mutation in your own call to `transact!`."
  [comp-or-reconciler form]
  (om/transact! comp-or-reconciler `[(untangled.components.form/validate-form! ~{:form-id (form-id form)}) :ui/root-form]))

(defn reset-from-entity!
  "Reset the form from a given entity in your application database using an Om transaction. This assumes your entity and form match on field names. If remote
   is supplied then the indicated entity is first loaded from the server (via a direct entity ident join query to the server). You
   may compose your own Om transactions and use `(untangled.components.form/reset-from-entity! {:entity-ident [:id id] :form-id fid})` directly."
  ([comp-or-reconciler form] (reset-from-entity! comp-or-reconciler form false))
  ([comp-or-reconciler form remote]                         ; FIXME: No remote yet
   (let [form-id (form-id form)]
     ; FIXME: post mutation needs ability to take args! UNTESTED!!!!
     ;(df/load comp-or-reconciler entity-ident entity-class {:post-mutation 'untangled.components.form/reset-from-entity! :post-mutation-params params})
     (om/transact! comp-or-reconciler `[(untangled.components.form/reset-from-entity! ~{:form-id form-id})
                                        (untangled.components.form/validate-form! ~{:form-id form-id}) :ui/root-form]))))

(defn commit-to-entity!
  "Copy the given form state into the given entity. If remote is supplied, then it will optimistically update the app
  database and also post the entity to the server. For remotes to work you must implement
  `(untangled.components.form/commit-to-entity! {:ident [:id id] :value {...})` on the server. "
  ([comp-or-reconciler form] (commit-to-entity! comp-or-reconciler form false))
  ([comp-or-reconciler form remote]
   (let [validated-form (validate-fields form)]
     (if (valid? validated-form)
       (let [form-id (form-id form)]
         (om/transact! comp-or-reconciler `[(untangled.components.form/commit-to-entity! ~{:form-id form-id :remote remote}) :ui/root-form]))
       (log/error "Cannot commit. Form did not validate.")))))

;; Mutation for moving form data from the form into an entity
(defmethod m/mutate 'untangled.components.form/commit-to-entity! [{:keys [state ast]} k {:keys [form-id remote]}]
  (let [form-state (get-in @state (conj form-id :ui/form :state))
        old-entity (get-in @state form-id {})
        updated-entity (into old-entity (map (fn [[k v]] [k (:input/value v)]) form-state))]
    {:remote (when remote (assoc ast :params {:ident form-id :value updated-entity}))
     :action (fn [] (swap! state assoc-in form-id updated-entity))}))

;; Mutation for moving form data from the an entity into the form
(defmethod m/mutate 'untangled.components.form/reset-from-entity! [{:keys [state]} k {:keys [form-id]}]
  (let [form (get-in @state form-id {})
        new-state (reduce (fn [s k] (if-let [v (get form k)]
                                      (assoc-in s [k :input/value] v)
                                      s)) (get form [:ui/form :state]) (field-names form))]
    {:action (fn [] (swap! state assoc-in (conj form-id :ui/form :state) new-state))}))
