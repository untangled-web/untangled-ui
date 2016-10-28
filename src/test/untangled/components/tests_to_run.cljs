(ns untangled.components.tests-to-run
  (:require
    untangled.components.ui.forms-spec
    untangled.components.ui.component.table-spec
    untangled.components.ui.component.calendar-spec))

;********************************************************************************
; IMPORTANT:
; For cljs tests to work in CI, we want to ensure the namespaces for all tests are included/required. By placing them
; here (and depending on them in user.cljs for dev), we ensure that the all-tests namespace (used by CI) loads
; everything as well.
;********************************************************************************

