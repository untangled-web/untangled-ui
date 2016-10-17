(ns untangled.components.ui.forms
  (:require [om.dom :as dom]
            [untangled.i18n :refer [tr]]
            [om.next :as om :refer [defui]]
            [clojure.string :as str]
            [untangled.client.logging :as log]
            [untangled.client.mutations :as m]
            [untangled.client.core :as uc]
            [untangled.client.data-fetch :as df]))

(defn id-field
  "Declare a hidden identity field. Required to read/write to/from other db tables, and to make sure tempids and such
  follow along properly."
  [name]
  {:input/name name
   :input/type ::identity})

(defn text-input
  "Declare a text input on a form"
  ([name] (text-input name (constantly true) {}))
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

(defn current-value
  "Gets the current value of a field in a form"
  [form field]
  (get-in form [:state field :input/value]))

(defn invalid?
  "Returns true iff the form or field has been validated, and the validation failed. Using this on a form ignores unchecked
  fields, so you should run validate-entire-form! before trusting this value on a form."
  ([form] (reduce (fn [result field] (or result (invalid? form field))) false (keys (get-in form [:config :fields/by-name]))))
  ([form field] (= :invalid (get-in form [:state field :input/valid]))))

(defn valid?
  "Returns true iff the field has been validated, and the validation is ok. Running this on a form is only reliable if
  you've already validated the entire form (validate-entire-form!)."
  ([form] (reduce (fn [result field] (and result (valid? form field))) true (keys (get-in form [:config :fields/by-name]))))
  ([form field] (= :valid (get-in form [:state field :input/valid]))))

(defn checked?
  "Returns true iff the field is a boolean control that is true."
  [form field]
  (= true (current-value form field)))

(defn form-id
  "Given an entire form config, returns the ID of that form."
  [form]
  (get-in form [:config :id]))

(defn default-state
  "INTERNAL METHOD. Get the default state configuration for the given field definitions."
  [fields]
  (zipmap (map :input/name fields) (map (fn [f] (if (= ::identity (:input/type f))
                                                  {:input/valid :valid
                                                   :input/value (om/tempid)}
                                                  {:input/valid :unchecked
                                                   :input/value (:input/default-value f)})) fields)))

(defn reset-form!
  "Resets a form in the application state database to its default state."
  [component-or-reconciler form-or-id]
  (let [id (if (keyword? form-or-id) form-or-id (form-id form-or-id))]
    (om/transact! component-or-reconciler `[(untangled.components.form/reset-form! ~{:form-id id})])))


(defmethod m/mutate 'untangled.components.form/toggle-field [{:keys [state]} k {:keys [form-id field]}]
  {:action (fn [] (swap! state update-in [::by-id form-id :state field :input/value] not))})

(defmethod m/mutate 'untangled.components.form/update-field [{:keys [state]} k {:keys [form-id field value]}]
  {:action (fn [] (swap! state assoc-in [::by-id form-id :state field :input/value] value))})

(defmethod m/mutate 'untangled.components.form/reset-form! [{:keys [state]} k {:keys [form-id]}]
  {:action (fn []
             (let [fields (vals (get-in @state [::by-id form-id :config :fields/by-name]))
                   new-state (default-state fields)]
               (swap! state assoc-in [::by-id form-id :state] new-state)))})

;; Extensible form field validation. Triggered by symbols. Arguments (args) are declared on the fields themselves.
(defmulti form-field-valid? (fn [symbol value args] symbol))

(defn validator
  "Returns the validator symbol from the form field"
  [form field]
  (get-in form [:config :fields/by-name field :input/validator]))

(defn validator-args
  "Returns the validator args from the form field"
  [form field]
  (get-in form [:config :fields/by-name field :input/validator-args] {}))

(defn update-validation
  "Given a form and a field, returns a new form with that field validated."
  [form field]
  (if-let [validator (validator form field)]
    (let [validator-args (validator-args form field)
          valid? (form-field-valid? validator (current-value form field) validator-args)]
      (assoc-in form [:state field :input/valid] (if valid? :valid :invalid)))
    (assoc-in form [:state field :input/valid] :valid)))

;; Mutation to run validation on a specific field
(defmethod m/mutate 'untangled.components.form/validate [{:keys [state]} k {:keys [form-id field]}]
  {:action #(swap! state update-in [::by-id form-id] update-validation field)})

(defn validate-fields
  "Runs validation on the defined fields and returns a new form with them properly marked."
  [form]
  (let [field-ids (keys (get-in form [:config :fields/by-name]))]
    (reduce (fn [form field-id] (update-validation form field-id)) form field-ids)))

;; Mutation to run validation on an entire form
(defmethod m/mutate 'untangled.components.form/validate-form! [{:keys [state]} k {:keys [form-id]}]
  {:action (fn []
             (let [form-path [::by-id form-id]]
               (swap! state update-in form-path validate-fields)))})

;; Multimethod for rendering field types. Dispatches on field :input/type
(defmulti form-field
  (fn [component form name]
    (let [dispatch (get-in form [:config :fields/by-name name :input/type])]
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
                    :onBlur   (fn [event] (om/transact! component `[(untangled.components.form/validate ~{:form-id id :field name})]))
                    :onChange (fn [event] (om/transact! component `[(untangled.components.form/update-field ~{:form-id id
                                                                                                              :field   name
                                                                                                              :value   (.. event -target -value)})]))})))

;; Field renderer for a ::numeric form field
(defmethod form-field ::numeric [component form name]
  (let [id (form-id form)
        text-value (current-value form name)]
    (dom/input #js {:type     "number"
                    :name     name
                    :value    text-value
                    :onBlur   (fn [_] (om/transact! component `[(untangled.components.form/validate ~{:form-id id :field name})]))
                    :onChange (fn [event] (om/transact! component `[(untangled.components.form/update-field ~{:form-id id
                                                                                                              :field   name
                                                                                                              :value   (int (.. event -target -value))})]))})))

;; Field renderer for a ::checkbox form field
(defmethod form-field ::checkbox [component form name]
  (let [id (form-id form)
        bool-value (current-value form name)]
    (dom/input #js {:type     "checkbox"
                    :name     name
                    :checked  bool-value
                    :onChange (fn [event] (om/transact! component `[(untangled.components.form/toggle-field ~{:form-id id
                                                                                                              :field   name})]))})))
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
  [{:keys [id fields form-update] :or {form-update identity} :as config}]
  {:pre [(keyword? id)
         (fn? form-update)
         (vector? fields)]}
  (let [config (-> config
                   (assoc :fields/by-name (zipmap (map :input/name fields) fields))
                   (dissoc :fields))]
    {:config config
     :state  (default-state fields)}))

(defn field-value
  "Get the current value of a form field in the app state"
  ([app-state form-id field-name] (field-value app-state form-id field-name ""))
  ([app-state form-id field-name dflt] (get-in app-state [::by-id form-id :state field-name :input/value] dflt)))

(defn form-ident
  "Returns the application ident for the given form or keyword form ID"
  [form-props-or-name]
  (cond
    (keyword? form-props-or-name) [::by-id form-props-or-name]
    (get-in form-props-or-name [:config :id]) [::by-id (get-in form-props-or-name [:config :id])]
    :otherwise [:missing :id]))

;; A declaration of the minimum you want to query for in the UI of a form for it to work
(def form-query [:config :state])

(defn validate-entire-form!
  "Trigger whole-form validation as a TRANSACTION. The form will not be validated upon return of this function,
   but the UI will update after validation is complete. If you want to test if a form is valid use validate-fields on
   the state of the form to obtain an updated validated form. If you want to trigger validation as *part* of your
   own transaction (so your mutation can see the validated form), you may use the underlying
   `(untangled.components.form/validate-form! {:form-id fid})` Om mutation in your own call to `transact!`."
  [comp-or-reconciler form]
  (om/transact! comp-or-reconciler `[(untangled.components.form/validate-form! ~{:form-id (get-in form [:config :id])})]))

(defn reset-from-entity!
  "Reset the form from a given entity in your application database using an Om transaction. This assumes your entity and form match on field names. If remote
   is supplied then the indicated entity is first loaded from the server (via a direct entity ident join query to the server). You
   may compose your own Om transactions and use `(untangled.components.form/reset-from-entity! {:entity-ident [:id id] :form-id fid})` directly."
  ([comp-or-reconciler form entity-class entity-id] (reset-from-entity! comp-or-reconciler form entity-class entity-id false))
  ([comp-or-reconciler form entity-class entity-id remote]
   (let [form-id (form-id form)
         entity-ident (assoc (om/ident entity-class {}) 1 entity-id)
         params {:entity-ident entity-ident :form-id form-id}]
     (if remote
       ; FIXME: post mutation needs ability to take args! UNTESTED!!!!
       (df/load comp-or-reconciler entity-ident entity-class {:post-mutation 'untangled.components.form/reset-from-entity! :post-mutation-params params})
       (om/transact! comp-or-reconciler `[(untangled.components.form/reset-from-entity! ~params)
                                          (untangled.components.form/validate-form! ~{:form-id form-id})])))))

(defn commit-to-entity!
  "Copy the given form state into the given entity. If remote is supplied, then it will optimistically update the app
  database and also post the entity to the server. For remotes to work you must implement
  `(untangled.components.form/commit-to-entity! {:ident [:id id] :value {...})` on the server. "
  ([comp-or-reconciler form entity-class] (commit-to-entity! comp-or-reconciler form entity-class false))
  ([comp-or-reconciler form entity-class remote]
   (let [validated-form (validate-fields form)]
     (if (valid? validated-form)
       (let [form-id (form-id form)
             entity-props (into {} (map (fn [[k v]] [k (:input/value v)]) (:state validated-form)))
             entity-ident (om/ident entity-class entity-props)]
         (om/transact! comp-or-reconciler `[(untangled.components.form/commit-to-entity! ~{:entity-ident entity-ident :form-id form-id :remote remote})]))
       (log/error "Cannot commit. Form did not validate.")))))

;; Mutation for moving form data from the form into an entity
(defmethod m/mutate 'untangled.components.form/commit-to-entity! [{:keys [state ast]} k {:keys [entity-ident form-id remote]}]
  (let [form-path [::by-id form-id]
        form-state (get-in @state (conj form-path :state))
        old-entity (get-in @state entity-ident {})
        updated-entity (into old-entity (map (fn [[k v]] [k (:input/value v)]) form-state))]
    {:remote (when remote (assoc ast :params {:ident entity-ident :value updated-entity}))
     :action (fn [] (swap! state assoc-in entity-ident updated-entity))}))

;; Mutation for moving form data from the an entity into the form
(defmethod m/mutate 'untangled.components.form/reset-from-entity! [{:keys [state]} k {:keys [entity-ident form-id]}]
  {:action (fn []
             (let [form-path [::by-id form-id]
                   state-path (conj form-path :state)
                   form-state (get-in @state state-path)
                   entity (get-in @state entity-ident)
                   updated-state (reduce (fn [s k] (let [v (get entity k)]
                                                     (assoc-in s [k :input/value] v)
                                                     )) form-state (keys entity))]
               (swap! state assoc-in state-path updated-state)))})

(defui Form
  static om/IQuery
  (query [this] form-query)
  static om/Ident
  (ident [this props] (form-ident props)))

(defui Forms
  static om/Ident
  (ident [this props] [:master :form])
  static om/IQuery
  (query [this] [{:all-forms (om/get-query Form)}]))

(defn initialize-forms!
  "Normalize all forms and place them in app state. Usually called from the application started-callback, but can
  be called at any time to add form definitions to the system."
  [app-or-reconciler forms]
  (uc/merge-state! app-or-reconciler Forms {:all-forms forms}))

