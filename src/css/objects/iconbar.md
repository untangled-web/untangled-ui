```example:html
<nav class="o-iconbar">
  <button class="o-iconbar__item is-active">
    <span class="c-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
    </span>
    <span class="o-iconbar__label">Home</span>
  </button>
  <button class="o-iconbar__item">
    <span class="c-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
    </span>
    <span class="o-iconbar__label">Docs</span>
  </button>
  <button class="o-iconbar__item">
    <span class="c-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>
    </span>
    <span class="o-iconbar__label">Support</span>
  </button>
  <button class="o-iconbar__item">
    <span class="c-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.406-12 12.073 0 5.335 3.438 9.859 8.207 11.455.6.111.819-.262.819-.581l-.017-2.247c-3.337.729-4.042-1.424-4.042-1.424-.546-1.394-1.332-1.765-1.332-1.765-1.091-.749.083-.734.083-.734 1.205.084 1.839 1.244 1.839 1.244 1.071 1.845 2.81 1.312 3.492 1.002.109-.778.42-1.312.762-1.612-2.664-.305-5.466-1.341-5.466-5.967 0-1.319.468-2.395 1.234-3.24-.122-.307-.535-1.535.119-3.196 0 0 1.006-.324 3.3 1.238.957-.269 1.983-.402 3.003-.406 1.02.004 2.046.139 3.004.407 2.29-1.564 3.297-1.238 3.297-1.238.656 1.663.243 2.89.12 3.195.769.845 1.233 1.921 1.233 3.24 0 4.638-2.807 5.659-5.48 5.958.432.374.814 1.108.814 2.234 0 1.614-.016 2.915-.016 3.313 0 .321.218.697.826.579 4.765-1.599 8.2-6.123 8.2-11.455 0-6.667-5.373-12.073-12-12.073z"/></svg>
    </span>
    <span class="o-iconbar__label">Github</span>
  </button>
</nav>
```
#### Rail

Just add an extra modifier class `.o-iconbar--rail` and you'll get this effect.

```example
<nav class="o-iconbar o-iconbar--rail">
  <button class="o-iconbar__item is-active">
    <span class="c-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
    </span>
    <span class="o-iconbar__label">Home</span>
  </button>
  <button class="o-iconbar__item">
    <span class="c-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
    </span>
    <span class="o-iconbar__label">Docs</span>
  </button>
  <button class="o-iconbar__item">
    <span class="c-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>
    </span>
    <span class="o-iconbar__label">Support</span>
  </button>
  <button class="o-iconbar__item">
    <span class="c-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.406-12 12.073 0 5.335 3.438 9.859 8.207 11.455.6.111.819-.262.819-.581l-.017-2.247c-3.337.729-4.042-1.424-4.042-1.424-.546-1.394-1.332-1.765-1.332-1.765-1.091-.749.083-.734.083-.734 1.205.084 1.839 1.244 1.839 1.244 1.071 1.845 2.81 1.312 3.492 1.002.109-.778.42-1.312.762-1.612-2.664-.305-5.466-1.341-5.466-5.967 0-1.319.468-2.395 1.234-3.24-.122-.307-.535-1.535.119-3.196 0 0 1.006-.324 3.3 1.238.957-.269 1.983-.402 3.003-.406 1.02.004 2.046.139 3.004.407 2.29-1.564 3.297-1.238 3.297-1.238.656 1.663.243 2.89.12 3.195.769.845 1.233 1.921 1.233 3.24 0 4.638-2.807 5.659-5.48 5.958.432.374.814 1.108.814 2.234 0 1.614-.016 2.915-.016 3.313 0 .321.218.697.826.579 4.765-1.599 8.2-6.123 8.2-11.455 0-6.667-5.373-12.073-12-12.073z"/></svg>
    </span>
    <span class="o-iconbar__label">Github</span>
  </button>
</nav>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
```

### Shifting

Just add an extra modifier class `.o-iconbar--shifting` and you'll get this effect.

```example
<nav class="o-iconbar o-iconbar--shifting is-mobile">
  <button class="o-iconbar__item is-active">
    <span class="c-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
    </span>
    <span class="o-iconbar__label">Home</span>
  </button>
  <button class="o-iconbar__item">
    <span class="c-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
    </span>
    <span class="o-iconbar__label">Docs</span>
  </button>
  <button class="o-iconbar__item">
    <span class="c-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>
    </span>
    <span class="o-iconbar__label">Support</span>
  </button>
  <button class="o-iconbar__item">
    <span class="c-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.627 0-12 5.406-12 12.073 0 5.335 3.438 9.859 8.207 11.455.6.111.819-.262.819-.581l-.017-2.247c-3.337.729-4.042-1.424-4.042-1.424-.546-1.394-1.332-1.765-1.332-1.765-1.091-.749.083-.734.083-.734 1.205.084 1.839 1.244 1.839 1.244 1.071 1.845 2.81 1.312 3.492 1.002.109-.778.42-1.312.762-1.612-2.664-.305-5.466-1.341-5.466-5.967 0-1.319.468-2.395 1.234-3.24-.122-.307-.535-1.535.119-3.196 0 0 1.006-.324 3.3 1.238.957-.269 1.983-.402 3.003-.406 1.02.004 2.046.139 3.004.407 2.29-1.564 3.297-1.238 3.297-1.238.656 1.663.243 2.89.12 3.195.769.845 1.233 1.921 1.233 3.24 0 4.638-2.807 5.659-5.48 5.958.432.374.814 1.108.814 2.234 0 1.614-.016 2.915-.016 3.313 0 .321.218.697.826.579 4.765-1.599 8.2-6.123 8.2-11.455 0-6.667-5.373-12.073-12-12.073z"/></svg>
    </span>
    <span class="o-iconbar__label">Github</span>
  </button>
</nav>
```
