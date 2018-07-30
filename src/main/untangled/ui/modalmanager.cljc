(ns untangled.ui.modalmanager
  (:require [om.next :as om :refer [defui]]
            [clojure.string :as str]
            [untangled.ui.utils :as utils]))

#?(:cljs
   (defn findIndexOf [data callback]
     (let [idx -1]
       (.some data (fn [item index]
                     (if (callback item)
                       (reset! idx index)
                       true)
                     false)
              idx))))


;; defn getPaddingRight


#?(:cljs
   (defn setContainerStyle []
     (let [container (-> js/document .-body .-style)
           page (-> js/document .-documentElement .-style)]
       (set! (.-overflow container) "hidden")
       (set! (.-paddingRight container) "15px")
       (set! (.-height container) "100%")
       (set! (.-height page) "100%"))))


#?(:cljs
   (defn removeContainerStyle []
     (let [container (-> js/document .-body .-style)
           page (-> js/document .-documentElement .-style)]
       (set! (.-overflow container) "")
       (set! (.-paddingRight container) "")
       (set! (.-height container) "")
       (set! (.-height page) ""))))


; (defui ^:once ModalManager
;   static uc/InitialAppState
;   (initial-state [this params] {})

;   static om/IQuery
;   (query [this] [])

;   Object
;   (initLocalState [this] {:options {:hideSiblingNodes true
;                                     :handleContainerOverflow true}
;                           :hideSiblingNodes        hideSiblingNodes
;                           :handleContainerOverflow handleContainerOverflow

;                           :modals                  (array)
;                           :containers              (array)
;                           :data                    (array)})

;   (add [this modal container]
;        (let [{:keys [modals hideSiblingNodes]} (om/get-state this)
;              modalIdx (.indexOf modals modal)]
;          (if (not= modalIdx -1)
;            modalIdx

;            (do
;              (reset! modalIdx (count modals))
;              (.push modals modal)

;              (when hideSiblingNodes
;                (hideSiblings container (:mountNode modal))))))))
