import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';

// Material 2
import { MdCoreModule } from '@angular2-material/core'
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox'
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdSliderModule } from '@angular2-material/slider';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';

//import {} from '@angular2-material/'

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule.forRoot(), MdCardModule.forRoot(), MdButtonModule.forRoot(), MdRadioModule.forRoot(),
    MdCheckboxModule.forRoot(), MdTooltipModule.forRoot(), MdSliderModule.forRoot(), MdInputModule.forRoot(),
    MdToolbarModule.forRoot() ],
  providers: [TodoService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
