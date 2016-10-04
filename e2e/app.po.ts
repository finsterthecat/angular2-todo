import { browser, element, by, protractor } from 'protractor/globals';
import { ElementFinder } from "protractor";

export class TodoAppPage {
  static navigateTo() {
    return browser.get('/');
  }

  static getParagraphText() {
    return element(by.css('app-root md-card-title')).getText();
  }

  static getInput(): ElementFinder {
    return element(by.css('app-root md-input input'));
  }

  static hitEnter() {
    TodoAppPage.getInput().sendKeys(protractor.Key.ENTER);
  }
}
