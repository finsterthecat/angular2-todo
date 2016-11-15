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
  isUpdateMode: boolean = false;

  constructor(private todoService: TodoService) { }

  applyChanges() {
    if (this.isUpdateMode) {
      this.updateTodo();
    }
    else {
      this.addTodo();
    }
  }

  cancelChanges() {
    this.newTodo = new Todo();
    this.isUpdateMode = false;
  }

  updateTodo() {
    if (this.newTodo.title) {
      this.todoService.updateTodoById(this.newTodo.id, {title: this.newTodo.title});
      this.newTodo = new Todo();
      this.isUpdateMode = false;
    }
  }

  addTodo() {
    if (this.newTodo.title) {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = new Todo();
      console.log("addtodo");
    }
  }

  removeTodo(todo: Todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  editTodo(todo: Todo) {
    this.newTodo.id = todo.id;
    this.newTodo.title = todo.title;
    this.isUpdateMode = true;
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

  get completedTodos() {
    return this.todoService.getCompletedTodos();
  }
}
