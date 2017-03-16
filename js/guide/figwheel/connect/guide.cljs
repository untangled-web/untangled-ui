(ns figwheel.connect.guide (:require [devcards.core :include-macros true] [untangled.ui.guide-ui] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:devcards true, :build-id "guide", :websocket-url "ws://localhost:8001/figwheel-ws"})
(devcards.core/start-devcard-ui!)

