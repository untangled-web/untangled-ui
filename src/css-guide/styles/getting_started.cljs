(ns styles.getting-started
  (:require [om.next :as om :refer-macros [defui]]
    ;; NOTE: This is where the interesting macros and such are at:
            [styles.util :as util
             :refer [to-cljs]
             :refer-macros [source->react defexample defarticle]]
            [om.dom :as dom]))

(defarticle intro
"# What is this?

A styleguide of user interface patterns for web applications and websites built with a custom PostCSS preprocessor
rendered with ClojureScript.



#### History of this project



## What is this for?

This project is meant to suppliment your next project with a wide array of components that are styled for your HTML or
Clojurescript project. If you are using Untangled UI, you will automatically get these styles by default.

## What problem does this solve?



## What design principles underlie this UI?

Based on the ITCSS methodology by Harry Roberts, this project is composed by settings, elements, components, objects and
utilities and produces a stylesheet that has a healthy inclining specificity graph.

## How does this UI accomplish it's goals?

# Getting Started

Stylekit comes in a few different flavors to fit your needs. Please choose a flavor and follow the guide to get started.

## Components

Browse our pre-built components to get a feel for how well all of them work together.

## CSS

You can get straight to the point and get a simple CSS file with only what you need.

## PostCSS

Style like a pro with future spec-compliant CSS that lets you write variables, applys and nesting in your CSS. This is
the easiest way to modify and extend the styles.
  ")

(def sections
  (vec [;; NOTE: :examples is a list of example names, rendered in order given
        {:id :settings-config :title "What is Stylekit?" :examples [intro]}
        ]))

