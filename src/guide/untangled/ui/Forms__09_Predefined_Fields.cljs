(ns untangled.ui.Forms--09-Predefined-Fields
  (:require-macros
    [devcards.core :as dc :refer [defcard defcard-doc]]
    [untangled.client.cards :refer [untangled-app]])
  (:require
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.ui.forms :as f]
    [untangled.ui.elements :as ele]))

(defn field-with-label
  "A non-library helper function, written by you to help lay out your form."
  [comp form name label & params]
  (dom/div #js {:className (str "form-group" (if (f/invalid? form name) " has-error" ""))}
    (dom/label #js {:className "col-sm-2" :htmlFor name} label)
    (dom/div #js {:className "col-sm-10"} (apply f/form-field comp form name params)) ))

(defui ^:once KitchenSink
  static uc/InitialAppState
  (initial-state [this params] (f/build-form this (or params {:db/id 1})))
  static f/IForm
  (form-spec [this] [(f/id-field :db/id)
                     (f/text-input :text)
                     (f/integer-input :number)
                     (f/dropdown-input :mood [(f/option :happy "Happy") (f/option :sad "Sad")])
                     (f/checkbox-input :done?)
                     (f/radio-input :rating #{1 2 3 4 5})
                     (f/textarea-input :essay)])
  static om/IQuery
  (query [this] [f/form-root-key f/form-key :db/id :text :number :mood :done? :rating :essay])
  static om/Ident
  (ident [this props] [:sink/by-id (:db/id props)])
  Object
  (render [this]
    (let [props (om/props this)]
      (dom/div #js {:className "form-horizontal"}
        (field-with-label this props :text "Text:")
        (field-with-label this props :number "Number:")
        (field-with-label this props :mood "Mood:")
        (field-with-label this props :done? "Done:")
        (field-with-label this props :essay "Essay:" :rows 10 :maxLength 100)
        (dom/div #js {:className "form-group"}
          (dom/label #js {:className "col-sm-2" :htmlFor :rating} "Rating:")
          (dom/div #js {:className "col-sm-10"}
            (f/form-field this props :rating :choice 1) 1
            (f/form-field this props :rating :choice 2) 2
            (f/form-field this props :rating :choice 3) 3
            (f/form-field this props :rating :choice 4) 4
            (f/form-field this props :rating :choice 5) 5))))))

(def ui-sink (om/factory KitchenSink {:keyfn :db/id}))

(defui ^:once CommitRoot
  static uc/InitialAppState
  (initial-state [this _] {:sink (uc/initial-state KitchenSink {:db/id 1})})
  static om/IQuery
  (query [this] [:ui/react-key
                 {:sink (om/get-query KitchenSink)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key sink]} (om/props this)]
      (dom/div #js {:key react-key}
        (ui-sink sink)))))

(defcard-doc
  "# Forms – All Built-in Field Types

  "
  (dc/mkdn-pprint-source KitchenSink))

(defcard form-changes
  (untangled-app CommitRoot)
  {}
  {:inspect-data false})

