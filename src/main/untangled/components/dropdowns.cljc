(ns untangled.components.dropdowns
  #?(:cljs (:require-macros
             [untangled.i18n :refer [tr-unsafe]]
             [untangled.client.mutations :refer [defmutation]]))
  (:require
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    untangled.i18n
    [untangled.client.core :as uc]
    #?(:cljs [untangled.client.mutations :as m]
       :clj
    [untangled.client.mutations :as m :refer [defmutation]])
    [untangled.icons :refer [icon]]
    [untangled.client.mutations :as m]))

;; mutation helper functions.

(def table-name ::by-id)

(defn dropdown-ident [dropdown-id] [table-name dropdown-id])

(defn dropdown-set-open
  "Set whether or not the dropdown with the given ID is open"
  [app-state-map dropdown-id open?]
  (assoc-in app-state-map [table-name dropdown-id :dropdown/open?] open?))

(defn dropdown-close-all
  "Close all dropdowns, application wide"
  [app-state-map]
  (reduce (fn [m dropdown-id] (dropdown-set-open m dropdown-id false))
    app-state-map (keys (get app-state-map table-name))))

(defn dropdown-select
  "Select an item in the dropdown"
  [app-state-map dropdown-id item-id]
  (assoc-in app-state-map [table-name dropdown-id :dropdown/selected-item] item-id))

(defmutation close-all
  "Om Mutation: Closes all dropdowns application wide."
  [params-ignored]
  (action [{:keys [state]}] (swap! state dropdown-close-all)))

(defmutation set-open
  "Om Mutation: Opens/closes a dropdown. Required id and open? parameters."
  [{:keys [id open?]}]
  (action [{:keys [state]}] (swap! state dropdown-set-open id open?)))

(defmutation select
  "Om Mutation: Selects an item in the dropdown. Required dropdown id and the selection item-id"
  [{:keys [id item-id]}]
  (action [{:keys [state]}] (swap! state dropdown-select id item-id)))

(defn make-dropdown
  "Build a state tree for a dropdown to use in initial app state."
  [id label items]
  {:dropdown/id id :dropdown/label label :dropdown/items items :dropdown/open? false})

(defn make-dropdown-item [id label]
  {:dropdown-item/item-id id :dropdown-item/label label})

(defn find-first [key value list] (first (filter #(= (get % key) value) list)))

(defui Dropdown
  static om/IQuery
  (query [this] [:dropdown/id :dropdown/open? :dropdown/label :dropdown/items :dropdown/selected-item])
  static om/Ident
  (ident [this props] (dropdown-ident (:dropdown/id props)))
  Object
  (render [this]
    (let [{:keys [dropdown/id dropdown/label dropdown/items dropdown/open? dropdown/selected-item]} (om/props this)
          onClick        (or (om/get-computed this :onSelect) identity)
          selected-item  (find-first :dropdown-item/item-id selected-item items)
          selected-label (get selected-item :dropdown-item/label (tr-unsafe label))
          menu-class     (str "c-dropdown__menu" (if open? " is-active" ""))]
      (dom/div #js {:key (str "dropdown-" (name id)) :className "c-dropdown"}
        (dom/button #js {:onClick   (fn [evt]
                                      (.stopPropagation evt)
                                      (om/transact! this `[(close-all {}) (set-open ~{:id id :open? (not open?)}) :dropdown/open?])
                                      false)
                         :className "c-dropdown__select js-dropdown-toggle"} (tr-unsafe selected-label))
        (dom/ul #js {:tabIndex "-1" :aria-hidden "true" :className menu-class}
          (map (fn [{:keys [dropdown-item/item-id dropdown-item/label]}]
                 (dom/li #js {:key     (str "dropdown-item-" (name item-id))
                              :onClick (fn [evt]
                                         (.stopPropagation evt)
                                         (om/transact! this `[(close-all {}) (select ~{:id id :item-id item-id}) :dropdown/open?])
                                         (onClick id)
                                         false)}
                   (dom/button #js {:className "c-dropdown__link"} label))) items))))))

(def ui-dropdown (om/factory Dropdown))
