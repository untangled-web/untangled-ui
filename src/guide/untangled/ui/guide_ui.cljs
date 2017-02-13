(ns untangled.ui.guide-ui
  (:require [devtools.core :as devtools]
            untangled.ui.forms-overview-cards
            untangled.ui.forms-advanced-cards
            untangled.ui.table-cards
            untangled.ui.dropdown-cards
            untangled.ui.calendar-cards
            untangled.ui.exploration-cards
            yahoo.intl-messageformat-with-locales))

(devtools/enable-feature! :sanity-hints)
(devtools/install!)
