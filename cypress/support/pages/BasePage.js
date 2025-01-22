export default class BasePage {
    constructor() {
        this.url = '/';
    }

    visit() {
        cy.visit(this.url);
    }

    getElement(selector) {
        return cy.get(selector);
    }

    shouldBeVisible(selector) {
        return cy.get(selector).should('exist').and('be.visible');
    }
} 