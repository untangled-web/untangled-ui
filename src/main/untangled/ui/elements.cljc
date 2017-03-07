(ns untangled.ui.elements
  (:require [om.dom :as dom]
            [om.next :as om :refer [defui]]
            [untangled.ui.menu :as menu]
            [untangled.icons :refer [icon]]
            [untangled.client.logging :as log]))

#?(:clj (def clj->js identity))

(defn ui-circular-button
  "Render a raised circle button. Props is a normal clj(s) map with React/HTML attributes plus:

  :color - :neutral (default), :primary, :accent
  :size  - :normal (default), :small
  :active - true or false (default) -  Causes the button to look highlighted.

  Any other React properties are allowed, including additional CSS classes.
  "
  [{:keys [className size color disabled active] :or {className ""} :as attrs} & children]
  (let [legal-colors   #{:primary :accent}
        legal-sizes    #{:small}
        button-label   (fn [text]
                         (dom/span #js {:className "c-button__content"} text))
        fixed-children (map (fn [c]
                              (if (string? c)
                                (button-label c)
                                c)) children)
        classes        (cond-> (str className " c-button c-button--circular")
                         disabled (str " is-disabled")
                         active (str " is-active")
                         (contains? legal-colors color) (str " c-button--" (name color))
                         (contains? legal-sizes size) (str " c-button--" (name size)))
        attrs          (cond-> attrs
                         disabled (assoc :aria-disabled "true")
                         :always (dissoc :disabled :active :color :size)
                         :always (assoc :className classes))]
    (apply dom/button (clj->js attrs) fixed-children)))

(defn ui-flat-button
  "Render a button that has no colored background (it is just the children), but renders a hover shape
  when the mouse if over it.

  :color - :neutral (default), :primary, :accent
  :shape - :rect (default), :round, or :wide
  :size  - :normal (default), :small
  :active - true or false (default) -  Causes the button to look highlighted.

  Any other React properties are allowed, including additional CSS classes.
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
                         disabled (str " is-disabled")
                         active (str " is-active")
                         (contains? legal-colors color) (str " c-button--" (name color))
                         (contains? legal-shapes shape) (str " c-button--" (name shape))
                         (contains? legal-sizes size) (str " c-button--" (name size)))
        attrs          (cond-> attrs
                         disabled (assoc :aria-disabled "true")
                         :always (dissoc :disabled :active :color :shape :size)
                         :always (assoc :className classes))]
    (apply dom/button (clj->js attrs) fixed-children)))

(defn ui-button
  "Render a raised button. Props is a normal clj(s) map with React/HTML attributes plus:

  :color - :neutral (default), :primary, :accent
  :shape - :rect (default), :round, or :wide
  :size  - :normal (default), :small
  :active - true or false (default) -  Causes the button to look highlighted.

  Any other React properties are allowed, including additional CSS classes.
  "
  [{:keys [className size color shape disabled active] :or {className ""} :as attrs} & children]
  (apply ui-flat-button (update attrs :className str " c-button--raised") children))

(defn ui-fader
  "Wrap children in a div (props is a clj(s) map of normal React attributes) where the :visible attribute
  is a boolean indicating the visibility of the children.

  When the resulting div becomes visible it fades in, and when it becomes hidden it fades out."
  [{:keys [visible] :as props} & children]
  (let [className (or (:className props) "")
        classes   (str "u-row " className (if visible " u-fade-in" " u-fade-out"))
        attrs     (-> props
                    (dissoc :visible)
                    (assoc :className classes)
                    clj->js)]
    (apply dom/div attrs children)))

(defn ui-badge
  "Render the given children within a badge. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  `(ui-badge {} \"7\")`
  "
  [{:keys [className] :as props :or {className ""}} & children]
  (let [props (update props :className str " c-badge")]
    (apply dom/span (clj->js props) children)))

(defn ui-label
  "Render the given children within a label. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
  color (optional): :positive, :informative, :informative-alt, :neutral, :live, :alterable, :negative"
  [{:keys [className color] :as props :or {className ""}} & children]
  (let [legal-colors #{:green :blue :magenta :grey :yellow :orange :red}
        classes      (cond-> className
                       :always (str " c-label")
                       (contains? legal-colors color) (str " c-label--" (name color)))
        props        (-> props
                       (dissoc :color)
                       (assoc :className classes)
                       )]
    (apply dom/span (clj->js props) children)))

(defn ui-field
  "Render an input field. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  kind (optional): :text (default), :password, :date, :datetime, :datetime-local, :month, :week, :email, :number, :search, :tel, :time, :url, :color
  size (optional): :small, :medium, :large
  states that can be implemented (optional) :required, :focus, :invalid, :error"
  [{:keys [size state kind] :or {size ""} :as attrs} placeholder]
  (let [legal-sizes  #{:small :medium :large}
        legal-kinds #{:text :password :date :datetime :datetime-local :month :week :email :number :search :tel :time :url :color}
        user-classes (get attrs :className "")
        has          (fn [s] (contains? state s))
        classes      (cond-> (str user-classes " c-field ")
                       (contains? legal-sizes size) (str "c-field--" (name size))
                       (has :focus) (str " has-focus")
                       (has :invalid) (str " is-invalid")
                       (has :error) (str " is-error"))
        type         (if (contains? legal-kinds kind) (name kind) "text")
        attrs        (cond-> (assoc attrs :type kind :className classes :placeholder (name placeholder))
                       (contains? state :required) (assoc :required "true")
                       :always (dissoc :size :state :kind))]
    (dom/input (clj->js attrs))))

(defn ui-message
  "Render the given children within a message. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  color (optional): :neutral, :alert, :success, :warning"
  [{:keys [className color] :as props :or {className ""}} & children]
  (let [legal-colors #{:neutral :alert :success :warning}
        classes      (cond-> className
                       :always (str " c-message")
                       (contains? legal-colors color) (str "--" (name color)))
        props        (-> props
                       (assoc :className classes)
                       (dissoc :color))]
    (apply dom/div (clj->js props) children)))

(defn ui-avatar
  "Render an icon or a short string within an avatar. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  color (optional): :primary, :accent
  size (optional): huge"
  [{:keys [className color size style] :as props :or {className ""}} child]
  (let [legal-colors #{:primary :accent}
        legal-sizes  #{:medium :large :xlarge :huge}
        legal-styles #{:bordered}
        user-classes (get props :className "")
        classes      (cond-> user-classes
                       :always (str " c-avatar")
                       (contains? legal-colors color) (str " c-avatar--" (name color))
                       (contains? legal-sizes size) (str " c-avatar--" (name size))
                       (contains? legal-styles style) (str " c-avatar--" (name style)))
        props        (-> props
                       (assoc :className classes)
                       (dissoc :color :size :style))]
    (dom/span (clj->js props) child)))

(defn ui-loader
  "Render an icon or a short string within an avatar. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  color (optional): :primary :accent"
  [{:keys [className color] :as props :or {className ""}}]
  (let [legal-colors #{:primary :accent}
        user-classes (get props :className "")
        classes      (cond-> user-classes
                       :always (str " c-loader")
                       (contains? legal-colors color) (str " c-loader--" (name color)))
        props        (cond-> props
                       :always (assoc :className classes)
                       :always (dissoc :color))]
    (dom/div (clj->js props))))

(defn ui-icon
  "Render an icon. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  color (optional): :positive, :informative, :neutral, :live, :alterable, :negative
  size (optional): :small, :medium, :large, :xlarge, :huge
  glyph (optional): Instructs `ui-icon` to render an icon from the built-in set. See `untangled.icons/icon`.

  The child (optional) should be some kind of icon, for example the SVG generated by the `untangled.icons/icon` function."
  ([{:keys [className color size glyph] :as props :or {className ""}}] (ui-icon props nil))
  ([{:keys [className color size glyph] :as props :or {className ""}} child]
   (let [legal-colors #{:neutral :positive :informative :live :alterable :negative :active :passive}
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

(defui NotificationTitle
  Object
  (render [this]
    (dom/h1 #js {:className "c-notification_heading"} (om/children this))))

(def ui-notification-title
  "Render a notification title. Should only be used in a ui-notification"
  (om/factory NotificationTitle))

(defui NotificationBody
  Object
  (render [this] (dom/p #js {} (om/children this))))

(def ui-notification-body
  "Render a notification body. Should only be used in a ui-notification"
  (om/factory NotificationBody))

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

(defui Notification
  Object
  (render [this]
    (let [{:keys [width kind onClose] :as props} (om/props this)
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
      (dom/div #js {:className classes}
        type-icon
        (dom/div #js {:className "c-notification_content"}
          (when title title)
          (when content content))
        (dom/button #js {:onClick   (fn [evt] (when onClose (onClose)))
                         :className "c-button c-button--icon"} (icon :close))))))

(def ui-notification
  "Render a notification. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  type: : :success, :warning, :error, :informative
  size (optional): :wide

  You should include two children of this node:

  (ui-notification {}
    (ui-notification-title {} title-nodes)
    (ui-notification-body {} body-nodes))

  The `title-nodes` can be any inline DOM (or just a string), as can body-nodes."
  (om/factory Notification))

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

(def color-types
  {:primary "c-card--primary"
   :accent  "c-card--accent"})

(def card-types
  {:bordered    "c-card--bordered"
   :transparent "c-card--transparent"
   :square      "c-card--square"})

(def size-types
  {:expand "c-card--expand"
   :wide   "c-card--wide"})

(defn ui-card
  "Card component

   Usage
   (c/ui-card {:title          \"Some Title\"
               :color          :primary | :accent
               :type           :bordered | :transparent | :square
               :size           :expand | :wide
               :image          \"path/to/image/file.jpeg\"
               :image-position :cover | :top-left | :top-right | :bottom-left | :bottom-right
               :actions        (ui-button \"Some Action\")
               :media          URL
               :media-type     :image | :video (TODO Youtube?)

               ;;TODO
               :menu-icon :more_vert
               :menu-items [:ia \"This\" :ib \"that\"]}
    ...)
    all paramters optional
    "
  [{:keys [type
           title
           color
           size
           image
           image-position
           actions
           media-type
           media
           ;; menu-icon
           ;; menu-items
           className] :as attrs} & children]
  {:pre [(or (nil? type) (keyword? type))
         (or (nil? title) (string? title))]}
  (let [className  (or className "")
        classes    (cond->
                     (str "c-card " className)
                     type (str " " (card-types type))
                     size (str " " (size-types size))
                     color (str " " (color-types color)))
        attributes (-> attrs
                     (merge {:className classes})
                     (dissoc :title :type :color :size :actions :image :image-position :media-type :media)
                     clj->js)]
    (dom/div attributes
      (when media
        (dom/div #js {:className (str "c-card__media")}
          (when (= media-type :image) (dom/img #js {:className "c-card__media-content" :src media}))))
      (when title
        (dom/div #js {:className (str "c-card__title"
                                   (when image " c-card__title--image")
                                   (when image-position (str " c-card__title--image-" (name image-position))))
                      :style     #js {:backgroundImage (when (= color (or :primary :accent)) (str "url(" image ")"))}}
          (dom/h1 #js {:className "c-card__title-text"} title)))
      (when children
        (apply dom/div #js {:className "c-card__supporting-text"} children))
      (when actions
        (dom/div #js {:className "c-card__actions"} actions))
      ;; TODO
      #_(when menu-items
        (dom/div #js {:className "c-card__menu"}
          (menu/menu :a
            (icon (if menu-icon menu-icon :more_vert))
            menu-items))))))

(defn ui-icon-bar
  "Render an icon bar using a vector of icons (each a map of attributes).
   Can optionally render vertically and/or shifting.
   Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

   Usage
   (c/ui-icon-bar {:orientation  :vertical or :horizontal (default)
                   :shifting     :true
   ...)
   all parameters are optional
   "
  [{:keys [className orientation shifting] :as props :or {className ""}} & children]
  (let [user-classes    (get props :className "")
        top-level-class (cond-> (str user-classes " c-iconbar")
                          (= orientation :vertical) (str " c-iconbar--rail")
                          (= shifting :true) (str " c-iconbar--shifting"))]
    (dom/div #js {}
      (apply dom/nav #js {:className top-level-class} children))))

(defui ModalTitle
  Object
  (render [this]
    (dom/div #js {:className "c-modal__title"} (om/children this))))

(def ui-modal-title
  "Render a notification title. Should only be used in a ui-modal"
  (om/factory ModalTitle))

(defui ModalBody
  Object
  (render [this]
    (dom/div #js {:className "c-modal__content"} (om/children this))))
(def ui-modal-body
  "Render a notification body. Should only be used in a ui-modal"
  (om/factory ModalBody))

(defui ModalActions
  Object
  (render [this]
    (dom/div #js {:className "c-modal__actions"} (om/children this))))

(def ui-modal-actions
  "Render a notification action area. Should only be used in a ui-modal"
  (om/factory ModalActions))

(defui Modal
  Object
  (render [this]
    (let [{:keys [active] :as props} (om/props this)
          children     (om/children this)
          title        (first-node ModalTitle children)
          content      (first-node ModalBody children)
          actions      (first-node ModalActions children)
          state        (if (= active :true) " is-active" "")
          user-classes (get props :className "")
          classes      (-> (str user-classes " c-modal" state))]

      (dom/div #js {}
               (dom/div #js {:className (str classes) :style #js {:position "absolute"}}
                        (dom/div #js {:className "c-modal__card"}
                                 (when title title)
                                 (when content content)
                                 (when actions actions)))
               (dom/div #js {:className (str "c-backdrop" state) :style #js {:position "absolute"}})))))
;TODO: Change the position to fixed and wrap the example in ui-iframe.  My testing with this did not work as expected.

(def ui-modal
  "Render a modal. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  You should include three children of this node:

  (ui-modal {}
    (ui-modal-title {} title-nodes)
    (ui-modal-body {} body-nodes)
    (ui-modal-actions {} action-nodes)

  The `title-nodes` can be any inline DOM (or just a string), as can body-nodes.  Action-notes must include at least one button that
  closes the modal or redirects the user."
  (om/factory Modal))


(defn ui-checkbox
  "Render a checkbox (not the label). Props is a normal clj(s) map with React/HTML attributes plus:

  className (optional): additional class stylings to apply to the top level of the checkbox
  id: Name of the checkbox
     style (optional):  indeterminate
  disabled (optional: true/false"
  [{:keys [id style disabled] :or {id ""} :as attrs}]
  (let [legal-styles #{:indeterminate}
        user-classes (get attrs :className "")
        classes (cond-> (str user-classes " c-checkbox ")
                        (contains? legal-styles style) (str "is-" (name style)))
        attrs (cond-> attrs
                      :always (assoc :type "checkbox")
                      :always (dissoc :style :disabled)
                      :always (assoc :className classes)
                      :always (assoc :disabled disabled)
                      :always (assoc :id (name id)))]
    (dom/span nil
      (dom/input (clj->js attrs))
      (dom/label #js {:htmlFor id} \u00A0))))
