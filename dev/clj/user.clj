(ns clj.user
  (:require
    [clojure.set :as set]
    [clojure.tools.namespace.repl :refer [refresh set-refresh-dirs]]
    [figwheel-sidecar.system :as fig]
    [clj.upload-server :as server]
    [com.stuartsierra.component :as component]))

(set-refresh-dirs "dev" )

;;FIGWHEEL
(def figwheel (atom nil))

(defn start-figwheel
  "Start Figwheel on the given builds, or defaults to build-ids in `figwheel-config`."
  ([]
   (let [props (System/getProperties)
         figwheel-config (fig/fetch-config)
         all-builds (->> figwheel-config :data :all-builds (mapv :id))]
     (start-figwheel (keys (select-keys props all-builds)))))
  ([build-ids]
   (let [figwheel-config (fig/fetch-config)
         default-build-ids (-> figwheel-config :data :build-ids)
         build-ids (if (empty? build-ids) default-build-ids build-ids)
         preferred-config (assoc-in figwheel-config [:data :build-ids] build-ids)]
     (reset! figwheel (component/system-map
                        :figwheel-system (fig/figwheel-system preferred-config)
                        :css-watcher (fig/css-watcher {:watch-paths ["resources/public/css"]})))
     (println "STARTING FIGWHEEL ON BUILDS: " build-ids)
     (swap! figwheel component/start)
     (fig/cljs-repl (:figwheel-system @figwheel)))))

(def go server/go)
(def reset server/reset)

