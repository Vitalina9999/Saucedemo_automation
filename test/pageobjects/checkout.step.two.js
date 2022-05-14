class CheckoutStepTwoPage {
    // async FillCheckoutForm() {
    //     const firstname = await $('#first-name').setValue('Junior');
    //     const lastname = await $('#last-name').setValue('Automation');
    //     const postalCode = await $('#postal-code').setValue('12345');
    // };

    async ClickFinishBtn() {
        const checkoutBtn = await $('#finish').click();
    };
}
module.exports = new CheckoutStepTwoPage();