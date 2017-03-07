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
                    :shape     shape :size size :key (str shape color size disabled active (rand-int 256))}
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
                         :shape     shape :size size  :key (str shape color size disabled active (rand-int 256))}
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
                             :size      size  :key (str color size disabled active (rand-int 256))}
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
    (for [color [:none :green :blue :magenta :grey :yellow :orange :red]
          icon ["" (icon :add) (icon :close)]]
      (e/ui-label {:color color :key (str color icon (rand-int 256))} icon "Default"))))

(defcard field-visual-regressions
  (dom/div nil
    (for [size [:normal :small :medium :large]
          state [:none :required :focus :invalid :error]]
     (e/ui-field {:size size :state #{state} :key (str size state (rand-int 256))} (str (name size) " " (name state) " field")))))

(defcard messages-visual-regressions
  (dom/div nil
    (for [color [:none :neutral :alert :success :warning]
          class ["" "u-font-size--semi-medium"]
          icon  ["" (icon :close :modifiers ["small"]) (icon :close)]]
      (e/ui-message {:color color :className class :key (str color class icon (rand-int 256))}
        (str "This is a " (name color) " message"(when-not (str/blank? icon) (str " with an icon"))".") icon))))

(defcard avatar-visual-regressions
  (dom/div nil
    (for [color [:none :primary :accent]
          style [:none :bordered]
          size  [:regular :medium :large :xlarge :huge]
          content ["AV" (icon :supervisor_account)]]
      (dom/span nil
        (e/ui-avatar {:color color :style style :size size :key (str color style size content)} content) "\u00A0"))))

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
      (dom/div nil
        (e/ui-notification {:kind kind :key (str kind width) :width width}
         ;; TODO Warning key prop needed on NotificationTitle but simply setting one doesn't suppress the error.
         (e/ui-notification-title {:key (str "nvr-title-" kind width)} (str (when (= width :wide) (str/capitalize (name width))) " " (str/capitalize (name kind))))
         (e/ui-notification-body {} "Your message here..."))
        (dom/p nil " ")))))

(defcard checkbox
   (dom/div nil
    (e/ui-checkbox {:id "checkbox"} )
    (e/ui-checkbox {:id "checkbox" :style #{:is-indeterminate}} )
    (e/ui-checkbox {:id "checkbox" :style #{:c-checkbox--informative}} )
    (e/ui-checkbox {:id "checkbox" :style #{:is-indeterminate :c-checkbox--informative}} )))


(defcard modals
  (dom/div #js {:style #js {:height "200px"}}
    (e/ui-modal {:active :true}
      (e/ui-modal-title {} "Informative")
      (e/ui-modal-body {} "You have been notified.")
      (e/ui-modal-actions {}
        (e/ui-flat-button {:color :primary} "Cancel")
        (e/ui-flat-button {:color :primary} "Ok")))))
