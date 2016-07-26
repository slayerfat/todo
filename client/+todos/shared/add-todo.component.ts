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
        Validators.maxLength(255)
      ])]
    });
  }

  public addTodo(todo) {
    if (this.todo.valid) {
      TodoCollection.insert({
        owner: '123123', // TODO add real user
        contents: todo.contents
      });

      (<Control>this.todo.controls['contents']).updateValue('');
    }
  }
}
