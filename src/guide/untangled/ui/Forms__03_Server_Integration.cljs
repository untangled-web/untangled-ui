(ns untangled.ui.Forms--03-Server-Integration
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
  "# Server Integration

  A form (and associated subforms) have support for saving state to the
  server. This support has the following features:

  - Adding sub-entities as subforms (with associated tempid remapping)
  - Deleting existing entities (subform instances)
  - Updating entities as a pure diff (only changes are sent)

  A form submission is done via the `commit` function with the inclusion
  of a `:remote` flag.

  The mutation that will arrive at the remote looks as follows:

  ```
  TODO:
  ```

  The delta is represented by the entries as follows:

  - `add`: Additions include the ident and the full set of properties of the entity
  - `delete`: The ident of the entity that should be removed.
  - `update`: The ident of the entity to change, along with only the properties that
  changed.

  TODO: Talk about dealing with referential updates...

  ")
