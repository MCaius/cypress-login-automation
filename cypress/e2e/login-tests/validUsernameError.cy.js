import { LoginPage } from '../../support/pages/LoginPage';

describe('UC-2 Test Login form with credentials by passing Username', () => {
    beforeEach(() => {
        cy.fixture('users').as('userData');
    });

    it('Login attempt without password', function() {
        const loginPage = new LoginPage();
        
        cy.visit('/');
        
        loginPage
            .loginWithoutPassword(
                this.userData.validUser.username,
                this.userData.validUser.password
            )
            .verifyErrorMessage('Password is required');
    });
});