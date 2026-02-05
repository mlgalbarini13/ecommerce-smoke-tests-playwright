import { test, expect } from '@playwright/test';

test('TC09 — Checkout completed successfully', async ({ page }) => {
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

    const checkoutBtn = page.getByRole('button', { name: 'Checkout' });
    await checkoutBtn.click();

    const firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    const lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    const zipInput = page.getByRole('textbox', { name: 'Zip/Postal Code' });

    await firstNameInput.fill('Jane');
    await lastNameInput.fill('Doe');
    await zipInput.fill('12345');

    const continueBtn = page.locator('input[type="submit"]');
    await continueBtn.click();

    const paymentInfoText = page.getByText('Payment Information:', { exact: true });
    await expect(paymentInfoText).toBeVisible();

    const finishBtn = page.getByRole('button', { name: 'Finish' });
    await finishBtn.click();

    const successMsg = page.getByRole('heading', { name: 'Thank you for your order!' });
    await expect(successMsg).toBeVisible();
});

test('TC10 — Checkout validation: required data', async ({ page }) => {
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

    const checkoutBtn = page.getByRole('button', { name: 'Checkout' });
    await checkoutBtn.click();

    const firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    const lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    const zipInput = page.getByRole('textbox', { name: 'Zip/Postal Code' });

    await firstNameInput.fill('');
    await lastNameInput.fill('');
    await zipInput.fill('');

    const continueBtn = page.locator('input[type="submit"]');
    await continueBtn.click();

    await expect(firstNameInput).toHaveClass(/error/);
    await expect(lastNameInput).toHaveClass(/error/);
    await expect(zipInput).toHaveClass(/error/);

    const errorBtn = page.getByRole('heading', { name: 'Error: First Name is required' });
    await expect(errorBtn).toBeVisible();
});


