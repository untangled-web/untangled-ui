Use these button classes on `<button>` or `<input type='submit'>` element. It's easy to make a new button.

```example:html
<button class='c-button'>Default</button>
```

#### Size and Form

You can optionally use modifier classes that let you manipulate the size and shape of your button.

```example:html
<button class='c-button'>Regular</button>
<button class='c-button c-button--large'>Large</button>
<button class='c-button c-button--xlarge'>Extra Large</button>
<button class='c-button c-button--round'>Round</button>
<button class='c-button c-button--wide'>Wide</button>
<button class='c-button'>
  <span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg></span><span class="c-button__content">Left Icon</span>
</button>
<button class='c-button'>
  <span class="c-button__content">Right Icon</span><span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></span>
</button>
<button class='c-button c-button--icon' title="Icon Button"><span class="c-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>
</span></button>
```

#### Color

Stateful color classes are provided to further communicate the intentions of your button action.

```example:html
<button class='c-button'>Default</button>
<button class='c-button c-button--secondary'>Secondary</button>
<button class='c-button c-button--alert'>Alert</button>
<button class='c-button c-button--passive'>Passive</button>
<button class='c-button c-button--text'>Text</button>
<button class='c-button c-button--anchor'>Anchor</button>
```

#### States

```example:html
<button class='c-button is-disabled' aria-disabled="true">Disabled</button>
<button class='c-button is-active' title="Click me to see the active state.">Active</button>
```

#### Postfix

```example:html
<div class="u-row u-row--collapse">
<div class="u-column--9">
  <input type="text" class="c-input" placeholder="Search for...">
</div>
<div class="u-column--2">
  <button class="c-button c-button--postfix">Search</button>
</div>
</div>
```

#### Customize

```css
  --button-background: var(--blue-800);
  --button-background-hover: var(--blue-700);
  --button-background-hover-alert: var(--red-600);
  --button-background-hover-anchor: transparent;
  --button-background-hover-passive: var(--white);
  --button-background-hover-secondary: var(--orange-600);
  --button-background-hover-success: var(--green-600);
  --button-background-hover-text: var(--grey-100);
  --button-background-alert: var(--red-700);
  --button-background-passive: var(--blue-200);
  --button-background-secondary: var(--orange-700);
  --button-background-success: var(--green-700);
  --button-background-text: transparent;
  --button-border: var(--grey-600);
  --button-text-color: var(--white);
  --button-text-color-anchor: var(--blue-700);
  --button-text-color-anchor-active: var(--blue-800);
  --button-text-color-passive: var(--grey-800);
  --button-text-color-text: currentColor;
  --button-hover-shadow: 0 0 6px var(--shadow-color);
  --button-duration: .1s;
  --button-disabled-opacity: .35;
  --button-large: 36px;
  --button-regular: 30px;
  --button-xlarge: 68px;
```
