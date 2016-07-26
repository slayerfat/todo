// noinspection TypeScriptCheckImport
import template from './app.component.html';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
