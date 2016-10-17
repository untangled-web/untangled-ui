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
   (dom/div #js {:className (str "field " (f/form-id form) " " name)}
     (dom/label #js {:className (if (f/invalid? form name) "invalid" "") :htmlFor name} label)
     (f/form-field comp form name)
     (when (and validation-message (f/invalid? form name))
       (dom/span #js {:className (str "invalid " name)} validation-message)))))

;; The entity that this form deals with
(defui Person
  static om/Ident
  (ident [this props] [:people/by-id (:db/id props)])
  static om/IQuery
  (query [this] [:person/name :person/age :db/id :person/registered-to-vote?]))

(defui MyForm
  static om/IQuery
  (query [this] (conj f/form-query :ui/person-id))
  static om/Ident
  (ident [this props] (f/form-ident props))
  Object
  (render [this]
    (let [form (om/props this)
          id (:ui/person-id form)]
      (dom/div nil
        (when (f/valid? form)
          (dom/div nil "READY to submit!"))
        (field-with-label this form :person/name "Full Name:" "Please enter your first and last name.")
        (field-with-label this form :person/age "Age:" "That isn't a real age!")
        (field-with-label this form :person/registered-to-vote? "Registered?")
        (when (f/checked? form :person/registered-to-vote?)
          (dom/div nil "Good on you!"))
        (dom/button #js {:onClick #(f/reset-from-entity! this form Person id)} "Load person: ")
        (dom/input #js {:value (or id "") :onChange #(m/set-integer! this :ui/person-id :event %)})
        (dom/br nil)
        (dom/button #js {:onClick #(f/commit-to-entity! this form Person)} "Save to entity!")
        (dom/button #js {:onClick #(f/validate-entire-form! this form)} "Submit!")
        (dom/button #js {:onClick #(f/reset-form! this form)} "Reset")))))

(def ui-form (om/factory MyForm))

(def phone-form (f/build-form {:id     :phone-form
                               :fields [(f/id-field :db/id)
                                        (f/text-input :phone/number)
                                        (f/dropdown-input :phone/type [(f/option :mobile (tr "Mobile")) (f/option :home (tr "Home")) (f/option :work (tr "Work"))])]}))

(def my-form (f/build-form {:id     :my-form
                            :fields [(f/id-field :db/id)
                                     (f/text-input :person/name 'name-valid?)
                                     (f/numeric-input :person/age 'in-range? {:min 1 :max 110})
                                     (f/checkbox-input :person/registered-to-vote?)]}))

(defui Root
  static om/IQuery
  (query [this] [{(f/form-ident :my-form) (om/get-query MyForm)}])
  Object
  (render [this]
    (let [form (f/extract-form this)]
      (when (f/valid-form? form)
        (ui-form form)))))

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

(dc/defcard sample-form-1
  "This card shows a very simple form in action."
  (untangled-app Root
                 :started-callback
                 (fn [app] (f/initialize-forms! app [my-form])))
  {:people/by-id {1 {:db/id 1 :person/name "Sam Fox" :person/age 44 :person/registered-to-vote? false}
                  2 {:db/id 2 :person/name "Joe Fox" :person/age 23 :person/registered-to-vote? true}}}
  {:inspect-data true})


(dc/defcard phone-number-form
  "This card should a simple form with a dropdown"
  (untangled-app PhoneRoot
                 :started-callback (fn [app] (f/initialize-forms! app [phone-form])))
  {}
  {:inspect-data true})
