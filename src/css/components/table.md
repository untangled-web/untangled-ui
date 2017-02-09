This is a set of ways to format tables for responsive applications.

```example:html
  <div class="o-button-group">
    <button class="c-button c-button--small js-view--swipe is-active" aria-label="Swipe View">
      <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/></svg>
    </button>
    <button class="c-button c-button--small js-view--toggle" aria-label="Toggle View">
      <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"/></svg>
    </button>
    <button class="c-button c-button--small js-view--stacked" aria-label="Stacked View">
      <svg class="c-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/></svg>
    </button>
  </div>
  <table class="c-table c-table--toggle js-table-view">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col" class="c-table__priority-3">Opens</th>
        <th scope="col" class="c-table__priority-2">Open %</th>
        <th scope="col" class="c-table__priority-1">Clicks</th>
        <th scope="col" class="c-table__priority-4">Click %</th>
        <th scope="col" class="c-table__priority-5">Booked</th>
        <th scope="col" class="c-table__priority-6">Attr Rev</th>
        <th scope="col" class="c-table__priority-6">Bounce %</th>
        <th scope="col" class="c-table__priority-6">Share %</th>
        <th scope="col" class="c-table__priority-6">Unsub %</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>Auto Agent</td>
        <td class="c-table__priority-3">
          <span class="c-table__label">Opens</span>
          <span class="c-table__content">300</span>
        </td>
        <td class="c-table__priority-2">
          <span class="c-table__label">Open %</span>
          <span class="c-table__content">60</span>
        </td>
        <td class="c-table__priority-1">
          <span class="c-table__label">Clicks</span>
          <span class="c-table__content">3000</span>
        </td>
        <td class="c-table__priority-4">
          <span class="c-table__label">Click %</span>
          <span class="c-table__content">32</span>
        </td>
        <td class="c-table__priority-5">
          <span class="c-table__label">Booked</span>
          <span class="c-table__content">12000</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Attr Rev</span>
          <span class="c-table__content">32800</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Bounce %</span>
          <span class="c-table__content">32</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Share %</span>
          <span class="c-table__content">32</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Unsub %</span>
          <span class="c-table__content">32</span>
        </td>
      </tr>

      <tr>
        <td>First child entry</td>
        <td class="c-table__priority-3">
          <span class="c-table__label">Opens</span>
          <span class="c-table__content">100</span>
        </td>
        <td class="c-table__priority-2">
          <span class="c-table__label">Open %</span>
          <span class="c-table__content">54</span>
        </td>
        <td class="c-table__priority-1">
          <span class="c-table__label">Clicks</span>
          <span class="c-table__content">1200</span>
        </td>
        <td class="c-table__priority-4">
          <span class="c-table__label">Click %</span>
          <span class="c-table__content">18</span>
        </td>
        <td class="c-table__priority-5">
          <span class="c-table__label">Booked</span>
          <span class="c-table__content">6000</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Attr Rev</span>
          <span class="c-table__content">24000</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Bounce %</span>
          <span class="c-table__content">18</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Share %</span>
          <span class="c-table__content">18</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Unsub %</span>
          <span class="c-table__content">18</span>
        </td>
      </tr>

      <tr>
        <td>Second child entry</td>
        <td class="c-table__priority-3">
          <span class="c-table__label">Opens</span>
          <span class="c-table__content">600</span>
        </td>
        <td class="c-table__priority-2">
          <span class="c-table__label">Open %</span>
          <span class="c-table__content">72</span>
        </td>
        <td class="c-table__priority-1">
          <span class="c-table__label">Clicks</span>
          <span class="c-table__content">960</span>
        </td>
        <td class="c-table__priority-4">
          <span class="c-table__label">Click %</span>
          <span class="c-table__content">42</span>
        </td>
        <td class="c-table__priority-5">
          <span class="c-table__label">Booked</span>
          <span class="c-table__content">3000</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Attr Rev</span>
          <span class="c-table__content">1200</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Bounce %</span>
          <span class="c-table__content">42</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Share %</span>
          <span class="c-table__content">42</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Unsub %</span>
          <span class="c-table__content">42</span>
        </td>
      </tr>

      <tr>
        <td>Third child entry</td>
        <td class="c-table__priority-3">
          <span class="c-table__label">Opens</span>
          <span class="c-table__content">300</span>
        </td>
        <td class="c-table__priority-2">
          <span class="c-table__label">Open %</span>
          <span class="c-table__content">60</span>
        </td>
        <td class="c-table__priority-1">
          <span class="c-table__label">Clicks</span>
          <span class="c-table__content">840</span>
        </td>
        <td class="c-table__priority-4">
          <span class="c-table__label">Click %</span>
          <span class="c-table__content">32</span>
        </td>
        <td class="c-table__priority-5">
          <span class="c-table__label">Booked</span>
          <span class="c-table__content">12000</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Attr Rev</span>
          <span class="c-table__content">30800</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Bounce %</span>
          <span class="c-table__content">32</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Share %</span>
          <span class="c-table__content">32</span>
        </td>
        <td class="c-table__priority-6">
          <span class="c-table__label">Unsub %</span>
          <span class="c-table__content">32</span>
        </td>
      </tr>
    </tbody>
  </table>
```
