(ns untangled.ui.AAA-General-Guidelines
  (:require
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [untangled.client.cards :refer [untangled-app]]
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [untangled.i18n.core :as i18n]
    [untangled.ui.menu :as dropdowns]
    [untangled.client.core :as uc]
    [untangled.icons :refer [icon]]
    [untangled.ui.calendar :as c]
    [untangled.client.mutations :as m]))

(defcard-doc
  "# Untangled UI Component Usage

  There are a few kinds of things in this library:

  - Stateless DOM-rendering functions (`elements` namespace) that take care
  of CSS concerns.
  - Stateful components that provide OO-style features (e.g. `calendar`)
  - Layout functions/macros
  - State management helpers
  - Full-stack integrations (image library, persistent forms)

  # Elements

  We term functions that generate DOM as elements. These can have various
  rendering options, and can accept callbacks. These are typically written
  as regular functions, and encapsulate the CSS tricks needed to render
  the element correctly. These are in the `elements` namespace.

  # Stateful Components

  UI components that should work with the support viewer need their state
  inside of your app state. Such components have their own namespace to make
  their usage more clear. They typically have the following bits:

  - Constructor functions, typically named after the component (e.g. `dropdown`
  and `dropdown-item`). These return data structures that can be used
  directly in InitialAppState of the parent (owning) component.
  - Mutations, typically using the simplest names possible. These are Om mutations
  defined with Untangled's `defmutation`. You must be using Untangled's `mutate` multimethod as
  at least part of your UI parser if you are using these with stock Om Next.
  - Mutation implementation functions. These end with `-impl`, and are functions
  on a state map or component map. These are used as the implementation of
  the internals of a mutation, but are public so you can easily compose them
  into your own mutations if the need should arise. Typically you can compose
  mutations together in a single `transact!`, which is preferred.
  - Functions to get abstract data from the state of a component. You may
  read the map of a component (it is just a value); however, stateful components
  often define helpers (like `dropdowns/selected-item`). These make it easier to
  know you're looking at the state of a component correctly without having
  to worry that you've misspelled the keyword or otherwise misunderstood the
  internals of a component.
  - One or more React factory functions, prefixed with `ui-` to distinguide
  rendering from construction. It is also common for people to use local bindings
  for a button using the symbol `button`. This prefixing makes name collisions
  less likely.

  ## Layout Functions/Macros

  None of these exist yet. More info when we define what this looks like.

  Most likely these will take children, possibly as named parameters, and
  wrap them in DOM layout.

  For example:

  ```
  (layout/border-layout
    :north (dom/div ...)
    :west (dom/div ...))
  ```

  ## State Management Helpers

  When writing mutations the typical structure is something like this:

  ```
  (swap! state (fn [m]
     (-> m
        (assoc :boo 1)
        (update :foo inc)))
  ```

  We encourage authors to write mutations that leverage a bit more abstraction.

  Writing a helper function like `(close-all-menus [state-map] ...)` can
  enable this:

  ```
  (swap! state close-all-menus)
  ```

  which is much nicer to read and easier to understand. It also lets people combine
  that operation with their own within a mutation without having to understand
  the internals of the other component:

  ```
  (defmutation boo
    [args]
    (action [{:keys [state]}]
       (swap! state (fn [m]
                      (-> m
                        close-all-menus
                        ...)))))
  ```

  When working on a particular component it is very common to have to combine
  this with `update-in` and the ident of the component. Stateful components
  should have an `ident` function in their namespace that will return the proper
  ident for that component (given an ID). Thus, you might find you'd like
  to write a component's mutation like this:

  ```
  (defmutation set-open
    [id open?]
    (action [{:keys [state]}]
      (swap! state update-in (dropdown/ident id) set-open-impl open?)))
  ```

  Since this is a very common pattern we've defined some functions in the
  `untangled.ui.state` namespace called `evolve` and `evolve!` that make this
  a bit more concise:

  ```
  (defmutation set-open
    [{:keys [id open?]}]
    (action [{:keys [state]}] (evolve! state (ident id) set-open-impl open?)))
  ```

  `evolve` takes a map and returns a map (is composable in a single swap), whereas
  `evolve!` does the swap for you. See the `dropdowns` namespace for a more complete
  example.

  # Full-Stack Integrations

  This library has components that interact with the server. Two notable examples
  are an image library and entity-based forms support. The full-stack
  integrations include pluggable support for almost anything you'd want to
  customize (for example, image storage mechanism and entity persistence)
  See the documentation for more details.

  ")
