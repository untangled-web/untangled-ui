(ns styles.objects
  (:require-macros user)
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react defexample]]
            [untangled.icons :as icons]
            [om.dom :as dom]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF EXAMPLES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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
  "# Nested Accordion Example"
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

(defn toggle-aside [this] (om/update-state! this update :aside not))

(defexample aside
  "# Aside Example"
  (let [aside (boolean (om/get-state this :aside))]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(toggle-aside this)} "Show/Hide Aside Example")
      (dom/aside #js {:id        "a1"
                      :className (str "o-aside o-aside--right " (if aside "is-active" ""))}
                 (dom/h1 #js {:className "o-aside__title"} "Favorites")
                 (dom/span #js {
                                :className "o-aside__close"
                                :onClick   #(toggle-aside this)}
                   (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon" :viewBox "0 0 24 24"}
                     (dom/path #js {:d "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})))
                 (dom/h2 #js {:className "o-aside__title o-aside__title--section"} "Reveal")
                 (dom/ul #js {:className "o-aside__list"}
                   (dom/li #js {}
                     (dom/a #js {:href "#" :className "o-aside__item"} "Segment analysis"))
                   (dom/li #js {}
                     (dom/a #js {:href "#" :className "o-aside__item"} "Source of business report")))
                 (dom/h2 #js {:className "o-aside__title o-aside__title--section"} "Narrowcast")
                 (dom/ul #js {:className "o-aside__list"}
                   (dom/li #js {}
                     (dom/a #js {:href "#" :className "o-aside__item"} "Agent performance report"))
                   (dom/li #js {}
                     (dom/a #js {:href "#" :className "o-aside__item"} "Roll-up report")))
                 (dom/h2 #js {:className "o-aside__title o-aside__title--section"} "Reach")
                 (dom/ul #js {:className "o-aside__list"}
                   (dom/li #js {}
                     (dom/a #js {:href "#" :className "o-aside__item"} "Create new list")))
                 (dom/div #js {:className "o-aside__backdrop"})))))


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
  "# Button Group Postfix Example"
  (dom/div #js {}
    (dom/div #js {:className "u-row u-row--collapse"}
      (dom/div #js {:className "u-column--9"}
        (dom/input #js {:type "text" :placeholder "Multiple buttons on the end" :className "c-input"}))
      (dom/div #js {:className "u-column--3"}
        (dom/div #js {:className "o-button-group"}
          (dom/button #js {:className "c-button c-button--postfix"} "Go")
          (dom/button #js {:className "c-button c-button--postfix u-hide@sm"} "Start"))))))


(defexample calendar-example
  "# Calendar Example"
  (dom/div #js {}
    (dom/div #js {:className "u-wrapper"}
      (dom/span #js {:className "o-button-group-label"} " X Date")
      (dom/div #js {:className "o-calendar-wrapper"}
        (dom/input #js {:readOnly "true" :value "" :className "o-claendar-date"}))
      (dom/div #js {:className "o-calendar c-card"}
        (dom/header #js {:className "o-calendar__control u-middle"}
                    (dom/div #js {:className "u-column--2"}
                      (dom/button #js {:title "Last Month" :className "o-calendar__button"}
                        (dom/span #js {:className "c-icon c-icon__arrow-back"}
                          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                            (dom/path #js {:d "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})))))
                    (dom/div #js {:className "u-column--8"}
                      (dom/button #js {:title "Today" :className "c-button c-button--icon"}
                        (dom/span #js {:className "c-icon c-icon__today"}
                          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                            (dom/path #js {:d "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"})))))
                    (dom/div #js {:className "u-column--2"}
                      (dom/button #js {:title "Next Month" :className "o-calendar__button"}
                        (dom/span #js {:className "c-icon c-icon__arrow-forward"}
                          (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
                            (dom/path #js {:d "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}))))))
        (dom/div #js {:className "o-calendar__month o-overlay"}
          (dom/hr #js {})
          (dom/table #js {}
                     (dom/thead #js {}
                                (dom/tr #js {}
                                        (dom/th #js {:className "o-day-name"} "Su")
                                        (dom/th #js {:className "o-day-name"} "M")
                                        (dom/th #js {:className "o-day-name"} "Tu")
                                        (dom/th #js {:className "o-day-name"} "W")
                                        (dom/th #js {:className "o-day-name"} "Th")
                                        (dom/th #js {:className "o-day-name"} "F")
                                        (dom/th #js {:className "o-day-name"} "Sa")))
                     (dom/tbody #js {}
                                (dom/tr #js {}
                                        (dom/td #js {:className "o-day is-inactive"} "27")
                                        (dom/td #js {:className "o-day is-inactive"} "28")
                                        (dom/td #js {:className "o-day is-inactive"} "29")
                                        (dom/td #js {:className "o-day is-inactive"} "30")
                                        (dom/td #js {:className "o-day is-inactive"} "31")
                                        (dom/td #js {:className "o-day"} "1")
                                        (dom/td #js {:className "o-day"} "2"))
                                (dom/tr #js {}
                                        (dom/td #js {:className "o-day"} "3")
                                        (dom/td #js {:className "o-day"} "4")
                                        (dom/td #js {:className "o-day"} "5")
                                        (dom/td #js {:className "o-day"} "6")
                                        (dom/td #js {:className "o-day"} "7")
                                        (dom/td #js {:className "o-day"} "8")
                                        (dom/td #js {:className "o-day"} "9"))
                                (dom/tr #js {}
                                        (dom/td #js {:className "o-day"} "10")
                                        (dom/td #js {:className "o-day"} "11")
                                        (dom/td #js {:className "o-day"} "12")
                                        (dom/td #js {:className "o-day"} "13")
                                        (dom/td #js {:className "o-day"} "14")
                                        (dom/td #js {:className "o-day"} "15")
                                        (dom/td #js {:className "o-day"} "16"))
                                (dom/tr #js {}
                                        (dom/td #js {:className "o-day"} "17")
                                        (dom/td #js {:className "o-day"} "18")
                                        (dom/td #js {:className "o-day is-active"} "19")
                                        (dom/td #js {:className "o-day"} "20")
                                        (dom/td #js {:className "o-day"} "21")
                                        (dom/td #js {:className "o-day"} "22")
                                        (dom/td #js {:className "o-day"} "23"))
                                (dom/tr #js {}
                                        (dom/td #js {:className "o-day"} "24")
                                        (dom/td #js {:className "o-day"} "25")
                                        (dom/td #js {:className "o-day"} "26")
                                        (dom/td #js {:className "o-day"} "27")
                                        (dom/td #js {:className "o-day"} "28")
                                        (dom/td #js {:className "o-day"} "29")
                                        (dom/td #js {:className "o-day"} "30")))))))))

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
  "# Icon Rail Example"
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
  "# Icon Bar Shifting Example"
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
  "# Sidebar Example"
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
        (dom/nav #js {:className "u-column--bar"}
                 (dom/h1 #js {:className "o-toolbar__brand"} "Name")
                 (dom/div #js {:className "c-dropdown"}
                   (dom/button #js {:className "c-dropdown__select js-dropdown-toggle"
                                    :onClick   #(menu-action :ui (not ui-menu-open) nil)} "UI")
                   (dom/ul #js {:className ui-menu-class :tabIndex "-1"}
                     (dom/li #js {}
                       (dom/button #js {:className "c-dropdown__link"
                                        :onClick   #(menu-action :ui false 1)}
                         (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon" :viewBox "0 0 24 24"}
                           (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})) " App "))
                     (dom/li #js {}
                       (dom/button #js {:className "c-dropdown__link"
                                        :onClick   #(menu-action :ui false 2)}
                         (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon" :viewBox "0 0 24 24"}
                           (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})) " App "))
                     (dom/li #js {}
                       (dom/button #js {:className "c-dropdown__link"
                                        :onClick   #(menu-action :ui false 3)}
                         (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon" :viewBox "0 0 24 24"}
                           (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})) " App ")))))
        (dom/ul #js {:className "u-column--bar"}
          (dom/li #js {:className "o-toolbar__link"}
            (dom/div #js {:className "c-dropdown"}
              (dom/button #js {:className "c-button c-button--icon u-hide@md-up"}
                (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon" :viewBox "0 0 24 24"}
                  (dom/path #js {:d "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"})))
              (dom/button #js {:className "c-button c-button--text c-button--dropdown u-hide@sm"
                               :onClick   #(menu-action :lang (not lang-menu-open) lang-item-selected)} lang-item-selected)
              (dom/ul #js {:className lang-menu-class :tabIndex "-1"}
                (dom/li #js {}
                  (dom/button #js {:className "c-dropdown__link"
                                   :onClick   #(menu-action :lang false "English-US")} "English-US"))
                (dom/li #js {} (dom/button #js {:className "c-dropdown__link"
                                                :onClick   #(menu-action :lang false "Español")} "Español")))))
          (dom/li #js {:className "o-toolbar__link"}
            (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon c-icon--person" :viewBox "0 0 24 24"}
              (dom/path #js {:d "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}))
            (dom/span #js {:className "u-hide@sm"} "Kevin Mitnick"))
          (dom/li #js {:className "o-toolbar__link"}
            (dom/button #js {:className "c-button c-button--icon"}
              (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :className "c-icon" :viewBox "0 0 24 24"}
                (dom/path #js {:d "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})))))))))

(defexample toolbar-small
  "# Small Toolbar Example"
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
  "# Secondary Toolbar Example"
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
  "# Toolbar Secondary Example 2"
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
                 ; NOTE: :examples is a list of example names, rendered in order given
                 {:id :accordion :title "Accordion" :examples [accordion]
                  :documentation
                      "**NEW!** This object is redesigned to be un-opinionated and flexible for almost any interactive list you might need in your app. The simplified markup resembles this node list:
                      ``` shell\n.o-accordion [ --inline | --right | --small ]\n   __title   [ is-active | is-nested | is-selected ]\n   __content [ is-active ]\n     __group\n       __info\n       __actions\n         __action [ --informative | --success ]\n         __meta\n           __meta-item\n```"}
                 {:id :accordion-nested :title " Nested Accordion " :examples [accordion-nested]
                  :documentation
                      "Notice how you can add `.is-nested` to any element and it collapses and expands with `.is-active`"}
                 {:id :accordion-sidebar :title " Accordion Side Bar" :examples [accordion-sidebar]}
                 {:id :aside :title " Aside " :examples [aside]
                  :documentation
                      "**NEW!** A simple sliding card that displays lists of links and other various content. The simplified markup resembles this node list:"}
                 {:id :button-group :title "Button Groups" :examples [button-group button-stacked button-toggle]}
                 {:id :postfix-group :title "Button Groups (postfix)" :examples [postfix-group]
                  :documentation
                      "**Please Note** This does not work well on mobile with multiple buttons. To fix this we hacked out the second button. Use at your own risk."}
                 {:id :calendar-example :title "Calendar" :examples [calendar-example]
                  :documentation
                      "This is a month view calendar for overlaying on input fields that control date selection."}
                 {:id :drawer :title "Drawer" :examples [drawer]}
                 {:id :editor-inactive :title "Editor" :examples [editor-inactive editor-active]}
                 {:id :icon-bar :title "Icon Bar" :examples [icon-bar]}
                 {:id :icon-rail :title "Icon Rail" :examples [icon-rail]
                  :documentation
                      "Just add an extra modifier class `.o-iconbar--rail` and you'll get this effect."}
                 {:id :icon-bar-shifting :title "Icon Bar Shifting" :examples [icon-bar-shifting]
                  :documentation
                      "Just add an extra modifier class `.o-iconbar--shifting` and you'll get this effect."}
                 {:id :listing :title "Listing" :examples [listing-begin listing]}
                 {:id :modal :title "Modal" :examples [modal-example modal-small modal-large modal-primary modal-success modal-warning]}
                 {:id :sidebar :title "Sidebar" :examples [sidebar sidebar-right]}
                 {:id :toolbar :title "Toolbar" :examples [toolbar]}
                 {:id :small-toolbar :title "Small Toolbar" :examples [toolbar-small]
                  :documentation
                      "This toolbar is mainly used for specific operations and navigation for the current app you are using."}
                 {:id :secondary-toolbar :title "Secondary Toolbar" :examples [toolbar-secondary]
                  :documentation
                      "The secondary toolbar is intended to only provide operations for the current view of the app your in."}
                 ])))
