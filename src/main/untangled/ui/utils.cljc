(ns untangled.ui.utils)

#?(:cljs
   (defn !! [arg] (not (not arg))))


#?(:cljs
   (defn isWindow [node]
     (if (= node (.-window node))
       node
       (if (= (.-nodeType node) 9)
         (or (.-defaultView node) (.-parentWindow node))
         nil))))


#?(:cljs
   (defn ownerDocument [node]
     (if node
       (and node (.-ownerDocument node))
       js/document)))


#?(:cljs
   (defn ownerWindow [node {:keys [fallback] :or {fallback js/window}}]
     (let [cell (if (not node) js/Node node)
           doc (ownerDocument cell)]
       (or (.-defaultView doc) (.-parentView doc) fallback))))


#?(:cljs
   (defn isBody [node]
     (when (and node (= (.toLowerCase (.-tagName node)) "body")))))


;; Do we have a scroll bar?
#?(:cljs
   (defn isOverflowing [container]
     (let [doc (ownerDocument container)
           win (ownerWindow :node doc)]

       (if (and (not (isWindow doc)) (not (isBody container)))
         (> (.-scrollHeight container) (.-clientHeight container))

      ;; Takes in account potential non zero margin on the body.
         (let [style (.getComputedStyle win (.-body doc))
               marginLeft (.parseInt style (.getPropertyValue style "margin-left") 10)
               marginRight (.parseInt style (.getPropertyValue style "margin-right") 10)]

           (< (+ marginLeft (.-clientWidth (.-body doc)) marginRight) (.-innerWidth win)))))))


#?(:cljs
   (def canUseDOM
     (!! (and (not= (goog.typeOf js/window) "undefined")
              (.-document js/window)
              (.-createElement (.-document js/window))))))

#?(:cljs
   (defn scrollbarSize [recalc]
     (let [size nil]
       (if (or (and (not size) (not= size 0)) recalc)
         (if (canUseDOM)
           (let [scrollDiv (.createElement js/document "div")]
             (set! (.-position (.-style scrollDiv)) "absolute")
             (set! (.-top (.-style scrollDiv)) "-9999px")
             (set! (.-width (.-style scrollDiv)) "50px")
             (set! (.-height (.-style scrollDiv)) "50px")
             (set! (.-overflow (.-style scrollDiv)) "scroll")

             (.appendChild (.-body js/document) scrollDiv)
             (reset! size (- (.-offsetWidth scrollDiv) (.-clientWidth scrollDiv)))
             (.removeChild (.-body js/document) scrollDiv)
             size)
           size)
         size))))
