**NEW!** This object is redesigned to be un-opinionated and flexible for almost any interactive list you might need in your app. The simplified markup resembles this node list:

``` shell
.o-accordion [ --inline | --right | --small ]
   __title   [ is-active | is-nested | is-selected ]
   __content [ is-active ]
     __group
       __info
       __actions
         __action [ --informative | --success ]
         __meta
           __meta-item
```

``` example:html
<div class="o-accordion">
  <div class="o-accordion__title is-nested is-active">
    <span class="c-badge c-badge--informative">2</span>
    Contacts
  </div>
  <div class="o-accordion__content is-active">
    <div class="o-accordion__group">
      <div class="o-accordion__info o-accordion__info--critical">
        <svg class="c-icon is-neutral" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
        Kennee
      </div>
      <div class="o-accordion__info">
        <svg class="c-icon is-neutral" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        ilovemicrosoft@yahoo.com
      </div>
      <div class="o-accordion__info">
        <svg class="c-icon is-neutral" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
        2m ago
      </div>
      <div class="o-accordion__actions">
        <span class="o-accordion__action">
          <svg class="c-icon is-informative" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>
        </span>
        <span class="o-accordion__action o-accordion__action--informative">
          <svg class="c-icon is-informative" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>
        </span>
        <span class="o-accordion__action o-accordion__action--success">
          <svg class="c-icon is-informative" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>
        </span>
      </div>
    </div>
    <div class="o-accordion__group">
      <div class="o-accordion__info o-accordion__info--critical">
        <svg class="c-icon is-neutral" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
        Krassy Pants
      </div>
      <div class="o-accordion__info">
        <svg class="c-icon is-neutral" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        krass@pants.com
      </div>
      <div class="o-accordion__info">
        <svg class="c-icon is-neutral" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
        2m ago
      </div>
      <div class="o-accordion__actions">
        <span class="o-accordion__action">
          <svg class="c-icon is-informative" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>
        </span>
      </div>
    </div>
  </div>
  <div class="o-accordion__title is-nested">
    What kinds of dogs are there?
  </div>
  <div class="o-accordion__content">
    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
  </div>
  <div class="o-accordion__title is-nested">
    How do you acquire a dog?
  </div>
  <div class="o-accordion__content">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
    <p class="is-nested">A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </div>
   <div class="o-accordion__title is-nested">
    How do you acquire a dog?
  </div>
  <div class="o-accordion__content">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
    <p class="is-nested">A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </div>
   <div class="o-accordion__title is-nested">
    How do you acquire a dog?
  </div>
  <div class="o-accordion__content">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
    <p class="is-nested">A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </div>
   <div class="o-accordion__title">
    Non-nested title
  </div>
</div>
```

Notice how you can add `.is-nested` to any element and it collapses and expands with `.is-active`

```example:html
<div class="o-accordion">
  <div class="o-accordion__title">Recent notes</div>
  <div class="o-accordion__content is-active">
    <div class="o-accordion__group">
      <div class="o-accordion__info">
        <div class="o-accordion__meta">
          <div class="o-accordion__meta-item">
            <svg class="c-icon c-icon--small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            Agent Name
          </div>
          <div class="o-accordion__meta-item">
            <svg class="c-icon c-icon--small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            3 days ago
          </div>
        </div>
        <p class="is-nested">So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive in the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew.</p>
      </div>
    </div>
        <div class="o-accordion__group">
      <div class="o-accordion__info">
        <div class="o-accordion__meta">
          <div class="o-accordion__meta-item">
            <svg class="c-icon c-icon--small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            Agent Name
          </div>
          <div class="o-accordion__meta-item">
            <svg class="c-icon c-icon--small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            3 days ago
          </div>
        </div>
        <p class="is-nested">So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive in the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew.</p>
      </div>
    </div>
        <div class="o-accordion__group">
      <div class="o-accordion__info">
        <div class="o-accordion__meta">
          <div class="o-accordion__meta-item">
            <svg class="c-icon c-icon--small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            Agent Name
          </div>
          <div class="o-accordion__meta-item">
            <svg class="c-icon c-icon--small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            3 days ago
          </div>
        </div>
        <p class="is-nested">So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive in the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew.</p>
      </div>
    </div>
  </div>
</div>
```

#### Accordion inside a Sidebar

``` example:html
<nav class="o-sidebar [is-collapsed]">
  <div class="o-accordion o-accordion--small">
    <div class="o-accordion__title is-nested is-active">
      Title 1
    </div>
    <div class="o-accordion__content is-active">
      <div class="o-accordion__group">
        <div class="o-accordion__info">View 1</div>
        <div class="o-accordion__actions"> 
          <span class="o-accordion__action">
            <svg class="c-icon is-informative" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>
          </span>
        </div>
      </div>
      <div class="o-accordion__group">
        <div class="o-accordion__info">View 2.1</div>
        <div class="o-accordion__actions">
          <span class="o-accordion__action">
            <svg class="c-icon is-informative" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>
          </span>
        </div>
      </div>
    </div>
    <div class="o-accordion__title is-selected">Title 2</div>
    <div class="o-accordion__title">Title 3</div>
    <div class="o-accordion__title is-informative">
      <svg class="c-icon c-icon--small" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
      Action 1
    </div>
  </div>
  <div class="o-sidebar__toggle"></div>
</nav>
```
