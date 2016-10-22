(ns untangled.components.server.image-library.image
  (:require
    [image-resizer.util :as img-util]
    [image-resizer.core :as img-core]
    [image-resizer.format :as img-format])
  (:import
    (java.util Arrays)))

(defn get-ext [desired-ext actual-ext _opts]
  ;;TODO use opts to tell if we're outside the image & => need png
  (if (#{"gif"} actual-ext) actual-ext
    (if desired-ext desired-ext actual-ext)))

(defn animated-gif? [data]
  (let [bitvalue (bit-and (bit-and (nth data 10) 0x000000ff) 2r111)
        global-len (* 3 (Math/pow 2 (+ 1 bitvalue)))
        netscape-bytes (byte-array [33 255 11, 78 69 84 83 67 65 80 69 50, 46 48]) ;; NETSCAPE2.0
        animexts-bytes (byte-array [33 255 11, 65 78 73 77 69 88 84 83 49, 46 48]) ;; ANIMEXTS1.0
        simmons-bytes  (byte-array [33 255 11, 83 73 77 77 79 78 83 52 50, 46 48]) ;; SIMMONS42.0
        app-ext-block  (byte-array (take 14 (drop (+ 13 global-len) data)))]
    (boolean
      (some #(Arrays/equals app-ext-block %)
            [netscape-bytes animexts-bytes simmons-bytes]))))

(defn as-stream-with-format [this fmt]
  (img-format/as-stream this fmt))

(defn get-dimensions [this]
  (->> this
       img-util/dimensions
       (zipmap [:width :height])))

(defn crop-image-from [this {:as opts :keys [x1 y1 x2 y2 width height]
                             :or {x1 0 y1 0}}]
  (assert (every? number? (vals opts)))
  (let [buf-img (img-util/buffered-image this)
        dims ((juxt :width :height) (get-dimensions buf-img))
        [x2 y2] (if (and x2 y2) [x2 y2] dims)
        w-h (/ (- x2 x1) (- y2 y1))
        resize-dimensions (cond
                            height [(* w-h height) height]
                            width [width (* width (/ 1 w-h))]
                            :else [(- x2 x1) (- y2 y1)])]
    (as-> buf-img <>
          (img-core/crop-from <> x1 y1 (- x2 x1) (- y2 y1))
          (apply img-core/resize <> resize-dimensions))))
