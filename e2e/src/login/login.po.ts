import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get(browser.baseUrl);
  }

  getEmailTextbox() {
    return element(by.name('email'));
  }

  getPasswordTextbox() {
    return element(by.name('password'));
  }

  getForm(){
    return element(by.css('.form'));
  }
}
