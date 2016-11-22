(ns untangled.components.ui.component.image-library
  (:require [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]
            [untangled.i18n :refer-macros [tr trf]]
            [goog.object :as gobj]
            [clojure.string :as str]
            [untangled.client.core :as uc]
            [untangled.client.data-fetch :as df]
            [untangled.client.mutations :as m])
  (:import (goog.events)))

(defn debounce [timeout f]
  (let [id (atom nil)]
    (fn [& args]
      (if (not (nil? @id))
        (js/clearTimeout @id))
      (reset! id
        (js/setTimeout
          (partial apply f args)
          timeout)))))

(defn get-img-sizes [file cb]
  (let [create-object-url #(.createObjectURL (or js/window.URL js/window.webkitURL) %)
        img (new js/Image)]
    (.addEventListener img "load"
      #(this-as this
         (cb (.-width this) (.-height this))))
    (gobj/set img "src" (create-object-url file))))

(defn read-file [fileEvt callback]
  (let [files (.. fileEvt -target -files)]
    (doseq [file (array-seq files)]
      (let [read-method #(.readAsBinaryString %1 %2)
            reader (new js/FileReader)]
        (.addEventListener reader "load"
          (comp (fn [data]
                  (get-img-sizes file
                    (fn [width height]
                      (callback (.-name file) (.-size file)
                        [width height] data))))
                #(js/window.btoa %)
                #(.. % -target -result)))
        (read-method reader file)))))

(defn store-file [image-library-component file-name file-size file-dimensions data]
  (om/transact! image-library-component
    `[(untangled.component.image-library/store
        ~{:db/id (om/tempid) :content/data data :image/name file-name
          :image/size file-size :image/dimensions file-dimensions})
      (untangled.component.image-library/refresh
        ~{:picker (:id (om/props image-library-component))})]))

(defn path [base target]
  (if (str/ends-with? base "/")
    (str base target)
    (str base "/" target)))

(declare ImageMedia update-current-page ImageLibrary)

(defn load-images [picker state]
  (swap! state assoc :untangled.component.image-picker/picker-loading (or picker :singleton))
  (df/load-data-action state [{:images (om/get-query ImageMedia)}]
    :post-mutation 'untangled.component.image-picker/images-loaded))

(defmethod m/mutate
  'untangled.component.image-picker/images-loaded
  [{:keys [state]} _ _]
  {:action (fn []
             (swap! state
               (fn [{:keys [images untangled.component.image-picker/picker-loading] :as s}]
                 (-> s
                   (dissoc :images :untangled.component.image-picker/picker-loading)
                   (update-in [:image-pickers/by-id picker-loading :images] (comp vec set concat) images)
                   (update-current-page picker-loading)))))})

(defn update-current-page
  "Returns a new application state-db with the indicated image-library updated to have its current page filled."
  [state-db picker-id & {:keys [show-more]}]
  (let [{:keys [images search-string page-size current-page]} (get-in state-db [:image-pickers/by-id picker-id])
        xf (comp
             (map #(get-in state-db %))
             (filter (fn [{:keys [image/name] :as img}]
                       (str/includes? (str/lower-case name) (str/lower-case search-string))))
             (map (fn [img] (with-meta [:image/by-id (:db/id img)] img))))
        current-page-normalized (into [] xf images)]
    (-> state-db
        (assoc-in [:image-pickers/by-id picker-id :current-page]
          (->> current-page-normalized
            (sort-by meta
                     (fn [{:as l recent-l :ui.image/recent} {:as r recent-r :ui.image/recent}]
                       (let [compare-img (fn [l r]
                                           (compare
                                             (str/lower-case (:image/name l))
                                             (str/lower-case (:image/name r))))]
                         (cond
                           (and recent-l recent-r) #_>> (compare-img l r)
                           (and recent-l (not recent-r)) #_>> -1
                           (and (not recent-l) recent-r) #_>> 1
                           true #_>> (compare-img l r)))))
            (take (cond-> page-size
                    show-more (+ (count current-page))))
            vec)))))

(defn search [picker-id pattern state-db]
  (-> state-db
      (assoc-in [:image-pickers/by-id picker-id :search-string] pattern)
      (update-current-page picker-id)))

(defmethod m/mutate 'untangled.component.image-library/search
  [{:as env :keys [state]} _ {:keys [picker pattern]}]
  {:action (fn [] (swap! state (partial search picker pattern)))})

(defmethod m/mutate 'untangled.component.image-library/store
  [{:keys [state ref ast]} _ {:keys [db/id] :as params}]
  {:action (fn []
             (swap! state
               (fn [s]
                 (-> s
                   (assoc-in [:image/by-id id]
                     (assoc (select-keys params
                              [:db/id :image/name :image/extension :image/size :image/dimensions])
                       :ui.image/recent true))
                   (update-in (conj ref :images) conj [:image/by-id id])))))
   :remote true})

(defmethod m/mutate 'untangled.component.image-library/refresh
  [{:keys [state]} _ {:keys [picker] :as params}]
  {:action (fn [] (swap! state update-current-page picker))})

(defmethod m/mutate 'untangled.component.image-library/show-more
  [{:keys [state]} _ {:keys [picker]}]
  {:action (fn [] (swap! state update-current-page picker :show-more true))})

(defmethod m/mutate 'untangled.component.image-library/select
  [{:keys [state ref]} _ {:keys [id]}]
  {:action (fn []
             (swap! state
               (fn [s]
                 (let [selected-image (get-in s (conj ref :selected))]
                   (-> s
                     (cond-> selected-image
                       (assoc-in (conj selected-image :ui/selected) false))
                     (update-in [:image/by-id id :ui/selected] not)
                     (assoc-in (conj ref :selected) [:image/by-id id]))))))})

(defui ^:once ImageMedia
  static om/IQuery
  (query [this] [:db/id :image/name :ui.dev/image-path :ui.image/recent :ui/selected])
  static om/Ident
  (ident [this {:keys [db/id]}] [:image/by-id id])
  Object
  (render [this]
    (let [{:keys [db/id image/name ui.dev/image-path ui.image/recent ui/selected]} (om/props this)
          {:keys [image-cdn onSelect] :or {image-cdn "/assets"}} (om/get-computed this)]
      (dom/div #js {:className "u-column--6 u-column--3@md u-column--2@xl"}
        (dom/div #js {:className (str "c-card c-card--inset is-selectable" (when selected " is-selected"))}
          (if (om/tempid? id)
            (dom/span nil (tr "Uploading..."))
            (dom/a #js {:className "c-card__thumb"
                        :onClick (onSelect {:id id})}
              (dom/img #js {:src (or image-path (path image-cdn id))
                            :alt name})))
          (dom/div #js {:className "c-card__meta"}
            (dom/strong nil name))
          )))))

(def ui-image-media (om/factory ImageMedia {:keyfn :db/id}))

(defn make-image-library
  "TODO: Describe how to build this."
  [{:keys [id page-size]
    :or   {id :singleton, page-size 25}}]
  {:id            id
   :page-size     page-size
   :search-string ""
   :current-page  []
   :images        []})

(defui ^:once ImageLibrary
  static om/IQuery
  (query [this] [:id
                 :page-size
                 :search-string
                 {:selected (om/get-query ImageMedia)}
                 {:images (om/get-query ImageMedia)}
                 {:current-page (om/get-query ImageMedia)}])
  static om/Ident
  (ident [_ {:keys [id] :or {id :singleton}}] [:image-pickers/by-id id])
  Object
  (search [this id]
    #(om/transact! this
       `[(untangled.component.image-library/search
           ~{:picker id :pattern (-> % .-target .-value)})]))
  (select [this {:keys [id path]}]
    #(om/transact! this
       `[(untangled.component.image-library/select
           ~{:id id :path path})]))
  (on-upload [this]
    (fn [input] (read-file input (partial store-file this))))
  (show-more [this]
    (om/transact! this `[(untangled.component.image-library/show-more ~{:picker (:id (om/props this))})]))

  (render-toolbar [this]
    (let [{:keys [id search-string]} (om/props this)]
      (dom/div #js {:className "o-modal__toolbar"}
        (dom/div #js {:className "u-start"}
         (dom/div #js {:className "o-input"}
           (dom/input #js {:className   "o-input__box"
                           :onChange    (.search this id)
                           :value       (or search-string "")
                           :placeholder (tr "Search your images")})
           ((.getIconFn this) :search)))
        (dom/div #js {:className "u-end"}))))
  (componentDidMount [this newprops]
    (let [image-list (om/get-state this :image-list)]
      (goog.events.listen image-list goog.events.EventType.SCROLL
        (debounce 150 (fn [_]
                        (when (<= (.-scrollHeight image-list)
                                  (+ (.-offsetHeight image-list) (.-scrollTop image-list)))
                          (.show-more this)))))))
  (getIconFn [this]
    (om/get-computed this :icon-fn))
  (render-images [this]
    (let [{:keys [id current-page images]} (om/props this)
          {:keys [image-cdn]} (om/get-computed this)
          {:keys [image-list]} (om/get-state this)]
      (dom/div #js {:className "o-modal__content"
                     :ref #(when % (om/update-state! this assoc :image-list (js/ReactDOM.findDOMNode %)))}
        (dom/div #js {:className "u-row"}
         (if (empty? current-page) (dom/span nil "No Images found!")
             (map (fn [img]
                    (ui-image-media
                      (om/computed img {:image-cdn image-cdn :onSelect #(.select this %)})))
               current-page))
         (dom/div #js {:className "u-center"}
           (when-not (= (count current-page) (count images))
             (dom/button #js {:className "c-button"
                              :onClick #(.show-more this)}
               "Show more")))))))
  (render-page-control [this]
    (let [{:keys [id current-page selected]} (om/props this)
          {:keys [image-cdn onClose onSelect]} (om/get-computed this)]
      (dom/div #js {:className "o-modal__footer"}
        (dom/input #js {:type     "file"
                        :className "u-hide"
                        :multiple true
                        :accept   "image/*"
                        :ref      #(when % (om/update-state! this assoc :file-input (js/ReactDOM.findDOMNode %)))
                        :onChange (.on-upload this)})
        (dom/div #js {:className "u-start"}
          (dom/button #js {:className "c-button"
                          :onClick #(.click (om/get-state this :file-input))}
           ((.getIconFn this) :cloud_upload)
           (dom/span nil (tr "Upload image"))))
        (dom/div #js {:className "u-end"}
          (dom/button #js {:className "c-button c-button--text"
                           :onClick onClose}
            (tr "Cancel"))
          (dom/button #js {:className "c-button c-button--secondary"
                           :disabled (when-not selected true)
                           :onClick #(onSelect {:id (:db/id selected)
                                                :path (path image-cdn (:db/id selected))})}
            (tr "Insert image"))))))

  (render-header [this]
    (let [{:keys [onClose]} (om/get-computed this)]
      (dom/div #js {:className "o-modal__title"}
        ((.getIconFn this) :arrow_back :className ["u-hide@md-up"] :title (tr "Back") :onClick onClose)
        (dom/h1 #js {:className "o-modal__heading"}
          (tr "Choose an image"))
        ((.getIconFn this) :close :className ["u-hide@sm"] :title (tr "Close") :onClick onClose))))

  (render-backdrop [this]
    (let [{:keys [onClose]} (om/get-computed this)]
     (dom/div #js {:className "c-backdrop is-active" :onClick onClose})))

  ;; You will want to add a button to the devcard that toggles both "is-active" classnames to make devcards usable again
  (render [this]
    (dom/div nil
     (dom/div #js {:className "o-modal is-active"}
       (dom/div #js {:className "o-modal__card o-modal__card--wide"}
         (.render-header this)
         (.render-toolbar this)
         (.render-images this)
         (.render-page-control this)))
     (.render-backdrop this))))

(def ui-image-library
  "Render an image library. This component supports the following computed parameters:

   onClose   : A callback when a user clicks on cancel or the top right X.
   onSelect  : A callback that is called with the image ID when the user selects an image.
   image-cdn : The base path for loading the images. Defaults to /assets (serve locally instead of through CDN)

   Intial state: This component does NOT implement `initial-state`. Instead, use `make-image-library` to build
   initial state."
  (om/factory ImageLibrary))
