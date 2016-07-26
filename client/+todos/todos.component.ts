// noinspection TypeScriptCheckImport
import template from './todos.component.html';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/collections/todos/Todo';
import { TodoCollection } from '../../shared/collections/todos/TodoCollection';

@Component({template})
export class TodosComponent implements OnInit {
  public todos: Mongo.Cursor<Todo>;

  public ngOnInit(): any {
    this.todos = TodoCollection.find();
  }
}
