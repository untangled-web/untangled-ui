The main layout depends on the `.s-app` class to render a holy grail layout that scales down nicely to mobile.

[Use the master layout CodePen](http://codepen.io/stephenway/pen/EKORdr)

<svg width="725" height="465" viewBox="0 0 725 465" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>Artboard 1</title><desc>Created with Sketch.</desc><g sketch:type="MSArtboardGroup" fill="none"><g id="Group" sketch:type="MSLayerGroup"><path fill="#047" sketch:type="MSShapeGroup" d="M26 31h356v44h-356z"/><path fill="#cef" sketch:type="MSShapeGroup" d="M26 80h77v310h-77z"/><path fill="#FCFCF9" sketch:type="MSShapeGroup" d="M109 80h273v310h-273z"/><path fill="#EEEEE7" sketch:type="MSShapeGroup" d="M26 395h356v44h-356z"/></g><g sketch:type="MSLayerGroup"><path fill="#047" sketch:type="MSShapeGroup" d="M518 31h181.672v44h-181.672z"/><path fill="#FCFCF9" sketch:type="MSShapeGroup" d="M518 80h181.672v262h-181.672z"/><path fill="#EEEEE7" sketch:type="MSShapeGroup" d="M518 395h181.672v44h-181.672z"/><path fill="#CAEEFF" sketch:type="MSShapeGroup" d="M518 346h181.672v44h-181.672z"/></g><path d="M435 248v-30l30 15-30 15z" fill="#EEEEE7" sketch:type="MSShapeGroup"/></g></svg>

More on this is available at Mozilla Developer Network's [Holy Grail Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes#Holy_Grail_Layout_example)

#### Example Layout

```html
<body class="s-app__body">
  <div class="s-app__view">
    <header class="o-header"> ... </header>
    <main class="o-main">
      <nav class="o-nav"> ... </nav>
      <article class="o-article"> ... </article> 
    </main>
    <footer class="o-footer"> ... </footer>
  </div>
</body>
```