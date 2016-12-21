(ns untangled.components.forms-advanced
  (:require-macros
    [untangled.client.cards :refer [untangled-app]])
  (:require
    [clojure.string :as str]
    [com.stuartsierra.component :as component]
    [devcards.core :as dc :refer [defcard defcard-doc]]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.client.mutations :as m]
    [untangled.components.forms :as f]
    [untangled.components.simulated-server :refer [make-mock-network]]))

(defcard-doc "#Advanced Form Usages")

(defn field-with-label
  "A non-library helper function, written by you to help lay out your form."
  ([comp form name label] (field-with-label comp form name label nil))
  ([comp form name label validation-message]
   (dom/div #js {:className (str "form-group" (if (f/invalid? form name) " has-error" ""))}
     (dom/label #js {:className "col-sm-2" :htmlFor name} label)
     (dom/div #js {:className "col-sm-10"} (f/form-field comp form name))
     (when (and validation-message (f/invalid? form name))
       (dom/span #js {:className (str "col-sm-offset-2 col-sm-10" name)} validation-message)))))

(defcard-doc "##Server commit-to-entity")

(defui ^:once Person
  static uc/InitialAppState
  (initial-state [this params] (f/build-form this (or params {})))
  static f/IForm
  (form-spec [this] [(f/id-field :db/id)
                     (f/text-input :person/name)
                     (f/integer-input :person/age)])
  static om/IQuery
  (query [this] [f/form-root-key f/form-key
                 :db/id :person/name :person/age])
  static om/Ident
  (ident [this props] [:person/by-id (:db/id props)])
  Object
  (render [this]
    (let [props (om/props this)]
      (dom/div #js {:className "form-horizontal"}
        (field-with-label this props :person/name "Full Name:" "Please enter your first and last name.")
        (field-with-label this props :person/age "Age:" "That isn't a real age!")
        (dom/div #js {:className "button-group"}
          (dom/button #js {:className "btn btn-default"
                           :disabled (not (f/dirty-form? props))
                           :onClick #(f/commit-to-entity! this :remote true)}
            "Save!"))))))

(def ui-person (om/factory Person {:keyfn :db/id}))

(defui ^:once CommitRoot
  static uc/InitialAppState
  (initial-state [this _] {:new-person (uc/initial-state Person {:db/id 2346})
                           :person (uc/initial-state Person {})})
  static om/IQuery
  (query [this] [:ui/react-key
                 {:new-person (om/get-query Person)}
                 {:person (om/get-query Person)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key new-person person]} (om/props this)]
      (dom/div #js {:key react-key}
        (ui-person new-person)
        (ui-person person)))))

(defn api-read [{:keys [state]} k params]
  {:value 42})

(defn api-mutate [{:keys [state]} k params]
  (js/console.log "api-mutate:" k params)
  {:action (fn [] (swap! state assoc [k :seen/delta] (:delta params)))})

(defonce server-state (atom {:FAKE true}))
(defonce mock-network (make-mock-network server-state {:read api-read :mutate api-mutate}))

(defcard mock-server-state
  "This card shows the server state atom *live*!"
  server-state
  {:watch-atom true
   :inspect-data true})

(defcard CommitEntity
  (untangled-app CommitRoot
    :started-callback (fn [app] '...)
    :networking mock-network)
  {}
  {:inspect-data true})

(defcard-doc "##on-form-change")

(defn notify-form-changed [state {:keys [form-id field value]}]
  (assoc-in state (conj form-id :form-change/notification)
    (str "Field: " field " changed to: " value)))

(defmethod m/mutate 'form-changed/notify [{:keys [state]} k {:as params :keys [form-id field value]}]
  {:action (fn [] (swap! state notify-form-changed params))})

(defui ^:once ChangePlexer
  static uc/InitialAppState
  (initial-state [this _] (f/build-form this {:db/id 1}))
  static f/IForm
  (form-spec [this]
    [(f/on-form-change 'form-changed/notify)
     (f/id-field :db/id)
     (f/text-input :some/text :default-value "some text")])
  static om/IQuery
  (query [this] [f/form-key f/form-root-key
                 :db/id :some/text :form-change/notification])
  static om/Ident
  (ident [this props] [:change-plexer/by-id (:db/id props)])
  Object
  (render [this]
    (let [{:keys [form-change/notification] :as props} (om/props this)]
      (dom/div nil
        (when notification (dom/p nil (str "on-form-change notification: " notification)))
        (f/form-field this props :some/text)))))

(def ui-change-plexer (om/factory ChangePlexer))

(defui ^:once ChangeRoot
  static uc/InitialAppState
  (initial-state [this _] {:change-plexer (uc/initial-state ChangePlexer {})})
  static om/IQuery
  (query [this] [:ui/react-key {:change-plexer (om/get-query ChangePlexer)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key change-plexer]} (om/props this)]
      (dom/div #js {:key react-key}
        (ui-change-plexer change-plexer)))))

(defcard-doc
  "Here's the source code for a component that uses on-form-change"
  (dc/mkdn-pprint-source ChangePlexer)

  "To trigger a mutation whenever your form changes simply
   add a `(on-form-change 'your/mutation)` to your `form-spec`,
   and any renders that support it will transact! on `'your/mutation`."
  (dc/mkdn-pprint-source notify-form-changed))

(defcard on-form-change-sample
  "Change the text value to see the on-change notification."
  (untangled-app ChangeRoot)
  {}
  {:inspect-data true})
