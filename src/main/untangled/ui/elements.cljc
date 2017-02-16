(ns untangled.ui.elements
  (:require [om.dom :as dom]
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
