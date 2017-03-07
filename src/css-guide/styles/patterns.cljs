(ns styles.patterns
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react defexample defarticle defview defviewport]]
            [untangled.icons :as icons]
            [untangled.ui.layout :as l]
            [om.dom :as dom]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF EXAMPLES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defarticle errors
  "# Errors

  ## Errors occur when an app fails to complete an expected action.")

(defarticle errors-usage
  "### Usage

  ### User input errors"
  )

(defviewport errors-form
  "A basic form"
  (dom/span nil
    (dom/div #js {:className "c-toolbar c-toolbar--raised c-toolbar--primary" :style #js {:position "absolute"}};; Style for example
      (dom/div #js {:className "c-toolbar__row"}
       (dom/div #js {:className "c-toolbar__view"}
         (dom/button #js {:className "c-button c-button--icon"}
           (icons/icon :arrow_back))
         (dom/span #js {:className "c-toolbar__label"} "Application"))
       (dom/div #js {:className "c-toolbar__actions"}
         (dom/button #js {:className "c-button c-button--icon"}
           (icons/icon :more_vert)))))

    (l/row {}
      (l/col {:width 12}
        (l/ui-vertical-margin {:before :half}
          (dom/h1 nil "Personal info")))

      (l/col {:width 12}
        (dom/input #js {:className "c-field" :placeholder "First name"})
        (dom/span #js {:className "c-message"} \u00A0))

      (l/col {:width 12}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field" :placeholder "Last name"})))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field" :placeholder "Birthday"})
          (dom/span #js {:className "c-message c-message--neutral"} "MM/DD/YYYY")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field" :placeholder "Social Security"})
          (dom/span #js {:className "c-message c-message--neutral"} "### - ## - ####")))

      (l/col {:width 12}
        (l/ui-vertical-margin {:before :half}
          (dom/h1 nil "Residence address")))

      (l/col {:width 12}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field" :placeholder "Address"})))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field" :placeholder "City"})))

      (l/col {:width 6}
        (dom/div #js {:className "has-menu"}
          (dom/button #js {:className "c-button"} "State")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field" :placeholder "Postal code"})))

      (l/col {:width 6}
        (dom/div #js {:className "has-menu"}
          (dom/button #js {:className "c-button"} "Country"))))))

(defviewport errors-form-filled
  "Filled out form"
  (dom/span nil
    (dom/div #js {:className "c-toolbar c-toolbar--raised c-toolbar--primary" :style #js {:position "absolute"}} ;; Style for example
      (dom/div #js {:className "c-toolbar__row"}
       (dom/div #js {:className "c-toolbar__view"}
         (dom/button #js {:className "c-button c-button--icon"}
           (icons/icon :arrow_back))
         (dom/span #js {:className "c-toolbar__label"} "Application"))
       (dom/div #js {:className "c-toolbar__actions"}
         (dom/button #js {:className "c-button c-button--icon"}
           (icons/icon :more_vert)))
       ))
    (l/row {}
      (l/col {:width 12}
        (l/ui-vertical-margin {:before :half}
          (dom/h1 nil "Personal info")))

      (l/col {:width 12}
       (dom/input #js {:className "c-field is-error" :placeholder "First name"})
       (dom/span #js {:className "c-message c-message--alert"} "First name is required"))

      (l/col {:width 12}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field" :placeholder "Last name" :value "Connors"})))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field is-error" :placeholder "Birthday" :value "01/01/90"})
          (dom/span #js {:className "c-message c-message--alert"} "MM/DD/YYYY")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field is-error" :placeholder "Social Security"})
          (dom/span #js {:className "c-message c-message--alert"} "### - ## - ####")))

      (l/col {:width 12}
        (l/ui-vertical-margin {:before :half}
          (dom/h1 nil "Residence address")))

      (l/col {:width 12}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field" :placeholder "Address" :value "2000 Main Street, Apartment J"})))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field" :placeholder "City" :value "San Francisco"})))

      (l/col {:width 6}
        (dom/div #js {:className "has-menu"}
          (dom/button #js {:className "c-button"} "State")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (dom/input #js {:className "c-field" :placeholder "Postal code" :value "97701"})))

      (l/col {:width 6}
        (dom/div #js {:className "has-menu"}
          (dom/button #js {:className "c-button"} "Country")))
      )))


(defexample empty-states
  "# Empty States"
  (dom/div #js {:style #js {:position "relative" :height "400px"}}
    (dom/div #js {:className (str "u-absolute--middle-center")}
      (dom/span #js {:className "c-icon c-icon--huge" :disabled true}
        (icons/icon :widgets))
      (dom/h1 #js {} "No widgets yet")
      (dom/p #js {:className "c-message--neutral"} "Create a widget to get started"))))


(defexample pagination-dots
  "# Pagination"
  (let [current    (om/get-state this :current)
        selections ["1" "2" "3"]
        ]
    (dom/div #js {:className "c-pagination-dots c-pagination-dots--move"}
     (dom/ul nil
       (map (fn [s]
              (dom/li #js {:className (str "c-pagination-dots__dot" (when (= current s) " is-current"))
                           :key (str "dot-" s)}
                (dom/span #js {:onClick   #(om/update-state! this assoc :current s)} s))
              ) selections)
       (dom/li nil "") ;; Dummy dot
       )))
  )


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF SECTIONS (within a feature set...e.g. components)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; NOTE: This is where you add the sections for index
(def sections
  (vec (sort-by :title
                [
                 ; NOTE: :examples is a list of example names, rendered in order given
                 {:id :postfixing
                  :title "Errors"
                  :examples [
                             errors
                             errors-usage
                             errors-form
                             errors-form-filled
                             ]}
                 {:id :empty-states
                  :title "Empty states"
                  :examples [
                             empty-states
                             ]}
                 {:id :pagination
                  :title "Pagination"
                  :examples [
                             pagination-dots
                             ]}
                 ])))
