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

1. Pick a component in untangled-stylekit that has CSS/layout, but is not yet here.
2. Write the defui/model/mutations, probably all together in a single new namespace.
Components that interact full-stack (like image library) need more thought.
2. Make devcards for the rendering of that component in various states (for
visual regression testing).
3. Make a devcard that wraps the component in an untangled-app (see examples)
to show the callback/interactions working. Include devcard documentation that
describes the use of the component.

Please contact us on the `#untangled` channel of clojurians.slack.com if you 
want to help.

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
your live working component with callbacks, etc. Use MockNetwork for simulating full stack.

### Naming Conventions

- The factory method should be prefixed with `ui-`, e.g. `ui-button`.
- Idents for components should use Om table names prefixed to their namespace (e.g. `:untangled.components.buttons/by-id`)

### API Standards

- Your factory method should deal with the om/computed bits. 
For example `(ui-button props :style :large :onClick f)`

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
