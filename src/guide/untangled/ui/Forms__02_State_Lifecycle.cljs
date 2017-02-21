(ns untangled.ui.Forms--02-State-Lifecycle
  (:require-macros
    [untangled.client.cards :refer [untangled-app]])
  (:require
    [clojure.string :as str]
    [com.stuartsierra.component :as component]
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.client.mutations :as m]
    [untangled.ui.forms :as f]
    [untangled.i18n :refer [tr]]))

(defcard-doc
  "# Form State and Lifecycle

  Form support is meant to track the state of one or more entities through
  the process of editing.

  A form can have any number of children (which can dynamically change
  over time).

  The lifecycle is as follows:

  ```
  Regular Persisted Entity <-+
        |                    |
        | init-form          |
        v                    | reset/commit
  Pristine Form              |
        | edits/additions    |
        v                    |
   Dirty Form  --------------+
                             ^------+
                                    |
  Locally Created (tempid)          |
        |                           |
        | init-form                 |
        v                 (server tempid remap)
   Dirty Form                       |
    ^    |                        __|_
    |    | edits/additions/reset/commit
    +----+
  ```

  So that any initialized form *could* be dirty (if it has a temp id).

  ## Temporary IDs

  Any entity in a form grouping that contains a temporary ID is always
  considered dirty. Thus, if you're writing forms on a UI that has
  no server interaction you will probably want to generate your own
  numeric unique IDs for any new entities.


  ")
