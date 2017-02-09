# Untangled Components

This library is meant to become a set of components that use
untangled-stylekit and provide active UI elements and layouts for rapid application
development.

## CALL FOR CONTRIBUTIONS.

Adding something to this library should be quick and easy. The DOM/CSS 
for a ton of these is already worked out in untangled-stylekit. What we
need here are active defui versions of those that can be used easily 
without copying/pasting DOM.

To Help:

1. Pick a component in untangled-stylekit that has CSS/layout, but is not yet here. The style kit is going to be 
combined with this project, and some of the stuff has gotten out of sync. So, only implement things that are currently
rendering correctly. Best to ask "is anyone working on/can I work on X?"
2. Write the defui/model/mutations, probably all together in a single new namespace.
Components that interact full-stack (like image library) need more thought.
2. Make devcards for the rendering of that component in various states (for
visual regression testing) in the `visuals` source folder.
3. Make a devcard that wraps the component in an untangled-app (see examples)
to show the callback/interactions working. Include devcard documentation that
describes the use of the component. These go in the `guide` source folder.

Please contact us on the `#untangled` channel of clojurians.slack.com if you 
want to help.

More guidelines below:

### Contribution Standards/Guidelines

### Write in CLJC

To support server-side rendering all code should be written in CLJC files. 

- Rendering must be pure! Don't use `js/setTimout` or other js-only things in your UI. That stuff belongs in mutations.
If your lifecycle (e.g. componentWillMount) or something needs js things, make a clj/cljs function where the clj version 
is a no-op, and call *that* from the UI.
- Untangled mutations can be set to cljs-only. They'll never be attempted on server-side code anyhow.

### Create a Card for Visual Regression Tests

All components must have a devcard in the `visuals` source directory that show their various states 
statically (for visual regression testing). Use the same package structure, and name that namespace with a -cards suffix.
E.g. src/untangled.components.buttons.cljs -> visuals/untangled.components.buttons-cards.cljs

### Create a Card for Live Documentation/Usage

All components must have a devcard in the `guide` source directory that documents/demonstrates
your live working component with callbacks, etc. Use MockNetwork for simulating full stack interactions.

### Naming Conventions

- The factory method should be prefixed with `ui-`, e.g. `ui-button`.
- Idents for components should use Om table names prefixed to their namespace (e.g. `:untangled.components.buttons/by-id`)

### Ensure Internationalization Will Work (IN PROGRESS)

These are thoughts on how this should work...evolving.

First you should understand how Untangled does i18n:

We use GNU gettext to extract strings from the source by compiling the source to js, and using `xgettext`. So, any
calls to, say, `(tr "Hello")` turn into `tr("Hello")` in Javascript, which the predefined tools for gettext can work with
(extraction, message merging, translator tools like POEdit). If you call tr on a variable, this doesn't work, since the
js ends up as `tr(v)`. We have a function called `tr-unsafe` that allows you to use a varaible (`tr` will intentionally
crash the compile if you use anything but a literal string for the reason), but since `tr-unsafe` will result in a js call that 
cannot be extracted statically from source you must somehow tell gettext about the possible values that variable can have, 
or your i18n will fail.

Approaches to this are:
- Manually add the missing values to your translation files by hand
- Add a function to your code base that never gets called, and just calls `tr` with the missing ones to aid in extraction.
This results in automatic extraction and serves as documentation you can put "near" the uses of `tr-unsafe`. 
- Have labels be something that are not ever stored in state. This is ok (probably preferable) for things like Button, 
but more complex things like menu's are probably declared with labels when defined, not when used.
- Have the user pass you a lambda for doing the label generation. This approach is a problem with Om, because we cannot 
store a function in app state (it breaks serialization of history). So,
we could, for example, allow them to drop in a unique keyword and define some multimethod for the component.

```clj
(defmulti render-button-label (fn [k] k))

(defmethod render-button-label :ok [k] (tr "OK"))
```

This is extensible, but I don't love it.

Comments/ideas welcome.


### API Standards

These are thoughts...interested in input at this early stage:

- Your app-state constructor (e.g. `make-menu`) should allow the specification for most of the visual representation. For
example `(make-menu :id :ok-button :style large :icon :warning)`
- The factory method might deal with om/computed bits via named parameters. 
For example `(ui-button props :onClick do-my-thing)`. Changes to appearance should go through mutations:
`(om/transact! this [(button/change-style {:id :ok-button :icon :help})])`

Lean towards having all of the UI components interact nicely with the VCR support viewer, so avoid using component
local state except in performance hotspots (e.g. animations like panning an image might not be fast if they use 
`transact!`)

# Running:

To see the devcard demos of the components:

```
lein run -m clojure.main script/figwheel.clj
```

Open a browser on:

http://localhost:3449

## Form Support (Nearly Complete)

Support for declarative forms that have full-stack integration, validation
support, pluggable validation, pluggable rendering, pluggable form elements, 
nested to-one and to-many relations, and pluggable database integration for
persistence.

## Image Library and Crop

Image library (upload/selection) and clipping tools. Includes pluggable
image metadata/image storage (e.g. save name of image in postgresql, image
data in S3). The image clipping returns clip bounds for an image for 
embedding arbitrary images CMS-style. Clipping/serving the resulting
image is up to you.
