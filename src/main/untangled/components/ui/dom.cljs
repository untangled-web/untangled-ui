(ns untangled.components.ui.dom
  (:require
    [om.dom :as dom]
    [goog.object]))

(defn get-icon
  "Returns an icon tag that automates adding Google material icons

   @param iconName: name of the Google material icon
   @param attributes: an optional argument of JS attributes and values
  "
  ([iconName]
   (get-icon iconName nil))

  ([iconName attributes]
   (let [add-material-class
         (fn [attrs]
           (clj->js (update attrs :className #(str "material-icons " %))))]

     (dom/i (add-material-class attributes) iconName))))
