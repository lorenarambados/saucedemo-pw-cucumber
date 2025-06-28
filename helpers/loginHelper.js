import LoginPage from '../pages/loginPage.js';
import InventoryPage from '../pages/inventoryPage.js';

export async function loginUser(page) {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  const inventoryPage = new InventoryPage(page);
  return { inventoryPage };
}