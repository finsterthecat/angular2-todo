/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';

import { AppComponent } from '../app.component';
import { TodoAppComponent } from './todo-app.component';
import { TodoService } from '../todo.service';

import { FormsModule } from '@angular/forms';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [ FormsModule ],
    declarations: [
      AppComponent, TodoAppComponent
    ],
    providers: [ TodoService ]
  });
});

describe('Component: TodoApp', () => {

  it('should create an instance', inject([TodoService], (todoService: TodoService) => {
    let component = new TodoAppComponent(todoService);
    expect(component).toBeTruthy();
  }));

});
