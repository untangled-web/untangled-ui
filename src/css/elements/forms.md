Basic styles for form elements like `input`, `select` and `label`

```example:html
<label for="input-1">Label</label>

<input id="input-1" type="text" placeholder="Input">

<label for="select-1">Select</label>
<select id="select-1">
<option>Option</option>
<option>Option</option>
<option>Option</option>
</select>
```

#### Aria Cursors

Any elements that have the `aria-busy` attribute, it will change the cursor to indicate progress.

With every control that has the `aria-controls` attribute, we change the cursor to a pointer as usual for all controls.

If an element is `aria-disabled` then we reset the cursor to default.


##### Customize

```css
--borderRadius-form: var(--global-rounded);
--fontSize-form: var(--fontSize--small);
--height-form: 30px;
--lineHeight-form: 1.5;
--outline-focus: 0;
```
