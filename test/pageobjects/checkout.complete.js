const assert = require('chai').assert;

class CheckoutComplete {
    async CheckoutText() {
        const checkoutText = await $('.complete-header').getText();
        assert.equal(checkoutText, "THANK YOU FOR YOUR ORDER");
    };
}
module.exports = new CheckoutComplete();