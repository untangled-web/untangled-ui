(ns untangled.components.forms
  (:require-macros [untangled.client.cards :refer [untangled-app]])
  (:require [clojure.string :as str]
            [om.dom :as dom]
            [om.next :as om :refer [defui]]
            [devcards.core :as dc]
            [untangled.i18n :refer [tr]]
            [untangled.components.ui.forms :as f]
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

(defui PersonForm
  static uc/InitialAppState
  (initial-state [this params] (f/build-form this (or params {})))
  static f/IForm
  (fields [this] [(f/id-field :db/id)
                  (f/text-input :person/name 'name-valid?)
                  (f/numeric-input :person/age 'in-range? {:min 1 :max 110})
                  (f/checkbox-input :person/registered-to-vote?)])
  static om/IQuery
  (query [this] [:db/id :person/name :person/age :person/registered-to-vote? :ui/form])
  static om/Ident
  (ident [this props] [:people/by-id (:db/id props)])
  Object
  (render [this]
    (let [props (om/props this)]
      (dom/div nil
        (when (f/valid? props)
          (dom/div nil "READY to submit!"))
        (field-with-label this props :person/name "Full Name:" "Please enter your first and last name.")
        (field-with-label this props :person/age "Age:" "That isn't a real age!")
        (field-with-label this props :person/registered-to-vote? "Registered?")
        (when (f/checked? props :person/registered-to-vote?)
          (dom/div nil "Good on you!"))
        (dom/br nil)
        (dom/button #js {:disabled (not (f/dirty? props)) :onClick #(f/commit-to-entity! this props)} "Save to entity!")
        #_(dom/button #js {:onClick #(f/validate-entire-form! this form)} "Submit!")
        #_(dom/button #js {:onClick #(f/reset-form! this form)} "Reset")))))

(def ui-person-form (om/factory PersonForm))

(defui Root
  static uc/InitialAppState
  (initial-state [this params] {:ui/person-id 1 :person (uc/initial-state PersonForm {:db/id 1 :person/name "Tony Kay" :person/age 23 :person/registered-to-vote? false})})
  static om/IQuery
  (query [this] [:ui/person-id {:person (om/get-query PersonForm)}])
  Object
  (render [this]
    (let [{:keys [ui/person-id person]} (om/props this)]
      #_(dom/button #js {:onClick #(f/reset-from-entity! this PersonForm person-id)} "Load person: ")
      #_(dom/input #js {:value (or person-id "") :onChange #(m/set-integer! this :ui/person-id :event %)})
      (when person
        (ui-person-form person)))))


(dc/defcard sample-form-1
  "This card shows a very simple form in action."
  (untangled-app Root)
  {}
  {:inspect-data true})

(comment
  (defui PhoneForm
    static om/IQuery
    (query [this] f/form-query)
    static om/Ident
    (ident [this props] (f/form-ident props))
    Object
    (render [this]
      (let [form (om/props this)]
        (dom/div nil
          (field-with-label this form :phone/type "Phone type:")
          (field-with-label this form :phone/number "Number:")))))

  (def ui-phone-form (om/factory PhoneForm))

  (defui PhoneRoot
    static om/IQuery
    (query [this] [{(f/form-ident :phone-form) (om/get-query PhoneForm)}])
    Object
    (render [this]
      (let [form (f/extract-form this)]
        (when (f/valid-form? form)
          (ui-phone-form form)))))




  (dc/defcard phone-number-form
    "This card should a simple form with a dropdown"
    (untangled-app PhoneRoot
                   :started-callback (fn [app] (f/initialize-forms! app [phone-form])))
    {}
    {:inspect-data true}))
