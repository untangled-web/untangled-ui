(ns untangled.components.ui.forms
  (:require [om.dom :as dom]
            [untangled.i18n :refer [tr]]
            [om.next :as om]
            [clojure.string :as str]
            [untangled.client.logging :as log]
            [untangled.client.mutations :as m]))

(defn text-input
  "Declare a text input on a form"
  ([name] (text-input (constantly true)))
  ([name validator]
   {:input/name          name
    :input/default-value ""
    :input/validator     validator
    :input/type          ::text}))

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
  "Returns true iff the field has been validated, and the validation failed."
  [form field] (= :invalid (get-in form [:state field :input/valid])))

(defn valid?
  "Returns true iff the field has been validated, and the validation is ok."
  [form field] (= :valid (get-in form [:state field :input/valid])))

(defn checked?
  "Returns true iff the field is a boolean control that is true."
  [form field]
  (= true (current-value form field)))

(defn form-id [form] (get-in form [:config :id]))

(defn pristine-state
  "Get the pristine state configuration (internal) for the given field definitions."
  [fields]
  (zipmap (map :input/name fields) (map (fn [f] {:input/valid :unchecked
                                                 :input/value (:input/default-value f)}) fields)))

(defn reset-form!
  "Resets a form in the application state database to its pristine state."
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
                   new-state (pristine-state fields)]
               (swap! state assoc-in [::by-id form-id :state] new-state)))})

(defmulti form-field-valid? (fn [symbol value] symbol))

(defn validator
  "Returns the validator symbol from the form field"
  [form field]
  (get-in form [:config :fields/by-name field :input/validator]))

(defmethod m/mutate 'untangled.components.form/validate [{:keys [state]} k {:keys [form-id field]}]
  {:action (fn []
             (let [form (get-in @state [::by-id form-id])]
               (if-let [validator (validator form field)]
                 (let [valid? (form-field-valid? validator (current-value form field))]
                   (swap! state assoc-in [::by-id form-id :state field :input/valid] (if valid? :valid :invalid)))
                 (log/debug (str "NO VALIDATOR FOR " field)))))})

(defmulti form-field
  (fn [component form name]
    (let [dispatch (get-in form [:config :fields/by-name name :input/type])]
      dispatch)))

(defmethod form-field :default [component form name]
  (log/error "Cannot dispatch to form-field renderer on form " form "for field " name))

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

(defmethod form-field ::checkbox [component form name]
  (let [id (form-id form)
        bool-value (current-value form name)]
    (dom/input #js {:type     "checkbox"
                    :name     name
                    :checked  bool-value
                    :onChange (fn [event] (om/transact! component `[(untangled.components.form/toggle-field ~{:form-id id
                                                                                                              :field   name})]))})))
(defmethod form-field-valid? 'name-valid? [_ value]
  (let [trimmed-value (str/trim value)]
    (str/includes? trimmed-value " ")))


(defn build-form
  "Build a pristine form."
  [{:keys [id fields form-update] :or {form-update identity} :as config}]
  {:pre [(keyword? id)
         (fn? form-update)
         (vector? fields)]}
  (let [config (-> config
                   (assoc :fields/by-name (zipmap (map :input/name fields) fields))
                   (dissoc :fields))]
    {:config config
     :state  (pristine-state fields)}))

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

(def form-query [:ui/fetch-state :config :state])


