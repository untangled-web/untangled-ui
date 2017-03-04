(ns clj.upload-server
  (:require [taoensso.timbre :as timbre]
            [om.next.impl.parser :as op]
            [untangled.server.core :as core]
            [om.next :as om]
            om.next.server
            [ring.util.request :as ru]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.gzip :refer [wrap-gzip]]
            [ring.middleware.not-modified :refer [wrap-not-modified]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.multipart-params :refer [wrap-multipart-params]]
            [ring.middleware.resource :refer [wrap-resource]]
            [org.httpkit.server :refer [run-server]]
            [clojure.tools.namespace.repl :refer [disable-reload! refresh clear set-refresh-dirs]]
            [com.stuartsierra.component :as component]
            [taoensso.timbre :as timbre]
            [untangled.server.impl.middleware :as middleware]
            [clojure.string :as str]
            [ring.util.response :as resp]
            [cognitect.transit :as transit]))

; A Test server for trying out file upload

(def http-kit-opts
  [:ip :port :thread :worker-name-prefix
   :queue-size :max-body :max-line])

(defrecord WebServer [port handler server]
  component/Lifecycle
  (start [this]
    (try
      (let [server-opts    (select-keys (-> this :config :value) http-kit-opts)
            port           (:port server-opts)
            started-server (run-server (:middleware handler) server-opts)]
        (timbre/info "Web server started successfully. With options:" server-opts)
        (assoc this :port port :server started-server))
      (catch Exception e
        (timbre/fatal "Failed to start web server " e)
        (throw e))))
  (stop [this]
    (if-not server this
                   (do (server)
                       (timbre/info "web server stopped.")
                       (assoc this :server nil)))))

(defn make-web-server
  "Builds a web server with an optional argument that
   specifies which component to get `:middleware` from,
   defaults to `:handler`."
  [& [handler]]
  (component/using
    (component/using
      (map->WebServer {})
      [:config])
    {:handler (or handler :handler)}))

(defn logging-mutate [env k params]
  (timbre/info "Mutation Request: " k)
  {})

(defn logging-query [{:keys [ast] :as env} k params]
  (timbre/info "Query: " (op/ast->expr ast))
  {})


; This is both a server module AND hooks into the Om parser for the incoming /api read/mutate requests. The
; modular server support lets you chain as many of these together as you want, allowing you to define
; reusable Om server components.
(defrecord ApiHandler []
  core/Module
  (system-key [this] ::api)
  (components [this] {})
  core/APIHandler
  (api-read [this] logging-query)
  (api-mutate [this] logging-mutate))

(defn build-api-handler [& [deps]]
  "`deps`: Vector of keys passed as arguments to be
  included as dependecies in `env`."
  (component/using
    (map->ApiHandler {}) deps))

(defn MIDDLEWARE [handler component]
  ((get component :middleware) handler))

(defn not-found [req]
  {:status  404
   :headers {"Content-Type" "text/plain"}
   :body    "Resource not found."})

(defrecord FileUploadComponent [tmp]
  component/Lifecycle
  (start [this] this)
  (stop [this] this))

(defn is-file-upload? [req]
  (= (ru/path-info req) "/file-upload"))


(defn- read-transit [value]
  (let [rdr (om.next.server/reader value)]
    (try
      (transit/read rdr)
      (catch Exception ex nil))))

(defn handle-file-upload [req]
  (let [{:keys [filename content-type size ^java.io.File tempfile]} (get-in req [:params "file"])
        id (get-in req [:params "id"])]
    (timbre/info "File upload: " id filename " (" size " bytes) stored in " (.getAbsolutePath tempfile))
    (-> {}
      (ring.util.response/response)
      (resp/content-type (format "application/transit+json; charset=utf-8")))))

(defn wrap-file-upload [h]
  (fn [r]
    (if (is-file-upload? r)
      (handle-file-upload r)
      (h r))))

(defrecord CustomMiddleware [middleware api-handler]
  component/Lifecycle
  (stop [this] (dissoc this :middleware))
  (start [this]
    (assoc this :middleware
                (-> not-found
                  (MIDDLEWARE api-handler)
                  wrap-file-upload
                  ;; TRANSIT
                  middleware/wrap-transit-params
                  middleware/wrap-transit-response
                  ;; RESOURCES
                  (wrap-resource "public")
                  ;; HELPERS
                  wrap-content-type
                  wrap-not-modified
                  wrap-params
                  wrap-multipart-params
                  wrap-gzip))))

; IMPORTANT: You want to inject the built-in API handler (which is where modular API handlers get chained)
(defn build-middleware []
  (component/using
    (map->CustomMiddleware {})
    {:api-handler ::core/api-handler}))

(defn make-system [config-path]
  (core/untangled-system
    {:components {:config      (core/new-config config-path)
                  ::middleware (build-middleware)
                  :web-server  (core/make-web-server ::middleware)}
     :modules    [(build-api-handler [])]}))

(defonce system (atom nil))

(defn init
  "Create a web server from configurations. Use `start` to start it."
  []
  (reset! system (make-system "/usr/local/etc/app.edn")))

(defn start "Start (an already initialized) web server." [] (swap! system component/start))

(defn stop "Stop the running web server." []
  (when @system
    (swap! system component/stop)
    (reset! system nil)))

(defn go "Load the overall web server system and start it." []
  (init)
  (start))

(defn reset
  "Stop the web server, refresh all namespace source code from disk, then restart the web server."
  []
  (stop)
  (refresh :after 'clj.upload-server/go))
