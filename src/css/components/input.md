This is our input component, which gives you a lot of options for form interactions. Supported input types are, `text`, `password`, `date`, `datetime`, `datetime-local`, `month`, `week`, `email`, `number`, `search`, `tel`, `time`, `url`, `color`.

```example:html
<label for="input-1">Required Input</label>
<input class="c-input" id="input-1" type="text" required="true" placeholder="The quick bown fox...">

<label class="is-optional" for="input-2">Optional Input</label>
<input class="c-input" id="input-2" type="text" placeholder="The quick bown fox...">
```

#### Round with Icons

```example:html
<div class="u-wrapper">
  <input class="c-input c-input--round c-input--inset" type="text" placeholder="Search..." autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false">
  <button class="c-button c-button--icon u-absolute--top-left" type="submit" disabled aria-label="Submit">
    <span class="c-icon c-icon--search">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    </span>
  </button>
  <button class="c-button c-button--icon u-absolute--top-right" aria-label="Close Search">
    <span class="c-icon c-icon--cancel">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
    </span>
  </button>
</div>
```

#### Collapsible

```example:html
<button class="c-button c-button--icon" title="Open Search" type="submit" aria-label="Submit">
  <span class="c-icon c-icon--search">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
  </span>
</button>

<div class="u-wrapper u-fixed--top-center u-fade-out u-fade-in">
  <input class="c-input">
  <button class="c-button c-button--icon u-absolute--top-right" aria-label="Close Search">
    <span class="c-icon c-icon--cancel">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
    </span>
  </button>
</div>
```

#### Multi-line

```example:html
<textarea class="c-input c-input--multi-line"></textarea>
```

#### States

```example:html
<input class="c-input has-focus" type="text" placeholder=":focus">
<input class="c-input is-invalid" type="text" placeholder=":invalid">
<input class="c-input is-error" type="text" placeholder=".is-error">
```

#### Input Validation

```example:html
<div class="u-wrapper">
  <input class="c-input has-focus" type='text'>
  <div class='c-input__validation'>Validated message</div>
</div>
```

```example:html
<div class="u-wrapper">
  <input class="c-input" type='text'>
  <div class='c-input__validation c-input__validation--neutral'>Neutral validated message</div>
</div>
```

```example:html
<div class="u-wrapper">
  <input class="c-input" type="email" value="notauser at clientcom" required>
  <div class="c-input__validation c-input__validation--warning">Warning validated message</div>
</div>
```

```example:html
<div class="u-wrapper">
  <input class="c-input is-error" type='text' placeholder="Placeholder text">
  <div class='c-input__validation c-input__validation--error'>Error validated message</div>
</div>
```
