**NEW!** A simple sliding card that displays lists of links and other various content. The simplified markup resembles this node list:

```shell
.o-aside [ --right | is-active ]
  __title [ --section ]
  __close
  __list
    __item
  __backdrop
```

```example:html
<div style="height: 520px;">

<aside class="o-aside o-aside--right is-active">
  <h1 class="o-aside__title">Favorites</h1>
  <span class="o-aside__close">
    <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
  </span>
  <h2 class="o-aside__title o-aside__title--section">Reveal</h2>
  <ul class="o-aside__list">
    <li><a class="o-aside__item" href="#">Segment analysis</a></li>
    <li><a class="o-aside__item" href="#">Source of business report</a></li>
  </ul>
  <h2 class="o-aside__title o-aside__title--section">Narrowcast</h2>
  <ul class="o-aside__list">
    <li><a class="o-aside__item" href="#">Agent performance report</a></li>
    <li><a class="o-aside__item" href="#">Roll-up report</a></li>
  </ul>
  <h2 class="o-aside__title o-aside__title--section">Reach</h2>
  <ul class="o-aside__list">
    <li><a class="o-aside__item" href="#">Create new list</a></li>
  </ul>
  <div class="o-aside__backdrop"></div>
</aside>

</div>
```
