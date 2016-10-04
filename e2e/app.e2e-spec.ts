import { element, by, protractor, browser } from 'protractor/globals';
import { TodoAppPage } from './app.po';

describe('todo-app App', function() {

  it('should display message saying To Do', () => {
    TodoAppPage.navigateTo();
    expect(TodoAppPage.getParagraphText()).toEqual('To Dos');
  });

  it ('should add a To Do', () => {
    TodoAppPage.navigateTo();
    var input = TodoAppPage.getInput();
    input.sendKeys('write first protractor test');

    var button = element(by.css('app-root .add'));
    button.click();                                     //Cannot get the keyup.enter recognized. Adding a button and testing that...
    //input.sendKeys(protractor.Key.ENTER);

    var todoList = element.all(by.css('app-root app-todo .md-checkbox-label'));
    expect(todoList.count()).toEqual(1);
    expect(todoList.get(0).getText()).toEqual('write first protractor test');
  });

  it ('should remove a To Do', () => {
    TodoAppPage.navigateTo();
    var input = TodoAppPage.getInput();
    input.sendKeys('write first protractor test');

    var button = element(by.css('app-root .add'));
    button.click();

    var todoList = element.all(by.css('app-root app-todo .md-checkbox-label'));
    expect(todoList.count()).toEqual(1);
    expect(todoList.get(0).getText()).toEqual('write first protractor test');

    var todos = element.all(by.css('app-root app-todo .destroy'));
    expect(todos.count()).toEqual(1);

    todos.get(0).click();

    expect(todos.count()).toEqual(0);
  });


});
