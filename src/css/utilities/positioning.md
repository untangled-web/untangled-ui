#### Fixed Classes

```html
<div class="u-fixed--top"></div>
<div class="u-fixed--top-center"></div>
<div class="u-fixed--top-right"></div>
<div class="u-fixed--top-left"></div>
<div class="u-fixed--bottom"></div>
<div class="u-fixed--bottom-right"></div>
<div class="u-fixed--bottom-left"></div>
<div class="u-fixed--middle"></div>
<div class="u-fixed--middle-center"></div>
```

#### Absolute Classes

```html
<div class="u-absolute--top"></div>
<div class="u-absolute--top-right"></div>
<div class="u-absolute--top-left"></div>
<div class="u-absolute--bottom"></div>
<div class="u-absolute--bottom-right"></div>
<div class="u-absolute--bottom-left"></div>
<div class="u-absolute--middle"></div>
<div class="u-absolute--middle-center"></div>
```

#### Position

You can directionally express which position you want to specify using these conventions:

`bottom | bottom-left | bottom-right | middle | top | top-left | top-right`

``` css
/* position [ attachment, type ] */
@apply --position-top;
position: fixed;
```

#### Rotate

```html
<div class="u-rotate--cw">Rotate right 90 degrees</div>
<div class="u-rotate--ccw">Rotate left -90 degrees</div>
```