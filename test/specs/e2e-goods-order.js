const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');

describe('E2E goods order', () => {

    it('order succesfull', async () => {

        LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

       // await ProductsPage.AddToCartFirstItem();
        
       await ProductsPage.FetchAllProductsInList();
       // await ProductsPage.GoToCart();

    });

});
