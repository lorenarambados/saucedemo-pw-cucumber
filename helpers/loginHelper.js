import { chromium } from 'playwright';
import LoginPage from '../pages/loginPage.js';
import InventoryPage from '../pages/InventoryPage.js';

export async function loginUser({ headless = true } = {}) {
  const browser = await chromium.launch({ headless });
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  const inventoryPage = new InventoryPage(page);
  return { browser, page, inventoryPage };
}