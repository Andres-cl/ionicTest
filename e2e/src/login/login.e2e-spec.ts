import {LoginPage} from "./login.po";

describe('Login tests', () => {

  let loginPage: LoginPage;


  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.navigateTo();
  });

  it('Login form should be valid', () => {
    loginPage.getEmailTextbox().sendKeys('andres@calpena.com');
    loginPage.getPasswordTextbox().sendKeys('12345');

    let form = loginPage.getForm().getAttribute('class');

    expect(form).toContain('ng-valid');
  });

  it('Login form should be invalid by empty', () => {
    loginPage.getEmailTextbox().sendKeys('');
    loginPage.getPasswordTextbox().sendKeys('');

    let form = loginPage.getForm().getAttribute('class');

    expect(form).toContain('ng-invalid');
  });

  it('Login form should be invalid by password length', () => {
    loginPage.getEmailTextbox().sendKeys('andres@calpena.com');
    loginPage.getPasswordTextbox().sendKeys('1234');

    let form = loginPage.getForm().getAttribute('class');

    expect(form).toContain('ng-invalid');
  });

  it('Login form should be invalid by email format', () => {
    loginPage.getEmailTextbox().sendKeys('andrescalpena');
    loginPage.getPasswordTextbox().sendKeys('12345');

    let form = loginPage.getForm().getAttribute('class');

    expect(form).toContain('ng-invalid');
  });

});
