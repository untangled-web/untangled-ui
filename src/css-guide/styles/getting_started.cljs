(ns styles.getting-started
  (:require [om.next :as om :refer-macros [defui]]
    ;; NOTE: This is where the interesting macros and such are at:
            [styles.util :as util
             :refer [to-cljs]
             :refer-macros [source->react defexample defarticle defview]]
            [om.dom :as dom]))

(defarticle intro
  "# Untangled UI

A styleguide of user interface patterns for web applications and websites built with a custom PostCSS preprocessor
rendered with ClojureScript.


#### History of this project

In a 3 month span the main codebase for this project was formed using PostCSS, Gulp and a vision for future spec compliance.
With over 25 components, this library has matured into a simplified collection that lines up with Google's Material Design.


## What is this for?

This project is meant to suppliment your next application or website with a wide array of components that are styled for
your HTML or Clojurescript project. If you are using Untangled UI, you will automatically get these styles by default.


## What problem does this solve?

This project sets you up with common and designed components and utilities to make crafting a new front-end UI as simple
an painless as possible. Each component has been researched and added with the intention that we are not duplicating
patterns and that they all serve a specific purpose.

## What design principles underlie this UI?

Based on the ITCSS methodology by Harry Roberts, this project is composed by settings, elements, components, objects and
utilities and produces a stylesheet that has a healthy inclining specificity graph.

## How does this UI accomplish it's goals?

Through well established coding practices and following the Material Design spec, we have a great blend of technology
and design that compliments any web project. This project is also coded with future spec compliant code for CSS that we
can expect to ship in browsers a decade from now. In short, you can write new styles in future code!

# Getting Started

Untangled UI comes in a few different flavors to fit your needs. Please choose a flavor and follow the guide to get started.

## Components

Browse our pre-built components to get a feel for how well all of them work together.

## CSS

You can get straight to the point and get a simple CSS file with only what you need.

## PostCSS

Style like a pro with future spec-compliant CSS that lets you write variables, applys and nesting in your CSS. This is
the easiest way to modify and extend the styles.
  ")


(defarticle settings-global
  "# Global
  This set of custom properties are global to your project, so you can make 'broad stoke' changes.

  ```css
  /* Typographical styles and baseline grid */
  --global-font-size: 1rem;
  --global-line-height: 32px;

  /* Standardized treatments */
  --global-duration: .1s;
  --global-margin: 8px;
  --global-rounded: 2px;
  --global-radial: 100px;
  --global-circular: 50%;

  /* z-index scale */
  --zIndex-switch: 1;
  --zIndex-sidebar: 2;
  --zIndex-search: 2;
  --zIndex-search--scrolled: calc(var(--zIndex-search) + 1);
  --zIndex-card: 2;
  --zIndex-card--pickedUp: calc(var(--zIndex-card) * 4);
  --zIndex-buttonRaised: 2;
  --zIndex-buttonRaised--pressed: calc(var(--zIndex-buttonRaised) * 4);
  --zIndex-loader: 3;
  --zIndex-appBar: 4;
  --zIndex-snackbar: 6;
  --zIndex-buttonFloat: 6;
  --zIndex-buttonFloat--pressed: calc(var(--zIndex-buttonFloat) * 2);
  --zIndex-bottomNav: 8;
  --zIndex-menu: 8;
  --zIndex-subMenu: calc(var(--zIndex-menu) + 1);
  --zIndex-backdrop: -1;
  --zIndex-modal: 16;
  --zIndex-drawer: 16;
  --zIndex-picker: 24;
  --zIndex-dialog: 24;

  /* Framed sizes */
  --frame-quarter: calc(var(--global-line-height) / 4); /* 8px */
  --frame-third: calc(var(--global-line-height) / 3); /* 10.6px */
  --frame-half: calc(var(--global-line-height) / 2); /* 16px or 1em */
  --frame: var(--global-line-height); /* 32px */
  --frame-double: calc(var(--global-line-height) * 2); /* 64px */
  --frame-triple: calc(var(--global-line-height) * 3); /* 96px */
  ```

    #### BEMIT Healthcheck

    Enable a new layer of outlines around everything on the DOM that describes and identifies different types of selectors.

    ```html
    <html class='s-healthcheck'>
    ```


    With this, we can write styles with built-in assertions that point out certain elements that lack required a11y aria properties.

    ```css
    .c-input:not([aria-label]) {
      @apply --assert-selector;
    }
    ```

    #### Markup Lint

    Enable another layout of outlines to highlight anything out of date or mixed up in your markup.

    ```html
    <html class='s-markuplint'>
    ```
    ")



(def sections
  (vec [;; NOTE: :examples is a list of example names, rendered in order given
        {:id :settings-config :title "What is this?" :examples [intro]}
        {:id :settings-global :title "Global" :examples [settings-global]}]))

