This is a data-attribute based component, so you will only be able to use it if you add a `data-tooltip` into your element.

#### Positions

For positioning, use `data-tooltip-pos` data-attribute with one of these values: `up`, `down`, `right`, `left`

```example
<!-- Yes I hacked the height this way, and that's okay. -->
<br><br><br><br><br><br>
<div class="u-text-center">
<button class="c-button c-button--large" data-tooltip="Hey!" data-tooltip-pos="up">Hover me!</button>
</div>
```
```html
<button data-tooltip="Hey!" data-tooltip-pos="up">Hover me!</button>
```

```example
<div class="u-text-center">
<button class="c-button c-button--large" data-tooltip="Hey!" data-tooltip-pos="left">Hover me!</button>
</div>
```
```html
<button data-tooltip="Hey!" data-tooltip-pos="left">Hover me!</button>
```

```example
<div class="u-text-center">
<button class="c-button c-button--large" data-tooltip="Hey!" data-tooltip-pos="right">Hover me!</button>
</div>
```
```html
<button data-tooltip="Hey!" data-tooltip-pos="right">Hover me!</button>
```

```example
<div class="u-text-center">
<button class="c-button c-button--large" data-tooltip="Hey!" data-tooltip-pos="down">Hover me!</button>
</div>
<br><br><br><br><br><br>
```
```html
<button data-tooltip="Hey!" data-tooltip-pos="down">Hover me!</button>
```

#### Length

```example
<br><br><br><br><br><br>
<div class="u-text-center">
<button class="c-button c-button--large" data-tooltip="Hey!" data-tooltip-length="small">Small</button>
</div>
```
```html
<button data-tooltip="Hey!" data-tooltip-length="small">Small</button>
```

```example
<br><br><br><br><br><br>
<div class="u-text-center">
<button class="c-button c-button--large" data-tooltip="Now that's a super big text we have over here right? Lorem ipsum dolor sit I'm done." data-tooltip-length="medium">Medium</button>
</div>
```
```html
<button data-tooltip="Now that's a super big text we have over here right? Lorem ipsum dolor sit I'm done." data-tooltip-length="medium">Medium</button>
```

```example
<br><br><br><br><br><br><br><br><br>
<div class="u-text-center">
<button class="c-button c-button--large" data-tooltip="What about something really big? This may surpass your window dimensions. Imagine you're on that boring class with that boring teacher and you didn't slept so well last night. Suddenly you're sleeping in class. Can you believe it?!" data-tooltip-length="large">Large</button>
</div>
```
```html
<button data-tooltip="What about something really big? This may surpass your window dimensions. Imagine you're on that boring class with that boring teacher and you didn't slept so well last night. Suddenly you're sleeping in class. Can you believe it?!" data-tooltip-length="large">Large</button>
```

```example
<br><br><br><br><br><br><br><br><br>
<div class="u-text-center">
<button class="c-button c-button--large" data-tooltip="What about something really big? This may surpass your window dimensions. Imagine you're on that boring class with that boring teacher and you didn't slept so well last night. Suddenly you're sleeping in class. Can you believe it?!" data-tooltip-length="xlarge">X-Large</button>
</div>
```
```html
<button data-tooltip="What about something really big? This may surpass your window dimensions. Imagine you're on that boring class with that boring teacher and you didn't slept so well last night. Suddenly you're sleeping in class. Can you believe it?!" data-tooltip-length="xlarge">X-Large</button>
```

```example
<br><br><br><br><br><br><br><br><br>
<div class="u-text-center">
<button class="c-button c-button--large" data-tooltip="What about something really big? This may surpass your window dimensions. Imagine you're on that boring class with that boring teacher and you didn't slept so well last night. Suddenly you're sleeping in class. Can you believe it?!" data-tooltip-length="fit">My width will fit to element</button>
</div>
```
```html
<button data-tooltip="What about something really big? This may surpass your window dimensions. Imagine you're on that boring class with that boring teacher and you didn't slept so well last night. Suddenly you're sleeping in class. Can you believe it?!" data-tooltip-length="fit">My width will fit to element</button>
```

### Customize

```css
--tooltip-arrow-size: 10px;
--tooltip-background: var(--white);
--tooltip-space: .5rem;
--tooltip-transorm: translateX(-50%);
--tooltip-z-index: 50;
```
