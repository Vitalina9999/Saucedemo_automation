class CheckoutStepTwoPage {
        async ClickFinishBtn() {
        const checkoutBtn = await $('#finish').click();
    };
}
module.exports = new CheckoutStepTwoPage();