# Untangled Stylekit

This project is provided as an optional CSS toolkit for use with the Untangled Web Framework. It is generally applicable
to any web-based project (it simply results in CSS). More documentation and usage guides coming very soon.

## Quick start

In your command line application, you will want to install the necessary tools
to start working on the UI framework. Make sure your other projects are at the
same level for synced releases.

### Install

*Note:* Yarn only applies to you if your only using this framework, otherwise figwheel will install all the npm packages for you

- **Soon** Download the latest release
- Clone the repo: `git clone https://github.com/untangled-web/untangled-ui.git`
- Install [npm](https://www.npmjs.com/package/npm)
- Install with [yarn](https://yarnpkg.com)

### Development

If you're actively working on changing CSS rules in this library, you
will want to clone this repository and run these commands:

``` shell
npm i -g gulp
npm i
gulp watch
```

## Publishing

For now, I think a PR for version bump is good enough.

### index.html

Make sure to add these things to your layout file. Optionally, for legacy browser support of HTML5 and layout, you can import [modernizr](https://modernizr.com/)/[cdn](http://cdnjs.com/libraries/modernizr) into your head section.

```html
<html class="s-app"> <!-- App scope class-->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"> <!-- This enables smaller devices to view this site responsively -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic,600"> <!-- This is the default webfont -->
  <link rel="stylesheet" href="/path/to/main.css"> <!-- This is the main stylesheet -->
</head>
```

To continue on the path of layout, refer to the [example layout](#example-layout) section.

### Layers

This UI framework consists of multiple UI layers that serve their own purposes.

```example
<div class="u-row u-center">
<code>.utilities</code>
</div>
```

```example
<div class="u-row u-center">
  <a href="#elements">Elements</a>
```

```example
<div class="u-row u-center">
  <button class="c-button c-button--large">Components</button>
```

```example
<div class="u-row u-center">
  <span class="o-button-group__label"><strong>Objects</strong></span>
  <div class='o-button-group--toggle'>
    <button class='c-button c-button--small'>Component</button>
    <button class='c-button c-button--small c-button--text'>Element</button>
  </div>
</div>
```

### Syntax

Synopsis - Give developers more knowledge about how the classes behave in a non-relative sense: BEM + ITCSS = BEMIT

###### Sources

[More Transparent UI Code with Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)

[BEMIT: Taking the BEM Naming Convention a Step Further](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

#### Anatomy

```css
.namespace-block__element--modifier\@media { }
```

#### Namespaces

```css
/* Object */
.o-object-name[<element>/<modifier>] {}

/* Component */
.c-component-name[<element>/<modifier>] {}

/* Utility */
.u-utility-name {}

/* Theme */
.t-theme-name {}

/* Scope */
.s-scope-name {}

/* State */
.[is/has]-state {}

/* Hack */
._<namespace>hack-name {}

/* Javascript */
.js-component-name {}

/* Quality Assurance */
.qa-node-name {}
```

#### Responsive Suffixes

Breakpoints
```css
.o-object-name\@sm {}
.o-object-name\@md {}
.o-object-name\@lg {}
```

Media type
```css
.u-utility-name\@print {}
```
