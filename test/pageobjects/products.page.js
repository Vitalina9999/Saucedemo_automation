class ProductsPage {

    async FetchAllProductsInList() {
        const addToCartProducts = await $$('.btn_inventory');
        for (const addToCartProduct of addToCartProducts) {
            await addToCartProduct.click();
        }
    }

    async ClickFirstProduct() {
        const inventoryList = await $('.inventory_list');
        await inventoryList.$$('button')[0].click();
    }

    async ClickShoppingCart() {
        const shoppingCartLink = await $('.shopping_cart_link').click();
    };
}
module.exports = new ProductsPage();