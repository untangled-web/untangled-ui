(ns untangled-components.all-tests
  (:require
    untangled-components.tests-to-run
    [doo.runner :refer-macros [doo-all-tests]]))

(doo-all-tests #".*-spec")
