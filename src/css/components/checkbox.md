We now have a CSS only checkbox that uses pseudo-elements to draw the square and checkmark next to the label.

```example:html
<input id='checkbox-1' type="checkbox" class="c-checkbox"></input>
<label for='checkbox-1'>Checkbox</label>

<input id='checkbox-2' type="checkbox" class="c-checkbox" checked></input>
<label for='checkbox-2'>Checked Checkbox</label>

<input id='checkbox-3' type="checkbox" class="c-checkbox is-indeterminate"></input>
<label for='checkbox-3'>Indeterminate Checkbox</label>

<input id='checkbox-1' type="checkbox" class="c-checkbox"></input>
<label for='checkbox-1'>Nunc commodo a eros eu tempus. Cras nisl leo, tempor eget egestas at, venenatis ut dui. Pellentesque volutpat magna et nulla volutpat condimentum.</label>
```

#### Consumer Blue

```example:html
<input id='checkbox-1' type="checkbox" class="c-checkbox c-checkbox--informative"></input>
<label for='checkbox-1'>Checkbox</label>

<input id='checkbox-2' type="checkbox" class="c-checkbox c-checkbox--informative" checked></input>
<label for='checkbox-2'>Checked Checkbox</label>

<input id='checkbox-3' type="checkbox" class="c-checkbox c-checkbox--informative is-indeterminate"></input>
<label for='checkbox-3'>Indeterminate Checkbox</label>

<input id='checkbox-4' type="checkbox" class="c-checkbox c-checkbox--informative"></input>
<label for='checkbox-4'>Nunc commodo a eros eu tempus. Cras nisl leo, tempor eget egestas at, venenatis ut dui. Pellentesque volutpat magna et nulla volutpat condimentum.</label>
```
