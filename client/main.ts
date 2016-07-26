import 'reflect-metadata';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { provide } from '@angular/core';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]);
