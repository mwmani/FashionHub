import { test } from '@playwright/test';
import { writeCSV } from '../utils/csvWriter';

test('List open PRs from GitHub', async ({ request }) => {
  const response = await request.get('https://api.github.com/repos/appwrite/appwrite/pulls');
  const data = await response.json();

  const prs = data.map((pr: any) => ({
    name: pr.title,
    created_at: pr.created_at,
    author: pr.user.login
  }));

  await writeCSV(prs, 'open_prs.csv');
  console.log('CSV created: open_prs.csv');
});
