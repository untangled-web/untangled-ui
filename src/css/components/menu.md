### Block

A horizontal list of block-level links using a `<ul>`.

 ```example:html
  <ul class="c-menu c-menu--block">
    <li><button class="c-menu__link">Widgets</button></li>
    <li><button class="c-menu__link">Doodads</button></li>
    <li><button class="c-menu__link">Apparatuses</button></li>
    <li><button class="c-menu__link has-descendants is-active">Things</button>
      <ul class="c-menu__submenu">
        <li><button class="c-menu__link">Thingamabob</button></li>
        <li><button class="c-menu__link">Thingamajig</button></li>
        <li><button class="c-menu__link">Thinger</button></li>
      </ul>
    </li>
  </ul>
 ```

### Inline

A horizontal list of inline-level links using a `<ul>`.

 ```example:html
 <ul class="c-menu c-menu--inline">
   <li><button class="c-menu__link is-active">Link 1</button></li>
   <li><button class="c-menu__link">Link 2</button></li>
   <li><button class="c-menu__link">Link 3</button></li>
 </ul>
 ```
