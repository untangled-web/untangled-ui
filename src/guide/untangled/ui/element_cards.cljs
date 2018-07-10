(ns untangled.ui.element-cards
  (:require
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [untangled.ui.sample-card :refer [defsample]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [untangled.client.cards :refer [untangled-app]]
    [untangled.i18n.core :as i18n]
    [untangled.client.core :as uc]
    [untangled.ui.layout :as layout]
    [untangled.icons :refer [icon]]
    [untangled.ui.elements :as e]
    [untangled.client.mutations :as m]))

(defsample avatar
  "# Avatars

  Use `ui-avatar` to render a single child within an avatar (typically an icon, an image or a string).

  Some samples are shown below:
  "
  (dom/div nil
    (e/ui-avatar {} "AV")
    (e/ui-avatar {:kind :bordered} "BR")
    (e/ui-avatar {:color :primary} "PC")
    (e/ui-avatar {:color :primary :kind :bordered} "PB")
    (e/ui-avatar {:color :accent} "AC")
    (e/ui-avatar {:color :accent :kind :bordered} "AB")
    (e/ui-avatar {:size :medium} "MD")
    (e/ui-avatar {:size :large} "LG")
    (e/ui-avatar {:size :xlarge} "XL")
    (e/ui-avatar {:size :huge} "HU")
    ;TODO: Add an image example
    (e/ui-avatar {} (icon :supervisor_account))))


(defsample badge
  "# Badges

  Use `ui-badge` to render children within a badge. Common children include text and icons.

  Some samples are shown below:
  "
  (dom/div nil
    (dom/div #js {:style #js {:marginTop "10px"}} "A plain badge: " (e/ui-badge {} "6"))
    (dom/div #js {:style #js {:marginTop "10px"}} "A button with a badge: " (e/ui-button {:color :primary}
                                                                              "Inbox " (e/ui-badge {} "6")))))



(defsample button
  "# Buttons

  Use `ui-button` to render buttons of various styles/shapes. See the docstring of the function for available options. The
  children of button can be anything, but common combinations include text and icons. See `untangled.icons`.

  Some samples are shown below:
  "
  (dom/div nil
    (e/ui-button {} "Default Look")
    (e/ui-button {} (icon :arrow_back) "With an icon")
    (e/ui-button {:color :primary} "Primary look")
    (e/ui-button {:color :accent :shape :wide} "Wide Accent")
    (e/ui-flat-button {} "Flat Look")
    (e/ui-flat-button {} (icon :arrow_back) "With an icon")
    (e/ui-flat-button {:color :accent :shape :wide} "Wide Accent")
    (e/ui-circular-button {} (icon :arrow_back))
    (e/ui-circular-button {:size :small} (icon :arrow_back))
    ))

(defcard checkbox
  "# Checkboxes

  These render a normal HTML checkbox input, but allow a partial select rendering (which is still internally held
  as `true`). In other words, you will need to model the partial as your own state external from the control,
  but it is also 100% compatible with a normal HTML checkbox input.

  ```
    (dom/div nil
    (e/ui-checkbox {:checked current-state :id \"checkbox-5\"
                    :onClick #(move-to-next-state)})
    (dom/label #js {:className \"is-optional\"} \"With a label!\"))
  ```
  "
  (fn [state _]
    (let [current-state      (:checked @state)
          states             (take 4 (cycle [false true :partial]))
          next-state         (->> states
                               (drop-while #(not= current-state %))
                               second)
          move-to-next-state (fn [] (swap! state assoc :checked next-state))]
      (dom/div nil
        (dom/label #js {:className "is-optional"}
                   (e/ui-checkbox {:checked current-state :id "checkbox-5" :onClick #(move-to-next-state)})
                   "With a label!"))))
  {:checked false}
  {:inspect-data true})


(defcard dialog-modal
  "# Modal Dialogs

  Use `ui-dialog` has a modal option. The backdrop gives an extra area from which you can recieve `onClose` events
  to tell you the dialog wants to close (you still have to change the visible property, since this is a stateless
  rendering).

  ```
  (e/ui-button {:onClick #(show-dialog)} \"Show Dialog\")
  (dom/div #js {}
    (e/ui-dialog {:open is-open :modal true :onClose #(hide-dialog)}
      (e/ui-dialog-title {} \"Informative\")
      (e/ui-dialog-body {} \"You have been notified.\")
      (e/ui-dialog-actions {}
        (e/ui-flat-button {:color :primary} \"Cancel\")
        (e/ui-flat-button {:color :primary :onClick #(hide-dialog)} \"Ok\"))))
  ```
  "
  (fn [state _]
    (let [show-dialog (fn [] (swap! state assoc :open true))
          hide-dialog (fn [] (swap! state assoc :open false))
          is-open  (:open @state)]
        (dom/div nil
          (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})

          (dom/div #js {:aria-hidden (not (:open @state))} (e/ui-button {:onClick #(show-dialog)} "Open Simple Dialog"))

          (e/ui-dialog {:open is-open
                        ; :hideBackdrop true
                        :onClose #(hide-dialog)}
                (e/ui-dialog-title {} "Informative")
                (e/ui-dialog-body {} "You have been notified.")
                (e/ui-dialog-actions {}
                    (e/ui-flat-button {:color :primary :onClick #(hide-dialog)} "Ok"))))))
  {:open false}
  {:inspect-data true})

(defcard empty-state
  "# Empty State

  Render an icon and text for when you can't display anything when you normally would have a collection of things.

  ```
  (e/ui-empty-state {:glyph :widgets :title \"No widgets yet\" :message \"Create a widget to get started\"})
  ```
  "

  (e/ui-iframe {:width "100%" :height "400px"}
    (dom/div nil
      (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})
      (e/ui-empty-state {:glyph :widgets :title "No widgets yet" :message "Create a widget to get started"})))
  {:visible false})

(defsample fader
  "# Fader

  Use `ui-fader` to control the visibilty of children when you want a fade in/out CSS animation to be triggered. The
  length of the animation is configurable when you generate your application-specific CSS via the PostCSS variable
  `--global-duration`"
  (fn [state-atom _]
    (let [{:keys [visible?]} @state-atom]
      (dom/div nil
        (e/ui-button {:onClick #(swap! state-atom update :visible? not)} (if visible? "Fade Out" "Fade In"))
        (e/ui-fader {:visible visible?}
          (dom/div nil "Child")
          (dom/div nil "Content"))))))

(defsample field-kinds
  "# Field Kinds

  Use `ui-field` to render a field with optional sizes and provide placeholder text.  Also supports custom classes.
  "
  (dom/div nil
    (mapv (fn [kinds] (e/ui-field {:id (str "input-" kinds) :label (when-not (= kinds :full-width) (name kinds)) :helper "Helper text" :placeholder "Placeholder text" :kind kinds :key (str "ui-" kinds)} (name kinds)))
      [:single-line :multi-line :full-width])))

(defsample field-sizes
  "# Field Sizes

  Use `ui-field` to render a field with optional sizes and provide placeholder text.  Also supports custom classes.
  "
  (dom/div nil
    (mapv (fn [sizes] (e/ui-field {:id (str "input-" sizes) :label (name sizes) :placeholder "Placeholder text" :size sizes :key (str "ui-" sizes)} (name sizes)))
      [:regular :dense :large])))

(defsample field-states
  "# Field States

  Use `ui-field` to render a field with optional states and provide placeholder text.  Also supports custom classes.
  "
  (dom/div nil
    (mapv (fn [states] (e/ui-field {:id (str "input-" states) :label (name states) :placeholder "Placeholder text" :state states :action :visibility :key (str "ui-" states)} (name states)))
      [:valid :invalid])
    (e/ui-field {:id "required" :required true :label "required"} "")))

(defsample field-types
  "# Field Types

  Use `ui-field` to render a field of optional types and provide placeholder text.  Also supports custom classes.
  "
  (dom/div nil
    (mapv (fn [type] (e/ui-field {:id (str "input-" type) :label (name type) :placeholder "Placeholder text" :type type :key (str "ui-" type)} (name type)))
      [:text :password :date :datetime :datetime-local :month :week :email :number :search :tel :time :url :color])))

(defsample icon-colors
  "# Icon Colors

  Use `ui-icon` to render an icon with designated color attributes.

  Some samples are shown below:
  "
  (dom/div nil
    (e/ui-icon {:color :passive} (icon :alarm))
    (e/ui-icon {:color :active} (icon :alarm))))

(defsample icon-sizes
  "# Icon Sizes

  Use `ui-icon` to render an icon with designated size attributes.

  Some samples are shown below:
  "
  (dom/div nil
    (e/ui-icon {} (icon :alarm))
    (e/ui-icon {:size :small} (icon :alarm))
    (e/ui-icon {:size :medium} (icon :alarm))
    (e/ui-icon {:size :large} (icon :alarm))
    (e/ui-icon {:size :xlarge} (icon :alarm))
    (e/ui-icon {:size :huge} (icon :alarm))))

(defsample icon-bar
  "# Icon Bar

  Renders icons on a horizontal or vertical bar.
  "
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

(defsample label
  "# Labels

  Use `ui-label` to render children within a label. Common children include text and icons.

  Some samples are shown below:
  "
  (dom/div nil
    (for [colors [:default :primary :accent]
          icons  [:none :close]]
      (e/ui-label {:color colors :key (str "id-" colors icons)}
        (name colors)
        (icon icons)))))

(defsample loader
  "# Loaders

  Use `ui-loader` to render a loading graphic.

  Some samples are shown below:
  "
  (dom/div #js {:style #js {:height "50px"}}
    (e/ui-loader {})
    (e/ui-loader {:color :primary})
    (e/ui-loader {:color :accent})))

(defsample message
  "# Messages

  Use `ui-message` to render children within a message. Common children include text and icons.

  Some samples are shown below:
  "
  (dom/div nil
    (mapv (fn [colors] (e/ui-message {:color colors :key (str "id-" colors)} (str "This is a " (name colors) " message")))
      [:default :primary :accent])
    (e/ui-message {:color :warning} "This is a warning message with another child." (e/ui-icon {:glyph :arrow_forward :size :small}))))


(defsample notifications
  "# Notifications

  Use `ui-notification` to render a notification of designated kind and with.

  Some samples are shown below:"
  (dom/div nil
    (e/ui-notification {:kind :informative}
      (e/ui-notification-title {} "Informative")
      (e/ui-notification-body {} "You have been notified."))
    (dom/br nil)
    (e/ui-notification {:kind :success}
      (e/ui-notification-title {} "Success")
      (e/ui-notification-body {} "You did it!  You're awesome."))
    (dom/br nil)
    (e/ui-notification {:kind :warning}
      (e/ui-notification-title {} "Warning")
      (e/ui-notification-body {} "You have been warned."))
    (dom/br nil)
    (e/ui-notification {:kind :error}
      (e/ui-notification-title {} "Error")
      (e/ui-notification-body {} "There has been an error."))
    (dom/br nil)
    (e/ui-notification {:width :wide}
      (e/ui-notification-body {} "This is a wide message.")
      (e/ui-notification-title {} "Width"))))


(defsample progress
  "# Progress"
  (dom/div nil
    (e/ui-progress {})
    (dom/p nil " ")
    (e/ui-progress {:max "100" :value "70"})
    (dom/p nil " ")
    (e/ui-progress {:max "100" :value "50" :size :dense})))

(defcard radio
  "# Radio buttons

  Radio buttons render normal react controls for a radio button input with correct DOM. You may optionally
  provide a label, as you would expect.

  ```
  (dom/div nil
    (e/ui-radio {:id \"radio-1\" :onClick #(choose 1) :checked (= choice 1)})
    (dom/div nil
      (e/ui-radio {:id \"radio-2\" :onClick #(choose 2) :checked (= choice 2)})
      (dom/label #js {:className \"is-optional\" :htmlFor \"radio-2\"} \"With bel!\"))
    (e/ui-radio {:id \"radio-3\" :onClick #(choose 3) :checked (= choice 3)
                 :disabled true})
    (dom/div nil
      (e/ui-radio {:id \"radio-4\" :onClick #(choose 4) :checked (= choice 4)
                   :disabled true})
      (dom/label #js {:className \"is-optional\" :htmlFor \"radio-4\"
                      :disabled true} \"With a label!\")))
  ```
  "
  (fn [state _]
    (let [choose (fn [v] (swap! state assoc :choice v))
          choice (:choice @state)]
      (dom/div nil
        (e/ui-radio {:id "radio-1" :onClick #(choose 1) :checked (= choice 1)})
        (dom/div nil
          (e/ui-radio {:id "radio-2" :onClick #(choose 2) :checked (= choice 2)})
          (dom/label #js {:className "is-optional" :htmlFor "radio-2"} "With a label!"))
        (e/ui-radio {:id "radio-3" :onClick #(choose 3) :checked (= choice 3) :disabled true})
        (dom/div nil
          (e/ui-radio {:id "radio-4" :onClick #(choose 4) :checked (= choice 4) :disabled true})
          (dom/label #js {:className "is-optional" :htmlFor "radio-4" :disabled true} "With a label!")))))
  {:choice 1}
  {:inspect-data true})


(defcard switch
  "# Switch

  These render a switch input which is just a stylized checkbox.

  ```
    (dom/div nil
    (e/ui-switch {:checked current-state :id \"switch-1\"
                  :onClick #(move-to-next-state)})
    (dom/label #js {:className \"is-optional\"} \"With a label!\"))
  ```
  "
  (fn [state _]
    (let [current-state      (:checked @state)
          states             (take 4 (cycle [false true]))
          next-state         (->> states
                               (drop-while #(not= current-state %))
                               second)
          move-to-next-state (fn [] (swap! state assoc :checked next-state))]
      (dom/div nil
        (e/ui-switch {:checked current-state :id "switch-1" :onClick #(move-to-next-state)})
        (dom/label #js {:className "is-optional" :htmlFor "switch-1"} "With a label!"))))
  {:checked false}
  {:inspect-data true})

(defsample tabs
  "# Tabs

  Renders tabs with text inside a tabs container.
  "
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

(defsample toolbar
  "# Toolbars

  Renders labels and actions inside a toolbar container
  "

  (dom/div nil
    (e/ui-toolbar {:kind :dark :raised true}
      (e/ui-toolbar-row {}
        "Movies"
        (e/ui-toolbar-spacer {})
        (dom/span nil
          (e/ui-icon-button {:glyph :search :label "Search movies"})
          (e/ui-icon-button {:glyph :filter_list :label "Filter movies"})
          (e/ui-icon-button {:glyph :sort :label "Sort by"}))
        (e/ui-toolbar-button {:glyph :arrow_back :title "Go back home"}))
      (e/ui-toolbar-row {:size :dense}
        (e/ui-tabs {}
          (e/ui-tab {:label "Genres" :active true :kind :contrast})
          (e/ui-tab {:label "Actors" :kind :contrast})
          (e/ui-tab {:label "Directors" :kind :contrast})))
      )))
