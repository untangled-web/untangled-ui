(ns styles.settings
  (:require [om.next :as om :refer-macros [defui]]
    ;; NOTE: This is where the interesting macros and such are at:
            [styles.util :as util
             :refer [to-cljs]
             :refer-macros [source->react defexample defarticle]]
            [om.dom :as dom]
            [clojure.string :as str]
            [thi.ng.color.core :as col]))


(defarticle settings-config
  "# Config

  We provide a few custom properties to configure your project.

  ## Environment

  Set this to either `dev` or `prod` to compile for specific environment needs

  ```css
  --env: dev;
  ```

  ## Healthcheck

  This draws borders around elements of different types on your design so you can see what your selector health is looking like, visually.

  ```css
  --healthcheck: false;
  ```

  ## Debug

  This is a boolean property that lets you debug your code.

  ```css
  --debug: false;
  ```
  "
  )


(defarticle settings-global
  "# Global
  This set of custom properties are global to your project, so you can make 'broad stoke' changes.

  ```css
  /* Typographical styles and baseline grid */
  --global-font-size: 1rem;
  --global-line-height: 32px;

  /* Standardized treatments */
  --global-duration: .1s;
  --global-margin: 8px;
  --global-rounded: 4px;
  --global-z-index: 100;
  ```

  #### BEMIT Healthcheck

  Enable a new layer of outlines around everything on the DOM that describes and identifies different types of selectors.

  ```html
  <html class='s-healthcheck'>
  ```


  With this, we can write styles with built-in assertions that point out certain elements that lack required a11y aria properties.

  ```css
  .c-input:not([aria-label]) {
    @apply --assert-selector;
  }
  ```")

(def blue [[:50 "#f0faff"]
           [:100 "#cbdfee"]
           [:200 "#a6c6dd"]
           [:300 "#81adcc"]
           [:400 "#5795bb"]
           [:500 "#1c7dab"]
           [:600 "#146590"]
           [:700 "#0d4d76"]
           [:800 "#05375c"]
           [:900 "#0d2c54"]])


(def orange [[:50 "#fff3e0"]
             [:100 "#ffe5c8"]
             [:200 "#ffd5af"]
             [:300 "#ffc595"]
             [:400 "#ffb67c"]
             [:500 "#fea661"]
             [:600 "#fa9748"]
             [:700 "#f5872c"]
             [:800 "#f07700"]
             [:900 "#cc5000"]
             ])

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

(defn color-block [color name]
  (str "<div class='swatch' style='"(when (is-dark? color) "color: #fff;")"  background-color: " color ";'>
  <span class='swatch__name'>--blue-" name "</span>
  <span class='swatch__code'>" color "</span>
  </div>"))

(defn color-palette [color] :or [color blue]
  (str/join "\n" (map (fn [[k v]]
                        (color-block v (name k)))
                   color)))

(defarticle settings-colour
  (str "# Colour

#### Colour Palette

This collection of CSS colors are intended to serve the interface of all our product applications and all the components you can see in this document.

##### Example Usage

```css
.c-button {
  background-color: var(--blue-200);
  color: var(--white);
}
```


##### Blue
"
    (color-palette blue)

    "

    ##### Orange
    "

    (color-palette orange)

    "
    ##### Red

    ```example:color
    @color: #ffebee @name: --red-50
    @color: #ffd3d5 @name: --red-100
    @color: #fbb    @name: --red-200
    @color: #faa296 @name: --red-300
    @color: #f38773 @name: --red-400
    @color: #e96d4f @name: --red-500
    @color: #de512d @name: --red-600
    @color: #d03000 @name: --red-700
    @color: #b51c01 @name: --red-800
    @color: #900    @name: --red-900
    ```

    ##### Yellow

    ```example:color
    @color: #fff9e8 @name: --yellow-50
    @color: #fff3d1 @name: --yellow-100
    @color: #feb    @name: --yellow-200
    @color: #ffe49e @name: --yellow-300
    @color: #ffdd84 @name: --yellow-400
    @color: #ffd666 @name: --yellow-500
    @color: #ffc838 @name: --yellow-600
    @color: #ffba0a @name: --yellow-700
    @color: #fda704 @name: --yellow-800
    @color: #fa9400 @name: --yellow-900
    ```

    ##### Green

    ```example:color
    @color: #e6fff8 @name: --green-50
    @color: #b6f5e3 @name: --green-100
    @color: #8adec2 @name: --green-200
    @color: #5ac7a1 @name: --green-300
    @color: #09b081 @name: --green-400
    @color: #00996e @name: --green-500
    @color: #008962 @name: --green-600
    @color: #007a56 @name: --green-700
    @color: #006d4d @name: --green-800
    @color: #005f43 @name: --green-900
    ```

    ##### Other

    ```example:color
    @color: #d95db7 @name: --magenta-500
    @color: #831dcb @name: --purple-a100
    ```

    ##### Gray

    ```example:color
    @color: #fcfcf9 @name: --grey-50
    @color: #e4e3e0 @name: --grey-100
    @color: #cbcbc7 @name: --grey-200
    @color: #b4b4ae @name: --grey-300
    @color: #9d9c96 @name: --grey-400
    @color: #86857e @name: --grey-500
    @color: #706f68 @name: --grey-600
    @color: #5b5b52 @name: --grey-700
    @color: #47473e @name: --grey-800
    @color: #33332a @name: --grey-900
    ```

    ```example:color
    @color: #000 @name: --black
    @color: #fff @name: --white
    ```

    #### Colour Theme

    These colors are intended for very specific parts of the user interface.

    ##### Type Color

    State classes are provided for colored text in this section so you can apply appropriate emotion to your work, `e.g. <span class='is-positive'>Your file has been saved!</span>`.

    ```example:color
    @color: #33332a @name: --color-page
    @color: #ccccc2 @name: --color-placeholder
    @color: #00996e @name: .is-positive
    @color: #1c7dab @name: .is-informative
    @color: #77776d @name: .is-neutral
    @color: #eeb111 @name: .is-live
    @color: #cc5000 @name: .is-alterable
    @color: #d03000 @name: .is-negative
    ```
    ##### Backgrounds & Borders

    ```example:color
    @color: #fcfcf9           @name: --backgroundColor-page
    @color: rgba(51,51,42,.6) @name: --color-shadow
    @color: #0d2c54           @name: --color-primary
    @color: #f07700           @name: --color-secondary
    ```

    ##### Highlights

    ```example:color
    @color: #f0faff @name: --highlight-announcement
    @color: #fbb    @name: --highlight-error
    @color: #b6f5e3 @name: --highlight-success
    @color: #feb    @name: --highlight-warning
    ```

    ##### Social Media

    ```example:color
    @color: #4c66a4 @name: --facebook
    @color: #dd4b39 @name: --google-plus
    @color: #0077b5 @name: --linkedin
    @color: #cb2027 @name: --pinterest
    @color: #ff4522 @name: --stumbleupon
    @color: #629d2a @name: --tripadvisor
    @color: #3498db @name: --trustyou
    @color: #35465c @name: --tumblr
    @color: #2fc2ef @name: --twitter
    ```"))


(def sections
  (vec [;; NOTE: :examples is a list of example names, rendered in order given
        {:id :settings-config :title "Config" :examples [settings-config]}
        {:id :settings-global :title "Global" :examples [settings-global]}
        {:id :settings-colour :title "Colour" :examples [settings-colour]}
        ]))
