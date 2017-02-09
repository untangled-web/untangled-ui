(defproject navis/untangled-ui "0.1.0-SNAPSHOT"
  :description "Untangled Components is a library of pre-built CSS and active components for use with Untangled and Om Next"
  :url ""
  :license {:name "MIT"
            :url  "https://opensource.org/licenses/MIT"}

  :dependencies [[cljsjs/d3 "3.5.7-1"]
                 [cljsjs/topojson "1.6.18-0"]
                 [clojurewerkz/money "1.9.0"]
                 [com.andrewmcveigh/cljs-time "0.3.14"]
                 [image-resizer "0.1.9"]
                 [lein-doo "0.1.7" :scope "test"]
                 [org.clojure/clojure "1.9.0-alpha14" :scope "provided"]
                 [org.clojure/clojurescript "1.9.456" :scope "provided"]
                 [org.clojure/core.async "0.2.391"]
                 [org.omcljs/om "1.0.0-alpha47" :scope "provided"]
                 [navis/untangled-client "0.7.0" :scope "provided"]
                 [navis/untangled-server "0.7.0-SNAPSHOT" :scope "provided"]
                 [navis/untangled-spec "0.3.9" :scope "test"
                  :exclusions [ring/ring-core commons-fileupload prismatic/schema bidi]]
                 [com.taoensso/timbre "4.7.4"]]

  :plugins [[com.jakemccrary/lein-test-refresh "0.17.0"]
            [lein-cljsbuild "1.1.4"]
            [lein-doo "0.1.7"]]

  :source-paths ["dev" "src/main" "src/guide" "src/visuals"]
  :test-paths ["src/test"]
  :jar-exclusions [#".DS_Store" #"public" #"cards" #"user.clj"]


  :jvm-opts ["-XX:-OmitStackTraceInFastThrow"]
  :clean-targets ^{:protect false} ["resources/public/js" "target" "resources/private/js"]

  :test-refresh {:report       untangled-spec.reporters.terminal/untangled-report
                 :changes-only true
                 :with-repl    true}

  :doo {:build "automated-tests"
        :paths {:karma "node_modules/karma/bin/karma"}}

  :cljsbuild {:builds
              [{:id           "guide"
                :source-paths ["src/main" "src/guide"]
                :figwheel     {:devcards true}
                :compiler     {:main          untangled.components.guide-ui
                               :asset-path    "js/guide"
                               :output-to     "resources/public/js/guide.js"
                               :output-dir    "resources/public/js/guide"
                               :optimizations :none}}
               {:id           "visuals"
                :source-paths ["src/main" "src/visuals"]
                :figwheel     {:devcards true}
                :compiler     {:main          untangled.components.visuals-ui
                               :asset-path    "js/visuals"
                               :output-to     "resources/public/js/visuals.js"
                               :output-dir    "resources/public/js/visuals"
                               :optimizations :none}}
               {:id           "test"
                :source-paths ["src/test" "src/main"]
                :figwheel     {:on-jsload "cljs.user/on-load"}
                :compiler     {:main       cljs.user
                               :output-to  "resources/public/js/specs.js"
                               :output-dir "resources/public/js/specs"
                               :asset-path "js/specs"}}
               {:id           "css-guide"
                :figwheel     true
                :source-paths ["dev" "src/main" "src/css-guide"]
                :compiler     {:asset-path           "js/css-guide"
                               :optimizations        :none
                               :recompile-dependents true
                               :main                 cljs.user
                               :output-dir           "resources/public/js/css-guide"
                               :output-to            "resources/public/js/css-guide.js"
                               :preloads             [devtools.preload]
                               :source-map-timestamp true}}
               {:id           "automated-tests"
                :source-paths ["src/test" "src/main"]
                :compiler     {:output-to     "resources/private/js/unit-tests.js"
                               :output-dir    "resources/private/js/unit-tests"
                               :main          untangled.components.all-tests
                               :asset-path    "js/unit-tests"
                               :optimizations :none
                               }}]}

  :figwheel {:server-port 8001
             :css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.0"]
                                  [criterium "0.4.3"]
                                  [figwheel-sidecar "0.5.9"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.namespace "0.2.11"]
                                  [org.clojure/tools.nrepl "0.2.12"]
                                  [devcards "0.2.2" :exclusions [org.omcljs/om]]]
                   :repl-options {:init-ns          clj.user
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]
                                  :port             7001}}})
