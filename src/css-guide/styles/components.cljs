(ns styles.components
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react defexample defarticle defview]]
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
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--1"}
      (dom/span #js {:className "c-avatar"} "AV"))
    (dom/div #js {:className "u-column--1"}
      (dom/span #js {:className "c-avatar"} (icons/icon :help)))
    (dom/div #js {:className "u-column--1"}
      (dom/span #js {:className "c-avatar c-avatar--support"} "KB"))
    (dom/div #js {:className "u-column--1"}
      (dom/span #js {:className "c-avatar c-avatar--informative"} (icons/icon :supervisor_account)))
    (dom/div #js {:className "u-column--1"}
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

(defexample button
  "### Basic"
  (dom/button #js {:className "c-button"} "Regular")
  )

(defexample button-shape
  "### Size and form

  You can optionally use modifier classes that let you manipulate the size and shape of your button.
  "
  (dom/div #js {}
    (dom/div #js {:className "u-trailer--quarter"}
      (dom/button #js {:className "c-button"} "Regular"))
    (dom/div #js {:className "u-trailer--quarter"}
      (dom/button #js {:className "c-button c-button--large"} "Large"))
    (dom/div #js {:className "u-trailer--quarter"}
      (dom/button #js {:className "c-button c-button--xlarge"} "Extra Large"))
    (dom/div #js {:className "u-trailer--quarter"}
      (dom/button #js {:className "c-button c-button--round"} "Round"))
    (dom/div #js {:className "u-trailer--quarter"}
      (dom/button #js {:className "c-button c-button--wide"} "Wide"))
    ))


(defexample button-color
  "### Colors

  Stateful color classes are provided to further communicate the intentions of your button action."
  (dom/div #js {}
    (dom/button #js {:className "c-button"} "Default")
    (dom/button #js {:className "c-button c-button--secondary"} "Secondary")
    (dom/button #js {:className "c-button c-button--alert"} "Alert")
    (dom/button #js {:className "c-button c-button--passive"} "Passive")
    (dom/button #js {:className "c-button c-button--text"} "Text")
    (dom/button #js {:className "c-button c-button--anchor"} "Anchor")))


(defexample button-state
  "### States"
  (dom/div #js {}
    (dom/button #js {:aria-disabled "true" :className "c-button is-disabled"} "Disabled")
    (dom/button #js {:title "Click me to see the active state." :className "c-button is-active"} "Active")))


(defexample button-icon
"### Buttons with icons"
  (dom/div nil
    (dom/button #js {:className "c-button"}
      (icons/icon :arrow_back)
      (dom/span #js {:className "c-button__content"} "Left Icon"))
    (dom/button #js {:className "c-button"}
      (dom/span #js {:className "c-button__content"} "Right Icon")
      (icons/icon :arrow_forward))
    (dom/button #js {:title "Icon Button" :className "c-button c-button--icon"}
      (dom/span #js {:className "c-icon"}
        (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
          (dom/path #js {:d "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"}))))
    )
  )

(defexample button-postfix
  "### Button Postfix

  This pattern is mainly for demonstration purposes only, as this is a specific technique that can be accomplished through a simple collapsed grid and a button modifier class."
  (dom/div #js {:className "u-row u-row--collapse"}
    (dom/div #js {:className "u-column--9"}
      (dom/input #js {:type "text" :placeholder "Search for..." :className "c-input"}))
    (dom/div #js {:className "u-column--2"}
      (dom/button #js {:className "c-button c-button--postfix"} "Search"))))


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
                      button-postfix
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
          ])))

