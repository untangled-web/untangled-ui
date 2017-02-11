(ns ^:figwheel-always cljs.user
  (:require-macros
    [untangled-spec.reporters.suite :as ts])
  (:require
    untangled-spec.reporters.impl.suite
    untangled.ui.tests-to-run
    [devtools.core :as devtools]))

(enable-console-print!)
(devtools/install!)

(ts/deftest-all-suite specs #".*-spec")

(def on-load specs)

(specs)
