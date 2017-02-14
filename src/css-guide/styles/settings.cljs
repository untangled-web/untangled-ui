(ns styles.settings
  (:require [om.next :as om :refer-macros [defui]]
    ;; NOTE: This is where the interesting macros and such are at:
            [styles.util :as util
             :refer [to-cljs]
             :refer-macros [source->react defexample defarticle]]
            [om.dom :as dom]
            [clojure.string :as str]))


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
  (str "<div class='swatch' style='"(when (is-dark? color) "color: #fff;")"  background-color: " color ";'>
  <span class='swatch__name'>--" (when-not (str/blank? hue-name) (str (str/lower-case hue-name) "-") )  name "</span>
  <span class='swatch__code'>" color "</span>
  </div>"))


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
  <span class='swatch__code'>" color "</span>
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
             [:900 "#cc5000"]])

(def red [[:50 "#ffebee"]
          [:100 "#ffd3d5"]
          [:200 "#ffbbbb"]
          [:300 "#faa296"]
          [:400 "#f38773"]
          [:500 "#e96d4f"]
          [:600 "#de512d"]
          [:700 "#d03000"]
          [:800 "#b51c01"]
          [:900 "#990000"]])

(def yellow [[:50 "#fff9e8"]
             [:100 "#fff3d1"]
             [:200 "#ffeebb"]
             [:300 "#ffe49e"]
             [:400 "#ffdd84"]
             [:500 "#ffd666"]
             [:600 "#ffc838"]
             [:700 "#ffba0a"]
             [:800 "#fda704"]
             [:900 "#fa9400"]])

(def green [[:50 "#e6fff8"]
            [:100 "#b6f5e3"]
            [:200 "#8adec2"]
            [:300 "#5ac7a1"]
            [:400 "#09b081"]
            [:500 "#00996e"]
            [:600 "#008962"]
            [:700 "#007a56"]
            [:800 "#006d4d"]
            [:900 "#005f43"]])

(def grey [[:50 "#fcfcf9"]
           [:100 "#e4e3e0"]
           [:200 "#cbcbc7"]
           [:300 "#b4b4ae"]
           [:400 "#9d9c96"]
           [:500 "#86857e"]
           [:600 "#706f68"]
           [:700 "#5b5b52"]
           [:800 "#47473e"]
           [:900 "#33332a"]])

(def magenta [[:500 "#d95db7"]])

(def purple [[:a100 "#831dcb"]])

(def neutral [[:black "#000000"]
              [:white "#ffffff"]])


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

<div class='u-row'>

"

    (color-palette "Blue" blue)
    (color-palette "Orange" orange)
    (color-palette "Red" red)
    (color-palette "Yellow" yellow)
    (color-palette "Green" green)
    (color-palette "Grey" grey)
    (color-palette "Magenta" magenta)
    (color-palette "Purple" purple)
    (color-palette "" neutral)






    "
</div>

    #### Colour Theme

    These colors are intended for very specific parts of the user interface. State classes are provided for colored text in this section so you can apply appropriate emotion to your work, `e.g. <span class='is-positive'>Your file has been saved!</span>`.

    <div class='u-row'>

"

    (color-theme "Backgrounds & Borders" [[:--backgroundColor-page (get-color neutral 1)]
                                          [:--color-shadow         "rgba(51, 51, 42, .6)"]
                                          [:--color-primary        (get-color blue 9)]
                                          [:--color-secondary      (get-color orange 8)]
                                          [:--highlight-announcement (get-color blue 0)]
                                          [:--highlight-error        (get-color red 0)]
                                          [:--highlight-success      (get-color green 0)]
                                          [:--highlight-warning      (get-color yellow 0)]])



    (color-theme "Type Colors" [[:--color-page        (get-color grey 8)]
                                [:--color-placeholder (get-color grey 5)]
                                [:.is-positive        (get-color green 6)]
                                [:.is-informative     (get-color blue 9)]
                                [:.is-neutral         (get-color grey 5)]
                                [:.is-live            (get-color yellow 8)]
                                [:.is-alterable       (get-color orange 8)]
                                [:.is-negative        (get-color red 7)]])


    (color-theme "Social Media" [[:--facebook "#4c66a4"]
                                 [:--google-plus "#dd4b39"]
                                 [:--linkedin "#0077b5"]
                                 [:--pinterest "#cb2027"]
                                 [:--stumbleupon "#ff4522"]
                                 [:--tripadvisor "#629d2a"]
                                 [:--trustyou "#3498db"]
                                 [:--tumblr "#35465c"]
                                 [:--twitter "#2fc2ef"]])


    #_(color-theme "Highlights" [[:--highlight-announcement (get-color blue 0)]
                               [:--highlight-error        (get-color red 0)]
                               [:--highlight-success      (get-color green 0)]
                               [:--highlight-warning      (get-color yellow 0)]])


      "

      </div>
"

    ))


(def sections
  (vec [;; NOTE: :examples is a list of example names, rendered in order given
        {:id :settings-config :title "Config" :examples [settings-config]}
        {:id :settings-global :title "Global" :examples [settings-global]}
        {:id :settings-colour :title "Colour" :examples [settings-colour]}
        ]))
