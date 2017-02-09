(ns untangled.components.exploration-cards
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
    [untangled.components.calendar :as c]))

(defcard-doc
  "# General Exploration of How to Code for this Library"

  )

(defn ui-badge
  "Render the given children within a badge. Normal HTML/React attributes can be included, and should be a cljs map (not a js object)."
  [{:keys [className] :as props :or {className ""}} & children]
  (let [props (update props :className str " c-badge")]
    (apply dom/span (clj->js props) children)))

(defcard badges
  "Badges are decorated via a normal function. The properties are a normal clj(s) map that can contain any of the normal HTML/React attributes"
  (dom/div nil
    (ui-badge {:className "hello"} "7")
    (ui-badge {} (icon :arrow_back))
    (ui-badge {} (icon :arrow_back) (icon :arrow_forward))))

(defn ui-button
  "Render a button. Props is a normal clj(s) map with React/HTML attributes plus:

  color (optional): :default, :secondary, :alert, :passive, :text, or :anchor
  shape (optional): :default, :large, :xlarge, :round, or :wide"
  [{:keys [className color shape disabled] :or {className ""} :as attrs} & children]
  (let [legal-colors #{:secondary :alert :passive :text :anchor}
        legal-shapes #{:large :xlarge :round :wide}
        classes      (cond-> className
                       disabled (str " is-disabled")
                       (contains? legal-colors color) (str " c-button--" (name color))
                       (contains? legal-shapes shape) (str " c-button--" (name shape))
                       :always (str " c-button"))
        attrs        (cond-> attrs
                       disabled (assoc :aria-disabled "true")
                       :always (assoc :className classes))]
    (apply dom/button (clj->js attrs) children)))

(defcard buttons
  "Badges are decorated via a normal function. The properties are a normal clj(s) map that can contain any of the normal HTML/React attributes"
  (dom/div nil
    (ui-button {:className "hello"} "7")
    (ui-button {} (icon :arrow_back))
    (ui-button {} "Label" (icon :arrow_forward))
    (ui-button {:shape :round} "Round" (icon :arrow_forward))
    (ui-button {:disabled true} "Disabled")
    (ui-button {:color :alert} "Alert")
    (ui-button {:shape :xlarge} "XLarge")
    (ui-button {:color :alert :shape :xlarge} "XLarge Alert")
    (ui-button {:color :secondary} "Secondary")
    (ui-button {:color :passive} "Passive")
    (ui-button {:color :text} "Text")
    (ui-button {:color :anchor} "Anchor")))
