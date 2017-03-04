(ns untangled.ui.Forms--09-Predefined-Fields
  (:require
    [om.dom :as dom]
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [om.next :as om :refer [defui]]
    [untangled.client.cards :refer [untangled-app]]
    [untangled.client.core :as uc]
    [untangled.ui.forms :as f]
    [untangled.ui.elements :as ele]
    [untangled.client.mutations :refer [defmutation]]
    [goog.crypt.base64 :refer [encodeByteArray]]
    [untangled.ui.elements :as e]
    [cognitect.transit :as ct]
    [goog.events :as events]
    [om.transit :as t]
    [untangled.client.impl.network :as net]
    [clojure.string :as str]
    [untangled.icons :as i]
    [untangled.ui.file-upload :refer [FileUpload file-upload-input file-upload-networking]]
    [untangled.client.logging :as log])
  (:refer-clojure :exclude [send])
  (:import [goog.net XhrIo EventType]))

(defn field-with-label
  "A non-library helper function, written by you to help lay out your form."
  [comp form name label & params]
  (dom/div #js {:className (str "form-group" (if (f/invalid? form name) " has-error" ""))}
    (dom/label #js {:className "col-sm-2" :htmlFor name} label)
    (dom/div #js {:className "col-sm-10"} (apply f/form-field comp form name params))))

(defui ^:once KitchenSink
  static uc/InitialAppState
  (initial-state [this params] (f/build-form this {:db/id 1 :short-story (uc/get-initial-state FileUpload {:id :story})}))
  static f/IForm
  (form-spec [this] [(f/id-field :db/id)
                     (f/text-input :text)
                     (f/integer-input :number)
                     (f/dropdown-input :mood [(f/option :happy "Happy") (f/option :sad "Sad")])
                     (f/checkbox-input :done?)
                     (f/radio-input :rating #{1 2 3 4 5})
                     (f/textarea-input :essay)
                     (file-upload-input :short-story)])
  static om/IQuery
  (query [this] [f/form-root-key f/form-key :db/id :text :number :mood :done? :rating :essay
                 {:short-story (om/get-query FileUpload)}])
  static om/Ident
  (ident [this props] [:sink/by-id (:db/id props)])
  Object
  (render [this]
    (let [props      (om/props this)
          not-valid? (not (f/would-be-valid? props))]
      (dom/div #js {:className "form-horizontal"}
        (field-with-label this props :text "Text:")
        (field-with-label this props :number "Number:")
        (field-with-label this props :mood "Mood:")
        (field-with-label this props :done? "Done:")
        (field-with-label this props :essay "Essay:" :rows 10 :maxLength 100)
        (dom/div #js {:className "form-group"}
          (dom/label #js {:className "col-sm-2" :htmlFor :rating} "Rating:")
          (dom/div #js {:className "col-sm-10"}
            (f/form-field this props :rating :choice 1 :label 1)
            (f/form-field this props :rating :choice 2 :label 2)
            (f/form-field this props :rating :choice 3 :label 3)
            (f/form-field this props :rating :choice 4 :label 4)
            (f/form-field this props :rating :choice 5 :label 5)))
        (field-with-label this props :short-story "Story (PDF):" :accept "application/pdf" :multiple? true)
        (e/ui-button {:disabled not-valid?
                      :onClick  #(f/commit-to-entity! this :remote true)} "Submit")))))

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

  ## File Upload

  There are a few steps for setting up a working file upload control:

  1. Install file upload server support in your server's Ring stack
  2. Run the server
  3. Add file-upload networking as an extra remote in Untangled Client (requires v0.8.1+, and Om alpha48+)
  4. Load the page through your server (not figwheel).

  ### Customizing the Ring Stack

  If you're using the modular server support for Untangled, then you can build a stack that contains at least
  the following middleware: transit, API hander, file upload, and wrap-multipart-params. Other bits are also
  commonly useful. Here's a sample middleware component that has been tested to work:

  TODO: Show how to inject this into the normal API handler so you can access the files on form submission...

  TODO: Finish upload handler (needs metadata and storage plugin, like image upload...probably just use that)

  TODO: For now, just look at upload-server namespace in dev source directory.

  ```
  (defrecord CustomMiddleware [middleware api-handler]
    component/Lifecycle
    (stop [this] (dissoc this :middleware))
    (start [this]
      (assoc this :middleware
                  (-> not-found
                    (MIDDLEWARE api-handler) ; Normal API handler
                    wrap-file-upload ; REMOTE HANDLER (needs transit for response)
                    middleware/wrap-transit-params
                    middleware/wrap-transit-response
                    (wrap-resource \"public\")
                    wrap-content-type
                    wrap-not-modified
                    wrap-params
                    wrap-multipart-params ; TURN UPLOADS INTO DISK FILES
                    wrap-gzip))))

  ### Adding UC File Upload remote

  The client-side setup is very simple, just add a `:networking` parameter to your client that has a map
  containing the normal remote and a file upload remote:

  ```
  (new-untangled-client
    :networking {:remote      (net/make-untangled-network \"/api\" :global-error-callback identity)
                 :file-upload (untangled.ui.file-upload/file-upload-networking)})
  ```

  "
  (dc/mkdn-pprint-source KitchenSink))

(defcard form-changes
  (untangled-app CommitRoot
    :networking {:remote      (net/make-untangled-network "/api" :global-error-callback identity)
                 :file-upload (file-upload-networking)})
  {}
  {:inspect-data false})

