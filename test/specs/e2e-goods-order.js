const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutStepOnePage = require('../pageobjects/checkout.step.one');
const CheckoutStepTwoPage = require('../pageobjects/checkout.step.two');
const CheckoutComplete = require('../pageobjects/checkout.complete');

describe('E2E goods order', () => {

    it('order succesfull', async () => {

        LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await ProductsPage.ClickFirstProduct();
        await ProductsPage.ClickShoppingCart();
        await CartPage.ClickCheckoutBtn();
        await CheckoutStepOnePage.FillCheckoutForm();
        await CheckoutStepOnePage.ClickContinueBtn();
        await CheckoutStepTwoPage.ClickFinishBtn();
        await CheckoutComplete.CheckoutText();
    });
});
