Grids are the bread and butter of web design, this one is based on flexbox. Needless to say you will find this grid system a joy to use. [Flexbox Mythbusting](http://jonyablonski.com/2015/flexbox-myth-busting/)

#### New to grids?

Check out my presentation on CSS Grids can help you, complete with a [slide deck](https://speakerdeck.com/stephenway/css-grids-can-help-you), and a [CodePen](http://codepen.io/stephenway/pen/dMKzvy) to play with complex grid layouts.

#### 12 Columns

We compose our grid off 12 vertical columns that are equal in space, and can span from one to all twelve columns in length.

```example
<div class="u-row">
  <div class="u-column--1"><div class="box-row box-tall">1</div></div>
  <div class="u-column--1"><div class="box-row box-tall">2</div></div>
  <div class="u-column--1"><div class="box-row box-tall">3</div></div>
  <div class="u-column--1"><div class="box-row box-tall">4</div></div>
  <div class="u-column--1"><div class="box-row box-tall">5</div></div>
  <div class="u-column--1"><div class="box-row box-tall">6</div></div>
  <div class="u-column--1"><div class="box-row box-tall">7</div></div>
  <div class="u-column--1"><div class="box-row box-tall">8</div></div>
  <div class="u-column--1"><div class="box-row box-tall">9</div></div>
  <div class="u-column--1"><div class="box-row box-tall">10</div></div>
  <div class="u-column--1"><div class="box-row box-tall">11</div></div>
  <div class="u-column--1"><div class="box-row box-tall">12</div></div>
</div>
```
```html
<div class="u-row">
  <div class="u-column--1">...</div>
  <div class="u-column--1">...</div>
  <div class="u-column--1">...</div>
  ...
</div>
```

#### Learn

This group of select boxes will show you how columns adapt to their siblings when they occupy more or less columns.

```example
<div class="u-row o-column-switcher-row">
  <div class="u-column--4">
    <select class="o-column-switcher">
      <option>u-column--1</option>
      <option>u-column--2</option>
      <option>u-column--3</option>
      <option>u-column--4</option>
      <option>u-column--5</option>
      <option>u-column--6</option>
      <option>u-column--7</option>
      <option>u-column--8</option>
      <option>u-column--9</option>
      <option>u-column--10</option>
      <option>u-column--11</option>
      <option>u-column--12</option>
    </select>
  </div>
  <div class="u-column--8">
    <select class="o-column-switcher">
      <option>u-column--1</option>
      <option>u-column--2</option>
      <option>u-column--3</option>
      <option>u-column--4</option>
      <option>u-column--5</option>
      <option>u-column--6</option>
      <option>u-column--7</option>
      <option>u-column--8</option>
      <option>u-column--9</option>
      <option>u-column--10</option>
      <option>u-column--11</option>
      <option>u-column--12</option>
    </select>
  </div>
</div>
```

### Autopilot

If you don't have time to think about how wide things should be, don't specify, just say `.u-column`.

```example
<div class="u-row">
  <div class="u-column"><div class="box-row">auto</div></div>
  <div class="u-column"><div class="box-row">auto</div></div>
</div>
<div class="u-row">
  <div class="u-column"><div class="box-row">auto</div></div>
  <div class="u-column"><div class="box-row">auto</div></div>
  <div class="u-column"><div class="box-row">auto</div></div>
</div>
```

```html
<div class="u-row">
  <div class="u-column">...</div>
  <div class="u-column">...</div>
</div>
```

#### Responsive

Media appended classes let you create simple or complex grid systems.

```example
<div class="u-row">
  <div class="u-column--3@sm u-column--2@md u-column--1@lg">
    <div class="box-row">
    <span class="u-show@sm">3</span>
    <span class="u-show@md">2</span>
    <span class="u-show@lg">1</span>
    </div>
  </div>
  <div class="u-column--6@sm u-column--8@md u-column--10@lg">
    <div class="box-row">
    <span class="u-show@sm">6</span>
    <span class="u-show@md">8</span>
    <span class="u-show@lg">10</span>
    </div>
  </div>
  <div class="u-column--3@sm u-column--2@md u-column--1@lg">
    <div class="box-row">
    <span class="u-show@sm">3</span>
    <span class="u-show@md">2</span>
    <span class="u-show@lg">1</span>
    </div>
  </div>
</div>

<div class="u-row">
<div class="u-column--3@sm u-column--2@md u-column--1@lg">
<div class="box-row">
<span class="u-show@sm">3</span>
<span class="u-show@md">2</span>
<span class="u-show@lg">1</span>
</div>
</div>
<div class="u-column--9@sm u-column--10@md u-column--11@lg">
<div class="box-row">
<span class="u-show@sm">9</span>
<span class="u-show@md">10</span>
<span class="u-show@lg">11</span>
</div>
</div>
</div>

<div class="u-row">
<div class="u-column--6@sm u-column--8@md u-column--10@lg">
<div class="box-row">
<span class="u-show@sm">6</span>
<span class="u-show@md">8</span>
<span class="u-show@lg">10</span>
</div>
</div>
<div class="u-column--6@sm u-column--4@md u-column--2@lg">
<div class="box-row">
<span class="u-show@sm">6</span>
<span class="u-show@md">4</span>
<span class="u-show@lg">2</span>
</div>
</div>
</div>
```

``` html
<div class="u-row">
<div class="u-column--8@sm u-column--6@md u-column--4@lg">...</div>
</div>
```

## Fluid

```example
<div class="u-row">
<div class="u-column--12">
<div class="box-row"> <span>12</span> </div>
</div>
</div>

<div class="u-row">
<div class="u-column--1">
<div class="box-row"> <span>1</span> </div>
</div>
<div class="u-column--11">
<div class="box-row"> <span>11</span> </div>
</div>
</div>

<div class="u-row">
<div class="u-column--2">
<div class="box-row"> <span>2</span> </div>
</div>
<div class="u-column--10">
<div class="box-row"> <span>10</span> </div>
</div>
</div>

<div class="u-row">
<div class="u-column--3">
<div class="box-row"> <span>3</span> </div>
</div>
<div class="u-column--9">
<div class="box-row"> <span>9</span> </div>
</div>
</div>

<div class="u-row">
<div class="u-column--4">
<div class="box-row"> <span>4</span> </div>
</div>
<div class="u-column--8">
<div class="box-row"> <span>8</span> </div>
</div>
</div>

<div class="u-row">
<div class="u-column--5">
<div class="box-row"> <span>5</span> </div>
</div>
<div class="u-column--7">
<div class="box-row"> <span>7</span> </div>
</div>
</div>

<div class="u-row">
<div class="u-column--6">
<div class="box-row"> <span>6</span> </div>
</div>
<div class="u-column--6">
<div class="box-row"> <span>6</span> </div>
</div>
</div>

<div class="u-row">
<div class="u-column--7">
<div class="box-row"> <span>7</span> </div>
</div>
<div class="u-column--5">
<div class="box-row"> <span>5</span> </div>
</div>
</div>

<div class="u-row">
<div class="u-column--8">
<div class="box-row"> <span>8</span> </div>
</div>
<div class="u-column--4">
<div class="box-row"> <span>4</span> </div>
</div>
</div>

<div class="u-row">
<div class="u-column--9">
<div class="box-row"> <span>9</span> </div>
</div>
<div class="u-column--3">
<div class="box-row"> <span>3</span> </div>
</div>
</div>

<div class="u-row">
<div class="u-column--10">
<div class="box-row"> <span>10</span> </div>
</div>
<div class="u-column--2">
<div class="box-row"> <span>2</span> </div>
</div>
</div>

<div class="u-row">
<div class="u-column--11">
<div class="box-row"> <span>11</span> </div>
</div>
<div class="u-column--1">
<div class="box-row"> <span>1</span> </div>
</div>
</div>
```

### Column Push

Move back and forth any number of columns wide you need to push the position of your column within the grid.

```example
<div class="u-row"> <div class="u-column--1 u-push--11">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 11</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--2 u-push--10">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 10</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--3 u-push--9">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 9</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--4 u-push--8">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 8</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--5 u-push--7">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 7</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--6 u-push--6">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 6</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--7 u-push--5">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 5</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--8 u-push--4">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 4</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--9 u-push--3">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 3</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--10 u-push--2">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 2</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--11 u-push--1">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 1</span> </div>
</div> </div>
```
``` html
<div class="row">
<div class="u-column--1 u-push--11">...</div>
</div>
```

### Column Pull

Move back and forth any number of columns wide you need to pull the position of your column within the grid.

```example
<div class="u-row"> <div class="u-column--1 u-pull--11">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 11</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--2 u-pull--10">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 10</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--3 u-pull--9">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 9</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--4 u-pull--8">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 8</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--5 u-pull--7">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 7</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--6 u-pull--6">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 6</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--7 u-pull--5">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 5</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--8 u-pull--4">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 4</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--9 u-pull--3">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 3</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--10 u-pull--2">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 2</span> </div>
</div> </div>

<div class="u-row"> <div class="u-column--11 u-pull--1">
<div class="box-row"> <span><i class="c-icon-right-dir"></i> 1</span> </div>
</div> </div>
```
``` html
<div class="row">
<div class="u-column--1 u-pull--11">...</div>
</div>
```

```example
<div class="u-row">
<div class="u-column--2 u-push--5 u-pull--5"><div class="box-row">.u-column--2<br>.u-push--5<br>.u-pull--5</div></div>
<div class="u-column--4 u-push--4 u-pull--4"><div class="box-row">.u-column--4<br>.u-push--4.u-pull--4</div></div>
<div class="u-column--6 u-push--3 u-pull--3"><div class="box-row">.u-column--6.u-push--3.u-pull--3</div></div>
<div class="u-column--8 u-push--2 u-pull--2"><div class="box-row">.u-column--8.u-push--2.u-pull--2</div></div>
<div class="u-column--10 u-push--1 u-pull--1"><div class="box-row">.u-column--10.u-push--1.u-pull--1</div></div>
</div>
```

### Nesting

You can setup any number of levels of grids deep you would like.

```example
<div class="u-row">
<div class="u-column--4">
<div class="box box-container">
<div class="u-row">
<div class="u-column--12">
<div class="box-first box-container">
<div class="u-row">
<div class="u-column--6">
<div class="box-nested"></div>
</div>
<div class="u-column--6">
<div class="box-nested"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="u-column--8">
<div class="box box-container">
<div class="u-row">
<div class="u-column--12">
<div class="box-first box-container">
<div class="u-row">
<div class="u-column--3">
<div class="box-nested"></div>
</div>
<div class="u-column--6">
<div class="box-nested"></div>
</div>
<div class="u-column--3">
<div class="box-nested"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
```

### Align

Shortcuts to placing your elements left or right.

###### START

```example
<div class="u-row">
<div class="u-column--12">
<div class="box box-container">
<div class="u-row u-start">
<div class="u-column--6">
<div class="box-nested">
.u-row.u-start
</div>
</div>
</div>
</div>
</div>
</div>
```

###### CENTER

```example
<div class="u-row">
<div class="u-column--12">
<div class="box box-container">
<div class="u-row u-center">
<div class="u-column--8">
<div class="box-nested">
.u-row.u-center
</div>
</div>
</div>
</div>
</div>
</div>
```

###### END

```example
<div class="u-row">
<div class="u-column--12">
<div class="box box-container">
<div class="u-row u-end">
<div class="u-column--4">
<div class="box-nested">
.u-row.u-end
</div>
</div>
</div>
</div>
</div>
</div>
```

###### TOP

```example
<div class="u-row u-top">
<div class="u-column--6">
<div class="box--large">.u-row.u-top</div>
</div>
<div class="u-column--6">
<div class="box"></div>
</div>
</div>
```

###### MIDDLE

```example
<div class="u-row u-middle">
<div class="u-column--6">
<div class="box--large">.u-row.u-middle</div>
</div>
<div class="u-column--6">
<div class="box"></div>
</div>
</div>
```

###### BOTTOM

```example
<div class="u-row u-bottom">
<div class="u-column--6">
<div class="box--large">.u-row.u-bottom</div>
</div>
<div class="u-column--6">
<div class="box"></div>
</div>
</div>
```

### Distributed

Evenly distribute objects into a row or column.

##### AROUND

```example
<div class="u-row">
<div class="u-column--12">
<div class="box box-container">
<div class="u-row u-around">
<div class="u-column--2">
<div class="box-nested">2</div>
</div>
<div class="u-column--2">
<div class="box-nested">2</div>
</div>
<div class="u-column--2">
<div class="box-nested">2</div>
</div>
</div>
</div>
</div>
</div>
```
``` html
<div class="u-row u-around">...</div>
```

##### BETWEEN

```example
<div class="u-row">
<div class="u-column--12">
<div class="box box-container">
<div class="u-row u-between">
<div class="u-column--2">
<div class="box-nested">2</div>
</div>
<div class="u-column--2">
<div class="box-nested">2</div>
</div>
<div class="u-column--2">
<div class="box-nested">2</div>
</div>
</div>
</div>
</div>
</div>
```
``` html
<div class="u-row u-between">...</div>
```

### Ordering

Manipulate the order of objects with special column classes.

###### FIRST

```example
<div class="u-row">
<div class="u-column--12">
<div class="box box-container">
<div class="u-row">
<div class="u-column--2">
<div class="box-first">1</div>
</div>
<div class="u-column--2">
<div class="box-first">2</div>
</div>
<div class="u-column--2">
<div class="box-first">3</div>
</div>
<div class="u-column--2">
<div class="box-first">4</div>
</div>
<div class="u-column--2">
<div class="box-first">5</div>
</div>
<div class="u-column--2 u-first">
<div class="box-nested">6</div>
</div>
</div>
</div>
</div>
</div>
```
``` html
<div class="u-column--2 u-first">...</div>
```

###### LAST

```example
<div class="u-row">
<div class="u-column--12">
<div class="box box-container">
<div class="u-row">
<div class="u-column--2 u-last">
<div class="box-nested">1</div>
</div>
<div class="u-column--2">
<div class="box-first">2</div>
</div>
<div class="u-column--2">
<div class="box-first">3</div>
</div>
<div class="u-column--2">
<div class="box-first">4</div>
</div>
<div class="u-column--2">
<div class="box-first">5</div>
</div>
<div class="u-column--2">
<div class="box-first">6</div>
</div>
</div>
</div>
</div>
</div>
```
``` html
<div class="u-column--2 u-last">...</div>
```

###### REVERSE

```example
<div class="u-row">
<div class="u-column--12">
<div class="box box-container">
<div class="u-row u-row--reverse">
<div class="u-column--2">
<div class="box-first">1</div>
</div>
<div class="u-column--2">
<div class="box-first">2</div>
</div>
<div class="u-column--2">
<div class="box-first">3</div>
</div>
<div class="u-column--2">
<div class="box-first">4</div>
</div>
<div class="u-column--2">
<div class="box-first">5</div>
</div>
<div class="u-column--2">
<div class="box-first">6</div>
</div>
</div>
</div>
</div>
</div>
```
``` html
<div class="u-row u-row--reverse">...</div>
```

## Media

Responsive breakpoints for styling for different devices and groups of devices. We divide devices up by `14em` units starting at `34em`. Using the `em` unit has been a proven browser compatible method of rendering media queries consistently.

#### Flexible Breakpoints

Target devices of a certain minimum width and everything larger than. If your writing mobile-first, then you would need to specify your desktop styles in a `@media (--lg-up)` breakpoint.

```css
/* For tiny devices you don't need to specify a media query. */

/* Small devices (phones, 34em and up) */
@media (--sm-up) { ... }

/* Medium devices (tablets, 48em and up) */
@media (--md-up) { ... }

/* Large devices (computers, 62em and up) */
@media (--lg-up) { ... }

/* X-Large devices (large computers, 75em and up) */
@media (--xl-up) { ... }
```

#### Fixed Breakpoints

Target just one device breakpoint at a time. These should be used sparingly for fine tuned adjustments.

```css
/* Small devices (phones, 0em to 48em) */
@media (--sm) { ... }

/* Medium devices (tablets, 48em to 62em) */
@media (--md) { ... }

/* Large devices (computers, 62em to 75em) */
@media (--lg) { ... }

/* X-Large devices (large computers, 75em to 90em) */
@media (--xl) { ... }
```


#### Orientation Breakpoints

Target devices that have been rotated into a particular screen orientation.

```css
/* Devices in landscape orientation */
@media (--landscape) { ... }

/* Devices in portrait orientation */
@media (--portrait) { ... }
```

#### Media Type Breakpoints

Target special media types including:

`all | aural | braille | handheld | print | projection | screen | tty | tv | embossed`

```css
/* Screens */
@media only screen { ... }

/* Printers */
@media print { ... }
```

More on this over at Mozilla Developer Network's [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

#### Classnames

You will also notice some classes are appended with `@sm`, `@md`, `@lg`, and `@print` for the same purposes.

See [syntax](#syntax) and [responsive-suffixes](#responsive-suffixes) sections for more info.
