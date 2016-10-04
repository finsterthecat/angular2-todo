import { Component } from '@angular/core';

import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['todo-app.component.scss'],
  providers: [TodoService]
})
export class TodoAppComponent {

  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

  addTodo() {
    if (this.newTodo.title) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = new Todo();
    }
  }

  removeTodo(todo: Todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }
}
