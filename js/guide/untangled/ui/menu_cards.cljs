(ns untangled.ui.menu-cards
  (:require
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [untangled.client.cards :refer [untangled-app]]
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [untangled.i18n.core :as i18n]
    [untangled.ui.menu :as menu]
    [untangled.client.core :as uc]
    [untangled.icons :refer [icon]]
    [untangled.ui.calendar :as c]
    [untangled.client.mutations :as m]))

(defui ^:once MenuRoot
  static uc/InitialAppState
  (initial-state [cls params] {:menu-1 (menu/menu :mood-filter "Mood Filter"
                                         [(menu/menu-item :happy "Happy")
                                          (menu/menu-item :indifferent "Indifferent")
                                          (menu/menu-item :sad "Sad")])
                               :menu-2 (menu/menu :age-filter "Age Filter"
                                         [(menu/menu-item :young "0-10")
                                          (menu/menu-item :older "11-20")
                                          (menu/menu-item :old "20+")])})
  static om/IQuery
  (query [this] [:ui/react-key
                 {:menu-1 (om/get-query menu/Menu)}
                 {:menu-2 (om/get-query menu/Menu)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key menu-1 menu-2]} (om/props this)
          mood (menu/current-selection menu-1)]
      (dom/div #js {:key react-key :onClick #(om/transact! this `[(menu/close-all {})])}
        (menu/ui-menu menu-1
          :onSelect (fn [id] (js/console.log (str "Selected " id))))
        (when (= mood :indifferent)
          (menu/ui-menu menu-2))))))

(defcard-doc
  "# Menu

  The active menu component allows you to create and use a menu component that is tracked in app state.

  The following Om mutations may be used from anywhere in your application as long as you know the menu's ID:

  - close-all : Close all open menus. Useful from the Root of your app to ensure that clicking outside of a menu
  will cause all menus to close
  - set-open : Opens/closes a menu by ID
  - select : Causes a particular item within the menu to be selected (does not trigger events)
  - style : Changes the visual style of a menu between :normal button and :icon for a simpler trigger.


  Components can look up the state of a menu at the menu ident, which can be found using the `menus/ident`.

  All mutations are implemented using `-impl` functions in menu, which allows you to compose menu operations
  within your own mutations without having to know how menus are implemented.

  - current-selection

  "
  (dc/mkdn-pprint-source MenuRoot))

(defcard dropdown-active-playground
  "# Menus

  Note: Choosing 'Indifferent' in the filter will cause a dependent menu to appear.
  "
  (untangled-app MenuRoot)
  {}
  {:inspect-data true})
