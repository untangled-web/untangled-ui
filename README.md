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
