import { InventoryPage } from '../../support/pages/InventoryPage';
import { LoginPage } from '../../support/pages/LoginPage';

describe('UC-3 Test Login form with credentials by passing Username & Password', () => {
    beforeEach(() => {
        cy.fixture('users').as('userData');
    });

    it('Login successful', function() {
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();
        
        cy.visit('/');
        
        // Login using the login page
        loginPage
            .login(this.userData.standardUser.username, 
                  this.userData.standardUser.password);
        
        // Verify inventory page
        inventoryPage.verifyPage();
    });
});
