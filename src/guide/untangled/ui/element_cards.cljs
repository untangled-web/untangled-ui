(ns untangled.ui.element-cards
  (:require-macros [devcards.core :refer [defcard defcard-doc]])
  (:require
    [devcards.core :as dc]
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
    (e/ui-label {:color :positive} "Positive")
    (e/ui-label {:color :informative} "Informative")
    (e/ui-label {:color :informative-alt} "Informative Alt")
    (e/ui-label {:color :neutral} "Neutral")
    (e/ui-label {:color :live} "Live")
    (e/ui-label {:color :alterable} "Alterable")
    (e/ui-label {:color :negative} "Negative")
    (e/ui-label {:color :positive} (icon :add) "Add")
    (e/ui-label {:color :negative} (icon :close) "Remove")))

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

