class CheckoutComplete {
    async CheckoutText() {
        const checkoutText = await $('.complete-header').getText();
        checkoutText.isEqual('THANK YOU FOR YOUR ORDER');
    };
}
module.exports = new CheckoutComplete();