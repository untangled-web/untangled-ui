(ns styles.style
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react defexample defarticle defview]]
            [om.dom :as dom]
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


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF EXAMPLES
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


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



;; Grid Examples

(defexample grid-example-12-column
  "#### 12 Columns

  We compose our grid off 12 vertical columns that are equal in space, and can span from one to all twelve columns in length."
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "1"))
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "2"))
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "3"))
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "4"))
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "5"))
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "6"))
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "7"))
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "8"))
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "9"))
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "10"))
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "11"))
    (dom/div #js {:className "u-column--1"}
      (dom/div #js {:className "box-row box-tall"} "12"))))

(defexample grid-example-learn
  "#### Learn

  This group of select boxes will show you how columns adapt to their siblings when they occupy more or less columns."
  (let [left-value (or (om/get-state this :left-value) 4)
        right-value (or (om/get-state this :right-value) 8)
        left-class (str "u-column--" left-value)
        right-class (str "u-column--" right-value)
        ]
    (dom/div #js {:className "u-row o-column-switcher-row"}
      (dom/div #js {:className left-class}
        (dom/select #js {:id        :left-selector
                         :className "o-column-switcher"
                         :onChange  (fn [evt]
                                      (om/update-state! this assoc
                                                        :left-value (.-value (.-target evt))
                                                        :right-value (- 12 (.-value (.-target evt)))))}
                    (map (fn [n] (dom/option #js {:value n :selected (= left-value n)} (str "u-column--" n)))
                         (range 1 13))))
      (dom/div #js {:className right-class}
        (dom/select #js {:id        :right-selector
                         :className "o-column-switcher"
                         :onChange  (fn [evt]
                                      (om/update-state! this assoc
                                                        :left-value (- 12 (.-value (.-target evt)))
                                                        :right-value (.-value (.-target evt))))}
                    (map (fn [n] (dom/option #js {:value n :selected (= right-value n)} (str "u-column--" n)))
                         (range 1 13)))))))

(defexample grid-example-autopilot
  "### Autopilot

  If you don't have time to think about how wide things should be, don't specify, just say `.u-column`."
  (dom/div #js {}
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column"}
        (dom/div #js {:className "box-row"} "auto"))
      (dom/div #js {:className "u-column"}
        (dom/div #js {:className "box-row"} "auto")))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column"}
        (dom/div #js {:className "box-row"} "auto"))
      (dom/div #js {:className "u-column"}
        (dom/div #js {:className "box-row"} "auto"))
      (dom/div #js {:className "u-column"}
        (dom/div #js {:className "box-row"} "auto")))))

(defexample grid-example-responsive
  "## Responsive

  Media appended classes let you create simple or complex grid systems."
  (dom/div #js {}
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--3@sm u-column--2@md u-column--1@lg"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {:className "u-show@sm"} "3")
          (dom/span #js {:className "u-show@md"} "2")
          (dom/span #js {:className "u-show@lg"} "1")))
      (dom/div #js {:className "u-column--6@sm u-column--8@md u-column--10@lg"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {:className "u-show@sm"} "6")
          (dom/span #js{:className "u-show@md"} "8")
          (dom/span #js {:className "u-show@lg"} "10")))
      (dom/div #js{:className "u-column--3@sm u-column--2@md u-column--1@lg"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {:className "u-show@sm"} "3")
          (dom/span #js {:className "u-show@md"} "2")
          (dom/span #js {:className "u-show@lg"} "1"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--3@sm u-column--2@md u-column--1@lg"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {:className "u-show@sm"} "3")
          (dom/span #js {:className "u-show@md"} "2")
          (dom/span #js {:className "u-show@lg"} "1")))
      (dom/div #js {:className "u-column--9@sm u-column--10@md u-column--11@lg"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {:className "u-show@sm"} "9")
          (dom/span #js {:className "u-show@md"} "10")
          (dom/span #js {:className "u-show@lg"} "11"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--6@sm u-column--8@md u-column--10@lg"}
        (dom/div #js {:className "box-row"}
          (dom/span #js{:className "u-show@sm"} "6")
          (dom/span #js {:className "u-show@md"} "8")
          (dom/span #js{:className "u-show@lg"} "10")))
      (dom/div #js {:className "u-column--6@sm u-column--4@md u-column--2@lg"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {:className "u-show@sm"} "6")
          (dom/span #js {:className "u-show@md"} "4")
          (dom/span #js {:className "u-show@lg"} "2"))))))

(defexample grid-example-fluid
  "## Fluid"
  (dom/div #js {}
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--12"}
        (dom/div #js{:className "box-row"}
          (dom/span #js {} "12"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--1"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "1")) "")
      (dom/div #js {:className "u-column--11"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "11"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--2"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "2")))
      (dom/div #js {:className "u-column--10"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "10"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--3"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "3")))
      (dom/div #js {:className "u-column--9"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "9"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--4"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "4")))
      (dom/div #js {:className "u-column--8"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "8"))))
    (dom/div #js{:className "u-row"}
      (dom/div #js {:className "u-column--5"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "5")))
      (dom/div #js {:className "u-column--7"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "7"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--6"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "6")))
      (dom/div #js{:className "u-column--6"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "6"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--7"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "7")))
      (dom/div #js {:className "u-column--5"}
        (dom/div #js{:className "box-row"}
          (dom/span #js {} "5"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--8"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "8")))
      (dom/div #js {:className "u-column--4"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "4")) ""))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--9"}
        (dom/div #js{:className "box-row"}
          (dom/span #js {} "9")))
      (dom/div #js {:className "u-column--3"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "3"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--10"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "10")))
      (dom/div #js {:className "u-column--2"}
        (dom/div #js {:className "box-row"}
          (dom/span #js{} "2"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--11"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "11")))
      (dom/div #js {:className "u-column--1"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {} "1"))))))

(defexample grid-example-column-push
  "### Column Push

  Move back and forth any number of columns wide you need to push the position of your column within the grid."
  (dom/div #js {}
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--1 u-push--11"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 11"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--2 u-push--10"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 10"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--3 u-push--9"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 9"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--4 u-push--8"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 8"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--5 u-push--7"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 7"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--6 u-push--6"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 6"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--7 u-push--5"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 5"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--8 u-push--4"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 4"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--9 u-push--3"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 3"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--10 u-push--2"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 2"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--11 u-push--1"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 1"))))))

(defexample grid-example-column-pull
  "### Column Pull

  Move back and forth any number of columns wide you need to pull the position of your column within the grid."
  (dom/div #js {}
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--1 u-pull--11"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 11"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--2 u-pull--10"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 10"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--3 u-pull--9"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 9"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--4 u-pull--8"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 8"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--5 u-pull--7"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 7"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--6 u-pull--6"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 6"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--7 u-pull--5"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 5"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--8 u-pull--4"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 4"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--9 u-pull--3"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 3"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--10 u-pull--2"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 2"))))
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--11 u-pull--1"}
        (dom/div #js {:className "box-row"}
          (dom/span #js {}
            (dom/i #js {:className "c-icon-right-dir"}) " 1"))))))

(defexample grid-example-column-push-pull
  "### Column Push/Pull"
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--2 u-push--5 u-pull--5"}
      (dom/div #js {:className "box-row"} ".u-column--2"
        (dom/br #js {}) ".u-push--5"
        (dom/br #js {}) ".u-pull--5"))
    (dom/div #js {:className "u-column--4 u-push--4 u-pull--4"}
      (dom/div #js {:className "box-row"} ".u-column--4"
        (dom/br #js {}) ".u-push--4.u-pull--4"))
    (dom/div #js {:className "u-column--6 u-push--3 u-pull--3"}
      (dom/div #js {:className "box-row"} ".u-column--6.u-push--3.u-pull--3"))
    (dom/div #js {:className "u-column--8 u-push--2 u-pull--2"}
      (dom/div #js {:className "box-row"} ".u-column--8.u-push--2.u-pull--2"))
    (dom/div #js {:className "u-column--10 u-push--1 u-pull--1"}
      (dom/div #js {:className "box-row"} ".u-column--10.u-push--1.u-pull--1"))))

(defexample grid-example-column-nesting
  "### Nesting

  You can setup any number of levels of grids deep you would like."
  (dom/div #js {}
    (dom/div #js {:className "u-row"}
      (dom/div #js {:className "u-column--4"}
        (dom/div #js {:className "box box-container"}
          (dom/div #js {:className "u-row"}
            (dom/div #js {:className "u-column--12"}
              (dom/div #js {:className "box-first box-container"}
                (dom/div #js {:className "u-row"}
                  (dom/div #js {:className "u-column--6"}
                    (dom/div #js {:className "box-nested"}))
                  (dom/div #js {:className "u-column--6"}
                    (dom/div #js {:className "box-nested"}))))))))
      (dom/div #js {:className "u-column--8"}
        (dom/div #js {:className "box box-container"}
          (dom/div #js {:className "u-row"}
            (dom/div #js {:className "u-column--12"}
              (dom/div #js {:className "box-first box-container"}
                (dom/div #js {:className "u-row"}
                  (dom/div #js {:className "u-column--3"}
                    (dom/div #js {:className "box-nested"}))
                  (dom/div #js {:className "u-column--6"}
                    (dom/div #js {:className "box-nested"}))
                  (dom/div #js {:className "u-column--3"}
                    (dom/div #js {:className "box-nested"})))))))))))

(defexample grid-example-align-start
  "###### START"
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--12"}
      (dom/div #js {:className "box box-container"}
        (dom/div #js {:className "u-row u-start"}
          (dom/div #js {:className "u-column--6"}
            (dom/div #js {:className "box-nested"} " .u-row.u-start ")))))))

(defexample grid-example-align-center
  "###### CENTER"
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--12"}
      (dom/div #js {:className "box box-container"}
        (dom/div #js {:className "u-row u-center"}
          (dom/div #js {:className "u-column--8"}
            (dom/div #js {:className "box-nested"} " .u-row.u-center ")))))))

(defexample grid-example-align-end
  "###### END"
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--12"}
      (dom/div #js {:className "box box-container"}
        (dom/div #js {:className "u-row u-end"}
          (dom/div #js {:className "u-column--4"}
            (dom/div #js {:className "box-nested"} " .u-row.u-end ")))))))

(defexample grid-example-align-top
  "###### TOP"
  (dom/div #js {:className "u-row u-top"}
    (dom/div #js {:className "u-column--6"}
      (dom/div #js {:className "box--large"} ".u-row.u-top"))
    (dom/div #js {:className "u-column--6"}
      (dom/div #js {:className "box"}))))

(defexample grid-example-align-middle
  "###### MIDDLE"
  (dom/div #js {:className "u-row u-middle"}
    (dom/div #js {:className "u-column--6"}
      (dom/div #js {:className "box--large"} ".u-row.u-middle"))
    (dom/div #js {:className "u-column--6"}
      (dom/div #js {:className "box"}))))

(defexample grid-example-align-bottom
  "###### BOTTOM"
  (dom/div #js {:className "u-row u-bottom"}
    (dom/div #js {:className "u-column--6"}
      (dom/div #js {:className "box--large"} ".u-row.u-bottom"))
    (dom/div #js {:className "u-column--6"}
      (dom/div #js {:className "box"}))))

(defexample grid-example-distributed-around
  "##### AROUND"
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--12"}
      (dom/div #js {:className "box box-container"}
        (dom/div #js {:className "u-row u-around"}
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-nested"} "2"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-nested"} "2"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-nested"} "2")))))))

(defexample grid-example-distributed-between
  "##### BETWEEN"
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--12"}
      (dom/div #js {:className "box box-container"}
        (dom/div #js {:className "u-row u-between"}
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-nested"} "2"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-nested"} "2"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-nested"} "2")))))))

(defexample grid-example-ordering-first
  "###### FIRST"
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--12"}
      (dom/div #js {:className "box box-container"}
        (dom/div #js {:className "u-row"}
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "1"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "2"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "3"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "4"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "5"))
          (dom/div #js {:className "u-column--2 u-first"}
            (dom/div #js {:className "box-nested"} "6")))))))

(defexample grid-example-ordering-last
  "###### LAST"
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--12"}
      (dom/div #js {:className "box box-container"}
        (dom/div #js {:className "u-row"}
          (dom/div #js {:className "u-column--2 u-last"}
            (dom/div #js {:className "box-nested"} "1"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "2"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "3"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "4"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "5"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "6")))))))

(defexample grid-example-ordering-reverse
  "###### REVERSE"
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--12"}
      (dom/div #js {:className "box box-container"}
        (dom/div #js {:className "u-row u-row--reverse"}
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "1"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "2"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "3"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "4"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "5"))
          (dom/div #js {:className "u-column--2"}
            (dom/div #js {:className "box-first"} "6")))))))


(def docs-media "Responsive breakpoints for styling for different devices and groups of devices. We divide devices up by `14em` units starting at `34em`. Using the `em` unit has been a proven browser compatible method of rendering media queries consistently.

                    #### Flexible Breakpoints

                    Target devices of a certain minimum width and everything larger than. If your writing mobile-first, then you would need to specify your desktop styles in a `@media (--lg-up)` breakpoint.

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

(defexample positioning-example-fixed
  "#### Fixed Classes"
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

(defexample positioning-example-absolute
  "#### Absolute Classes"
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
  "You can directionally express which position you want to specify using these conventions:

  `bottom | bottom-left | bottom-right | middle | top | top-left | top-right`

  ``` css
  /* position [ attachment, type ] */
  @apply --position-top;
  position: fixed;
  ```")

(defexample positioning-example-rotate
  ""
  (let [example-class-modifier (if (om/get-state this :rotate-visible) "" " u-hide")]
    (dom/div #js {}
      (dom/button #js {:className "c-button"
                       :onClick   #(om/update-state! this update :rotate-visible not)} "Show/Hide Examples")
      (dom/div #js {:className example-class-modifier}
        (dom/div #js {:className "u-rotate--cw"} "Rotate right 90 degrees")
        (dom/div #js {:className "u-rotate--ccw"} "Rotate left -90 degrees")))))

;; Size Examples

(defarticle docs-size
  "```css
  --global-duration: .1s;
  --global-margin: 8px;
  --global-rounded: 4px;
  --global-line-height: 32px;
  --global-z-index: 100;
  --frame-quarter: calc(var(--global-line-height) / 4); /* 8px */
  --frame-third: calc(var(--global-line-height) / 3); /* 10.6px */
  --frame-half: calc(var(--global-line-height) / 2); /* 16px */
  --frame: var(--global-line-height); /* 32px */
  --frame-double: calc(var(--global-line-height) * 2); /* 64px */
  --frame-triple: calc(var(--global-line-height) * 3); /* 96px */
  ```
  ")

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
    (dom/p #js {:className "is-negative"} "This is a very long string of text that will get cut off by exactly three dots forming an ellipsis character to truncate this text.")
    (dom/h1 #js {} "After")
    (dom/p #js {:className "u-ellipsis is-positive"} "This is a very long string of text that will get cut off by exactly three dots forming an ellipsis character to truncate this text.")))

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
  --fontFamily--monospaced: Consolas, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", Monaco, \"Courier New\", Courier, monospace;
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

  This set of classes let you expose any element to the desired device(s). Just add one of the following classes and you will see your element on it's respective device."
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
      (dom/svg #js {:xmlns "http://www.w3.org/2000/svg" :width "24" :height "24" :viewBox "0 0 24 24"}
        (dom/path #js {:d "M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z"})))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF SECTIONS (within a feature set...e.g. components)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; NOTE: This is where you add the sections for index

(def sections
  (vec (sort-by :title [; NOTE: :examples is a list of example names, rendered in order given
                        {:id :settings-colour :title "Colour" :examples [settings-colour]}
                        {:id       :size
                         :title    "Elements - Size"
                         :examples [docs-size]}
                        {:id       :grids
                         :title    "Grid"
                         :documentation
                                   "Grids are the bread and butter of web design, this one is based on flexbox. Needless to say you will find this grid system a joy to use. [Flexbox Mythbusting](http://jonyablonski.com/2015/flexbox-myth-busting/)\n\n
                                   #### New to grids?\n\n
                                   Check out my presentation on CSS Grids can help you, complete with a [slide deck](https://speakerdeck.com/stephenway/css-grids-can-help-you), and a [CodePen](http://codepen.io/stephenway/pen/dMKzvy) to play with complex grid layouts."
                         :examples [grid-example-12-column grid-example-learn grid-example-autopilot grid-example-responsive
                                    grid-example-fluid grid-example-column-push grid-example-column-pull
                                    grid-example-column-push-pull grid-example-column-nesting]}
                        {:id       :align
                         :title    "Grid - Align"
                         :documentation "# Grid - Align
                         Shortcuts to placing your elements left or right."
                         :examples [grid-example-align-start grid-example-align-center
                                    grid-example-align-end grid-example-align-top
                                    grid-example-align-middle grid-example-align-bottom]}
                        {:id       :distributed
                         :title    "Grid - Distribute"
                         :documentation "# Grid - Distributed
                         Evenly distribute objects into a row or column."
                         :examples [grid-example-distributed-around grid-example-distributed-between]}
                        {:id       :ordering
                         :title    "Grid - Ordering"
                         :documentation "# Grid - Ordering
                         Manipulate the order of objects with special column classes."
                         :examples [grid-example-ordering-first grid-example-ordering-last
                                    grid-example-ordering-reverse]
                         }
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
                         :examples [typography-font-scale typography-no-bullet typography-no-bullets
                                    typography-ellipsis typography-break-word  docs-typography-customize]}
                        {:id       :visibility
                         :title    "Visibility"
                         :documentation
                                   "Use simple utilities to hide or show elements across any span of devices"
                         :examples [visibility-show visibility-hide visibility-fade]}
                        ])))

