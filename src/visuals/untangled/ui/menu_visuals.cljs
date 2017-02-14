(ns untangled.ui.menu-visuals
  (:require
    [devcards.core :as dc :refer-macros [defcard]]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.ui.menu :as m :refer [menu menu-item]]
    [untangled.i18n :as i :refer [tr trf]]))

; a card for each possible way the thing can look. Use loops and such to generate cards that
; cycle through arbitrary style changes. Each card will result in a single visual regression
; test

(def menu-with-item (menu :a "Label" [(menu-item :ia "Item Label")]))
(def open-menu (m/set-open-impl menu-with-item true))
(def menu-with-selection (m/select-impl menu-with-item :ia))
(def open-menu-with-selection (m/set-open-impl menu-with-selection true))

(defcard menu-closed (m/ui-menu menu-with-item))

(defcard menu-closed-with-selection (m/ui-menu menu-with-selection))

(defcard menu-open (m/ui-menu open-menu))

(defcard menu-open-with-selection (m/ui-menu open-menu-with-selection))
