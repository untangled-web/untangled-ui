(ns untangled.ui.element-cards
  (:require
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [untangled.client.cards :refer [untangled-app]]
    [untangled.i18n.core :as i18n]
    [untangled.client.core :as uc]
    [untangled.icons :refer [icon]]
    [untangled.ui.calendar :as c]
    [untangled.ui.elements :as e]
    [untangled.client.mutations :as m]))

(defcard fader
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

(defcard button
  "# Buttons

  Use `ui-button` to render buttons of various styles/shapes. See the docstring of the function for available options. The
  children of button can be anything, but common combinations include text and icons. See `untangled.icons`.

  Some samples are shown below:
  "
  (dom/div nil
    (dom/div #js {:style #js {:marginTop "10px"}} (e/ui-button {} "Default Look"))
    (dom/div #js {:style #js {:marginTop "10px"}} (e/ui-button {} (icon :arrow_back) "With an icon"))
    (dom/div #js {:style #js {:marginTop "10px"}} (e/ui-button {:color :secondary :shape :wide} "Wide Secondary"))))

(defcard badge
  "# Badges

  Use `ui-badge` to render children within a badge. Common children include text and icons.

  Some samples are shown below:
  "
  (dom/div nil
    (dom/div #js {:style #js {:marginTop "10px"}} "A plain badge: " (e/ui-badge {} "6"))
    (dom/div #js {:style #js {:marginTop "10px"}} "A button with a badge: " (e/ui-button {}
                                                                              "Inbox " (e/ui-badge {} "6")))))

(defcard label
  "# Labels

  Use `ui-label` to render children within a label. Common children include text and icons.

  Some samples are shown below:
  "
  (dom/div nil
    (e/ui-label {} "Default")
    (e/ui-label {:color :green} "Green")
    (e/ui-label {:color :blue} "Blue")
    (e/ui-label {:color :magenta} "Magenta")
    (e/ui-label {:color :grey} "Grey")
    (e/ui-label {:color :yellow} "Yellow")
    (e/ui-label {:color :orange} "Orange")
    (e/ui-label {:color :red} "Red")
    (e/ui-label {:color :green} (icon :add) "Add")
    (e/ui-label {:color :red} (icon :close) "Remove")))

(defcard field
  "# Fields

  Use `ui-field` to render a field. Optionally set the size, state identifiers and provide placeholder text.  Also supports custom classes.
  "
  (dom/div nil
    (e/ui-field {} "Default field")
    (e/ui-field {:size :small :state #{:required}} "Small required field")
    (e/ui-field {:size :medium :state #{:focus}} "Medium focused field")
    (e/ui-field {:size :large :state #{:invalid}} "Large invalid field")
    (e/ui-field {:state #{:error}} "Error field")))

(defcard message
  "# Messages

  Use `ui-message` to render children within a message. Common children include text and icons.

  Some samples are shown below:
  "
  (dom/div nil
    (e/ui-message {} "This is default message.")
    (e/ui-message {:color :neutral} "This is neutral message.")
    (e/ui-message {:color :alert} "This is an alert message.")
    (e/ui-message {:color :success} "This is a success message.")
    (e/ui-message {:color :warning} "This is a warning message.")
    (e/ui-message {:color :warning} "This is a warning message with another child." (icon :arrow_forward))
    (e/ui-message {:className "h2"} "This is message using a standard H2 class name.")))

(defcard avatar
         "# Avatars

         Use `ui-avatar` to render a single child within an avatar (typically an icon, an image or a string).

         Some samples are shown below:
         "
         (dom/div nil
                  (e/ui-avatar {:color :primary} "PC")
                  (e/ui-avatar {:color :accent} "AC")
                  (e/ui-avatar {:size :huge} "HU")
                  ;TODO: Add an image example
                  (e/ui-avatar {} (icon :supervisor_account))))

(defcard loader
         "# Loaders

         Use `ui-loader` to render a loading graphic.

         Some samples are shown below:
         "
         (dom/div #js {:style #js {:height 50}}
                  (e/ui-loader {})
                  (e/ui-loader {:color :neutral})))


(defcard icon-colors
         "# Icons

         Use `ui-icon` to render an icon with designated color attributes.

         Some samples are shown below:
         "
         (dom/div nil
                  (e/ui-icon {} (icon :alarm))
                  (e/ui-icon {:color :neutral} (icon :alarm))
                  (e/ui-icon {:color :positive} (icon :alarm))
                  (e/ui-icon {:color :informative} (icon :alarm))
                  (e/ui-icon {:color :live} (icon :alarm))
                  (e/ui-icon {:color :positive} (icon :alarm))
                  (e/ui-icon {:color :alterable} (icon :alarm))
                  (e/ui-icon {:color :negative} (icon :alarm))))

(defcard icon-sizes
         "# Icons

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

(defcard notifications
         "# Notifications

         Use `ui-notification` to render a notification of designated type and with.

         Some samples are shown below:
         "
         (dom/div nil
                  (e/ui-notification {:heading "Default" :content "The usual message."})
                  (e/ui-notification {:type :informative :heading "Informative" :content "You have been notified."})
                  (e/ui-notification {:type :success :heading "Success" :content "You did it!  You're awesome."})
                  (e/ui-notification {:type :warning :heading "Warning" :content "You have been warned."})
                  (e/ui-notification {:type :error :heading "Error" :content "There has been an error."})
                  (e/ui-notification {:width :wide :heading "Width" :content "This is a wide message."})))
(defcard card
   "# Cards

   Use `ui-card` to render a card. Optionally set the card's title, whether the card is active, its density (inset, collapsed),
   and style type (rounded, transparent, ruled, zone, ruled-zone).

   Some samples are shown below:
   "
   (dom/div nil
      (e/ui-card {:title "Card Title"} (dom/p nil "Card with a title"))
      (e/ui-card {:type :round} (dom/p nil "Round Card, no title"))
      (e/ui-card {:type :transparent :title "Transparent Card Title"} (dom/p nil "Text for Transparent Card"))
      (e/ui-card {:type :ruled :title-bar true :title "Ruled Title"} (dom/p nil "Text for Ruled Card"))
      (e/ui-card {:type :zone} (dom/p nil "Text for Zone Card"))))

(defcard checkbox
     "# Checkboxes

     Use `ui-checkbox` to render a checkbox. Optionally set the checkbox's style (indeterminate, informative).

     Some samples are shown below:
     "
     (dom/div nil
        (e/ui-checkbox {:id "checkbox"} )
        (e/ui-checkbox {:id "checkbox" :style #{:is-indeterminate}} )
        (e/ui-checkbox {:id "checkbox" :style #{:c-checkbox--informative}} )
        (e/ui-checkbox {:id "checkbox" :style #{:is-indeterminate :c-checkbox--informative}} )))
