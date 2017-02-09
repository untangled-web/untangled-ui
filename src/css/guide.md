### Getting Started

In your command line application, you will want to install the necessary tools
to start working on the UI framework. Make sure your other projects are at the
same level for synced releases.

#### Install

`npm install untangled-stylekit --save-dev`

#### Publishing

You will want to setup Artifactory specific NPM configuration with the following:

`npm version [patch|minor|major]`
`npm publish`

Now you can install simply by using npm: `npm i untangled-stylekit`

#### Development

For development of this project you will want to clone and run these commands

``` shell
npm i -g gulp
npm i
gulp watch
```

### index.html

Make sure to add these things to your layout file. Optionally, for legacy browser support of HTML5 and layout, you can import [modernizr](https://modernizr.com/)/[cdn](http://cdnjs.com/libraries/modernizr) into your head section.

```html
<html class="s-app"> <!-- App scope class-->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- This enables smaller devices to view this site responsively -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400italic,600,700"> <!-- This is the default webfont -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> <!-- This is the default icon webfont -->
  <link rel="stylesheet" href="/path/to/app.css"> <!-- This is the main stylesheet -->
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
