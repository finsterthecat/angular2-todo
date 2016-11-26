import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor() { }

  removeTodo() {
    this.remove.emit(this.todo);
    console.log("remove todo");
  }

  editTodo() {
    this.edit.emit(this.todo);
    console.log("edit todo")
  }
}
