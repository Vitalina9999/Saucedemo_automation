class CheckoutStepOnePage {
    async FillCheckoutForm() {
        const firstname = await $('#first-name').setValue('Junior');
        const lastname = await $('#last-name').setValue('Automation');
        const postalCode = await $('#postal-code').setValue('12345');
    };

    async ClickContinueBtn() {
        const checkoutBtn = await $('#continue').click();
    };
}
module.exports = new CheckoutStepOnePage();