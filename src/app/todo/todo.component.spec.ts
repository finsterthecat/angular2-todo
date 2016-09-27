/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { TodoComponent } from './todo.component';

import { AppComponent } from '../app.component';
import { TodoAppComponent } from '../todo-app/todo-app.component';
import { TodoService } from '../todo.service';

import { FormsModule } from '@angular/forms';


beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [ FormsModule ],
    declarations: [
      AppComponent, TodoAppComponent, TodoComponent
    ],
    providers: [ TodoService ]
  });
});

describe('Component: Todo', () => {
  it('should create an instance', inject([TodoService], (todoService: TodoService)  => {
    let component = new TodoComponent(todoService);
    expect(component).toBeTruthy();
  }));
});
