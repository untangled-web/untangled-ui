(ns untangled.components.forms
  (:require-macros
    [untangled.client.cards :refer [untangled-app]]
    [devcards.core :as dc :refer [defcard defcard-doc]])
  (:require [clojure.string :as str]
            [om.dom :as dom]
            [om.next :as om :refer [defui]]
            [untangled.i18n :refer [tr]]
            [untangled.components.ui.forms :as f]
            [untangled.dom :as udom]
            [untangled.client.core :as uc]
            [untangled.client.mutations :as m]))

(defn field-with-label
  "A non-library helper function, written by you to help lay out your form."
  ([comp form name label] (field-with-label comp form name label nil))
  ([comp form name label validation-message]
   (dom/div #js {:className ""}
     (dom/label #js {:className (if (f/invalid? form name) "invalid" "") :htmlFor name} label)
     (f/form-field comp form name)
     (when (and validation-message (f/invalid? form name))
       (dom/span #js {:className (str "invalid " name)} validation-message)))))

(defui ^:once PhoneForm
  static uc/InitialAppState
  (initial-state [this params] (f/build-form this (or params {})))
  static f/IForm
  (fields [this] [(f/id-field :db/id)
                  (f/text-input :phone/number)
                  (f/dropdown-input :phone/type [(f/option :home "Home") (f/option :work "Work")])])
  static om/IQuery
  (query [this] [:db/id :phone/type :phone/number :ui/form])
  static om/Ident
  (ident [this props] [:phone/by-id (:db/id props)])
  Object
  (render [this]
    (let [form (om/props this)]
      (dom/div nil
        (field-with-label this form :phone/type "Phone type:")
        (field-with-label this form :phone/number "Number:")))))

(def ui-phone-form (om/factory PhoneForm {:keyfn :db/id}))

(defui ^:once PersonForm
  static uc/InitialAppState
  (initial-state [this params] (f/build-form this (or params {})))
  static f/IForm
  (fields [this] [(f/id-field :db/id)
                  (f/text-input :person/name 'name-valid?)
                  (f/numeric-input :person/age 'in-range? {:min 1 :max 110})
                  (f/checkbox-input :person/registered-to-vote?)])
  static om/IQuery
  (query [this] [:ui/root-form :db/id :person/name :person/age :person/registered-to-vote? {:person/phone-numbers (om/get-query PhoneForm)} :ui/form])
  static om/Ident
  (ident [this props] [:people/by-id (:db/id props)])
  Object
  (render [this]
    (let [{:keys [person/phone-numbers] :as props} (om/props this)
          dirty? (or (f/dirty? props) (some #(f/dirty? %) phone-numbers))]
      (dom/div nil
        (when (f/valid? props)
          (dom/div nil "READY to submit!"))
        (field-with-label this props :person/name "Full Name:" "Please enter your first and last name.")
        (field-with-label this props :person/age "Age:" "That isn't a real age!")
        (field-with-label this props :person/registered-to-vote? "Registered?")
        (when (f/checked? props :person/registered-to-vote?)
          (dom/div nil "Good on you!"))
        (dom/div nil
          (mapv ui-phone-form phone-numbers))
        (dom/button #js {:onClick #(om/transact! this `[(sample/add-phone ~{:id (om/tempid) :person (:db/id props)})])} "Add Phone")
        (dom/br nil)
        (dom/button #js {:disabled (not dirty?) :onClick (fn []
                                                           (doseq [n phone-numbers]
                                                             (f/commit-to-entity! this n true))
                                                           (f/commit-to-entity! this props true))} "Save to entity!")
        #_(dom/button #js {:onClick #(f/validate-entire-form! this form)} "Submit!")
        #_(dom/button #js {:onClick #(f/reset-form! this form)} "Reset")))))

(def ui-person-form (om/factory PersonForm))

(defui ^:once Root
  static uc/InitialAppState
  (initial-state [this params] {:ui/person-id 1 :person (uc/initial-state PersonForm {:db/id                1 :person/name "Tony Kay" :person/age 23 :person/registered-to-vote? false
                                                                                      :person/phone-numbers [(uc/initial-state PhoneForm {:db/id 22 :phone/type :work :phone/number "412-1212"})
                                                                                                             (uc/initial-state PhoneForm {:db/id 23 :phone/type :home :phone/number "555-1212"})]})})
  static om/IQuery
  (query [this] [:ui/person-id {:person (om/get-query PersonForm)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key ui/person-id person]} (om/props this)]
      (dom/div #js {:key react-key}
        #_(dom/button #js {:onClick #(f/reset-from-entity! this PersonForm person-id)} "Load person: ")
        #_(dom/input #js {:value (or person-id "") :onChange #(m/set-integer! this :ui/person-id :event %)})
        (when person
          (ui-person-form person))))))

(defn add-phone-mutation [{:keys [state]} k {:keys [id person]}]
  {:action (fn []
             (let [new-phone (uc/initial-state PhoneForm {:db/id id :phone/type :home :phone/number ""})
                   person-ident [:people/by-id person]
                   phone-ident (om/ident PhoneForm new-phone)]
               (swap! state assoc-in phone-ident new-phone)
               (uc/integrate-ident! state phone-ident :append (conj person-ident :person/phone-numbers))))})

(defmethod m/mutate 'sample/add-phone [e k p] (add-phone-mutation e k p))

(defcard-doc
  "# Forms

   Generic form support is a primary rapid appliation development feature. Fortunately, the overall structure of Om Next
   and Untangled makes it relatively simple to write form support in a general-purpose, composeable manner. In fact,
   just a few simple functions make it possible to support:

   - An extensible form field set
   - Extensible validation
   - Declarative forms
   - Separation of form UI from form logic
   - Remote integration with form <-> entity
   - Local integration with entities in the browser database

   In the following examples, the following requires are needed:

   ```
   (ns your-ns
     (:require
       [om.dom :as dom]
       [om.next :as om :refer [defui]]
       [untangled.i18n :refer [tr]]
       [untangled.components.ui.forms :as f]
       [untangled.client.core :as uc]
       [untangled.client.mutations :as m]))
   ```

  # Form Fields

  Form fields are most conveniently declared on the ui component that will render the form. For example, say we
  want to be able to render a form to edit a phone number:

  "
  (dc/mkdn-pprint-source PhoneForm)
  "

  The `f/id-field` form field is a special form field that you normally do not render, but it marks the field on the
  entity that represents the unique (server) identity of the object. The other form-field types represent abstract
  form elements that can be rendered.

  Also take special note of the query. It **must** include `:ui/form`, which will pull in the special data needed
  by the form logic. Also note the call in `InitialAppState` to `f/build-form`. This build function is responsible
  for creating the initial state of any component that wishes to act as a form.

  Field rendering itself is done by the `f/form-field` multimethod. However, this method renders *only* the input. It
  does not render a lable, set classes, etc. Therefore, you will usually want to write your own wrapper function that
  can be used to lay out exactly how you want a form field to look. For example:

  "
  (dc/mkdn-pprint-source field-with-label)
  "
  You see here that there are a number of helper functions that can be used to check things like if the value of the
  field is currently invalid.

  ## Validation

  - Runs on blur
  - Can be triggered for the whole form

  ## State Evolution

  A form will initially have the field values set to the entity state (passed to `build-form`). As you interact with
  the form, the form fields change, but the entity itself does not update in the database table. This allows you to:

  - Reset the form from the entity (optionally triggering a (re)read from the server)
  - Commit the form changes to the entity (local and optionally remote)

  ## Composition

  Forms can be easily composed. They are UI components, and have nothing special about them other than the `:ui/form`
  state that is added to the entity (though your call of `build-form`). You can convert any entity in your database
  to a form using the `build-form` function, meaning that you can load entities as normal, and as you want to edit them
  in a form, simple mutate them into form-compatible entities with `build-form` (which will not touch the original
  properties of the entity, just add `:ui/form`). Then render them with a UI component that shares your entity Ident,
  but has a render method that renders the form fields with `form-field`.

  Here is the source for an application that renders a Person form, where the person can have any nubmer of phone numbers,
  each represented by a nested phone number entity/form. Note the use of `InitialAppState` in Root to build out sample
  data.
  "
  (dc/mkdn-pprint-source PhoneForm)
  (dc/mkdn-pprint-source PersonForm)
  (dc/mkdn-pprint-source Root)
  "

  Adding a phone number is done via the add phone mutation, which looks like this:
  "
  (dc/mkdn-pprint-source add-phone-mutation)
  )

(defcard sample-form-1
  "This card shows a very simple form in action."
  (untangled-app Root)
  {}
  {:inspect-data true})

