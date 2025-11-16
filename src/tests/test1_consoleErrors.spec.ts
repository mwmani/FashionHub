import { test, expect } from '@playwright/test';
import { getBaseUrl } from '../config/configLoader';

test('No console errors on About page', async ({ page }) => {
  const baseUrl = getBaseUrl();
  const errors: string[] = [];

  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto(`${baseUrl}about.html`);
  expect(errors.length).toBeGreaterThan(0);
});
