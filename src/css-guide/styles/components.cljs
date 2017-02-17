(ns styles.components
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react defexample defarticle defview]]
            [untangled.ui.layout :as l]
            [untangled.icons :as icons]
            [om.dom :as dom]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF EXAMPLES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; -------------------------
;; Avatar
;; -------------------------

(def avatar-header
  "# Avatar")

(defexample avatar
  "An avatar is a round symbol to represent a person's identity. When there is no visual, we use the first and last
   initial of their name."
  (l/row {}
    (l/col {:width 1}
      (dom/span #js {:className "c-avatar"} "AV"))
    (l/col {:width 1}
      (dom/span #js {:className "c-avatar"} (icons/icon :help)))
    (l/col {:width 1}
      (dom/span #js {:className "c-avatar c-avatar--support"} "KB"))
    (l/col {:width 1}
      (dom/span #js {:className "c-avatar c-avatar--informative"} (icons/icon :supervisor_account)))
    (l/col {:width 1}
      (dom/span #js {:className "c-avatar c-avatar--huge"} "AV"))))

;; -------------------------
;; Badges
;; -------------------------

(def badge-header
  "# Badge")


(defexample badge
  "### Basic

  You can make a badge from a `span` or `div` element using the `.c-badge` classname."
  (dom/a #js {:href "#"} "Inbox "
         (dom/span #js {:className "c-badge"} 7)))


(defexample badge-button
  "### In a button"
  (dom/p #js {}
    (dom/button #js {:className "c-button"} " Messages "
      (dom/span #js {:className "c-badge"} "37"))))


(defexample badge-icon
  "### Icon, no text"
  (dom/span #js {:className "c-badge c-badge--round"}
    (dom/span #js {:className "c-icon"}
      (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
        (dom/path #js {:d "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42
                           1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03
                           9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87
                           0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"})))))


;; -------------------------
;; Buttons
;; -------------------------

(def button-header
  "# Buttons

     Use these button classes on `<button>` or `<input type='submit'>` element. It's easy to make a new button.")

(defview button
  "### Button types"
  (dom/div #js {:className "u-row u-center"}
    (dom/div #js {:className "u-column"}
      (dom/button #js {:className "c-button c-button--primary c-button--raised"} "Button")
      (dom/div #js {:className "u-font-size--small u-leader"} "Raised button"))
    (dom/div #js {:className "u-column"}
      (dom/button #js {:className "c-button c-button--primary"} "Button")
      (dom/div #js {:className "u-font-size--small u-leader"} "Flat button")
      )))

(defexample button-shape
  "### Size and form

  You can optionally use modifier classes that let you manipulate the size and shape of your button.
  "
  (dom/div #js {}
    (dom/button #js {:className "c-button c-button--raised c-button--primary"} "Regular")
    (dom/button #js {:className "c-button c-button--raised c-button--primary c-button--round"} "Round")
    (dom/button #js {:className "c-button c-button--raised c-button--primary c-button--dense"} "Dense")
    (dom/div #js {:className "u-trailer--quarter"}
      (dom/button #js {:className "c-button c-button--raised c-button--primary c-button--wide"} "Wide"))))


(defexample button-color
  "### Colors

  Stateful color classes are provided to further communicate the intentions of your button action."
  (dom/div #js {}
    (dom/button #js {:className "c-button"} "Flat")
    (dom/button #js {:className "c-button c-button--primary"} "Flat Primary")
    (dom/button #js {:className "c-button c-button--accent"} "Flat Accent")
    (dom/button #js {:className "c-button c-button--raised"} "Raised")
    (dom/button #js {:className "c-button c-button--raised c-button--primary"} "Raised Primary")
    (dom/button #js {:className "c-button c-button--raised c-button--accent"} "Raised Accent")))


(defview button-state
  "### Flat Button States"
  (dom/div #js {:className "u-row u-row--collapsed u-center"}
    (dom/div #js {:className "u-column--12 u-column--6@md"}
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button"} "Normal"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button is-focused"} "Focused"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button is-active"} "Pressed"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:aria-disabled "true" :className "c-button is-disabled"} "Disabled")))

    (dom/div #js {:className "u-column--12 u-column--6@md t-dark" :style #js {:background "#444"}}
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button"} "Normal"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button is-focused"} "Focused"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button is-active"} "Pressed"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:aria-disabled "true" :className "c-button is-disabled"} "Disabled")))))


(defview button-state-raised
  "### Raised Button States"
  (dom/div #js {:className "u-row u-row--collapsed u-center"}
    (dom/div #js {:className "u-column--12 u-column--6@md"}
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button c-button--raised"} "Normal"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button c-button--raised is-focused"} "Focused"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button c-button--raised is-active"} "Pressed"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:aria-disabled "true" :className "c-button c-button--raised is-disabled"} "Disabled"))
      )
    (dom/div #js {:className "u-column--12 u-column--6@md t-dark" :style #js {:background "#444"}}
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button c-button--raised c-button--primary"} "Normal"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button c-button--raised c-button--primary is-focused"} "Focused"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:className "c-button c-button--raised c-button--primary is-active"} "Pressed"))
      (dom/div #js {:className "u-leader u-trailer"} (dom/button #js {:aria-disabled "true" :className "c-button c-button--raised c-button--primary is-disabled"} "Disabled")))))


(defexample button-icon
"### Buttons with icons"
  (dom/div nil
    (dom/button #js {:className "c-button c-button--raised"}
      (icons/icon :arrow_back)
      (dom/span #js {:className "c-button__content"} "Left Icon"))

    (dom/button #js {:className "c-button c-button--raised"}
      (dom/span #js {:className "c-button__content"} "Right Icon")
      (icons/icon :arrow_forward))

    (dom/button #js {:title "Icon Button" :className "c-button c-button--icon"}
      (icons/icon :translate))))



;; -------------------------
;; Card
;; -------------------------

(def card-header
  "# Cards")

(defexample card
  "### Basic"
  (dom/div #js {:className "c-card"}
    (dom/h1 #js {} "Title")
    (dom/p #js {} "Card paragraph text goes here.")))

(defexample card-rounded
  "### Rounded Card"
  (dom/div #js {:className "c-card c-card--round"}
    (dom/h1 #js {} "Title")
    (dom/p #js {} "This is just a monolithic class that rounds off any card you apply it to.")))

(defexample card-transparent
  "### Transparent Card"
  (dom/div #js {:className "c-card c-card--transparent"}
    (dom/h1 #js {} "Title")
    (dom/p #js {} "This gives you the basic box properties without any background color or text color.")))

(defexample card-ruled
  "### Ruled Card"
  (dom/div #js {:className "u-wrapper"}
    (dom/div #js {:className "c-card c-card--ruled"}
      (dom/h1 #js {} "Title")
      (dom/p #js {} "A simple card, horizontal ruled."))))

(defexample card-titlebar
  "### Title Bar"
  (dom/div #js {:className "c-card"}
    (dom/div #js {:className "c-card__title"}
      (dom/h1 #js {:className "c-card__heading"} "Title"))
    (dom/p #js {} "Add these title and heading modifiers to your card to get a titlebar.")))

(defexample card-states
  "### States"
  (dom/div nil
    (dom/div #js {:className "c-card c-card--row is-active u-trailer--half"}
      (dom/h1 #js {} "Active")
      (dom/p #js {} "I could have used lorem ipsum, but what's the fun in that?"))
    (dom/div #js {:className "c-card c-card--row is-inactive"}
      (dom/h1 #js {} "Inactive")
      (dom/p #js {} "I could have used lorem ipsum, but what's the fun in that?"))
    ))

(defexample card-zone
  "### Zone Card"
  (dom/div #js {:className "c-card c-card--zone"} "This is a Card Zone component! Drop things on me!"))


;; -------------------------
;; Checkboxes
;; -------------------------

(def checkbox-header
  "# Checkboxes")

(defexample checkboxes
  "The following examples show the various rendered states of checkboxes."
  (dom/div #js {}
    (dom/input #js {:id "checkbox-1" :type "checkbox" :className "c-checkbox"})
    (dom/label #js {:htmlFor "checkbox-1"} "Checkbox")
    (dom/input #js {:id "checkbox-2" :type "checkbox" :checked true :className "c-checkbox"})
    (dom/label #js {:htmlFor "checkbox-2"} "Checked Checkbox")
    (dom/input #js {:id "checkbox-3" :type "checkbox" :className "c-checkbox is-indeterminate"})
    (dom/label #js {:htmlFor "checkbox-3"} "Indeterminate Checkbox")
    (dom/input #js {:id "checkbox-5" :type "checkbox" :className "c-checkbox c-checkbox--informative"})
    (dom/label #js {:htmlFor "checkbox-5"} "Informative (unchecked) Checkbox")
    (dom/input #js {:id "checkbox-6" :type "checkbox" :checked true :className "c-checkbox c-checkbox--informative"})
    (dom/label #js {:htmlFor "checkbox-6"} "Checked Informative Checkbox")
    (dom/input #js {:id "checkbox-7" :type "checkbox" :className "c-checkbox c-checkbox--informative is-indeterminate"})
    (dom/label #js {:htmlFor "checkbox-7"} "Indeterminate Informative Checkbox")))

(defn toggle-open [this] (om/update-state! this update :open not))


;; -------------------------
;; Dropdown
;; -------------------------

(def dropdown-header
  "# Dropdowns")

(defexample dropdown
  "### Basic

  This example uses component local state to toggle the is-active class to open/close the dropdown."
  (let [open (boolean (om/get-state this :open))
        menu-class (str "c-dropdown__menu" (if open " is-active" ""))
        selections ["Apples" "Oranges" "Banannas"]
        current (or (om/get-state this :selection) "Not Selected")]
    (dom/div #js {:className "c-dropdown"}
      (dom/button #js {:onClick   #(om/update-state! this update :open not)
                       :className "c-dropdown__select js-dropdown-toggle"} current)
      (dom/ul #js {:id        "test-dropdown" :tabIndex "-1" :aria-hidden "true"
                   :className menu-class}
        (map (fn [s]
               (dom/li #js {:key s :onClick (fn [evt]
                                              (om/update-state! this assoc :open false)
                                              (om/update-state! this assoc :selection s))}
                 (dom/button #js {:className "c-dropdown__link"} s))) selections)))))

(defexample dropdown-shape
  "### Shape and form"
  (dom/div nil
    (let [open       (boolean (om/get-state this :open))
         menu-class (str "c-dropdown__menu" (if open " is-active" ""))
         selections ["Apples" "Oranges" "Banannas"]
         current    (or (om/get-state this :selection) "Large Menu")]
      (dom/div #js {:className "u-trailer--triple"}
        (dom/div #js {:className "c-dropdown c-dropdown--large"}
         (dom/button #js {:onClick   #(om/update-state! this update :open not)
                          :className "c-dropdown__select js-dropdown-toggle"} current)
         (dom/ul #js {:id        "test-dropdown" :tabIndex "-1" :aria-hidden "true"
                      :className menu-class}
           (map (fn [s]
                  (dom/li #js {:key s :onClick (fn [evt]
                                                 (om/update-state! this assoc :open false)
                                                 (om/update-state! this assoc :selection s))}
                    (dom/button #js {:className "c-dropdown__link"} s))) selections)))))

    (let [open (boolean (om/get-state this :open))
        menu-class (str "c-dropdown__menu" (if open " is-active" ""))]
    (dom/div #js {:className "u-end"}
      (dom/div #js {:className "c-dropdown c-dropdown--right"}
        (dom/button #js {:onClick #(toggle-open this) :className "c-dropdown__select c-dropdown__select--right js-dropdown-toggle"} "Right Aligned")
        (dom/ul #js {:id "test-dropdown" :aria-hidden "true" :className menu-class :tabIndex "-1"}
          (dom/li #js {}
            (dom/button #js {:className "c-dropdown__link"} "Apples"))))))
    ))

(defexample dropdown-colors
  "### Colors"
  (dom/div nil
    (let [open       (boolean (om/get-state this :open))
          menu-class (str "c-dropdown__menu" (if open " is-active" ""))]
      (dom/div #js {:className "u-trailer--triple"}
        (dom/div #js {:className "c-dropdown"}
          (dom/button #js {:onClick   #(toggle-open this)
                           :className "c-dropdown__select c-dropdown__select--positive js-dropdown-toggle"} "Positive Select")
          (dom/ul #js {:id "test-dropdown" :aria-hidden "true" :className menu-class :tabIndex "-1"}
            (dom/li #js {}
              (dom/button #js {:className "c-dropdown__link"} "Banannas"))))))

    (let [open (boolean (om/get-state this :open))
          menu-class (str "c-dropdown__menu" (if open " is-active" ""))]
      (dom/div #js {:className "u-trailer--triple"}
        (dom/div #js {:className "c-dropdown"}
         (dom/button #js {:onClick   #(toggle-open this)
                          :className "c-dropdown__select c-dropdown__select--alterable js-dropdown-toggle"} "Alterable Select")
         (dom/ul #js {:id "test-dropdown" :aria-hidden "true" :className menu-class :tabIndex "-1"}
           (dom/li #js {}
             (dom/button #js {:className "c-dropdown__link"} "Apples"))))))

    (let [open (boolean (om/get-state this :open))
          menu-class (str "c-dropdown__menu" (if open " is-active" ""))]
      (dom/div #js {:className ""}
        (dom/div #js {:className "c-dropdown"}
         (dom/button #js {:onClick   #(toggle-open this)
                          :className "c-dropdown__select c-dropdown__select--negative js-dropdown-toggle"} "Negative Select")
         (dom/ul #js {:id "test-dropdown" :aria-hidden "true" :className menu-class :tabIndex "-1"}
           ;; items:
           (dom/li #js {}
             (dom/button #js {:className "c-dropdown__link"} "Banannas"))))))
    ))

(defexample dropdown-buttons
  "### Buttons"
  (dom/div nil
    (let [open       (boolean (om/get-state this :open))
          menu-class (str "c-dropdown__menu" (if open " is-active" ""))]
      (dom/div #js {:className "u-trailer--triple"}
        (dom/div #js {:className "c-dropdown"}
         (dom/button #js {:onClick #(toggle-open this) :className "c-button c-button--dropdown js-dropdown-toggle"} "Button Dropdown")
         (dom/ul #js {:id "test-dropdown" :aria-hidden "true" :className menu-class :tabIndex "-1"}
           (dom/li #js {}
             (dom/button #js {:className "c-dropdown__link"} "Water"))))))

    (let [open (boolean (om/get-state this :open))
          menu-class (str "c-dropdown__menu" (if open " is-active" ""))]
      (dom/div #js {:className "o-button-group"}
        (dom/button #js {:className "c-button"} "Button Group Dropdown")
        (dom/button #js {:onClick #(toggle-open this) :className "c-button c-button--dropdown"})
        (dom/ul #js {:className menu-class}
          (dom/li #js {}
            (dom/button #js {:className "c-dropdown__link"} "Water")))))
    ))

(defexample dropdown-search-multi
  "### Multi-Select, Searchable Dropdown"
  (let [open (boolean (om/get-state this :open))
        items (mapv #(str "Item " %) (range 1 20))
        menu-class (str "c-dropdown__menu" (if open " is-active" ""))]
    (dom/div #js {:className "c-dropdown c-dropdown--large"}
      (dom/button #js {:onClick #(toggle-open this) :className "c-button c-button--dropdown js-dropdown-toggle"} "Filter")
      (dom/div #js {:id "test-dropdown" :aria-hidden "true" :className menu-class :tabIndex "-1"}
        (dom/div #js {:className "u-trailer--quarter"}
          (dom/input #js {:type "text" :placeholder "Search..." :className "c-input"}))
        (dom/div #js {:className "c-dropdown__viewer"}
          (map (fn [item]
                 (dom/div #js {:key item :className "u-leader--sixth u-trailer--sixth"}
                   (dom/input #js {:type "checkbox" :id (str item "-cb") :className "c-checkbox"})
                   (dom/label #js {:htmlFor (str item "-cb")} item)))
               items))
        (dom/button #js {:onClick #(om/update-state! this assoc :open false) :className "c-button c-button--wide"} "Apply")))))

(defexample dropdown-data
  "### Dropdown Data

  This is a control that is meant to let you view what various dropdowns would show, for example in cases
  of UI that lets you configure UI.

  Note: The dropdown list underneath should not be enabled when the dropdown list is visible. Doing this fosters a better interaction for the user."
  (let [open (boolean (om/get-state this :open))
        name (or (om/get-state this :menu-name) "Menu 1")
        menu-1-items (mapv #(str "Item " %) (range 1 5))
        menu-2-items (mapv #(str "Other " %) (range 1 3))
        menu (or (om/get-state this :menu) menu-1-items)]
    (dom/div #js {:className "c-dropdown c-dropdown--data"}
      (dom/button #js {:onClick   #(toggle-open this)
                       :className "c-dropdown__select js-dropdown-toggle"} name)
      (dom/ul #js {:id        "test-dropdown" :aria-hidden "true"
                   :className (str "c-dropdown__menu" (when open " is-active")) :tabIndex "-1"}
        (dom/li #js {}
          (dom/button #js {:onClick   #(om/update-state! this assoc :open false :menu menu-1-items :menu-name "Menu 1")
                           :className "c-dropdown__link"} "Menu 1"))
        (dom/li #js {}
          (dom/button #js {:onClick   #(om/update-state! this assoc :open false :menu menu-2-items :menu-name "Menu 2")
                           :className "c-dropdown__link"} "Menu 2")))
      (dom/ul #js {:className "c-dropdown__list" :tabIndex "-1"}
        (map (fn [item]
               (dom/li #js {:key item}
                 (dom/button #js {:className "c-dropdown__link"} item))) menu)))))


;; -------------------------
;; Expanding Panel
;; -------------------------

(def expansion-panel-header
  "# Expansion panels"
  )

(defexample expansion-panel
  "### Usage

  This is a collapsed expansion panel"

  (dom/div nil
    (let [expanded-1 (boolean (om/get-state this :expanded-1))]
     (dom/div #js {:className (str "c-expansion-panel" (when expanded-1 " is-expanded"))
                   :onClick #(om/update-state! this update :expanded-1 not)
                   :tabIndex "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"}
         (dom/div #js {:className "c-expansion-panel__title"} "Trip name")
         (dom/div #js {:className "c-expansion-panel__info"}
           (when-not expanded-1
             "Caribbean cruise"))
         (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
       (dom/div #js {:className "c-expansion-panel__secondary-content"} "Controls for trip name")))

    (let [expanded-2 (boolean (om/get-state this :expanded-2))]
     (dom/div #js {:className (str "c-expansion-panel" (when expanded-2 " is-expanded"))
                   :onClick   #(om/update-state! this update :expanded-2 not)
                   :tabIndex  "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"}
         (dom/div #js {:className "c-expansion-panel__title"} "Location")
         (dom/div #js {:className "c-expansion-panel__info"}
           (if-not expanded-2
             "Barbados"
             (dom/span nil "Select trip destination" (icons/icon :help_outline))))
         (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
       (dom/div #js {:className "c-expansion-panel__secondary-content"}
         (l/row {:density :collapse}
           (dom/div #js {:className "u-column--12 u-column--8@md u-center@md"}
             (dom/span #js {:className "c-badge c-badge--large"} "Barbados" (icons/icon :cancel)))
           (dom/div #js {:className "u-column--12 u-column--4@md"}
             (dom/div #js {:className "c-message--neutral"} "Select your destination of choice")
             (dom/div #js {:className "c-message"} "Learn more"))
           )
         (l/row {:density :collapse :className "c-expansion-panel__actions"}
           (dom/div #js {:className "u-column--12 u-end"}
             (dom/button #js {:className "c-button c-button--text"} "CANCEL")
             (dom/button #js {:className "c-button c-button--anchor"} "SAVE")
             )
           )
         )))

    (let [expanded-3 (boolean (om/get-state this :expanded-3))]
      (dom/div #js {:className (str "c-expansion-panel" (when expanded-3 " is-expanded"))
                   :onClick #(om/update-state! this update :expanded-3 not)
                   :tabIndex "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"}
         (dom/div #js {:className "c-expansion-panel__title"} "Start and end dates")
         (dom/div #js {:className "c-expansion-panel__info"}
           (when-not expanded-3 "Start date: Feb 29, 2016"))
         (dom/div #js {:className "c-expansion-panel__info"}
           (when-not expanded-3 "End date: Not set"))
         (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
       (dom/div #js {:className "c-expansion-panel__secondary-content"} "Controls for dates")))

    (let [expanded-4 (boolean (om/get-state this :expanded-4))]
      (dom/div #js {:className (str "c-expansion-panel" (when expanded-4 " is-expanded"))
                   :onClick #(om/update-state! this update :expanded-4 not)
                   :tabIndex "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"}
         (dom/div #js {:className "c-expansion-panel__title"} "Carrier")
         (dom/div #js {:className "c-expansion-panel__info"}
           (when-not expanded-4 "The best cruise line"))
         (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
       (dom/div #js {:className "c-expansion-panel__secondary-content"} "Controls for carrier")))

    (let [expanded-5 (boolean (om/get-state this :expanded-5))]
      (dom/div #js {:className (str "c-expansion-panel" (when expanded-5 " is-expanded"))
                   :onClick #(om/update-state! this update :expanded-5 not)
                   :tabIndex "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"}
         (dom/div #js {:className "c-expansion-panel__title"}
           (dom/div nil "Meal preferences")
           (dom/div #js {:className "c-message--neutral"} "Optional"))
         (dom/div #js {:className "c-expansion-panel__info"}
           (when-not expanded-5 "Vegetarian"))
         (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
       (dom/div #js {:className "c-expansion-panel__secondary-content"} "Stuff here"))
     )))


;; -------------------------
;; Field
;; -------------------------

(def field-header
  "# Fields")

(defexample field
  "### Basic"
  (dom/div nil
    (dom/input #js {:type "text" :required "true" :placeholder "Required field" :className "c-field"})
    (dom/input #js {:type "text" :placeholder "Optional field" :className "c-field"})))

(defexample field-sizes
  "### Sizes"
  (dom/div #js {}
    (dom/input #js {:type "text" :className "c-field c-field--small" :placeholder "The quick brown fox..."})
    (dom/input #js {:type "text" :className "c-field" :placeholder "The quick brown fox..."})
    (dom/input #js {:type "text" :className "c-field c-field--medium" :placeholder "The quick brown fox..."})
    (dom/input #js {:type "text" :className "c-field c-field--large" :placeholder "The quick brown fox..."})))

(defexample field-states
  "### States"
  (dom/div #js {}
    (dom/input #js {:type "text" :placeholder "FOCUSED" :className "c-field has-focus"})
    (dom/input #js {:type "text" :placeholder "INVALID" :className "c-field is-invalid"})
    (dom/input #js {:type "text" :placeholder "ERROR" :className "c-field is-error"})))


;; -------------------------
;; Input
;; -------------------------

(def input-header
  "# Inputs

     Input class give support for visualizing various kind of interactions. Supported input types are: `text`,
     `password`, `date`, `datetime`, `datetime-local`, `month`, `week`, `email`, `number`, `search`, `tel`, `time`,
     `url`, `color`.")

(defexample input
  "### All Types"
  (dom/div nil
    (dom/div #js {:className "o-input is-invalid"}
      (dom/input #js {:type "text" :className "o-input__box" :required "true" :placeholder "Required field"}))
    (dom/div #js {:className "o-input"}
      (dom/input #js {:type "text" :placeholder "Optional field" :className "o-input__box"}))
    (mapv (fn [typ] (dom/div #js {:key typ :className "o-input"}
                      (dom/input #js {:type typ :placeholder typ :className "o-input__box"})))
          ["text" "password" "date" "datetime" "datetime-local" "month" "week" "email" "number" "search" "tel" "time" "url" "color"])))

(defexample input-states
  "### States"
  (dom/div #js {}
    (dom/div #js {:className "o-input has-focus"}
      (dom/input #js {:type "text" :placeholder "FOCUSED" :className "o-input__box"}))
    (dom/div #js {:className "o-input is-invalid"}
      (dom/input #js {:type "text" :placeholder "INVALID" :className "o-input__box"}))
    (dom/div #js {:className "o-input is-error"}
      (dom/input #js {:type "text" :placeholder "ERROR" :className "o-input__box"}))))

(defexample input-round
  "### Rounded with Icons"
  (dom/div #js {:className "o-input o-input--round"}
    (icons/icon :search)
    (dom/input #js {:type "search" :className "o-input__box" :placeholder "Search..." :autoCorrect "off" :autoCapitalize "off" :autoComplete "off" :spellCheck "false"})
    ))

(defexample input-multi-line
  "### Multi-line"
  (dom/div #js {:className "o-input"}
    (icons/icon :person)
    (dom/span #js {:className "c-label c-label--informative"} (util/full-name :1))
    (dom/span #js {:className "c-label c-label--informative"} (util/full-name :2))
    (dom/span #js {:className "c-label c-label--informative"} (util/full-name :3))
    (dom/span #js {:className "c-label c-label--informative"} (util/full-name :4))
    (dom/span #js {:className "c-label c-label--informative"} (util/full-name :5))
    (dom/input #js {:type "search" :className "o-input__box" :placeholder "Search..." :autoCorrect "off" :autoCapitalize "off" :autoComplete "off" :spellCheck "false"})
    ))

(defexample input-collapsable
  "### Collapsable

  TODO This needs some love before we show it off
  "

  (let [open? (boolean (om/get-state this :open))]
    #_(dom/div #js {}
      (dom/button #js {:title     "Open Search"
                       :className (str "c-button c-button--icon" (when open? " u-hide"))
                       :onClick   #(toggle-open this)
                       :type      "submit" :aria-label "Submit"}
        (dom/span #js {:className "c-icon c-icon--search"}
          (icons/icon :search)))
      (dom/div #js {:className (str "u-wrapper " (when-not open? " u-hide"))}
        (dom/input #js {:className "c-input"})
        (dom/button #js {:aria-label "Close Search"
                         :onClick    #(toggle-open this)
                         :className  "c-button c-button--icon u-absolute--top-right"}
          (dom/span #js {:className "c-icon c-icon--cancel"}
            (icons/icon :search)))))))

(defexample textarea
  "# Text Area"
  (dom/textarea #js {:className "c-input c-input--multi-line"}))

(defexample input-validation
  "# Input Validation"
  (dom/div #js {}
    (dom/div #js {:className "o-input"}
      (dom/input #js {:type "text" :className "o-input__box"}))
    (dom/div #js {:className "o-input__validation"} "Validated message")

    (dom/div #js {:className "o-input"}
      (dom/input #js {:type "text" :className "o-input__box"}))
    (dom/div #js {:className "o-input__validation o-input__validation--neutral"} "Neutral validated message")

    (dom/div #js {:className "o-input is-invalid"}
      (dom/input #js {:type "email" :value "notauser at clientcom" :required "" :className "o-input__box"}))
    (dom/div #js {:className "o-input__validation o-input__validation--warning"} "Warning validated message")

    (dom/div #js {:className "o-input is-error"}
      (dom/input #js {:type "text" :placeholder "Placeholder text" :className "o-input__box"}))
    (dom/div #js {:className "o-input__validation o-input__validation--error"} "Error validated message")))


;; -------------------------
;; Icons
;; -------------------------

(def icon-header
  "# Icons

  The preferred icon library is Google's <a href='https://design.google.com/icons/'>Material icons</a>. We include the entire library in the UI Components project in the form of svg paths that get inlined into your markup.
  Use these icon classes on `<span>` elements wrapping your inline svg icons. Here is a simple icon in it's purest form.")

(defexample icons
  "### Basic"
  (dom/span #js {:className "c-icon c-icon--large"}
    (icons/icon :timer)))

(defexample icon-sizes
  "### Sizes

  NOTE: If you would like to include states on the icon itself, you can use
  the helper function `(untangled.icons/icon :icon-name :modifiers [:xlarge])`
  "
  (let [sizes ["--small" "" "--medium" "--large" "--xlarge" "--huge"]]
    (dom/div #js {}
      (mapv (fn [sz]
              (dom/figure #js {:key (str "a" sz)}
                (dom/span #js {:className (str "c-icon c-icon" sz)}
                  (icons/icon :alarm))
                (dom/figcaption #js {} (str ".c-icon" sz)))
              ) sizes))))

(defexample icon-colors
  "### Colors "
  (let [colors ["positive" "informative" "neutral" "live" "alterable" "negative"]]
    (dom/div #js {}
      (mapv (fn [color]
              (dom/figure #js {:key color}
                (dom/span #js {:className (str "c-icon is-" color)}
                  (icons/icon :alarm))
                (dom/figcaption #js {} (str "is-" color)))
              ) colors))))

(defexample icon-states
  "### States

  NOTE: If you would like to include states on the icon itself, you can use
  the helper function `(untangled.icons/icon :icon-name :state [:positive])`
  "
  (let [states ["active" "passive" "selectable" "disabled"]]
    (dom/div #js {}
      (mapv (fn [state]
              (dom/figure #js {:key state}
                (dom/span #js {:className (str "c-icon c-icon--large is-" state)}
                  (icons/icon :alarm))
                (dom/figcaption #js {} (str "is-" state)))
              ) states))))

(defexample icon-library
  "### All Available Icons `(untangled.icons/icon :name)`

  NOTE: Some icons have an additonal CSS set of rules in this style kit, so it
  is recommended that you wrap icons with c-icon-{iconname}."
  (dom/div #js {}
    (mapv (fn [nm]
            (dom/figure #js {:key nm}
              (dom/span #js {:className (str "c-icon c-icon-" nm)}
                (icons/icon nm))
              (dom/figcaption #js {} (str nm)))
            ) icons/icon-names)))


;; -------------------------
;; Labels
;; -------------------------

(def label-header
  "# Labels")

(defexample labels
  "### Types"
  (dom/div #js {}
    (dom/span #js {:className "c-label"} "Default")
    (dom/span #js {:className "c-label c-label--positive"} "Positive")
    (dom/span #js {:className "c-label c-label--informative"} "Informative")
    (dom/span #js {:className "c-label c-label--informative-alt"} "Informative Alt")
    (dom/span #js {:className "c-label c-label--neutral"} "Neutral")
    (dom/span #js {:className "c-label c-label--live"} "Live")
    (dom/span #js {:className "c-label c-label--alterable"} "Alterable")
    (dom/span #js {:className "c-label c-label--negative"} "Negative")))

(defexample label-icons
  "### With Icons"
  (dom/div #js {}
    (dom/span #js {:className "c-label c-label--positive"}
      (icons/icon :add) " Add ")
    (dom/span #js {:className "c-label c-label--negative"}
      (icons/icon :close) " Remove ")))


;; -------------------------
;; Lists
;; -------------------------

(def lists-header
  "# Lists")

(defexample lists
  "Lists present multiple line items vertically as a single continuous element."
  (dom/div #js {:className "c-list"}
     (dom/div #js {:className "c-list__row c-list__row--collapse"}
        (dom/div #js {:className "c-list__tile"}
                 (dom/span #js {:className "c-list__title"} "Today")))
           (dom/div #js {:className "c-list__row c-list__row--collapse c-list__row--bordered is-selectable"}
                    (dom/div #js {:className "c-list__tile"}
                             (dom/div #js {:className "u-row"}
                                      (dom/div #js {:className "c-list__avatar c-list__avatar--round"}
                                               (dom/img #js {:src (:photo (util/mock-users :1))}))
                                      (dom/div #js {:className "c-list__name"}
                                               (dom/div nil "Brunch this weekend?")
                                               (dom/div nil
                                                        (dom/span nil (util/full-name :1))
                                                        (dom/span #js {:className "c-list__subtext"} " - I'll be in your neighborhood"))))))
           (dom/div #js {:className "c-list__row c-list__row--collapse c-list__row--bordered is-selectable"}
              (dom/div #js {:className "c-list__tile"}
                       (dom/div #js {:className "u-row"}
                                (dom/div #js {:className "c-list__avatar c-list__avatar--round"}
                                         (dom/img #js {:src (:photo (util/mock-users :2))}))
                                (dom/div #js {:className "c-list__name"}
                                         (dom/div nil "Brunch this weekend?")
                                         (dom/div nil (dom/span nil (util/full-name :2))
                                                  (dom/span #js {:className "c-list__subtext"} " - I'll be in your neighborhood"))))))))

;; -------------------------
;; Loader
;; -------------------------

(def loader-header
 "# Loader

    Webapps often need to provide feedback to the user for when things are loading, so we have a few loader components
    that are animated using only CSS techniques.")


(defexample loader
  "# Loader"
  (dom/div #js {:style #js {:height "100px"}}
    (dom/div #js {:className "c-loader"})
    (dom/div #js {:className "c-loader c-loader--neutral"})))


;; -------------------------
;; Menus
;; -------------------------

(def menu-header
  "# Menu")

(defexample menu
  "### Basic"
  (dom/ul #js {:className "c-menu"}
    (dom/li #js {}
      (dom/button #js {:className "c-menu__link"} "Widgets"))
    (dom/li #js {}
      (dom/button #js {:className "c-menu__link"} "Doodads"))
    (dom/li #js {}
      (dom/button #js {:className "c-menu__link"} "Apparatuses"))
    (dom/li #js {}
      (dom/button #js {:className "c-menu__link"} "Things")
      )))

(defexample menu-block
  "### Block"
  (dom/ul #js {:className "c-menu c-menu--block"}
    (dom/li #js {}
      (dom/button #js {:className "c-menu__link"} "Widgets"))
    (dom/li #js {}
      (dom/button #js {:className "c-menu__link"} "Doodads"))
    (dom/li #js {}
      (dom/button #js {:className "c-menu__link"} "Apparatuses"))
    (dom/li #js {}
      (dom/button #js {:className "c-menu__link has-descendants is-active"} "Things")
      (dom/ul #js {:className "c-menu__submenu"}
        (dom/li #js {}
          (dom/button #js {:className "c-menu__link"} "Thingamabob"))
        (dom/li #js {}
          (dom/button #js {:className "c-menu__link"} "Thingamajig"))
        (dom/li #js {}
          (dom/button #js {:className "c-menu__link"} "Thinger"))))))

(defexample menu-inline
  "### Inline"
  (dom/ul #js {:className "c-menu c-menu--inline"}
    (dom/li #js {}
      (dom/button #js {:className "c-menu__link is-active"} "Link 1"))
    (dom/li #js {}
      (dom/button #js {:className "c-menu__link"} "Link 2"))
    (dom/li #js {}
      (dom/button #js {:className "c-menu__link"} "Link 3"))))


;; -------------------------
;; Messages
;; -------------------------

(def messages-header
  "# Messages")

(defexample messages
  "A basic message"
  (dom/div #js {}
    (dom/div #js {:className "c-message"} "This is a message")
    (dom/div #js {:className "c-message--neutral"} "This is a neutral message")
    (dom/div #js {:className "c-message--alert"} "This is an alert message")
    (dom/div #js {:className "c-message--success"} "This is a successful message")
    (dom/div #js {:className "c-message--warning"} "This is a warning message")))

;; -------------------------
;; Notifications
;; -------------------------

(def notification-header
  "# Notifications
  Used to communicate the state of your user's interactions as well as system status.

  In general, use the positioning classes (e.g. `u-absolute--middle-center`) to place these in
  the UI.")

(defexample notification
  "### Basic"
  (dom/div #js {:className "c-notification"}
    (icons/icon :info)
    (dom/div #js {:className "c-notification_content"}
      (dom/h1 #js {:className "c-notification_heading"} "Info Notification")
      (dom/p #js {} "Communicate a meaningful message."))
    (dom/button #js {:className "c-button c-button--icon"}
      (icons/icon :close))))

(defexample notification-success
  "### Success"
  (dom/div #js {:className "c-notification"}
    (icons/icon :check_circle :states [:positive])
    (dom/div #js {:className "c-notification_content"}
      (dom/h1 #js {:className "c-notification_heading"} "Successful Notification")
      (dom/p #js {} "Communicate a meaningful message."))
    (dom/button #js {:className "c-button c-button--icon"}
      (icons/icon :close))))

(defexample notification-warning
  "### Warning"
  (dom/div #js {:className "c-notification c-notification--warning"}
    (icons/icon :warning)
    (dom/div #js {:className "c-notification_content"}
      (dom/h1 #js {:className "c-notification_heading"} "Warning Notification")
      (dom/p #js {} "Communicate a meaningful message."))
    (dom/button #js {:className "c-button c-button--icon"}
      (icons/icon :close))))

(defexample notification-error
  "### Error"
  (dom/div #js {:className "c-notification c-notification--error"}
    (icons/icon :error)
    (dom/div #js {:className "c-notification_content"}
      (dom/h1 #js {:className "c-notification_heading"} "Error Notification")
      (dom/p #js {} "Communicate a meaningful message."))
    (dom/button #js {:className "c-button c-button--icon"}
      (icons/icon :close))))

(defexample notification-wide
  "## Wide"
  (dom/div #js {:className "c-notification c-notification--wide c-notification--informative"}
    (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--info" :viewBox "0 0 24 24"}
      (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}))
    (dom/div #js {:className "c-notification_content"}
      (dom/h1 #js {:className "c-notification_heading"} "Wide Notification")
      (dom/p #js {} "Communicate a meaningful message."))
    (dom/button #js {:className "c-button c-button--icon"}
      (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--close" :viewBox "0 0 24 24"}
        (dom/path #js {:d "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))))

;; -------------------------
;; Radio
;; -------------------------

(def radio-header
  "# Radio")

(defexample radio
  "### Basic"
  (let [selection (or (om/get-state this :selection) 1)
        select (fn [n] (om/update-state! this assoc :selection n))]
    (dom/div #js {}
      (dom/input #js {:id      "r1" :type "radio" :className "c-radio" :name "radiogroup"
                      :checked (= 1 selection) :onClick #(select 1)})
      (dom/label #js {:id "r1l" :htmlFor "r1"} "A")
      (dom/input #js {:id      "r2" :type "radio" :className "c-radio" :name "radiogroup"
                      :checked (= 2 selection) :onClick #(select 2)})
      (dom/label #js {:id "r2l" :htmlFor "r2"} "B")
      (dom/input #js {:id      "r3" :type "radio" :className "c-radio" :name "radiogroup"
                      :checked (= 3 selection) :onClick #(select 3)})
      (dom/label #js {:htmlFor "r3"} "C"))))

(defexample radio-informative
  "### Consumer Blue"
  (let [selection (or (om/get-state this :selection) 1)
        select (fn [n] (om/update-state! this assoc :selection n))]
    (dom/div #js {}
      (dom/input #js {:id      "r1i" :type "radio" :className "c-radio c-radio--informative" :name "radiogroupi"
                      :checked (= 1 selection) :onClick #(select 1)})
      (dom/label #js {:htmlFor "r1i"} "A")
      (dom/input #js {:id      "r2i" :type "radio" :className "c-radio c-radio--informative" :name "radiogroupi"
                      :checked (= 2 selection) :onClick #(select 2)})
      (dom/label #js {:htmlFor "r2i"} "B")
      (dom/input #js {:id      "r3i" :type "radio" :className "c-radio c-radio--informative" :name "radiogroupi"
                      :checked (= 3 selection) :onClick #(select 3)})
      (dom/label #js {:htmlFor "r3i"} "C"))))

(defexample radio-stacked
  "### Stacked"
  (let [selection (or (om/get-state this :selection) 1)
        select (fn [n] (om/update-state! this assoc :selection n))]
    (dom/div #js {}
      (dom/input #js {:id      "sr1" :type "radio" :className "c-radio c-radio--informative c-radio--stacked" :name "stackedradio"
                      :checked (= 1 selection) :onClick #(select 1)})
      (dom/label #js {:id "sr1l" :htmlFor "sr1"} "1")
      (dom/input #js {:id      "sr2" :type "radio" :className "c-radio c-radio--informative c-radio--stacked" :name "stackedradio"
                      :checked (= 2 selection) :onClick #(select 2)})
      (dom/label #js {:id "sr2l" :htmlFor "sr2"} "2")
      (dom/input #js {:id      "sr3" :type "radio" :className "c-radio c-radio--informative c-radio--stacked" :name "stackedradio"
                      :checked (= 3 selection) :onClick #(select 3)})
      (dom/label #js {:htmlFor "sr3"} "3")
      (dom/input #js {:id      "sr4" :type "radio" :className "c-radio c-radio--informative c-radio--stacked" :name "stackedradio"
                      :checked (= 4 selection) :onClick #(select 4)})
      (dom/label #js {:htmlFor "sr4"} "4")
      (dom/input #js {:id      "sr5" :type "radio" :className "c-radio c-radio--informative c-radio--stacked" :name "stackedradio"
                      :checked (= 5 selection) :onClick #(select 5)})
      (dom/label #js {:htmlFor "sr5"} "5"))))


;; -------------------------
;; Radio
;; -------------------------

(def switch-header
  "# Switch

  A simple control to indicate if somehting is on or off.")

(defexample switch
  "### Simple
  Click this example to see it's active state which is a simple `:checked` attribute on `.c-switch__input`."
  (let [active (boolean (om/get-state this :active))]
    (dom/div #js {:className "c-switch"
                  :onClick #(om/update-state! this update :active not)}
      (dom/input #js {:className "c-switch__input"
                      :id        "h-switch-input-1"
                      :type      "checkbox"
                      :checked   (= active true)})
      (dom/span #js {:className "c-switch__paddle"
                     :htmlFor "h-switch-input-1"}))))

(defexample switch-icon
  "### Icons

  You can put up to 2 icons inside the `.c-switch__paddle` that represent what off and on actually do."
  (let [active (boolean (om/get-state this :active))]
    (dom/div #js {:className "c-switch"
                  :onClick #(om/update-state! this update :active not)}
      (dom/input #js {:className "c-switch__input"
                      :id        "h-switch-input-1"
                      :type      "checkbox"
                      :checked   (= active true)})
      (dom/span #js {:className "c-switch__paddle"
                     :htmlFor "h-switch-input-1"}
        (icons/icon :clear)
        (icons/icon :done)
        ))))


;; -------------------------
;; Tables
;; -------------------------

(def tables-header
  "# Tables")

(defexample tables
  "### Basic"
  (let [kind (or (om/get-state this :kind))
        set-kind (fn [k] (om/update-state! this assoc :kind k))]
    (dom/div #js {}
      (dom/div #js {:className "o-button-group"}
        (dom/button #js {:aria-label "None" :onClick #(set-kind nil)
                         :className  (str "c-button c-button--small " (when (= kind nil) "is-active"))}
          (dom/span #js {:className "c-button__content"} "None"))
        (dom/button #js {:aria-label "Swipe View" :onClick #(set-kind "swipe")
                         :className  (str "c-button c-button--small " (when (= kind "swipe") "is-active"))}
          (icons/icon :view_headline)
          (dom/span #js {:className "c-button__content"} "Swipe"))
        (dom/button #js {:aria-label "Toggle View" :onClick #(set-kind "toggle")
                         :className  (str "c-button c-button--small " (when (= kind "toggle") "is-active"))}
          (icons/icon :view_week)
          (dom/span #js {:className "c-button__content"} "Toggle"))
        (dom/button #js {:aria-label "Stacked View" :onClick #(set-kind "stacked")
                         :className  (str "c-button c-button--small " (when (= kind "stacked") "is-active"))}
          (icons/icon :view_agenda)
          (dom/span #js {:className "c-button__content"} "Stacked")))
      (dom/table #js {:className (str "c-table c-table--" kind)}
                 (dom/thead #js {}
                            (dom/tr #js {}
                                    (dom/th #js {:scope "col"})
                                    (dom/th #js {:scope "col" :className "c-table__priority-3"} "Opens")
                                    (dom/th #js {:scope "col" :className "c-table__priority-2"} "Open %")
                                    (dom/th #js {:scope "col" :className "c-table__priority-1"} "Clicks")
                                    (dom/th #js {:scope "col" :className "c-table__priority-4"} "Click %")
                                    (dom/th #js {:scope "col" :className "c-table__priority-5"} "Booked")
                                    (dom/th #js {:scope "col" :className "c-table__priority-6"} "Attr Rev")
                                    (dom/th #js {:scope "col" :className "c-table__priority-6"} "Bounce %")
                                    (dom/th #js {:scope "col" :className "c-table__priority-6"} "Share %")
                                    (dom/th #js {:scope "col" :className "c-table__priority-6"} "Unsub %")))
                 (dom/tbody #js {}
                            (dom/tr #js {}
                                    (dom/td #js {} "Auto Agent")
                                    (dom/td #js {:className "c-table__priority-3"}
                                            (dom/span #js {:className "c-table__label"} "Opens")
                                            (dom/span #js {:className "c-table__content"} "300"))
                                    (dom/td #js {:className "c-table__priority-2"}
                                            (dom/span #js {:className "c-table__label"} "Open %")
                                            (dom/span #js {:className "c-table__content"} "60"))
                                    (dom/td #js {:className "c-table__priority-1"}
                                            (dom/span #js {:className "c-table__label"} "Clicks")
                                            (dom/span #js {:className "c-table__content"} "3000"))
                                    (dom/td #js {:className "c-table__priority-4"}
                                            (dom/span #js {:className "c-table__label"} "Click %")
                                            (dom/span #js {:className "c-table__content"} "32"))
                                    (dom/td #js {:className "c-table__priority-5"}
                                            (dom/span #js {:className "c-table__label"} "Booked")
                                            (dom/span #js {:className "c-table__content"} "12000"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Attr Rev")
                                            (dom/span #js {:className "c-table__content"} "32800"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Bounce %")
                                            (dom/span #js {:className "c-table__content"} "32"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Share %")
                                            (dom/span #js {:className "c-table__content"} "32"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Unsub %")
                                            (dom/span #js {:className "c-table__content"} "32")))
                            (dom/tr #js {}
                                    (dom/td #js {} "First child entry")
                                    (dom/td #js {:className "c-table__priority-3"}
                                            (dom/span #js {:className "c-table__label"} "Opens")
                                            (dom/span #js {:className "c-table__content"} "100"))
                                    (dom/td #js {:className "c-table__priority-2"}
                                            (dom/span #js {:className "c-table__label"} "Open %")
                                            (dom/span #js {:className "c-table__content"} "54"))
                                    (dom/td #js {:className "c-table__priority-1"}
                                            (dom/span #js {:className "c-table__label"} "Clicks")
                                            (dom/span #js {:className "c-table__content"} "1200"))
                                    (dom/td #js {:className "c-table__priority-4"}
                                            (dom/span #js {:className "c-table__label"} "Click %")
                                            (dom/span #js {:className "c-table__content"} "18"))
                                    (dom/td #js {:className "c-table__priority-5"}
                                            (dom/span #js {:className "c-table__label"} "Booked")
                                            (dom/span #js {:className "c-table__content"} "6000"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Attr Rev")
                                            (dom/span #js {:className "c-table__content"} "24000"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Bounce %")
                                            (dom/span #js {:className "c-table__content"} "18"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Share %")
                                            (dom/span #js {:className "c-table__content"} "18"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Unsub %")
                                            (dom/span #js {:className "c-table__content"} "18")))
                            (dom/tr #js {}
                                    (dom/td #js {} "Second child entry")
                                    (dom/td #js {:className "c-table__priority-3"}
                                            (dom/span #js {:className "c-table__label"} "Opens")
                                            (dom/span #js {:className "c-table__content"} "600"))
                                    (dom/td #js {:className "c-table__priority-2"}
                                            (dom/span #js {:className "c-table__label"} "Open %")
                                            (dom/span #js {:className "c-table__content"} "72"))
                                    (dom/td #js {:className "c-table__priority-1"}
                                            (dom/span #js {:className "c-table__label"} "Clicks")
                                            (dom/span #js {:className "c-table__content"} "960"))
                                    (dom/td #js {:className "c-table__priority-4"}
                                            (dom/span #js {:className "c-table__label"} "Click %")
                                            (dom/span #js {:className "c-table__content"} "42"))
                                    (dom/td #js {:className "c-table__priority-5"}
                                            (dom/span #js {:className "c-table__label"} "Booked")
                                            (dom/span #js {:className "c-table__content"} "3000"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Attr Rev")
                                            (dom/span #js {:className "c-table__content"} "1200"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Bounce %")
                                            (dom/span #js {:className "c-table__content"} "42"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Share %")
                                            (dom/span #js {:className "c-table__content"} "42"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Unsub %")
                                            (dom/span #js {:className "c-table__content"} "42")))
                            (dom/tr #js {}
                                    (dom/td #js {} "Third child entry")
                                    (dom/td #js {:className "c-table__priority-3"}
                                            (dom/span #js {:className "c-table__label"} "Opens")
                                            (dom/span #js {:className "c-table__content"} "300"))
                                    (dom/td #js {:className "c-table__priority-2"}
                                            (dom/span #js {:className "c-table__label"} "Open %")
                                            (dom/span #js {:className "c-table__content"} "60"))
                                    (dom/td #js {:className "c-table__priority-1"}
                                            (dom/span #js {:className "c-table__label"} "Clicks")
                                            (dom/span #js {:className "c-table__content"} "840"))
                                    (dom/td #js {:className "c-table__priority-4"}
                                            (dom/span #js {:className "c-table__label"} "Click %")
                                            (dom/span #js {:className "c-table__content"} "32"))
                                    (dom/td #js {:className "c-table__priority-5"}
                                            (dom/span #js {:className "c-table__label"} "Booked")
                                            (dom/span #js {:className "c-table__content"} "12000"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Attr Rev")
                                            (dom/span #js {:className "c-table__content"} "30800"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Bounce %")
                                            (dom/span #js {:className "c-table__content"} "32"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Share %")
                                            (dom/span #js {:className "c-table__content"} "32"))
                                    (dom/td #js {:className "c-table__priority-6"}
                                            (dom/span #js {:className "c-table__label"} "Unsub %")
                                            (dom/span #js {:className "c-table__content"} "32"))))))))

;; -------------------------
;; Tooltips
;; -------------------------

(def tooltips-header
  "# Tooltips

  Tool tips are based on `data` attributes.")

(defexample tooltips
  "### Basic"
  (dom/button #js {:data-tooltip "Hey!" :className "c-button"} "Hover me!"))

(defexample tooltip-directions
  "### Directions"
  (dom/div #js {}
    (dom/div #js {:className "u-text-center"}
      (dom/button #js {:data-tooltip "Hey!" :data-tooltip-pos "up" :className "c-button c-button--large"} "Hover me!"))
    (dom/div #js {:className "u-text-center"}
      (dom/button #js {:data-tooltip "Hey!" :data-tooltip-pos "left" :className "c-button c-button--large"} "Hover me!"))
    (dom/div #js {:className "u-text-center"}
      (dom/button #js {:data-tooltip "Hey!" :data-tooltip-pos "right" :className "c-button c-button--large"} "Hover me!"))
    (dom/div #js {:className "u-text-center"}
      (dom/button #js {:data-tooltip "Hey!" :data-tooltip-pos "down" :className "c-button c-button--large"} "Hover me!"))))

(defexample tooltip-sizes
  "### Sizes"
  (dom/div #js {}
    (dom/div #js {:className "u-text-center"} " "
      (dom/button #js {:data-tooltip "Hey!" :data-tooltip-length "small" :className "c-button c-button--large"} "Small") " ") " "
    (dom/div #js {:className "u-text-center"} " "
      (dom/button #js {:data-tooltip "Now that's a super big text we have over here right? Lorem ipsum dolor sit I'm done." :data-tooltip-length "medium" :className "c-button c-button--large"} "Medium") " ") " "
    (dom/div #js {:className "u-text-center"} " "
      (dom/button #js {:data-tooltip "What about something really big? This may surpass your window dimensions. Imagine you're on that boring class with that boring teacher and you didn't slept so well last night. Suddenly you're sleeping in class. Can you believe it?!" :data-tooltip-length "large" :className "c-button c-button--large"} "Large") " ") " "
    (dom/div #js {:className "u-text-center"} " "
      (dom/button #js {:data-tooltip "What about something really big? This may surpass your window dimensions. Imagine you're on that boring class with that boring teacher and you didn't slept so well last night. Suddenly you're sleeping in class. Can you believe it?!" :data-tooltip-length "xlarge" :className "c-button c-button--large"} "X-Large") " ") " "
    (dom/div #js {:className "u-text-center"} " "
      (dom/button #js {:data-tooltip "What about something really big? This may surpass your window dimensions. Imagine you're on that boring class with that boring teacher and you didn't slept so well last night. Suddenly you're sleeping in class. Can you believe it?!" :data-tooltip-length "fit" :className "c-button c-button--large"} "My width will fit to element") " ") " "))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; OBJECTS start here
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defexample accordion
  "# Accordion Example"
  (dom/div #js {}
    (let [accordion (or (om/get-state this :accordion) 0)
          accordion-select (fn [a] (if (not (= accordion a)) (om/update-state! this assoc :accordion a) (om/update-state! this assoc :accordion 0)))
          accordion-active (fn [a] (if (= accordion a) " is-active" ""))]
      (dom/div #js {}
        (dom/div #js {:className "o-accordion"}
          (dom/div #js {:id        "a1"
                        :className (str "o-accordion__title is-nested " (accordion-active 1))
                        :onClick   #(accordion-select 1)}
            (dom/span #js {:className " c-badge c-badge--informative "} " 2 ") " Contacts ")
          (dom/div #js {:className (str " o-accordion__content " (accordion-active 1))}
            (dom/div #js {:className " o-accordion__group "}
              (dom/div #js {:className " o-accordion__info o-accordion__info--critical "}
                (dom/svg #js {:xmlns " http:// www.w3.org /2000/svg" :width "24" :height "24" :className "c-icon is-neutral" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})) " Kennee ")
              (dom/div #js {:className "o-accordion__info"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-neutral" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})) " ilovemicrosoft@yahoo.com ")
              (dom/div #js {:className "o-accordion__info"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-neutral" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"})) " 2m ago ")
              (dom/div #js {:className "o-accordion__actions"}
                (dom/span #js {:className "o-accordion__action"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-informative" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"})))
                (dom/span #js {:className "o-accordion__action o-accordion__action--informative"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-informative" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"})))
                (dom/span #js {:className "o-accordion__action o-accordion__action--success"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-informative" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"})))))
            (dom/div #js {:className "o-accordion__group"}
              (dom/div #js {:className "o-accordion__info o-accordion__info--critical"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-neutral" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})) " Krassy Pants ")
              (dom/div #js {:className "o-accordion__info"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-neutral" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})) " krass@pants.com ")
              (dom/div #js {:className "o-accordion__info"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-neutral" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"})) " 2m ago ")
              (dom/div #js {:className "o-accordion__actions"}
                (dom/span #js {:className "o-accordion__action"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-informative" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"}))))))
          (dom/div #js {:id        "a2"
                        :className (str "o-accordion__title is-nested" (accordion-active 2))
                        :onClick   #(accordion-select 2)} " What kinds of dogs are there? ")
          (dom/div #js {:className (str "o-accordion__content" (accordion-active 2))}
            (dom/p #js {} "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion."))
          (dom/div #js {:id        "a3"
                        :className (str "o-accordion__title is-nested" (accordion-active 3))
                        :onClick   #(accordion-select 3)} " How do you acquire a dog? ")
          (dom/div #js {:className (str "o-accordion__content" (accordion-active 3))}
            (dom/p #js {} "Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.")
            (dom/p #js {:className "is-nested"} "A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."))
          (dom/div #js {:id        "a4"
                        :className (str "o-accordion__title is-nested" (accordion-active 4))
                        :onClick   #(accordion-select 4)} " How do you acquire a dog? ")
          (dom/div #js {:className (str "o-accordion__content" (accordion-active 4))}
            (dom/p #js {} "Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.")
            (dom/p #js {:className "is-nested"} "A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."))
          (dom/div #js {:id        "a5"
                        :className (str "o-accordion__title is-nested" (accordion-active 5))
                        :onClick   #(accordion-select 5)} " How do you acquire a dog? ")
          (dom/div #js {:className (str "o-accordion__content" (accordion-active 5))}
            (dom/p #js {} "Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.")
            (dom/p #js {:className "is-nested"} "A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily."))
          (dom/div #js {:className "o-accordion__title"} " Non-nested title ")))
      )))

(defexample accordion-nested
  "### Nested

  Notice how you can add `.is-nested` to any element and it collapses and expands with `.is-active`
  "
  (let [accordion (or (om/get-state this :accordion) 1)
        accordion-select (fn [a] (if (not (= accordion a)) (om/update-state! this assoc :accordion a) (om/update-state! this assoc :accordion 0)))
        accordion-active (fn [a] (if (= accordion a) " is-active" ""))]
    (dom/div #js {}
      (dom/div #js {:className "o-accordion"}
        (dom/div #js {:className "o-accordion__title"} "Recent notes")
        (dom/div #js {:className "o-accordion__content is-active"}
          (dom/div #js {:className "o-accordion__group"}
            (dom/div #js {:className "o-accordion__info"}
              (dom/div #js {:className "o-accordion__meta"}
                (dom/div #js {:className "o-accordion__meta-item"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--small" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})) " Agent Name ")
                (dom/div #js {:className "o-accordion__meta-item"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--small" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"})) " 3 days ago "))
              (dom/p #js {:id        "a1"
                          :className (str "is-nested" (accordion-active 1))
                          :onClick   #(accordion-select 1)} "So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive in the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew.")))
          (dom/div #js {:className "o-accordion__group"}
            (dom/div #js {:className "o-accordion__info"}
              (dom/div #js {:className "o-accordion__meta"}
                (dom/div #js {:className "o-accordion__meta-item"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--small" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})) " Agent Name ")
                (dom/div #js {:className "o-accordion__meta-item"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--small" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"})) " 3 days ago "))
              (dom/p #js {:className "is-nested"} "So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive in the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew.")))
          (dom/div #js {:className "o-accordion__group"}
            (dom/div #js {:className "o-accordion__info"}
              (dom/div #js {:className "o-accordion__meta"}
                (dom/div #js {:className "o-accordion__meta-item"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--small" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})) " Agent Name ")
                (dom/div #js {:className "o-accordion__meta-item"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--small" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"})) " 3 days ago "))
              (dom/p #js {:id        "a2"
                          :className (str "is-nested" (accordion-active 2))
                          :onClick   #(accordion-select 2)} "So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive in the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew."))))))
    ))

;; TODO Fix, accordion sidebar is not appearing
(defexample accordion-sidebar
  "# Accordion inside a Sidebar Example"
  (dom/div #js {}
    (dom/nav #js {:className "o-sidebar [is-collapsed]"}
      (dom/div #js {:className "o-accordion o-accordion--small"}
        (dom/div #js {:className "o-accordion__title is-nested is-active"} " Title 1 ")
        (dom/div #js {:className "o-accordion__content is-active"}
          (dom/div #js {:className "o-accordion__group"}
            (dom/div #js {:className "o-accordion__info"} "View 1")
            (dom/div #js {:className "o-accordion__actions"}
              (dom/span #js {:className "o-accordion__action"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-informative" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"})))))
          (dom/div #js {:className "o-accordion__group"}
            (dom/div #js {:className "o-accordion__info"} "View 2.1")
            (dom/div #js {:className "o-accordion__actions"}
              (dom/span #js {:className "o-accordion__action"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-informative" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"}))))))
        (dom/div #js {:className "o-accordion__title is-selected"} "Title 2")
        (dom/div #js {:className "o-accordion__title"} "Title 3")
        (dom/div #js {:className "o-accordion__title is-informative"}
          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--small" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})) " Action 1 "))
      (dom/div #js {:className "o-sidebar__toggle"}))))


(defexample button-group
  "# Button Group Example"
  (dom/div #js {}
    (dom/div #js {:className "o-button-group"}
      (dom/button #js {:className "c-button"} "Play")
      (dom/button #js {:className "c-button"} "Pause")
      (dom/button #js {:className "c-button"} "Stop"))))

(defexample button-stacked
  "# Button Group Stacked Example"
  (dom/div #js {}
    (dom/div #js {:className "o-button-group--stack"}
      (dom/button #js {:className "c-button"} "Play")
      (dom/button #js {:className "c-button"} "Pause")
      (dom/button #js {:className "c-button"} "Stop"))))

(defn toggle-pause [this] (om/update-state! this update :pause not))
(defexample button-toggle
  "# Button Group Toggle Example"
  (let [pause (boolean (om/get-state this :pause))]
    (dom/div #js {}
      (dom/span #js {:className "o-button-group__label"} "Control")
      (dom/div #js {:className "o-button-group--toggle"}
        (dom/button #js {:className (str "c-button c-button--small" (if pause " c-button--text" ""))
                         :onClick   #(toggle-pause this)} "Play")
        (dom/button #js {:className (str "c-button c-button--small" (if (not pause) " c-button--text" ""))
                         :onClick   #(toggle-pause this)} "Pause")))))

(defexample postfix-group
  "# Button Group Postfix Example

  **Please Note** This does not work well on mobile with multiple buttons. To fix this we hacked out the second button. Use at your own risk.
  "
  (dom/div #js {}
    (dom/div #js {:className "u-row u-row--collapse"}
      (dom/div #js {:className "u-column--9"}
        (dom/input #js {:type "text" :placeholder "Multiple buttons on the end" :className "c-input"}))
      (dom/div #js {:className "u-column--3"}
        (dom/div #js {:className "o-button-group"}
          (dom/button #js {:className "c-button c-button--postfix"} "Go")
          (dom/button #js {:className "c-button c-button--postfix u-hide@sm"} "Start"))))))


(defexample calendar-example
  "### Calendar Example"
  (dom/div #js {}
    (dom/div #js {:className "u-wrapper"}
      (dom/span #js {:className "o-button-group-label"} " X Date")
      (dom/div #js {:className "o-calendar-wrapper"}
        (dom/input #js {:readOnly "true" :value "" :className "o-claendar-date"}))

      (dom/div #js {:className "c-calendar"}
        (dom/header #js {:className "c-calendar__control u-middle"}
          (dom/button #js {:title "Last Month" :className "c-button c-button--icon"}
            (icons/icon :keyboard_arrow_left))
          (dom/span #js {} "January 2017")
          (dom/button #js {:title "Today" :className "c-button c-button--icon"}
            (icons/icon :today))
          (dom/button #js {:title "Next Month" :className "c-button c-button--icon"}
            (icons/icon :keyboard_arrow_right)))
        (dom/div #js {:className "o-calendar__month"}
          (dom/table #js {}
            (dom/thead #js {}
              (dom/tr #js {}
                (dom/th #js {} "Su")
                (dom/th #js {} "M")
                (dom/th #js {} "Tu")
                (dom/th #js {} "W")
                (dom/th #js {} "Th")
                (dom/th #js {} "F")
                (dom/th #js {} "Sa")))
            (dom/tbody #js {}
              (dom/tr #js {}
                (dom/td #js {:className "c-calendar__day is-inactive"} "27")
                (dom/td #js {:className "c-calendar__day is-inactive"} "28")
                (dom/td #js {:className "c-calendar__day is-inactive"} "29")
                (dom/td #js {:className "c-calendar__day is-inactive"} "30")
                (dom/td #js {:className "c-calendar__day is-inactive"} "31")
                (dom/td #js {:className "c-calendar__day"} "1")
                (dom/td #js {:className "c-calendar__day"} "2"))
              (dom/tr #js {}
                (dom/td #js {:className "c-calendar__day"} "3")
                (dom/td #js {:className "c-calendar__day"} "4")
                (dom/td #js {:className "c-calendar__day"} "5")
                (dom/td #js {:className "c-calendar__day"} "6")
                (dom/td #js {:className "c-calendar__day"} "7")
                (dom/td #js {:className "c-calendar__day"} "8")
                (dom/td #js {:className "c-calendar__day"} "9"))
              (dom/tr #js {}
                (dom/td #js {:className "c-calendar__day"} "10")
                (dom/td #js {:className "c-calendar__day"} "11")
                (dom/td #js {:className "c-calendar__day"} "12")
                (dom/td #js {:className "c-calendar__day"} "13")
                (dom/td #js {:className "c-calendar__day"} "14")
                (dom/td #js {:className "c-calendar__day"} "15")
                (dom/td #js {:className "c-calendar__day"} "16"))
              (dom/tr #js {}
                (dom/td #js {:className "c-calendar__day"} "17")
                (dom/td #js {:className "c-calendar__day"} "18")
                (dom/td #js {:className "c-calendar__day is-active"} "19")
                (dom/td #js {:className "c-calendar__day"} "20")
                (dom/td #js {:className "c-calendar__day"} "21")
                (dom/td #js {:className "c-calendar__day"} "22")
                (dom/td #js {:className "c-calendar__day"} "23"))
              (dom/tr #js {}
                (dom/td #js {:className "c-calendar__day"} "24")
                (dom/td #js {:className "c-calendar__day"} "25")
                (dom/td #js {:className "c-calendar__day"} "26")
                (dom/td #js {:className "c-calendar__day"} "27")
                (dom/td #js {:className "c-calendar__day"} "28")
                (dom/td #js {:className "c-calendar__day"} "29")
                (dom/td #js {:className "c-calendar__day"} "30")))))))))

(defn toggle-drawer [this] (om/update-state! this update :drawer not))

(defexample drawer
  "# Drawer Example"
  (let [drawer (boolean (om/get-state this :drawer))]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(toggle-drawer this)} "Show/Hide Drawer Example")
      (dom/div #js {:className (str "o-drawer o-drawer--right" (if drawer " is-open" ""))
                    :onClick   #(toggle-drawer this)}
        (dom/header #js {:className "o-drawer__header"}
          (dom/h1 #js {:className "o-drawer__brand"} "Name")
          (dom/h2 #js {:className "o-drawer__product"} "Media"))
        (dom/div #js {:className "o-drawer__group o-drawer__group--account"}
          (dom/div #js {:className "o-drawer__item"}
            (dom/button #js {:className "o-drawer__action"}
              (dom/span #js {:className "o-drawer__account-avatar c-icon c-icon--large"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})))
              (dom/span #js {:className "o-drawer__account-name"} "Samantha Smith"))))
        (dom/div #js {:className "o-drawer__group"}
          (dom/nav #js {:className "o-drawer__nav"}
            (dom/ul #js {:className "o-drawer__list"}
              (dom/li #js {:className "o-drawer__item"}
                (dom/button #js {:className "o-drawer__action"}
                  (dom/span #js {:className "c-icon"}
                    (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                      (dom/path #js {:d "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"}))) " Games"))
              (dom/li #js {:className "o-drawer__item"}
                (dom/button #js {:className "o-drawer__action"}
                  (dom/span #js {:className "c-icon"}
                    (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                      (dom/path #js {:d "M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"}))) " Movies"))
              (dom/li #js {:className "o-drawer__item"}
                (dom/button #js {:className "o-drawer__action"}
                  (dom/span #js {:className "c-icon"}
                    (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                      (dom/path #js {:d "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"}))) " Books")))))
        (dom/div #js {:className "o-drawer__group"}
          (dom/nav #js {:className "o-drawer__nav"}
            (dom/ul #js {:className "o-drawer__list"}
              (dom/li #js {:className "o-drawer__item"}
                (dom/button #js {:className "o-drawer__action"} "Settings"))
              (dom/li #js {:className "o-drawer__item"}
                (dom/button #js {:className "o-drawer__action"} "Help &amp; Feedback"))))))
      (dom/div #js {:className "o-drawer__close"}))))

(defexample editor-inactive
  "# Editor Inactive Example"
  (dom/div #js {}
    (dom/section #js {:className "o-editor"}
      (dom/header #js {:className "o-editor__toolbar has-actions"}
        (dom/div #js {:className "o-editor__nav"})
        (dom/div #js {:className "o-editor__info"}
          (dom/div #js {:className "o-editor__actions o-button-group"}
            ; "<!-- Edit -->"
            (dom/button #js {:className "c-button c-button--large o-editor__edit"}
              (dom/span #js {:className "c-icon"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})))
              (dom/span #js {:className "c-button__content u-hide@sm"} "Edit"))
            ;"<!-- Delete -->"
            (dom/button #js {:className "c-button c-button--large"}
              (dom/span #js {:className "c-icon"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))))
            ;"<!-- Move -->"
            (dom/button #js {:className "c-button c-button--large"}
              (dom/span #js {:className "c-icon"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"})))))))
      (dom/div #js {:className "o-editor__content"}
        (dom/input #js {:value "Hello, I'm content inside an editor! :)" :className "c-input"})))))

(defexample editor-active
  "# Editor Active Example"
  (dom/div #js {}
    (dom/section #js {:className "o-editor is-active"}
      (dom/header #js {:className "o-editor__toolbar has-actions"}
        (dom/div #js {:className "o-editor__nav"}
          (dom/ul #js {:className "c-menu c-menu--inline"}
            (dom/li #js {}
              (dom/button #js {:className "c-menu__link is-active"} "Object"))
            (dom/li #js {}
              (dom/button #js {:className "c-menu__link"} "Options"))))
        (dom/div #js {:className "o-editor__info"}
          (dom/div #js {:className "o-editor__extras"}
            (dom/span #js {:title "Key Attribute" :className "c-badge c-badge--round c-badge--positive"}
              (dom/span #js {:className "c-icon c-icon--small"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}))))
            (dom/span #js {:title "Recommended Object" :className "c-badge c-badge--round c-badge--alterable"} "N")
            (dom/button #js {:title "Add to Favorites" :className "c-button--favorite is-active"}
              (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon" :viewBox "0 0 24 24"}
                (dom/path #js {:d "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}))))
          (dom/div #js {:className "o-editor__actions o-button-group"}
            ;"<!-- Done -->"
            (dom/button #js {:className "c-button c-button--large o-editor__done"}
              (dom/span #js {:className "c-icon is-positive"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))
              (dom/span #js {:className "c-button__content u-hide@sm"} "Done"))
            (dom/button #js {:className "c-button c-button--large"}
              (dom/span #js {:className "c-icon"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))))
            (dom/button #js {:className "c-button c-button--large"}
              (dom/span #js {:className "c-icon"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"})))))))
      (dom/div #js {:className "o-editor__content"}
        (dom/input #js {:value "Hello, I'm content inside an editor! :)" :className "c-input"}))
      (dom/footer #js {:className "o-editor__toolbar o-editor__toolbar--small"}
        (dom/div #js {:className "u-start"}
          (dom/span #js {:className "c-icon"}
            (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
              (dom/path #js {:d "M7 10l5 5 5-5z"})))
          " Conditions "
          (dom/button #js {:className "c-button c-button--anchor js-add-conditions"}
            (dom/span #js {:className "c-icon c-icon--small"}
              (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})))
            (dom/span #js {:className "c-button__content"} "Add Conditions")))
        (dom/div #js {:className "u-column u-end"}
          (dom/input #js {:type "checkbox" :id "c-checkbox-1" :checked "true" :className "c-checkbox"})
          (dom/label #js {:htmlFor "c-checkbox-1"} " Required")))
      (dom/div #js {:className "o-editor__content"}
        (dom/div #js {:className "c-card c-card--round"}
          (dom/div #js {:className "o-editor__conditionals c-card__title"}
            (dom/div #js {:className "u-column--9"}
              (dom/span #js {:className "c-icon"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M7 10l5 5 5-5z"})))
              (dom/span #js {} "If response ")
              (dom/div #js {:className "c-dropdown"}
                (dom/button #js {:className "c-dropdown__toggle js-dropdown-toggle"} "is")
                (dom/ul #js {:id "test-dropdown" :aria-hidden "true" :className "c-dropdown__content" :tabIndex "-1"}
                  (dom/li #js {}
                    (dom/button #js {:className "c-dropdown__link"} "is"))
                  (dom/li #js {} (dom/button #js {:className "c-dropdown__link"} "is not"))
                  (dom/li #js {} (dom/button #js {:className "c-dropdown__link"} "contains"))))
              (dom/div #js {:className "c-dropdown"}
                (dom/button #js {:className "c-dropdown__toggle js-dropdown-toggle"} "Red wine")
                (dom/ul #js {:id "test-dropdown" :aria-hidden "true" :className "c-dropdown__content" :tabIndex "-1"}
                  (dom/li #js {}
                    (dom/button #js {:className "c-dropdown__link"} "Red Wine"))
                  (dom/li #js {}
                    (dom/button #js {:className "c-dropdown__link"} "White Wine"))
                  (dom/li #js {}
                    (dom/button #js {:className "c-dropdown__link"} "Crux Scotch Ale"))))
              (dom/span #js {} " then:"))
            (dom/div #js {:className "u-column--3 u-end"}
              (dom/button #js {:data-reactid ".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.0" :className "c-button c-button--icon"}
                (dom/svg #js {:version "1.1" :width "24" :height "24" :aria-labelledby "title" :role "img" :data-reactid ".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.0.0" :className "c-icon c-icon--delete " :viewBox "0 0 24 24"}
                  (dom/title #js {:data-reactid ".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.0.0.0"} "Delete")
                  (dom/path #js {:d "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" :data-reactid ".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.0.0.1"})))
              (dom/button #js {:className "c-button c-button--icon is-positive"}
                (dom/svg #js {:http "" :www.w3.org "" :2000 "" :svg "" :width "24" :height "24" :className "c-icon c-icon--done-all xmlns=" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"})))
              (dom/button #js {:className "c-button c-button--icon"}
                (dom/svg #js {:version "1.1" :width "24" :height "24" :aria-labelledby "title" :role "img" :data-reactid ".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.2" :className "c-icon c-icon--open-with " :viewBox "0 0 24 24"}
                  (dom/title #js {:data-reactid ".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.2.0"} "Open With")
                  (dom/path #js {:d "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z" :data-reactid ".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.2.1"})))))
          (dom/section #js {:className "o-editor is-active" :tabIndex "-1"}
            (dom/header #js {:role "toolbar" :className "o-editor__toolbar has-actions"}
              (dom/div #js {:className "o-editor__nav"}
                (dom/ul #js {:className "c-menu c-menu--inline"}
                  (dom/li #js {}
                    (dom/button #js {:className "c-menu__link is-active"} "Object"))
                  (dom/li #js {} (dom/button #js {:className "c-menu__link"} "Options"))))
              (dom/div #js {:className "o-editor__info"}
                (dom/div #js {:className "o-editor__extras"}
                  (dom/span #js {:title "Key Attribute" :className "c-badge c-badge--round c-badge--positive"}
                    (dom/span #js {:className "c-icon c-icon--small"}
                      (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                        (dom/path #js {:d "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}))))
                  (dom/span #js {:title "Recommended Object" :className "c-badge c-badge--round c-badge--alterable"} "N")
                  (dom/button #js {:title "Add to Favorites" :className "c-button--favorite is-active"}
                    (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon" :viewBox "0 0 24 24"}
                      (dom/path #js {:d "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})))
                  (dom/div #js {:className "o-editor__actions o-button-group"} " " "<!-- Done -->" " "
                    (dom/button #js {:className "c-button c-button--large o-editor__done"}
                      (dom/span #js {:className "c-icon is-positive"}
                        (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                          (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})))
                      (dom/span #js {:className "c-button__content u-hide@sm"} "Done"))
                    (dom/button #js {:className "c-button c-button--large"}
                      (dom/span #js {:className "c-icon"}
                        (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                          (dom/path #js {:d "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))))
                    (dom/button #js {:className "c-button c-button--large"}
                      (dom/span #js {:className "c-icon"}
                        (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                          (dom/path #js {:d "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"}))))))))
            (dom/div #js {:className "o-editor__content"}
              (dom/input #js {:value "Hello, I'm content inside an editor! :)" :className "c-input"}))
            (dom/footer #js {:className "o-editor__toolbar o-editor__toolbar--small"}
              (dom/div #js {:className "u-start"}
                (dom/button #js {:className "c-button c-button--anchor js-add-conditions"}
                  (dom/span #js {:className "c-icon c-icon--small"}
                    (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                      (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})))
                  (dom/span #js {:className "c-button__content"} "Add Conditions")))
              (dom/div #js {:className "u-column u-end"}
                (dom/input #js {:type "checkbox" :id "c-checkbox-1" :checked "true" :className "c-checkbox"})
                (dom/label #js {:htmlFor "c-checkbox-1"} " Required"))))
          (dom/button #js {:className "c-button c-button--anchor js-add-conditions"}
            (dom/span #js {:className "c-icon c-icon--small"}
              (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})))
            (dom/span #js {:className "c-button__content"} "Add Conditions")))))))

(defexample icon-bar
  "# Icon Bar"
  (dom/div #js {}
    (dom/nav #js {:className "o-iconbar"}
      (dom/button #js {:className "o-iconbar__item is-active"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})))
        (dom/span #js {:className "o-iconbar__label"} "Home"))
      (dom/button #js {:className "o-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})))
        (dom/span #js {:className "o-iconbar__label"} "Docs"))
      (dom/button #js {:className "o-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"})))
        (dom/span #js {:className "o-iconbar__label"} "Support"))
      (dom/button #js {:className "o-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:width "24" :height "24" :xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M12 0c-6.627 0-12 5.406-12 12.073 0 5.335 3.438 9.859 8.207 11.455.6.111.819-.262.819-.581l-.017-2.247c-3.337.729-4.042-1.424-4.042-1.424-.546-1.394-1.332-1.765-1.332-1.765-1.091-.749.083-.734.083-.734 1.205.084 1.839 1.244 1.839 1.244 1.071 1.845 2.81 1.312 3.492 1.002.109-.778.42-1.312.762-1.612-2.664-.305-5.466-1.341-5.466-5.967 0-1.319.468-2.395 1.234-3.24-.122-.307-.535-1.535.119-3.196 0 0 1.006-.324 3.3 1.238.957-.269 1.983-.402 3.003-.406 1.02.004 2.046.139 3.004.407 2.29-1.564 3.297-1.238 3.297-1.238.656 1.663.243 2.89.12 3.195.769.845 1.233 1.921 1.233 3.24 0 4.638-2.807 5.659-5.48 5.958.432.374.814 1.108.814 2.234 0 1.614-.016 2.915-.016 3.313 0 .321.218.697.826.579 4.765-1.599 8.2-6.123 8.2-11.455 0-6.667-5.373-12.073-12-12.073z"})))
        (dom/span #js {:className "o-iconbar__label"} "Github")))))


(defexample icon-rail
  "# Icon Rail Example

  Just add an extra modifier class `.o-iconbar--rail` and you'll get this effect.
  "
  (dom/div #js {}
    (dom/nav #js {:className "o-iconbar o-iconbar--rail"}
      (dom/button #js {:className "o-iconbar__item is-active"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})))
        (dom/span #js {:className "o-iconbar__label"} "Home"))
      (dom/button #js {:className "o-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})))
        (dom/span #js {:className "o-iconbar__label"} "Docs"))
      (dom/button #js {:className "o-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"})))
        (dom/span #js {:className "o-iconbar__label"} "Support"))
      (dom/button #js {:className "o-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:width "24" :height "24" :xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M12 0c-6.627 0-12 5.406-12 12.073 0 5.335 3.438 9.859 8.207 11.455.6.111.819-.262.819-.581l-.017-2.247c-3.337.729-4.042-1.424-4.042-1.424-.546-1.394-1.332-1.765-1.332-1.765-1.091-.749.083-.734.083-.734 1.205.084 1.839 1.244 1.839 1.244 1.071 1.845 2.81 1.312 3.492 1.002.109-.778.42-1.312.762-1.612-2.664-.305-5.466-1.341-5.466-5.967 0-1.319.468-2.395 1.234-3.24-.122-.307-.535-1.535.119-3.196 0 0 1.006-.324 3.3 1.238.957-.269 1.983-.402 3.003-.406 1.02.004 2.046.139 3.004.407 2.29-1.564 3.297-1.238 3.297-1.238.656 1.663.243 2.89.12 3.195.769.845 1.233 1.921 1.233 3.24 0 4.638-2.807 5.659-5.48 5.958.432.374.814 1.108.814 2.234 0 1.614-.016 2.915-.016 3.313 0 .321.218.697.826.579 4.765-1.599 8.2-6.123 8.2-11.455 0-6.667-5.373-12.073-12-12.073z"})))
        (dom/span #js {:className "o-iconbar__label"} "Github")))))

(defexample icon-bar-shifting
  "# Icon Bar Shifting Example

  Just add an extra modifier class `.o-iconbar--shifting` and you'll get this effect.
  "
  (dom/div #js {}
    (dom/nav #js {:className "o-iconbar o-iconbar--shifting is-mobile"}
      (dom/button #js {:className "o-iconbar__item is-active"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})))
        (dom/span #js {:className "o-iconbar__label"} "Home"))
      (dom/button #js {:className "o-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})))
        (dom/span #js {:className "o-iconbar__label"} "Docs"))
      (dom/button #js {:className "o-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"})))
        (dom/span #js {:className "o-iconbar__label"} "Support"))
      (dom/button #js {:className "o-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:width "24" :height "24" :xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M12 0c-6.627 0-12 5.406-12 12.073 0 5.335 3.438 9.859 8.207 11.455.6.111.819-.262.819-.581l-.017-2.247c-3.337.729-4.042-1.424-4.042-1.424-.546-1.394-1.332-1.765-1.332-1.765-1.091-.749.083-.734.083-.734 1.205.084 1.839 1.244 1.839 1.244 1.071 1.845 2.81 1.312 3.492 1.002.109-.778.42-1.312.762-1.612-2.664-.305-5.466-1.341-5.466-5.967 0-1.319.468-2.395 1.234-3.24-.122-.307-.535-1.535.119-3.196 0 0 1.006-.324 3.3 1.238.957-.269 1.983-.402 3.003-.406 1.02.004 2.046.139 3.004.407 2.29-1.564 3.297-1.238 3.297-1.238.656 1.663.243 2.89.12 3.195.769.845 1.233 1.921 1.233 3.24 0 4.638-2.807 5.659-5.48 5.958.432.374.814 1.108.814 2.234 0 1.614-.016 2.915-.016 3.313 0 .321.218.697.826.579 4.765-1.599 8.2-6.123 8.2-11.455 0-6.667-5.373-12.073-12-12.073z"})))
        (dom/span #js {:className "o-iconbar__label"} "Github")))))

(defexample listing-begin
  "# Listing Beginner Example"
  (let [example-class-modifier (if (om/get-state this :listing-visible) "" " u-hide")]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this update :listing-visible not)} "Show/Hide Example")
      (dom/div #js {:className (str "u-fixed--middle-center" example-class-modifier)}
        (dom/span #js {:className "c-icon c-icon--huge is-passive"}
          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"})))
        (dom/h1 #js {} "No widgets yet")
        (dom/p #js {:className "c-message--neutral"} "Create a widget to get started")))))

(defexample listing
  "# List View Example"
  (let [example-class-modifier (if (om/get-state this :listing-visible) "" " u-hide")]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this update :listing-visible not)} "Show/Hide Example")
      (dom/div #js {:className (str "o-listing" example-class-modifier)}
        (dom/div #js {:className "o-listing__status"}
          (dom/span #js {:className "o-listing__status-indicator c-icon is-positive"}
            (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
              (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))))
        (dom/div #js {:className "o-listing__info"}
          (dom/div #js {:className "o-listing__wrapper"}
            (dom/div #js {:className "o-listing__general"}
              (dom/div #js {:className "o-listing__name"}
                (dom/h1 #js {} "Item Title"))
              (dom/div #js {:className "o-listing__duration u-show@sm u-hide@md-up"} "14 days"))
            (dom/div #js {:className "o-listing__duration u-hide@sm"} "14 days"))
          (dom/div #js {:className "o-listing__actions c-dropdown--right u-column--4 u-end u-top"}
            (dom/div #js {:className "o-listing__action-group"}
              (dom/button #js {:title "Edit" :className "c-button c-button--icon"}
                (dom/span #js {:className "c-icon"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}))))
              (dom/button #js {:title "Preview" :className "c-button c-button--icon"}
                (dom/span #js {:className "c-icon"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}))))
              (dom/button #js {:title "Send" :className "c-button c-button--icon"}
                (dom/span #js {:className "c-icon"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}))))
              (dom/div #js {:className "c-dropdown c-dropdown--right"}
                (dom/button #js {:title "Duplicate, Delete & more" :className "c-button c-button--icon js-dropdown-toggle"}
                  (dom/span #js {:className "c-icon"}
                    (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                      (dom/path #js {:d "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))))
                (dom/ul #js {:className "c-dropdown__content"}
                  (dom/li #js {:className "u-hide@md-up"}
                    (dom/button #js {:title "Edit" :className "c-dropdown__link"}
                      (dom/span #js {:className "c-icon"}
                        (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                          (dom/path #js {:d "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}))) " Edit "))
                  (dom/li #js {:className "u-hide@md-up"}
                    (dom/button #js {:title "Preview" :className "c-dropdown__link"}
                      (dom/span #js {:className "c-icon"}
                        (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                          (dom/path #js {:d "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}))) " Preview "))
                  (dom/li #js {:className "u-hide@md-up"}
                    (dom/button #js {:title "Send" :className "c-dropdown__link"}
                      (dom/span #js {:className "c-icon"}
                        (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                          (dom/path #js {:d "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}))) " Send "))
                  (dom/li #js {}
                    (dom/button #js {:title "Favorite" :className "c-dropdown__link"}
                      (dom/span #js {:className "c-icon"}
                        (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                          (dom/path #js {:d "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}))) " Favorite "))
                  (dom/li #js {}
                    (dom/button #js {:title "Share" :className "c-dropdown__link"}
                      (dom/span #js {:className "c-icon"}
                        (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                          (dom/path #js {:d "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}))) " Share "))
                  (dom/li #js {}
                    (dom/button #js {:title "Duplicate" :className "c-dropdown__link"}
                      (dom/span #js {:className "c-icon"}
                        (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                          (dom/path #js {:d "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}))) " Duplicate "))
                  (dom/li #js {}
                    (dom/button #js {:title "Delete" :className "c-dropdown__link"}
                      (dom/span #js {:className "c-icon"}
                        (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                          (dom/path #js {:d "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))) " Delete ")))))))))))

(defexample modal-example
  "# Modal Example"
  (let [example-class-modifier (if (om/get-state this :modal-visible) " is-active" "")]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this assoc :modal-visible true)} "Show Example")
      (dom/div #js {:className (str "o-modal" example-class-modifier)}
        (dom/div #js {:className "o-modal__card"}
          (dom/div #js {:className "o-modal__title"}
            (dom/span #js {} "Modal Title")
            (dom/div #js {:className "o-modal__actions"}
              (dom/button #js {:className "o-modal__action"
                               :onClick   #(om/update-state! this assoc :modal-visible false)}
                (dom/span #js {:className "c-icon"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}))))))
          (dom/div #js {:className "o-modal__content u-row u-row--colapse"}
            (dom/p #js {} "This is a card in a modal, what will they think of next?")
            (dom/div #js {:className "o-modal__row"}
              (dom/button #js {:className "c-button c-button--anchor c-button--small"
                               :onClick   #(om/update-state! this assoc :modal-visible false)} "Close")))))
      (dom/div #js {:className (str "c-backdrop" example-class-modifier)}))))

(defexample modal-small
  "# Small Modal Example"
  (let [example-class-modifier (if (om/get-state this :modal-visible) " is-active" "")]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this assoc :modal-visible true)} "Show Example")
      (dom/div #js {:className (str "o-modal o-modal--small" example-class-modifier)}
        (dom/div #js {:className "o-modal__card"}
          (dom/div #js {:className "o-modal__title"}
            (dom/span #js {} "Modal Title")
            (dom/div #js {:className "o-modal__actions"}
              (dom/button #js {:className "o-modal__action"}
                (dom/span #js {:className "c-icon"} " ... "))))
          (dom/span #js {
                         :className "o-modal__close"
                         :onClick   #(om/update-state! this assoc :modal-visible false)}
            (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon" :viewBox "0 0 24 24"}
              (dom/path #js {:d "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))
          (dom/div #js {:className "o-modal__content"}
            (dom/p #js {} "This is a card in a modal, what will they think of next?"))))
      (dom/div #js {:className (str "c-backdrop" example-class-modifier)}))))


(defexample modal-large
  "# Large Modal Example"
  (let [example-class-modifier (if (om/get-state this :modal-visible) " is-active" "")]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this assoc :modal-visible true)} "Show Example")
      (dom/div #js {:className (str "o-modal o-modal--large" example-class-modifier)}
        (dom/div #js {:className "o-modal__card"}
          (dom/div #js {:className "o-modal__title"}
            (dom/span #js {} "Modal Title")
            (dom/div #js {:className "o-modal__actions"}
              (dom/button #js {:className "o-modal__action"
                               :onClick   #(om/update-state! this assoc :modal-visible false)}
                (dom/span #js {:className "c-icon"}
                  (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                    (dom/path #js {:d "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}))))))
          (dom/div #js {:className "o-modal__content u-row u-row--colapse"}
            (dom/p #js {} "This is a card in a modal, what will they think of next?")
            (dom/div #js {:className "o-modal__row"}
              (dom/button #js {:className "c-button c-button--anchor c-button--small"
                               :onClick   #(om/update-state! this assoc :modal-visible false)} "Close")))))
      (dom/div #js {:className (str "c-backdrop" example-class-modifier)}))))

(defexample modal-primary
  "# Primary Modal Example"
  (let [example-class-modifier (if (om/get-state this :modal-visible) " is-active" "")]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this assoc :modal-visible true)} "Show Example")
      (dom/div #js {:className (str "o-modal o-modal--primary" example-class-modifier)}
        (dom/div #js {:className "o-modal__card"}
          (dom/div #js {:className "o-modal__actions"}
            (dom/button #js {:className "o-modal__action"
                             :onClick   #(om/update-state! this assoc :modal-visible false)}
              (dom/span #js {:className "c-icon"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))))
          (dom/div #js {:className "o-modal__content u-row u-row--colapse"}
            (dom/p #js {} "This is a card in a modal, what will they think of next?"))))
      (dom/div #js {:className (str "c-backdrop" example-class-modifier)}))))

(defexample modal-success
  "# Success Modal Example"
  (let [example-class-modifier (if (om/get-state this :modal-visible) " is-active" "")]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this assoc :modal-visible true)} "Show Example")
      (dom/div #js {:className (str "o-modal o-modal--success" example-class-modifier)}
        (dom/div #js {:className "o-modal__card"}
          (dom/div #js {:className "o-modal__actions"}
            (dom/button #js {:className "o-modal__action"
                             :onClick   #(om/update-state! this assoc :modal-visible false)}
              (dom/span #js {:className "c-icon"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))))
          (dom/div #js {:className "o-modal__content u-row u-row--colapse"}
            (dom/p #js {} "This is a card in a modal, what will they think of next?"))))
      (dom/div #js {:className (str "c-backdrop" example-class-modifier)}))))

(defexample modal-warning
  "# Warning Modal Example"
  (let [example-class-modifier (if (om/get-state this :modal-visible) " is-active" "")]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this assoc :modal-visible true)} "Show Example")
      (dom/div #js {:className (str "o-modal o-modal--warning" example-class-modifier)}
        (dom/div #js {:className "o-modal__card"}
          (dom/div #js {:className "o-modal__actions"}
            (dom/button #js {:className "o-modal__action"
                             :onClick   #(om/update-state! this assoc :modal-visible false)}
              (dom/span #js {:className "c-icon"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))))
          (dom/div #js {:className "o-modal__content u-row u-row--colapse"}
            (dom/p #js {} "This is a card in a modal, what will they think of next?"))))
      (dom/div #js {:className (str "c-backdrop" example-class-modifier)}))))

(defexample sidebar
  "# Sidebar Example

  **Deprecated** We should be using the drawer component or 2-pane article layout instead.
  "
  (let [example-class-modifier (str (if (om/get-state this :sidebar-visible) "" " u-hide")
                                 (if (om/get-state this :sidebar-collapsed) " is-collapsed" ""))]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this update :sidebar-visible not)} "Show/Hide Example")
      (dom/nav #js {:style     #js {:left "50" :top "200" :width "16.25em" :height "300px"}
                    :className (str "o-sidebar o-sidebar--large" example-class-modifier)}
        (dom/div #js {:className "o-sidebar__controls"}
          (dom/input #js {:placeholder "Search library..." :className "c-input"})
          (dom/button #js {:className "c-button c-button--icon u-absolute--top-right"}
            (dom/svg #js {:version "1.1" :width "24" :height "24" :aria-labelledby "title" :role "img" :className "c-icon c-icon--search " :viewBox "0 0 24 24"}
              (dom/title #js {} "Search")
              (dom/path #js {:d "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))
          (dom/div #js {:className "c-dropdown c-dropdown--picker"}
            (dom/button #js {:className "c-button c-button--small"} " Filter items "
              (dom/svg #js {:version "1.1" :width "24" :height "24" :aria-labelledby "title" :role "img" :className "c-icon c-icon--arrow-drop-down" :viewBox "0 0 24 24"}
                (dom/title #js {} "Arrow Drop Down")
                (dom/path #js {:d "M7 10l5 5 5-5z"}))))
          (dom/button #js {:className "c-button c-button--anchor c-button--small"}
            (dom/svg #js {:version "1.1" :width "24" :height "24" :aria-labelledby "title" :role "img" :className "c-icon c-icon--remove-circle " :viewBox "0 0 24 24"}
              (dom/title #js {} "Remove Circle")
              (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"})) " Clear "))
        (dom/div #js {:className "o-accordion o-accordion--small"}
          (dom/div #js {:className "o-accordion__title is-nested is-active"} "Title 1")
          (dom/div #js {:className "o-accordion__content"}
            (dom/div #js {:className "o-accordion__group"}
              (dom/div #js {:className "o-accordion__info"} "View 1")
              (dom/div #js {:className "o-accordion__action"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-informative" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"}))))
            (dom/div #js {:className "o-accordion__group"}
              (dom/div #js {:className "o-accordion__info"} "View 2.1")
              (dom/div #js {:className "o-accordion__action"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon is-informative" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"})))))
          (dom/div #js {:className "o-accordion__title is-selected"} "Title 2")
          (dom/div #js {:className "o-accordion__title"} "Title 3")
          (map (fn [n] (dom/div #js {:className "o-accordion__group"}
                         (dom/div #js {:className "o-accordion__info"} (str "View " n))))
            (range 3 20))

          (dom/div #js {:className "o-accordion__title is-informative"}
            (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--small" :viewBox "0 0 24 24"}
              (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})) " Action 1 "))
        (dom/div #js {:className "o-sidebar__toggle"})))))

(defexample sidebar-right
  "# Sidebar Right side and inline example"
  (let [example-class-modifier (str (if (om/get-state this :sidebar-visible) "" " u-hide")
                                 (if (om/get-state this :sidebar-collapsed) " is-collapsed" ""))]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this update :sidebar-visible not)} "Show/Hide Example")
      (dom/nav #js {:className (str "o-sidebar o-sidebar--right o-sidebar--inline" example-class-modifier)}
        (dom/textarea #js {:placeholder "Start typing here..." :className "c-input c-input--multi-line c-input--note"})
        (dom/button #js {:className "c-button"} "Save")
        (dom/div #js {:className "o-sidebar__toggle o-sidebar__toggle--alt"
                      :onClick   #(om/update-state! this update :sidebar-collapsed not)})))))

(defexample toolbar
  "# Toolbar Example"
  (let [changed-menu (om/get-state this :changed-menu)
        ui-menu-open (if (= (:id changed-menu) :ui) (:open-state changed-menu) nil)
        lang-menu-open (if (= (:id changed-menu) :lang) (:open-state changed-menu) nil)
        ui-menu-class (str "c-dropdown__menu" (if ui-menu-open " is-active" ""))
        lang-menu-class (str "c-dropdown__content" (if lang-menu-open " is-active" ""))
        lang-item-selected (or (if (= (:id changed-menu) :lang) (:selected-item changed-menu) nil) "English-US")
        menu-action (fn [menu opened item]
                      (om/update-state! this assoc :changed-menu {:id menu :open-state opened :selected-item item}))]
    (dom/div #js {}
      (dom/div #js {:className "o-toolbar"}
        (dom/div #js {:className "u-column--bar"}
          (dom/span #js {:className "u-font-size--semi-medium"} "View Name"))

        (dom/div #js {:className "u-column--bar"}
          (dom/div #js {:className "c-dropdown"}
            (dom/button #js {:className "c-button c-button--icon u-hide@md-up"}
              (icons/icon :language))

            (dom/button #js {:className "c-button has-menu u-hide@sm"
                             :onClick   #(menu-action :lang (not lang-menu-open) lang-item-selected)} lang-item-selected)
            (dom/ul #js {:className lang-menu-class :tabIndex "-1"}
              (dom/li #js {} (dom/button #js {:className "c-dropdown__link"
                                              :onClick   #(menu-action :lang false "English-US")} "English-US"))
              (dom/li #js {} (dom/button #js {:className "c-dropdown__link"
                                              :onClick   #(menu-action :lang false "Español")} "Español"))))
          (dom/button #js {:className "c-button c-button--icon"} (icons/icon :help))

          (dom/span #js {:title "Kevin Mitnick"}
            (dom/button #js {:className "c-button c-button--icon"}
              (icons/icon :account_circle)))
          )))))

(defexample toolbar-small
  "### Small

  This toolbar is mainly used for specific operations and navigation for the current app you are using.
  "
  (let [selected-item (or (om/get-state this :selected-item) :widgets)
        get-class (fn [item] (str "c-menu__link" (if (= item selected-item) " is-active" "")))
        select-item (fn [item] (om/update-state! this assoc :selected-item item))
        ]
    (dom/div #js {}
      (dom/div #js {:className "o-toolbar o-toolbar--small"}
        (dom/ul #js {:className "c-menu c-menu--block"}
          (dom/li #js {}
            (dom/button #js {:className (get-class :widgets)
                             :onClick   #(select-item :widgets)} "Widgets"))
          (dom/li #js {}
            (dom/button #js {:className (get-class :doodads)
                             :onClick   #(select-item :doodads)} "Doodads"))
          (dom/li #js {}
            (dom/button #js {:className (get-class :apparatuses)
                             :onClick   #(select-item :apparatuses)} "Apparatuses"))
          (dom/li #js {}
            (dom/button #js {:className (get-class :things)
                             :onClick   #(select-item :things)} "Things")))))))


(defexample toolbar-secondary
  "### Secondary Toolbar Example

  The secondary toolbar is intended to only provide operations for the current view of the app your in.
  "
  (let [example-class-modifier (str (if (om/get-state this :toolbar-secondary-visible) "" " u-hide"))]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this update :toolbar-secondary-visible not)} "Show/Hide Example")
      (dom/div #js {:className (str "o-toolbar o-toolbar--secondary" example-class-modifier)}
        ;;"<!-- View Info for Mobile -->"
        (dom/div #js {:className "o-toolbar__info u-hide@md-up"}
          (dom/h1 #js {} "View Name"))
        ;;"<!-- View Actions for Mobile -->"
        (dom/div #js {:className "u-column u-hide@md-up u-end"}
          (dom/button #js {:title "Filter by tag" :className "c-button c-button--icon u-hide@md-up"}
            (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--filter_list" :viewBox "0 0 24 24"}
              (dom/path #js {:d "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"})))
          (dom/button #js {:title "Search widgets" :className "c-button c-button--icon u-hide@md-up"}
            (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--search" :viewBox "0 0 24 24"}
              (dom/path #js {:d "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))
          (dom/button #js {:title "List view" :className "c-button c-button--icon u-hide@md-up"}
            (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--list" :viewBox "0 0 24 24"}
              (dom/path #js {:d "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"})))
          (dom/button #js {:title "Create widgets" :className "c-button c-button--icon u-hide@md-up"}
            (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--create" :viewBox "0 0 24 24"}
              (dom/path #js {:d "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}))))
        ;;"<!-- View Actions for Tablets and Computers -->"
        (dom/div #js {:className "u-column--bar u-hide@sm"}
          (dom/div #js {:className "c-dropdown"}
            (dom/button #js {:className "c-button c-button--dropdown"} "Filter by tag")
            (dom/ul #js {:id "test-dropdown" :aria-hidden "true" :className "c-dropdown__content [is-active]" :tabIndex "-1"}
              (dom/li #js {}
                (dom/button #js {:className "c-dropdown__link"} "Water"))
              (dom/li #js {}
                (dom/button #js {:className "c-dropdown__link"} "Coffee"))
              (dom/li #js {}
                (dom/button #js {:className "c-dropdown__link"} "Tea"))))
          (dom/div #js {:className "u-wrapper"}
            (dom/input #js {:type "text" :placeholder "Search your widgets" :autoCapitalize "off" :className "c-input c-input--inset" :spellCheck "false" :autoCorrect "off" :autoComplete "off"})
            (dom/button #js {:type "submit" :disabled "" :aria-label "Submit" :className "c-button c-button--icon u-absolute--top-left"}
              (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--search" :viewBox "0 0 24 24"}
                (dom/path #js {:d "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))))
        (dom/div #js {:className "u-column--bar u-hide@sm"}
          (dom/div #js {:className "o-button-group--toggle"}
            (dom/button #js {:className "c-button"} "List")
            (dom/button #js {:className "c-button c-button--text"} "Detail"))
          (dom/button #js {:className "c-button c-button--secondary c-button--large c-button--dropdown"} "Create widgets"))))))

(defexample toolbar-secondary-example2
  "# Toolbar Secondary Example
  "
  (dom/div #js {}
    (dom/div #js {:className "o-toolbar o-toolbar--secondary"}
      ;;"<!-- View Info for Mobile -->"
      (dom/div #js {:className "o-toolbar__info u-hide@md-up"}
        (dom/h1 #js {} "View Name"))
      ;;"<!-- View Actions for Mobile -->"
      (dom/div #js {:className "u-column u-hide@md-up u-end"}
        (dom/button #js {:title "Filter by tag" :className "c-button c-button--icon u-hide@md-up"}
          (dom/svg #js {:className "c-icon c-icon--filter_list"} " ... "))
        (dom/button #js {:title "Search widgets" :className "c-button c-button--icon u-hide@md-up"}
          (dom/svg #js {:className "c-icon c-icon--search"} " ... "))
        (dom/button #js {:title "List view" :className "c-button c-button--icon u-hide@md-up"}
          (dom/svg #js {:className "c-icon c-icon--list"} " ... "))
        (dom/button #js {:title "Create widgets" :className "c-button c-button--icon u-hide@md-up"}
          (dom/svg #js {:className "c-icon c-icon--create"} " ... ")))
      ;;"<!-- View Actions for Tablets and Computers -->"
      (dom/div #js {:className "u-column u-hide@sm"}
        (dom/div #js {:className "u-row u-row--collapse u-middle"}
          (dom/div #js {:className "u-column--4"}
            (dom/div #js {:className "c-dropdown"}
              (dom/button #js {:className "c-button c-button--dropdown"} "Filter by tag")
              (dom/ul #js {:id "test-dropdown" :aria-hidden "true" :className "c-dropdown__content [is-active]" :tabIndex "-1"}
                (dom/li #js {}
                  (dom/button #js {:className "c-dropdown__link"} "Water"))
                (dom/li #js {}
                  (dom/button #js {:className "c-dropdown__link"} "Coffee"))
                (dom/li #js {}
                  (dom/button #js {:className "c-dropdown__link"} "Tea")))))
          (dom/div #js {:className "u-column"}
            (dom/div #js {:className "u-wrapper"}
              (dom/input #js {:type "text" :placeholder "Search your widgets" :autoCapitalize "off" :className "c-input c-input--inset" :spellCheck "false" :autoCorrect "off" :autoComplete "off"})
              (dom/button #js {:type "submit" :disabled "" :aria-label "Submit" :className "c-button c-button--icon u-absolute--top-left"}
                (dom/svg #js {:className "c-icon c-icon--search"} " ... "))))))
      (dom/div #js {:className "u-column u-end u-hide@sm"}
        (dom/div #js {:className "o-button-group--toggle"}
          (dom/button #js {:className "c-button"} "List")
          (dom/button #js {:className "c-button c-button--text"} "Detail"))
        (dom/button #js {:className "c-button c-button--secondary c-button--large c-button--dropdown"} "Create widgets")))))






;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF SECTIONS (within a feature set...e.g. components)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; NOTE: This is where you add the sections for index
(def sections
  (vec (sort-by :title
         [
          ;; NOTE: :examples is a list of example names, rendered in order given
          ;; First show the basic pattern, then modifiers, then elements.
          ;; This order is important to the learning process.
          {:id :avatar
           :title "Avatar"
           :documentation avatar-header
           :examples [
                      avatar
                      ]}
          {:id :badges
           :title "Badges"
           :documentation badge-header
           :examples [
                      badge
                      badge-button
                      badge-icon
                      ]}
          {:id :buttons
           :title "Buttons"
           :documentation button-header
           :examples [
                      button
                      button-shape
                      button-color
                      button-state
                      button-state-raised
                      button-icon
                      ]}
          {:id :card
           :title "Card"
           :documentation card-header
           :examples [
                      card
                      card-states
                      card-titlebar
                      card-rounded
                      card-transparent
                      card-ruled
                      card-zone
                      ]}
          {:id :checkboxes
           :title "Checkboxes"
           :documentation checkbox-header
           :examples [
                      checkboxes
                      ]}
          {:id :dropdowns
           :title "Dropdowns"
           :documentation dropdown-header
           :examples [
                      dropdown
                      dropdown-shape
                      dropdown-colors
                      dropdown-buttons
                      dropdown-search-multi
                      dropdown-data
                      ]}
          {:id :expanding_panel
           :title "Expansion panels"
           :documentation expansion-panel-header
           :examples [
                      expansion-panel
                      ]
           }
          {:id :fields
           :title "Fields"
           :documentation field-header
           :examples [
                      field
                      field-states
                      field-sizes
                      ]}
          {:id :inputs
           :title "Form Inputs"
           :documentation input-header
           :examples [
                      input
                      input-states
                      input-round
                      input-multi-line
                      input-collapsable
                      textarea
                      input-validation
                      ]}
          {:id :icons
           :title "Icons"
           :documentation icon-header
           :examples [
                      icons
                      icon-sizes
                      icon-colors
                      icon-states
                      icon-library
                      ]}
          {:id :labels
           :title "Labels"
           :documentation label-header
           :examples [
                      labels
                      label-icons
                      ]}
          {:id :lists
           :title "Lists"
           :documentation lists-header
           :examples [
                      lists
                      ]}
          {:id :loader
           :title "Loader"
           :documentation loader-header
           :examples [
                      loader
                      ]}
          {:id :messages
           :title "Messages"
           :documentation messages-header
           :examples [
                      messages
                      ]}
          {:id :menus
           :title "Menus"
           :documentation menu-header
           :examples [
                      menu
                      menu-inline
                      menu-block
                      ]}
          {:id :notifications
           :title "Notifications"
           :documentation notification-header
           :examples [
                      notification
                      notification-success
                      notification-warning
                      notification-error
                      notification-wide
                      ]}
          {:id :radio
           :title "Radio Buttons"
           :documentation radio-header
           :examples [
                      radio
                      radio-informative
                      radio-stacked]}
          {:id :switch
           :title "Switch"
           :documentation switch-header
           :examples [
                      switch
                      switch-icon
                      ]}
          {:id :table
           :title "Tables"
           :documentation tables-header
           :examples [
                      tables
                      ]}
          {:id :tooltip
           :title "Tooltips"
           :documentation tooltips-header
           :examples [
                      tooltips
                      tooltip-directions
                      tooltip-sizes
                      ]}

          ;; OBJECTS Start here


          {:id :accordion :title "Accordion" :examples [accordion accordion-sidebar accordion-nested]
           :documentation
               "# Accordion

               **Deprecated** Expansion panels are better designed to show more information in a flexible way. We also have the list component now for showing informational data.

               This object is redesigned to be un-opinionated and flexible for almost any interactive list you might need in your app. The simplified markup resembles this node list:
               ``` shell\n.o-accordion [ --inline | --right | --small ]\n   __title   [ is-active | is-nested | is-selected ]\n   __content [ is-active ]\n     __group\n       __info\n       __actions\n         __action [ --informative | --success ]\n         __meta\n           __meta-item\n```"}
          {:id :button-group :title "Button Groups" :examples [button-group button-stacked button-toggle postfix-group]}
          {:id :calendar-example :title "Calendar" :examples [calendar-example]
           :documentation
               "# Calendar

               This is a month view calendar for overlaying on input fields that control date selection."}
          {:id :drawer :title "Drawer" :examples [drawer]}
          {:id :editor-inactive :title "Editor" :examples [editor-inactive editor-active]}
          {:id :icon-bar :title "Icon Bar" :examples [icon-bar icon-rail icon-bar-shifting]}
          {:id :listing :title "Listing" :examples [listing-begin listing]}
          {:id :modal :title "Modal" :examples [modal-example modal-small modal-large modal-primary modal-success modal-warning]}
          {:id :sidebar :title "Sidebar" :examples [sidebar sidebar-right]}
          {:id :toolbar :title "Toolbar" :examples [toolbar toolbar-small toolbar-secondary]}
          ])))

