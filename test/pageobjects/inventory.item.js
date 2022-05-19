const assert = require('chai').assert;
const expect = require('chai').expect;
class InventoryItemPage {
     async CheckItemDetails() {
          const detailsNameText = await $('.inventory_details_name').getText();
          expect(detailsNameText).not.be.empty;

          const detailsDescriptionText = await $('.inventory_details_desc').getText();
          expect(detailsDescriptionText).not.be.empty;

          const detailsPriceText = await $('.inventory_details_price').getText();
          expect(detailsPriceText).not.be.empty;
          
     }

}
module.exports = new InventoryItemPage();