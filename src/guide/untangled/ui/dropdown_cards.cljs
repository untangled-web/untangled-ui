(ns untangled.ui.dropdown-cards
  (:require
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [untangled.client.cards :refer [untangled-app]]
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [untangled.i18n.core :as i18n]
    [untangled.ui.dropdowns :as dropdowns]
    [untangled.client.core :as uc]
    [untangled.icons :refer [icon]]
    [untangled.ui.calendar :as c]
    [untangled.client.mutations :as m]))

(defui ^:once DropdownsRoot
  static uc/InitialAppState
  (initial-state [cls params] {:dropdown-1 (dropdowns/dropdown :mood-filter "Mood Filter"
                                             [(dropdowns/dropdown-item :happy "Happy")
                                              (dropdowns/dropdown-item :indifferent "Indifferent")
                                              (dropdowns/dropdown-item :sad "Sad")])
                               :dropdown-2 (dropdowns/dropdown :age-filter "Age Filter"
                                             [(dropdowns/dropdown-item :young "0-10")
                                              (dropdowns/dropdown-item :older "11-20")
                                              (dropdowns/dropdown-item :old "20+")])})
  static om/IQuery
  (query [this] [:ui/react-key
                 {:dropdown-1 (om/get-query dropdowns/Dropdown)}
                 {:dropdown-2 (om/get-query dropdowns/Dropdown)}])
  Object
  (render [this]
    (let [{:keys [ui/react-key dropdown-1 dropdown-2]} (om/props this)
          mood (dropdowns/current-selection dropdown-1)]
      (dom/div #js {:key react-key :onClick #(om/transact! this `[(dropdowns/close-all {})])}
        (dropdowns/ui-dropdown dropdown-1
          :onSelect (fn [id] (js/console.log (str "Selected " id))))
        (when (= mood :indifferent)
          (dropdowns/ui-dropdown dropdown-2))))))

(defcard-doc
  "# Dropdowns

  The active dropdowns component allows you to create and use a dropdown component that is tracked in app state.

  The following Om mutations may be used from anywhere in your application as long as you know the dropdown's ID:

  - close-all : Close all open dropdowns. Useful from the Root of your app to ensure that clicking outside of a dropdown
  will cause all dropdowns to close
  - set-open : Opens/closes a dropdown by ID
  - select : Causes a particular item within the dropdown to be selected (does not trigger events)

  Components can look up the state of a dropdown at the dropdown ident, which can be found using the `dropdowns/ident`.

  All mutations are implemented using `-impl` functions in dropdown, which allows you to compose dropdown operations
  within your own mutations without having to know how dropdowns are implemented.

  - current-selection

  "
  (dc/mkdn-pprint-source DropdownsRoot))

(defcard dropdown-active-playground
  "# Dropdowns

  Note: Choosing 'Indifferent' in the filter will cause a dependent dropdown to appear.
  "
  (untangled-app DropdownsRoot)
  {}
  {:inspect-data true})
