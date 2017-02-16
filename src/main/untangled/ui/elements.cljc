(ns untangled.ui.elements
  (:require [om.dom :as dom]
            [om.next :as om :refer [defui]]
            [untangled.client.logging :as log]))

#?(:clj (def clj->js identity))

(defn ui-button
  "Render a button. Props is a normal clj(s) map with React/HTML attributes plus:

  color (optional): :default, :secondary, :alert, :passive, :text, or :anchor
  shape (optional): :default, :large, :xlarge, :round, or :wide
  "
  [{:keys [className color shape disabled] :or {className ""} :as attrs} & children]
  (let [legal-colors   #{:secondary :alert :passive :text :anchor}
        legal-shapes   #{:large :xlarge :round :wide}
        button-label   (fn [text]
                         (dom/span #js {:className "c-button__content"} text))
        fixed-children (map (fn [c]
                              (if (string? c)
                                (button-label c)
                                c)) children)
        classes        (cond-> className
                         disabled (str " is-disabled")
                         (contains? legal-colors color) (str " c-button--" (name color))
                         (contains? legal-shapes shape) (str " c-button--" (name shape))
                         :always (str " c-button"))
        attrs          (cond-> attrs
                         disabled (assoc :aria-disabled "true")
                         :always (dissoc :color :shape)
                         :always (assoc :className classes))]
    (apply dom/button (clj->js attrs) fixed-children)))

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

(defn build-title-bar
  "Helper function for building up the title bar of the card."
  [title]
  (dom/div #js {:className "c-card__title"}
           (dom/h1 #js {:className "c-card__heading"} title)))

(defn ui-card
  "Render a card. Props is a normal clj(s) map with React/HTML attributes plus:

  className (optional): additional class stylings to apply to the top level of the card
  type:  :round, :transparent, :ruled, or :zone
     The card type indicates how the card should appear
  title-bar (optional): this produces a title heading with shading.
  title (optional): the text to appear as the title of the card
  "
  [{:keys [title type className title-bar] :or {title nil title-bar nil text ""} :as attrs} & children]
  (let [legal-types #{:round :transparent :ruled :zone}
        classes     (cond-> className
                            (contains? legal-types type) (str " c-card--" (name type))
                            :always (str " c-card"))
        attributes  (cond-> attrs
                            :always (dissoc :type :title :title-bar :className)
                            :always (assoc :className classes))
        title-bar   (if title-bar (build-title-bar title)
                                  (if title
                                    (dom/h1 #js {} title)
                                    ""))]
    (apply dom/div (clj->js attributes) (if title-bar (build-title-bar title) title-bar) children)))
