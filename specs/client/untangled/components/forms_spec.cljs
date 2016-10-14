(ns untangled.components.forms-spec
  (:require [untangled-spec.core :refer-macros [behavior specification assertions component]]
            [untangled.components.forms :as f]
            ))

(specification "name validation"
  (assertions
    "indicates valid when there are two or more words in the input"
    (f/name-validator "MSG" " word1 word2   ") => nil
    "returns a message when the input contains only a single word"
    (f/name-validator "MSG" " word1 ") => "MSG"
    "returns a message when the input is empty"
    (f/name-validator "MSG" "") => "MSG"))

