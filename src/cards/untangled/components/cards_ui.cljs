(ns untangled.components.cards-ui
  (:require [devtools.core :as devtools]
            [untangled.components.forms]
            [untangled.components.tables]
            [untangled.components.calendar]
            [yahoo.intl-messageformat-with-locales]))

#_(defn start []
    (dc/start-devcard-ui!))

#_(start)

(devtools/enable-feature! :sanity-hints)
(devtools/install!)
