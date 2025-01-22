class AppLogo {
    constructor() {
        this.selectors = {
            appLogo: '.app_logo'
        };
    }

    verifyLogoText(expectedText = 'Swag Labs') {
        cy.get(this.selectors.appLogo)
            .should('exist')
            .and('be.visible')
            .and('have.text', expectedText);
        return this;
    }
}

const appLogo = new AppLogo();
export default appLogo; 