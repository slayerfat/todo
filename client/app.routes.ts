import { provideRouter, RouterConfig } from '@angular/router';
import { TodosComponent } from './+todos/todos.component';

export const routes: RouterConfig = [
  {path: '', component: TodosComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
