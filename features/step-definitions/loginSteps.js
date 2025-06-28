import { Given, When, Then } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';
import LoginPage from '../../pages/loginPage.js';

let browser, page, loginPage;

Given('I am on the login page', async function () {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('I log in with username {string} and password {string}', async function (username, password) {
  await loginPage.login(username, password);
});

Then('I should be redirected to the inventory page', async function () {
  await page.waitForURL('**/inventory.html');
  expect(page.url()).toContain('/inventory.html');
});

When('I log in with invalid username {string} and password {string}', async function (username, password) {
  await loginPage.login(username, password);
});

Then('I should see a login error message', async function () {
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});