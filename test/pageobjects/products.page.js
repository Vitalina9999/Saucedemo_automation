const  Page = require('.//inventory');

class ProductsPage extends Page{

    // get productsCount() {
    //     return 5;
    // }

    // async AddToCartFirstItem() {
    //     const inventoryList = await $('.inventory_list');
    //     await inventoryList.$$('button')[0].click();
    // }

    async FetchAllProductsInList() {
        const addToCartProducts = await $$('.btn_inventory')
        await addToCartProducts.forEach(async (addToCartProduct) => {
            await addToCartProduct.click()
        })
    }


}

module.exports = new ProductsPage();