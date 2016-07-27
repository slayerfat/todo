// noinspection TypeScriptCheckImport
import template from './app.component.html';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Component } from '@angular/core';
import { TopBarComponent } from './shared/components/top-bar.component';

@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES, TopBarComponent]
})
export class AppComponent {
}
