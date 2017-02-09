This is a month view calendar for overlaying on input fields that control date selection.

```example:html
<div class="u-wrapper">
  <span class="o-button-group-label"> X Date</span>
  <div class="o-calendar-wrapper">
    <input class="o-claendar-date" read-only="true" value="">
  </div>
  <div class="o-calendar c-card">
    <header class="o-calendar__control u-middle">
      <div class="u-column--2">
        <button class="o-calendar__button" title="Last Month">
          <span class="c-icon c-icon__arrow-back">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          </span>
        </button>
      </div>
      <div class="u-column--8">
        <button class="c-button c-button--icon" title="Today">
          <span class="c-icon c-icon__today">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
          </span>
        </button>
      </div>
      <div class="u-column--2">
        <button class="o-calendar__button" title="Next Month">
          <span class="c-icon c-icon__arrow-forward">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
          </span>
        </button>
      </div>
    </header>
    <div class="o-calendar__month o-overlay">
      <hr>
      <table>
        <thead>
          <tr>
            <th class="o-day-name">Su</th>
            <th class="o-day-name">M</th>
            <th class="o-day-name">Tu</th>
            <th class="o-day-name">W</th>
            <th class="o-day-name">Th</th>
            <th class="o-day-name">F</th>
            <th class="o-day-name">Sa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="o-day is-inactive">27</td>
            <td class="o-day is-inactive">28</td>
            <td class="o-day is-inactive">29</td>
            <td class="o-day is-inactive">30</td>
            <td class="o-day is-inactive">31</td>
            <td class="o-day">1</td>
            <td class="o-day">2</td>
          </tr>
          <tr>
            <td class="o-day">3</td>
            <td class="o-day">4</td>
            <td class="o-day">5</td>
            <td class="o-day">6</td>
            <td class="o-day">7</td>
            <td class="o-day">8</td>
            <td class="o-day">9</td>
          </tr>
          <tr>
            <td class="o-day">10</td>
            <td class="o-day">11</td>
            <td class="o-day">12</td>
            <td class="o-day">13</td>
            <td class="o-day">14</td>
            <td class="o-day">15</td>
            <td class="o-day">16</td>
          </tr>
          <tr>
            <td class="o-day">17</td>
            <td class="o-day">18</td>
            <td class="o-day is-active">19</td>
            <td class="o-day">20</td>
            <td class="o-day">21</td>
            <td class="o-day">22</td>
            <td class="o-day">23</td>
          </tr>
          <tr>
            <td class="o-day">24</td>
            <td class="o-day">25</td>
            <td class="o-day">26</td>
            <td class="o-day">27</td>
            <td class="o-day">28</td>
            <td class="o-day">29</td>
            <td class="o-day">30</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```
