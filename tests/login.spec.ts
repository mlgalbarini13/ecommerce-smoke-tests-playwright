import { test, expect } from '@playwright/test';

test('TC01 - login successful', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: /login/i }).click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText('Products')).toBeVisible();
});
