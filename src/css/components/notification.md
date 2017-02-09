Communicate the state of your user's interactions as well as system status. We have a flexible notification component with a few variations for different states.

```html
<div class="c-notification [c-notification--warning]">
  <svg class="c-icon c-icon--info" width="24" height="24" viewBox="0 0 24 24"> ... </svg>
  <div class="c-notification_content">
    <h1 class="c-notification_heading">Heading</h1>
    <p>Communicate a meaningful message.</p>
  </div>
  <button class="c-button c-button--icon">
    <svg class="c-icon c-icon--close" width="24" height="24" viewBox="0 0 24 24"> ... </svg>
  </button>
</div>
```

```example:html,width=320px
  <div class="c-notification">
  <svg class="c-icon c-icon--info" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  </svg>
  <div class="c-notification_content">
    <h1 class="c-notification_heading">Info Notification</h1>
    <p>Communicate a meaningful message.</p>
  </div>
  <button class="c-button c-button--icon">
    <svg class="c-icon c-icon--close" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  </button>
</div>
```

```example
<div class="c-notification">
  <svg class="c-icon c-icon--check-circle is-positive" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
  <div class="c-notification_content">
    <h1 class="c-notification_heading">Successful Notification</h1>
    <p>Communicate a meaningful message.</p>
  </div>
  <button class="c-button c-button--icon">
    <svg class="c-icon c-icon--close" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  </button>
</div>
```

```example
<div class="c-notification c-notification--warning">
  <svg class="c-icon c-icon--warning" width="24" height="24" viewBox="0 0 24 24">
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
  </svg>
  <div class="c-notification_content">
    <h1 class="c-notification_heading">Warning Notification</h1>
    <p>Communicate a meaningful message.</p>
  </div>
  <button class="c-button c-button--icon">
    <svg class="c-icon c-icon--close" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  </button>
</div>
```

```example
<div class="c-notification c-notification--error">
  <svg class="c-icon c-icon--error" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>
  <div class="c-notification_content">
    <h1 class="c-notification_heading">Error Notification</h1>
    <p>Communicate a meaningful message.</p>
  </div>
  <button class="c-button c-button--icon">
    <svg class="c-icon c-icon--close" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  </button>
</div>
```

### Wide

Alternatively we have an alert-style notification that takes the whole page width.

```example
<div class="c-notification c-notification--wide c-notification--informative">
  <svg class="c-icon c-icon--info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
  <div class="c-notification_content">
    <h1 class="c-notification_heading">Wide Notification</h1>
    <p>Communicate a meaningful message.</p>
  </div>
  <button class="c-button c-button--icon">
    <svg class="c-icon c-icon--close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
  </button>
</div>
```

### Positions

You can apply modifier classes to your notification to pin them to different areas around the viewport. See [positioning](#positioning).