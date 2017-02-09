(ns cljs.user
  (:require
    [untangled.client.core :as core]
    [cljs.pprint :refer [pprint]]
    [guideui.main :as main]
    [guideui.ui :as ui]))

(enable-console-print!)

; use this from REPL to view bits of the application db
(defn log-app-state
  "Helper for logging the app-state, pass in top-level keywords from the app-state and it will print only those
  keys and their values."
  [& keywords]
  (pprint (let [app-state @(:reconciler @main/ui-client)]
            (if (= 0 (count keywords))
              app-state
              (select-keys app-state keywords)))))
