(ns untangled.ui.card-visuals
  (:require
    [om.dom :as dom]
    [devcards.core :as dc :refer-macros [defcard]]
    [untangled.ui.layout :as l]
    [untangled.ui.elements :as e]))


(defcard card-visual-regressions
  (l/row {}
    (for [color [:neutral :primary :accent]
          size [:normal :expand :wide]
          actions ["" (e/ui-flat-button {:color :primary} "Action")]]
      (l/col {:width 6 :key (str color size actions (rand-int 256))}
        (e/ui-card {:title "Card Test" :color color :size size :actions actions}
          (dom/div nil
            (dom/p nil (str "Color: " (name color)))
            (dom/p nil (str "Size: " (name size)))))))


    (l/row {}
      (for [image          ["img/bubbles.png" "img/welcome_card.jpg"]
            image-position [:top-left :top-right :bottom-left :bottom-right]]
        (l/col {:width 6 :key (str image image-position (rand-int 256))}
          (e/ui-card {:title "Card Test" :color :primary :image image :image-position image-position}
            (dom/div nil
              (dom/p nil (str "Image: " image))
              (dom/p nil (str "Image position: " (name image-position))))))))

    (l/row {}
      (l/col {:width 6}
        (e/ui-card {:title "Card Test" :media "img/welcome_card.jpg" :media-type :image}
          (dom/div nil
            (dom/p nil (str "Media Image"))))))
    ))

(defcard card-bordered-visual-regressions
  (l/row {}
    (for [color [:neutral :primary :accent]
          size [:normal :expand :wide]
          actions ["" (e/ui-flat-button {:color :primary} "Action")]]
      (l/col {:width 6 :key (str color size actions (rand-int 256))}
        (e/ui-card {:kind :bordered :title "Card Test" :color color :size size :actions actions}
          (dom/div nil
            (dom/p nil (str "Color: " (name color)))
            (dom/p nil (str "Size: " (name size)))))))


    (l/row {}
      (for [image          ["img/bubbles.png" "img/welcome_card.jpg"]
            image-position [:top-left :top-right :bottom-left :bottom-right]]
        (l/col {:width 6 :key (str image image-position (rand-int 256))}
          (e/ui-card {:kind :bordered :title "Card Test" :color :primary :image image :image-position image-position}
            (dom/div nil
              (dom/p nil (str "Image: " image))
              (dom/p nil (str "Image position: " (name image-position))))))))))

(defcard card-transparent-visual-regressions
  (l/row {}
    (for [color [:neutral :primary :accent]
          actions ["" (e/ui-flat-button {:color :primary} "Action")]]
      (l/col {:width 6 :key (str color actions (rand-int 256))}
        (e/ui-card {:kind :transparent :title "Card Test" :color color :actions actions}
          (dom/div nil
            (dom/p nil (str "Color: " (name color)))))))


    (l/row {}
      (for [image          ["img/bubbles.png" "img/welcome_card.jpg"]
            image-position [:top-left :top-right :bottom-left :bottom-right]]
        (l/col {:width 6 :key (str image image-position (rand-int 256))}
          (e/ui-card {:kind :transparent :title "Card Test" :color :primary :image image :image-position image-position}
            (dom/div nil
              (dom/p nil (str "Image: " image))
              (dom/p nil (str "Image position: " (name image-position))))))))))

(defcard card-square-visual-regressions
  (l/row {}
    (for [size [:normal :expand :wide]]
      (l/col {:width 6 :key (str size (rand-int 256))}
        (e/ui-card {:kind :square :title "Card Test" :size size}
          (dom/div nil
            (dom/p nil (str "Size: " (name size)))))))))



