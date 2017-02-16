(ns untangled.ui.Layout--01-Basics
  (:require
    [devcards.core :as dc :refer-macros [defcard defcard-doc]]
    [om.dom :as dom]
    [untangled.ui.layout :as l]
    [untangled.client.core :as uc]))

(comment
  "TODO"
  (defn responsive-alt [& kv-pairs])

  (ui-fixed {:className "boo" :position :top-left} ...)

  )

(defcard-doc
  "# Layout

  Untangled UI includes CSS for a responsive grid that is 12-elements wide. The `layout` namespace includes a number
  of functions that can generate the various DOM elements with the correct classes in a more conside form to
  make code more readable (and potentially more portable, since the concepts are not tied to DOM or CSS directly).

  Some general notes:

  - The helper functions accept a clj(s) map as an argument. All React properties are allowed in this map.
  - The special attributes these helpers take will be translated to CSS for you.
  - The resulting set of attributes will be converted to the proper JS object and passed to React DOM elements.

  This causes some nice simplifications because you're always working with regular clojure data structures. Expressions
  using the raw CSS like:

  ```
  (dom/div #js {:className \"my-custom-class u-column--2\" :style #js {:color :red}} ...)
  ```

  instead look like:

  ```
  (l/col {:width 2 :className \"my-custom-class\" :style {:color :red}} ...)
  ```

  ")

(defcard rows
  "# Rows and Columns

  Rows are created with the `row` function. Columns are created with the `col` function. Columns have a width from
  1 to 12.

  ```
  (l/row {}
   (l/col {:width 12 :style {:backgroundColor :yellow}} \"A row\"))
  ```

  which renders:
  "
  (l/row {}
    (l/col {:width 12 :style {:backgroundColor :yellow}} "A row")))

(defcard basic-grid
  "# Basic Grid

  Thus, one can create a basic layout by putting together a few rows with columns:

  ```
  (l/row {:style {:height \"200px\"}}
    (l/col {:width 2 :style {:backgroundColor :yellow}} \"Left column\")
    (l/col {:width 10 :style {:backgroundColor :lightgray}} \"Right column\")))
  ```

  which renders as:

  "
  (l/row {:style {:height "200px"}}
    (l/col {:width 2 :style {:backgroundColor :yellow}} "Left column")
    (l/col {:width 10 :style {:backgroundColor :lightgray}} "Right column")))

(defcard grid-nesting
  "# Nesting Grids

  One can nest 12-column grids within the grid by nesting rows. This makes it possible
  to create more complex layouts:

  ```
  (l/row {:style {:height \"200px\"}}
    (l/col {:width 2 :style {:backgroundColor :yellow}} \"Left column\")
    (l/col {:width 10 :style {:backgroundColor :lightgray}}
      (l/row {}
        (l/col {:width 12 :style {:backgroundColor :lightblue}} \"Toolbar Items\"))
      (l/row {}
        (l/col {:width 12 :style {:backgroundColor :orange}}
          (dom/p nil \"Other content\")
          (dom/p nil \"Other content\")
          (dom/p nil \"Other content\")
          (dom/p nil \"Other content\")))))
  ```

  which renders as:

  "
  (l/row {:style {:height "200px"}}
    (l/col {:width 2 :style {:backgroundColor :yellow}} "Left column")
    (l/col {:width 10 :style {:backgroundColor :lightgray}}
      (l/row {}
        (l/col {:width 12 :style {:backgroundColor :lightblue}} "Toolbar Items"))
      (l/row {}
        (l/col {:width 12 :style {:backgroundColor :orange}}
          (dom/p nil "Other content")
          (dom/p nil "Other content")
          (dom/p nil "Other content")
          (dom/p nil "Other content"))))))

(defcard column-push
  "# Pushing Columns

  There are times when you'd like to skip some number of columns. The `:push` attribute on a column can be used to
  do this.

  ```
  (l/row {:style {:height \"200px\"}}
    (l/col {:width 2 :style {:backgroundColor :yellow}} \"Left column\")
    (l/col {:width 8 :push 2 :style {:backgroundColor :orange}}
      (dom/p nil \"Other content\")
      (dom/p nil \"Other content\")
      (dom/p nil \"Other content\")
      (dom/p nil \"Other content\")))
  ```

  which renders as:
  "
  (l/row {:style {:height "200px"}}
    (l/col {:width 2 :style {:backgroundColor :yellow}} "Left column")
    (l/col {:width 8 :push 2 :style {:backgroundColor :orange}}
      (dom/p nil "Other content")
      (dom/p nil "Other content")
      (dom/p nil "Other content")
      (dom/p nil "Other content"))))

(defcard consuming-unused-columns
  "# Consuming Unused Columns

  Rows can be told how to deal with unused columns with :distribute-extra-columns as :around or :between.

  ```
  (dom/div nil
    (l/row {:style {:backgroundColor :yellow}}
      (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} \"12-Column Wide\"))
    (l/row {:distribute-extra-columns :around :style {:backgroundColor :yellow}}
      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\")
      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\")
      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\"))
    (l/row {:distribute-extra-columns :between :style {:backgroundColor :yellow}}
      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\")
      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\")
      (l/col {:width 2 :style {:backgroundColor :lightblue}} \"2-Column Wide\")))
  ```

  The first row rendered below is using :around. The second is using :between.
  "
  (dom/div nil
    (l/row {:style {:backgroundColor :yellow}}
      (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} "12-Column Wide"))
    (l/row {:distribute-extra-columns :around :style {:backgroundColor :yellow}}
      (l/col {:width 2 :style {:backgroundColor :lightblue}} "2-Column Wide")
      (l/col {:width 2 :style {:backgroundColor :lightblue}} "2-Column Wide")
      (l/col {:width 2 :style {:backgroundColor :lightblue}} "2-Column Wide"))
    (l/row {:distribute-extra-columns :between :style {:backgroundColor :yellow}}
      (l/col {:width 2 :style {:backgroundColor :lightblue}} "2-Column Wide")
      (l/col {:width 2 :style {:backgroundColor :lightblue}} "2-Column Wide")
      (l/col {:width 2 :style {:backgroundColor :lightblue}} "2-Column Wide"))))

(defcard vertical-spacing
  "# Vertical Spacing

  The grid system in Untangled UI follows the principles of vertical rhythm. Most elements
  are sized to a standard grid line height. This makes it easy to do a large number
  of complex alignment things easily.

  The `ui-vertical-margin` helper wraps the children in a div that includes some
  scaled multiple of the grid line height as margin above and/or below.

  The properties of this function (a clj(s) map) allow you to include any React properties on the div
  (including additional class names with :className).

  The allowed scale factors for :before and :after  (e.g. :one, :half, etc.) are in the docstring of the function.

  So in the example below is adding padding around the middle row.

  ```
  (dom/div nil
    (l/row {:style {:backgroundColor :yellow}}
      (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} \"12-Column Wide\"))
    (l/ui-vertical-margin {:before :half :after :one}
      (l/row {:style {:backgroundColor :yellow}}
        (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} \"12-Column Wide\")))
    (l/row {:style {:backgroundColor :yellow}}
      (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} \"12-Column Wide\")))
  ```

  which renders as:
  "
  (dom/div nil
    (l/row {:style {:backgroundColor :yellow}}
      (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} "12-Column Wide"))
    (l/ui-vertical-margin {:before :half :after :one}
      (l/row {:style {:backgroundColor :yellow}}
        (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} "12-Column Wide")))
    (l/row {:style {:backgroundColor :yellow}}
      (l/col {:width 12 :halign :center :style {:backgroundColor :lightblue}} "12-Column Wide"))))

(defcard responsive-grid
  "# Responsive Grid

  When building a grid, it is common to want to define a layout where columns have a different grid width on different
  size screens, and variable amounts of push. The `col` function includes options to make those combinations possible.

  It is also sometimes necessary to cause columns to appear/disappear based on screen size, for that see `rwhen`.

  The screen size abbreviations are `sm`, `md`, `lg`, and `xl`. Those abbreviations can be used on any number of
  `width` and `push` attributes to indicate the width/push for a column on those screen sizes (see the CSS docs for
  information on what the screen sizes map to).

  So, to make a column that is 2 wide on a small screen and otherwise 1:

  ```
  (l/row {}
    (l/col {:width 1 :sm-width 2 } ...))
  ```

  TODO: Need to make iframe work to show examples...

  "
  (dom/div nil "TODO: needs iframe to demo properly"))

(defcard responsive-conditionals
  "# Responsive Conditionals

  It is very common in a responsive UI to want elements to disappear/appear based on the screen size. This can be
  accomplished with `rwhen` (responsive when). It wraps the children in a `span` with the correct CSS to cause
  the element to appear only under the condition specified.

  Legal conditions are simply predefined keywords listed in the doc string of `rwhen`. The screen size dimensions
  are detailed in the docstring of `rwhen`.

  ```
  (rwhen :large+
     (dom/div nil \"will show on viewports of large size or bigger\"))

  (rwhen :medium-
     (dom/div nil \"will show on viewports of medium size or smaller\"))
  ```


  "
  (dom/div nil "TODO: needs iframe to demo properly"))
