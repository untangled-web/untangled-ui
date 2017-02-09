Follow this example of markup on a `<div>` or `<header>` to get an application style toolbar. The main toolbar class should only be used on network-level operations.

```example:html
<div class="o-toolbar">
  <nav class="u-column--bar">
    <h1 class="o-toolbar__brand">Name</h1>
    <div class="c-dropdown">
      <button class="c-dropdown__select c-dropdown__select--right js-dropdown-toggle">UI</button>
      <ul class="c-dropdown__menu is-active" tabindex="-1">
        <li><button class="c-dropdown__link">
          <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          App
        </button></li>
        <li><button class="c-dropdown__link">
          <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          App
        </button></li>
        <li><button class="c-dropdown__link">
          <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          App
        </button></li>
      </ul>
    </div>
  </nav>
  <ul class="u-column--bar">
      <li class="o-toolbar__link">
        <div class="c-dropdown">
          <button class="c-button c-button--icon u-hide@md-up">
            <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
            </button>
          <button class="c-button c-button--text c-button--dropdown u-hide@sm">English-US</button>
          <ul class="c-dropdown__content" tabindex="-1">
            <li><button class="c-dropdown__link">English-US</button></li>
            <li><button class="c-dropdown__link">Español</button></li>
          </ul>
        </div>
      </li>
      <li class="o-toolbar__link">
        <svg class="c-icon c-icon--person" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        <span class="u-hide@sm">Kevin Mitnick</span>
      </li>
      <li class="o-toolbar__link">
        <button class="c-button c-button--icon">
          <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
        </button>
      </li>
  </ul>
</div>
```

#### Small

This toolbar is mainly used for specific operations and navigation for the current app you are using.

```example:html
<div class="o-toolbar o-toolbar--small">
  <ul class="c-menu c-menu--block">
    <li><button class="c-menu__link is-active">Widgets</button></li>
    <li><button class="c-menu__link">Doodads</button></li>
    <li><button class="c-menu__link">Apparatuses</button></li>
    <li><button class="c-menu__link">Things</button></li>
  </ul>
</div>
```

#### Secondary

The secondary toolbar is intended to only provide operations for the current view of the app your in.

```example
<div class="o-toolbar o-toolbar--secondary">
  <!-- View Info for Mobile -->
  <div class="o-toolbar__info u-hide@md-up">
    <h1>View Name</h1>
  </div>
  <!-- View Actions for Mobile -->
  <div class="u-column u-hide@md-up u-end">
    <button class="c-button c-button--icon u-hide@md-up" title="Filter by tag">
      <svg class="c-icon c-icon--filter_list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
    </button>
    <button class="c-button c-button--icon u-hide@md-up" title="Search widgets">
      <svg class="c-icon c-icon--search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    </button>
    <button class="c-button c-button--icon u-hide@md-up" title="List view">
      <svg class="c-icon c-icon--list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
    </button>
    <button class="c-button c-button--icon u-hide@md-up" title="Create widgets">
      <svg class="c-icon c-icon--create" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
    </button>
  </div>

  <!-- View Actions for Tablets and Computers -->
  <div class="u-column--bar u-hide@sm">
    <div class="c-dropdown">
      <button class="c-button c-button--dropdown">Filter by tag</button> <ul class="c-dropdown__content [is-active]" id="test-dropdown" tabindex="-1" aria-hidden="true">
        <li><button class="c-dropdown__link">Water</button></li>
        <li><button class="c-dropdown__link">Coffee</button></li>
        <li><button class="c-dropdown__link">Tea</button></li>
      </ul>
    </div>
    <div class="u-wrapper">
      <input class="c-input c-input--inset" type="text" placeholder="Search your widgets" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false">
      <button class="c-button c-button--icon u-absolute--top-left" type="submit" disabled aria-label="Submit">
        <svg class="c-icon c-icon--search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
      </button>
    </div>
  </div>
  <div class="u-column--bar u-hide@sm">
    <div class='o-button-group--toggle'>
      <button class='c-button'>List</button>
      <button class='c-button c-button--text'>Detail</button>
    </div>
    <button class="c-button c-button--secondary c-button--large c-button--dropdown">Create widgets</button>
  </div>
</div>
```

```html
<div class="o-toolbar o-toolbar--secondary">
  <!-- View Info for Mobile -->
  <div class="o-toolbar__info u-hide@md-up">
    <h1>View Name</h1>
  </div>
  <!-- View Actions for Mobile -->
  <div class="u-column u-hide@md-up u-end">
    <button class="c-button c-button--icon u-hide@md-up" title="Filter by tag">
      <svg class="c-icon c-icon--filter_list"> ... </svg>
    </button>
    <button class="c-button c-button--icon u-hide@md-up" title="Search widgets">
      <svg class="c-icon c-icon--search"> ... </svg>
    </button>
    <button class="c-button c-button--icon u-hide@md-up" title="List view">
      <svg class="c-icon c-icon--list"> ... </svg>
    </button>
    <button class="c-button c-button--icon u-hide@md-up" title="Create widgets">
      <svg class="c-icon c-icon--create"> ... </svg>
    </button>
  </div>

  <!-- View Actions for Tablets and Computers -->
  <div class="u-column u-hide@sm">
    <div class="u-row u-row--collapse u-middle">
      <div class="u-column--4">
        <div class="c-dropdown">
          <button class="c-button c-button--dropdown">Filter by tag</button> <ul class="c-dropdown__content [is-active]" id="test-dropdown" tabindex="-1" aria-hidden="true">
            <li><button class="c-dropdown__link">Water</button></li>
            <li><button class="c-dropdown__link">Coffee</button></li>
            <li><button class="c-dropdown__link">Tea</button></li>
          </ul>
        </div>
      </div>
      <div class="u-column">
        <div class="u-wrapper">
          <input class="c-input c-input--inset" type="text" placeholder="Search your widgets" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false">
          <button class="c-button c-button--icon u-absolute--top-left" type="submit" disabled aria-label="Submit">
            <svg class="c-icon c-icon--search"> ... </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="u-column u-end u-hide@sm">
    <div class='o-button-group--toggle'>
      <button class='c-button'>List</button>
      <button class='c-button c-button--text'>Detail</button>
    </div>
    <button class="c-button c-button--secondary c-button--large c-button--dropdown">Create widgets</button>
  </div>
</div>
```
