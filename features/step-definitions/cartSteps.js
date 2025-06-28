import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { loginUser } from '../../helpers/loginHelper.js';

Given('I am logged in', async function () {
  const { browser, page, inventoryPage } = await loginUser();
  this.browser = browser;
  this.page = page;
  this.inventoryPage = inventoryPage;
});

When('I add the first product to the cart', async function () {
  await this.inventoryPage.addFirstProductToCart();
  await this.inventoryPage.goToCart();
});

Then('the cart badge should show {int}', async function (count) {
  const badge = this.page.locator('.shopping_cart_badge');
  await expect(badge).toBeVisible();
  await expect(badge).toHaveText(count.toString());
});

When('I remove the first product from the cart', async function () {
  const removeButton = this.page.locator('.cart_item').first().locator('button', { hasText: 'Remove' });
  await removeButton.click();
});

Then('the cart badge should not be visible', async function () {
  const badge = this.page.locator('.shopping_cart_badge');
  const count = await badge.count();
  expect(count).toBe(0);
});