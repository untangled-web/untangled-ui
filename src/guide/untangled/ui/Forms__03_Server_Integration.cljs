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
  server. This support takes the best view it possibly can of the possible
  things a user can do to an entity via a form:

  A user should be able to:

  1. Change the value of one or more fields.
  2. Add a completely new entity (with tempid) to the database (e.g. new form or new subform)
  3. Link an existing form to an instance of a subform. The subform might have been looked up (by your code)
  or created (via 2).
  4. Remove the linkage from a form to a subform.
  5. As a convenience: trigger an entity deletion instruction when doing (4) if the relation
  is marked to indicate ownership (via `:isComponent`). This could be derived at the
  server layer with knowledge of the underlying schema.

  A form submission is done via the `commit-to-entity` function/mutation with the inclusion
  of a `:remote` flag.

  ## Form Field Updates

  Field updates are sent under the following conditions:

  - The entity of the form has a REAL ID
  - One or more fields have values different from those at the time of `build-form` or the last commit.

  The parameters sent to the `commit-to-entity` mutation on the server will include the key
  `:form/updates` whose value will be a map. The update map's keys will be client-side idents of
  the entities that changed, and the values will be maps of k-v pairs of the data the changed.

  ```
  {:form/updates { [:thing 1] {:field-a 1 }
                   [:thing 2] {:field-b 55 }}}
  ```

  NOTES:

  - Updates will *never* include referential updates (e.g. A references subform element B).
  - Fields on the entity in the UI that are *not* declared as form fields *will never* appear in
  an update.

  ## New Entities

  When a form (and/or subforms) is submitted that has a primary ID that is an Om tempid, the incoming
  commit parameters will include the `:form/new-entities` key. The value of this entry is just like
  that of `:form/updates`, but the ID in the ident will be an Om tempid (which you must send remaps
  back for), and the map of data will include all attributes of that entity that were defined in
  the form.

  ```
  {:form/new-entities { [:thing tempid-1] {:field-a 1 :field-b 55 :thing/child [:thing tempid-2]}
                        [:thing tempid-2] {:field-a 8 :field-b 42 }}}
  ```

  NOTES:
  - New entity properties include only the columns declared in the form support. Remember that you can
  declare fields without rendering them.
  - New entity entries *include* linkage *if and only if* such linkage is declared via subform support (note
  you do not have to render the subform).

  ## New Linkage

  If a subform is explicitly declared, then changes to the linkage between a form and the subforms will
  Form support requires that linkage be specifically declared via subform

  When an entity (new or otherwise) has a change that is declared in the form support as
  as subformcauses that entity to link


  ")
