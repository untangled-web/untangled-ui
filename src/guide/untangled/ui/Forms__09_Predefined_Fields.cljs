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
    [untangled.client.logging :as log])
  (:refer-clojure :exclude [send])
  (:import [goog.net XhrIo EventType]))

(declare FileUpload File)

(defn file-upload-ident [id] [:file-upload/by-id id])
(defn file-ident [id] [:file-upload-file/by-id id])

(defn my-file-render [{:keys [file/name file/progress file/status onRetry onCancel]}]
  (dom/li nil name
    (when (= status :transfer-in-progress)
      (dom/progress nil progress))
    (e/ui-icon {:glyph :cancel :onClick onCancel})))

(defn file-upload-input
  [name & {:keys [content-type className]}]
  (assoc (f/subform-element name FileUpload :one)
    :input/content-type content-type
    :input/css-class className
    :input/type ::f/file-upload))

(defui File
  static f/IForm
  (form-spec [this] [(f/id-field :file/id)
                     (f/text-input :file/name)
                     (f/radio-input :file/status #{:done :transfer-in-progress :failed})])
  static om/IQuery
  (query [this] [f/form-key :file/id :file/name :file/size :file/progress :file/status])
  static om/Ident
  (ident [this props] (file-ident (:file/id props)))
  Object
  (render [this]
    (let [file-render (om/get-computed this :fileRender)
          onRetry     (fn [] (js/console.log "User asked to retry upload")) ; TODO: Unhappy path
          onCancel    (om/get-computed this :onCancel)
          {:keys [file/id file/name file/size file/progress file/status]} (om/props this)]
      (dom/li #js {:key (str "file-" id)} (str name "(" size " bytes) ")
        (case status
          :failed (dom/span nil "FAILED!")
          :done (dom/span nil "Ready.")
          (dom/span nil "Sending..." progress "%"))
        (e/ui-icon {:onClick #(onCancel id)
                    :glyph   :cancel})))))

(def ui-file (om/factory File {:keyfn :file/id}))

(defmutation add-file
  [{:keys [file-upload file-id name size js-file]}]
  (action [{:keys [state target]}]
    (swap! state (fn [st] (-> st
                            (uc/integrate-ident (file-ident file-id)
                              :append (conj (file-upload-ident file-upload) :file-upload/files))
                            (assoc-in (file-ident file-id) (f/build-form File
                                                             {:file/id       file-id
                                                              :file/name     (.-name js-file)
                                                              :file/size     (.-size js-file)
                                                              :file/progress 0
                                                              :file/status   :transfer-in-progress}))))))
  (file-upload [env] true))

(declare cancel-file-upload)

(defui FileUpload
  static f/IForm
  (form-spec [this] [(f/id-field :file-upload/id)
                     (f/subform-element :file-upload/files File :many)])
  static uc/InitialAppState
  (initial-state [cls {:keys [id]}] (f/build-form FileUpload {:file-upload/id id :file-upload/files []}))
  static om/IQuery
  (query [this] [f/form-key f/form-root-key :file-upload/id
                 {:file-upload/files (om/get-query File)}])
  static om/Ident
  (ident [this props] (file-upload-ident (:file-upload/id props)))
  Object
  (render [this]
    (let [{:keys [file-upload/id file-upload/files]} (om/props this)
          file-upload-id id
          control-id     (str "file-upload-" id)
          {:keys [fileSelect]} (om/get-computed this)
          onCancel       (fn [id] (om/transact! this `[(cancel-file-upload {:upload-id ~file-upload-id
                                                                            :file-id   ~id})
                                                       ~f/form-root-key]))
          onChange       (fn [evt]
                           (let [js-file-list (.. evt -target -files)]
                             (om/transact! this
                               (conj (mapv (fn [file-idx]
                                             (let [fid     (om/tempid)
                                                   js-file (.item js-file-list file-idx)
                                                   tx-call `(add-file ~{:file-upload file-upload-id :file-id fid
                                                                        :js-file     js-file})]
                                               tx-call)) (range (.-length js-file-list)))
                                 f/form-root-key))))]
      (dom/div nil
        (when (seq files)
          (dom/ul nil (mapv #(ui-file (om/computed % {:onCancel onCancel})) files)))
        (dom/label #js {:htmlFor control-id}
          (dom/span #js {:className "c-button c-button--raised"}
            (e/ui-icon {:glyph :add})
            "Add Files"
            (dom/input #js {:onChange  (fn [evt]
                                         (when onChange
                                           (onChange evt)))
                            :id        control-id
                            :className "u-hide"
                            :multiple  "multiple"
                            :value     ""
                            :type      "file"})))))))

(def ui-file-upload (om/factory FileUpload))

(defmethod f/form-field* ::f/file-upload [component form field & params]
  (let [{:keys [id name] :as upload-data} (f/current-value form field)
        {:keys [uri]} params]
    (ui-file-upload upload-data)))

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
    (js/console.log :RERENDER-WHOLE-FORM)
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
            (f/form-field this props :rating :choice 1 :label 1)
            (f/form-field this props :rating :choice 2 :label 2)
            (f/form-field this props :rating :choice 3 :label 3)
            (f/form-field this props :rating :choice 4 :label 4)
            (f/form-field this props :rating :choice 5 :label 5)))
        (field-with-label this props :short-story "Story (PDF):" :content-type "text/pdf")))))

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

(defn progress% [progress-evt] (int (* 100 (/ (or (.-loaded progress-evt) 0) (or (.-total progress-evt) 1)))))

(defprotocol Abort
  (abort-send [this id] "Abort the send with the given ID."))

(defrecord FileUploadNetwork [app active-transfers transfers-to-skip]
  net/ProgressiveTransfer
  (updating-send [this edn ok error update]
    (try (let [state (om/app-state (:reconciler @app))]
           (doseq [call edn]
             (let [params  (-> call second)
                   js-file (:js-file params)
                   id      (:file-id params)]
               (if (@transfers-to-skip id)
                 (do
                   (swap! transfers-to-skip disj id)
                   (ok {}))
                 (let [xhrio        (XhrIo.)
                       done-fn      (fn [edn]
                                      (let [ident    (file-ident id)
                                            file-obj (get-in @state ident)
                                            file     (assoc file-obj :file/progress 100 :file/status :done)]
                                        (ok {ident file} {ident (om/get-query File)})))
                       progress-fn  (fn [evt]
                                      (let [ident    (file-ident id)
                                            file-obj (get-in @state ident)
                                            file     (assoc file-obj :file/progress (progress% evt))]
                                        (update {ident file} {ident (om/get-query File)})))
                       error-fn     (fn [evt]
                                      (let [ident    (file-ident id)
                                            file-obj (get-in @state ident)
                                            file     (assoc file-obj :file/progress 0 :file/status :failed)]
                                        (update {ident file} {ident (om/get-query File)}))
                                      (error evt))
                       with-dispose (fn [f] (fn [arg] (try
                                                        (f arg)
                                                        (finally
                                                          (swap! active-transfers dissoc id)
                                                          (.dispose xhrio)))))
                       form         (js/FormData.)]
                   (swap! active-transfers assoc id xhrio)
                   (.append form "file" js-file)
                   (.append form "id" id)
                   (.setProgressEventsEnabled xhrio true)
                   (events/listen xhrio (.-SUCCESS EventType) (with-dispose #(done-fn (ct/read (t/reader {}) (.getResponseText xhrio)))))
                   (events/listen xhrio (.-UPLOAD_PROGRESS EventType) #(progress-fn %))
                   (events/listen xhrio (.-ERROR EventType) (with-dispose #(error-fn %)))
                   (.send xhrio "/file-upload" "POST" form #js {}))))))
         (catch js/Object e (log/error "NETWORKING THREW " e)
                            (error e))))
  Abort
  (abort-send [this file-id]
    (if-let [net (get @active-transfers file-id)]
      (.abort net)
      (swap! transfers-to-skip conj file-id)))
  net/UntangledNetwork
  (send [this edn ok-callback error-callback]
    (net/updating-send this edn ok-callback error-callback identity))
  (start [this complete-app] (reset! app complete-app)))

(defonce file-upload-networking (map->FileUploadNetwork {:active-transfers  (atom {})
                                                         :transfers-to-skip (atom #{})
                                                         :app               (atom nil)}))

(defn remove-ident
  "Remove the given ident i from a vector of idents v."
  [i v]
  (into [] (filter #(not= i %) v)))

(defmutation cancel-file-upload
  "Om mutation: Cancels the current file upload"
  [{:keys [upload-id file-id]}]
  (action [{:keys [state]}]
    (let [files-path (conj (file-upload-ident upload-id) :file-upload/files)]
      (swap! state (fn [st] (-> st
                              (update :file-upload-file/by-id dissoc file-id)
                              (update-in files-path (partial remove-ident (file-ident file-id)))))))
    (abort-send file-upload-networking file-id)))

(defcard form-changes
  (untangled-app CommitRoot
    :networking {:remote      (net/make-untangled-network "/api" :global-error-callback identity)
                 :file-upload file-upload-networking})
  {}
  {:inspect-data false})

