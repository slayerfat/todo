// noinspection TypeScriptCheckImport
import template from './add-todo.component.html';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  ControlGroup,
  Validators,
  Control
} from '@angular/common';
import { TodoCollection } from '../../../shared/collections/todos/TodoCollection';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'add-todo',
  template
})
export class AddTodoComponent implements OnInit {
  private todo: ControlGroup;

  public ngOnInit() {
    let fb = new FormBuilder();

    this.todo = fb.group({
      contents: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(255),
        this.isLogged
      ])]
    });
  }

  public addTodo(todo) {
    if (Meteor.userId()) {
      if (this.todo.valid) {
        TodoCollection.insert({
          owner: '123123',
          contents: todo.contents
        });

        (<Control>this.todo.controls['contents']).updateValue('');
      }
    }
  }

  /**
   * Checks if the user is logged, used in the form validation.
   *
   * @returns {null | Object}
   */
  private isLogged() {
    if (Meteor.userId()) {
      return null; // null means ok.
    }

    return {isLogged: 'You must be logged to add a Todo.'};
  }
}
