class InventoryPage {
  constructor(page) {
    this.page = page;
    this.firstAddToCartBtn = '.inventory_item:first-child button';
    this.cartIcon = '.shopping_cart_link';
  }

  async addFirstProductToCart() {
    await this.page.click(this.firstAddToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}

export default InventoryPage;