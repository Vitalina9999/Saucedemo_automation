const Page = require('./page');

class SecurePage extends Page {

  get errorMessage() {
    return $('.error-message-container');
  }
}

module.exports = new SecurePage();