const ProductsPage = require('../pageobjects/products.page');
const LoginPage = require('../pageobjects/login.page');
const InventoryItemPage = require('../pageobjects/inventory.item');
describe('My Login application', () => {
    it('should check item details', async () => {
        LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await ProductsPage.OpenFirstProduct();
        await InventoryItemPage.CheckItemDetails();
       });  

});