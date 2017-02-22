(ns untangled.ui.Forms--05-Field-Interactions
  (:require-macros
    [untangled.client.cards :refer [untangled-app]])
  (:require
    [clojure.string :as str]
    [com.stuartsierra.component :as component]
    [devcards.core :as dc :refer [defcard defcard-doc]]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.client.mutations :as m :refer [defmutation]]
    [untangled.ui.forms :as f]
    [untangled.icons :as i]
    [untangled.ui.simulated-server :refer [make-mock-network]]
    [untangled.client.logging :as log]
    [untangled.client.data-fetch :as df]
    [untangled.client.impl.network :as un]))

(defn read-handler [{:keys [users]} k {:keys [name] :as params}]
  (log/info "SERVER query for " k " with parameters " params " and existing usernames " users)
  (case k
    :name-in-use {:value (cond
                           (contains? users name) :duplicate
                           :otherwise :ok)}
    nil))

;; Server-side mutation handling. We only care about one mutation
(defn write-handler [env k p]
  (log/info "SERVER mutation for " k " with params " p))

; Om Next query parser. Calls read/write handlers with keywords from the query
(def server-parser (om/parser {:read read-handler :mutate write-handler}))

; Simulated server. You'd never write this part
(defn server [env tx]
  (server-parser (assoc env :users #{"tony" "sam"}) tx))

; Networking that pretends to talk to server. You'd never write this part
(defrecord MockNetwork [complete-app]
  un/UntangledNetwork
  (send [this edn ok err]
    ; simulates a network delay:
    (js/setTimeout
      #(let [resp (server {} edn)]
         (ok resp))
      1000))
  (start [this app]
    (assoc this :complete-app app)))

(defn field-with-label
  "A non-library helper function, written by you to help lay out your form."
  ([comp form name label] (field-with-label comp form name label nil))
  ([comp form name label validation-message]
   (dom/div #js {:className (str "form-group" (if (f/invalid? form name) " has-error" ""))}
     (dom/label #js {:className "col-sm-2" :htmlFor name} label)
     (dom/div #js {:className "col-sm-10"} (f/form-field comp form name))
     (when (and validation-message (f/invalid? form name))
       (dom/span #js {:className (str "col-sm-offset-2 col-sm-10" name)} validation-message)))))

(defui NameInUseQuery
  static om/IQuery
  (query [this] []))

(defmutation check-username-available
  "Sample mutation that simulates legal username check"
  [{:keys [form-id kind field]}]
  (action [{:keys [state]}]
    (js/console.log field kind)
    (when (and (= kind :blur) (= :person/name field))
      ; you could do this with a remote/post mutation sequence...
      (let [value (get-in @state (conj form-id field))]
        (df/load-action state :name-in-use nil {:target  (conj form-id :ui/name-status)
                                                :refresh [f/form-root-key]
                                                :params  {:name value}}))))
  (remote [env] (df/remote-load env)))

(defui ^:once Person
  static uc/InitialAppState
  (initial-state [this params] (f/build-form this (or params {})))
  static f/IForm
  (form-spec [this] [(f/id-field :db/id)
                     (f/on-form-change `check-username-available)
                     (f/text-input :person/name)
                     (f/integer-input :person/age)])
  static om/IQuery
  (query [this] [f/form-root-key f/form-key
                 :db/id :person/name :person/age :ui/name-status])
  static om/Ident
  (ident [this props] [:person/by-id (:db/id props)])
  Object
  (render [this]
    (let [{:keys [ui/name-status] :as props} (om/props this)]
      (dom/div #js {:className "form-horizontal"}
        (field-with-label this props :person/name "Username:" "Please enter your first and last name.")
        (case name-status
          :duplicate (dom/span nil "That username is in use.")
          :ok (dom/span nil "OK" (untangled.icons/icon :check))
          (dom/span nil ""))
        (field-with-label this props :person/age "Age:" "That isn't a real age!")
        (dom/div #js {:className "button-group"}
          (dom/button #js {:className "btn btn-default"
                           :disabled  (not (f/dirty? props))
                           :onClick   #(f/commit-to-entity! this :remote true)}
            "Save!"))))))

(def ui-person (om/factory Person {:keyfn :db/id}))

(defui ^:once CommitRoot
  static uc/InitialAppState
  (initial-state [this _] {:person (uc/initial-state Person {:db/id 1})})
  static om/IQuery
  (query [this] [:ui/react-key
                 {:person (om/get-query Person)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key new-person person]} (om/props this)]
      (dom/div #js {:key react-key}
        (ui-person person)))))

(defcard-doc
  "# Forms -- Field Interactions

  Many forms need logic that updates the UI in some non-local way as form interactions take place.
  Simple field validations can be local to a field, but some UI changes require who-form reasoning
  or cross-field interactions.

  Some simple examples:

  - Verification fields (two fields must contain the same data to ensure they typed it correctly)
  - Triggering a server-side check of a value (e.g. is that username in use?)
  - Making other UI elements appear/disappear according to field changes

  We accomplish these things in the form support by allowing you to declare an entry in your
  `IForm` list that names an Untangled mutation to run as changes are detected in the form/subform
  set.

")

(defcard form-changes
  "# Verifying Username Sample

  The following sample uses a mock server to do a full-stack form interaction example that uses
  `on-form-change` to check is a username is available. The already known usernames are 'tony' and
  'sam'.

  On blur, the server will be asked if the username is available (with a simulated 1s network latency).

  The load will trigger UI refresh and show the message.

  TODO: Fix the CSS/rendering to be prettier
  "
  (untangled-app CommitRoot
    :networking (map->MockNetwork {}))
  {}
  {:inspect-data false})

