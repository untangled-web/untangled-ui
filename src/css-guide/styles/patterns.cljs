(ns styles.patterns
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react defexample defarticle defview defviewport]]
            [untangled.icons :as icons]
            [untangled.ui.layout :as l]
            [untangled.ui.elements :as e]
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
    (e/ui-toolbar {:kind :primary :raised true}
      (e/ui-toolbar-row {}
        "Application"
        (e/ui-toolbar-spacer {})
        (dom/span #js {:className "c-toolbar__actions"}
          (e/ui-icon-button {:glyph :more_vert}))
        (e/ui-toolbar-button {:glyph :arrow_back})))

    (l/row {}
      (l/col {:width 12}
        (l/ui-vertical-margin {:before :half}
          (dom/h1 nil "Personal info")))

      (l/col {:width 12}
        (e/ui-field {:id "ip1" :placeholder "First name" :helper "First name is required"} ""))

      (l/col {:width 12}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip2" :placeholder "Last name" :helper "Last name is required"} "")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip3" :placeholder "Birthday" :helper "MM/DD/YYYY" :pattern ".{10,}"} "")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip4" :placeholder "Social Security" :helper "### - ## - ####"} "")))

      (l/col {:width 12}
        (l/ui-vertical-margin {:before :half}
          (dom/h1 nil "Residence address")))

      (l/col {:width 12}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip5" :placeholder "Address"} "")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip6" :placeholder "City"} "")))

      (l/col {:width 6}
        (dom/div #js {:className "has-menu"}
          (dom/button #js {:className "c-button"} "State")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip7" :placeholder "Postal code"} "")))

      (l/col {:width 6}
        (dom/div #js {:className "has-menu"}
          (dom/button #js {:className "c-button"} "Country"))))))


(defviewport errors-form-filled
  "Filled out form"
  (dom/span nil
    (e/ui-toolbar {:kind :primary :raised true}
      (e/ui-toolbar-row {}
        "Application"
        (e/ui-toolbar-spacer {})
        (dom/span #js {:className "c-toolbar__actions"}
          (e/ui-icon-button {:glyph :more_vert}))
        (e/ui-toolbar-button {:glyph :arrow_back})))

    (l/row {}
      (l/col {:width 12}
        (l/ui-vertical-margin {:before :half}
          (dom/h1 nil "Personal info")))

      (l/col {:width 12}
        (e/ui-field {:id "ip1" :placeholder "First name" :required true :helper "First name is required"} ""))

      (l/col {:width 12}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip2" :placeholder "Last name" :required true :helper "Last name is required" :value "Connors"} "")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip3" :placeholder "Birthday" :required true :helper "MM/DD/YYYY" :pattern ".{10,}" :value "01/01/90"} "")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip4" :placeholder "Social Security" :required true :helper "### - ## - ####"} "")))

      (l/col {:width 12}
        (l/ui-vertical-margin {:before :half}
          (dom/h1 nil "Residence address")))

      (l/col {:width 12}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip5" :placeholder "Address" :value "2000 Main Street, Apartment J"} "")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip6" :placeholder "City" :value "San Francisco"} "")))

      (l/col {:width 6}
        (dom/div #js {:className "has-menu"}
          (dom/button #js {:className "c-button"} "CA")))

      (l/col {:width 6}
        (l/ui-vertical-margin {:after :half}
          (e/ui-field {:id "ip7" :placeholder "Postal code" :value "94112"} "")))

      (l/col {:width 6}
        (dom/div #js {:className "has-menu"}
          (dom/button #js {:className "c-button"} "United States"))))))




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
