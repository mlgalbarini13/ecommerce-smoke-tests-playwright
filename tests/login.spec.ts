import { test, expect } from '@playwright/test';

test('TC01 - login successful', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: /login/i }).click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText('Products')).toBeVisible();
});

test('TC02 — Login failed due to invalid credentials', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('fake_user');
  await page.getByPlaceholder('Password').fill('wrong_pass');
  await page.getByRole('button', { name: /login/i }).click();

  const errorMsg = page.getByText('Epic sadface: Username and password do not match any user in this service', { exact: true });
  await expect(errorMsg).toBeVisible();
});

test('TC03 — Validation of required fields (empty username)', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('');
  await page.getByPlaceholder('Password').fill('wrong_pass');
  await page.getByRole('button', { name: /login/i }).click();

  const errorMsg = page.getByText('Epic sadface: Username is required', { exact: true })
  await expect(errorMsg).toBeVisible();
});

test('TC04 — User blocked cannot log in', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: /login/i }).click();

  const errorMsg = page.getByText('Epic sadface: Sorry, this user has been locked out.', { exact: true })
  await expect(errorMsg).toBeVisible();
});