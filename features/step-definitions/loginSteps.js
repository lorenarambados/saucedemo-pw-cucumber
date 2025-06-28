import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import LoginPage from '../../pages/loginPage.js';

Given('I am on the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('I log in with username {string} and password {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('I should be redirected to the inventory page', async function () {
  await this.page.waitForURL('**/inventory.html');
  await expect(this.page).toHaveURL(/.*inventory.html/);
});

When('I log in with invalid username {string} and password {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('I should see a login error message', async function () {
  const errorMessage = this.page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});
