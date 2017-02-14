(ns untangled.ui.elements
  (:require [om.dom :as dom]))

(defn add-tooltip
  "Given a cljs map of properties for a DOM element, adds tooltip elements for rendering
  a given string as a hovered tool tip.  Returns a cljs map.  Use `clj->js` to use the result
  on a js React component.

  Position should be one of :left, :right, :up, or :down
  "
  [props & {:keys [label position] :or {label "" position :down}}]
  (let [checked-positions (or (#{:left :right :up :down} position) :down)]
    (assoc props :data-tooltip label
                 :data-tooltip-pos (name checked-positions)))
  )

(defn build-title-bar
  "Helper function for building up the title bar of the card."
  [title]
  (dom/div #js {:className "c-card__title"}
    (dom/h1 #js {:className "c-card__heading"} title)))

(defn add-card
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
