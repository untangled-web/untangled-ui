(ns untangled.ui.elements
  (:require [clojure.string :as string]
            [om.next :as om :refer [defui]]
            [om.dom :as dom]
            [untangled.client.core :as uc]
            [untangled.ui.menu :as menu]
            [untangled.icons :refer [icon]]
            [untangled.events]
            [clojure.string :as str]
            [untangled.client.mutations :as m]
            [untangled.client.logging :as log]))

#?(:clj (def clj->js identity))

;; Helpers

(defn ui-fader
  "Wrap children in a span where the :visible attribute
  is a boolean indicating the visibility of the children.

  Props is a clj(s) map of normal React attributes.

  `:inline?` - A boolean (default false). When true, emits a `span`, else `div`.

  You can get this same effect using the `u-fade-in` and `u-fade-out` CSS classes. See the CSS Guide.

  When the resulting span becomes visible it fades in, and when it becomes hidden it fades out."
  [{:keys [inline? visible] :as props} & children]
  (let [className (or (:className props) "")
        classes   (str className " u-fade-out" (when visible " u-fade-in"))
        wrapper   (if inline? dom/span dom/div)
        attrs     (-> props
                    (dissoc :visible)
                    (assoc :className classes)
                    clj->js)]
    (apply wrapper attrs children)))

(defn react-instance?
  "Returns the react-instance (which is logically true) iff the given react instance is an instance of the given react class.
  Otherwise returns nil."
  [react-class react-instance]
  {:pre [react-class react-instance]}
  (when (= (.-type react-instance) react-class)
    react-instance))

(defn first-node
  "Finds (and returns) the first child that is an instance of the given React class (or nil if not found)."
  [react-class sequence-of-react-instances]
  (some #(react-instance? react-class %) sequence-of-react-instances))

#?(:cljs
   (defn update-frame-content [this child]
     (let [frame-component (om/get-state this :frame-component)]
       (when frame-component
         (js/ReactDOM.render child frame-component)))))

#?(:cljs
   (defui IFrame
     Object
     (initLocalState [this] {:border 0})
     (componentDidMount [this]
       (let [frame-body (.-body (.-contentDocument (js/ReactDOM.findDOMNode this)))
             child      (:child (om/props this))
             e1         (.createElement js/document "div")]
         (.appendChild frame-body e1)
         (om/update-state! this assoc :frame-component e1)
         (update-frame-content this child)))
     (componentDidUpdate [this pprops pstate]
       (let [child (:child (om/props this))]
         (update-frame-content this child)))
     (render [this]
       (dom/iframe (-> (om/props this) (dissoc :child) clj->js)))))

#?(:cljs
   (defn ui-iframe [props child]
     ((om/factory IFrame) (assoc props :child child))))


;; Elements

(defn ui-avatar
  "Render an icon or a short string within an avatar. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  `:color` - :none (default), :primary, :accent
  `:size` - :regular (default), :medium, :large, :xlarge:, :huge
  `:kind` - :none (default), :bordered
  "
  [{:keys [className color size kind] :as props :or {className ""}} child]
  (let [legal-colors #{:primary :accent}
        legal-sizes  #{:medium :large :xlarge :huge}
        legal-kinds  #{:bordered}
        user-classes (get props :className "")
        classes      (cond-> user-classes
                       :always (str " c-avatar")
                       (contains? legal-colors color) (str " c-avatar--" (name color))
                       (contains? legal-sizes size) (str " c-avatar--" (name size))
                       (contains? legal-kinds kind) (str " c-avatar--" (name kind)))
        props        (-> props
                       (assoc :className classes)
                       (dissoc :color :size :kind))]
    (dom/span (clj->js props) child)))


(defn ui-badge
  "Render the given children within a badge. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  `(ui-badge {} \"7\")`
  "
  [{:keys [className] :as props :or {className ""}} & children]
  (let [props (update props :className str " c-badge")]
    (apply dom/span (clj->js props) children)))


(defn ui-flat-button
  "Render a button that looks more like a link that a button (it is just the children), but renders the hover shape
  of a more traditional button when the mouse is over it.

  `:color` - :neutral (default), :primary, :accent
  `:shape` - :rect (default), :round, or :wide.  The shape when the mouse is over the button.
  `:size` - :normal (default), :small.  Small buttons are a bit more condensed.
  `:active` - true or false (default).  Causes the button to look highlighted.

  Any normal HTML/React properties are allowed, including additional CSS classes.
  "
  [{:keys [className size color shape disabled active] :or {className ""} :as attrs} & children]
  (let [legal-colors   #{:primary :accent}
        legal-shapes   #{:round :wide}
        legal-sizes    #{:small}
        button-label   (fn [text]
                         (dom/span #js {:className "c-button__content"} text))
        fixed-children (map (fn [c]
                              (if (string? c)
                                (button-label c)
                                c)) children)
        classes        (cond-> (str className " c-button")
                         active (str " is-active")
                         (contains? legal-colors color) (str " c-button--" (name color))
                         (contains? legal-shapes shape) (str " c-button--" (name shape))
                         (contains? legal-sizes size) (str " c-button--" (name size)))
        attrs          (cond-> (assoc attrs :className classes :type "button")
                         disabled (assoc :aria-disabled "true")
                         :always (dissoc :active :color :shape :size))]
    (apply dom/button (clj->js attrs) fixed-children)))

(defn ui-button
  "Render a raised button. Props is a normal clj(s) map with React/HTML attributes plus:

  `:color` - :neutral (default), :primary, :accent
  `:shape` - :rect (default), :round, or :wide
  `:size` - :normal (default), :small
  `:active` - true or false (default), Causes the button to look highlighted.

  Any other React properties are allowed, including additional CSS classes.
  "
  [{:keys [className size color shape disabled active] :or {className ""} :as props} & children]
  (apply ui-flat-button (update props :className str " c-button--raised") children))

(defn ui-circular-button
  "Render a raised circle button of fixed size (configurable in CSS variables, see CSS guide).
  Extra content will overflow out of the cirle. Props is a normal clj(s) map with React/HTML attributes plus:

  `:color` - :neutral (default), :primary, :accent
  `:size` - :normal (default), :small
  `:active` - true or false (default), Causes the button to look highlighted.

  Any other React properties are allowed, including additional CSS classes.

  Note that you will typically only be able to fit something like an icon in this kind of button, which is a perfect
  circle.
  "
  [{:keys [className size color disabled active] :or {className ""} :as props} & children]
  (apply ui-flat-button (update props :className str " c-button--circular") children))


(defn ui-card
  "Render a card component

   `:title` - \"Some Title\"
   `:color` - :primary | :accent
   `:kind` - :bordered | :transparent | :square
   `:size` - :expand | :wide
   `:image` - \"path/to/image/file.jpeg\"
   `:image-position` - :cover | :top-left | :top-right | :bottom-left | :bottom-right
   `:actions` - (ui-button \"Some Action\")
   `:media` - URL
   `:media-type` - :image | :video (TODO Youtube?)

   all paramters optional
    "
  [{:keys [kind title color size image image-position actions media-type media menu
           className] :as attrs} & children]
  {:pre [(or (nil? kind) (keyword? kind))
         (or (nil? title) (string? title))]}
  (let [legal-kinds  #{:bordered :transparent :square}
        legal-colors #{:primary :accent}
        legal-sizes  #{:expand :wide}
        id-class     (gensym "c-card--")
        className    (or className "")
        classes      (cond-> (str "c-card " (when image id-class) className)
                       (contains? legal-kinds kind) (str " c-card--" (name kind))
                       (contains? legal-colors color) (str " c-card--" (name color))
                       (contains? legal-sizes size) (str " c-card--" (name size)))
        attributes   (-> attrs
                       (merge {:className classes})
                       (dissoc :title :kind :color :size :actions :image :image-position :media-type :media :menu)
                       clj->js)
        image-src    (str "url(" image ")")
        background-image (->
                           (when image (merge {:backgroundImage image-src}))
                             clj->js)]
    (dom/div attributes
      (when media
        (dom/div #js {:className (str "c-card__media")}
          (when (= media-type :image)
            (dom/img #js {:className "c-card__media-content" :src media}))))
      (when title
        (dom/div #js {:className (str "c-card__title"
                                   (when image " c-card__title--image")
                                   (when image-position (str " c-card__title--image-" (name image-position))))}
          (dom/h1 #js {:className "c-card__title-text"} title)))
      (when children
        (apply dom/div #js {:className "c-card__supporting-text"} children))
      (when actions
        (dom/div #js {:className "c-card__actions"} actions))
      (when menu
        (dom/div #js {:className "c-card__menu"}
          (menu/ui-menu menu :style :icon)
          ))
      (when image
        (dom/style nil
         (str "." id-class " .c-card__title { background-image: url(" image "); }"))))))


(let [render-input (fn [{:keys [type id] :as props}]
                     (dom/span nil
                       (dom/input (clj->js props))
                       (dom/label #js {:htmlFor id} \u00A0)))]

  (defn ui-radio
    "Render a HTML radio (without the label). Props is a normal clj(s) map with React/HTML attributes plus:

    `:className` - additional class stylings to apply to the top level of the checkbox
    `:id` - Required. A unique ID. Will not render correctly without one.
    "
    [{:keys [className id] :as props}]
    (let [classes (str className " c-radio")
          attrs   (assoc props :type "radio"
                               :className classes)]
      (render-input attrs)
      ))

  (defn ui-checkbox
    "Render a checkbox (not the label). Props is a normal clj(s) map with React/HTML attributes plus:

    `:className` - additional class stylings to apply to the top level of the checkbox
    `:id` string - Unique DOM ID. Required for correct rendering.
    `:checked` - true, false, or :partial
    "
    [{:keys [id state checked className label] :as props}]
    (let [classes (str className " c-checkbox" (when (= :partial checked) " is-indeterminate"))
          checked (boolean checked)]
      (if id
        (dom/label nil
                  (dom/input #js {:id        id
                                  :type      "checkbox"
                                  :checked   checked
                                  :className classes})
                  (dom/label #js {:htmlFor id} \u00A0)
                  label)
        (dom/label nil
          (dom/input #js {:type    "checkbox"
                         :checked checked})
                   label)))))

(defn ui-switch
    "Render a checkbox (not the label). Props is a normal clj(s) map with React/HTML attributes plus:

    `:className` - additional class stylings to apply to the top level of the checkbox
    `:id` string - Unique DOM ID. Required for correct rendering.
    `:checked` - true, false, or :partial
    "
    [{:keys [id state checked className disabled] :as props}]
    (assert id "DOM ID is required on checkbox")
    (let [classes (str className " c-switch__input")
          type    "checkbox"
          checked (boolean checked)
          attrs   (assoc props :type "checkbox" :checked checked :className classes)]
      (dom/div #js {:className (str "c-switch" (when disabled " is-disabled"))}
        (dom/input (clj->js attrs))
        (dom/label #js {:className "c-switch__paddle"
                       :htmlFor id
                       :aria-hidden false}))))

(defn ui-icon
  "Render an icon. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  `:color` :none (default), :active, :passive
  `:size` :regular (default), :small, :medium, :large, :xlarge, :huge
  `:glyph` - Instructs `ui-icon` to render an icon from the built-in set. See `untangled.icons/icon`.

  The child (optional) should be some kind of icon, for example the SVG generated by the `untangled.icons/icon` function.
  "
  ([{:keys [className color size glyph] :as props :or {className ""}}] (ui-icon props nil))
  ([{:keys [className color size glyph] :as props :or {className ""}} child]
   (let [legal-colors #{:active :passive}
         legal-sizes  #{:small :medium :large :xlarge :huge}
         user-classes (get props :className "")
         classes      (cond-> (str user-classes " c-icon")
                        (contains? legal-colors color) (str " is-" (name color))
                        (contains? legal-sizes size) (str " c-icon--" (name size)))
         props        (-> props
                        (assoc :className classes)
                        (dissoc :size :color :glyph))]
     (dom/span (clj->js props) (if glyph
                                 (icon glyph)
                                 child)))))

(defn ui-icon-button
  "Render a button with an icon inside. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  `:glyph` - Instructs `ui-icon` to render an icon from the built-in set. See `untangled.icons/icon`.
  `:label` - Applies a label to the icon button that describes the action it provides to the user.

  The child (optional) should be some kind of icon, for example the SVG generated by the `untangled.icons/icon` function.
  "
  ([{:keys [className glyph label] :as props :or {className ""}} & children]
   (let [user-classes (get props :className "")
         base-class   " c-button"
         classes      (str user-classes base-class " " base-class "--icon")
         props        (-> props
                        (assoc :className classes)
                        (assoc :type "button")
                        (assoc :title label)
                        (dissoc :label)
                        (dissoc :glyph))]
     (dom/button (clj->js props)
      ;; Read the label aloud to the user if defined but don't display it visually
      (if label (dom/span #js {:className "u-show@reader"} label))
      (if glyph (icon glyph)
                                 children)))))

(defn ui-icon-bar
  "Render an icon bar using a vector of icons (each a map of attributes).
   Can optionally render vertically and/or shifting.
   Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

   `:orientation` :vertical or :horizontal (default)
   `:shifting` true or false (default)

   TODO: Example, talk about children

   all parameters are optional
   "
  [{:keys [className orientation shifting] :as props :or {className ""}} & children]
  (let [user-classes    (get props :className "")
        top-level-class (cond-> (str user-classes " c-iconbar")
                          (= orientation :vertical) (str " c-iconbar--rail")
                          shifting (str " c-iconbar--shifting"))]
    (dom/div #js {}
      (apply dom/nav #js {:className top-level-class} children))))

(defn ui-icon-bar-item
  "Render an icon button for use inside an icon bar.

  `:glyph` - An icon glyph name to render that given icon.
  `:label` - A string to label that icon.
  `:active` true or false (default) - Usually used to show that your in that action's view."
  ([{:keys [className glyph label active] :as props :or {className "" label ""}}]
   (dom/button #js {:className (str "c-iconbar__item " (when active "is-active")) :type "button"}
     (ui-icon {:glyph glyph})
     (dom/span #js {:className "c-iconbar__label"}
       label))))


(defn ui-field
  "Render an input or textarea field. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  `:id` string - Unique DOM ID. Required for correct rendering.
  `:kind` :single-line (default), :multi-line, :full-width
  `:size` :regular (default), :dense, :large
  `:state` :valid (default) or :invalid
  `:label` string - A title for the input to describe it.
  `:helper` string - Text that helps instruct the user under the input.
  "
  [{:keys [id kind size state type label helper required action actionEvent] :or {size ""} :as attrs} placeholder]
  (assert id "DOM ID is required on checkbox")
  (let [legal-sizes  #{:dense :large}
        legal-states #{:invalid}
        legal-kinds  #{:multi-line :full-width}
        user-classes (get attrs :className "")
        user-type    (if type type "text")
        has          (fn [s] (contains? state s))
        classes      (cond-> (str user-classes " c-field__input ")
                       (contains? legal-states state) (str " is-" (name state)))
        attrs        (-> attrs
                       (assoc :className classes
                              :aria-label (name placeholder)
                              :aria-multiline (when (= kind :multi-line) true)
                              :aria-required (when required true)
                              :required (when required true)
                              :type user-type)
                       (dissoc :size :state :kind :label :helper :action :actionEvent))]
    (dom/span #js {:className (str "c-field "
                                (when kind (str " c-field--" (name kind)))
                                (when size (str " c-field--" (name size)))
                                (when action " has-action")
                                (when-not (str/blank? label) " has-label")
                                (when-not (str/blank? helper) " has-helper"))}
      (if (= kind :multi-line)
        (dom/textarea (clj->js attrs))
        (dom/input (clj->js attrs)))
      (when action
        (ui-icon-button {:glyph action :className "c-field__action" :onClick (when actionEvent actionEvent)}))
      (when label
        (dom/label #js {:className "c-field__label" :htmlFor id}
          label (when required (dom/span #js {:className "c-field__required"} " *"))))
      (when helper
        (dom/span #js {:className "c-field__helper"} helper)))))


(defn ui-label
  "Render the given children within a label. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  `:color` :none (default), :primary, :accent
  "
  [{:keys [className color] :as props :or {className ""}} & children]
  (let [legal-colors #{:primary :accent}
        classes      (cond-> className
                       :always (str " c-label")
                       (contains? legal-colors color) (str " c-label--" (name color)))
        props        (-> (dissoc props :color)
                       (assoc :className classes))]
    (apply dom/span (clj->js props) children)))


(defn ui-loader
  "Render an icon or a short string within an avatar. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  `:color` :none (default), :primary :accent"
  [{:keys [className color] :as props :or {className ""}}]
  (let [legal-colors #{:primary :accent}
        user-classes (get props :className "")
        classes      (cond-> (str user-classes " c-loader")
                       (contains? legal-colors color) (str " c-loader--" (name color)))
        props        (-> props
                       (assoc :className classes :aria-hidden false)
                       (dissoc :color))]
    (dom/div (clj->js props))))

(defn ui-message
  "Render the given children within a message. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  `:color` :none(default), :alert, :success, :warning, :informative
  "
  [{:keys [className color] :as props :or {className ""}} & children]
  (let [legal-colors #{:primary :accent}
        classes      (cond-> (str className " c-message")
                       (contains? legal-colors color) (str " c-message--" (name color)))
        props        (-> props
                       (assoc :className classes)
                       (dissoc :color))]
    (apply dom/div (clj->js props) children)))

(defui DialogTitle
  Object
  (render [this]
    (dom/div #js {:className "c-dialog__title"}
      (dom/h2 nil (om/children this)))))

(def ui-dialog-title
  "Render a dialog's title (using supplied DOM children). Should only be used in a ui-dialog"
  (om/factory DialogTitle))

(defui DialogBody
  Object
  (render [this]
    (dom/div #js {:className "c-dialog__content"} (om/children this))))

(def ui-dialog-body
  "Render the body of a dialog (using the supplied DOM children). Should only be used in a ui-dialog"
  (om/factory DialogBody))

(defui DialogActions
  Object
  (render [this]
    (dom/div #js {:className "c-dialog__actions" :key "dialogActions"} (om/children this))))

(def ui-dialog-actions
  "Render one or more action elements (e.g. buttons) in the action area of the dialog. Should only be used in a ui-dialog"
  (om/factory DialogActions))

;; Portal Functions
#?(:cljs
    (defn ownerDocument [node]
        (if node
            (and node (.-ownerDocument node))
            js/document)))


#?(:cljs
    (defn getContainer [container defaultContainer]
        (let [typedContainer (if (fn? container) (container) container)
            domNode (.findDOMNode js/ReactDOM typedContainer)]
                       (if domNode
                           domNode
                           defaultContainer))))

#?(:cljs
    (defn getOwnerDocument [element]
        (ownerDocument (.findDOMNode js/ReactDOM element))))

; #?(:cljs
;     (defn getHasTransition [props]
;         (if (.children props)
;             (.hasOwnProperty (.-props (.-children props)) "in")
;             false)))

#?(:cljs
    (defui Portal
        static uc/InitialAppState
        (initial-state [this params] {:disablePortal false})

        static om/IQuery
        (query [this] [:disablePortal])

        Object
        (initLocalState [this] {:mountNode nil})

        (getMountNode [this]
            (:mountNode (om/get-state this)))

        (setMountNode [this container]
            (let [{:keys [disablePortal]} (om/props this)
                  targetNode (if disablePortal
                                (.-parentElement (.findDOMNode js/ReactDOM this))
                                (getContainer container (.-body (getOwnerDocument this))))]

                (when (not= (.getMountNode this) targetNode)
                    (om/update-state! this assoc :mountNode targetNode))))

        (componentDidMount [this]
          (let [{:keys [container disablePortal onRendered]} (om/get-props this)]

            (.setMountNode this container)

            ;; Only rerender if needed
            (when (not disablePortal)
                (.forceUpdate this onRendered))))

        (componentDidUpdate [this prev-props prev-state]
          (let [{:keys [container disablePortal onRendered]} (om/get-props this)]

            (when (or (not= (:container prev-props) container)
                      (not= (:disablePortal prev-props) disablePortal))
                (do
                    (.setMountNode this container)

                    ;; Only rerender if needed
                    (when (not disablePortal)
                        (.forceUpdate this onRendered))))))

        (componentWillUnmount [this]
            (when (not= (.getMountNode this) nil)
                (om/update-state! this assoc :mountNode nil)))

        (render [this]
            (let [{:keys [disablePortal ref aria-hidden] :as props} (om/props this)
                  attrs (assoc props :ref ref :aria-hidden aria-hidden)
                  children (om/children this)]

            (if disablePortal
                (dom/div #js {:ref ref :aria-hidden aria-hidden} children)
                (when (:mountNode (om/get-state this))
                    (dom/div #js {:ref ref :aria-hidden aria-hidden} children)
                ))))))

#?(:cljs
    (def ui-portal (om/factory Portal)))


#?(:cljs
    (defui ^:once Dialog
        static uc/InitialAppState
        (initial-state [this params] {:key                  ""
                                      :open                 false
                                      :container            nil
                                      :disableAutoFocus     false
                                      :disableBackdropClick false
                                      :disableEnforceFocus  false
                                      :disableEscapeKeyDown false
                                      :disablePortal        true
                                      :disableRestoreFocus  false
                                      :hideBackdrop         false
                                      :keepMounted          false
                                      :onEscapeKeyDown      nil})

        static om/IQuery
        (query [this] [:key
                       :open
                       :container
                       :disableAutoFocus
                       :disableBackdropClick
                       :disableEnforceFocus
                       :disableEscapeKeyDown
                       :disablePortal
                       :disableRestoreFocus
                       :hideBackdrop
                       :keyMounted
                       :onEscapeKeyDown])

        Object
        (initLocalState [this] {:mounted   false
                                :exited    (not (:open (om/props this)))
                                :lastFocus nil})
        
        (handleDocumentKeyDown [this event]
            (let [{:keys [disableEscapeKeyDown onEscapeKeyDown onClose open]} (om/props this)]

                (when (and open (= (.-keyCode event) 27))
                    (when onEscapeKeyDown
                        (onEscapeKeyDown event))

                    (when (and (not= disableEscapeKeyDown true) onClose)
                        (onClose event "escapeKeyDown")))))

        (checkForFocus [this]
            (let [mountNode (:mountNode (om/get-state this))
                  lastFocus (:lastFocus (om/get-state this))
                  currentActiveElement (.-activeElement (ownerDocument mountNode))]

                    (when (not= lastFocus currentActiveElement)
                        (om/update-state! this assoc :lastFocus currentActiveElement))))

        (enforceFocus [this]
            (let [{:keys [disableEnforceFocus]} (om/props this)
                  mountNode (:mountNode (om/get-state this))
                  dialogNode (:dialogRef (om/get-state this))
                  currentActiveElement (.-activeElement (ownerDocument mountNode))]

                (when-not (or disableEnforceFocus (not (:mounted (om/get-state this))))
                        ;; Check isTopModal

                    (when dialogNode
                        (when (not (.contains dialogNode currentActiveElement))
                            (.focus dialogNode))))))

        (autoFocus [this]
            (let [{:keys [disableAutoFocus]} (om/props this)
                  mountNode (:mountNode (om/get-state this))
                  dialogNode (:dialogRef (om/get-state this))
                  ownerOfMounted (ownerDocument mountNode)
                  currentActiveElement (.-activeElement ownerOfMounted)]

                (when-not disableAutoFocus

                    (when (and dialogNode (not (.contains dialogNode currentActiveElement))
                    ;; The inverse statement fixes returnFocus, but breaks enforceFocus
                        (do
                            (when (not= (:lastFocus (om/get-state this)) currentActiveElement)
                                #(om/update-state! this assoc :lastFocus currentActiveElement))

                            (when (not (.hasAttribute dialogNode "tabIndex"))
                                (do
                                    (js/console.log
                                    "Untangled-UI: The modal content node does not accept focus. For the benefit of assistive technologies, the tabIndex of the node is being set to '-1'.")
                                    (.setAttribute dialogNode "tabIndex" -1)))
                                
                    (.focus dialogNode)))))))

        (restoreLastFocus [this]
            (let [lastFocus (:lastFocus (om/get-state this))
                  mountNode (:mountNode (om/get-state this))]

                (when lastFocus
                    (do
                        (when (.-focus lastFocus)
                            (.focus lastFocus))
                        (om/update-state! this assoc :lastFocus nil)))))

        (handleRendered [this]
            (let [modalRef (:modalRef (om/get-state this))]
                (.autoFocus this)

                (when modalRef 
                    (aset modalRef "scrollTop" 0))

                ;; TODO conditionally run onRendered prop fn
        ))

        (handleOpen [this]
            (let [{:keys [container]} (om/props this)
                  mountNode (:mountNode (om/get-state this))
                  doc (ownerDocument mountNode)
                  container (getContainer container (.-body doc))]
                (.addEventListener doc "keydown" #(.handleDocumentKeyDown this %))
                (.addEventListener doc "focus" #(.enforceFocus this) true))
                )

        (handleClose [this]
            (let [mountNode (:mountNode (om/get-state this))
                  doc (ownerDocument mountNode)]
                (.removeEventListener doc "keydown" #(.handleDocumentKeyDown this %))
                (.removeEventListener doc "focus" #(.enforceFocus this) true)

                (.restoreLastFocus this)))

        (handleExited [this]
            (let [{:keys [open]} (om/props this)]
                (when (not= (:exited (om/get-state this)) open)
                    (om/update-state! this assoc :exited true))
                (.handleClose this)))

        (handleBackdropClick [this event]
            (let [{:keys [onClose disableBackdropClick]} (om/props this)
                  target (.-target event)]

                (when (not= target (.-currentTarget target))
                    (when (and (not disableBackdropClick) (onClose))
                        (onClose event "backdropClick")
                    ))))

        ; Start ----------------------------------------------
        (componentDidMount [this event]
            (let [{:keys [open onClose]} (om/props this)
                  mountNode (:mountNode (om/get-state this))
                  modalNode (:modalRef (om/get-state this))
                  dialogNode (:dialogRef (om/get-state this))]

                (when (not= (:mounted (om/get-state this)) true)
                    (om/update-state! this assoc :mounted true))

                (when open
                    (.handleOpen this))))

        (componentDidUpdate [this prev-props prev-state]
            (let [{:keys [open]} (om/props this)]
                (when open
                    (.checkForFocus this))

                (if (not open)
                    (.handleClose this)
                    (.handleOpen this))))

        (componentWillUnmount [this]
            (let [{:keys [open onClose exited]} (om/props this)]

                (when (not (:mounted (om/get-state this)))
                    (om/update-state! this assoc :mounted false))

                (when (or open (not exited))
                    (.handleClose this))))

        (getDerivedStateFromProps [this nextProps]
            (when (:open nextProps)
                (om/update-state! this assoc :exited false))

            ; getHasTransition TODO
        )

        (render [this]
            (let [{:keys [key
                          full-screen
                          open
                          onClose
                          disableAutoFocus
                          disableBackdropClick
                          hideBackdrop
                          disablePortal
                          container] :as props} (om/props this)
                children     (om/children this)
                state        (when open " is-active")
                user-classes (get props :className "")
                classes      (str user-classes " c-dialog" state (when full-screen " c-dialog--fullscreen"))]
                    (dom/div #js {:ref (fn [r]
                                        (when (not (:mountNode (om/get-state this)))
                                            (om/update-state! this assoc :mountNode r)))}
                        (ui-portal {:container     container
                                    :disablePortal disablePortal
                                    :onRendered    (.handleRendered this)
                                    :aria-hidden   (not open)}
                            (dom/div #js {:key (str key "-dialog")
                                          :className classes
                                          :ref       (fn [r]
                                                           (when (not (:modalRef (om/get-state this)))
                                                               (om/update-state! this assoc :modalRef r))) 
                                          :role      "dialog"}
                                (when-not hideBackdrop
                                    (dom/div #js {:aria-hidden true
                                                  :onClick     #(.handleBackdropClick this %)
                                                  :className   (str "c-backdrop" state)}))
                                (dom/div #js {:className "c-dialog__card"
                                              :ref       (fn [r]
                                                           (when (not (:dialogRef (om/get-state this)))
                                                               (om/update-state! this assoc :dialogRef r)))
                                              :tabIndex  -1 
                                              :role      "document"}
                                    children))))))))

#?(:cljs
    (def ui-dialog
    "Render a dialog. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

    Options:

    `:open` - A boolean. When true the dialog is on-screen. When not, it is hidden. Allows you to keep the dialog
    in the DOM.
    `:full-screen` - A boolean. Renders the dialog to consume the entire screen when true. (useful for mobile).
    `:className` - Additional CSS classes to place on the dialog.
    `:key` - React key
    `:onClose` - A callback that advises *your* code that the user is indicating a desire to be out of the dialog
    (e.g. the clicked on the modal backdrop). You must still set the open flag since this is a stateless
    rendering of a dialog UI, not an active stateful component.

    You should include at most one of each of three following children for this node:

    (ui-dialog {}
        (ui-dialog-title {} title-nodes)
        (ui-dialog-body {} body-nodes)
        (ui-dialog-actions {} action-nodes)

    The `title-nodes` can be any inline DOM (or just a string), as can body-nodes.  Action-notes must include at least one button that
    closes the dialog or redirects the user."
    (om/factory Dialog)))

(defui NotificationTitle
  Object
  (render [this]
    (let [{:keys [key] :as props :or {key ""}} (om/props this)]
      (dom/h1 #js {:className "c-notification_heading" :key key} (om/children this)))))

(def ui-notification-title
  "Render a notification title. Should only be used in a ui-notification"
  (om/factory NotificationTitle))

(defui NotificationBody
  Object
  (render [this] (dom/p #js {} (om/children this))))

(def ui-notification-body
  "Render a notification body. Should only be used in a ui-notification"
  (om/factory NotificationBody))

(defui Notification
  Object
  (render [this]
    (let [{:keys [key width kind onClose] :as props :or {key ""}} (om/props this)
          children     (om/children this)
          title        (first-node NotificationTitle children)
          content      (first-node NotificationBody children)
          legal-types  #{:success :warning :error :informative}
          legal-widths #{:wide}
          user-classes (get props :className "")
          classes      (cond-> (str user-classes " c-notification")
                         (contains? legal-types kind) (str " c-notification--" (name kind))
                         (contains? legal-widths width) (str " c-notification--" (name width)))
          type-icon    (case kind
                         :success (icon :check_circle :states [:positive])
                         :warning (icon :warning)
                         :error (icon :error)
                         (icon :info))]
      (dom/div #js {:className classes :key key}
        type-icon
        (dom/div #js {:className "c-notification_content"}
          (when title title)
          (when content content))
        (dom/button #js {:onClick   (fn [evt] (when onClose (onClose)))
                         :type      "button"
                         :className "c-button c-button--icon"} (icon :close))))))

(def ui-notification
  "Render a notification. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  `:onClose` (optional) - A function to call when the notification's close button is pressed
  `:type` :none (default), :success, :warning, :error, :informative
  `:size` :normal (default), :wide

  You should include two children of this node:

  (when show-notification?
    (ui-notification {:onClose (fn [] (om/transact! this `[(my-close-notification-mutation)]))}
      (ui-notification-title {} title-nodes)
      (ui-notification-body {} body-nodes)))

  The `title-nodes` can be any inline DOM (or just a string), as can body-nodes."
  (om/factory Notification))

(defn ui-progress
  "Render an HTML progress element. Props is a normal clj(s) map with React/HTML attributes plus:

  `:className` - additional class stylings to apply to the progress element
  `:max` - The integer value that we're targeting for completion
  `:value` - The integer value of where we're at
  `:size` :regular (default), :dense

  If neither max or value are given, it will render as an indeterminate progress (in progress, but not complete).
  "
  [{:keys [max value className size] :or {className ""} :as props}]
  (let [legal-sizes #{:dense}
        classes     (cond-> (str className " c-progress ")
                      (contains? legal-sizes size) (str " c-progress--" (name size)))
        attrs       (assoc props :className classes :aria-hidden false)]
    (dom/progress (clj->js attrs))))


(defn ui-slider
  "Render an icon button for use inside an icon bar.

  `:label` - A string of text to describe the value of this slider
  `:id` - Required. A unique ID. Will not render correctly without one.

  TODO: Add the ability to wrap this in a menu so you can show more than just the text.
  "
  ([{:keys [label id] :as props :or {label ""}}]
   (assert id "DOM ID is required on slider")
   (dom/input #js {:className "c-slider" :type "range" :title label})))

(defn ui-tabs
  "Render a container for tabs using a vector of icons (each a map of attributes).
   Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

   all parameters are optional
   "
  [{:keys [className] :as props :or {className ""}} & children]
  (let [user-classes    (get props :className "")
        top-level-class (cond-> (str user-classes " c-tabs"))]
    (apply dom/nav #js {:className top-level-class :aria-label "Site"} children)))

(defn ui-tab
  "Render an icon button for use inside an icon bar.

  `:label` - A string of text to describe the tab action
  `:kind` :default, :primary - changes the aesthetic style of a tab
  `:active` true or false (default) - Usually used to show that your in that tab's view.

  TODO: Add the ability to wrap this in a menu so you can show more than just the text.
  "
  ([{:keys [className label kind active] :as props :or {className "" label ""}}]
   (let [legal-kinds #{:primary}
         classes     (cond-> (str className " c-tab " (when active " is-active "))
                       (contains? legal-kinds kind) (str " c-tab--" (name kind)))]
     (dom/button #js {:className classes :type "button"} label))))

(defn ui-toolbar
  "Render a container for toolbar rows to populate

  `:kind` :regular (default), :raised, :primary, :primary-raised, :dark, :dark-raised, :bordered
  `:raised` false (default), true - Visually raise the toolbar with a box shadow.
   "
  [{:keys [className kind raised] :as props :or {className ""}} & children]
  (let [legal-kinds     #{:primary :dark :bordered}
        base-class      " c-toolbar"
        user-classes    (get props :className "")
        top-level-class (cond-> (str user-classes base-class)
                          (true? raised) (str base-class "--raised ")
                          (contains? legal-kinds kind) (str base-class "--" (name kind)))]
    (apply dom/div #js {:className top-level-class} children)))

(defn ui-toolbar-row
  "Render a row of space to place controls and labels inside.

  `:size` :regular (default), :dense
   "
  [{:keys [className size] :as props :or {className ""}} & children]
  (let [legal-sizes     #{:dense}
        base-class      " c-toolbar__row"
        user-classes    (get props :className "")
        top-level-class (cond-> (str user-classes base-class)
                          (contains? legal-sizes size) (str base-class "--" (name size)))]
    (apply dom/div #js {:className top-level-class} children)))

(defn ui-toolbar-button
  "Render a primary action button for a toolbar

  `:size` :regular (default), :dense
   "
  [{:keys [glyph] :as props :or {glyph :menu}}]
  (let [icon-glyph glyph]
    (dom/div #js {:className "c-toolbar__button"}
      (ui-icon-button {:glyph icon-glyph}))))

(defn ui-toolbar-spacer
  "Render a spacer in-between elements in a toolbar
  "
  [{:keys [className] :as props :or {className ""}}]
  (dom/div #js {:className "c-toolbar__spacer"}))

(defn ui-empty-state
  "Render an icon and text for when you can't display anything when you normally would have a collection of things.

  `:glyph` - An icon glyph name to render a given icon.
  `:title` - A string to announce what's missing
  `:message` - A string to instruct the user what to do next
  "
  ([{:keys [className glyph title message] :as props :or {className "u-absolute--middle-center" glyph :help title "Nothing to see yet" message ""}}]
   (dom/div #js {:className className}
     (ui-icon {:size :huge :color :passive} (icon glyph))
     (dom/h1 nil title)
     (dom/p #js {:className "c-message"} message))))
