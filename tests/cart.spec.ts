import { test, expect } from '@playwright/test';

test('TC06 — Add a product to the cart from Inventory', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();

    const addToCartBtn = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
    await addToCartBtn.click();

    const cartBtn = page.locator('.shopping_cart_container');
    await cartBtn.click();

    const productItem = page.getByText('Sauce Labs Backpack', { exact: true });
    await expect(productItem).toBeVisible();
});


test('TC07 — Remove product from cart', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();

    const addToCartBtn = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
    await addToCartBtn.click();

    const cartBtn = page.locator('.shopping_cart_container');
    await cartBtn.click();

    const productItem = page.getByText('Sauce Labs Backpack', { exact: true });
    await expect(productItem).toBeVisible();

    const removeBtn = page.getByRole('button', { name: 'Remove' });
    await removeBtn.click();

    await expect(productItem).not.toBeVisible();
});


test('TC08 — Continue shopping from the cart', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();

    const addToCartBtn = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
    await addToCartBtn.click();

    const cartBtn = page.locator('.shopping_cart_container');
    await cartBtn.click();

    const productItem = page.getByText('Sauce Labs Backpack', { exact: true });
    await expect(productItem).toBeVisible();

    const continueBtn = page.getByRole('button', { name: 'Continue Shopping' });
    await continueBtn.click();
    await expect(page).toHaveURL(/inventory\.html/);
});