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
          kind  [:none :bordered]
          size  [:regular :medium :large :xlarge :huge]
          dark  [false true]]
      (dom/div #js {:className (if dark "t-dark" "") :style #js {:display "inline-block"} :key (str "id-" color kind size dark)}
        (e/ui-avatar {:color color :kind kind :size size} "AV")
        (e/ui-avatar {:color color :kind kind :size size} (icon :supervisor_account))
        ))))


(defcard badges-visual-regressions
  (dom/div nil
    (for [color [:none :primary :accent]
          dark [false true]]
     (dom/div #js {:className (if dark "t-dark" "") :style #js {:display "inline-block"} :key (str "badge-" color dark)}
       (e/ui-button {:color color} "Notifications " (e/ui-badge {} "8"))
       (e/ui-badge {:color color :className "hello"} "7")
       (e/ui-badge {:color color} (icon :arrow_back))
       (e/ui-badge {:color color} (icon :arrow_back) (icon :arrow_forward))
       )))
  )


(defcard buttons-visual-regression-testing
  (dom/div nil
    (for [shape    [:rect :round :wide]
          color    [:neutral :primary :accent]
          size     [:normal :small]
          disabled [false true]
          active   [false true]
          dark     [false true]]
      (dom/span #js {:className (if dark "t-dark" "") :style #js {:display "inline-block"} :key (str "btn-" shape color size disabled active dark)}
        (e/ui-button {:className "extra" :color color :active active :disabled disabled
                     :shape     shape :size size}
         (str shape " " color " " size " " (when disabled "disabled ") (when active "active ")))))
    (e/ui-button {} "Label" (icon :arrow_forward))
    (e/ui-button {} (icon :arrow_back) "Label")
    (dom/div #js {:className "t-dark"}
      (e/ui-button {} "Label" (icon :arrow_forward))
      (e/ui-button {} (icon :arrow_back) "Label"))))

(defcard flat-buttons-visual-regression-testing
  (dom/div nil
    (for [shape    [:rect :round :wide]
          color    [:neutral :primary :accent]
          size     [:normal :small]
          disabled [false true]
          active   [false true]
          dark     [false true]]
      (dom/span #js {:className (if dark "t-dark" "") :style #js {:display "inline-block"}  :key (str "btn-flat-" shape color size disabled active dark)}
        (e/ui-flat-button {:className "extra" :color color :active active :disabled disabled
                          :shape     shape :size size}
         (str shape " " color " " size " " (when disabled "disabled ") (when active "active ")))))
    (e/ui-flat-button {} "Label" (icon :arrow_forward))
    (e/ui-flat-button {} (icon :arrow_back) "Label")
    (dom/div #js {:className "t-dark"}
      (e/ui-flat-button {} "Label" (icon :arrow_forward))
      (e/ui-flat-button {} (icon :arrow_back) "Label"))))

(defcard circular-buttons-visual-regression-testing
  (dom/div nil
    (for [color    [:neutral :primary :accent]
          size     [:normal :small]
          disabled [false true]
          active   [false true]
          dark     [false true]]
      (dom/span #js {:className (if dark "t-dark" "") :style #js {:display "inline-block"} :key (str "btn-circular-" color size disabled active dark)}
        (e/ui-circular-button {:className "extra" :color color :active active :disabled disabled
                              :title     (str (name color) " " (name size) " " (when disabled "disabled ") (when active "active "))
                              :size      size}
         (icon :add))))))

(defcard checkbox-visual-regressions
  (dom/div nil
    (for [checked  [false true :partial]
          dark     [false true]
          disabled [false true]]
      (dom/div #js {:className (if dark "t-dark" "") :style #js {:display "inline-block"} :key (str "id-" checked dark disabled)}
        (e/ui-checkbox {:id (str "id-" checked dark disabled) :checked checked :disabled disabled})))))


(defcard empty-state-visual-regressions
  (dom/div nil
    (dom/h1 nil "Nothing specified")
    (e/ui-iframe {:width "100%" :height "400px"}
      (dom/div nil
        (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})
        (e/ui-empty-state {})))

    (e/ui-iframe {:width "100%" :height "400px"}
      (dom/div #js {:className "t-dark" :style #js {:height "100%"}}
        (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})
        (e/ui-empty-state {})))

    (dom/h1 nil "Custom specification")
    (e/ui-iframe {:width "100%" :height "400px"}
      (dom/div nil
        (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})
        (e/ui-empty-state {:glyph :widgets :title "No widgets yet" :message "Create a widget to get started"})))

    (e/ui-iframe {:width "100%" :height "400px"}
      (dom/div #js {:className "t-dark" :style #js {:height "100%"}}
        (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})
        (e/ui-empty-state {:glyph :widgets :title "No widgets yet" :message "Create a widget to get started"}))))
  )

(defcard field-visual-regressions
  (dom/div nil
    (for [size   [:normal :small :medium :large]
          states [:valid :invalid :error]
          dark   [false true]]
      (dom/div #js {:className (when dark "t-dark") :style #js {:display "inline-block"} :key (str "field-" size states dark (rand-int 256))}
        (e/ui-field {:size size :state states} (str (name size) " " (name states) " field"))))))


(defcard icon-colors-visual-regressions
  (dom/div nil
    (for [color [:none :active :passive]
          size  [:normal :huge]
          dark  [false true]]
      (dom/div #js {:className (when dark "t-dark") :style #js {:display "inline-block"} :key (str "icon-" color size dark)}
        (e/ui-icon {:color color :size size} (icon :alarm))))))


(defcard icon-sizes-visual-regressions
  (dom/div nil
    (for [size [:small :normal :medium :large :xlarge :huge]
         dark [false true]]
     (dom/div #js {:className (when dark "t-dark") :style #js {:display "inline-block"} :key (str "icon-" size dark)}
       (e/ui-icon {:size size} (icon :alarm))))))


(defcard icon-bar-visual-regressions
  (dom/div nil
    (for [shifting    [false true]
          orientation [:horizontal :vertical]
          dark        [false true]]
     (dom/div #js {:className (when dark "t-dark") :key (str "iconbar-" shifting orientation dark)}
       (e/ui-icon-bar {:shifting shifting :orientation orientation}
         (e/ui-icon-bar-item {:glyph :home :label "Home" :active true})
         (e/ui-icon-bar-item {:glyph :description :label "Docs" :color :passive})
         (e/ui-icon-bar-item {:glyph :feedback :label "Support"}))
       (dom/br nil)
       ))))

(defcard labels-visual-regressions
  (dom/div nil
    (for [color [:none :primary :accent]
          icon  ["" (icon :add)]
          dark  [false true]]
      (dom/div #js {:className (when dark "t-dark")
                    :style #js {:display "inline-block"}
                    :key (str "label-" color icon (rand-int 256))}
        (e/ui-label {:color color} icon "Default")))))


(defcard loader-visual-regressions
  (dom/div nil
  (l/row {}
    (l/col {:width 4 :halign :center}
      (e/ui-loader {}))
    (l/col {:width 4 :halign :center}
      (e/ui-loader {:color :primary}))
    (l/col {:width 4 :halign :center}
      (e/ui-loader {:color :accent})))
  (l/row {:className "t-dark"}
     (l/col {:width 4 :halign :center}
       (e/ui-loader {}))
     (l/col {:width 4 :halign :center}
       (e/ui-loader {:color :primary}))
     (l/col {:width 4 :halign :center}
       (e/ui-loader {:color :accent})))))


(defcard messages-visual-regressions
  (dom/div nil
    (for [color [:none :primary :accent]
          size  [:normal :medium]
          icon  [false true]
          dark  [false true]]
      (dom/div #js {:className (when dark "t-dark") :key (str "messages-" color size icon dark)}
        (e/ui-message {:color     color
                      :className (when (= size :medium) "u-font-size--semi-medium")}
         (str "This is a " (name color) " message.")
          (when icon (e/ui-icon {:size (when (= size :normal) :small) :glyph :arrow_forward})))))))


(defcard modal-visual-regressions
  (dom/div nil
    (for [modal [false true]
          dark  [false true]]
     (dom/div #js {:key (str "dialog-" modal dark)}
       (e/ui-iframe {:height "200" :width "100%"}
         (dom/div #js {:className (when dark "t-dark") :style #js {:height "100%"}}
           (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})
           (e/ui-dialog {:visible true :modal modal}
             (e/ui-dialog-title {} "Informative")
             (e/ui-dialog-body {} "You have been notified.")
             (e/ui-dialog-actions {}
               (e/ui-flat-button {:color :primary} "Cancel")
               (e/ui-flat-button {:color :primary} "Ok")))))))))


(defcard notifications-visual-regressions
  (dom/div nil
    (for [kind [:normal :informative :success :warning :error]
          width [:normal :wide]
          dark  [false true]]
      (dom/div #js {:className (when dark "t-dark") :key (str "id-" kind width dark)}
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
      (dom/div nil
        (e/ui-progress {:max "100" :value value :size size :className "u-trailer--half" :key (str "id-" value size)})
        ))
    (dom/div #js {:className "t-dark"}
      (for [value [0 25 50 75 100]
           size  [:regular :dense]]
        (e/ui-progress {:max "100" :value value :size size :className "u-trailer--half" :key (str "id-" value size)})))))


(defcard radio-visual-regressions
  (dom/div nil
    (for [checked  [false true]
         disabled [false true]
         dark     [false true]]
     (dom/div #js {:className (when dark "t-dark") :key (str "radio-" checked disabled dark) :style #js {:display "inline-block"}}
       (e/ui-radio {:id "radio-1" :checked checked :disabled disabled})))))


(defcard switch-visual-regressions
  (dom/div nil
    (for [checked  [false true]
         disabled [false true]
         dark     [false true]]
     (dom/div #js {:className (when dark "t-dark") :key (str "switch-" checked disabled dark) :style #js {:display "inline-block"}}
       (e/ui-switch {:checked checked :id "switch-1" :disabled disabled})))))


(defcard tab-visual-regressions
  (dom/div nil
    (e/ui-tabs {}
      (e/ui-tab {:label "Home" :active true})
      (e/ui-tab {:label "Docs"})
      (e/ui-tab {:label "Support"}))

    (e/ui-tabs {}
      (e/ui-tab {:label "Home" :active true :kind :primary})
      (e/ui-tab {:label "Docs" :kind :primary})
      (e/ui-tab {:label "Support" :kind :primary}))

    (dom/div #js {:className "t-dark"}
      (e/ui-tabs {}
        (e/ui-tab {:label "Home" :active true})
        (e/ui-tab {:label "Docs"})
        (e/ui-tab {:label "Support"})))))

(defcard toolbar
  (dom/div nil
    (for [kind [:regular :primary :dark]
          raised [false true]
          row-size [:normal :dense]]
      (e/ui-toolbar {:kind kind :raised raised :key (str "id-" kind raised row-size) :className "u-trailer"}
          (e/ui-toolbar-row {:size row-size}
           "Now Playing"
           (e/ui-toolbar-spacer {})
           (dom/span #js {:className "c-toolbar__actions"}
             (e/ui-icon-button {:glyph :search :title "Search"})
             (e/ui-icon-button {:glyph :filter_list :title "Filter"})
             (e/ui-icon-button {:glyph :sort :title "Sort by"}))
           (e/ui-toolbar-button {}))
          (e/ui-toolbar-row {:size row-size}
            (e/ui-tabs {}
              (e/ui-tab {:label "Movies" :active true})
              (e/ui-tab {:label "TV Shows"})
              (e/ui-tab {:label "Podcasts"})
              ))
       ))

    ))
