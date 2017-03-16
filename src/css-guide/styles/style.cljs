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
    (str "<div class='swatch' style='" (if (is-dark? color) "color: #fff;" "color: #111;") "  background-color: var("color-var-name");'>
  <span class='swatch__name'>"color-var-name"</span>
  <span class='swatch__code'>"color"</span>
  </div>")))


(defn color-palette [hue-name color]
  (str "<div class='ui-palette u-column--12 u-column--4@md'>
  <h6>" (if (str/blank? hue-name) "Neutral" hue-name)"</h6>"
    (str/join "\n" (map (fn [[k v]]
                          (color-block v (name k) hue-name))
                     color))
    "</div>"))


(defn color-theme-block [color name hue-name & {:keys [color-value]}]
  (str "<div class='swatch' style='"(if (is-dark? color) "color: #fff;" "color: #111;")"  background-color: " color ";'>
  <span class='swatch__name'>" name "</span>
  <span class='swatch__code'>" color-value "</span>
  </div>"))


(defn color-theme [theme-name color]
  (str "<div class='ui-palette ui-palette--theme u-column--12 u-column--4@md'>
  <h6>" theme-name"</h6>"
    (str/join "\n" (map (fn [[k v c]]
                          (color-theme-block v (name k) theme-name :color-value (if c c v)))
                     color))
    "</div>"))

(defn get-color [hue weight]
  (val (nth hue weight)))

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

(def neutral [[:black "#111111"]
              [:white "#ffffff"]])


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF EXAMPLES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defarticle settings-colour
  (str "# Colour

#### Colour Palette

This collection of CSS colors are intended to serve the interface of all our product applications and all the
components you can see in this document.


#### Create your own palette

To make your own color palettes, it is recommended to start with 1-3 colors that work well together and use their HEX
values with the [Chroma.js Color Scale Helper](https://gka.github.io/palettes/#colors=lightyellow,orange,deeppink,darkred|steps=10|bez=1|coL=1)
so that you get 10 HEX values that are evenly distributed into a color scale.

Additionally you can override the default `--green`, `--blue`, `--red`, `--grey`, and/or neutral palettes included with your own colours.

```css
:root {
  --green-100: green;
  ...
}
```

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

    These colors are intended for very specific parts of the user interface.

    <div class='u-row'>

"

    (color-theme "Backgrounds & Borders" [[:--color-page             (get-color neutral 1) "--white"]
                                          [:--color-page-dark        (get-color grey 9) "--grey-900"]
                                          [:--color-primary          (get-color green 4) "--green"]
                                          [:--color-primary-dark     (get-color green 7) "--green-700"]
                                          [:--color-primary-highlight (get-color green 1) "--green-100"]
                                          [:--color-primary-contrast (get-color neutral 1) "--white"]
                                          [:--color-accent           (get-color blue 4) "--blue"]
                                          [:--color-accent-dark      (get-color blue 7) "--blue-700"]
                                          [:--color-accent-highlight (get-color blue 1) "--blue-100"]
                                          [:--color-accent-contrast  (get-color neutral 1) "--white"]
                                          [:--color-neutral          (get-color grey 4) "--grey"]
                                          [:--color-neutral-dark     (get-color grey 7) "--grey-700"]
                                          [:--color-neutral-highlight (get-color grey 1) "--grey-100"]
                                          [:--color-neutral-contrast  (get-color neutral 1) "--white"]
                                          [:--borderColor            (get-color grey 1) "--grey-100"]
                                          [:--borderColor-inactive   (get-color grey 0) "--grey-50"]])



    (color-theme "Type Colors" [[:--color-text        (get-color grey 8) "--grey-800"]
                                [:--color-placeholder (get-color grey 5) "--grey"]
                                [:--color-link        (get-color green 5) "--green"]
                                [:--color-error       (get-color red 4) "--red-400"]
                                [:--color-invalid     (get-color red 2) "--red-200"]])


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

(defarticle docs-colour-customize
  "#### Customize

  Use these CSS custom properties to customize the colours of your app.

  ```css
  --color-page: var(--white);
  --color-page-dark: var(--grey-900);
  --color-primary: var(--green-500);
  --color-primary-dark: var(--green-700);
  --color-primary-highlight: var(--green-100);
  --color-primary-contrast: var(--white);
  --color-accent: var(--blue-500);
  --color-accent-dark: var(--blue-700);
  --color-accent-highlight: var(--blue-100);
  --color-accent-contrast: var(--white);
  --color-neutral: var(--grey-400);
  --color-neutral-highlight: var(--grey-100);
  --borderColor: var(--grey-100);
  --borderColor-inactive: var(--grey-50);


  /* Type and Globals */

  --color-text: var(--grey-800);
  --color-placeholder: var(--grey-500);
  --color-link: var(--color-primary);
  --color-error: var(--red-400);
  --color-invalid: var(--red-200);


  /* Avatar */
  --color-avatar: var(--grey-200);
  --color-avatar--secondary: color(var(--grey-900) a(60%));
  --color-avatar-alt--primary: var(--color-primary);
  --color-avatar-alt--accent: var(--color-accent);
  --color-avatar-alt--secondary: var(--color-primary-contrast);


  /* Backdrop */
  --color-backdrop: color(var(--black) a(60%));
  --color-backdrop--inverted: color(var(--white) a(60%));


  /* Badge */
  --color-badge--primary: var(--grey-400);
  --color-badge--secondary: var(--white);
  --color-badge-alt--primary: var(--color-primary);
  --color-badge-accent--primary: var(--color-accent);


  /* Button */
  --color-button--primary: color(var(--grey-500) a(20%));
  --color-button--secondary: var(--grey-900);
  --color-button--hover: var(--color-button--primary);
  --color-button--active: color(var(--grey-500) a(30%));
  --color-button--focus: color(var(--black) a(6%));

  /* Primary buttons */
  --color-button-alt--primary: var(--color-primary);
  --color-button-alt--secondary: var(--color-primary-contrast);
  --color-button-alt--accent: var(--color-accent);
  --color-button-alt--hover: var(--color-primary-dark);
  --color-button-alt--active: var(--color-primary-dark);
  --color-button-alt--focus: var(--white);

  /* Accent buttons */
  --color-button-accent--primary: var(--color-accent);
  --color-button-accent--secondary: var(--color-accent-contrast);
  --color-button-accent--hover: var(--color-accent-dark);
  --color-button-accent--active: var(--color-accent-dark);
  --color-button-accent--focus: var(--white);

  /* Dark theme buttons */
  --color-button-dark--primary: color(var(--grey-500) a(18%));
  --color-button-dark--secondary: var(--color-primary-contrast);
  --color-button-dark--hover: color(var(--grey-800) a(18%));
  --color-button-dark--active: color(var(--grey-600) a(18%));
  --color-button-dark--focus: color(var(--black) a(10%));

  /* Disabled buttons */
  --color-button-disabled--primary: color(var(--black) a(12%));
  --color-button-disabled--secondary: color(var(--black) a(26%));
  --color-button-disabled--dark: color(var(--white) a(30%));


  /* Button groups */
  --color-button-group: var(--grey-50);


  /* Calendar */
  --color-calendar: var(--white);
  --color-calendar-hover: var(--grey-50);
  --color-calendar-selected: var(--color-primary-highlight);


  /* Card */
  --color-card--primary: var(--white);
  --color-card-dark--primary: var(--grey-800);
  --color-card-print: var(--black);
  --color-card__title--secondary: currentColor;

  --color-card-alt--primary: var(--color-primary);
  --color-card-alt--secondary: var(--color-primary-contrast);
  --color-card-accent--primary: var(--color-accent);
  --color-card-accent--secondary: var(--color-accent-contrast);


  /* Control */
  --color-control-border--primary: var(--grey-400);
  --color-control-border--secondary: var(--white);
  --color-control--checked: var(--color-primary);
  --color-control--unchecked: var(--grey-500);
  --color-control--disabled: var(--grey-300);
  /* Radio */
  --color-radio--primary: var(--color-control-border--primary);
  --color-radio--secondary: var(--color-control-border--secondary);
  --color-radio--secondary--checked: var(--color-control-border--secondary);
  --color-radio--checked: var(--color-control--checked);
  --color-radio--disabled: var(--color-control--disabled);
  /* Checkbox */
  --color-checkbox: var(--color-control-border--primary);
  --color-checkbox--checked: var(--color-control--checked);
  --color-checkbox--indeterminate: var(--color-control-border--primary);
  --color-checkbox--disabled: var(--color-control--disabled);
  /* Switch */
  --color-switch--primary: var(--grey-200);
  --color-switch--secondary: var(--color-control-border--primary);
  --color-switch--checked: var(--color-control--checked);
  --color-switch-alt--secondary: var(--color-control--unchecked);
  --color-switch-dark--primary: var(--grey-800);



  /* Dialog */
  --color-dialog--primary: var(--white);


  /* Drawer */
  --color-drawer--primary: var(--white);
  --color-drawer__header--primary: var(--white);
  --color-drawer__header--secondary: var(--color-text);
  --color-drawer__divider: var(--borderColor);

  /* Expansion Panel */
  --color-expansion-panel--primary: var(--white);
  --color-expansion-panel--secondary: var(--grey-700);
  --color-expansion-panel--focus: var(--grey-50);
  --color-expansion-panel__title: var(--grey-900);
  --color-expansion-panel__divider: var(--borderColor);


  /* Field */
  --color-field: var(--grey-200);
  --color-field--focus: var(--color-primary);
  --color-field--invalid: var(--color-invalid);
  --color-field--error: var(--color-error);


  /* Form */
  --backgroundColor-form: var(--white);
  --borderColor-form: var(--grey-600);


  /* Icon */
  --color-icon: currentColor;
  --color-icon--passive: var(--color-neutral);
  --color-icon--active: var(--color-primary);


  /* Iconbar */
  --color-iconbar-background: var(--white);
  --color-iconbar-border: var(--borderColor);
  --color-iconbar-item: var(--grey-700);
  --color-iconbar-item-active: var(--color-primary);


  /* Label */
  --color-label--primary: var(--grey-200);
  --color-label--secondary: var(--black);
  --color-label-alt--primary: var(--color-primary);
  --color-label-alt--secondary: var(--color-primary-contrast);
  --color-label-accent--primary: var(--color-accent);
  --color-label-accent--secondary: var(--color-accent-contrast);


  /* List */
  --color-list--primary: transparent;
  --color-list-selected--primary: var(--grey-50);
  --color-list-active--secondary: var(--color-primary);
  --color-list__divider: var(--borderColor);
  --color-list__tile-active--primary: var(--color-primary);
  --color-list__tile-active--secondary: var(--white);
  --color-list__title: var(--grey-500);
  --color-list__subtext: var(--grey-500);


  /* Loader */
  --color-loader: var(--color-neutral);
  --color-loader-primary: var(--color-primary);
  --color-loader-accent: var(--color-accent);
  --color-loader-inverted: var(--white);


  /* Menu */
  --color-menu: var(--color-text);
  --color-menu-background: var(--white);
  --color-menu-link-background: transparent;
  --color-menu-link-background-enter: var(--grey-100);
  --color-menu-link-active: var(--white);
  --color-menu-link-background-active: var(--color-primary);
  --color-menu-data-select: var(--grey-600);


  /* Messages */
  --color-message: var(--color-neutral);
  --color-message-alt-primary: var(--color-primary);
  --color-message-accent-primary: var(--color-accent);
  --color-message-error: var(--color-error);
  --color-message-invalid: var(--color-invalid);


  /* Notification */
  --color-notification-icon: var(--color-primary);
  --color-notification-icon--success: var(--green-700);
  --color-notification-icon--warning: var(--red-300);
  --color-notification-icon--error: var(--red-700);


  /* Progress */
  --color-progress: var(--color-primary);
  --color-progress--secondary: color(var(--color-primary) a(25%));
  --color-progress--indeterminate: var(--grey-300);


  /* Table */
  --color-table: var(--grey-300);


  /* Tabs */
  --color-tab--active: rgba(255, 255, 255, .1);
  --color-tab-alt--primary: var(--color-primary);
  --color-tab-alt--active: var(--color-accent);


  /* Toolbar */
  --color-toolbar--primary: transparent;
  --color-toolbar--secondary: currentColor;
  --color-toolbar-alt--primary: var(--color-primary);
  --color-toolbar-alt--secondary: var(--white);
  --color-toolbar-dark--primary: var(--grey-900);
  --color-toolbar-dark--secondary: var(--white);


  /* Tooltip */
  --color-tooltip--primary: var(--black);
  --color-tooltip--secondary: var(--white);


  /* Shadows */

  --shadow-1: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
  --shadow-2: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23);
  --shadow-3: 0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23);
  --shadow-4: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
  --shadow-5: 0 19px 38px rgba(0, 0, 0, .3), 0 15px 12px rgba(0, 0, 0, .22);
  --shadow-focus: 0 0 8px rgba(0, 0, 0, .18), 0 8px 16px rgba(0, 0, 0, .36);
  --shadow-menu: var(--shadow-1);
  --shadow-menu-picker:
    inset 0 10px 11px -7px rgba(0, 0, 0, .5),
    inset 0 -10px 11px -7px rgba(0, 0, 0, .5);
  --toggle-focus-shadow: 0 0 6px var(--color-primary);

  /* Social Media */

  --facebook: #4c66a4;
  --google-plus: #dd4b39;
  --linkedin: #0077b5;
  --pinterest: #cb2027;
  --stumbleupon: #ff4522;
  --tripadvisor: #629d2a;
  --trustyou: #3498db;
  --tumblr: #35465c;
  --twitter: #2fc2ef;
  ```
  ")



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


(defexample typography-helper-text
  "#### Helper Text"
  (dom/div #js {}
    (dom/div #js {:className "u-helper-text"}
      (dom/div nil "Select a widget to go with your bike")
      (dom/div nil (dom/a nil "Learn more")))))

(defarticle docs-typography-customize
  "#### Customize

  Use these CSS custom properties to customize your app's typography.

  ``` css
  --fontFamily--sans: \"Source Sans Pro\", Helvetica, Arial, sans-serif;
  --fontFamily--monospaced: monospace;
  --fontFamily-page: var(--fontFamily--sans);
  --fontSize--tiny: .75rem; /* 12px */
  --fontSize--small: .875rem; /* 14px */
  --fontSize--semiNormal: 1rem; /* 16px */
  --fontSize--normal: 1.125rem; /* 18px */
  --fontSize--normalPlus: 1.25rem; /* 20px */
  --fontSize--semiMedium: 1.5rem; /* 24px */
  --fontSize--medium: 2rem; /* 32px */
  --fontSize--semiLarge: 2.5rem; /* 40px */
  --fontSize--large: 3rem; /* 48px */
  --fontSize--xlarge: 4.7rem; /* 75.2px */
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
                        {:id :settings-colour :title "Colour" :examples [settings-colour docs-colour-customize]}
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
                                    typography-ellipsis typography-break-word typography-helper-text  docs-typography-customize]}
                        {:id       :visibility
                         :title    "Visibility"
                         :documentation
                                   "# Visibility

                                   Use simple utilities to hide or show elements across any span of devices"
                         :examples [visibility-show visibility-hide visibility-fade]}
                        ])))

