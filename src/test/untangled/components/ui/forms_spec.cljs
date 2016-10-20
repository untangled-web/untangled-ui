(ns untangled.components.ui.forms-spec
  (:require [untangled-spec.core :refer-macros [behavior specification assertions component]]
            [untangled.components.ui.forms :as f]))

(specification "Form Field Declarations"
  (component "text-input"
             (let [field (f/text-input :name 'valid? {:v 1})]
               (assertions
                 "has a name"
                 (:input/name field) => :name
                 "has the correct type"
                 (:input/type field) => ::f/text
                 "can have a validator"
                 (:input/validator field) => 'valid?
                 "supports validator args"
                 (:input/validator-args field) => {:v 1})))
  (component "integer-input"
             (let [field (f/integer-input :age 'valid? {:v 1})]
               (assertions
                 "has a name"
                 (:input/name field) => :age
                 "has the correct type"
                 (:input/type field) => ::f/integer
                 "can have a validator"
                 (:input/validator field) => 'valid?
                 "supports validator args"
                 (:input/validator-args field) => {:v 1})))
  (component "checkbox-input"
             (let [field (f/checkbox-input :name)]
               (assertions
                 "has a name"
                 (:input/name field) => :name
                 "has the correct type"
                 (:input/type field) => ::f/checkbox))))

