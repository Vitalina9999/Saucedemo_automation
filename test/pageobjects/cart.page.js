class CartPage {
    async ClickCheckoutBtn() {
        const checkoutBtn = await $('#checkout').click();
    };

    
  
}
module.exports = new CartPage();