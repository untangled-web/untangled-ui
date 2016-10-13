(ns untangled.components.forms)

(defn text-input
  "Declare a text input on a form"
  ([name] (text-input (constantly true)))
  ([name validator]
   {:input/name      name
    :input/visible   true
    :input/validator validator
    :input/type      ::text}))

(defn checkbox-input
  "Declare a checkbox on a form"
  [name]
  {:input/type    ::checkbox
   :input/visible true
   :input/name    name})

(defn hidden [input]
  (assoc input :input/visible false))

(defn visible [input]
  (assoc input :input/visible true))

(def my-form {
              :fields [(text-input :name)
                       (hidden (checkbox-input :registered-to-vote))]

              })
