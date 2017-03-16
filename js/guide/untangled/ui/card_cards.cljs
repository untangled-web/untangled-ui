(ns untangled.ui.card-cards
  (:require
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [devcards.util.utils :as utils]
    [untangled.ui.sample-card :refer [defsample]]
    [om.dom :as dom]
    [untangled.ui.elements :as ele]
    [untangled.client.core :as uc]
    [untangled.ui.menu :as m :refer [menu menu-item]]
    [untangled.ui.elements :as e]))

(defcard-doc
  "# Card

   A card component applies styling to ui elements that represent a paper card

  ```
    (ele/ui-card {:title \"Some Title\"
                  :type  :bordered
                      or :transparent
                      or :square
                      or :image
                  :color :primary
                      or :accent
                  :size  :expand
                      or :wide
                  :image string
                  :image-position :cover
                               or :top-left
                               or :top-right
                               or :bottom-left
                               or :bottom-right
                  :menu-icon (keyword for icon name)
                  :menu-items [:ia \"This\" :ib \"that\"]}
    ...)
  ```
  ")

(defsample ui-card "Card"
  (ele/ui-card {}))

(defsample ui-card-content "Card Content"
  (ele/ui-card {}
    (dom/div nil "Content")))

(defsample ui-card-title "Title"
  (ele/ui-card {:title "Hey There"}
    (dom/div nil "Content")))

(defsample ui-card-actions "Actions"
  (ele/ui-card {:actions (ele/ui-flat-button {:color :primary} "Learn more")}))

(defsample type-bordered "Bordered"
  (ele/ui-card {:type :bordered
                :title "Bordered"
                :color :primary
                :actions (ele/ui-flat-button {:color :primary} "Learn more")}
    (dom/div nil "Bordered type just draws a line between content and actions.")))

(defsample type-transparent "Transparent"
  (ele/ui-card {:type :transparent
                :title "Transparent"
                :color :primary}
    (dom/div nil "Content")))

(defsample type-square "Square"
  (ele/ui-card {:type :square}
    (dom/div nil "Content")))

(defsample size-expand "Size Expand"
  (ele/ui-card {:size :expand}
    (dom/div nil "Content  asd asd adda das asd adsas dfasfasfaafs fas asfa afs afas fafag sasf asfa a f sfas as aa asf
    asd a as dsdsaa sasa asd das ada dasdsasd das asasdsa dsasad asasdsa dssa d ad ss assdsa sdadaaaad ads ada dasas dasdadsda ads adsada asd
    asdas dasdsaasdas ads adsads dadas ds a sd dasdsaasd as adaddads")))

(defsample size-wide "Size Wide"
  (ele/ui-card {:size :wide}
    (dom/div nil "Content")))

(defsample color-primary "Color Primary"
  (ele/ui-card {:color :primary
                :title "Primary"}
    (dom/div nil "Content")))

(defsample color-accent "Color Accent"
  (ele/ui-card {:color :accent
                :title "Accent"}
    (dom/div nil "Content")))

(defsample image "Image"
  (ele/ui-card {:title "Image card"
                :color :primary
                :image "img/bubbles.png"}
    (dom/div nil "Content")))

(defsample image-pos-tl "Image Position Top Left"
  (ele/ui-card {:title "Image Top Left"
                :color :primary
                :image "img/bubbles.png"
                :image-position :top-left}
    (dom/div nil "Content")))

(defsample image-pos-tr "Image Position Top Right"
  (ele/ui-card {:title "Image Top Right"
                :color :primary
                :image "img/bubbles.png"
                :image-position :top-right}
    (dom/div nil "Content")))

(defsample image-pos-bl "Image Position Bottom Left"
  (ele/ui-card {:title "Image Bottom Left"
                :color :primary
                :image "img/bubbles.png"
                :image-position :bottom-left}
    (dom/div nil "Content")))

(defsample image-pos-br "Image Position Bottom Right"
  (ele/ui-card {:title "Image Bottom Right"
                :color :primary
                :image "img/bubbles.png"
                :image-position :bottom-right}
    (dom/div nil "Content")))

(defsample image-pos-cover "Image Position Cover"
  (ele/ui-card {:title "Image Cover"
                :color :primary
                :image "img/welcome_card.jpg"
                :image-position :cover
                :size :wide}
    (dom/div nil "Content")))

(defsample menu-card "Menu Card"
  (ele/ui-card {:title "Menu Card"
                :color :primary
                :menu (menu :a "Label" [(menu-item :ia "Item Label")])}
    (dom/div nil "Content")))

