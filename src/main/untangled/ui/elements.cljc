(ns untangled.ui.elements
  (:require [om.dom :as dom]
            [om.next :as om :refer [defui]]
            [untangled.client.logging :as log]))

#?(:clj (def clj->js identity))

(defn ui-button
  "Render a button. Props is a normal clj(s) map with React/HTML attributes plus:

  type (optional): :default or :raised
  shape (optional): :default, :dense, :round, or :wide
  "
  [{:keys [className type shape colored disabled] :or {className ""} :as attrs} & children]
  (let [legal-types   #{:raised}
        legal-shapes   #{:dense :round :wide}
        button-label   (fn [text]
                         (dom/span #js {:className "c-button__content"} text))
        fixed-children (map (fn [c]
                              (if (string? c)
                                (button-label c)
                                c)) children)
        classes        (cond-> className
                         disabled (str " is-disabled")
                         (contains? legal-types type) (str " c-button--" (name type))
                         (contains? legal-shapes shape) (str " c-button--" (name shape))
                         colored (str " c-button--colored")
                         :always (str " c-button"))
        attrs          (cond-> attrs
                         disabled (assoc :aria-disabled "true")
                         :always (dissoc :type :shape)
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

(defn ui-label
  "Render the given children within a label. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).
  color (optional): :positive, :informative, :informative-alt, :neutral, :live, :alterable, :negative"
  [{:keys [className color] :as props :or {className ""}} & children]
  (let [legal-colors #{:positive :informative :informative-alt :neutral :live :alterable :negative}
        classes (cond-> className
                        :always (str " c-label")
                        (contains? legal-colors color) (str " c-label--" (name color)))
        props (-> props
                  (dissoc :color)
                  (assoc :className classes)
                  )]
    (apply dom/span (clj->js props) children)))

(defn ui-field
  "Render an input field. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  size (optional): :small, :medium, :large
  states that can be implemented (optional) :required, :focus, :invalid, :error"
  [{:keys [size state] :or {size ""} :as attrs} placeholder]
  (let [legal-sizes #{:small :medium :large}
        user-classes (get attrs :className "")
        has (fn [s] (contains? state s))
        classes (cond-> (str user-classes " c-field ")
                        (contains? legal-sizes size) (str "c-field--" (name size))
                        (has :focus) (str " has-focus")
                        (has :invalid) (str " is-invalid")
                        (has :error) (str " is-error"))
        attrs (cond-> attrs
                      (contains? state :required) (assoc :required "true")
                      :always (assoc :type "text")
                      :always (dissoc :size)
                      :always (assoc :className classes)
                      :always (assoc :placeholder (name placeholder)))]
    (dom/input (clj->js attrs))))

(defn ui-message
  "Render the given children within a message. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  color (optional): :neutral, :alert, :success, :warning"
  [{:keys [className color] :as props :or {className ""}} & children]
  (let [legal-colors #{:neutral :alert :success :warning}
        classes (cond-> className
                        :always (str " c-message")
                        (contains? legal-colors color) (str "--" (name color)))
        props (-> props
                  (assoc :className classes)
                  (dissoc :color))]
    (apply dom/div (clj->js props) children)))

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
