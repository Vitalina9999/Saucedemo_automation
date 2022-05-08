class ProductsPage {

    get productsCount() {
        return 5;
    }

    async AddToCartFirstItem() {
        const inventoryList = await $('.inventory_list');
        await inventoryList.$$('button')[0].click();
    }
}

module.exports = new ProductsPage();