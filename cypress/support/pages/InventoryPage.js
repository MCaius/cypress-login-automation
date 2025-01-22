import BasePage from './BasePage';
import appLogo from '../components/AppLogo';

export class InventoryPage extends BasePage {
    constructor() {
        super();
        this.url = 'inventory.html';
    }

    verifyPage() {
        // Verify URL
        cy.url().should('eq', Cypress.config().baseUrl + this.url);
        // Verify logo presence
        appLogo.verifyLogoText();
        return this;
    }

}