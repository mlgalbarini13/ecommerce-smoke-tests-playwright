 import { test, expect } from '@playwright/test';
 
 test('TC05 — Ordenar productos por precio (Low to High)', async ({ page }) => {
    await page.goto('/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: /login/i }).click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();

    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    await page.locator('[data-test="product-sort-container"]').press("Enter")


    const firstPriceText = await page
    .locator("div[class='inventory_list'] div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1)")
    .innerText();

    const secondPriceText = await page
    .locator("div[class='inventory_list'] div:nth-child(2) div:nth-child(2) div:nth-child(2) div:nth-child(1)")
    .innerText();

    const firstPrice = Number(firstPriceText.replace('$', ''));
    const secondPrice = Number(secondPriceText.replace('$', ''));

    expect(firstPrice).toBeLessThanOrEqual(secondPrice);

 });