(ns styles.patterns
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react defexample]]
            [untangled.icons :as icons]
            [om.dom :as dom]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF EXAMPLES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn toggle-open [this] (om/update-state! this update :open not))

(defexample button-postfix
  "### Button Postfix

  This pattern is mainly for demonstration purposes only, as this is a specific technique that can be accomplished through a simple collapsed grid and a button modifier class."
  (dom/div #js {:className "u-row u-row--collapse"}
    (dom/div #js {:className "u-column--9"}
      (dom/input #js {:type "text" :placeholder "Search for..." :className "c-input"}))
    (dom/div #js {:className "u-column--2"}
      (dom/button #js {:className "c-button c-button--postfix"} "Search"))))


(defexample menus-search-multi
  "### Multi-Select, Searchable Dropdown"
  (let [open (boolean (om/get-state this :open))
        items (mapv #(str "Item " %) (range 1 20))
        menu-class (str "c-menu" (if open " is-active" ""))]
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


(defexample menus-data
  "### Dropdown Data

  This is a control that is meant to let you view what various dropdowns would show, for example in cases
  of UI that lets you configure UI.

  Note: The dropdown list underneath should not be enabled when the dropdown list is visible. Doing this fosters a better interaction for the user."
  (let [open (boolean (om/get-state this :open))
        name (or (om/get-state this :menu-name) "Menu 1")
        menu-1-items (mapv #(str "Item " %) (range 1 5))
        menu-2-items (mapv #(str "Other " %) (range 1 3))
        menu (or (om/get-state this :menu) menu-1-items)]
    (dom/div nil
      (dom/div #js {:className "c-dropdown c-dropdown--data"}
        (dom/button #js {:onClick   #(toggle-open this)
                         :className "c-button has-menu js-dropdown-toggle"} name)
        (dom/ul #js {:id        "test-dropdown" :aria-hidden "true"
                     :className (str "c-menu" (when open " is-active")) :tabIndex "-1"}
          (dom/li #js {}
            (dom/button #js {:onClick   #(om/update-state! this assoc :open false :menu menu-1-items :menu-name "Menu 1")
                             :className "c-dropdown__link"} "Menu 1"))
          (dom/li #js {}
            (dom/button #js {:onClick   #(om/update-state! this assoc :open false :menu menu-2-items :menu-name "Menu 2")
                             :className "c-dropdown__link"} "Menu 2"))))
      (dom/div #js {:className "c-list" :tabIndex "-1"}
        (map (fn [item]
               (dom/div #js {:className "c-list__row c-list__row--bordered is-selectable" :key item}
                 (dom/div #js {:className "c-list__tile"} item))) menu)))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF SECTIONS (within a feature set...e.g. components)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; NOTE: This is where you add the sections for index
(def sections
  (vec (sort-by :title
                [
                 ; NOTE: :examples is a list of example names, rendered in order given
                 {:id :postfixing
                  :title "Postfixing"
                  :examples [
                             button-postfix
                             menus-search-multi
                             menus-data
                             ]}
                 ])))
