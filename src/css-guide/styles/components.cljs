(ns styles.components
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react defexample defarticle defview defviewport]]
            [untangled.ui.layout :as l]
            [untangled.icons :as icons]
            [om.dom :as dom]
            [untangled.ui.elements :as e]))

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
    (l/col {:width 2}
      (dom/span #js {:className "c-avatar"} "AV"))
    (l/col {:width 2}
      (dom/span #js {:className "c-avatar"} (icons/icon :help)))
    (l/col {:width 2}
      (dom/span #js {:className "c-avatar c-avatar--primary"} (icons/icon :supervisor_account)))
    (l/col {:width 2}
      (dom/span #js {:className "c-avatar c-avatar--accent"} (icons/icon :supervisor_account)))
    (l/col {:width 2}
      (dom/span #js {:className "c-avatar c-avatar--bordered c-avatar--primary"} "KB"))
    (l/col {:width 2}
      (dom/span #js {:className "c-avatar c-avatar--bordered c-avatar--accent"} "KB"))
    (l/col {:width 12}
      (dom/span #js {:className "c-avatar c-avatar--medium"} "MD")
      (dom/span #js {:className "c-avatar c-avatar--large"} "LG")
      (dom/span #js {:className "c-avatar c-avatar--xlarge"} "XL")
      (dom/span #js {:className "c-avatar c-avatar--huge"} "HU"))))

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
    (dom/button #js {:className "c-button c-button--raised"} " Messages "
      (dom/span #js {:className "c-badge"} "37"))
    (dom/button #js {:className "c-button c-button--raised c-button--primary"} " Messages "
      (dom/span #js {:className "c-badge"} "37"))
    (dom/button #js {:className "c-button c-button--raised c-button--accent"} " Messages "
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
      (dom/button #js {:className "c-button c-button--primary c-button--circular"} (icons/icon :add))
      (dom/div #js {:className "u-font-size--small u-leader"} "Circular button"))
    (dom/div #js {:className "u-column"}
      (dom/button #js {:className "c-button c-button--primary c-button--raised"} "Button")
      (dom/div #js {:className "u-font-size--small u-leader"} "Raised button"))
    (dom/div #js {:className "u-column"}
      (dom/button #js {:className "c-button c-button--primary"} "Button")
      (dom/div #js {:className "u-font-size--small u-leader"} "Flat button"))))

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
  (dom/div #js {:className "u-row u-center"}
    (dom/div #js {:className "c-card c-card--primary c-card--bordered c-card--wide"}
     (dom/div #js {:className "c-card__title c-card__title--image-bottom-right"
                   :style #js {:backgroundImage "url('img/bubbles.png')"}}
       (dom/h1 #js {:className "c-card__title-text"} "Title"))
     (dom/div #js {:className "c-card__supporting-text"} "Suspendisse potenti. Phasellus ac ex sit amet erat elementum
    suscipit id sed sapien. Sed sit amet sagittis ipsum.")
     (dom/div #js {:className "c-card__actions"}
       (dom/button #js {:className "c-button c-button--primary"} "View Updates")))))

(defexample card-transparent
  "### Transparent Card"
  (dom/div #js {:className "c-card c-card--transparent"}
    (dom/div #js {:className "c-card__title"}
      (dom/h1 #js {:className "c-card__title-text"} "Title"))
    (dom/div #js {:className "c-card__supporting-text"} "This gives you the basic box properties without any background color or text color.")))

(defexample card-ruled
  "### Ruled Card"
  (dom/div #js {:className "u-wrapper"}
    (dom/div #js {:className "c-card c-card--bordered"}
      (dom/div #js {:className "c-card__title"}
        (dom/h1 #js {:className "c-card__title-text"} "Title"))
      (dom/div #js {:className "c-card__supporting-text"} "Suspendisse potenti. Phasellus ac ex sit amet erat elementum
    suscipit id sed sapien. Sed sit amet sagittis ipsum. A simple card, horizontal ruled.")
      (dom/div #js {:className "c-card__actions"}
       (dom/button #js {:className "c-button c-button--accent"} "Action")))))

(defexample card-states
  "### States"
  (dom/div nil
    (dom/div #js {:className "c-card c-card--row is-active u-trailer--half"}
      (dom/div #js {:className "c-card__title"}
        (dom/h1 #js {:className "c-card__title-text"} "Title"))
      (dom/div #js {:className "c-card__supporting-text"} "I could have used lorem ipsum, but what's the fun in that?"))
    (dom/div #js {:className "c-card c-card--row is-inactive"}
      (dom/div #js {:className "c-card__title"}
        (dom/h1 #js {:className "c-card__title-text"} "Title"))
      (dom/div #js {:className "c-card__supporting-text"} "I could have used lorem ipsum, but what's the fun in that?"))
    ))

;; -------------------------
;; Checkboxes
;; -------------------------

(def checkbox-header
  "# Checkboxes")

(defexample checkboxes
  "The following examples show the various rendered states of checkboxes."
  (dom/div #js {}
    ;; Single checkbox, no label text
    (dom/input #js {:id "checkbox-1" :type "checkbox" :className "c-checkbox"})
    (dom/label #js {:htmlFor "checkbox-1"} \u00A0)


    (dom/input #js {:id "checkbox-1" :type "checkbox" :className "c-checkbox"})
    (dom/label #js {:htmlFor "checkbox-1"} "Checkbox")

    (dom/input #js {:id "checkbox-2" :type "checkbox" :checked true :className "c-checkbox"})
    (dom/label #js {:htmlFor "checkbox-2"} "Checked Checkbox")

    (dom/input #js {:id "checkbox-3" :type "checkbox" :className "c-checkbox is-indeterminate"})
    (dom/label #js {:htmlFor "checkbox-3"} "Indeterminate Checkbox")

    (dom/input #js {:id "checkbox-4" :type "checkbox" :className "c-checkbox" :disabled true})
    (dom/label #js {:htmlFor "checkbox-4"} "Disabled Checkbox")

    (dom/input #js {:id "checkbox-5" :type "checkbox" :checked true :className "c-checkbox" :disabled true})
    (dom/label #js {:htmlFor "checkbox-5"} "Disabled Checked Checkbox")

    (dom/input #js {:id "checkbox-5" :type "checkbox" :className "c-checkbox is-indeterminate" :disabled true})
    (dom/label #js {:htmlFor "checkbox-5"} "Disabled Indeterminate Checkbox")))

(defn toggle-open [this] (om/update-state! this update :open not))


;; -------------------------
;; Menus
;; -------------------------

(def menus-header
  "# Menus")

(defexample menus
  "### Basic

  This example uses component local state to toggle the is-active class to open/close the dropdown."
  (let [open (boolean (om/get-state this :open))
        selections ["Apples" "Oranges" "Banannas"]
        current (or (om/get-state this :selection) "Not Selected")]
    (dom/div #js {:className (str "has-menu" (when open " is-active")) :style #js {:width "150px"}}
      (dom/button #js {:onClick   #(om/update-state! this update :open not)
                       :className "c-button "} current)
      (dom/div #js {:id          "test-dropdown"
                   :tabIndex    "-1"
                   :aria-hidden "true"
                   :className   "c-menu"}
        (dom/div #js {:className "c-menu__group"}
          (map (fn [s]
                (dom/div #js {:key s :onClick (fn [evt]
                                                (om/update-state! this assoc :open false)
                                                (om/update-state! this assoc :selection s)
                                                )}
                  (dom/button #js {:className (str "c-menu__item" (when (= s current) " is-active"))} s))) selections))))))

(defexample menus-shape
  "### Shape and form"
  (dom/div nil
    ;; Top left
    (let [open       (boolean (om/get-state this :open))
         selections ["Apples" "Oranges" "Banannas"]
         current    (or (om/get-state this :selection) "Top Left Aligned")]
      (dom/div #js {:className (str "has-menu" (when open " is-active")) :style #js {:width "180px"}}
        (dom/button #js {:onClick   #(om/update-state! this update :open not)
                         :className "c-button "} current)
        (dom/ul #js {:id        "test-dropdown" :tabIndex "-1" :aria-hidden "true"
                     :className "c-menu c-menu--top-left"}
          (map (fn [s]
                 (dom/li #js {:key s :onClick (fn [evt]
                                                (om/update-state! this assoc :open false)
                                                (om/update-state! this assoc :selection s))}
                   (dom/button #js {:className (str "c-menu__item" (when (= s current) " is-active"))} s))) selections))))

    ;; Bottom left

    (let [open       (boolean (om/get-state this :open))
          selections ["Apples" "Oranges" "Banannas"]
          current    (or (om/get-state this :selection) "Bottom Left Aligned")]
      (dom/div #js {:className (str "has-menu" (when open " is-active")) :style #js {:width "180px"}}
        (dom/button #js {:onClick   #(om/update-state! this update :open not)
                         :className "c-button "} current)
        (dom/ul #js {:id        "test-dropdown" :tabIndex "-1" :aria-hidden "true"
                     :className "c-menu"}
          (map (fn [s]
                 (dom/li #js {:key s :onClick (fn [evt]
                                                (om/update-state! this assoc :open false)
                                                (om/update-state! this assoc :selection s))}
                   (dom/button #js {:className (str "c-menu__item" (when (= s current) " is-active"))} s))) selections))))

    ;; Top right

    (let [open       (boolean (om/get-state this :open))
          selections ["Apples" "Oranges" "Banannas"]
          current    (or (om/get-state this :selection) "Top Right Aligned")]
      (dom/div #js {:className "u-end"}
        (dom/div #js {:className (str "has-menu" (when open " is-active")) :style #js {:width "180px"}}
          (dom/button #js {:onClick   #(om/update-state! this update :open not)
                           :className "c-button "} current)
          (dom/ul #js {:id        "test-dropdown" :tabIndex "-1" :aria-hidden "true"
                       :className "c-menu c-menu--top-right"}
            (map (fn [s]
                   (dom/li #js {:key s :onClick (fn [evt]
                                                  (om/update-state! this assoc :open false)
                                                  (om/update-state! this assoc :selection s))}
                     (dom/button #js {:className (str "c-menu__item" (when (= s current) " is-active"))} s))) selections)))))


    ;; Bottom right

    (let [open (boolean (om/get-state this :open))]
    (dom/div #js {:className "u-end" :style #js {:width "180px"}}
      (dom/div #js {:className (str "has-menu" (when open " is-active"))}
        (dom/button #js {:onClick #(toggle-open this) :className "c-button "} "Bottom Right Aligned")
        (dom/div #js {:id "test-dropdown" :aria-hidden "true" :className "c-menu c-menu--bottom-right" :tabIndex "-1"}
          (dom/div #js {:className "c-menu__group"}
            (dom/button #js {:className (str "c-menu__item")}
              (dom/div #js {:className "c-menu__item-icon"} (icons/icon :done))
              "Show ruler")
            (dom/button #js {:className (str "c-menu__item")}
              (dom/div #js {:className "c-menu__item-icon"} (icons/icon :done))
              "Show grid"))
          (dom/div #js {:className "c-menu__group"}
            (dom/button #js {:className (str "c-menu__item")}
             (dom/div #js {:className "c-menu__item-icon"})
             "Hide layout")
          (dom/button #js {:className (str "c-menu__item")}
            (dom/div #js {:className "c-menu__item-icon"} (icons/icon :done))
            "Show bleed"))
          ))))))


(defexample menus-search-multi
  "### Multi-Select, Searchable Dropdown"
  (let [open (boolean (om/get-state this :open))
        items (mapv #(str "Item " %) (range 1 20))]
    (dom/div #js {:className (str "has-menu" (when open " is-active")) :style #js {:width "180px"}}
      (dom/button #js {:onClick #(toggle-open this) :className "c-button c-button--dropdown "} "Filter")
      (dom/div #js {:id "test-dropdown" :aria-hidden "true" :className "c-menu c-menu--large" :tabIndex "-1"}
        (dom/div #js {:className "c-field"}
          (icons/icon :search)
          (dom/input #js {:type "text" :placeholder "Search..." :className "c-field__input"}))
        (dom/div #js {:className "c-menu__viewer"}
          (map (fn [item]
                 (dom/div #js {:key item :className "u-leader--sixth u-trailer--sixth"}
                   (dom/input #js {:type "checkbox" :id (str item "-cb") :className "c-checkbox"})
                   (dom/label #js {:htmlFor (str item "-cb")} item)))
            items))
        (dom/button #js {:onClick #(om/update-state! this assoc :open false) :className "c-button c-button--primary c-button--wide"} "Apply")))))


(defexample menus-data
  "### Multiple list group selection

  This is a control that is meant to let you view what various dropdowns would show, for example in cases
  of UI that lets you configure UI.

  Note: The dropdown list underneath should not be enabled when the dropdown list is visible. Doing this fosters a better interaction for the user."
  (let [open (boolean (om/get-state this :open))
        name (or (om/get-state this :menu-name) "Menu 1")
        menu-1-items (mapv #(str "Item " %) (range 1 5))
        menu-2-items (mapv #(str "Other " %) (range 1 3))
        menu (or (om/get-state this :menu) menu-1-items)]

    (dom/div nil
      (l/row {}
        (l/col {:width 4}
          (dom/div #js {:className "c-card c-card--collapse"}
            (dom/div #js {:className (str "has-menu" (when open " is-active"))}
             (dom/button #js {:onClick   #(toggle-open this)
                              :className "c-button c-button--wide"} (str "List: " name))
             (dom/div #js {:id        "test-dropdown" :aria-hidden "true"
                           :className "c-menu" :tabIndex "-1"}
               (dom/button #js {:onClick   #(om/update-state! this assoc :open false :menu menu-1-items :menu-name "Menu 1")
                                :className "c-menu__item"} "Menu 1")
               (dom/button #js {:onClick   #(om/update-state! this assoc :open false :menu menu-2-items :menu-name "Menu 2")
                                :className "c-menu__item"} "Menu 2")))
           (dom/div #js {:className "c-list" :tabIndex "-1"}
             (map (fn [item]
                    (dom/div #js {:className "c-list__row c-list__row--bordered is-selectable" :key item}
                      (dom/div #js {:className "c-list__tile"} item))) menu))))))))

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
                   :tabIndex "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"
                     :onClick #(om/update-state! this update :expanded-1 not)}
         (dom/div #js {:className "c-expansion-panel__title"} "Trip name")
         (dom/div #js {:className "c-expansion-panel__info"}
           (when-not expanded-1
             "Caribbean cruise"))
         (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
       (dom/div #js {:className "c-expansion-panel__secondary-content"}
         (dom/input #js {:className "c-field" :type "text" :placeholder "Type in a name for your trip..." :value "Caribbean cruise"})
         (dom/div #js {:className "c-expansion-panel__actions"}
           (l/row {:density :collapse}
             (dom/div #js {:className "u-column--12 u-end"}
               (dom/button #js {:className "c-button"} "Cancel")
               (dom/button #js {:className "c-button c-button--primary"} "Save"))))
         )))

    (let [expanded-2 (boolean (om/get-state this :expanded-2))]
     (dom/div #js {:className (str "c-expansion-panel" (when expanded-2 " is-expanded"))
                   :tabIndex  "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"
                     :onClick   #(om/update-state! this update :expanded-2 not)}
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
             (dom/div #js {:className "u-helper-text"}
               (dom/div nil "Select your destination of choice")
               (dom/div nil (dom/a #js {:href "http://"} "Learn more")))))
         (dom/div #js {:className "c-expansion-panel__actions"}
           (l/row {:density :collapse}
             (dom/div #js {:className "u-column--12 u-end"}
               (dom/button #js {:className "c-button"} "Cancel")
               (dom/button #js {:className "c-button c-button--primary"} "Save"))))
         )))

    (let [expanded-3 (boolean (om/get-state this :expanded-3))]
      (dom/div #js {:className (str "c-expansion-panel" (when expanded-3 " is-expanded"))
                    :tabIndex "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"
                     :onClick #(om/update-state! this update :expanded-3 not)}
         (dom/div #js {:className "c-expansion-panel__title"} "Start and end dates")
         (dom/div #js {:className "c-expansion-panel__info"}
           (when-not expanded-3 "Start date: Feb 29, 2016"))
         (dom/div #js {:className "c-expansion-panel__info"}
           (when-not expanded-3 "End date: Not set"))
         (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
       (dom/div #js {:className "c-expansion-panel__secondary-content"} "Controls for dates")))

    (let [expanded-4 (boolean (om/get-state this :expanded-4))]
      (dom/div #js {:className (str "c-expansion-panel" (when expanded-4 " is-expanded"))
                    :tabIndex "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"
                     :onClick #(om/update-state! this update :expanded-4 not)}
         (dom/div #js {:className "c-expansion-panel__title"} "Carrier")
         (dom/div #js {:className "c-expansion-panel__info"}
           (when-not expanded-4 "The best cruise line"))
         (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
       (dom/div #js {:className "c-expansion-panel__secondary-content"} "Controls for carrier")))

    (let [expanded-5 (boolean (om/get-state this :expanded-5))]
      (dom/div #js {:className (str "c-expansion-panel" (when expanded-5 " is-expanded"))
                    :tabIndex "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"
                     :onClick #(om/update-state! this update :expanded-5 not)}
         (dom/div #js {:className "c-expansion-panel__title"}
           (dom/div nil "Meal preferences")
           (dom/div #js {:className "c-message--neutral"} "Optional"))
         (dom/div #js {:className "c-expansion-panel__info"}
           (when-not expanded-5 "Vegetarian"))
         (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
       (dom/div #js {:className "c-expansion-panel__secondary-content"} "Stuff here"))
     )))

(defexample expansion-panel-survey
  "### Example: Editing a question

  As another example of how to use this we look at how you would edit a survey question and apply conditional questions to it."

  (dom/div nil
    (let [expanded-1 (boolean (om/get-state this :expanded-1))]
     (dom/div #js {:className (str "c-expansion-panel" (when expanded-1 " is-expanded"))
                   :tabIndex "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"
                     :onClick #(om/update-state! this update :expanded-1 not)}
         (dom/div #js {:className "c-expansion-panel__title"} "Question")
         (dom/div #js {:className "c-expansion-panel__info"}
           (when-not expanded-1 "What kind of beverage do you prefer?"))
         (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
       (dom/div #js {:className "c-expansion-panel__secondary-content"}
         (l/row {:density :collapse :valign :middle}
           (l/col {:width 1}
             (dom/label #js {:htmlFor "input1"} "Text"))
           (l/col {:width 9}
             (dom/input #js {:className "c-field" :id "input1" :type "text" :placeholder "Type a question..." :value "How was your last stay at the premium village?"}))
           (l/col {:width 2 :halign :end}
             (dom/label #js {:htmlFor "h-switch-input-1"} "Required?")
             (dom/div #js {:className "c-switch"}
               (dom/input #js {:type      "checkbox"
                               :id        "h-switch-input-1"
                               :checked   true
                               :className "c-switch__input"})
               (dom/span #js {:className "c-switch__paddle"
                              :htmlFor   "h-switch-input-1"}))))

         (l/row {:density :collapse :valign :middle :className "u-trailer"}
           (l/col {:width 1}
             (dom/label #js {:htmlFor "input2"} "Short label"))
           (l/col {:width 9}
             (dom/input #js {:className "c-field" :id "input2" :type "text" :placeholder "Type a short question..." :value "How was your last stay?"}))
           )


         (l/row {}
           (l/col {:width 9 :push 1}

            (l/row {:density :collapse :className "u-trailer" :valign :bottom :halign :center}
              (l/col {:className "u-column has-xpipe has-start-pipe" :halign :center}
                (icons/icon :sentiment_very_dissatisfied))
              (l/col {:className "u-column has-xpipe" :halign :center}
                (dom/label #js {:className "is-optional u-trailer--third"}
                  "Extremely dissatisfied")
                (dom/input #js {:className "c-radio" :type "radio" :value "1" :id "sel1" :name "q1"})
                (dom/label #js {:htmlFor "sel1"} \u00A0))
              (l/col {:className "u-column has-xpipe" :halign :center}
                (dom/label #js {:className "is-optional u-trailer--third"}
                  "Moderately dissatisfied")
                (dom/input #js {:className "c-radio" :type "radio" :value "2" :id "sel2" :name "q1"})
                (dom/label #js {:htmlFor "sel1"} \u00A0))
              (l/col {:className "u-column has-xpipe" :halign :center}
                (dom/label #js {:className "is-optional u-trailer--third"}
                  "Slightly dissatisfied")
                (dom/input #js {:className "c-radio" :type "radio" :value "3" :id "sel3" :name "q1"})
                (dom/label #js {:htmlFor "sel1"} \u00A0))
              (l/col {:className "u-column has-xpipe" :halign :center}
                (dom/label #js {:className "is-optional u-trailer--third"}
                  "Neither satisfied nor dissatisfied")
                (dom/input #js {:className "c-radio" :type "radio" :value "4" :id "sel4" :name "q1"})
                (dom/label #js {:htmlFor "sel1"} \u00A0))
              (l/col {:className "u-column has-xpipe" :halign :center}
                (dom/label #js {:className "is-optional u-trailer--third"}
                  "Slightly satisfied")
                (dom/input #js {:className "c-radio" :type "radio" :value "5" :id "sel5" :name "q1"})
                (dom/label #js {:htmlFor "sel1"} \u00A0))
              (l/col {:className "u-column has-xpipe" :halign :center}
                (dom/label #js {:className "is-optional u-trailer--third"}
                  "Moderately satisfied")
                (dom/input #js {:className "c-radio" :type "radio" :value "6" :id "sel6" :name "q1"})
                (dom/label #js {:htmlFor "sel1"} \u00A0))
              (l/col {:className "u-column has-xpipe" :halign :center}
                (dom/label #js {:className "is-optional u-trailer--third"}
                  "Extremely satisfied")
                (dom/input #js {:className "c-radio" :type "radio" :value "7" :id "sel7" :name "q1"})
                (dom/label #js {:htmlFor "sel1"} \u00A0))
              (l/col {:className "u-column has-xpipe has-end-pipe" :halign :center}
                (icons/icon :sentiment_very_satisfied))
              )))

         (dom/div #js {:className "c-expansion-panel__actions"}
           (l/row {:density :collapse}
             (dom/div #js {:className "u-column--12 u-end"}
               (dom/button #js {:className "c-button"} "Options")
               (dom/button #js {:className "c-button"} "Move")
               (dom/button #js {:className "c-button c-button--accent"} "Add Conditional")
               (dom/button #js {:className "c-button c-button--primary"} "Save"))))
         )))

    (let [expanded-2 (boolean (om/get-state this :expanded-2))]
     (dom/div #js {:className (str "c-expansion-panel" (when expanded-2 " is-expanded"))
                   :tabIndex  "0"}
       (dom/div #js {:className "c-expansion-panel__list-content"
                     :onClick   #(om/update-state! this update :expanded-2 not)}
         (dom/div #js {:className "c-expansion-panel__title"} "Conditional")
         (dom/div #js {:className "c-expansion-panel__info"}
           (if-not expanded-2
             "If beverage prefrerence is red wine."
             (dom/span nil "Select conditions first" (icons/icon :help_outline))))
         (dom/div #js {:className "c-expansion-panel__info"}
           (if-not expanded-2 "Would you like our gm to get in touch?"))
         (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
       (dom/div #js {:className "c-expansion-panel__secondary-content"}

         (l/row {:density :collapse :valign :middle :className "u-trailer"}
           (l/col {:width 1}
             (dom/label nil "If answer ")
             )
           (l/col {:width 1}
             (dom/span #js {:className "has-menu"}
               (dom/button #js {:className "c-button"} "is"))
             )
           (l/col {:width 2}
             (dom/span #js {:className "has-menu"}
               (dom/button #js {:className "c-button"} "exactly"))
             )
           (l/col {:width 2}
             (dom/span #js {:className "has-menu"}
               (dom/button #js {:className "c-button"} "red wine"))
             )
           )

         (l/row {:density :collapse :valign :middle}
           (l/col {:width 1}
             (dom/label #js {:htmlFor "input1"} "Text"))
           (l/col {:width 9}
             (dom/input #js {:className "c-field" :id "input1" :type "text" :placeholder "Type a question..." :value "Would you like our general manager to get in touch with you?"}))
           (l/col {:width 2 :halign :end}
             (dom/label #js {:htmlFor "h-switch-input-1"} "Required?")
             (dom/div #js {:className "c-switch"}
               (dom/input #js {:type      "checkbox"
                               :id        "h-switch-input-1"
                               :className "c-switch__input"})
               (dom/span #js {:className "c-switch__paddle"
                              :htmlFor   "h-switch-input-1"}))))

         (l/row {:density :collapse :valign :middle :className "u-trailer"}
           (l/col {:width 1}
             (dom/label #js {:htmlFor "input2"} "Short label"))
           (l/col {:width 9}
             (dom/input #js {:className "c-field" :id "input2" :type "text" :placeholder "Type a question..." :value "Would you like our gm to get in touch?"})))

         (l/row {}
           (l/col {:width 11 :push 1}
            (l/row {:density :collapse :valign :middle :distribute-extra-columns :between}
             (l/col {:width 12 :className "u-trailer--quarter"}
               (dom/input #js {:className "c-radio c-radio--expanded" :type "radio" :value "1" :id "sel1" :name "q1"})
               (dom/label #js {:htmlFor "sel1"} "Yes")
               )
             (l/col {:width 12}
               (dom/input #js {:className "c-radio c-radio--expanded" :type "radio" :value "5" :id "sel5" :name "q1"})
               (dom/label #js {:htmlFor "sel1"} "No")))))

         (dom/div #js {:className "c-expansion-panel__actions"}
           (l/row {:density :collapse}
             (dom/div #js {:className "u-column--12 u-end"}
               (dom/button #js {:className "c-button"} "Options")
               (dom/button #js {:className "c-button"} "Move")
               (dom/button #js {:className "c-button c-button--primary"} "Save"))))

         )))


    (let [expanded-3 (boolean (om/get-state this :expanded-3))]
      (dom/div #js {:className (str "c-expansion-panel" (when expanded-3 " is-expanded"))
                    :tabIndex  "0"}
        (dom/div #js {:className "c-expansion-panel__list-content"
                      :onClick   #(om/update-state! this update :expanded-3 not)}
          (dom/div #js {:className "c-expansion-panel__title"} "Conditional")
          (dom/div #js {:className "c-expansion-panel__info"}
            (if-not expanded-3
              "Choose a question"
              (dom/span nil "Select conditions first" (icons/icon :help_outline))))
          (dom/div #js {:className "c-expansion-panel__expand-icon"} (icons/icon :expand_more)))
        (dom/div #js {:className "c-expansion-panel__secondary-content"}

          (l/row {:density :collapse :valign :middle :className "u-trailer"}
            (l/col {:width 1}
              (dom/label nil "If answer ")
              )
            (l/col {:width 1}
              (dom/span #js {:className "has-menu"}
                (dom/button #js {:className "c-button"} "is"))
              )
            (l/col {:width 2}
              (dom/span #js {:className "has-menu"}
                (dom/button #js {:className "c-button"} "exactly"))
              )
            (l/col {:width 2}
              (dom/span #js {:className "has-menu"}
                (dom/button #js {:className "c-button"} "red wine"))
              )
            )

          (l/row {:density :collapse :valign :middle :halign :center :className "u-trailer"}
            (dom/button #js {:className "c-button c-button--primary c-button--raised"} "Choose a question")
            )

          (dom/div #js {:className "c-expansion-panel__actions"}
            (l/row {:density :collapse}
              (dom/div #js {:className "u-column--12 u-end"}
                (dom/button #js {:className "c-button"} "Options")
                (dom/button #js {:className "c-button"} "Move")
                (dom/button #js {:className "c-button c-button--primary"} "Save"))))

          )))


    ))


;; -------------------------
;; Field
;; -------------------------

(def field-header
  "# Fields")

(defexample field
  "### Basic"
  (dom/div nil
    (dom/input #js {:type "text" :required "true" :placeholder "Required field" :className "c-field"})
    (dom/input #js {:type "text" :placeholder "Optional field" :className "c-field"})
    (mapv (fn [typ] (dom/div #js {:key typ :className ""}
                      (dom/input #js {:type typ :placeholder typ :className "c-field"})))
          ["text" "password" "date" "datetime" "datetime-local" "month" "week" "email" "number" "search" "tel" "time" "url" "color"])

    ;; File upload
    (l/row {:density :collapse}
      (l/col {:width 1}
        ;; This is the button to init the upload dialog
        (dom/label #js {}
         (dom/span #js {:className "c-button c-button--circular c-button--primary c-button--dense"}
           (icons/icon :file_upload)
           (dom/input #js {:type "file" :className "u-hide" :id "file-input-file"}))))
      (l/col {:width 3}
        ;; This is the input that displays the file name when selected
        ;; When you have multiple files selected, this label should read "X files selected"
        (dom/input #js {:type "text" :className "c-field" :disabled true :readOnly true :id "file-input-text"})
        (dom/label #js {:htmlFor "file-input-text"}))
      )
    ))

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
    (dom/input #js {:type "text" :placeholder "ERROR" :className "c-field is-error"})
    (dom/input #js {:type "text" :placeholder "Disabled" :className "c-field" :disabled true})
    ))

(defexample field-icon
  "### Icons"
  (l/row {:density :collapse}
    (dom/div #js {:className "c-icon-column"}
      (icons/icon :search :className ["c-icon--framed"]))
    (l/col {:className "u-column"}
      (dom/div #js {:className "c-field"}
       (dom/input #js {:type "search" :className "c-field__input" :placeholder "Search..."})))))

(defexample field-content
  "### Content"
  (l/row {}
    (l/col {:width 4}
     (dom/div #js {:className "c-field"}
       (dom/span #js {:className "c-label c-label--blue"} (util/full-name :1))
       (dom/span #js {:className "c-label c-label--blue"} (util/full-name :2))
       (dom/span #js {:className "c-label c-label--blue"} (util/full-name :3))
       (dom/span #js {:className "c-label c-label--blue"} (util/full-name :4))
       (dom/input #js {:type "text" :className "c-field__input"}))))
  )

(defexample textarea
  "# Text Area"
  (dom/textarea #js {:className "c-input c-input--multi-line"}))

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


(defexample icon-states
  "### States

  NOTE: If you would like to include states on the icon itself, you can use
  the helper function `(untangled.icons/icon :icon-name :state [:positive])`
  "
  (let [states ["active" "passive" "disabled"]]
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
    (dom/span #js {:className "c-label c-label--primary"} "Primary")
    (dom/span #js {:className "c-label c-label--accent"} "Accent")))

(defexample label-icons
  "### With Icons"
  (dom/div #js {}
    (dom/span #js {:className "c-label c-label--primary"}
      (icons/icon :add) " Add ")
    (dom/span #js {:className "c-label c-label--accent"}
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
  (l/row {}
    (l/col {:width 3 :halign :center}
      (dom/div #js {:className "c-loader"}))
    (l/col {:width 3 :halign :center}
      (dom/div #js {:className "c-loader c-loader--primary"}))
    (l/col {:width 3 :halign :center}
      (dom/div #js {:className "c-loader c-loader--accent"}))
    (l/col {:width 3 :halign :center}
      (dom/button #js {:className "c-button c-button--raised c-button--primary"}
        (dom/span #js {:className "c-loader c-loader--inverted"}))
      (dom/button #js {:className "c-button c-button--raised"}
        (dom/span #js {:className "c-loader"})))))


;; -------------------------
;; Tabs
;; -------------------------

(def tabs-header
  "# Tabs")

(defexample tabs
  "### Basic"
  (dom/div #js {:className "c-tabs"}
    (dom/button #js {:className "c-tab is-active"} "Widgets")
    (dom/button #js {:className "c-tab"} "Doodads")
    (dom/button #js {:className "c-tab"} "Apparatuses")
    (dom/button #js {:className "c-tab"} "Things")))

(defexample tabs-colors
  "### Colors"
  (dom/div nil
    (dom/div #js {:className "c-tabs"}
      (dom/button #js {:className "c-tab c-tab--primary is-active"} "Widgets")
      (dom/button #js {:className "c-tab c-tab--primary"} "Doodads")
      (dom/button #js {:className "c-tab c-tab--primary"} "Apparatuses")
      (dom/button #js {:className "c-tab c-tab--primary"} "Things"))

    (dom/div #js {:className "t-dark"}
      (dom/div #js {:className "c-tabs"}
       (dom/button #js {:className "c-tab c-tab--contrast is-active"} "Widgets")
       (dom/button #js {:className "c-tab c-tab--contrast"} "Doodads")
       (dom/button #js {:className "c-tab c-tab--contrast"} "Apparatuses")
       (dom/button #js {:className "c-tab c-tab--contrast"} "Things")))))

(defexample tabs-dropdown
  "### With Dropdowns"
  (dom/div #js {:className "c-tabs"}
    (dom/button #js {:className "c-tab"} "Widgets")
    (dom/button #js {:className "c-tab"} "Doodads")
    (dom/button #js {:className "c-tab"} "Apparatuses")
    (dom/span #js {:className "has-menu"}
      (dom/button #js {:className "c-tab is-active"} "Things")
      (dom/ul #js {:className "c-menu"}
        (dom/li #js {}
          (dom/button #js {:className "c-menu__item"} "Thingamabob"))
        (dom/li #js {}
          (dom/button #js {:className "c-menu__item"} "Thingamajig"))
        (dom/li #js {}
          (dom/button #js {:className "c-menu__item"} "Thinger")))
      (dom/button #js {:className "c-tab"} "Doodads")
      (dom/button #js {:className "c-tab"} "Apparatuses")
      (dom/span #js {:className "has-menu"}
      (dom/button #js {:className "c-tab is-active"} "Things")
      (dom/ul #js {:className "c-menu is-active"}
        (dom/li #js {}
          (dom/button #js {:className "c-menu__item"} "Thingamabob"))
        (dom/li #js {}
          (dom/button #js {:className "c-menu__item"} "Thingamajig"))
        (dom/li #js {}
          (dom/button #js {:className "c-menu__item"} "Thinger")))))))


;; -------------------------
;; Messages
;; -------------------------

(def messages-header
  "# Messages")

(defexample messages
  "A basic message"
  (dom/div #js {}
    (dom/div #js {:className "c-message"} "This is a message")
    (dom/div #js {:className "c-message c-message--primary"} "This is a primary message")
    (dom/div #js {:className "c-message c-message--accent"} "This is an accent message")))

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
;; Progress
;; -------------------------

(def progress-header
  "# Progress")

(defexample progress-basic
  "## Basic"
  (dom/div #js {}
    (dom/div #js {:className "u-trailer"}
      (dom/h4 nil "Indeterminate")
      (dom/progress #js {:className "c-progress"}))

    (dom/div #js {:className "u-trailer"}
      (dom/h4 nil "Indeterminate & Dense")
      (dom/progress #js {:className "c-progress c-progress--dense"}))

    (dom/div #js {:className "u-trailer"}
      (dom/h4 nil "Value")
      (dom/progress #js {:className "c-progress" :max "100" :value "70"}))

    (dom/div #js {:className "u-trailer"}
      (dom/h4 nil "Value & Small")
      (dom/progress #js {:className "c-progress c-progress--dense" :max "100" :value "70"}))))




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
      (dom/input #js {:id      "r1" :type "radio" :className "c-radio c-radio--expanded" :name "radiogroup"
                      :checked (= 1 selection) :onClick #(select 1)})
      (dom/label #js {:id "r1l" :htmlFor "r1"} "A")
      (dom/input #js {:id      "r2" :type "radio" :className "c-radio c-radio--expanded" :name "radiogroup"
                      :checked (= 2 selection) :onClick #(select 2)})
      (dom/label #js {:id "r2l" :htmlFor "r2"} "B")
      (dom/input #js {:id      "r3" :type "radio" :className "c-radio c-radio--expanded" :name "radiogroup"
                      :checked (= 3 selection) :onClick #(select 3)})
      (dom/label #js {:htmlFor "r3"} "C"))))

(defexample radio-stacked
  "### Stacked"
  (let [selection (or (om/get-state this :selection) 1)
        select (fn [n] (om/update-state! this assoc :selection n))]
    (dom/div #js {}
      (dom/input #js {:id      "sr1" :type "radio" :className "c-radio c-radio--stacked" :name "stackedradio"
                      :checked (= 1 selection) :onClick #(select 1)})
      (dom/label #js {:id "sr1l" :htmlFor "sr1"} "1")
      (dom/input #js {:id      "sr2" :type "radio" :className "c-radio c-radio--stacked" :name "stackedradio"
                      :checked (= 2 selection) :onClick #(select 2)})
      (dom/label #js {:id "sr2l" :htmlFor "sr2"} "2")
      (dom/input #js {:id      "sr3" :type "radio" :className "c-radio c-radio--stacked" :name "stackedradio"
                      :checked (= 3 selection) :onClick #(select 3)})
      (dom/label #js {:htmlFor "sr3"} "3")
      (dom/input #js {:id      "sr4" :type "radio" :className "c-radio c-radio--stacked" :name "stackedradio"
                      :checked (= 4 selection) :onClick #(select 4)})
      (dom/label #js {:htmlFor "sr4"} "4")
      (dom/input #js {:id      "sr5" :type "radio" :className "c-radio c-radio--stacked" :name "stackedradio"
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
      (dom/div #js {}
        (dom/label nil "View ")
        (dom/button #js {:aria-label "Default" :onClick #(set-kind nil)
                         :className  (str "c-button c-button--small " (when (= kind nil) "is-active"))}
          (dom/span #js {:className "c-button__content"} "Default"))
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


(defn toggle-pause [this] (om/update-state! this update :pause not))
(defexample button-group
  "# Button Group"
  (let [pause (boolean (om/get-state this :pause))]
    (dom/div #js {}
      (dom/label #js {:className ""} "Control")
      (dom/div #js {:className "o-button-group--toggle"}
        (dom/button #js {:className (str "c-button " (if pause "" " c-button--raised c-button--primary"))
                         :onClick   #(toggle-pause this)} "Play")
        (dom/button #js {:className (str "c-button " (if (not pause) "" "c-button--raised c-button--primary"))
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


(defn render-calendar-week [lowerRange upperRange]
  (for [x (range lowerRange (+ upperRange 1))
       :let [y (dom/td #js {:key (str "id-" x) :className "c-calendar__day"} x)]]
   y))

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
                (render-calendar-week 1 2))
              (dom/tr #js {}
                (render-calendar-week 3 9))
              (dom/tr #js {}
                (render-calendar-week 10 16))
              (dom/tr #js {}
                (render-calendar-week 17 18)
                (dom/td #js {:className "c-calendar__day is-active"} "19")
                (render-calendar-week 20 23))
              (dom/tr #js {}
                (render-calendar-week 24 30)
                ))))))))

(defn toggle-drawer [this] (om/update-state! this update :drawer not))

(defexample drawer
  "# Drawer Example"
  (let [drawer (boolean (om/get-state this :drawer))]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(toggle-drawer this)} "Show/Hide Drawer Example")
      (dom/div #js {:className (str "c-drawer c-drawer--right" (if drawer " is-open" ""))
                    :onClick   #(toggle-drawer this)}
        (dom/header #js {:className "c-drawer__header  u-row u-middle"}
          (dom/h1 #js {:className ""} "Drawer.io"))
        (dom/div #js {:className "c-list"}

          (dom/div #js {:className "c-list__row c-list__row--bordered is-selectable"}
            (dom/div #js {:className "c-list__tile"}
              (dom/div #js {:className "u-row u-middle"}
              (dom/div #js {:className "c-list__avatar"} (icons/icon :games))
              (dom/div #js {:className "c-list__name"} "Games"))))

          (dom/div #js {:className "c-list__row c-list__row--bordered is-selectable"}
            (dom/div #js {:className "c-list__tile"}
              (dom/div #js {:className "u-row u-middle"}
                (dom/div #js {:className "c-list__avatar"} (icons/icon :movie))
                (dom/div #js {:className "c-list__name"} "Movies"))))

          (dom/div #js {:className "c-list__row c-list__row--bordered is-selectable"}
            (dom/div #js {:className "c-list__tile"}
              (dom/div #js {:className "u-row u-middle"}
                (dom/div #js {:className "c-list__avatar"} (icons/icon :book))
                (dom/div #js {:className "c-list__name"} "Books"))))

          (dom/div #js {:className "c-list__row c-list__row--bordered is-selectable"}
            (dom/div #js {:className "c-list__tile"}
              (dom/div #js {:className "u-row u-middle"}
                (dom/div #js {:className ""} "Settings"))))

          (dom/div #js {:className "c-list__row c-list__row--bordered is-selectable"}
            (dom/div #js {:className "c-list__tile"}
              (dom/div #js {:className "u-row u-middle"}
                (dom/div #js {:className ""} "Help & Feedback"))))
          ))
      (dom/div #js {:className "c-drawer__close"
                    :onClick #(toggle-drawer this)}))))


(defexample icon-bar
  "# Icon Bar"
  (dom/div #js {}
    (dom/nav #js {:className "c-iconbar"}
      (dom/button #js {:className "c-iconbar__item is-active"}
        (icons/icon :home)
        (dom/span #js {:className "c-iconbar__label"} "Home"))
      (dom/button #js {:className "c-iconbar__item"}
        (icons/icon :description)
        (dom/span #js {:className "c-iconbar__label"} "Docs"))
      (dom/button #js {:className "c-iconbar__item"}
        (icons/icon :feedback)
        (dom/span #js {:className "c-iconbar__label"} "Support"))
      (dom/button #js {:className "c-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:width "24" :height "24" :xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M12 0c-6.627 0-12 5.406-12 12.073 0 5.335 3.438 9.859 8.207 11.455.6.111.819-.262.819-.581l-.017-2.247c-3.337.729-4.042-1.424-4.042-1.424-.546-1.394-1.332-1.765-1.332-1.765-1.091-.749.083-.734.083-.734 1.205.084 1.839 1.244 1.839 1.244 1.071 1.845 2.81 1.312 3.492 1.002.109-.778.42-1.312.762-1.612-2.664-.305-5.466-1.341-5.466-5.967 0-1.319.468-2.395 1.234-3.24-.122-.307-.535-1.535.119-3.196 0 0 1.006-.324 3.3 1.238.957-.269 1.983-.402 3.003-.406 1.02.004 2.046.139 3.004.407 2.29-1.564 3.297-1.238 3.297-1.238.656 1.663.243 2.89.12 3.195.769.845 1.233 1.921 1.233 3.24 0 4.638-2.807 5.659-5.48 5.958.432.374.814 1.108.814 2.234 0 1.614-.016 2.915-.016 3.313 0 .321.218.697.826.579 4.765-1.599 8.2-6.123 8.2-11.455 0-6.667-5.373-12.073-12-12.073z"})))
        (dom/span #js {:className "c-iconbar__label"} "Github")))))


(defexample icon-rail
  "# Icon Rail Example

  Just add an extra modifier class `.c-iconbar--rail` and you'll get this effect.
  "
  (dom/div #js {}
    (dom/nav #js {:className "c-iconbar c-iconbar--rail"}
      (dom/button #js {:className "c-iconbar__item is-active"}
        (icons/icon :home)
        (dom/span #js {:className "c-iconbar__label"} "Home"))
      (dom/button #js {:className "c-iconbar__item"}
        (icons/icon :description)
        (dom/span #js {:className "c-iconbar__label"} "Docs"))
      (dom/button #js {:className "c-iconbar__item"}
        (icons/icon :feedback)
        (dom/span #js {:className "c-iconbar__label"} "Support"))
      (dom/button #js {:className "c-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:width "24" :height "24" :xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M12 0c-6.627 0-12 5.406-12 12.073 0 5.335 3.438 9.859 8.207 11.455.6.111.819-.262.819-.581l-.017-2.247c-3.337.729-4.042-1.424-4.042-1.424-.546-1.394-1.332-1.765-1.332-1.765-1.091-.749.083-.734.083-.734 1.205.084 1.839 1.244 1.839 1.244 1.071 1.845 2.81 1.312 3.492 1.002.109-.778.42-1.312.762-1.612-2.664-.305-5.466-1.341-5.466-5.967 0-1.319.468-2.395 1.234-3.24-.122-.307-.535-1.535.119-3.196 0 0 1.006-.324 3.3 1.238.957-.269 1.983-.402 3.003-.406 1.02.004 2.046.139 3.004.407 2.29-1.564 3.297-1.238 3.297-1.238.656 1.663.243 2.89.12 3.195.769.845 1.233 1.921 1.233 3.24 0 4.638-2.807 5.659-5.48 5.958.432.374.814 1.108.814 2.234 0 1.614-.016 2.915-.016 3.313 0 .321.218.697.826.579 4.765-1.599 8.2-6.123 8.2-11.455 0-6.667-5.373-12.073-12-12.073z"})))
        (dom/span #js {:className "c-iconbar__label"} "Github")))))

(defexample icon-bar-shifting
  "# Icon Bar Shifting Example

  Just add an extra modifier class `.c-iconbar--shifting` and you'll get this effect.
  "
  (dom/div #js {}
    (dom/nav #js {:className "c-iconbar c-iconbar--shifting is-mobile"}
      (dom/button #js {:className "c-iconbar__item is-active"}
        (icons/icon :home)
        (dom/span #js {:className "c-iconbar__label"} "Home"))
      (dom/button #js {:className "c-iconbar__item"}
        (icons/icon :description)
        (dom/span #js {:className "c-iconbar__label"} "Docs"))
      (dom/button #js {:className "c-iconbar__item"}
        (icons/icon :feedback)
        (dom/span #js {:className "c-iconbar__label"} "Support"))
      (dom/button #js {:className "c-iconbar__item"}
        (dom/span #js {:className "c-icon"}
          (dom/svg #js {:width "24" :height "24" :xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 24 24"}
            (dom/path #js {:d "M12 0c-6.627 0-12 5.406-12 12.073 0 5.335 3.438 9.859 8.207 11.455.6.111.819-.262.819-.581l-.017-2.247c-3.337.729-4.042-1.424-4.042-1.424-.546-1.394-1.332-1.765-1.332-1.765-1.091-.749.083-.734.083-.734 1.205.084 1.839 1.244 1.839 1.244 1.071 1.845 2.81 1.312 3.492 1.002.109-.778.42-1.312.762-1.612-2.664-.305-5.466-1.341-5.466-5.967 0-1.319.468-2.395 1.234-3.24-.122-.307-.535-1.535.119-3.196 0 0 1.006-.324 3.3 1.238.957-.269 1.983-.402 3.003-.406 1.02.004 2.046.139 3.004.407 2.29-1.564 3.297-1.238 3.297-1.238.656 1.663.243 2.89.12 3.195.769.845 1.233 1.921 1.233 3.24 0 4.638-2.807 5.659-5.48 5.958.432.374.814 1.108.814 2.234 0 1.614-.016 2.915-.016 3.313 0 .321.218.697.826.579 4.765-1.599 8.2-6.123 8.2-11.455 0-6.667-5.373-12.073-12-12.073z"})))
        (dom/span #js {:className "c-iconbar__label"} "Github")))))

(defexample modal-example
  "# Modal

  ### Basic"
  (dom/div #js {:style #js {:position "relative" :height "400px"}}
    (dom/div #js {:className (str "c-dialog is-active") :style #js {:position "absolute"}}
      (dom/div #js {:className "c-dialog__card"}
        (dom/div #js {:className "c-dialog__title"} "Dialog title")
        (dom/div #js {:className "c-dialog__content"}
          (dom/span #js {} "This is a card in a dialog, what will they think of next?")
          )
        (dom/div #js {:className "c-dialog__actions"}
          (dom/button #js {:className "c-button c-button--primary"
                             :onClick   #(om/update-state! this assoc :modal-visible false)} "Cancel")
            (dom/button #js {:className "c-button c-button--primary"
                             :onClick   #(om/update-state! this assoc :modal-visible false)} "Ok"))
        ))
    (dom/div #js {:className (str "c-backdrop _is-active") :style #js {:position "absolute"}})))

(defviewport modal-fullscreen-1
  "Fullscreen modal"
  (dom/div #js {:className "c-dialog c-dialog--fullscreen"}
    (dom/div #js {:className "c-dialog__card"}

      (dom/div #js {:className "c-toolbar c-toolbar--primary c-toolbar--raised"}
        (dom/div #js {:className "c-toolbar__row c-toolbar__row--expanded"}
         (dom/div #js {:className "c-toolbar__view"}
           (dom/button #js {:className "c-button c-button--icon"} (icons/icon :close))
           (dom/span #js {:className "c-toolbar__label"} "Modal title"))
         (dom/div #js {:className "c-toolbar__actions"}
           (dom/button #js {:className "c-button"} "Save"))))

      (dom/div #js {:className "has-menu"}
          (dom/button #js {:className "c-button c-button--wide"} "untangler@untangled.io"))
      (dom/div #js {:className "c-dialog__content"}
        (dom/input #js {:className "c-field c-field--large u-trailer" :placeholder "Event name"})
        (dom/input #js {:className "c-field" :placeholder "Location"})
        (dom/label #js {:className "is-optional u-leader--half"} "Start time")
        (dom/input #js {:className "c-field" :placeholder "12:00 AM"})
        (dom/label #js {:className "is-optional u-leader--half"} "End time")
        (dom/input #js {:className "c-field" :placeholder "1:00 PM"})
        (dom/input #js {:className "c-field" :placeholder "Room"})
        ))))


(defviewport modal-fullscreen-2
  "Fullscreen modal with another modal"
  (dom/div #js {:style #js {:position "relative" :height "570px"}}
    (dom/div #js {:className (str "c-dialog is-active") :style #js {:position "absolute"}}
      (dom/div #js {:className "c-dialog__card"}
        (dom/div #js {:className "c-dialog__content"}
          (dom/span #js {} "Discard new event?")
          )
        (dom/div #js {:className "c-dialog__actions"}
          (dom/button #js {:className "c-button c-button--primary"
                             :onClick   #(om/update-state! this assoc :modal-visible false)} "Cancel")
            (dom/button #js {:className "c-button c-button--primary"
                             :onClick   #(om/update-state! this assoc :modal-visible false)} "Erase"))
        ))
    (dom/div #js {:className (str "c-backdrop is-active") :style #js {:position "absolute"}})

    (dom/div #js {:className "c-dialog c-dialog--fullscreen"}
     (dom/div #js {:className "c-dialog__card"}
       (dom/div #js {:className "c-toolbar c-toolbar--primary c-toolbar--raised"}
         (dom/div #js {:className "c-toolbar__row c-toolbar__row--expanded"}
          (dom/div #js {:className "c-toolbar__view"}
            (dom/button #js {:className "c-button c-button--icon"} (icons/icon :close))
            (dom/span #js {:className "c-toolbar__label"} "Modal title"))
          (dom/div #js {:className "c-toolbar__actions"}
            (dom/button #js {:className "c-button"} "Save"))))
       (dom/div #js {:className "has-menu"}
         (dom/button #js {:className "c-button c-button--wide"} "untangler@untangled.io"))
       (dom/div #js {:className "c-dialog__content"}
         (dom/input #js {:className "c-field c-field--large u-trailer" :placeholder "Event name"})
         (dom/input #js {:className "c-field" :placeholder "Location"})
         (dom/label #js {:className "is-optional u-leader--half"} "Start time")
         (dom/input #js {:className "c-field" :placeholder "12:00 AM"})
         (dom/label #js {:className "is-optional u-leader--half"} "End time")
         (dom/input #js {:className "c-field" :placeholder "1:00 PM"})
         (dom/input #js {:className "c-field" :placeholder "Room"})
         )
       )
     )))

(defexample toolbar
  "# Toolbar Example"
  (let [changed-menu (om/get-state this :changed-menu)
        ui-menu-open (if (= (:id changed-menu) :ui) (:open-state changed-menu) nil)
        lang-menu-open (if (= (:id changed-menu) :lang) (:open-state changed-menu) nil)
        ui-menu-class (str "c-menu" (if ui-menu-open " is-active" ""))
        lang-menu-class (str "c-menu c-menu--right " (if lang-menu-open " is-active" ""))
        lang-item-selected (or (if (= (:id changed-menu) :lang) (:selected-item changed-menu) nil) "English-US")
        menu-action (fn [menu opened item]
                      (om/update-state! this assoc :changed-menu {:id menu :open-state opened :selected-item item}))]

    (e/ui-iframe {:width "100%" :height "300px"}
      (dom/div #js { :style #js {:backgroundColor "#efefef" :height "300px"}}
        (dom/div #js {:className "c-toolbar"}
         (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})
         (dom/div #js {:className "c-toolbar__button"}
           (dom/button #js {:className "c-button c-button--icon"}
             (e/ui-icon {:glyph :menu})))

         (dom/div #js {:className "c-toolbar__row"}
           (dom/div #js {:className "c-toolbar__actions"}

             (dom/button #js {:className "c-button c-button--icon"} (icons/icon :help))

             (dom/button #js {:className "c-button c-button--icon"
                              :title     "Kevin Mitnick"}
               (icons/icon :account_circle)))))))))


(defexample toolbar-colors
  "### Colors"
  (let [changed-menu (om/get-state this :changed-menu)
        ui-menu-open (if (= (:id changed-menu) :ui) (:open-state changed-menu) nil)
        lang-menu-open (if (= (:id changed-menu) :lang) (:open-state changed-menu) nil)
        ui-menu-class (str "c-menu" (if ui-menu-open " is-active" ""))
        lang-menu-class (str "c-menu c-menu--right " (if lang-menu-open " is-active" ""))
        lang-item-selected (or (if (= (:id changed-menu) :lang) (:selected-item changed-menu) nil) "English-US")
        menu-action (fn [menu opened item]
                      (om/update-state! this assoc :changed-menu {:id menu :open-state opened :selected-item item}))]
    (dom/div nil

      (dom/div #js {:className "c-toolbar c-toolbar--primary c-toolbar--raised"}
        (dom/div #js {:className "c-toolbar__button"}
          (dom/button #js {:className "c-button c-button--icon"}
              (icons/icon :menu)))
        (dom/div #js {:className "c-toolbar__row"}
          (dom/div #js {:className "c-toolbar__view"}
            (dom/span #js {:className "c-toolbar__label"} "Primary toolbar"))

          (dom/div #js {:className "c-toolbar__actions"}
            (dom/button #js {:className "c-button c-button--icon"}
              (icons/icon :help))

            (dom/span #js {:title "Kevin Mitnick"}
              (dom/button #js {:className "c-button c-button--icon"}
                (icons/icon :account_circle)))
            )))

      (dom/p nil " ")

      (dom/div #js {:className "c-toolbar c-toolbar--dark c-toolbar--raised"}
        (dom/div #js {:className "c-toolbar__button"}
          (dom/button #js {:className "c-button c-button--icon"}
              (icons/icon :arrow_back)))
        (dom/div #js {:className "c-toolbar__row"}
          (dom/div #js {:className "c-toolbar__view"}
            (dom/span #js {:className "c-toolbar__label"} "Dark toolbar"))

          (dom/div #js {:className "c-toolbar__actions"}
            (dom/button #js {:className "c-button c-button--icon"}
              (icons/icon :filter_list))

            (dom/span #js {:title "Kevin Mitnick"}
              (dom/button #js {:className "c-button c-button--icon"}
                (icons/icon :search)))
            ))))))

(defexample toolbar-dense
  "### Dense

  This toolbar is mainly used for specific operations and navigation for the current app you are using.
  "
  (let [selected-item (or (om/get-state this :selected-item) :widgets)
        get-class (fn [item] (str "c-tab " (if (= item selected-item) " is-active" "")))
        select-item (fn [item] (om/update-state! this assoc :selected-item item))
        ]
    (e/ui-iframe {:width "100%"}
      (dom/div #js {:className "c-toolbar c-toolbar--raised c-toolbar--dark"}
        (dom/link #js {:rel "stylesheet" :href "css/untangled-ui.css"})
       (dom/div #js {:className "c-toolbar__button"}
         (dom/button #js {:className "c-button c-button--icon"}
           (icons/icon :menu)))
       (dom/div #js {:className "c-toolbar__row"}
         (dom/div #js {:className "c-toolbar__view"}
           (dom/span #js {:className "c-toolbar__label"} "Second row is dense"))

         (dom/div #js {:className "c-toolbar__actions"}
           (dom/button #js {:className "c-button c-button--icon"}
             (icons/icon :help))

           (dom/span #js {:title "Kevin Mitnick"}
             (dom/button #js {:className "c-button c-button--icon"}
               (icons/icon :account_circle)))
           ))
       (dom/div #js {:className "c-toolbar__row c-toolbar__row--dense"}
         (dom/ul #js {:className "c-tabs"}
           (dom/button #js {:className (get-class :widgets)
                            :onClick   #(select-item :widgets)} "Widgets")
           (dom/button #js {:className (get-class :doodads)
                            :onClick   #(select-item :doodads)} "Doodads")
           (dom/button #js {:className (get-class :apparatuses)
                            :onClick   #(select-item :apparatuses)} "Apparatuses")
           (dom/button #js {:className (get-class :things)
                            :onClick   #(select-item :things)} "Things")))))))





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
                      button-group
                      ]}
          {:id :calendar-example :title "Calendar" :examples [calendar-example]
           :documentation
               "# Calendar

               This is a month view calendar for overlaying on input fields that control date selection."}
          {:id :card
           :title "Card"
           :documentation card-header
           :examples [
                      card
                      card-states
                      card-transparent
                      card-ruled
                      ]}
          {:id :checkboxes
           :title "Checkboxes"
           :documentation checkbox-header
           :examples [
                      checkboxes
                      ]}
          {:id :drawer
           :title "Drawer"
           :examples [
                      drawer
                      ]}
          {:id :expanding_panel
           :title "Expansion panels"
           :documentation expansion-panel-header
           :examples [
                      expansion-panel
                      expansion-panel-survey
                      ]
           }
          {:id :fields
           :title "Fields"
           :documentation field-header
           :examples [
                      field
                      field-states
                      field-sizes
                      field-icon
                      field-content
                      textarea
                      ]}
          {:id :icons
           :title "Icons"
           :documentation icon-header
           :examples [
                      icons
                      icon-sizes
                      icon-states
                      icon-library
                      ]}
          {:id :icon-bar
           :title "Icon Bar"
           :examples [
                      icon-bar
                      icon-rail
                      icon-bar-shifting
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
          {:id :dropdowns
           :title "Menus"
           :documentation menus-header
           :examples [
                      menus
                      menus-shape
                      menus-search-multi
                      menus-data
                      ]}
          {:id :messages
           :title "Messages"
           :documentation messages-header
           :examples [
                      messages
                      ]}
          {:id :modal
           :title "Dialog"
           :examples [
                      modal-example
                      modal-fullscreen-1
                      modal-fullscreen-2
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
          {:id :progressbar
           :title "Progress"
           :documentation progress-header
           :examples [
                      progress-basic]}
          {:id :radio
           :title "Radio Buttons"
           :documentation radio-header
           :examples [
                      radio
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
          {:id :menus
           :title "Tabs"
           :documentation tabs-header
           :examples [
                      tabs
                      tabs-colors
                      tabs-dropdown
                      ]}
          {:id :toolbar
           :title "Toolbar"
           :examples [
                      toolbar
                      toolbar-colors
                      toolbar-dense
                      ]}
          {:id :tooltip
           :title "Tooltips"
           :documentation tooltips-header
           :examples [
                      tooltips
                      tooltip-directions
                      tooltip-sizes
                      ]}
          ])))
