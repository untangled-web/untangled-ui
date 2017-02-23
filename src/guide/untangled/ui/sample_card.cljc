(ns untangled.ui.sample-card
  #?(:cljs (:require-macros devcards.core))
  (:require
    #?@(:cljs (devcards.core
                cljs.pprint))
    #?@(:clj ([devcards.core :as dc]
              [devcards.util.utils :as utils]))))

#?(:clj (defmacro sample-card
          "sample-card renders a devcard that takes the source code and adds the code to the documentation for the card.

           parameters:
                name - servers as a link to the devcard
                title - Text to identify what this sample is demonstrating
                body - clojure code that demonstrates the component

          example:

          (sample-card ui-card \"Active Card\"
             (c/ui-card {:active true}
                 (dom/div nil \"Content\")))
          "
          [& expr]
          (when (utils/devcards-active?)
            (let [[vname docu main-obj initial-data om-options options] (dc/parse-card-args expr 'card)
                  code (read-string (str "'" (str main-obj)))]
              `(devcards.core/defcard* ~(symbol (name vname))
                 (let [document# (str
                                   "# Sample " ~docu "\n"
                                   "```\n"
                                   (with-out-str
                                     (~'cljs.pprint/with-pprint-dispatch
                                       ~'cljs.pprint/code-dispatch
                                       (~'cljs.pprint/pprint ~code)))
                                   "```\n"
                                   "renders:")]
                   (devcards.core/card-base
                     {:name          ~(name vname)
                      :documentation document#
                      :main-obj      ~main-obj
                      :initial-data  ~initial-data
                      :options       ~options})))))))
