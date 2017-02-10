(ns untangled.components.pluggable-css-exploration-cards
  (:require-macros
    [untangled.client.cards :refer [untangled-app]]
    [devcards.core :refer [defcard defcard-doc]])
  (:require
    [devcards.core :as dc]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [untangled.i18n.core :as i18n]
    [untangled.components.dropdowns :as dropdowns]
    [untangled.client.core :as uc]
    [untangled.icons :refer [icon]]
    [untangled.components.calendar :as c]
    [untangled.client.mutations :as m]
    [clojure.string :as str]))

(def *ui-framework* (atom :default))

(defmulti button-render (fn [props children]
                          @*ui-framework*))

(defmethod button-render :default [props children]
  (apply dom/button #js {:className "c-button"} children))

(defmethod button-render :bootstrap [props children]
  (apply dom/button #js {:type "button" :className "button btn-primary"} children))

(defmethod button-render :bulma [props children]
  (apply dom/button #js {:className "button"} children))

(defn ui-button [props children]
  (button-render props children))

(defcard sample-rendering
  "It is possible we could support an extensible CSS set with multimethod rendering. The props would have to be
  standardized, and the HTML would want to include only the CSS you're using (due to naming conflicts). But, it would
  be a pretty minor addition to make it work. (e.g. load this page via
  <a href=\"/guide-bulma.html#!/untangled.components.pluggable_css_exploration_cards\">/guide-bulma.html</a>
  <a href=\"/guide-bootstrap.html#!/untangled.components.pluggable_css_exploration_cards\">/guide-bootstrap.html</a>
  to see the proper rendering for those.

  The primary problem with multimethod rendering is the lack of code re-use on things like callback hookup, etc.

  The advantage is that many components need differing sets of properties besides just classes.
  "
  (fn [state-atom _]
    (let [re-render (fn [] (swap! state-atom update :x inc))]
      (dom/div nil
        (dom/button #js {:className "button c-button" :onClick (fn []
                                                                 (reset! *ui-framework* :default)
                                                                 (re-render))} "Default")
        (dom/button #js {:className "button c-button" :onClick (fn []
                                                                 (reset! *ui-framework* :bulma)
                                                                 (re-render))} "Bulma")
        (dom/button #js {:className "button c-button" :onClick (fn []
                                                                 (reset! *ui-framework* :bootstrap)
                                                                 (re-render))} "Bootstrap")
        (dom/br nil)
        (ui-button {} (str "val: " (-> @state-atom :x)))))))

(def button-class-mappings
  {:default   {
               :base   "c-button"
               :colors (into {} (map (fn [k]
                                       [k (str "c-button--" (name k))]) [:secondary :alert :passive :text :anchor]))
               :shapes (into {} (map (fn [k]
                                       [k (str "c-button--" (name k))]) [:large, :xlarge, :round, :wide]))
               }
   :bootstrap {
               :base   "btn"
               :colors {:default "btn-primary"
                        :passive "btn-secondary"
                        :alert   "btn-warning"
                        :text    "btn-link"
                        :anchor  "btn-link"
                        }
               :shapes {:large  "btn-lg"
                        :xlarge "btn-lg"
                        :wide   "btn-block"
                        }
               }})

(defn mapping-button [{:keys [framework color shape] :or {framework :default color :default shape :default}
                       :as   props} & children]
  (let [base-class  (get-in button-class-mappings [framework :base] (get-in button-class-mappings [:default :base]))
        color-class (get-in button-class-mappings [framework :colors color] (get-in button-class-mappings [framework :colors :default] ""))
        shape-class (get-in button-class-mappings [framework :shapes shape] (get-in button-class-mappings [framework :shapes :default] ""))
        classes     (str/join " " [base-class color-class shape-class])
        attrs       (-> props
                      (assoc :className classes :type "button")
                      (dissoc :framework :color :shape)
                      clj->js)]
    (apply dom/button attrs children)))

(defn bs-button [props & children] (apply mapping-button (assoc props :framework :bootstrap) children))
(defn dflt-button [props & children] (apply mapping-button (assoc props :framework :default) children))

(defcard sample-alternative
  "The problem with multimethod rendering is the lack of code re-use. For simple elements like buttons where mainly
  class is changing and there is no nested DOM: we're really just combining top-level class names for the most part.
  On a case-by-case basis we could instead just have a declared map of mappings."
  (dom/div nil
    (dom/span nil "Bootstrap: ")
    (for [color [:primary :secondary :passive :text :anchor]
          shape [:large :xlarge :round :wide]]
      (bs-button {:key (str color shape) :shape shape :color color} (str shape ", " color)))
    (dom/br nil)
    (dom/span nil "Default: ")
    (for [color [:primary :secondary :passive :text :anchor]
          shape [:large :xlarge :round :wide]]
      (dflt-button {:key (str color shape) :shape shape :color color} (str shape ", " color)))))
