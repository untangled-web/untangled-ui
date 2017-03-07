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

(defcard badges-visual-regressions
  (dom/div nil
    (e/ui-button {:color :primary} "Notifications " (e/ui-badge {} "8"))
    (e/ui-badge {:className "hello"} "7")
    (e/ui-badge {} (icon :arrow_back))
    (e/ui-badge {} (icon :arrow_back) (icon :arrow_forward))))

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
         (e/ui-card {:type :bordered :title "Card Test" :color color :size size :actions actions}
          (dom/div nil
            (dom/p nil (str "Color: " (name color)))
            (dom/p nil (str "Size: " (name size)))))))


     (l/row {}
       (for [image          ["img/bubbles.png" "img/welcome_card.jpg"]
             image-position [:top-left :top-right :bottom-left :bottom-right]]
         (l/col {:width 6 :key (str image image-position (rand-int 256))}
           (e/ui-card {:type :bordered :title "Card Test" :color :primary :image image :image-position image-position}
            (dom/div nil
              (dom/p nil (str "Image: " image))
              (dom/p nil (str "Image position: " (name image-position))))))))))

(defcard card-transparent-visual-regressions
  (l/row {}
     (for [color [:neutral :primary :accent]
           actions ["" (e/ui-flat-button {:color :primary} "Action")]]
       (l/col {:width 6 :key (str color actions (rand-int 256))}
         (e/ui-card {:type :transparent :title "Card Test" :color color :actions actions}
          (dom/div nil
            (dom/p nil (str "Color: " (name color)))))))


     (l/row {}
       (for [image          ["img/bubbles.png" "img/welcome_card.jpg"]
             image-position [:top-left :top-right :bottom-left :bottom-right]]
         (l/col {:width 6 :key (str image image-position (rand-int 256))}
           (e/ui-card {:type :transparent :title "Card Test" :color :primary :image image :image-position image-position}
            (dom/div nil
              (dom/p nil (str "Image: " image))
              (dom/p nil (str "Image position: " (name image-position))))))))))

(defcard card-square-visual-regressions
  (l/row {}
    (for [size [:normal :expand :wide]]
      (l/col {:width 6 :key (str size (rand-int 256))}
        (e/ui-card {:type :square :title "Card Test" :size size}
          (dom/div nil
            (dom/p nil (str "Size: " (name size)))))))))


(defcard labels-visual-regressions
  (dom/div nil
    (for [color [:none :primary :accent]
          icon ["" (icon :add)]]
      (e/ui-label {:color color :key (str color icon (rand-int 256))} icon "Default"))))

(defcard field-visual-regressions
  (dom/div nil
    (for [size [:normal :small :medium :large]
          state [:none :required :focus :invalid :error]]
     (e/ui-field {:size size :state #{state} :key (str size state (rand-int 256))} (str (name size) " " (name state) " field")))))

(defcard messages-visual-regressions
  (dom/div nil
    (for [color [:none :neutral :alert :success :warning]
          class ["" "u-font-size--semi-medium"]]
      (e/ui-message {:color color :className class :key (str "messages-" (name color) (name class))}
        (str "This is a " (name color) " message.")))
    (e/ui-message {}
      (str "This is a message with an icon.") (e/ui-icon {:size :small :glyph :arrow_forward}))))

(defcard avatar-visual-regressions
  (dom/div nil
    (for [color [:none :primary :accent]
         style [:none :bordered]
         size  [:regular :medium :large :xlarge :huge]]
     (dom/span #js {:key (str "id" color style size)}
       (e/ui-avatar {:color color :style style :size size} "AV")
       (e/ui-avatar {:color color :style style :size size} (icon :supervisor_account))))))

(defcard loader-visual-regressions
  (l/row {}
    (l/col {:width 4}
      (e/ui-loader {}))
    (l/col {:width 4}
      (e/ui-loader {:color :primary}))
    (l/col {:width 4}
      (e/ui-loader {:color :accent}))))


(defcard icon-colors-visual-regressions
  (dom/div nil
    (e/ui-icon {} (icon :alarm))
    (e/ui-icon {:color :neutral} (icon :alarm))
    (e/ui-icon {:color :positive} (icon :alarm))
    (e/ui-icon {:color :informative} (icon :alarm))
    (e/ui-icon {:color :live} (icon :alarm))
    (e/ui-icon {:color :alterable} (icon :alarm))
    (e/ui-icon {:color :negative} (icon :alarm))))

(defcard icon-sizes-visual-regressions
  (dom/div nil
    (e/ui-icon {:size :small} (icon :alarm))
    (e/ui-icon {} (icon :alarm))
    (e/ui-icon {:size :medium} (icon :alarm))
    (e/ui-icon {:size :large} (icon :alarm))
    (e/ui-icon {:size :xlarge} (icon :alarm))
    (e/ui-icon {:size :huge} (icon :alarm))))

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


(defcard checkbox
  (dom/div nil
    (e/ui-checkbox {:id "checkbox-1"})
    (e/ui-checkbox {:id "checkbox-2" :disabled true})
    (e/ui-checkbox {:id "checkbox-3" :style :indeterminate})
    (e/ui-checkbox {:id "checkbox-4" :style :indeterminate :disabled true})))


(defcard modal
  (dom/div nil
    (e/ui-iframe {:height "200" :width "100%"}
     (dom/div #js {}
       (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})
       (e/ui-modal {:active true}
         (e/ui-modal-title {} "Informative")
         (e/ui-modal-body {} "You have been notified.")
         (e/ui-modal-actions {}
           (e/ui-flat-button {:color :primary} "Cancel")
           (e/ui-flat-button {:color :primary} "Ok")))))

    (e/ui-iframe {:height "200" :width "100%"}
     (dom/div #js {}
       (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})
       (e/ui-modal {:active true}
         (e/ui-modal-title {} "Informative")
         (e/ui-modal-body {} "You have been notified.")
         (e/ui-modal-actions {}
           (e/ui-flat-button {:color :primary} "Cancel")
           (e/ui-flat-button {:color :primary} "Ok")))))))
