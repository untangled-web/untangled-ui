(defproject untangled-components "0.1.0-SNAPSHOT"
  :description "Untangled Components is a library of pre-built components for use with Untangled and Om Next"
  :url ""
  :license {:name "MIT"
            :url  "https://opensource.org/licenses/MIT"}

  :dependencies [[cljsjs/d3 "3.5.7-1"]
                 [cljsjs/topojson "1.6.18-0"]
                 [clojurewerkz/money "1.9.0"]
                 [com.andrewmcveigh/cljs-time "0.3.14"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [org.clojure/core.async "0.2.374"]
                 [org.clojure/tools.namespace "0.2.11"]
                 [org.omcljs/om "1.0.0-alpha44"]
                 [navis/untangled-client "0.5.5"]
                 [navis/untangled-server "0.6.1"]
                 [navis/untangled-spec "0.3.8" :scope "test" :exclusions [ring/ring-core commons-fileupload prismatic/schema bidi]]]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-doo "0.1.6"]]

  :source-paths ["dev/clj" "src/client"]
  :test-paths ["specs/client"]

  :jvm-opts ["-server" "-Xmx1024m" "-Xms512m" "-XX:-OmitStackTraceInFastThrow"]
  :clean-targets ^{:protect false} ["resources/public/js/specs" "resources/public/js/compiled" "target" "resources/private/js"]

  :doo {:build "automated-tests"
        :paths {:karma "node_modules/karma/bin/karma"}}

  :cljsbuild {:builds
              [{:id           "cards"
                :source-paths ["src/cards" "src/client" "src/shared"]
                :figwheel     {:devcards true}
                :compiler     {:main                 untangled-components.cards-ui
                               :asset-path           "js/compiled/cards"
                               :output-to            "resources/public/js/compiled/cards.js"
                               :output-dir           "resources/public/js/compiled/cards"
                               :optimizations        :none
                               :recompile-dependents true
                               :source-map-timestamp true}}
               {:id           "test"
                :source-paths ["specs/client" "specs/shared" "src/client" "src/shared" ]
                :figwheel     true
                :compiler     {:main                 untangled-components.test-main
                               :output-to            "resources/public/js/specs/specs.js"
                               :output-dir           "resources/public/js/compiled/specs"
                               :asset-path           "js/compiled/specs"
                               :recompile-dependents true
                               :optimizations        :none}}
               {:id           "automated-tests"
                :source-paths ["specs/client" "specs/shared" "src/client" "src/shared"]
                :compiler     {:output-to     "resources/private/js/unit-tests.js"
                               :main          untangled-components.all-tests
                               :asset-path    "js"
                               :output-dir    "resources/private/js"
                               :optimizations :none
                               }}]}

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev     {:dependencies [[binaryage/devtools "0.5.2"]
                                      [criterium "0.4.3"]
                                      [figwheel-sidecar "0.5.3-1" :exclusions [ring/ring-core commons-fileupload]]
                                      [com.cemerick/piggieback "0.2.1"]
                                      [org.clojure/tools.nrepl "0.2.12"]
                                      [devcards "0.2.1-7" :exclusions [org.omcljs/om]]]
                       :repl-options {:init-ns          user
                                      :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]
                                      :port             7001}}})
