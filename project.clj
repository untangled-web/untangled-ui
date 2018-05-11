(defproject navis/untangled-ui "1.0.0-alpha5"
  :description "Untangled Components is a library of pre-built CSS and active components for use with Untangled and Om Next"
  :url ""
  :license {:name "MIT"
            :url  "https://opensource.org/licenses/MIT"}

  :dependencies [[clojurewerkz/money "1.9.0"]
                 ;[ru.yandex.qatools.ashot/ashot "1.5.2" :scope "test"]
                 ;[org.seleniumhq.selenium/selenium-java "3.0.1" :scope "test"]
                 ;[org.seleniumhq.selenium/htmlunit-driver "2.24" :scope "test"]
                 ;[clj-webdriver "0.7.2" :scope "test"]
                 [image-resizer "0.1.9"]
                 [lein-doo "0.1.7" :scope "test"]
                 [org.clojure/clojure "1.9.0-alpha14" :scope "provided"]
                 [org.clojure/clojurescript "1.9.518" :scope "provided"]
                 [org.omcljs/om "1.0.0-alpha48" :scope "provided"]
                 [navis/untangled-client "0.8.2-SNAPSHOT" :scope "provided"]
                 [navis/untangled-server "0.7.0-SNAPSHOT" :scope "provided"]
                 [navis/untangled-spec "0.3.9" :scope "test"
                  :exclusions [ring/ring-core commons-fileupload prismatic/schema bidi]]
                 [com.taoensso/timbre "4.7.4" :exclusions [io.aviso/pretty]]]

  :plugins [[com.jakemccrary/lein-test-refresh "0.17.0"]
            [lein-figwheel "0.5.16" :exclusions [org.clojure/clojurescript]]
            [lein-cljsbuild "1.1.7"]
            [lein-shell "0.5.0"]
            [lein-doo "0.1.8"]]

  :source-paths ["src/main"]
  :test-paths ["src/test"]
  :jar-exclusions [#".DS_Store" #"public/js" #"private"]

  :jvm-opts ["-XX:-OmitStackTraceInFastThrow"]
  :clean-targets ^{:protect false} ["resources/public/js" "target" "resources/private/js"]

  :test-refresh {:report    untangled-spec.reporters.terminal/untangled-report
                 :with-repl true}

  :aliases {"jar" ["with-profile" "release" "jar"]}

  :doo {:build "automated-tests"
        :paths {:karma "node_modules/karma/bin/karma"}}

  :cljsbuild {:builds
              [{:id           "guide"
                :source-paths ["src/main" "src/guide"]
                :figwheel     {:devcards true}
                :compiler     {:main            untangled.ui.guide-ui
                               :asset-path      "js/guide"
                               :output-to       "resources/public/js/guide.js"
                               :output-dir      "resources/public/js/guide"
                               :closure-defines {process.env/NODE_ENV "development"}
                               :preloads        [devtools.preload process.env]
                               :parallel-build  true
                               :optimizations   :none
                               :language-in     :ecmascript5
                              ;  :target          :nodejs
                               :npm-deps        {:focus-trap-react "3.1.2"
                                                 :react "16.0.0"}
                               :install-deps    true}}
               {:id           "production-guide"
                :source-paths ["src/main" "src/guide"]
                :compiler     {:devcards       true
                               :main           untangled.ui.start-ui
                               :asset-path     "js/pg-js"
                               :output-dir     "resources/public/js/pg-js"
                               :output-to      "resources/public/js/guide.min.js"
                               :optimizations  :advanced
                               :closure-defines {process.env/NODE_ENV "production"}
                               :npm-deps        {:focus-trap-react "3.1.2"
                                                 :react "16.0.0"}
                               :install-deps    true}}
               {:id           "production-visuals"
                :source-paths ["src/main" "src/visuals"]
                :compiler     {:devcards       true
                               :main           untangled.ui.start-ui
                               :asset-path     "js/pv-js"
                               :output-dir     "resources/public/js/pv-js"
                               :output-to      "resources/public/js/visuals.min.js"
                               :optimizations  :advanced
                               :closure-defines {process.env/NODE_ENV "production"}
                               :npm-deps        {:focus-trap-react "3.1.2"
                                                 :react "16.0.0"}
                               :install-deps    true}}
               {:id           "visuals"
                :source-paths ["src/main" "src/visuals"]
                :figwheel     {:devcards true}
                :compiler     {:main            untangled.ui.visuals-ui
                               :asset-path      "js/visuals"
                               :output-to       "resources/public/js/visuals.js"
                               :output-dir      "resources/public/js/visuals"
                               :closure-defines {process.env/NODE_ENV "development"}
                               :preloads        [devtools.preload process.env]
                               :optimizations   :none
                               :language-in     :ecmascript5
                              ;  :target          :nodejs
                               :npm-deps        {:focus-trap-react "3.1.2"
                                                 :react "16.0.0"}
                               :install-deps    true}}
               {:id           "test"
                :source-paths ["src/test" "src/main"]
                :figwheel     {:on-jsload "cljs.test-dev/on-load"}
                :compiler     {:main       cljs.test-dev
                               :output-to  "resources/public/js/specs.js"
                               :output-dir "resources/public/js/specs"
                               :preloads   [devtools.preload]
                               :asset-path "js/specs"}}
               {:id           "production-css"
                :source-paths ["src/main" "src/css-guide"]
                :compiler     {:asset-path      "js/pcss"
                               :optimizations   :advanced
                               :main            guideui.main
                               :output-dir      "resources/public/js/pcss"
                               :output-to       "resources/public/js/css-guide.min.js"
                               :closure-defines {process.env/NODE_ENV "production"}
                               :npm-deps        {:focus-trap-react "3.1.2"
                                                 :react "16.0.0"}
                               :install-deps    true}}
               {:id           "css-guide"
                :figwheel     true
                :source-paths ["dev" "src/main" "src/css-guide"]
                :compiler     {:asset-path           "js/css-guide"
                               :optimizations        :none
                               :recompile-dependents true
                               :main                 guideui.main
                               :output-dir           "resources/public/js/css-guide"
                               :output-to            "resources/public/js/css-guide.js"
                               :closure-defines      {process.env/NODE_ENV "development"}
                               :preloads             [devtools.preload process.env]
                               :source-map-timestamp true
                               :npm-deps        {:focus-trap-react "3.1.2"
                                                 :react "16.0.0"}
                               :install-deps         true}}
               {:id           "automated-tests"
                :source-paths ["src/test" "src/main"]
                :compiler     {:output-to     "resources/private/js/unit-tests.js"
                               :output-dir    "resources/private/js/unit-tests"
                               :main          untangled.ui.all-tests
                               :asset-path    "js/unit-tests"
                               :optimizations :none}}]}

  :figwheel {:server-port 8001
             :css-dirs    ["resources/public/css"]}

  :deploy-repositories [["snapshots" :clojars]]

  ; TODO: On figwheel startup, run the gulp shell command if the CSS files are missing
  ; TODO: JAR generation: Make sure to do a prep-task to build the CSS, then include it in the jar.
  :profiles {:release {:prep-tasks     [["shell" "gulp"]]
                       :jar-exclusions [#"public/img/.*" #"test/.*" #"favicon.ico" #".*html$"]
                       }
             :dev     {:dependencies [[binaryage/devtools "0.9.0"]
                                      [criterium "0.4.3"]
                                      [figwheel-sidecar "0.5.16" :exclusions [http-kit]]
                                      [com.cemerick/piggieback "0.2.1"]
                                      [org.clojure/tools.namespace "0.2.11"]
                                      [org.clojure/tools.nrepl "0.2.12"]
                                      [hickory "0.7.0"]
                                      [devcards "0.2.2" :exclusions [org.omcljs/om]]]
                       :source-paths ["dev" "src/guide" "src/css-guide"]
                       :repl-options {:init-ns          clj.user
                                      :init (use 'clj.user :reload)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]
                                      :port             7001}}})
