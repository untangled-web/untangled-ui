(require '[clj.user :refer [start-figwheel]])
(require '[clojure.java.shell :refer [sh]])
(require '[clojure.java.io :refer [as-file]])

(if (.exists (as-file "resources/public/css/untangled-ui.css"))
  (println "Skipping NPM/Gulp. CSS MAY NOT BE UP TO DATE. Run gulp manually if you wish.")
  (do
    (println "CSS Missing. Running gulp.")
    (println (:out (sh "npm" "i")))
    (println (:out (sh "gulp")))))

(start-figwheel)
