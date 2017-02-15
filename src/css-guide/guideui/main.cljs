(ns guideui.main
  (:require [styles.components]
            [styles.elements]
            [styles.objects]
            [styles.style]
            [untangled.client.core :as uc]
            [untangled.client.core :as core]
            [guideui.ui :as ui]))

;(def Client (uc/new-untangled-client))
;(uc/mount Client util/HTMLConverterApp "example-1")

(defonce ui-client (atom (uc/new-untangled-client)))

(swap! ui-client #(core/mount % ui/Root "ui"))
