const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');


describe('My Login application', () => {
   
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('standard_user', 'secret_sauce');
              
    });  
    
    it('should not login with invalid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('fake', 'fake');
        await expect(SecurePage.errorMessage).toBeExisting();
        await expect(SecurePage.errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
    });

    it('should show error message with lockedout user', async () => {
        await LoginPage.open();

        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(SecurePage.errorMessage).toBeExisting();
        await expect(SecurePage.errorMessage).toHaveTextContaining('Epic sadface: Sorry, this user has been locked out.');
              
    });  
    
});
