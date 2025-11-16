import { test, expect, request } from '@playwright/test';
import { getBaseUrl } from '../config/configLoader';

test('All links return 200 or 30x', async ({ page, request }) => {
  const baseUrl = getBaseUrl();
  await page.goto(baseUrl);

  const links = await page.$$eval('a', as => as.map(a => a.href));
  for (const link of links) {
    const response = await request.get(link);
    const status = response.status();

    expect(
      status,
      `${link} returned status ${status}`
    ).toBeGreaterThanOrEqual(200);

    expect(status).toBeLessThan(400);
  }
});
