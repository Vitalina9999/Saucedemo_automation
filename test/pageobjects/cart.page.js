class CartPage {
    async ClickCheckoutBtn() {
        const checkoutBtn = await $('#checkout').click();
    };

    async FillCheckoutForm() {
        const firstname = await $('#first-name').setValue('Junior');
        const lastname = await $('#last-name').setValue('Automation');
        const postalCode = await $('#postal-code').setValue('12345');
    };
  
}
module.exports = new CartPage();