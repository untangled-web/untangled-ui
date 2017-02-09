 ```example:html
 <div class="c-dropdown">
   <button class="c-dropdown__select js-dropdown-toggle">Apples</button>
   <ul class="c-dropdown__menu is-active" id="test-dropdown" tabindex="-1" aria-hidden="true">
     <li><button class="c-dropdown__link">Apples</button></li>
     <li><button class="c-dropdown__link">Oranges</button></li>
     <li><button class="c-dropdown__link">Banannas</button></li>
   </ul>
 </div>
 <br><br><br><br><br>
 ```

 ```example:html
 <div class="c-dropdown c-dropdown--large">
   <button class="c-dropdown__select js-dropdown-toggle">Large Toggle</button>
   <ul class="c-dropdown__menu is-active" id="test-dropdown" tabindex="-1" aria-hidden="true">
     <li><button class="c-dropdown__link">Apples</button></li>
     <li><button class="c-dropdown__link">Oranges</button></li>
     <li><button class="c-dropdown__link">Banannas</button></li>
   </ul>
 </div>
 <br><br><br><br><br>
 ```

 ```example:html
 <div class="c-dropdown">
   <button class="c-dropdown__select c-dropdown__select--positive js-dropdown-toggle">Positive Select</button>
   <ul class="c-dropdown__menu" id="test-dropdown" tabindex="-1" aria-hidden="true">
     <li><button class="c-dropdown__link">Apples</button></li>
     <li><button class="c-dropdown__link">Oranges</button></li>
     <li><button class="c-dropdown__link">Banannas</button></li>
   </ul>
 </div>
 <div class="c-dropdown">
   <button class="c-dropdown__select c-dropdown__select--alterable js-dropdown-toggle">Alterable Select</button>
   <ul class="c-dropdown__menu" id="test-dropdown" tabindex="-1" aria-hidden="true">
     <li><button class="c-dropdown__link">Apples</button></li>
     <li><button class="c-dropdown__link">Oranges</button></li>
     <li><button class="c-dropdown__link">Banannas</button></li>
   </ul>
 </div>
 <div class="c-dropdown">
   <button class="c-dropdown__select c-dropdown__select--negative js-dropdown-toggle">Negative Select</button>
   <ul class="c-dropdown__menu" id="test-dropdown" tabindex="-1" aria-hidden="true">
     <li><button class="c-dropdown__link">Apples</button></li>
     <li><button class="c-dropdown__link">Oranges</button></li>
     <li><button class="c-dropdown__link">Banannas</button></li>
   </ul>
 </div>
 ```

 ```example:html
 <div class="u-end">

 <div class="c-dropdown c-dropdown--right">
   <button class="c-dropdown__select c-dropdown__select--right js-dropdown-toggle">Right Aligned</button>
   <ul class="c-dropdown__menu is-active" id="test-dropdown" tabindex="-1" aria-hidden="true">
     <li><button class="c-dropdown__link">Apples</button></li>
     <li><button class="c-dropdown__link">Oranges</button></li>
     <li><button class="c-dropdown__link">Banannas</button></li>
   </ul>
 </div>

 </div>
 <br><br><br><br><br>
 ```

#### Button Dropdown

 ```example:html
 <div class="c-dropdown">
   <button class="c-button c-button--dropdown js-dropdown-toggle">Filter</button>
   <ul class="c-dropdown__menu is-active" id="test-dropdown" tabindex="-1" aria-hidden="true">
     <li><button class="c-dropdown__link">Water</button></li>
     <li><button class="c-dropdown__link">Coffee</button></li>
     <li><button class="c-dropdown__link">Tea</button></li>
   </ul>
 </div>
 <br><br><br><br><br>
 ```
 
 ```example:html
 <div class="o-button-group">
   <button class="c-button">Dropdown</button>
   <button class="c-button c-button--dropdown"></button>
   <ul class="c-dropdown__menu is-active">
     <li><button class="c-dropdown__link">Water</button></li>
     <li><button class="c-dropdown__link">Coffee</button></li>
     <li><button class="c-dropdown__link">Tea</button></li>
   </ul>
 </div>
 <br><br><br><br><br>
 ```

#### Large Dropdown

 ```example:html
 <div class="c-dropdown c-dropdown--large">
   <button class="c-button c-button--dropdown js-dropdown-toggle">Filter</button>
   <div class="c-dropdown__menu is-active" id="test-dropdown" tabindex="-1" aria-hidden="true">
     <div class="u-trailer--quarter">
       <input class="c-input" type="text" placeholder="Search...">
     </div>
     <div class="c-dropdown__viewer">
       <div class="u-leader--sixth u-trailer--sixth">
         <input class="c-checkbox" type="checkbox" id="cb1">
         <label for="cb1">Filter</label>
       </div>
       <div class="u-leader--sixth u-trailer--sixth">
         <input class="c-checkbox" type="checkbox" id="cb2">
         <label for="cb2">Filter</label>
       </div>
       <div class="u-leader--sixth u-trailer--sixth">
         <input class="c-checkbox" type="checkbox" id="cb3">
         <label for="cb3">Filter</label>
       </div>
       <div class="u-leader--sixth u-trailer--sixth">
         <input class="c-checkbox" type="checkbox" id="cb4">
         <label for="cb4">Filter</label>
       </div>
       <div class="u-leader--sixth u-trailer--sixth">
         <input class="c-checkbox" type="checkbox" id="cb5">
         <label for="cb5">Filter</label>
       </div>
       <div class="u-leader--sixth u-trailer--sixth">
         <input class="c-checkbox" type="checkbox" id="cb6">
         <label for="cb6">Filter</label>
       </div>
       <div class="u-leader--sixth u-trailer--sixth">
         <input class="c-checkbox" type="checkbox" id="cb7">
         <label for="cb7">Filter</label>
       </div>
       <div class="u-leader--sixth u-trailer--sixth">
         <input class="c-checkbox" type="checkbox" id="cb8">
         <label for="cb8">Filter</label>
       </div>
       <div class="u-leader--sixth u-trailer--sixth">
         <input class="c-checkbox" type="checkbox" id="cb9">
         <label for="cb9">Filter</label>
       </div>
       <div class="u-leader--sixth u-trailer--sixth">
         <input class="c-checkbox" type="checkbox" id="cb10">
         <label for="cb10">Filter</label>
       </div>
     </div>
     <button class="c-button c-button--wide">Apply</button>
   </div>
 </div>
 <br><br><br><br><br>
 <br><br><br><br><br>
 <br><br><br><br><br>
 <br><br><br><br><br>
 ```

#### Dropdown Data

Note: The dropdown list underneath should not be enabled when the dropdown list is visible. Doing this fosters a better interaction for the user.

 ```example:html
 <div class="c-dropdown c-dropdown--data">
   <button class="c-dropdown__select js-dropdown-toggle">{In room beverages}</button>
   <ul class="c-dropdown__menu" id="test-dropdown" tabindex="-1" aria-hidden="true">
     <li><button class="c-dropdown__link">Select answer data...</button></li>
     <li><button class="c-dropdown__link">in room - beverages</button></li>
     <li><button class="c-dropdown__link">in room - media</button></li>
   </ul>
   <ul class="c-dropdown__list" tabindex="-1">
     <li><button class="c-dropdown__link">Red wine</button></li>
     <li><button class="c-dropdown__link">White wine</button></li>
     <li><button class="c-dropdown__link">Coffee</button></li>
   </ul>
 </div>
 <br><br><br><br><br>
 ```
