(ns untangled.ui.getnode
  (:require [om.core :as om :include-macros true]))

(defn nodeGet [component this]
  (om/get-node this component))