// noinspection TypeScriptCheckImport
import template from './todos.component.html';
import styles from './todos.component.css';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/collections/todos/Todo';
import { TodoCollection } from '../../shared/collections/todos/TodoCollection';
import { AddTodoComponent } from './shared/add-todo.component';
import { HumanDiffPipe } from '../shared/pipes/human-diff.pipe';
// noinspection TypeScriptCheckImport

@Component({
  selector: 'todos',
  template,
  styles,
  directives: [AddTodoComponent],
  pipes: [HumanDiffPipe]
})
export class TodosComponent implements OnInit {
  public todos: Mongo.Cursor<Todo>;

  public ngOnInit(): any {
    this.todos = TodoCollection.find();
  }

  public removeTodo(todo: Todo): void {
    TodoCollection.remove(todo._id);
  }
}
