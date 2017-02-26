(ns visual-regression-spec)
(comment
  (ns visual-regression-spec
    (:require
      [clojure.java.io :as io]
      [clj-webdriver.taxi :as taxi]
      [untangled-spec.core :refer [specification assertions]]
      [taoensso.timbre :as timbre])
    (:import [ru.yandex.qatools.ashot Screenshot]
             [javax.imageio ImageIO]
             [ru.yandex.qatools.ashot.comparison ImageDiffer ImageDiff]
             (java.io File)
             (clj_webdriver.element Element)))

  (defn start-browser []
    (taxi/set-driver! {:browser :phantomjs} "http://localhost:8001/visuals.html"))

  (def root-path
    "Where the expected screenshots live and new screenshots will capture to"
    (str (.getCanonicalPath (clojure.java.io/file ".")) "/screen_shots/"))

  (defn touch-dir
    "Creates a directory path if it does not already exist."
    [dir]
    (io/make-parents (str dir "touch")))

  (defn capture-cards
    "Take screen shots of every devcard and write them to the output-dir
    dir. Returns a vector of the file names of all the images captured or :FAILED if there was an error."
    [output-dir]
    (try (let [driver             (start-browser)
               _                  (touch-dir output-dir)
               title-selector     "a.com-rigsomelight-devcards_set-current-path"

               _                  (taxi/wait-until #(-> (taxi/element title-selector)))
               _                  (taxi/window-maximize)

               card-link-selector "a.com-rigsomelight-devcards-list-group-item"
               card-count         (count (taxi/elements card-link-selector))
               file-names         (atom [])]
           (timbre/info "Capturing cards into" output-dir)
           (doseq [idx (range card-count)]
             (let [selector   (str "div.com-rigsomelight-devcards-list-group a:nth-child("
                                (inc idx) ")")
                   card-title (taxi/text (str selector " span:nth-child(2)"))]
               (taxi/click selector)
               (timbre/info "navigated to " selector)
               (Thread/sleep 1000)
               (let [cards     (taxi/elements "div.com-rigsomelight-devcards-panel-heading > a")
                     subtitles (mapv (fn [e] (-> e :webelement .getText)) cards)]
                 (timbre/info "found " (count cards) " titled " subtitles)
                 (doseq [subtitle subtitles]
                   (let [img-path (str output-dir card-title "-" subtitle ".png")]
                     (timbre/info "navigating to " subtitle)
                     (taxi/get-url (str "http://localhost:8001/visuals.html#!/" card-title "/" subtitle))
                     (Thread/sleep 1000)
                     (timbre/info "Writing " img-path)
                     (taxi/take-screenshot :file img-path)
                     (swap! file-names conj (str card-title ".png"))
                     (taxi/back))))
               (taxi/back)))
           (taxi/quit)
           @file-names)
         (catch Exception e (taxi/quit)
                            :FAILED)))

  (defn compare-cards
    "Compares screenshots in the expected and actual directories (generates the actual).
    Saves diff images in diff-dir. Throws an exception with a list of diffs."
    [sub-dir]
    (let [diffs        (atom [])
          expected-dir (str root-path sub-dir "/expected/")
          actual-dir   (str root-path sub-dir "/actual/")
          diff-dir     (str root-path sub-dir "/diff/")
          _            (touch-dir expected-dir)
          _            (touch-dir actual-dir)
          _            (touch-dir diff-dir)
          imgs         (capture-cards (str root-path sub-dir "/actual/"))]
      (timbre/info "Expected directory" expected-dir)
      (timbre/info "Actual directory" actual-dir)
      (timbre/info "Diff directory" diff-dir)
      (if (= :FAILED imgs)
        (reset! diffs [{:no-expectation "Image Capture failed. See log output."}])
        (doseq [img-name imgs]
          (let [expected-file    (io/as-file (str expected-dir img-name))
                expected-exists? (.exists expected-file)
                expected         (when expected-exists? (ImageIO/read ^File expected-file))
                actual           (ImageIO/read ^File (io/as-file (str actual-dir img-name)))
                differ           (ImageDiffer.)
                diff             (when expected-exists? (.makeDiff differ expected actual))]
            (when-not expected-exists?
              (swap! diffs conj {:img-name img-name :no-expectation "Be sure to copy verified actual images to expected directory."})
              (timbre/warn (str "UNABLE TO DIFF VISUAL REGRESSIONS for " img-name ". Check actual, then copy them to expected.")))
            (when (and diff (.hasDiff diff))
              (swap! diffs conj {:img-name img-name})
              (ImageIO/write (.getMarkedImage diff)
                "png"
                (io/as-file (str diff-dir img-name)))))))
      @diffs))

  (specification "Visual Regressions"
    (assertions "Are Clean"
      (compare-cards ".") => [])))
