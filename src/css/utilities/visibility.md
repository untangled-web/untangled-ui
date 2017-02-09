Use simple utilities to hide or show elements across any span of devices

### Show
This set of classes let you expose any element to the desired device(s). Just add one of the following classes and you will see your element on it's respective device.

```example:html
<div>+ Shown All The Time</div>
<div class="u-show@sm">+ Shown for Small Only</div>
<div class="u-show@md">+ Shown for Medium Only</div>
<div class="u-show@md-up">+ Shown for Medium Up</div>
<div class="u-show@lg">+ Shown for Large Only</div>
<div class="u-show@lg-up">+ Shown for Large Up</div>
<div class="u-show@landscape">+ Shown for Landscape</div>
<div class="u-show@portrait">+ Shown for Portrait</div>
<div class="u-show@reader">+ Read by Screen Readers but Visually Hidden</div>
```

### Hide
Use these special classes to hide an element from any device as follows:

```example:html
<div hidden>- Hidden All The Time via Native Attribute</div>
<div class="u-hide">- Hidden All The Time</div>
<div class="u-hide@sm">- Hidden for Small Only</div>
<div class="u-hide@md">- Hidden for Medium Only</div>
<div class="u-hide@md-up">- Hidden for Medium Up</div>
<div class="u-hide@lg">- Hidden for Large Only</div>
<div class="u-hide@lg-up">- Hidden for Large Up</div>
<div class="u-hide@landscape">- Hidden for Landscape</div>
<div class="u-hide@portrait">- Hidden for Portrait</div>
<div aria-hidden="true">- Not read by Screen Readers and visually shown</div>
```

### Fade

To show smoother interactions we can utilize these fade classes and mixins.

This example shows how you can utilize the `.u-fade-[in/out]` classes to toggle visibility with a smooth transition.
```example:html
<button class="c-button c-button--large js-fade-control">Fade toggle</button>
<span class="c-icon c-icon--xlarge is-positive u-fade-out js-fade-example">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z"/></svg>
</span>
```
