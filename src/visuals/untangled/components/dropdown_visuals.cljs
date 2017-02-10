(ns untangled.components.dropdown-visuals
  (:require
    [devcards.core :as dc :refer-macros [defcard]]
    [om.dom :as dom]
    [om.next :as om :refer-macros [defui]]
    [untangled.client.core :as uc]
    [untangled.components.dropdowns :as dropdowns :refer [make-dropdown make-dropdown-item]]
    [untangled.i18n :as i :refer-macros [tr trf]]))

; a card for each possible way the thing can look. Use loops and such to generate cards that
; cycle through arbitrary style changes. Each card will result in a single visual regression
; test

(def dropdown-with-item (make-dropdown :a "Label" [(make-dropdown-item :ia "Item Label")]))
(def open-dropdown (assoc dropdown-with-item :dropdown/open? true))
(def dropdown-with-selection (assoc dropdown-with-item :dropdown/selected-item :ia))
(def open-dropdown-with-selection (assoc dropdown-with-selection :dropdown/open? true))

(defcard dropdown-closed (dropdowns/ui-dropdown dropdown-with-item))

(defcard dropdown-closed-with-selection (dropdowns/ui-dropdown dropdown-with-selection))

(defcard dropdown-open (dropdowns/ui-dropdown open-dropdown))

(defcard dropdown-open-with-selection (dropdowns/ui-dropdown open-dropdown-with-selection))
