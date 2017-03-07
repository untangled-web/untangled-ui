(ns untangled.ui.Forms--15-File-Upload
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


(defui ^:once FileUploadDemo
  static uc/InitialAppState
  (initial-state [this params]
    (f/build-form this {:db/id 1 :short-story (uc/get-initial-state FileUpload {:id :story})}))
  static f/IForm
  (form-spec [this] [(f/id-field :db/id)
                     (file-upload-input :short-story)])
  static om/IQuery
  (query [this] [f/form-root-key f/form-key :db/id :text {:short-story (om/get-query FileUpload)}])
  static om/Ident
  (ident [this props] [:example/by-id (:db/id props)])
  Object
  (render [this]
    (let [props      (om/props this)
          not-valid? (not (f/would-be-valid? props))]
      (dom/div #js {:className "form-horizontal"}
        (field-with-label this props :short-story "Story (PDF):" :accept "application/pdf" :multiple? true)
        (e/ui-button {:disabled not-valid?
                      :onClick  #(f/commit-to-entity! this :remote true)} "Submit")))))

(def ui-example (om/factory FileUploadDemo {:keyfn :db/id}))

(defui ^:once CommitRoot
  static uc/InitialAppState
  (initial-state [this _] {:sink (uc/initial-state FileUploadDemo {:db/id 1})})
  static om/IQuery
  (query [this] [:ui/react-key
                 {:demo (om/get-query FileUploadDemo)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key demo]} (om/props this)]
      (dom/div #js {:key react-key}
        (ui-example demo)))))

(defcard-doc
  "# Forms – File Upload

  There are a few steps for setting up a working file upload control:

  1. Install file upload server support in your server's Ring stack and add logic for dealing with
  forms submissions that contain uploaded files.
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
  (dc/mkdn-pprint-source FileUploadDemo))

(defcard form-file-upload
  (untangled-app CommitRoot
    :networking {:remote      (net/make-untangled-network "/api" :global-error-callback identity)
                 :file-upload (file-upload-networking)})
  {}
  {:inspect-data false})
