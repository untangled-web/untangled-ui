# Untangled UI

Reusable CSS and components for the Untangled Web Framework. These components are usable from stock Om, but their mutations
assume you at least are willing to use the Untangled `mutate` multimethod for your application and are using
the standard Om database format (e.g. you don't have to use anything else from Untangled, just the 
default Om database format and one `defmulti`).

The CSS is similar to other frameworks like Bootstrap. It can be styled, *is prefixed to prevent CSS name collisions* with other
CSS (so it can be used with others), and is responsive. We chose to make our own CSS because:

1. So that the component library is not a moving target subject to breakage from outside (CSS and components evolve in
lock step with visual regression tests).
2. We needed features not provided by stock libraries.

The CSS can be used in a standalone fashion, but it's primary purpose is to allow us to make a complete set of active
reusable Untangled components for rapid application development.

See the README-css.md for more details on working with the CSS itself. 

![](https://clojars.org/navis/untangled-ui/latest-version.svg)

# Project Layout

```
├── dev
│   ├── clj
│   └── cljs
├── resources
│   ├── public
│   │   ├── css  ------------- The output folder for the generated stock CSS
├── script  ------------------ Location of figwheel convenience script
├── src
│   ├── css  ----------------- The CSS source files (which generate the CSS)
│   │   ├── components
│   │   ├── elements
│   │   ├── settings
│   │   └── utilities
│   ├── css-guide  ----------- An Om-based UI describing the CSS available
│   │   ├── guideui
│   │   └── styles
│   ├── guide  --------------- A devcards-based doc for the React/Om-based elements and components. 
│   ├── main  ---------------- The Library source (exported as the library untangled-ui. Server and client)
│   ├── test  ---------------- Untangled specs for anything that merits BDD logic tests (server and client)
│   └── visuals  ------------- A set of devcards for visual regression testing.
```

## CALL FOR CONTRIBUTIONS.

NOTE: Make sure you run the gulp command in the README.css to generate 
the CSS.

Adding something to this library should be quick and easy. The DOM/CSS 
for a ton of these is already worked out. What we
need here are active defui versions of those that can be used easily 
without copying/pasting DOM.

To Help:

1. Pick a component that has CSS/layout, but is not yet here. 
some of the stuff has gotten out of sync. So, only implement things that are currently
rendering correctly. 
2. Ask "is anyone working on/can I work on X?" and create an Issue on GitHub
3. Write the defui/model/mutations, probably all together in a single new namespace.
Components that interact full-stack (like image library) need more thought/discussion.
4. Make devcards for the rendering of that component in various states (for
visual regression testing) in the `visuals` source folder.
5. Make a devcard that wraps the component in an untangled-app (see examples)
to show the callback/interactions working. Include devcard documentation that
describes the use of the component. These go in the `guide` source folder.

Please contact us on the `#untangled` channel of [clojurians.slack.com](http://clojurians.slack.com) if you 
want to help.

More guidelines below:

### Contribution Standards/Guidelines

#### Write in CLJC

To support server-side rendering all code should be written in CLJC files. 

- Rendering must be pure! Don't use `js/setTimout` or other js-only things in your UI. That stuff belongs in mutations.
If your lifecycle (e.g. componentWillMount) or something needs js things, make a clj/cljs function where the clj version 
is a no-op, and call *that* from the UI.
- Untangled mutations (via `defmutation`) can be put in cljs-only blocks. They'll never be attempted on server-side code anyhow.

#### Create a Card for Visual Regression Tests

All components must have one or more devcards in the `visuals` source directory that show their various states 
statically (for visual regression testing). Use the same package structure, and name that namespace with a -cards suffix.
E.g. src/untangled.ui.calendar.cljs -> visuals/untangled.ui.calendar-cards.cljs

#### Create a Card for Live Documentation/Usage

All components must have a devcard in the `guide` source directory that documents/demonstrates
your live working component with callbacks, etc. Use MockNetwork or real server-side code for simulating full stack 
interactions (examples coming soon).

#### Naming Conventions

- Things that generate DOM should be prefixed with `ui-`, e.g. `ui-button`. This will help with naming conflicts and
helps the user understand what generates UI and what does not.
- Mutations should be written with `defmutation` so that their symbols end up in the namespace of the components.
- Mutations should be written via helper functions of `(f state-map args)` that can be composed into other people's
mutations, if necessary. The name of these helpers should be suffixed with `impl` (e.g. `close-all-impl`)
- Idents for components should use Om table names prefixed to their namespace (e.g. `:untangled.ui.menu/by-id`)
    - Make this DRY. Define a table-name symbol as ::id. One stateful component per namespace.

SEE COMMENTS IN `menu.cljc`

#### Ensure Internationalization Will Work (IN PROGRESS)

These are thoughts on how this should work...evolving.

First you should understand how Untangled does i18n:

We use GNU gettext to extract strings from the source by compiling the source to js, and using `xgettext`. So, any
calls to, say, `(tr "Hello")` turn into `tr("Hello")` in Javascript, which the predefined tools for gettext can work with
(extraction, message merging, translator tools like POEdit). If you call tr on a variable, this does not work, since the
js ends up as `tr(v)`. We have a function called `tr-unsafe` that allows you to use a variable (`tr` will intentionally
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

#### Thoughts about Implementation of Elements/Components/Layouts

Some components have no real active nature (e.g. buttons): they just have things like properties and callbacks and no need 
for an Om query. For those it seems best to just do normal React kinds of things (pass parameters in a map, and children 
via varargs).

Other components like checkboxes need to manage state. For simple ones it may make sense to let the user completely manage
the state (e.g. the boolean as to the checked state of a box). 

In more complex components, like menus, there may be some significant advantage
to making them full-on Om components. For example, a `close-all-menus` mutation is impossible to write unless the menus 
are represented in the app state.

It is common for a parent component to want to look at the state of some child component. For example, what is the current
date selected in that calendar? If there is user-usable state within your component, you might choose to make simple helper
methods for asking for that data, or you can simply let them access your component's props by keyword. The former is better
for complex components (e.g. calendar) and the latter is probably fine for simple ones. In both cases these functions
should be `(f component-props)`. E.g., they should be usable from the parent that has that component's properties locally. These
are also easy enough to use from custom mutations since the ident is supposed to be standardized and well-known for all
components (e.g. getting a component's state is just a `(get-in state-map component-ident)`).

In utilities like layout helpers: These are probably plain React components (or even just functions).

We expect standards around this to resolve rapidly, but please participate in the discussion as we progress.


#### API Standards

These are thoughts...interested in input at this early stage:

- See exploration_cards in the `guide` build.
- See menu_visuals and menus in the `visuals` build.
- Changes to appearance for stateful components should go through mutations
- Mutations should be written in an IDE-friendly way using the new 0.7.1-SNAPSHOT+ untangled-client `defmutation`.
- Lean towards having all of the UI components interact nicely with the VCR support viewer, so avoid using component
local state for stateful components except in performance hotspots (e.g. animations like panning an image might not be fast if they use 
`transact!`). 
- Many simple components will be simple stateless functions and not even React components. These are easy, in that anything
they do will be determined directly from arguments.

# Running:

There are four builds: `test`, `visuals`, `css-guide`, and `guide`. Select them via `JVM_OPTS` with `-D`

The `visuals` build is for the visual regression cards that show each possible visible state of a component, and are
(TODO) run through a browser-based image capture diff to detect visual regressions due to code and CSS changes.

The `guide` build is the development guide cards. These cards demonstrate live examples of the components and have full
markdown documentation. The hope is to evolve this to a better UI, but devcards allows for rapid development at the 
moment.

The `test` build is for untangled-specs. Those adding component that have any algorithms with complexity are encourage to
write specifications around those algorithms to help ensure correctness. Many of the components are quite simple, so
most components probably will not have specs; however, things like the forms support include a number of more interesting
behaviors that need full testing support.

The `css-guide` build is for the raw CSS with examples of the DOM/CSS rules to do raw rendering. Please note you will
need to install [npm](https://www.npmjs.org/package/npm) in order to run this task. [Learn more](README-css.md)

```
JVM_OPTS="-Dguide -Dvisuals" lein run -m clojure.main script/figwheel.clj
```

Open a browser on (port settable `:figwheel` section of `project.clj`):

- [localhost:8001](http://localhost:8001/) *(Index of the pages below, with their JVM OPT for running)*
- [localhost:8001/guide.html](http://localhost:8001/guide.html)
- [localhost:8001/css-guide.html](http://localhost:8001/css-guide.html)
- [localhost:8001/visuals.html](http://localhost:8001/visuals.html)
- [localhost:8001/test.html](http://localhost:8001/test.html)

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
