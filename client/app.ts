import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/collections/todos/Todo';
import { TodoCollection } from '../shared/collections/todos/TodoCollection';

// noinspection TypeScriptCheckImport
import template from './app.html';

@Component({
  selector: 'app',
  template
})
export class AppComponent implements OnInit {

  public todos: Mongo.Cursor<Todo>;

  public ngOnInit(): any {
    this.todos = TodoCollection.find();
  }
}
