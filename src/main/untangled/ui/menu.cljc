(ns untangled.ui.menu
  (:require
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [untangled.i18n :refer [tr-unsafe]]
    [untangled.ui.state :refer [evolve! evolve]]
    [untangled.client.core :as uc]
    [untangled.client.mutations :as m :refer [defmutation]]
    [untangled.icons :refer [icon]]))

;; Standardize you Om table name for state, and make sure it is namespaced so it doesn't pollute the apps app-state atom
;; with unexpected collisions. Use this instead of the keyword to get IDE assistance and prevent typos. Also allows me
;; to rename this namespace without breaking anyone's code.
(def table-name ::by-id)

;; Standardize you Om ident, using the table name you decided.
(defn ident [menu-id] [table-name menu-id])

;; Write mutation helper functions that abstract the om-style mutations you'll want to do, but take either the
;; state-map (if they have to have a more global effect) or the component state (for component-centric operations).
;; Suffix these with `-impl`. ;; The `-impl` suffix ensures that UI developers will see the non-suffixed name as the Om mutation and avoids confusion.
;;
;; This makes your code re-usable in other peoples custom mutations like so:
;;
;; (defmutation my-mutation [params]
;;    (action [{:keys [state]}]
;;        (swap! state (fn [state-map] (-> state-map (menu/set-open-impl menu-id false) ...)))))
;;
;; SEE ALSO `untangled.ui.state/evolve`
(defn set-open-impl
  "Set whether or not the menu with the given ID is open."
  [menu open?]
  (assoc menu :menu/open? open?))

(defn close-all-impl
  "Close all menus, application wide"
  [app-state-map]
  (reduce (fn [m menu-id] (evolve m (ident menu-id) set-open-impl false))
    app-state-map (keys (get app-state-map table-name))))

;; Query functions to look at state on things from the UI. Usable from the parent UI, or within the UI
;; of the component itself
(defn select-impl
  "Select an item in the menu"
  [menu item-id]
  (assoc menu :menu/selected-item item-id))

;; Functions that take the component props and act as "getters" should not have a suffix/prefix. You never read via
;; Om transact!, and a parent is allowed to "look at" the props of a child. However, more local reasoning and
;; refactoring power is possible if you abstract these into functions on the state.
(defn is-open?
  "Returns true if the menu is currently open."
  [menu] (:menu/open? menu))

(defn current-selection
  "Returns the ID of the currently selected item, or nil. Useful if you choose not to pay attention to the callback
  and instead have some other parent UI event (like submit) that needs to gather up the menu selection."
  [menu] (:menu/selected-item menu))

;; Om Mutations. Use defmutation. This will namespace the symbols to the current namespace, and enable nice IDE
;; interaction (doc strings, navigation, etc). Allowing these to be used as:
;;
;; (om/transact this `[(menus/close-all {})]) ; menus MUST be in your :require an an alias, or you have to type out full namespace
;;
;; Note how we use the simpler name (without  the -impl suffix) for the mutation so that developers will be able to
;; easily see what is usable. The docstring will also help them know they're using the right thing.
(defmutation close-all
  "Om Mutation: Closes all menus application wide."
  [params-ignored]
  (action [{:keys [state]}] (swap! state close-all-impl)))

(defmutation set-open
  "Om Mutation: Opens/closes a menu. Required id and open? parameters."
  [{:keys [id open?]}]
  (action [{:keys [state]}] (evolve! state (ident id) set-open-impl open?)))

(defmutation select
  "Om Mutation: Selects an item in the menu. Required menu id and the selection item-id"
  [{:keys [id item-id]}]
  (action [{:keys [state]}] (evolve! state (ident id) select-impl item-id)))


;; State constructors. Since we're doing things in a pure functional way, it makes sense for these to have the
;; name of the thing being created. These can be used in InitialAppState to
;; all your user's to easily construct these without having to think about the map structure, enabling better
;; local reasoning.
;; TODO(DEVELOPER): Add :menu/position with #{:bottom-left :bottom-right :top-left :top-right} options. Additionally,
;; we should add a `.u-end` class to the `.has-menu` parent div if position is right aligned.
(defn menu
  "Build a state tree for a menu to use in initial app state. The id of the menu should be globally unique."
  [id label items]
  {:menu/id id :menu/label label :menu/items items :menu/open? false})

(defn menu-item
  "Build the state map that can be used in a menu as an item. The `id` need only be unique within the menu."
  [id label]
  {:menu-item/item-id id :menu-item/label label})

(defn- find-first [key value list] (first (filter #(= (get % key) value) list)))

(defui Menu
  static om/IQuery
  (query [this] [:menu/id :menu/open? :menu/label :menu/items :menu/selected-item])
  static om/Ident
  (ident [this props] (ident (:menu/id props)))
  Object
  (render [this]
    (let [{:keys [menu/id menu/label menu/items menu/open? menu/selected-item]} (om/props this)
          onSelect       (or (om/get-computed this :onSelect) identity)
          menu-style     (om/get-computed this :style)
          selected-id    selected-item
          selected-item  (find-first :menu-item/item-id selected-id items)
          selected-label (get selected-item :menu-item/label (tr-unsafe label))
          menu-class     (str "c-menu" (if open? " is-active" ""))]
      (dom/div #js {:key (str "menu-" (name id)) :className "has-menu"}
        (if (= menu-style :icon)
          (dom/button #js {:className "c-button c-button--icon"
                           :type      "button"
                           :title     (tr-unsafe selected-label)
                           :onClick (fn [evt]
                                      (.stopPropagation evt)
                                      (om/transact! this `[(close-all {}) (set-open ~{:id id :open? (not open?)}) :menu/open?])
                                      false)} (icon :more_vert))
          (dom/button #js {:onClick   (fn [evt]
                                       (.stopPropagation evt)
                                       (om/transact! this `[(close-all {}) (set-open ~{:id id :open? (not open?)}) :menu/open?])
                                       false)
                           :type      "button"
                          :className  "c-button"} (tr-unsafe selected-label)))

        (dom/ul #js {:tabIndex "-1" :aria-hidden "true" :className menu-class}
          (map (fn [{:keys [menu-item/item-id menu-item/label]}]
                 (dom/li #js {:key     (str "menu-item-" (name item-id))
                              :onClick (fn [evt]
                                         (.stopPropagation evt)
                                         (om/transact! this `[(close-all {}) (select ~{:id id :item-id item-id}) :menu/open?])
                                         (when onSelect (onSelect item-id))
                                         false)}
                   (dom/button #js {:type      "button"
                                    :className (str "c-menu__item"
                                                 (when (= item-id selected-id) " is-active"))} label))) items))))))


;; Make sure you either render a key in your DOM or supply keyfn
;; It is a good idea to include a docstring here to help used understand things about how to use the component.
;; When there are special "computed" things to pass in (like callbacks) it is nice to supply a little
;; syntactic sugar via named parameters.
(let [ui-menu-factory (om/factory Menu)]
  (defn ui-menu
    "Render a Menu. You may use Om's computed facility to add an onSelect callback. The onSelect will be
    called with the id of the item selected. You may also just pass the callback as a named parameter for convenience.

    ...

    "
    [props & {:keys [style color onSelect] :or {style :normal color :primary}}]
    (ui-menu-factory (om/computed props {:onSelect onSelect :style style}))))


