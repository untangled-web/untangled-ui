#### Inactive

 ```example:html
 <section class="o-editor">
   <header class="o-editor__toolbar has-actions">
     <div class="o-editor__nav">
     </div>
     <div class="o-editor__info">
        <div class="o-editor__actions o-button-group">
          <!-- Edit -->
          <button class="c-button c-button--large o-editor__edit"><span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg></span><span class="c-button__content u-hide@sm">Edit</span></button>
          <!-- Delete -->
          <button class="c-button c-button--large"><span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></span></button>
          <!-- Move -->
          <button class="c-button c-button--large"><span class="c-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/></svg>
        </span></button>
        </div>
     </div>
   </header>

   <div class="o-editor__content">
     <input class="c-input" value="Hello, I'm content inside an editor! :)">
   </div>
 </section>
 ```

#### Active

 ```example:html
 <section class="o-editor is-active">
   <header class="o-editor__toolbar has-actions">
     <div class="o-editor__nav">
       <ul class="c-menu c-menu--inline">
        <li><button class="c-menu__link is-active">Object</button></li>
        <li><button class="c-menu__link">Options</button></li>
       </ul>
     </div>
     <div class="o-editor__info">
        <div class="o-editor__extras">
          <span class="c-badge c-badge--round c-badge--positive" title="Key Attribute">
            <span class="c-icon c-icon--small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
            </span>
          </span>
          <span class="c-badge c-badge--round c-badge--alterable" title="Recommended Object">N</span>
          <button class="c-button--favorite is-active" title="Add to Favorites">
            <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </button>
        </div>
        <div class="o-editor__actions o-button-group">
          <!-- Done -->
          <button class="c-button c-button--large o-editor__done"><span class="c-icon is-positive"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></span><span class="c-button__content u-hide@sm">Done</span></button>
        <button class="c-button c-button--large"><span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></span></button>
        <button class="c-button c-button--large"><span class="c-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/></svg>
        </span></button>
        </div>
     </div>
   </header>

   <div class="o-editor__content">
     <input class="c-input" value="Hello, I'm content inside an editor! :)">
   </div>

   <footer class="o-editor__toolbar o-editor__toolbar--small">
     <div class="u-start">
      <span class="c-icon">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
      </span>
      Conditions
       <button class="c-button c-button--anchor js-add-conditions">
       <span class="c-icon c-icon--small">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
        </span>
        <span class="c-button__content">Add Conditions</span>
      </button>
     </div>
     <div class="u-column u-end">
       <input type="checkbox" class="c-checkbox" id="c-checkbox-1" checked="true">
       <label for="c-checkbox-1">
Required</label>
     </div>
   </footer>
   <div class="o-editor__content">
   <div class="c-card c-card--round">
    <div class="o-editor__conditionals c-card__title">
      <div class="u-column--9">
      <span class="c-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
      </span>
      <span>If response&nbsp;</span>
      <div class="c-dropdown">
        <button class="c-dropdown__toggle js-dropdown-toggle">is</button>
        <ul class="c-dropdown__content" id="test-dropdown" tabindex="-1" aria-hidden="true">
          <li><button class="c-dropdown__link">is</button></li>
          <li><button class="c-dropdown__link">is not</button></li>
          <li><button class="c-dropdown__link">contains</button></li>
        </ul>
      </div>
      <div class="c-dropdown">
        <button class="c-dropdown__toggle js-dropdown-toggle">Red wine</button>
        <ul class="c-dropdown__content" id="test-dropdown" tabindex="-1" aria-hidden="true">
          <li><button class="c-dropdown__link">Red Wine</button></li>
          <li><button class="c-dropdown__link">White Wine</button></li>
          <li><button class="c-dropdown__link">Crux Scotch Ale</button></li>
        </ul>
      </div>
      <span>&nbsp;then:</span>
      </div>
      <div class="u-column--3 u-end">
        <button class="c-button c-button--icon" data-reactid=".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.0"><svg class="c-icon c-icon--delete  " version="1.1" width="24" height="24" aria-labelledby="title" role="img" viewBox="0 0 24 24" data-reactid=".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.0.0"><title data-reactid=".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.0.0.0">Delete</title><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" data-reactid=".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.0.0.1"></path></svg></button>
        <button class="c-button c-button--icon is-positive">
          <svg class="c-icon c-icon--done-all xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/></svg>
        </button>
        <button class="c-button c-button--icon">
          <svg class="c-icon c-icon--open-with  " version="1.1" width="24" height="24" aria-labelledby="title" role="img" viewBox="0 0 24 24" data-reactid=".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.2"><title data-reactid=".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.2.0">Open With</title><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z" data-reactid=".0.2.$survey$ui$screens$surveys$Surveys_[=2panel].1.0.$survey$ui$screens$surveys$EditorCanvas_[=2panel =2editor =2survey-to-edit].2.0.0.0.1.0:$17592186045874.4:$condition-block-17592186045876.$17592186045876.1.2.1"></path></svg>
        </button>
        </div>
      </div>




 <section class="o-editor is-active" tabindex="-1">
   <header class="o-editor__toolbar has-actions" role="toolbar">
     <div class="o-editor__nav">
       <ul class="c-menu c-menu--inline">
        <li><button class="c-menu__link is-active">Object</button></li>
        <li><button class="c-menu__link">Options</button></li>
       </ul>
     </div>
     <div class="o-editor__info">
       <div class="o-editor__extras">
       <span class="c-badge c-badge--round c-badge--positive" title="Key Attribute">
         <span class="c-icon c-icon--small">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
         </span>
       </span>
       <span class="c-badge c-badge--round c-badge--alterable" title="Recommended Object">N</span>
       <button class="c-button--favorite is-active" title="Add to Favorites">
          <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
       </button>
        <div class="o-editor__actions o-button-group">
            <!-- Done -->
            <button class="c-button c-button--large o-editor__done"><span class="c-icon is-positive"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></span><span class="c-button__content u-hide@sm">Done</span></button>
          <button class="c-button c-button--large"><span class="c-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></span></button>
        <button class="c-button c-button--large"><span class="c-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/></svg>
        </span></button>
        </div>
     </div>
   </header>
   <div class="o-editor__content">
     <input class="c-input" value="Hello, I'm content inside an editor! :)">
   </div>

   <footer class="o-editor__toolbar o-editor__toolbar--small">
     <div class="u-start">
       <button class="c-button c-button--anchor js-add-conditions">
       <span class="c-icon c-icon--small">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
        </span>
        <span class="c-button__content">Add Conditions</span>
      </button>
     </div>
     <div class="u-column u-end">
       <input type="checkbox" class="c-checkbox" id="c-checkbox-1" checked="true">
       <label for="c-checkbox-1">
Required</label>
     </div>
   </footer>
 </section>

       <button class="c-button c-button--anchor js-add-conditions">
       <span class="c-icon c-icon--small">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
        </span>
        <span class="c-button__content">Add Conditions</span>
      </button>
   </div>
  </div>
 </section>
 ```
