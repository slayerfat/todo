// noinspection TypeScriptCheckImport
import template from './todos.component.html';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/collections/todos/Todo';
import { TodoCollection } from '../../shared/collections/todos/TodoCollection';
import { AddTodoComponent } from './shared/add-todo.component';

@Component({
  selector: 'todos',
  template,
  directives: [AddTodoComponent]
})
export class TodosComponent implements OnInit {
  public todos: Mongo.Cursor<Todo>;

  public ngOnInit(): any {
    this.todos = TodoCollection.find();
  }
}
