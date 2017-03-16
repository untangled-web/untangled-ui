(ns untangled.ui.element-visuals
  (:require
    [devcards.core :as dc :refer-macros [defcard]]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.ui.menu :as dropdowns :refer [menu menu-item]]
    [untangled.ui.elements :as e]
    [untangled.ui.layout :as l]
    [untangled.icons :refer [icon]]
    [clojure.string :as str]
    [untangled.i18n :as i :refer [tr trf]]))

(defcard avatar-visual-regressions
  (dom/div nil
    (for [color [:none :primary :accent]
          kind [:none :bordered]
          size  [:regular :medium :large :xlarge :huge]]
      (dom/span #js {:key (str "id" color kind size)}
        (e/ui-avatar {:color color :kind kind :size size} "AV")
        (e/ui-avatar {:color color :kind kind :size size} (icon :supervisor_account))))))


(defcard badges-visual-regressions
  (dom/div nil
    (e/ui-button {} "Notifications " (e/ui-badge {} "8"))
    (e/ui-button {:color :primary} "Notifications " (e/ui-badge {} "8"))
    (e/ui-button {:color :accent} "Notifications " (e/ui-badge {} "5"))
    (e/ui-badge {:className "hello"} "7")
    (e/ui-badge {} (icon :arrow_back))
    (e/ui-badge {} (icon :arrow_back) (icon :arrow_forward))))


(defcard buttons-visual-regression-testing
  (dom/div nil
    (for [shape    [:rect :round :wide]
          color    [:neutral :primary :accent]
          size     [:normal :small]
          disabled [false true]
          active   [false true]]
      (e/ui-button {:className "extra" :color color :active active :disabled disabled
                    :shape     shape :size size :key (str "btn-" shape color size disabled active)}
        (str shape " " color " " size " " (when disabled "disabled ") (when active "active "))))
    (e/ui-button {} "Label" (icon :arrow_forward))
    (e/ui-button {} (icon :arrow_back) "Label")))

(defcard flat-buttons-visual-regression-testing
  (dom/div nil
    (for [shape    [:rect :round :wide]
          color    [:neutral :primary :accent]
          size     [:normal :small]
          disabled [false true]
          active   [false true]]
      (e/ui-flat-button {:className "extra" :color color :active active :disabled disabled
                         :shape     shape :size size  :key (str "btn-flat-" shape color size disabled active)}
        (str shape " " color " " size " " (when disabled "disabled ") (when active "active "))))
    (e/ui-flat-button {} "Label" (icon :arrow_forward))
    (e/ui-flat-button {} (icon :arrow_back) "Label")))

(defcard circular-buttons-visual-regression-testing
  (dom/div nil
    (for [color    [:neutral :primary :accent]
          size     [:normal :small]
          disabled [false true]
          active   [false true]]
      (e/ui-circular-button {:className "extra" :color color :active active :disabled disabled
                             :title     (str (name color) " " (name size) " " (when disabled "disabled ") (when active "active "))
                             :size      size  :key (str "btn-circular-" color size disabled active)}
        (icon :add)))))

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


(defcard checkbox-visual-regressions
  (dom/div nil
    (dom/div nil
      (dom/label #js {:className "is-optional" :style #js {:width "80px"}} "Normal ")
      (e/ui-checkbox {:id "checkbox-1"})
      (e/ui-checkbox {:id "checkbox-3" :checked true})
      (e/ui-checkbox {:id "checkbox-3" :checked :partial}))
    (dom/div nil
      (dom/label #js {:className "is-optional" :style #js {:width "80px"}} "Disabled ")
      (e/ui-checkbox {:id "checkbox-2" :disabled true})
      (e/ui-checkbox {:id "checkbox-3" :checked true :disabled true})
      (e/ui-checkbox {:id "checkbox-4" :checked :partial :disabled true}))))


(defcard field-visual-regressions
  (dom/div nil
    (for [size [:normal :small :medium :large]
          states [:valid :invalid :error]]
      (e/ui-field {:size size :state states :key (str size states (rand-int 256))} (str (name size) " " (name states) " field")))))


(defcard icon-colors-visual-regressions
  (dom/div nil
    (e/ui-icon {} (icon :alarm))
    (e/ui-icon {:color :active} (icon :alarm))
    (e/ui-icon {:color :passive} (icon :alarm))))


(defcard icon-sizes-visual-regressions
  (dom/div nil
    (e/ui-icon {:size :small} (icon :alarm))
    (e/ui-icon {} (icon :alarm))
    (e/ui-icon {:size :medium} (icon :alarm))
    (e/ui-icon {:size :large} (icon :alarm))
    (e/ui-icon {:size :xlarge} (icon :alarm))
    (e/ui-icon {:size :huge} (icon :alarm))))


(defcard icon-bar-visual-regressions
  (dom/div nil
    (e/ui-icon-bar {}
      (e/ui-icon-bar-item {:glyph :home :label "Home" :active true})
      (e/ui-icon-bar-item {:glyph :description :label "Docs" :color :passive})
      (e/ui-icon-bar-item {:glyph :feedback :label "Support"})
      )
    (e/ui-icon-bar {:shifting true}
      (e/ui-icon-bar-item {:glyph :home :label "Home" :active true})
      (e/ui-icon-bar-item {:glyph :description :label "Docs" :color :passive})
      (e/ui-icon-bar-item {:glyph :feedback :label "Support"})
      )
    (dom/br nil)
    (e/ui-icon-bar {:orientation :vertical}
      (e/ui-icon-bar-item {:glyph :home :label "Home" :active true})
      (e/ui-icon-bar-item {:glyph :description :label "Docs" :color :passive})
      (e/ui-icon-bar-item {:glyph :feedback :label "Support"})
      )))

(defcard labels-visual-regressions
  (dom/div nil
    (for [color [:none :primary :accent]
          icon ["" (icon :add)]]
      (e/ui-label {:color color :key (str color icon (rand-int 256))} icon "Default"))))


(defcard loader-visual-regressions
  (l/row {}
    (l/col {:width 4 :halign :center}
      (e/ui-loader {}))
    (l/col {:width 4 :halign :center}
      (e/ui-loader {:color :primary}))
    (l/col {:width 4 :halign :center}
      (e/ui-loader {:color :accent}))))


(defcard messages-visual-regressions
  (dom/div nil
    (for [color [:none :primary :accent]
          class ["" "u-font-size--semi-medium"]]
      (e/ui-message {:color color :className class :key (str "messages-" (name color) (name class))}
        (str "This is a " (name color) " message.")))
    (e/ui-message {}
      (str "This is a message with an icon.") (e/ui-icon {:size :small :glyph :arrow_forward}))))


(defcard modal
  (dom/div nil
    (e/ui-iframe {:height "200" :width "100%"}
      (dom/div #js {}
        (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})
        (e/ui-dialog {:visible true}
          (e/ui-dialog-title {} "Informative")
          (e/ui-dialog-body {} "You have been notified.")
          (e/ui-dialog-actions {}
            (e/ui-flat-button {:color :primary} "Cancel")
            (e/ui-flat-button {:color :primary} "Ok")))))
    ))


(defcard notifications-visual-regressions
  (dom/div nil
    (for [kind [:normal :informative :success :warning :error]
          width [:normal :wide]]
      (dom/div #js {:key (str "id-" kind width)}
        (e/ui-notification {:kind kind :width width}
         ;; TODO Warning key prop needed on NotificationTitle but simply setting one doesn't suppress the error.
         (e/ui-notification-title {} (str (when (= width :wide) (str/capitalize (name width))) " " (str/capitalize (name kind))))
         (e/ui-notification-body {} "Your message here..."))
        (dom/p nil " ")))))


(defcard progress-visual-regressions
  (dom/div nil
    (e/ui-progress {:className "u-trailer--half"})
    (for [value [0 25 50 75 100]
          size  [:regular :dense]]
      (e/ui-progress {:max "100" :value value :size size :className "u-trailer--half" :key (str "id-" value size)})
      )))


(defcard radio-visual-regressions
  (dom/div nil
    (e/ui-radio {:id "radio-1"})
    (e/ui-radio {:id "radio-1" :checked true})
    (e/ui-radio {:id "radio-2" :disabled true})
    (e/ui-radio {:id "radio-2" :disabled true :checked true})))

;; TODO Need
;; -------------
;; switch
;; tabs
