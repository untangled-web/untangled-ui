(ns untangled.ui.dropdowns
  #?(:cljs (:require-macros
             [untangled.i18n :refer [tr-unsafe]]
             [untangled.client.mutations :refer [defmutation]]))
  (:require
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    #?(:cljs untangled.i18n
       :clj
    [untangled.i18n :refer [tr-unsafe]])
    [untangled.client.core :as uc]
    #?(:cljs [untangled.client.mutations :as m]
       :clj
    [untangled.client.mutations :as m :refer [defmutation]])
    [untangled.icons :refer [icon]]
    [untangled.client.mutations :as m]))

;; Standardize you Om table name for state, and make sure it is namespaced so it doesn't pollute the apps app-state atom
;; with unexpected collisions. Use this instead of the keyword to get IDE assistance and prevent typos
(def table-name ::by-id)

;; Standardize you Om ident, using the table name you decided.
(defn dropdown-ident [dropdown-id] [table-name dropdown-id])

;; Write mutation helper functions that abstract the om-style operations you'll want to do. This makes your code
;; re-usable in custom app mutations like so:
;; (defmutation my-mutation [params]
;;    (action [{:keys [state]}]
;;        (swap! state (fn [state-map] (-> state-map (dropdowns/dropdown-set-open did false) ...)))))
;;
;; The name prefix helps eliminate confusion between these helpers and the actual Om mutation that we're also
;; putting in this namespace.
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

;; Query functions to look at state on things from the UI. Usable from the parent UI, or within the UI
;; of the component itself
(defn is-open?
  "Returns true if the dropdown is currently open."
  [dropdown-props] (:dropdown/open? dropdown-props))

(defn current-selection
  "Returns the ID of the currently selected item, or nil. Useful if you choose not to pay attention to the callback
  and instead have some other parent UI event (like submit) that needs to gather up the dropdown selection."
  [dropdown-props] (:dropdown/selected-item dropdown-props))

;; Om Mutations. Use defmutation. This will namespace the symbols to the current namespace, and enable nice IDE
;; interaction (doc strings, navigation, etc). Allowing these to be used as:
;;
;; (om/transact this `[(dropdowns/close-all {})]) ; dropdowns MUST be in your :require an an alias, or you have to type out full namespace
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


;; State constructors. I recommend using make- as a prefix for consistency. These can be used in InitialAppState to
;; all your user's to easily construct these without having to think about the map structure, enabling better
;; local reasoning.
(defn make-dropdown
  "Build a state tree for a dropdown to use in initial app state."
  [id label items]
  {:dropdown/id id :dropdown/label label :dropdown/items items :dropdown/open? false})

(defn make-dropdown-item [id label]
  {:dropdown-item/item-id id :dropdown-item/label label})

(defn- find-first [key value list] (first (filter #(= (get % key) value) list)))

(defui Dropdown
  static om/IQuery
  (query [this] [:dropdown/id :dropdown/open? :dropdown/label :dropdown/items :dropdown/selected-item])
  static om/Ident
  (ident [this props] (dropdown-ident (:dropdown/id props)))
  Object
  (render [this]
    (let [{:keys [dropdown/id dropdown/label dropdown/items dropdown/open? dropdown/selected-item]} (om/props this)
          onSelect       (or (om/get-computed this :onSelect) identity)
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
                                         (onSelect item-id)
                                         false)}
                   (dom/button #js {:className "c-dropdown__link"} label))) items))))))

;; Make sure you either render a key in your DOM or supply keyfn
;; It is a good idea to include a docstring here to help used understand things about the component.
;; When there are special "computed" things to pass in (like callbacks) it is nice to supply a little
;; syntactic sugar
(def ^:private ui-dropdown-factory (om/factory Dropdown))
(defn ui-dropdown
  "Render a Dropdown. You may use Om's computed facility to add an onSelect callback. The onSelect will be
  called with the id of the item selected. You may just pass the callback as a named parameter for convenience."
  [props & {:keys [onSelect]}]
  (if onSelect
    (ui-dropdown-factory (om/computed props {:onSelect onSelect}))
    (ui-dropdown-factory props)))
