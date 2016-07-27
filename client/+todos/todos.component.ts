// noinspection TypeScriptCheckImport
import template from './todos.component.html';

// noinspection TypeScriptCheckImport
import styles from './todos.component.css';

import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/collections/todos/Todo';
import { TodoCollection } from '../../shared/collections/todos/TodoCollection';
import { AddTodoComponent } from './shared/add-todo.component';
import { HumanDiffPipe } from '../shared/pipes/human-diff.pipe';

@Component({
  selector: 'todos',
  template,
  styles,
  directives: [AddTodoComponent],
  pipes: [HumanDiffPipe]
})
export class TodosComponent implements OnInit {
  public todos: Mongo.Cursor<Todo>;
  private updating: Todo;
  private todoInput: string;
  private todoInputError: boolean;

  public ngOnInit(): any {
    this.todos = TodoCollection.find();
  }

  public updateTodoStatus(todo: Todo): void {
    if (!this.isLogged()) {
      return;
    }

    TodoCollection.update(todo._id, {
      $set: {
        completed: !todo.completed
      }
    });
  }

  public updateTodo(ok = true): void {
    // if the user cancels the update,
    // we have to update and return early
    if (ok === false || this.updating === null || !this.isLogged()) {
      this.updating       = null;
      this.todoInputError = null;
      return;
    }

    if (typeof this.todoInput !== 'undefined') {
      const input = this.todoInput.trim();
      if (input.length >= 5 && input.length <= 255) {
        TodoCollection.update(this.updating._id, {
          $set: {
            contents: this.todoInput
          }
        });

        this.updating       = null;
        this.todoInputError = null;

        return;
      }
    }

    this.todoInputError = true;
  }

  public removeTodo(todo: Todo): void {
    if (!this.isLogged()) {
      return;
    }

    TodoCollection.remove(todo._id);
  }

  /**
   * Checks if the user is logged in.
   *
   * @returns {boolean}
   */
  public isLogged(): boolean {
    return !!Meteor.userId();
  }
}
