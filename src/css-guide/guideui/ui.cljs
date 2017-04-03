(ns guideui.ui
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react]]
            [untangled.client.core :as uc]
            [untangled.client.mutations :as m]
            [untangled.icons :as uic]
            [om.dom :as dom]
            goog.string
            styles.getting-started
            styles.style
            styles.layout
            styles.elements
            styles.components
            styles.patterns
            [untangled.client.mutations :as m]
            [clojure.string :as str]
            [devcards.core :as dc]
            [untangled.ui.elements :as e]))

(def parts {"Learn" styles.getting-started/sections
            "Style"           styles.style/sections
            "Layout"          styles.layout/sections
            ;; "Elements"        styles.elements/sections
            "Components"      styles.components/sections
            "Patterns"        styles.patterns/sections
            ;; "Growth & communications" styles.growth/sections
            ;; "Usability"       styles.usability/sections
            ;; "Resources"       styles.resources/sections
            })

(defn make-section-index [part part-idx sections]
  (map-indexed
    (fn [section-index s]
      (map-indexed
        (fn [example-index e]
          {:path          [part-idx part section-index (:title s) example-index]
           :label         (str part ":" (:title s) ":" (:name e))
           :documentation (:documentation e)
           :terms         (:search-terms e)})
        (:examples s))
      ) sections))

(def index (flatten (map-indexed (fn [idx [part sections]]
                                   (make-section-index part idx sections)) parts)))

(defn find-results [term]
  (let [lcterm (str/trim (str/lower-case term))]
    (vec (filter (fn [{:keys [terms]}] (.includes terms lcterm)) index))))

(defn search [term]
  (cond
    (goog.string/isEmptyOrWhitespace term) []
    :else (find-results term)))

(defmethod m/mutate 'search/update-results [{:keys [state]} k {:keys [term]}]
  {:action (fn []
             (swap! state
               (fn [m]
                 (-> m
                   (assoc-in [:ui :search :ui/search] term)
                   (assoc-in [:ui :search :results] (search term))))))})

(defmethod m/mutate 'guide/navigate [{:keys [state]} _ {:keys [path]}]
  {:action (fn []
             (let [[part-index part-title section-index section-title example] path]
               (swap! state
                 (fn [m]
                   (-> m
                     (assoc-in [:ui :search :ui/open] false)
                     (assoc-in [:parts :ui :parts/selected-part] part-index)
                     (assoc-in [:parts/by-title part-title :part/selected-section] section-index)
                     (assoc-in [:section/by-title section-title :section/selected-example] example))))))})

(defn navlist [component field options]
  (let [part-names   options
        selected-idx (get (om/props component) field)
        get-class    (fn [idx] (str "link" (if (= idx selected-idx) " is-active" "")))
        select-item  (fn [idx] (m/set-integer! component field :value idx))]
    (dom/div #js {:className "c-list c-list--dense"}
      (map-indexed (fn [idx nm]
                     (dom/div #js {:className (str "c-list__row is-selectable " (get-class idx))
                                   :key       idx}
                       (dom/div #js {:className "c-list__tile"
                                     :onClick   #(select-item idx)}
                         (dom/div #js {} nm)))) part-names))))

(defn tabs [component field options]
  (let [part-names   options
        selected-idx (get (om/props component) field)
        get-class    (fn [idx] (str "link" (if (= idx selected-idx) " is-active" "")))
        select-item  (fn [idx] (m/set-integer! component field :value idx))]
    (dom/div #js {:className "c-tabs u-end@md"}
      (map-indexed (fn [idx nm]
                     (dom/button #js {:className (str (get-class idx) " c-tab c-tab--primary")
                                      :type      "button"
                                      :key       idx
                                      :onClick   #(select-item idx)} nm)) part-names))))

(defn toolbar [component field options]
  (let [part-names   options
        selected-idx (get (om/props component) field)
        get-class    (fn [idx] (str "c-menu__link" (if (= idx selected-idx) " is-active" "")))
        select-item  (fn [idx] (m/set-integer! component field :value idx))]
    (dom/ul #js {:className "c-menu c-menu--inline u-trailer--half"}
      (map-indexed (fn [idx nm]
                     (dom/li #js {:key idx}
                       (dom/button #js {:className (get-class idx)
                                        :onClick   #(select-item idx)} nm))) part-names))))


(defui ^:once SearchBar
  static uc/InitialAppState
  (initial-state [c p] {:results [] :ui/search "" :ui/open false})
  static om/IQuery
  (query [this] [:ui/open :ui/search :results])
  static om/Ident
  (ident [this props] [:ui :search])
  Object
  (render [this]
    (let [{:keys [ui/open results ui/search]} (om/props this)
          open       (and open (pos? (count results)))
          menu-class (str "c-dropdown__menu" (when open " is-active"))]
      (dom/div #js {:className "u-column--3 u-hide@sm"}
        (dom/div #js {:className "has-menu"}
         (dom/div #js {:className "c-field"}
           (uic/icon :search)
           (dom/input #js {:type        "text"
                           :id          "docsSearch"
                           :value       search
                           :onChange    (fn [evt]
                                          (let [v (.. evt -target -value)]
                                            (om/transact! this `[(search/update-results ~{:term v})])))
                           :onFocus     #(m/set-value! this :ui/open true)
                           :placeholder "Search Untangled UI"
                           :title       "Search Untangled UI"
                           :className   "c-field__input"})
           #_(dom/span #js {:className "c-icon"} (untangled.icons/material-icon :search))
           )
         (dom/ul #js {:tabIndex "-1" :aria-hidden "true" :className menu-class}
           (map (fn [{:keys [label path]}]
                  (dom/li #js {:key label :onClick (fn [evt]
                                                     (m/set-value! this :ui/open false)
                                                     (om/transact! this `[(guide/navigate {:path ~path}) :ui/react-key]))}
                    (dom/button #js {:className "c-dropdown__link"} label))) results)))))))

(def ui-search (om/factory SearchBar))

(defui ^:once Example
  static uc/InitialAppState
  (initial-state [c {:keys [id title part section]}] {:example/title title :example/id id
                                                      :example/path  [part section :examples id]})
  static om/IQuery
  (query [this] [:example/id :example/title :example/path])
  static om/Ident
  (ident [this {:keys [example/path]}] [:example/by-path path])
  Object
  (render [this]
    (let [{:keys [example/path]} (om/props this)
          example-renderer (get-in parts (conj path :renderer))]
      (example-renderer))))

(def ui-example (om/factory Example {:keyfn :example/id}))

(defui ^:once Section
  static uc/InitialAppState
  (initial-state [c {:keys [part n]}]
    (let [section       (get-in parts [part n])
          documentation (:documentation section)
          raw-examples  (:examples section)
          examples      (vec (map-indexed (fn [idx v]
                                            (let [name (-> v :name)]
                                              (uc/initial-state Example {:id idx :title name :part part :section n})))
                               raw-examples))]
      {:section/title            (:title section)
       :section/selected-example 0
       :section/documentation    documentation
       :section/examples         examples}))
  static om/IQuery
  (query [this] [:section/title :section/selected-example :section/documentation
                 {:section/examples (om/get-query Example)}])
  static om/Ident
  (ident [this props] [:section/by-title (:section/title props)])
  Object
  (render [this]
    (let [{:keys [section/selected-example section/documentation section/examples section/title] :or {section/selected-example 0}} (om/props this)
          example-names (map :example/title examples)
          example-num   (count examples)]
      (dom/div #js {:className "ui-section"}
        (when documentation
          (dom/div #js {:className "ui-example__description"} (dc/markdown->react documentation)))
        (for [e (range 0 (count examples))]
          (ui-example (nth examples e)))))))

(def ui-section (om/factory Section {:keyfn :section/title}))


(defui ^:once Part
  static uc/InitialAppState
  (initial-state [c {:keys [title]}] {:part/title            title
                                      :part/selected-section 0
                                      :part/sections         (vec (map-indexed (fn [idx s] (uc/initial-state Section {:part title :n idx}))
                                                                    (get parts title)))})
  static om/IQuery
  (query [this] [:part/title :part/selected-section
                 {:part/sections (om/get-query Section)}])
  static om/Ident
  (ident [this props] [:parts/by-title (:part/title props)])
  Object
  (render [this]
    (let [{:keys [part/selected-section part/sections part/title] :or {part/selected-section 0}} (om/props this)
          section-names (map :section/title sections)]
      (dom/div #js {:className "ui-part u-row"}
        (dom/div #js {:className "u-column--12 u-column--10@md"}
          (ui-section (nth sections selected-section)))
        (dom/div #js {:className "u-column--12 u-column--2@md"}
          (navlist this :part/selected-section section-names))
        ))))

(def ui-part (om/factory Part {:keyfn :part/title}))

(defn toggle-drawer [this] (om/update-state! this update :drawer not))

(defui ^:once Parts
  static uc/InitialAppState
  (initial-state [c p] {:searchbar           (uc/initial-state SearchBar nil)
                        :parts/selected-part 0
                        :parts               (mapv (fn [t] (uc/initial-state Part {:title t})) (keys parts))})
  static om/IQuery
  (query [this] [:parts/selected-part {:searchbar (om/get-query SearchBar)} {:parts (om/get-query Part)}])
  static om/Ident
  (ident [this props] [:parts :ui])
  Object
  (render [this]
    (let [{:keys [parts/selected-part parts searchbar] :or {parts/selected-part 0}} (om/props this)
          part-names (map :part/title parts)
          drawer (boolean (om/get-state this :drawer))]
      (dom/div #js {:className "u-layout__page u-layout__page--fixed"}

        (dom/header #js {:className (str "u-layout__header c-toolbar c-toolbar--raised")}
          (dom/div #js {:className "c-toolbar__button"}
            (dom/button #js {:className "c-button c-button--icon" :onClick #(toggle-drawer this) :type "button"}
              (e/ui-icon {:glyph :menu}))
            )
          (dom/div #js {:className "c-toolbar__row"}
            (ui-search searchbar)
            (dom/div #js {:className "c-toolbar__spacer u-hide@sm" :aria-hidden true})
            (tabs this :parts/selected-part part-names)))

        (dom/div #js {:className (str "c-drawer" (when drawer " is-open"))}
          (dom/div #js {:className "c-drawer__header"}
            (dom/img #js {:src "img/logo.png" :height "35" :width "35"})
            (dom/h1 nil "Untangled " (dom/strong #js {:className "is-primary"} "UI")))
          (dom/a #js {:className "c-drawer__action" :href "guide.html"}
            (e/ui-icon {:glyph :check_box}) "Components Guide")
          (dom/div #js {:className "c-drawer__action is-active"}
            (e/ui-icon {:glyph :brush}) "CSS Guide")
          (dom/a #js {:className "c-drawer__action" :href "visuals.html"}
            (e/ui-icon {:glyph :visibility}) "Visual Regression Tests")
          (dom/a #js {:className "c-drawer__action" :href "test.html"}
            (e/ui-icon {:glyph :assignment}) "Specification Tests")
          (dom/a #js {:className "c-drawer__action" :href "https://github.com/untangled-web/untangled-ui"}
            (dom/span #js {:className "c-icon"}
              (dom/svg #js {:width "24" :height "24" :xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 24 24"}
                (dom/path #js {:d "M12 0c-6.627 0-12 5.406-12 12.073 0 5.335 3.438 9.859 8.207 11.455.6.111.819-.262.819-.581l-.017-2.247c-3.337.729-4.042-1.424-4.042-1.424-.546-1.394-1.332-1.765-1.332-1.765-1.091-.749.083-.734.083-.734 1.205.084 1.839 1.244 1.839 1.244 1.071 1.845 2.81 1.312 3.492 1.002.109-.778.42-1.312.762-1.612-2.664-.305-5.466-1.341-5.466-5.967 0-1.319.468-2.395 1.234-3.24-.122-.307-.535-1.535.119-3.196 0 0 1.006-.324 3.3 1.238.957-.269 1.983-.402 3.003-.406 1.02.004 2.046.139 3.004.407 2.29-1.564 3.297-1.238 3.297-1.238.656 1.663.243 2.89.12 3.195.769.845 1.233 1.921 1.233 3.24 0 4.638-2.807 5.659-5.48 5.958.432.374.814 1.108.814 2.234 0 1.614-.016 2.915-.016 3.313 0 .321.218.697.826.579 4.765-1.599 8.2-6.123 8.2-11.455 0-6.667-5.373-12.073-12-12.073z"})))
            "GitHub")
          )
        (dom/div #js {:className (str "c-backdrop" (when drawer " is-active")) :onClick #(toggle-drawer this)})

        (dom/main #js {:className "u-layout__content"}
          (dom/article #js {:className "o-article"}
            (dom/div #js {:className "ui-parts"}
              (ui-part (nth parts selected-part)))))))))

(def ui-parts (om/factory Parts))

(defui ^:once Root
  static uc/InitialAppState
  (initial-state [clz p] {:ui/react-key "A"
                          :main-ui      (uc/initial-state Parts nil)})
  static om/IQuery
  (query [this] [:ui/react-key {:main-ui (om/get-query Parts)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key main-ui]} (om/props this)]
      (dom/div #js {:className "u-layout" :key react-key}
        (ui-parts main-ui)))))

