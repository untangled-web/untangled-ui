(ns untangled.components.forms
  (:require-macros [untangled.client.cards :refer [untangled-app]])
  (:require [clojure.string :as str]
            [om.dom :as dom]
            [om.next :as om :refer [defui]]
            [devcards.core :as dc]
            [untangled.components.ui.forms :as f]
            [untangled.client.core :as uc]))

(defn field-with-label
  ([comp form name label] (field-with-label comp form name label nil))
  ([comp form name label validation-message]
   (dom/div #js {:className (str "field " (f/form-id form) " " name)}
     (dom/label #js {:className (if (f/invalid? form name) "invalid" "") :htmlFor name} label)
     (f/form-field comp form name)
     (when (and validation-message (f/invalid? form name))
       (dom/span #js {:className (str "invalid " name)} validation-message)))))

(defui Form
  static om/IQuery
  (query [this] f/form-query)
  static om/Ident
  (ident [this props] (f/form-ident props)))

(defui MyForm
  static om/IQuery
  (query [this] f/form-query)
  static om/Ident
  (ident [this props] (f/form-ident props))
  Object
  (render [this]
    (let [form (om/props this)]
      (dom/div nil
        (field-with-label this form :name "Full Name:" "Please enter your first and last name.")
        (field-with-label this form :registered-to-vote "Registered?")
        (when (f/checked? form :registered-to-vote)
          (dom/div nil "Good on you!"))
        (dom/button #js {:onClick #(f/reset-form! this form)} "Reset")))))

(def ui-form (om/factory MyForm))

(defui Forms
  static om/Ident
  (ident [this props] [:master :form])
  static om/IQuery
  (query [this] [{:all-forms (om/get-query Form)}]))

;(uc/merge-state! @app Forms {:all-forms []})

(def my-form (f/build-form {:id     :my-form
                            :fields [(f/text-input :name 'name-valid?)
                                     (f/checkbox-input :registered-to-vote)]}))

(defui Root
  static om/IQuery
  (query [this] [{(f/form-ident :my-form) (om/get-query MyForm)}])
  Object
  (render [this]
    (let [p (om/props this)
          form (get p (f/form-ident :my-form))]
      (when (:config form)
        (ui-form form)))))

(dc/defcard sample-form-1
  "This card shows a very simple form in action."
  (untangled-app Root
                 :started-callback
                 (fn [app] (uc/merge-state! app Forms {:all-forms [my-form]})))
  {}
  {:inspect-data true})



