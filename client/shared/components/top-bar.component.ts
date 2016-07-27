import { Component } from '@angular/core';
import { LoginButtons } from 'angular2-meteor-accounts-ui';

@Component({
  selector: 'top-bar',
  template: `
<div class="top-bar">
  <div class="top-bar-left">
    <ul class="dropdown menu" data-dropdown-menu>
      <li class="menu-text">Todos App</li>
      <li><login-buttons></login-buttons></li>
    </ul>
  </div>
</div>`,
  directives: [LoginButtons]
})
export class TopBarComponent {
}
