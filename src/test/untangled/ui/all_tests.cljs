(ns untangled.ui.all-tests
  (:require
    untangled.ui.tests-to-run
    [doo.runner :refer-macros [doo-all-tests]]))

(doo-all-tests #".*-spec")
