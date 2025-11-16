import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { getBaseUrl } from '../config/configLoader';

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto(getBaseUrl());
  await loginPage.login('demouser', 'fashion123');
  const success = await loginPage.isLoginSuccessful();
  expect(success).toBeTruthy();
});
