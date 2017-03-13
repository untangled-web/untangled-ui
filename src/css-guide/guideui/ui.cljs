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
            [devcards.core :as dc]))

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
                         (dom/span #js {} nm)))) part-names))))

(defn tabs [component field options]
  (let [part-names   options
        selected-idx (get (om/props component) field)
        get-class    (fn [idx] (str "link" (if (= idx selected-idx) " is-active" "")))
        select-item  (fn [idx] (m/set-integer! component field :value idx))]
    (dom/div #js {:className "c-tabs u-end@md" :style #js {:marginTop "7px"}}
      (map-indexed (fn [idx nm]
                     (dom/button #js {:className (str (get-class idx) " c-tab c-tab--primary")
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
      (dom/div #js {:className "c-dropdown u-hide@sm"}
        (dom/div #js {:className "c-field"}
          (uic/icon :search)
          (dom/input #js {:type        "text"
                          :value       search
                          :onChange    (fn [evt]
                                         (let [v (.. evt -target -value)]
                                           (om/transact! this `[(search/update-results ~{:term v})])))
                          :onFocus     #(m/set-value! this :ui/open true)
                          :placeholder "Search Untangled UI"
                          :className   "c-field__input"})
          #_(dom/span #js {:className "c-icon"} (untangled.icons/material-icon :search))
          )
        (dom/ul #js {:tabIndex "-1" :aria-hidden "true" :className menu-class}
          (map (fn [{:keys [label path]}]
                 (dom/li #js {:key label :onClick (fn [evt]
                                                    (m/set-value! this :ui/open false)
                                                    (om/transact! this `[(guide/navigate {:path ~path}) :ui/react-key]))}
                   (dom/button #js {:className "c-dropdown__link"} label))) results))))))

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
      (dom/span nil
        (example-renderer)))))

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
          part-names (map :part/title parts)]
      (dom/div #js {:className "u-layout__page u-layout__page--fixed"}

        (dom/header #js {:className (str "u-layout__header c-toolbar c-toolbar--raised")}
          (dom/div #js {:className "c-toolbar__button"}
            (dom/a #js {:href "/"}
              (dom/img #js {:src "/img/logo.png" :height "40" :width "40" :style #js {:margin "4px"}})))
          (dom/div #js {:className "c-toolbar__row"}
            (ui-search searchbar)
            (dom/div #js {:className "c-toolbar__spacer u-hide@sm"})
            (tabs this :parts/selected-part part-names)))

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

