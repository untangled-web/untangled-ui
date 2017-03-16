(ns untangled.ui.card-visuals
  (:require
    [om.dom :as dom]
    [devcards.core :as dc :refer-macros [defcard]]
    [untangled.ui.elements :as ele]))


(defcard card-visual-regressions
  (dom/div nil
    (ele/ui-card {}
      (dom/div nil "This is a basic card with content"))

    (ele/ui-card {:title "Card title"}
      (dom/div nil "Secondary content"))

    (ele/ui-card {:type :bordered
                  :title "Bordered card"
                  :color :primary
                  :actions (ele/ui-flat-button {:color :primary } "Look at my border")}
      (dom/div nil "This is a bordered card"))

    (ele/ui-card {:type :transparent
                  :title "Transparent card"}
      (dom/div nil "Content"))

    (ele/ui-card {:type :square
                  :title "Square-sized card"}
      (dom/div nil "Content")
      (dom/div nil "Content")
      (dom/div nil "Content")
      (dom/div nil "Content")
      (dom/div nil "Content"))

    (ele/ui-card {:type :image}
      (dom/div nil "Content"))

    (ele/ui-card {:color :primary
                  :title "Hey There"}
      (dom/div nil "Content"))

    (ele/ui-card {:color :accent
                  :title "Hey There"}
      (dom/div nil "Content"))

    (ele/ui-card {:size :expand}
      (dom/div nil "Content"))

    (ele/ui-card {:size :wide}
      (dom/div nil "Content"))

    (ele/ui-card {:title "Image card"
                  :color :primary
                  :image "img/bubbles.png"}
      (dom/div nil "Content"))

    (ele/ui-card {:title          "Image Top Left"
                  :color          :primary
                  :image          "img/bubbles.png"
                  :image-position :top-left}
      (dom/div nil "Content"))

    (ele/ui-card {:title          "Image Top Right"
                  :color          :primary
                  :image          "img/bubbles.png"
                  :image-position :top-right}
      (dom/div nil "Content"))

    (ele/ui-card {:title          "Image Bottom Left"
                  :color          :primary
                  :image          "img/bubbles.png"
                  :image-position :bottom-left}
      (dom/div nil "Content"))

    (ele/ui-card {:title          "Image Bottom Right"
                  :color          :primary
                  :image          "img/bubbles.png"
                  :image-position :bottom-right}
      (dom/div nil "Content"))

    (ele/ui-card {:title          "Image Cover"
                  :color          :primary
                  :image          "img/welcome_card.jpg"
                  :image-position :cover
                  :size           :wide}
      (dom/div nil "Content"))
    ))

