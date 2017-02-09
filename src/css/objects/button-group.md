```example:html
<div class='o-button-group'>
  <button class='c-button'>Play</button>
  <button class='c-button'>Pause</button>
  <button class='c-button'>Stop</button>
</div>
```

#### Stacked

```example:html
<div class='o-button-group--stack'>
  <button class='c-button'>Play</button>
  <button class='c-button'>Pause</button>
  <button class='c-button'>Stop</button>
</div>
```

#### Toggle

```example:html
<span class="o-button-group__label">Control</span>
<div class='o-button-group--toggle'>
  <button class='c-button c-button--small'>Play</button>
  <button class='c-button c-button--small c-button--text'>Pause</button>
</div>
```

#### Postfix Group

**Please Note** This does not work well on mobile with multiple buttons. To fix this we hacked out the second button. Use at your own risk.

```example:html
<div class="u-row u-row--collapse">
  <div class="u-column--9">
    <input class="c-input" type="text" placeholder="Multiple buttons on the end"></input>
  </div>
  <div class="u-column--3">
    <div class="o-button-group">
      <button class="c-button c-button--postfix">Go</button>
      <button class="c-button c-button--postfix u-hide@sm">Start</button>
    </div>
  </div>
</div>
```
