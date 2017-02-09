#### Font Scale

```example
<div style="font-size: 4.7rem;">X-Large (75.2px)</div>
<br>
<code>.u-font-size--xlarge</code>
<p></p>
<div style="font-size: 3rem;">Large (48px)</div>
<br>
<code>.u-font-size--large</code>
<p></p>
<div style="font-size: 2.5rem;">Semi-Large (40px)</div>
<br>
<code>.u-font-size--semi-large</code>
<p></p>
<div style="font-size: 2rem;">Medium (32px)</div>
<br>
<code>.u-font-size--medium</code>
<p></p>
<div style="font-size: 1.5rem;">Semi-Medium (24px)</div>
<br>
<code>.u-font-size--semi-medium</code>
<p></p>
<div style="font-size: 1.25rem;">Normal Plus (20px)</div>
<br>
<code>.u-font-size--normal-plus</code>
<p></p>
<div style="font-size: 1.125rem;">Normal (18px)</div>
<br>
<code>.u-font-size--normal</code>
<p></p>
<div style="font-size: 1rem;">Semi-Normal (16px)</div>
<br>
<code>.u-font-size--semi-normal</code>
<p></p>
<div style="font-size: .875rem;">Small (14px)</div>
<br>
<code>.u-font-size--small</code>
<p></p>
<div style="font-size: .75rem;">Tiny (12px)</div>
<br>
<code>.u-font-size--tiny</code>
```

#### No Bullet

You can remove your list bullet from any `<li>` element.

```example
<div class="u-row">
  <div class="u-column u-push--1">
    <h1>Before</h1>
    <ul class="is-negative">
      <li>Bullet</li>
      <li>Bullet</li>
      <li>Bullet</li>
    </ul>
  </div>

  <div class="u-column">
    <h1>After</h1>
    <ul class="is-positive">
      <li>Bullet</li>
      <li>Bullet</li>
      <li class="u-no-bullet">No Bullet</li>
    </ul>
  </div>
</div>
```
```html
<li class="u-no-bullet"> ... </li>
```

#### No Bullets

Display a list without bullets in any `<ul>` or `<ol>` element.

```example
<div class="u-row">
  <div class="u-column u-push--1">
    <h1>Before</h1>
    <ul class="is-negative">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>

  <div class="u-column">
  <h1>After</h1>
  <ul class="u-no-bullets is-positive">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  </div>
</div>
```
```html
<ul class="u-no-bullets"> ... </ul>
```

#### Ellipsis

Truncate longer strings of text to avoid any layout overflows using ellipsis.

```example
<h1>Before</h1>
<p class="is-negative">This is a very long string of text that will get cut off by exactly three dots forming an ellipsis character to truncate this text.</p>

<h1>After</h1>
<p class="u-ellipsis is-positive">This is a very long string of text that will get cut off by exactly three dots forming an ellipsis character to truncate this text.</p>
```
```html
<p class="u-ellipsis"> ... </p>
```

#### Break Word

Prevent overflowing long words from messing up your layout by forcing justified text that breaks before the word is over.

```example
<h1>Before</h1>
<p class="is-negative">SupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshious</p>

<h1>After</h1>
<p class="u-break-word is-positive">SupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshiousSupercalifragalisticexpialadoshious</p>
```
```html
<p class="u-break-word"> ... </p>
```

#### Customize

``` css
--fontFamily--sans: 'Source Sans Pro', sans-serif;
--fontFamily--monospaced: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
--fontFamily-page: var(--fontFamily--sans);
--fontSize--tiny: .75rem;
--fontSize--small: .875rem;
--fontSize--semiNormal: 1rem;
--fontSize--normal: 1.125rem;
--fontSize--normalPlus: 1.25rem;
--fontSize--semiMedium: 1.5rem;
--fontSize--medium: 2rem;
--fontSize--semiLarge: 2.5rem;
--fontSize--large: 3rem;
--fontSize--xlarge: 4.7rem;
--fontSize-page: 100%;
--fontSize-heading: var(--fontSize--normalPlus);
--fontWeight-page: 400;
--fontWeight-page--bold: 800;
--lineHeight-page: 1;
--lineHeight-paragraph: 1.4;
--lineHeight-heading: 1.3;
```
