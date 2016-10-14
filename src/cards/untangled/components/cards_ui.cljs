(ns untangled.components.cards-ui
  (:require [devcards.core :as dc :include-macros true]
            [devtools.core :as devtools]
            [untangled.components.forms]
            [untangled.components.tables]
            [untangled.components.calendar]))

(defn start []
  (dc/start-devcard-ui!))

(start)

(devtools/enable-feature! :sanity-hints)
(devtools/install!)
