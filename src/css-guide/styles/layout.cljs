(ns styles.layout
  (:require [om.next :as om :refer-macros [defui]]
            [styles.util :as util :refer [to-cljs] :refer-macros [source->react defexample defarticle defview]]
            [om.dom :as dom]
            [untangled.icons :as icons]
            [clojure.string :as str]))


(def element-layout-header
  "# Layouts

  The main layout depends on the `.s-app` class to render a holy grail layout that scales down nicely to mobile.\n\n
 [Use the master layout CodePen](http://codepen.io/stephenway/pen/EKORdr)\n\n
 <svg width=\"725\" height=\"465\" viewBox=\"0 0 725 465\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\"><title>Artboard 1</title><desc>Created with Sketch.</desc><g sketch:type=\"MSArtboardGroup\" fill=\"none\"><g id=\"Group\" sketch:type=\"MSLayerGroup\"><path fill=\"#047\" sketch:type=\"MSShapeGroup\" d=\"M26 31h356v44h-356z\"/><path fill=\"#cef\" sketch:type=\"MSShapeGroup\" d=\"M26 80h77v310h-77z\"/><path fill=\"#FCFCF9\" sketch:type=\"MSShapeGroup\" d=\"M109 80h273v310h-273z\"/><path fill=\"#EEEEE7\" sketch:type=\"MSShapeGroup\" d=\"M26 395h356v44h-356z\"/></g><g sketch:type=\"MSLayerGroup\"><path fill=\"#047\" sketch:type=\"MSShapeGroup\" d=\"M518 31h181.672v44h-181.672z\"/><path fill=\"#FCFCF9\" sketch:type=\"MSShapeGroup\" d=\"M518 80h181.672v262h-181.672z\"/><path fill=\"#EEEEE7\" sketch:type=\"MSShapeGroup\" d=\"M518 395h181.672v44h-181.672z\"/><path fill=\"#CAEEFF\" sketch:type=\"MSShapeGroup\" d=\"M518 346h181.672v44h-181.672z\"/></g><path d=\"M435 248v-30l30 15-30 15z\" fill=\"#EEEEE7\" sketch:type=\"MSShapeGroup\"/></g></svg>\n\nMore on this is available at Mozilla Developer Network's [Holy Grail Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes#Holy_Grail_Layout_example)")

(defexample element-layout
  "### Example"
  (dom/div #js {:className "_example-layout"}
    (dom/div #js {:className "s-app__view"}
      (dom/header #js {:className "o-header"} " Header ")
      (dom/main #js {:className "o-main"}
        (dom/nav #js {:className "o-nav"} " Nav ")
        (dom/article #js {:className "o-article"} " Article "))
      (dom/footer #js {:className "o-footer"} " Footer "))))

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
          (map (fn [n idx] (dom/option #js {:key idx :value n :selected (= left-value n)} (str "u-column--" n)))
            (range 1 13))))
      (dom/div #js {:className right-class}
        (dom/select #js {:id        :right-selector
                         :className "o-column-switcher"
                         :onChange  (fn [evt]
                                      (om/update-state! this assoc
                                        :left-value (- 12 (.-value (.-target evt)))
                                        :right-value (.-value (.-target evt))))}
          (map (fn [n idx] (dom/option #js {:key idx :value n :selected (= right-value n)} (str "u-column--" n)))
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
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--1 u-push--11"}
      (dom/div #js {:className "box-row"} (icons/icon :keyboard_arrow_right) " 11"))

    (dom/div #js {:className "u-column--2 u-push--10"}
      (dom/div #js {:className "box-row"} (icons/icon :keyboard_arrow_right) " 10"))

    (dom/div #js {:className "u-column--3 u-push--9"}
      (dom/div #js {:className "box-row"} (icons/icon :keyboard_arrow_right) " 9"))

    (dom/div #js {:className "u-column--4 u-push--8"}
      (dom/div #js {:className "box-row"} (icons/icon :keyboard_arrow_right) " 8"))

    (dom/div #js {:className "u-column--5 u-push--7"}
      (dom/div #js {:className "box-row"} (icons/icon :keyboard_arrow_right) " 7"))

    (dom/div #js {:className "u-column--6 u-push--6"}
      (dom/div #js {:className "box-row"} (icons/icon :keyboard_arrow_right) " 6"))

    (dom/div #js {:className "u-column--7 u-push--5"}
      (dom/div #js {:className "box-row"} (icons/icon :keyboard_arrow_right) " 5"))

    (dom/div #js {:className "u-column--8 u-push--4"}
      (dom/div #js {:className "box-row"} (icons/icon :keyboard_arrow_right) " 4"))

    (dom/div #js {:className "u-column--9 u-push--3"}
      (dom/div #js {:className "box-row"} (icons/icon :keyboard_arrow_right) " 3"))

    (dom/div #js {:className "u-column--10 u-push--2"}
      (dom/div #js {:className "box-row"} (icons/icon :keyboard_arrow_right) " 2"))

    (dom/div #js {:className "u-column--11 u-push--1"}
      (dom/div #js {:className "box-row"} (icons/icon :keyboard_arrow_right) " 1"))))

(defexample grid-example-column-pull
  "### Column Pull

  Move back and forth any number of columns wide you need to pull the position of your column within the grid."
  (dom/div #js {:className "u-row"}
    (dom/div #js {:className "u-column--1 u-pull--11"}
      (dom/div #js {:className "box-row"} "11 " (icons/icon :keyboard_arrow_left)))

    (dom/div #js {:className "u-column--2 u-pull--10"}
      (dom/div #js {:className "box-row"} "10 " (icons/icon :keyboard_arrow_left)))

    (dom/div #js {:className "u-column--3 u-pull--9"}
      (dom/div #js {:className "box-row"} "9 " (icons/icon :keyboard_arrow_left)))

    (dom/div #js {:className "u-column--4 u-pull--8"}
      (dom/div #js {:className "box-row"} "8 " (icons/icon :keyboard_arrow_left)))

    (dom/div #js {:className "u-column--5 u-pull--7"}
      (dom/div #js {:className "box-row"} "7 " (icons/icon :keyboard_arrow_left)))

    (dom/div #js {:className "u-column--6 u-pull--6"}
      (dom/div #js {:className "box-row"} "6 " (icons/icon :keyboard_arrow_left)))

    (dom/div #js {:className "u-column--7 u-pull--5"}
      (dom/div #js {:className "box-row"} "5 " (icons/icon :keyboard_arrow_left)))

    (dom/div #js {:className "u-column--8 u-pull--4"}
      (dom/div #js {:className "box-row"} "4 " (icons/icon :keyboard_arrow_left)))

    (dom/div #js {:className "u-column--9 u-pull--3"}
      (dom/div #js {:className "box-row"} "3 " (icons/icon :keyboard_arrow_left)))

    (dom/div #js {:className "u-column--10 u-pull--2"}
      (dom/div #js {:className "box-row"} "2 " (icons/icon :keyboard_arrow_left)))

    (dom/div #js {:className "u-column--11 u-pull--1"}
      (dom/div #js {:className "box-row"} "1 " (icons/icon :keyboard_arrow_left)))))

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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; START OF SECTIONS (within a feature set...e.g. components)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; NOTE: This is where you add the sections for index

(def sections
  (vec (sort-by :title [
                        {:id       :grids
                         :title    "Columns & Rows"
                         :documentation
                                   "# Columns & Rows

                                   Grids are the bread and butter of web design, this one is based on flexbox. Needless to say you will find this grid system a joy to use. [Flexbox Mythbusting](http://jonyablonski.com/2015/flexbox-myth-busting/)\n\n
                                   #### New to grids?\n\n
                                   Check out my presentation on CSS Grids can help you, complete with a [slide deck](https://speakerdeck.com/stephenway/css-grids-can-help-you), and a [CodePen](http://codepen.io/stephenway/pen/dMKzvy) to play with complex grid layouts."
                         :examples [grid-example-12-column grid-example-learn grid-example-autopilot grid-example-responsive
                                    grid-example-fluid  grid-example-column-nesting]}
                        {:id            :align
                         :title         "Grid Alignment"
                         :documentation "# Grid Alignment
                         Shortcuts to placing your elements left or right."
                         :examples      [grid-example-align-start grid-example-align-center
                                         grid-example-align-end grid-example-align-top
                                         grid-example-align-middle grid-example-align-bottom]}
                        {:id :layouts
                         :title "Layouts"
                         :documentation element-layout-header
                         :examples [element-layout]}
                        {:id            :ordering
                         :title         "Ordering & Distribution"
                         :documentation "# Ordering & Distribution
                         Manipulate the order of objects with special column classes or evenly distribute objects into a row or column."
                         :examples      [grid-example-ordering-first grid-example-ordering-last
                                         grid-example-ordering-reverse grid-example-distributed-around grid-example-distributed-between]
                         }
                        {:id            :columns-layout
                         :title         "Pushing & Pulling"
                         :documentation "# Pushing & Pulling Columns"
                         :examples      [grid-example-column-push grid-example-column-pull grid-example-column-push-pull]}
                        ])))
