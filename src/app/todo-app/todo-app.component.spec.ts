/* tslint:disable:no-unused-variable */

import { TestBed, inject, async } from '@angular/core/testing';

import 'hammerjs';

import { AppComponent } from '../app.component';
import { TodoAppComponent } from './todo-app.component';
import { TodoService } from '../todo.service';

// Material 2
import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdSliderModule } from '@angular2-material/slider';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { FormsModule } from '@angular/forms';
import {TodoComponent} from '../todo/todo.component';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [ FormsModule, DragulaModule, MdCoreModule.forRoot(), MdCardModule.forRoot(),
                MdButtonModule.forRoot(), MdRadioModule.forRoot(),
                MdCheckboxModule.forRoot(), MdTooltipModule.forRoot(),
                MdSliderModule.forRoot(), MdInputModule.forRoot(), MdToolbarModule.forRoot() ],
    declarations: [
      AppComponent, TodoAppComponent, TodoComponent
    ],
    providers: [ TodoService ]
  });
});

describe('Component: TodoApp', () => {

  it('should create an instance', inject([TodoService], (todoService: TodoService) => {
    let component = new TodoAppComponent(todoService);
    expect(component).toBeTruthy();
  }));

  it('should render title in a md-toolbar tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar').textContent).toContain('To Dos');
  }));
});
