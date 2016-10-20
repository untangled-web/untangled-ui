(defproject untangled-components "0.1.0-SNAPSHOT"
  :description "Untangled Components is a library of pre-built components for use with Untangled and Om Next"
  :url ""
  :license {:name "MIT"
            :url  "https://opensource.org/licenses/MIT"}

  :dependencies [[cljsjs/d3 "3.5.7-1"]
                 [cljsjs/topojson "1.6.18-0"]
                 [clojurewerkz/money "1.9.0"]
                 [com.andrewmcveigh/cljs-time "0.3.14"]
                 [image-resizer "0.1.9"]
                 [lein-doo "0.1.7" :scope "test"]
                 [org.clojure/clojure "1.8.0" :scope "provided"]
                 [org.clojure/clojurescript "1.9.229" :scope "provided"]
                 [org.clojure/core.async "0.2.391"]
                 [org.omcljs/om "1.0.0-alpha46" :scope "provided"]
                 [navis/untangled-client "0.6.0-SNAPSHOT" :scope "provided"]
                 [navis/untangled-spec "0.3.9" :scope "test"]]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-doo "0.1.7"]]

  :source-paths ["dev" "src/main" "src/cards"]
  :test-paths ["src/test"]
  :jar-exclusions [#".DS_Store" #"public" #"cards" #"user.clj"]


  :jvm-opts ["-XX:-OmitStackTraceInFastThrow"]
  :clean-targets ^{:protect false} ["resources/public/js" "target" "resources/private/js"]

  :doo {:build "automated-tests"
        :paths {:karma "node_modules/karma/bin/karma"}}

  :cljsbuild {:builds
              [{:id           "cards"
                :source-paths ["src/main" "cards/cards"]
                :figwheel     {:devcards true}
                :compiler     {:main          untangled.components.cards-ui
                               :asset-path    "js/cards"
                               :output-to     "resources/public/js/cards.js"
                               :output-dir    "resources/public/js/cards"
                               :optimizations :none}}
               {:id           "test"
                :source-paths ["src/test" "src/main" "dev"]
                :figwheel     {:on-jsload "cljs.user/on-load"}
                :compiler     {:main       cljs.user
                               :output-to  "resources/public/js/specs.js"
                               :output-dir "resources/public/js/specs"
                               :asset-path "js/specs"}}
               {:id           "automated-tests"
                :source-paths ["src/test" "src/main"]
                :compiler     {:output-to     "resources/private/js/unit-tests.js"
                               :output-dir    "resources/private/js/unit-tests"
                               :main          untangled.components.all-tests
                               :asset-path    "js/unit-tests"
                               :optimizations :none
                               }}]}

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.5.2"]
                                  [criterium "0.4.3"]
                                  [figwheel-sidecar "0.5.7"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.namespace "0.2.11"]
                                  [org.clojure/tools.nrepl "0.2.12"]
                                  [devcards "0.2.2" :exclusions [org.omcljs/om]]]
                   :repl-options {:init-ns          clj.user
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]
                                  :port             7001}}})
