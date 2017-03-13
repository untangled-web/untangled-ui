(ns styles.style
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react defexample defarticle defview defsnippet]]
            [om.dom :as dom]
            [untangled.icons :as icons]
            [clojure.string :as str]))

(def digit-values {"0" 0 "1" 1 "2" 2 "3" 3 "4" 4 "5" 5
                   "6" 6 "7" 7 "8" 8 "9" 9 "a" 10 "b" 11
                   "c" 12 "d" 13 "e" 14 "f" 15})


(defn to-decimal
  "Convert a hex string to a decimal integer (does not check for overflow)"
  [hex-string]
  (let [digits    (reverse (str/lower-case hex-string))
        final-acc (reduce (fn [{:keys [multiplier value]} digit]
                            {:multiplier (* 16 multiplier)
                             :value      (+ value (* multiplier (get digit-values digit 0)))}) {:multiplier 1 :value 0} digits)]
    (:value final-acc)))


(defn to-rgb
  "Convert a hex string to a map of :r :g :b integers"
  [hex-string]
  (let [parts           (partition-all 2 (str/replace hex-string #"#" "" ))
        part-to-decimal (fn [quad] (to-decimal (str/join "" quad)))
        quads           (zipmap [:r :g :b] (map part-to-decimal parts))]
    quads))


(defn intensity
  "Give an intensity as an integer for a given hex string that can optionally
  start with #."
  [hex-string]
  (let [{:keys [r g b]} (to-rgb hex-string)]
    (js/Math.round (/ (+
                        (* 299 r)
                        (* 587 g)
                        (* 114 b))
                     1000))))


(defn is-dark?
  "Check if the provided hex string is too dark to read text on."
  [color] (< (intensity color) 180))


(defn color-block [color name hue-name]
  (let [color-var-name (str "--" (when-not (str/blank? hue-name) (str (str/lower-case hue-name) "-")) name)]
    (str "<div class='swatch' style='" (when (is-dark? color) "color: #fff;") "  background-color: var("color-var-name");'>
  <span class='swatch__name'>"color-var-name"</span>
  </div>")))


(defn color-palette [hue-name color]
  (str "<div class='ui-palette u-column--12 u-column--4@md'>
  <h6>" (if (str/blank? hue-name) "Neutral" hue-name)"</h6>"
    (str/join "\n" (map (fn [[k v]]
                          (color-block v (name k) hue-name))
                     color))
    "</div>"))


(defn color-theme-block [color name hue-name]
  (str "<div class='swatch' style='"(when (is-dark? color) "color: #fff;")"  background-color: " color ";'>
  <span class='swatch__name'>" name "</span>
  </div>"))


(defn color-theme [theme-name color]
  (str "<div class='ui-palette ui-palette--theme u-column--12 u-column--4@md'>
  <h6>" theme-name"</h6>"
    (str/join "\n" (map (fn [[k v]]
                          (color-theme-block v (name k) theme-name))
                     color))
    "</div>"))

(defn get-color [hue weight]
  (val (nth hue weight)))


(def red [[:50 "#f6e6df"]
          [:100 "#fbc7b2"]
          [:200 "#fba986"]
          [:300 "#f7895b"]
          [:400 "#ef6830"]
          [:500 "#dd4907"]
          [:600 "#bb3d0a"]
          [:700 "#99320c"]
          [:800 "#78260c"]
          [:900 "#5a1b0a"]])

(def green [[:50  "#def6f3"]
            [:100 "#b6e7de"]
            [:200 "#94d7ca"]
            [:300 "#75c6b7"]
            [:400 "#5ab4a3"]
            [:500 "#42a291"]
            [:600 "#2e9080"]
            [:700 "#1e7f6f"]
            [:800 "#106c5e"]
            [:900 "#0a5a4e"]])

(def grey [[:50 "#f9f9f9"]
           [:100 "#dfdfdf"]
           [:200 "#c6c6c6"]
           [:300 "#aeaeae"]
           [:400 "#969696"]
           [:500 "#808080"]
           [:600 "#696969"]
           [:700 "#555555"]
           [:800 "#3f3f3f"]
           [:900 "#2c2c2c"]])

(def blue [[:50  "#eaecf8"]
           [:100 "#d2d4f0"]
           [:200 "#b9bce7"]
           [:300 "#a2a4dc"]
           [:400 "#8b8ed0"]
           [:500 "#7477c3"]
           [:600 "#5e63b4"]
           [:700 "#474ea4"]
           [:800 "#303a93"]
           [:900 "#152681"]])

(def neutral [[:black "#000000"]
              [:white "#ffffff"]])


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF EXAMPLES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defarticle settings-colour
  (str "# Colour

#### Colour Palette

This collection of CSS colors are intended to serve the interface of all our product applications and all the
components you can see in this document.

To make your own color palettes, it is recommended to start with 1-3 colors that work well together and use their HEX
values with the [Chroma.js Color Scale Helper](https://gka.github.io/palettes/#colors=lightyellow,orange,deeppink,darkred|steps=10|bez=1|coL=1)
so that you get 10 HEX values that are evenly distributed into a color scale.

##### Example Usage

```css
.c-button {
  background-color: var(--blue-200);
  color: var(--white);
}
```

<div class='u-row'>

"

    (color-palette "Green" green)
    (color-palette "Blue" blue)
    (color-palette "Red" red)
    (color-palette "Grey" grey)
    (color-palette "" neutral)






    "
</div>

    #### Colour Theme

    These colors are intended for very specific parts of the user interface. State classes are provided for colored
    text in this section so you can apply appropriate emotion to your work, `e.g. <span class='is-positive'>Your file
    has been saved!</span>`.

    <div class='u-row'>

"

    (color-theme "Backgrounds & Borders" [[:--color-page             (get-color neutral 1)]
                                          [:--color-page-dark        (get-color grey 9)]
                                          [:--color-primary          (get-color green 5)]
                                          [:--color-primary-dark     (get-color green 7)]
                                          [:--color-primary-highlight (get-color green 1)]
                                          [:--color-primary-contrast (get-color neutral 1)]
                                          [:--color-accent           (get-color blue 5)]
                                          [:--color-accent-dark      (get-color blue 7)]
                                          [:--color-accent-highlight (get-color blue 1)]
                                          [:--color-accent-contrast  (get-color neutral 1)]
                                          [:--color-neutral          (get-color grey 4)]
                                          [:--color-neutral-highlight (get-color grey 1)]
                                          [:--borderColor            (get-color grey 3)]
                                          [:--borderColor-inactive   (get-color grey 2)]])



    (color-theme "Type Colors" [[:--color-text        (get-color grey 8)]
                                [:--color-placeholder (get-color grey 5)]
                                [:--color-link        (get-color green 5)]
                                [:--color-error       (get-color red 4)]
                                [:--color-invalid     (get-color red 2)]])


    (color-theme "Social Media" [[:--facebook "#4c66a4"]
                                 [:--google-plus "#dd4b39"]
                                 [:--linkedin "#0077b5"]
                                 [:--pinterest "#cb2027"]
                                 [:--stumbleupon "#ff4522"]
                                 [:--tripadvisor "#629d2a"]
                                 [:--trustyou "#3498db"]
                                 [:--tumblr "#35465c"]
                                 [:--twitter "#2fc2ef"]])


    "

    </div>
"

    ))



(def docs-media "Responsive breakpoints for styling for different devices and groups of devices. We divide devices up
by `14em` units starting at `34em`. Using the `em` unit has been a proven browser compatible method of rendering media queries consistently.

                    #### Flexible Breakpoints

                    Target devices of a certain minimum width and everything larger than. If your writing mobile-first,
                    then you would need to specify your desktop styles in a `@media (--lg-up)` breakpoint.

                    ```css
                    /* For tiny devices you don't need to specify a media query. */

                    /* Small devices (phones, 34em and up) */
                    @media (--sm-up) { ... }

                    /* Medium devices (tablets, 48em and up) */
                    @media (--md-up) { ... }

                    /* Large devices (computers, 62em and up) */
                    @media (--lg-up) { ... }

                    /* X-Large devices (large computers, 75em and up) */
                    @media (--xl-up) { ... }
                    ```

                    #### Fixed Breakpoints

                    Target just one device breakpoint at a time. These should be used sparingly for fine tuned adjustments.

                    ```css
                    /* Small devices (phones, 0em to 48em) */
                    @media (--sm) { ... }

                    /* Medium devices (tablets, 48em to 62em) */
                    @media (--md) { ... }

                    /* Large devices (computers, 62em to 75em) */
                    @media (--lg) { ... }

                    /* X-Large devices (large computers, 75em to 90em) */
                    @media (--xl) { ... }
                    ```

                    #### Orientation Breakpoints

                    Target devices that have been rotated into a particular screen orientation.

                    ```css
                    /* Devices in landscape orientation */
                    @media (--landscape) { ... }

                    /* Devices in portrait orientation */
                    @media (--portrait) { ... }
                    ```

                    #### Media Type Breakpoints

                    Target special media types including:

                    `all | aural | braille | handheld | print | projection | screen | tty | tv | embossed`

                    ```css
                    /* Screens */
                    @media only screen { ... }

                    /* Printers */
                    @media print { ... }
                    ```

                    More on this over at Mozilla Developer Network's [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

                    #### Classnames

                    You will also notice some classes are appended with `@sm`, `@md`, `@lg`, and `@print` for the same purposes.

                    See [syntax](#syntax) and [responsive-suffixes](#responsive-suffixes) sections for more info.
                    ")

;; Positioning Examples

(defsnippet positioning-example-fixed
  (dom/div #js {}
    (dom/div #js {:className "u-fixed--top"})
    (dom/div #js {:className "u-fixed--top-center"})
    (dom/div #js {:className "u-fixed--top-right"})
    (dom/div #js {:className "u-fixed--top-left"})
    (dom/div #js {:className "u-fixed--bottom"})
    (dom/div #js {:className "u-fixed--bottom-right"})
    (dom/div #js {:className "u-fixed--bottom-left"})
    (dom/div #js {:className "u-fixed--middle"})
    (dom/div #js {:className "u-fixed--middle-center"})))

(defsnippet positioning-example-absolute
  (dom/div #js {}
    (dom/div #js {:className "u-absolute--top"})
    (dom/div #js {:className "u-absolute--top-right"})
    (dom/div #js {:className "u-absolute--top-left"})
    (dom/div #js {:className "u-absolute--bottom"})
    (dom/div #js {:className "u-absolute--bottom-right"})
    (dom/div #js {:className "u-absolute--bottom-left"})
    (dom/div #js {:className "u-absolute--middle"})
    (dom/div #js {:className "u-absolute--middle-center"})))

(def docs-positioning-position
  "# Positioning

  You can directionally express which position you want to specify using these conventions:

  `bottom | bottom-left | bottom-right | middle | top | top-left | top-right`

  ``` css
  /* position [ attachment, type ] */
  @apply --position-top;
  position: fixed;
  ```")

(defexample positioning-example-rotate
  "# Rotate"
  (let [example-class-modifier (if (om/get-state this :rotate-visible) "" " u-hide")]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this update :rotate-visible not)} "Show/Hide Examples")
      (dom/div #js {:className example-class-modifier}
        (dom/div #js {:className "u-rotate--cw"} "Rotate right 90 degrees")
        (dom/div #js {:className "u-rotate--ccw"} "Rotate left -90 degrees")))))


;; Syntax

(defarticle syntax
  "# Syntax

  Synopsis - Give developers more knowledge about how the classes behave in a non-relative sense: BEM + ITCSS = BEMIT\n\n

  ###### Sources

  [More Transparent UI Coce with Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)

  [BEMIT: Taking the BEM Naming Convention a Step Further](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

  #### Anatomy

  ```css
  .namespace-block__element--modifier [backslash] @media { }
  ```
  TODO Clojure thinks the backslash is an escaping character.

  #### Namespaces

  ```
  /* Object */
  .o-object-name[<element>/<modifier>] { }

  /* Component */
  .c-component-name[<element>/<modifier>] { }

 /* Utility */
 .u-utility-name {}

 /* Theme */
 .t-theme-name {}

 /* Scope */
 .s-scope-name {}

 /* State */
 .[is/has]-state {}

 /* Hack */
 ._<namespace>hack-name {}

 /* Javascript */
 .js-component-name {}

 /* Quality Assurance */
 .qa-node-name {}
  ```

  #### Responsive Suffixes

  Breakpoints

  ```css
  .o-object-name [backslash] @sm { }

  .o-object-name [backslash] @md { }

  .o-object-name [backslash] @lg { }
  ```

  Media type

  ```css
  .u-utility-name [backslash] @print { }
  ```

  #### BEMIT Healthcheck

  Enable a new layer of outlines around everything on the DOM that describes and identifies different types of selectors.

  ```html
  <html class='s-healthcheck'>
  ```")

;; Typography Examples

(def typography-header
  "# Typography

  ##### Source Sans Pro is the font family this project uses by default")

(defview typography-font-scale
  "#### Font Scale"
  (dom/div #js {}
    (dom/div #js {:className "u-font-size--xlarge"} "X-Large (75.2px)")
    (dom/br #js {})
    (dom/code #js {} ".u-font-size--xlarge")
    (dom/p #js {})
    (dom/div #js {:className "u-font-size--large"} "Large (48px)")
    (dom/br #js {})
    (dom/code #js {} ".u-font-size--large")
    (dom/p #js {})
    (dom/div #js {:className "u-font-size--semi-large"} "Semi-Large (40px)")
    (dom/br #js {})
    (dom/code #js {} ".u-font-size--semi-large")
    (dom/p #js {})
    (dom/div #js {:className "u-font-size--medium"} "Medium (32px)")
    (dom/br #js {})
    (dom/code #js {} ".u-font-size--medium")
    (dom/p #js {})
    (dom/div #js {:className "u-font-size--semi-medium"} "Semi-Medium (24px)")
    (dom/br #js {})
    (dom/code #js {} ".u-font-size--semi-medium")
    (dom/p #js {})
    (dom/div #js {:className "u-font-size--normal-plus"} "Normal Plus (20px)")
    (dom/br #js {})
    (dom/code #js {} ".u-font-size--normal-plus")
    (dom/p #js {})
    (dom/div #js {:className "u-font-size--normal"} "Normal (18px)")
    (dom/br #js {})
    (dom/code #js {} ".u-font-size--normal")
    (dom/p #js {})
    (dom/div #js {:className "u-font-size--semi-normal"} "Semi-Normal (16px)")
    (dom/br #js {})
    (dom/code #js {} ".u-font-size--semi-normal")
    (dom/p #js {})
    (dom/div #js {:className "u-font-size-small"} "Small (14px)")
    (dom/br #js {})
    (dom/code #js {} ".u-font-size--small")
    (dom/p #js {})
    (dom/div #js {:className "u-font-size--tiny"} "Tiny (12px)")
    (dom/br #js {})
    (dom/code #js {} ".u-font-size--tiny")))

(defexample typography-no-bullet
  "#### No Bullet

  You can remove your list bullet from any `<li>` element."
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column u-push--1"}
      (dom/h1 #js {} "Before")
      (dom/ul #js {:className "is-negative"}
        (dom/li #js {} "Bullet")
        (dom/li #js {} "Bullet")
        (dom/li #js {} "Bullet")))
    (dom/div #js {:className "u-column"}
      (dom/h1 #js {} "After")
      (dom/ul #js {:className "is-positive"}
        (dom/li #js {} "Bullet")
        (dom/li #js {} "Bullet")
        (dom/li #js {:className "u-no-bullet"} "No Bullet")))))

(defexample typography-no-bullets
  "#### No Bullets

  Display a list without bullets in any `<ul>` or `<ol>` element."
  (dom/div #js {}
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column u-push--1"}
        (dom/h1 #js {} "Before")
        (dom/ul #js {:className "is-negative"}
          (dom/li #js {} "Bullet")
          (dom/li #js {} "Bullet")
          (dom/li #js {} "Bullet")))
      (dom/div #js {:className "u-column"}
        (dom/h1 #js {} "After")
        (dom/ul #js {:className "u-no-bullets is-positive"}
          (dom/li #js {} "No Bullet")
          (dom/li #js {} "No Bullet")
          (dom/li #js {} "No Bullet"))))))

(defexample typography-ellipsis
  "#### Ellipsis"
  (dom/div #js {:style #js {:width "300px"}}
    (dom/h1 #js {} "Before")
    (dom/p #js {:className "is-negative"}
      "This is a very long string of text that will get cut off by exactly three dots forming an ellipsis character to
      truncate this text.")
    (dom/h1 #js {} "After")
    (dom/p #js {:className "u-ellipsis is-positive"}
      "This is a very long string of text that will get cut off by exactly three dots forming an ellipsis character to
      truncate this text.")))

(defexample typography-break-word
  "#### Break Word"
  (dom/div #js {:style #js {:width "300px"}}
    (dom/h1 #js {} "Before")
    (dom/p #js {:className "is-negative"} "SupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshious")
    (dom/h1 #js {} "After")
    (dom/p #js {:className "u-break-word is-positive"} "SupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshious")))

(defarticle docs-typography-customize
  "#### Customize

  ``` css
  --fontFamily--sans: 'Source Sans Pro', sans-serif;
  --fontFamily--monospaced: Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans
  Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", Monaco,
  \"Courier New\", Courier, monospace;
  --fontFamily-page: var(--fontFamily--sans);
  --fontSize--tiny: .75rem;
  --fontSize--small: .875rem;
  --fontSize--semiNormal: 1rem;
  --fontSize--normal: 1.125rem;
  --fontSize--normalPlus: 1.25rem;
  --fontSize--semiMedium: 1.5rem;
  --fontSize--medium: 2rem;
  --fontSize--semiLarge: 2.5rem;
  --fontSize--large: 3rem;
  --fontSize--xlarge: 4.7rem;
  --fontSize-page: 100%;
  --fontSize-heading: var(--fontSize--normalPlus);
  --fontWeight-page: 400;
  --fontWeight-page--bold: 800;
  --lineHeight-page: 1;
  --lineHeight-paragraph: 1.4;
  --lineHeight-heading: 1.3;
  ```")

;; Visibility Examples

(defexample visibility-show
  "### Show

  This set of classes let you expose any element to the desired device(s). Just add one of the following classes and
  you will see your element on it's respective device."
  (dom/div #js {}
    (dom/div #js {} "+ Shown All The Time")
    (dom/div #js {:className "u-show@sm"} "+ Shown for Small Only")
    (dom/div #js {:className "u-show@md"} "+ Shown for Medium Only")
    (dom/div #js {:className "u-show@md-up"} "+ Shown for Medium Up")
    (dom/div #js {:className "u-show@lg"} "+ Shown for Large Only")
    (dom/div #js {:className "u-show@lg-up"} "+ Shown for Large Up")
    (dom/div #js {:className "u-show@landscape"} "+ Shown for Landscape")
    (dom/div #js {:className "u-show@portrait"} "+ Shown for Portrait")
    (dom/div #js {:className "u-show@reader"} "+ Read by Screen Readers but Visually Hidden")))

(defexample visibility-hide
  "### Hide

  Use these special classes to hide an element from any device as follows:"
  (dom/div #js {}
    (dom/div #js {:hidden ""} "- Hidden All The Time via Native Attribute")
    (dom/div #js {:className "u-hide"} "- Hidden All The Time")
    (dom/div #js {:className "u-hide@sm"} "- Hidden for Small Only")
    (dom/div #js {:className "u-hide@md"} "- Hidden for Medium Only")
    (dom/div #js {:className "u-hide@md-up"} "- Hidden for Medium Up")
    (dom/div #js {:className "u-hide@lg"} "- Hidden for Large Only")
    (dom/div #js {:className "u-hide@lg-up"} "- Hidden for Large Up")
    (dom/div #js {:className "u-hide@landscape"} "- Hidden for Landscape")
    (dom/div #js {:className "u-hide@portrait"} "- Hidden for Portrait")
    (dom/div #js {:aria-hidden "true"} "- Not read by Screen Readers and visually shown")))

(defexample visibility-fade
  "### Fade

  To show smoother interactions we can utilize these fade classes and mixins.

  This example shows how you can utilize the `.u-fade-[in/out]` classes to toggle visibility with a smooth transition."
  (dom/div #js {}
    (dom/button #js {:className "c-button c-button--large js-fade-control"} "Fade toggle")
    (dom/span #js {:className "c-icon c-icon--xlarge is-positive u-fade-out js-fade-example"}
      (icons/icon :supervisor_account))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF SECTIONS (within a feature set...e.g. components)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; NOTE: This is where you add the sections for index

(def sections
  (vec (sort-by :title [; NOTE: :examples is a list of example names, rendered in order given
                        {:id :settings-colour :title "Colour" :examples [settings-colour]}
                        {:id       :media
                         :title    "Media"
                         :documentation
                                   docs-media
                         :examples []}
                        {:id       :positioning
                         :title    "Positioning"
                         :documentation docs-positioning-position
                         :examples [positioning-example-fixed positioning-example-absolute]}
                        {:id       :positioning3
                         :title    "Rotate"
                         :examples [positioning-example-rotate]}
                        {:id       :syntax
                         :title    "Syntax"
                         :examples [syntax]}
                        {:id       :typography
                         :title    "Typography"
                         :documentation typography-header
                         :examples [typography-font-scale typography-no-bullet typography-no-bullets
                                    typography-ellipsis typography-break-word  docs-typography-customize]}
                        {:id       :visibility
                         :title    "Visibility"
                         :documentation
                                   "# Visibility

                                   Use simple utilities to hide or show elements across any span of devices"
                         :examples [visibility-show visibility-hide visibility-fade]}
                        ])))

