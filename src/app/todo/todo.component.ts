import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../todo';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() remove = new EventEmitter();

  constructor(private todoService: TodoService) { }

  removeTodo() {
    this.remove.emit(this.todo);
  }

  toggleTodoComplete() {
    this.todoService.toggleTodoComplete(this.todo);
  }
}
