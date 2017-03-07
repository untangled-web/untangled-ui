(ns untangled.ui.layout
  (:require [om.dom :as dom]))

#?(:clj (def clj->js identity))

(defn row
  "Generate a layout row. This is a div container for a row in a 12-wide grid responsive layout.
  Rows should contain layout columns generated with the `col` function of this namespace.

  The properties are normal DOM attributes as a cljs map and can include standard React DOM properties.

  `:distribute-extra-columns` can be :between or :around, and indicates where to put unused columns.
      - :between Unused column space is even distributed between columns
          2COL _____ 2COL _____ 2COL
      - :around Unused column space is even distributed around columns
          __ 2COL __ 2COL __ 2COL __

  `:halign` can be :start, :center, or :end for positioning a single child column in that position
  `:valign` can be :top, :middle, or :bottom and will affect the vertical positioning of nested cells that do not
  share a common height.
  "
  [{:keys [distribute-extra-columns halign valign density] :as props} & children]
  {:pre [(contains? #{nil :between :around} distribute-extra-columns)
         (contains? #{nil :start :center :end} halign)
         (contains? #{nil :top :middle :bottom} valign)
         (contains? #{nil :collapse :wide :break} density)]}
  (let [className (or (:className props) "")
        classes   (cond-> className
                    :always (str " u-row")
                    distribute-extra-columns (str " u-" (name distribute-extra-columns))
                    halign (str " u-" (name halign))
                    valign (str " u-" (name valign))
                    density (str " u-row--" (name density)))
        attrs     (-> props
                    (dissoc :distribute-extra-columns :halign :valign :density)
                    (assoc :className classes)
                    clj->js)]
    (apply dom/div attrs children)))

(defn col
  "Output a div that represents a column in the 12-column responsive grid.

  NOTE: halign works on anything, valign on on rows

  "
  [{:keys [width sm-width md-width lg-width xl-width halign valign
           push sm-push md-push lg-push xl-push] :as props} & children]
  {:pre [(contains? #{nil :start :center :end} halign)
         (contains? #{nil :top :middle :bottom} valign)]}
  (let [classes (cond-> (:className props)
                  width (str " u-column--" width)
                  halign (str " u-" (name halign))
                  valign (str " u-" (name valign))
                  sm-width (str " u-column--" sm-width "@sm")
                  md-width (str " u-column--" md-width "@md")
                  lg-width (str " u-column--" lg-width "@lg")
                  xl-width (str " u-column--" xl-width "@xl")
                  push (str " u-push--" push)
                  sm-push (str " u-push--" sm-push "@sm")
                  md-push (str " u-push--" md-push "@md")
                  lg-push (str " u-push--" lg-push "@lg")
                  xl-push (str " u-push--" xl-push "@xl"))
        attrs   (-> props
                  (dissoc :width :halign :valign :sm-width :md-width :lg-width :xl-width :push :sm-push :md-push :lg-push :xl-push)
                  (assoc :className classes)
                  clj->js)]
    (apply dom/div attrs children)))

(defn legal-scales [v]
  "A set of the legal values for vertical rhythm scales used with vertical spacing/margins."
  (contains? #{nil :one :double :triple :half :third :quarter :fifth :sixth :eigth :tenth} v))

(defn ui-vertical-margin
  "Wraps children in a div that adds a margin above an element that has the global line height (or some portion or
  multiple thereof). This library vertical rhythm (components use a global line height as a basis for sizing).
  Thus, moving something so that it vertically aligns often involves fractions/multiples of that height.

  `:before` and/or `:after` can be supplied with the following values that are scales of the global line height.
  See CSS [ideas around vertical rhythm](https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly/):

  ```
  :one     The base unit (global line height)
  :double  Twice base unit
  :triple  3x base unit
  :half    1/2 the base unit
  :third   1/3 the base unit
  :quarter 1/4 the base unit
  :fifth   1/5 the base unit
  :sixth   1/6 the base unit
  :eigth   1/8 the base unit
  :tenth   1/10 the base unit
  ```
  "
  [{:keys [before after] :as props} & children]
  {:pre [(legal-scales before) (legal-scales after)]}
  (let [add-scaled-class (fn [classes base scale] (str classes " " (if (= :one scale) base (str base "--" (name scale)))))
        attrs            (cond-> props
                           :always (dissoc :before :after)
                           before (update :className add-scaled-class " u-leader" before)
                           after (update :className add-scaled-class " u-trailer" after))]
    (apply dom/div (clj->js attrs) children)))

(def when-class
  "A map from responsive keywords to a string of the CSS class combo that will produce that visibility when the viewport has that size.

  ```
  :small  - Show only on screens with width 0-48em (non-inclusive)
  :medium  - Show only on screens with width 48-62em
  :large  - Show only on screens with width 62-75em
  :extra-large  - Show only on screens with width 75-90em (NOTE this will hide on screens larger than 90em wide!)
  :small+  - Show only on screens with width (all sizes...here for completeness, never used since it is the default)
  :medium+  - Show only on screens with width 48em+
  :large+  - Show only on screens with width 62em+
  :extra-large+  - Show only on screens with width 75em+
  :medium-  - Show only on screens with width 0-60em
  :large-  - Show only on screens with width 0-75em
  :extra-large-  - Show only on screens with width 0-90em
  ```

  Can be used like this:

  ```
  (dom/div #js {:className (l/when-class :large+)} children)
  ```

  See also `rwhen` for a more readable alternative.
  "
  {:small   "u-show@sm"
   :medium  "u-show@md"
   :large   "u-show@lg"
   :xlarge  "u-show@xl"
   :small+  ""
   :medium+ "u-show@md-up"
   :large+  "u-show@lg-up"
   :xlarge+ "u-show@xl-up"
   :medium- "u-show@sm u-show@md"
   :large-  "u-show@sm u-show@md u-show@md"
   :xlarge- "u-show@sm u-show@md u-show@lg u-show@xl"})

(def when-classes (set (keys when-class)))

(defn rwhen
  "Wraps the given children with a span that will show/hide the children via responsive CSS classes.

  ```
  (l/rwhen :large+
     children)
  ```

  The allowed sizes are:

  ```
  :small  - Show only on screens with width 0-48em (non-inclusive)
  :medium  - Show only on screens with width 48-62em
  :large  - Show only on screens with width 62-75em
  :xlarge  - Show only on screens with width 75-90em (NOTE this will hide on screens larger than 90em wide!)
  :small+  - Show only on screens with width (all sizes...here for completeness, never used since it is the default)
  :medium+  - Show only on screens with width 48em+
  :large+  - Show only on screens with width 62em+
  :xlarge+  - Show only on screens with width 75em+
  :medium-  - Show only on screens with width 0-60em
  :large-  - Show only on screens with width 0-75em
  :xlarge-  - Show only on screens with width 0-90em
  ```
  "
  [size & children]
  {:pre [(contains? when-classes size)]}
  (apply dom/span #js {:className (when-class size)} children))

(def css-align-start "The CSS class string u-start for horizontal left alignment. Usable on most layout containers." "u-start")
(def css-align-center "The CSS class string u-center for horizontal center alignment. Usable on most layout containers." "u-center")
(def css-align-end "The CSS class string u-end for horizontal right alignment. Usable on most layout containers." "u-end")

