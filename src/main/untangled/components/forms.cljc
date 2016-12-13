(ns untangled.components.forms
  (:require
    [clojure.set :as set]
    [clojure.string :as str]
    [om.dom :as dom]
    [om.next :as om]
    [om.util :as util]
    #?@(:clj ([taoensso.timbre :as log]))
    #?@(:cljs ([untangled.client.core :as uc]
               [untangled.client.data-fetch :as df]
               [untangled.client.logging :as log]
               [untangled.client.mutations :as m]))))

(defn fail!
  ([msg] (fail! msg nil))
  ([obj msg ex-data]
   (let [message (str obj " failed because of: " msg)
         ex-data (assoc ex-data :failing/obj obj)]
     (fail! message ex-data)))
  ([msg ex-data]
   (log/error msg ex-data)
   (throw (ex-info msg ex-data))))

(defn assert-or-fail [obj pred msg & [ex-data]]
  (when-not (pred obj)
    (fail! obj msg ex-data)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; FORM PROTOCOL
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defprotocol IForm
  (form-spec [this]
    "Returns the form specification,
     ie: what the form is made of,
     eg: fields, subforms, form change listeners."))

(defn- ui-ns [kw-name]
  ;; workaround for no *ns* in cljs
  (keyword (str "ui." (namespace ::_)) kw-name))

(def form-key      (ui-ns "form"))
(def form-root-key (ui-ns "form-root"))

(defn- get-form-spec
  "Returns a map with:
   * :elements - contains user level fields
   * :form - contains internal form details"
  [this]
  (let [assert-no-duplicate
        (fn [field]
          (fn [old-value]
            (assert (nil? old-value)
              (str "Cannot implement field <" field "> more than once!"))
            field))]
    (-> (reduce (fn [acc field]
                  (let [spec-key (if (= form-key (:input/type field))
                                   :form :elements)]
                    (update-in acc [spec-key (:input/name field)]
                      (assert-no-duplicate (cond-> field (= :form spec-key)
                                             (dissoc :input/name :input/type))))))
          {} (form-spec this))
      (update :elements vals))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ELEMENT/FIELD/INPUT DEFINITIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

#?(:clj (def implements? satisfies?))

(defn subform-element
  "Declare that the current form links to subforms through the given entity property in a :one or :many capacity. this
  must be included in your list of form elements if you want form interactions to trigger across a form group."
  ([field form-class cardinality]
   (assert-or-fail cardinality #{:one :many}
     "subform-element requires a cardinality of :one or :many")
   (assert-or-fail form-class (every-pred
                                #(implements? om/Ident %)
                                #(implements? IForm %)
                                #(implements? om/IQuery %))
     (str "Subform element " field " MUST implement IForm, IQuery, and Ident."))
   (with-meta {:input/name        field
               :input/is-form?    true
               :input/cardinality cardinality
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
  "Declare a hidden identity field.
   Required to read/write to/from other db tables,
   and to make sure tempids and such follow along properly."
  [name]
  {:input/name name
   :input/type ::identity})

(defn text-input
  "Declare a text input on a form"
  [name & {:keys [validator validator-args className default-value placeholder]
           :or {placeholder "" default-value "" className ""}}]
  {:input/name           name
   :input/default-value  default-value
   :input/placeholder    placeholder
   :input/validator      validator
   :input/validator-args validator-args
   :input/css-class      className
   :input/type           ::text})

(defn integer-input
  "Declare an integer input on a form"
  [name & {:keys [validator validator-args className default-value]
           :or {default-value 0 className ""}}]
  {:input/name           name
   :input/default-value  default-value
   :input/validator      validator
   :input/validator-args validator-args
   :input/css-class      className
   :input/type           ::integer})

(defn checkbox-input
  "Declare a checkbox on a form"
  [name & {:keys [className default-value]
           :or {default-value false}}]
  {:input/type          ::checkbox
   :input/default-value (boolean default-value)
   :input/css-class     className
   :input/name          name})

(defn dropdown-input
  "Declare a dropdown menu selector."
  [name options & {:keys [default-value className]
                   :or {default-value ::none className ""}}]
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
  [form] (-> form form-key meta :component))

(defn form-ident
  "Get the ident of this form's entity"
  [form] (get-in form [form-key :ident]))

(defn field-config
  "Get the configuration for the given field in the form."
  [form name] (get-in form [form-key :elements/by-name name]))

(defn field-type
  "Get the configuration for the given field in the form."
  [form name] (:input/type (field-config form name)))

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
  [form] (keys (get-in form [form-key :elements/by-name])))

(defn get-original-data
  "Get the unmodified copy of the form state from when it was first initialized."
  ([form] (get-in form [form-key :origin]))
  ([form field] (get (get-original-data form) field)))

(declare validator)

(defn validatable-fields
  "Get all of the names of the validatable fields that are defined on the (initialized) form."
  [form] (filter #(not (is-subform? (field-config form %)))
                 (element-names form)))

(defn commit-state
  "Commits the state of the form to the entity, making it the new original data."
  [form] (assoc-in form [form-key :origin]
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
         elements (:elements (get-form-spec form-class))
         subform-fields (set (keep #(when (is-subform? %) (:input/name %)) elements))
         get-class (fn [ast-node] (let [subquery (:query ast-node)]
                                    (if (or (int? subquery) (= '... subquery))
                                      (fail! "Forms do not support recursive-query-based subforms!"
                                        {:subquery subquery :ast-node ast-node})
                                      (:component ast-node))))
         is-form-node? (fn [ast-node]
                         (let [form-class (get-class ast-node)
                               prop (:key ast-node)
                               join? (= :join (:type ast-node))
                               union? (and join? (map? (:query ast-node)))
                               wants-to-be? (contains? subform-fields prop)]
                           (when (and union? wants-to-be?)
                             (fail! "Subforms cannot be on union queries. You will have to manually group your subforms if you use unions."
                               {:ast-node ast-node}))
                           (when (and wants-to-be?
                                   (not (and (implements? om/Ident form-class)
                                          (implements? IForm form-class)
                                          (implements? om/IQuery form-class))))
                             (fail! (str "Declared subform for property " prop
                                      " does not implement IForm, IQuery, and Ident.")
                               {:ast-node ast-node}))
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
  `form-update-fn` of type (fn [{:keys [ident class form]}] => form), where:
   * `:class` is the component that has the form,
   * `:ident` is of the form in app state,
   * `:form`  is the value of the form in app state."
  [app-state form form-update-fn]
  (transduce (map #(assoc % :form (form-update-fn %)))
    (completing
      (fn [s {:keys [ident form]}]
        (assoc-in s ident form)))
    app-state
    (get-forms app-state
      (form-component form)
      (form-ident form))))

(defn reduce-forms
  "Similar to reduce, but walks the forms.
   Useful for gathering information from nested forms (eg: are all of them valid?).
   At each form it calls (form-fn accumulator {:keys [ident form class]}).
   The first visit will use `starting-value` as the initial accumulator,
   and the return value of form-fn will become the new accumulator.

   Returns the final accumulator value."
  [app-state form starting-value form-fn]
  (reduce form-fn starting-value
    (get-forms app-state
      (form-component form)
      (form-ident form))))

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
  (assert-or-fail field-keys-to-initialize (every-pred seq (partial every? keyword?))
    "Empty or invalid field keys")
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
  (let [{:keys [elements form]} (get-form-spec form-class)
        element-keys (map :input/name elements)
        elements-by-name (zipmap element-keys elements)
        {:keys [state validation]} (default-state elements)
        entity-state-of-interest (select-keys entity-state element-keys)
        init-state (initialized-state state element-keys entity-state-of-interest)
        final-state (merge entity-state init-state)]
    (-> final-state
      (assoc form-key
        (-> form
          (merge
            {:elements/by-name elements-by-name
             :ident            (om/ident form-class final-state)
             :origin           (into {}
                                 (map (fn [[k v]]
                                        [k (if (and (is-subform? (elements-by-name k))
                                                 (not (or (util/ident? v)
                                                          (every? util/ident? v))))
                                             (case (:input/cardinality (elements-by-name k))
                                               :many (mapv form-ident v)
                                               (form-ident v))
                                             v)]))
                                 init-state)
             :subforms         (or (filterv :input/is-form? elements) [])
             :validation       validation})
          (vary-meta merge {:component form-class}))))))

(declare init-form*)

(defn initialized? "Returns true if the given form is already initialized with form setup data"
  [form] (map? (form-key form)))

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
    (let [base-form (cond->> form (not (initialized? form))
                      (build-form form-class))
          base-app-state (assoc-in app-state form-ident base-form)]
      (transduce (filter is-subform?)
        (fn [state subform-spec]
          (if (= :many (:input/cardinality subform-spec))
            (init-many state base-form subform-spec forms-visited)
            (init-one state base-form subform-spec forms-visited)))
        base-app-state
        (:elements (get-form-spec form-class))))
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

(defn on-form-change [mut-sym]
  {:input/type form-key
   :input/name :on-form-change
   :on-form-change/mut-sym mut-sym})

(defn get-on-form-change-mut-sym [form]
  (get-in form [form-key :on-form-change :on-form-change/mut-sym]))

(defn current-validity
  [form field]
  (get-in form [form-key :validation field]))

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
  (assoc-in form [form-key :validation field] value))

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
  (reduce-forms app-state form false
    (fn [d? {:keys [form]}] (or d? (dirty? form)))))

(defn validate-forms
  "Run validation on an entire form (by ident) with subforms. Returns an updated app-state."
  [app-state form-id]
  (let [form (get-in app-state form-id)
        form-class (form-component form)]
    (if form-class
      (update-forms app-state form (comp validate-fields :form))
      (do
        (fail! "Unable to validate form. No component associated with form. Did you remember to use build-form?")
        app-state))))

;; TODO: TESTME
#?(:cljs (defmethod m/mutate `validate-field [{:keys [state]} k {:keys [form-id field]}]
           {:doc "Mutation to run validation on a specific field"
            :action #(swap! state update-in form-id validate-field field)}))

;; TODO: TESTME
#?(:cljs (defmethod m/mutate `validate-form [{:keys [state]} k {:keys [form-id]}]
           {:doc "Mutation to run validation on an entire form"
            :action (fn []
                      (let [form (get-in @state form-id)]
                        (if form
                          (swap! state update-forms form (comp validate-fields :form))
                          (fail! "Unable to validate form. No component associated with form. Did you remember to use build-form?"))))}))

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
      ~form-root-key]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; GENERAL FORM MUTATION METHODS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

#?(:cljs (defmethod m/mutate `toggle-field [{:keys [state]} k {:keys [form-id field]}]
           {:action (fn [] (swap! state update-in form-id update-current-value field not))}))

#?(:cljs (defmethod m/mutate `set-field [{:keys [state]} k {:keys [form-id field value]}]
           {:action (fn [] (swap! state update-in form-id set-current-value field value))}))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; FORM FIELD RENDERING
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; TODO: TESTME
(defmulti form-field*
  "Multimethod for rendering field types. Dispatches on field :input/type."
  (fn [component form field-name & params]
    (:input/type (field-config form field-name))))

(defmethod form-field* :default [component form field-name]
  (fail! (str "Cannot dispatch to form-field renderer on form " form " for field " field-name)))

(defn form-field
  "Function for rendering form fields. Call this to render, but `defmethod` on `form-field*`."
  [component form field-name & params]
  (apply form-field* component form field-name params))

(defn render-text-field [component form field-name]
  (let [id (form-ident form)
        text-value (or (current-value form field-name) "")
        cls (or (css-class form field-name) "form-control")]
    (dom/input #js
      {:type      "text"
       :name      field-name
       :value     text-value
       :className cls
       :onChange  (fn [event]
                    (let [value (.. event -target -value)
                          field-info {:form-id id
                                      :field field-name
                                      :value value}]
                      (om/transact! component
                        `[(set-field ~field-info)
                          (~(get-on-form-change-mut-sym form) ~field-info)
                          ~form-root-key])))})))

(defmethod form-field* ::text [component form field-name]
  (render-text-field component form field-name))

(defn render-integer-field [component form field-name]
  (let [id (form-ident form)
        cls (or (css-class form field-name) "form-control")
        text-value (current-value form field-name)]
    (dom/input #js
      {:type      "number"
       :name      field-name
       :className cls
       :value     text-value
       :onBlur    (fn [_]
                    (om/transact! component
                      `[(validate-field
                          ~{:form-id id :field field-name})
                        ~form-root-key]))
       :onChange  (fn [event]
                    (let [raw-value (.. event -target -value)
                          value (cond-> raw-value
                                  (seq (re-matches #"^[0-9]*$" raw-value))
                                  int)
                          form-info {:form-id id
                                     :field   field-name
                                     :value   value}]
                      (om/transact! component
                        `[(set-field ~form-info)
                          (~(get-on-form-change-mut-sym form) ~form-info)
                          ~form-root-key])))})))

(defmethod form-field* ::integer [component form field-name]
  (render-integer-field component form field-name))

#?(:cljs (defmethod m/mutate `select-option
           [{:keys [state]} k {:keys [form-id field value]}]
           {:action (fn [] (let [value (.substring value 1)]
                             (swap! state assoc-in
                               (conj form-id field)
                               (keyword value))))}))

(defmethod form-field* ::dropdown [component form field-name]
  (let [id (form-ident form)
        selection (current-value form field-name)
        cls (or (css-class form field-name) "form-control")
        field (field-config form field-name)
        optional? (= ::none (:input/default-value field))
        options (:input/options field)]
    (dom/select #js
      {:name      field-name
       :className cls
       :value     selection
       :onChange  (fn [event]
                    (let [value (.. event -target -value)
                          field-info {:form-id id
                                      :field   field-name
                                      :value   value}]
                      (om/transact! component
                        `[(select-option ~field-info)
                          (~(get-on-form-change-mut-sym form) ~field-info)
                          ~form-root-key])))}
      (when optional?
        (dom/option #js {:value ::none} ""))
      (map (fn [{:keys [option/key option/label]}]
             (dom/option #js {:key key :value key} label))
        options))))

(defmethod form-field* ::checkbox [component form field-name]
  (let [id (form-ident form)
        cls (or (css-class form field-name) "")
        bool-value (current-value form field-name)]
    (dom/input #js
      {:type      "checkbox"
       :name      field-name
       :className cls
       :checked   bool-value
       :onChange  (fn [event]
                    (let [value (.. event -target -value)
                          field-info {:form-id id
                                      :field   field-name
                                      :value   value}]
                      (om/transact! component
                        `[(toggle-field ~field-info)
                          (~(get-on-form-change-mut-sym form) ~field-info)
                          ~form-root-key])))})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; LOAD AND SAVE FORM TO/FROM ENTITY
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defprotocol DBAdapter
  (commit! [this params]
    "Entry point for creating (& executing) a transaction,
     given params with the same shape as what diff-form returns.
     Example code for using `DBAdapter/commit!`:
     (defmethod your-mutate `forms/commit-to-entity [env k params]
       (commit! (:adapter env) params))")
  (transact! [this tx] "Execute a transaction!")
  (gen-tempid [this] "Generates a db tempid.")
  (parse-tx [this tx-type data]
    "Given a tx-type and data, transforms it into a db transaction.
     OR TODO: Should this be add-tx, set-tx, etc..."))

(defn diff-form
  "Returns the diff between the form's current state and its original data.
   The return value is a map where the keys are the idents of the forms that have changed,
   and the values are vectors of the keys for the fields that changed on that form.

   Return value:
   {:tx/new {[:phone/by-id #phone-id] {...}}
   ,:tx/del {...}
   ,:tx/set {[:phone/by-id 1] {:phone/number \"123-4567\"}}
   ,:tx/add {[:person/by-id 1] {:person/number [[:phone/by-id #phone-id]]}}
   ,:tx/rem {...}}"
  [app-state form]
  (reduce-forms app-state form {}
    (fn [diff {:keys [ident form]}]
      (let [fields (element-names form)]
        (if (om/tempid? (second ident))
          (assoc-in diff [:tx/new ident] (select-keys form fields))
          (transduce (remove (partial ui-field? form))
            (completing
              (fn [acc field]
                (let [curr (current-value form field)
                      orig (get-original-data form field)]
                  (cond
                    (= curr orig) acc
                    :else
                    (let [cfg (field-config form field)]
                      (case (:input/cardinality cfg)
                        :many (let [additions (set/difference (set curr) (set orig))
                                    removals  (set/difference (set orig) (set curr))]
                                (cond-> acc
                                  (seq removals)  #_=> (assoc-in [:tx/rem ident field] (vec removals))
                                  (seq additions) #_=> (assoc-in [:tx/add ident field] (vec additions))))
                        (cond
                          curr #_=> (assoc-in acc [:tx/set ident field] curr)
                          (and (not curr) orig)
                          #_=> (assoc-in acc [:tx/del ident field] orig)
                          :else acc)))))))
            diff fields))))))

(defn reset-from-entity!
  "Reset the form from a given entity in your application database using an Om transaction and update the validation state.
   You may compose your own Om transactions and use `(f/reset-from-entity {:form-id [:entity id]})` directly."
  [comp-or-reconciler form]
  (let [form-id (form-ident form)]
    (om/transact! comp-or-reconciler
      `[(reset-from-entity ~{:form-id form-id})
        (validate-form ~{:form-id form-id})
        ~form-root-key])))

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
         form-root-key]
        rerender))))

(defn entity-x-form
  "Modify the form's (under `form-id`) using `update-forms` and a passed in transform `xf`"
  [state form-id xf]
  (update-forms state
    (get-in state form-id)
    (comp xf :form)))

#?(:cljs (defmethod m/mutate `commit-to-entity
           [{:keys [state ast]} k {:keys [form-id remote]}]
           (let [delta (diff-form @state (get-in @state form-id))]
             {:doc "Mutation for moving form data from the form into an entity
                    eg: commit an entity to storage & make it the new origin for the entity"
              :remote (and remote (update ast :params #(-> % (dissoc :remote) (assoc :delta delta))))
              :action (fn [] (swap! state entity-x-form form-id commit-state))})))

#?(:cljs (defmethod m/mutate `reset-from-entity
           [{:keys [state ast]} k {:keys [form-id remote]}]
           {:doc "Mutation for moving form data from the entity into the form
                  eg: reset an entity to its original value"
            :remote (and remote (update ast :params dissoc :remote))
            :action (fn [] (swap! state entity-x-form form-id reset-entity))}))
