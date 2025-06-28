import { Given, When, Then, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';
import LoginPage from '../../pages/loginPage.js';
import InventoryPage from '../../pages/inventoryPage.js';

Given('I am logged in', async function () {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  this.inventoryPage = new InventoryPage(this.page);
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
  const removeButton = this.page.locator('.cart_item')
    .first()
    .locator('button', { hasText: 'Remove' });
  await removeButton.click();
});

Then('the cart badge should not be visible', async function () {
  const badge = this.page.locator('.shopping_cart_badge');
  await expect(badge).toHaveCount(0);
});

After(async function () {
  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();
});