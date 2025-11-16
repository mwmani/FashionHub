import { Page } from '@playwright/test';

export class LoginPage {
  page: any;
  usernameField: string;
  passwordField: string;
  loginButton: string;
  constructor(page) {
    this.page = page;
    this.usernameField = 'input[name="username"]';
    this.passwordField = 'input[name="password"]';
    this.loginButton = 'input[type="submit"][value="Login"]';
  }

  async goto(baseUrl) {
    await this.page.goto(`${baseUrl}login.html`);
  }

  async login(username, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async isLoginSuccessful() {
    await this.page.waitForLoadState('networkidle');
    return await this.page.locator('text=Welcome').isVisible();
  }
}
module.exports = { LoginPage };
