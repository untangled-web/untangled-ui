(ns untangled.ui.state)

(defn evolve
  "Evolve the application state by applying op to the database object at ident. `op` should be a `(fn [obj args] updated-obj)`"
  [state-map ident op args]
  (update-in state-map ident op args))

(defn evolve!
  "Evolve the application state in the given atom by applying op to the database object at ident. `op` should be a `(fn [obj args] updated-obj)`"
  ([state-atom ident op]
   (swap! state-atom evolve ident op {}))
  ([state-atom ident op args]
   (swap! state-atom evolve ident op args)))

