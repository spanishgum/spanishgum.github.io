import { expect, test } from '@playwright/test';

test('home page loads with no console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(err.message));

  const response = await page.goto('/');
  expect(response?.status()).toBe(200);

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

  expect(errors).toEqual([]);
});

test('posts index loads', async ({ page }) => {
  const response = await page.goto('/posts/');
  expect(response?.status()).toBe(200);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('posts');
});
