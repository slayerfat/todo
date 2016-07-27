// noinspection TypeScriptCheckImport
import template from './app.component.html';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Component } from '@angular/core';
import { TopBarComponent } from './shared/components/top-bar.component';
import { FooterComponent } from './shared/components/footer.component';

@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES, TopBarComponent, FooterComponent]
})
export class AppComponent {
}
