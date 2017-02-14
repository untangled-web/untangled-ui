(ns untangled.ui.exploration-cards
  (:require-macros
    [untangled.client.cards :refer [untangled-app]]
    [devcards.core :refer [defcard defcard-doc]])
  (:require
    [devcards.core :as dc]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [untangled.i18n.core :as i18n]
    [untangled.client.core :as uc]
    [untangled.icons :refer [icon]]
    [untangled.ui.calendar :as c]
    [untangled.client.mutations :as m]))

(defcard-doc
  "# General Exploration of How to Code for this Library

  For basic elements that need no state, seems like just some helper functions work well.")

(defn ui-badge
  "Render the given children within a badge. Normal HTML/React attributes can be included, and should be a cljs map (not a js object).

  `(ui-badge {} \"7\")`

  "
  [{:keys [className] :as props :or {className ""}} & children]
  (let [props (update props :className str " c-badge")]
    (apply dom/span (clj->js props) children)))

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

(defcard buttons-for-visual-regression-testing
  "Badges are decorated via a normal function. The properties are a normal clj(s) map that can contain any of the normal HTML/React attributes"
  (dom/div nil
    (for [shape #{:default :large :xlarge :round :wide}
          color #{:default :secondary :alert :passive :text :anchor}]
      (ui-button {:className "extra" :shape shape :color color} (str shape color)))
    (ui-button {} "Label" (icon :arrow_forward))
    (ui-button {} (icon :arrow_back) "Label")))

(defcard badges-for-visual-regressions
  "Badges are decorated via a normal function. The properties are a normal clj(s) map that can contain any of the normal HTML/React attributes"
  (dom/div nil
    (ui-button {} "Notifications " (ui-badge {} "8"))
    (ui-badge {:className "hello"} "7")
    (ui-badge {} (icon :arrow_back))
    (ui-badge {} (icon :arrow_back) (icon :arrow_forward))))


