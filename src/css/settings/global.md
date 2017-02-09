This set of custom properties are global to your project, so you can make "broad stoke" changes.

```css
/* Typographical styles and baseline grid */
--global-font-size: 1rem;
--global-line-height: 32px;

/* Standardized treatments */
--global-duration: .1s;
--global-margin: 8px;
--global-rounded: 4px;
--global-z-index: 100;
```

#### BEMIT Healthcheck

Enable a new layer of outlines around everything on the DOM that describes and identifies different types of selectors.

```html
<html class="s-healthcheck">
```


With this, we can write styles with built-in assertions that point out certain elements that lack required a11y aria properties.

```css
.c-input:not([aria-label]) {
  @apply --assert-selector;
}
```
