(ns untangled.components.forms
  (:require [clojure.string :as str]
            [om.dom :as dom]
            [om.next :as om :refer [defui]]
            [devcards.core :as dc]
            [untangled.client.devcards :as app]
            [untangled.client.core :as uc]))

(defn text-input
  "Declare a text input on a form"
  ([name] (text-input (constantly true)))
  ([name validator]
   {:input/name      name
    :input/visible   true
    :input/value     ""
    :input/validator validator
    :input/type      ::text}))

(defn checkbox-input
  "Declare a checkbox on a form"
  [name]
  {:input/type    ::checkbox
   :input/visible true
   :input/value   false
   :input/name    name})

(defn hidden [input]
  (assoc input :input/visible false))

(defn visible [input]
  (assoc input :input/visible true))

(defmulti form-field (fn [form name] (get-in form [:config :fields/by-name name :input/type])))

(defmethod form-field ::text [component form name]
  (let [state (:state form)
        form-id (:ident form)
        visible? (get-in form [:config :fields/by-name name :input/visible])
        text-value (get state name "")]
    (dom/input #js {:type      "text"
                    :className (if visible? "" "hidden")
                    :value     text-value
                    :onChange  (fn [event] (om/transact! component `[(untangled.components.form/update-field ~{:form  form-id
                                                                                                               :field name
                                                                                                               :value (.. event -target -value)})]))})))

(defmethod form-field ::checkbox [component form name]
  (let [state (:state form)
        form-id (:ident form)
        visible? (get-in form [:config :fields/by-name name :input/visible])
        bool-value (get state name false)]
    (dom/input #js {:type      "checkbox"
                    :className (if visible? "" "hidden")
                    :checked   bool-value
                    :onChange  (fn [event] (om/transact! component `[(untangled.components.form/toggle-field ~{:form  form-id
                                                                                                               :field name})]))})))

(defn name-validator
  "Validators return nil when valid, and an error message when invalid."
  [message value]
  (let [trimmed-value (str/trim value)]
    (when (or (str/blank? trimmed-value)
              (not (str/includes? trimmed-value " "))) message)))

(defn build-form [{:keys [id fields form-update] :or {form-update identity} :as config}]
  {:pre [(keyword? id)
         (fn? form-update)
         (vector? fields)]}
  (let [config (assoc config :fields/by-name (zipmap (map :input/name fields) fields))]
    {:config config
     :state  (zipmap (map :input/name fields) (map :input/value fields))}))

(defn field-value
  "Get the current value of a form field in the app state"
  ([app-state form-id field-name] (field-value app-state form-id field-name ""))
  ([app-state form-id field-name dflt] (get-in app-state [::by-id form-id :state name] dflt)))

(defn form-ident [form] [::by-id (get-in form [:config :id])])
(def form-query [:ui/fetch-state :config :state])

(defn form-field-visible? [form field visible-class hidden-class]
  (if (get-in form [:config :fields/by-name field :input/visible])
    visible-class
    hidden-class))

(defn field-with-label [form name label]
  (dom/div #js {:className (form-field-visible? form name "" "hidden")}
    (dom/label #js {:for name} label)
    (form-field form name)))

(defui Form
  static om/IQuery
  (query [this] form-query)
  static om/Ident
  (ident [this props] (form-ident props)))

(defui MyForm
  static om/IQuery
  (query [this] form-query)
  static om/Ident
  (ident [this props] (form-ident props))
  Object
  (render [this]
    (let [form (om/props this)]
      (dom/div nil
        (field-with-label form :name "Full Name:")
        (field-with-label form :registered-to-vote "Registered?")))))

(defui Forms
  static om/IQuery
  (query [this] {:all-forms (om/get-query MyForm)}))

;(uc/merge-state! @app Forms {:all-forms []})

(def my-form (build-form {
                          :id          :my-form
                          :fields      [(text-input :name (partial name-validator "Please enter your first and last name."))
                                        (hidden (checkbox-input :registered-to-vote))]
                          :form-update (fn [form] form)}))

(defui Root
  Object
  (render [this] (dom/div nil "TODO")))

(dc/defcard form-app
  ""
  (app/untanged-cardapp Root
                        :started-callback
                        (fn [app] (uc/merge-state! app Forms {:all-forms (om/get-query Form)})))
  {}
  {:inspect-data true})


