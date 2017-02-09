#### Beginner view

```example:html
<br><br><br>
<div class="u-fixed--middle-center">
  <span class="c-icon c-icon--huge is-passive">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/></svg>
  </span>
  <h1>No widgets yet</h1>
  <p class="c-message--neutral">Create a widget to get started</p>
</div>
<br><br><br>
```

#### List view

```example:html
<div class="o-listing">
  <div class="o-listing__status">
  <span class="o-listing__status-indicator c-icon is-positive">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
  </span>
  </div>
  <div class="o-listing__info">
    <div class="o-listing__wrapper">
      <div class="o-listing__general">
        <div class="o-listing__name">
          <h1>Item Title</h1>
        </div>
        <div class="o-listing__duration u-show@sm u-hide@md-up">14 days</div>
      </div>
      <div class="o-listing__duration u-hide@sm">14 days</div>
    </div>
    <div class="o-listing__actions c-dropdown--right u-column--4 u-end u-top">
        <div class="o-listing__action-group">
          <button class="c-button c-button--icon" title="Edit">
            <span class="c-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </span>
          </button>
          <button class="c-button c-button--icon" title="Preview">
            <span class="c-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            </span>
          </button>
          <button class="c-button c-button--icon" title="Send">
            <span class="c-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </span>
          </button>

          <div class="c-dropdown c-dropdown--right">
            <button class="c-button c-button--icon js-dropdown-toggle" title="Duplicate, Delete & more">
              <span class="c-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
              </span>
            </button>

            <ul class="c-dropdown__content">
              <li class="u-hide@md-up">
                <button class="c-dropdown__link" title="Edit">
                  <span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg></span>
                  Edit
                </button>
              </li>
              <li class="u-hide@md-up">
                <button class="c-dropdown__link" title="Preview">
                  <span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg></span>
                    Preview
                </button>
              </li>
              <li class="u-hide@md-up">
                <button class="c-dropdown__link" title="Send">
                  <span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></span>
                  Send
                </button>
              </li>
              <li>
                <button class="c-dropdown__link" title="Favorite">
                  <span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></span>
                  Favorite
                </button>
              </li>
              <li>
                <button class="c-dropdown__link" title="Share">
                  <span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg></span>
                  Share
                </button>
              </li>
              <li>
                <button class="c-dropdown__link" title="Duplicate">
                  <span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg></span>
                  Duplicate
                </button>
              </li>
              <li>
                <button class="c-dropdown__link" title="Delete">
                  <span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></span>
                    Delete
                </button>
              </li>
            </ul>

          </div>
        </div>
      </div>
  </div>
</div>
```
