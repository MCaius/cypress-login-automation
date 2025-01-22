import { LoginPage } from '../../support/pages/LoginPage';

describe('UC-1 Test Login form with empty credentials', () => {
    beforeEach(() => {
        cy.fixture('users').as('userData');
    });

    it('Login attempt with empty fields', function() {
        const loginPage = new LoginPage();
        
        cy.visit('/');
        
        loginPage
            .loginWithEmptyFields(
                this.userData.randomUser.username,
                this.userData.randomUser.password
            )
            .verifyErrorMessage('Username is required');
    });
});