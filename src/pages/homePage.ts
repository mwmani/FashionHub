import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(baseUrl: string) {
    await this.page.goto(baseUrl);
  }

  async getAllLinks() {
    return await this.page.$$eval("a", (elements) =>
      elements.map((a) => a.href)
    );
  }

  async clickMenu(name: string) {
    await this.page.click(`text=${name}`);
  }

  async isLoaded() {
    return await this.page.locator("header").isVisible();
  }
}
