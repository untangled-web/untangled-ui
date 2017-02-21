(ns ^:figwheel-always cljs.test-dev
  (:require-macros
    [untangled-spec.reporters.suite :as ts])
  (:require
    untangled-spec.reporters.impl.suite
    untangled.ui.tests-to-run))

(enable-console-print!)

(ts/deftest-all-suite specs #".*-spec")

(def on-load specs)

(specs)
