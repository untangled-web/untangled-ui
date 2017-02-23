(ns untangled.ui.image-tool-cards
  (:require-macros
    [devcards.core :as dc :refer [defcard defcard-doc]])
  (:require
    [untangled.client.cards :refer [untangled-app]]
    [untangled.ui.clip-tool :as clip]
    [om.dom :as dom]
    [om.next :as om :refer [defui]]
    [untangled.client.core :as uc]
    [untangled.ui.elements :as ele]))

(defui ^:once Root
  static uc/InitialAppState
  (initial-state [c p] {:ctool (uc/get-initial-state clip/ClipTool {})})
  static om/IQuery
  (query [this] [:ui/react-key :ctool])
  Object
  (render [this]
    (let [{:keys [ui/react-key ctool]} (om/props this)]
      (dom/div #js {:key react-key}
        (clip/ui-clip-tool (om/computed ctool {:onChange (fn [props] (om/set-state! this props))}))
        (clip/ui-preview-clip (merge (om/get-state this) {:filename "minions.jpg"
                                                          :width    200 :height 200}))))))

(defcard cliptool
  "# Image Cropping Tool

  - Aspect ratio enforcement
  - Local state used for speed
  - Preview tool to show result (needs CSS work)

  API UNSTABLE. Proof of concept is close, but not complete.

  The general idea is that the clip tool can generate a URL with clip bounds as get parameters,
  and a CDN can serve said image via caching with a bg server that can generate the clipped
  image on demand. Thus, the first time you hit the image the CDN has a cache miss, and something like
  AWS lambda generates the image and sends it to the CDN. Thus, some CMS system or email that contains
  the image URL will serve slowly on the first hit, and very fast thereafter.
  "
  (untangled-app Root)
  {}
  {:inspect-data true})
