class LoginForm {
    constructor() {
        this.selectors = {
            usernameInput: '#user-name',
            passwordInput: '#password',
            loginButton: '#login-button',
            errorMessage: '.error-message-container.error'
        };
    }

    typeUsername(username) {
        cy.get(this.selectors.usernameInput).type(username);
        return this;
    }

    typePassword(password) {
        cy.get(this.selectors.passwordInput).type(password);
        return this;
    }

    clearUsername() {
        cy.get(this.selectors.usernameInput).clear();
        return this;
    }

    clearPassword() {
        cy.get(this.selectors.passwordInput).clear();
        return this;
    }

    clickLogin() {
        cy.get(this.selectors.loginButton).click();
        return this;
    }

    verifyErrorMessage(message) {
        cy.get(this.selectors.errorMessage)
            .should('exist')
            .and('include.text', message);
        return this;
    }

    login(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
        return this;
    }
}

const loginForm = new LoginForm();
export default loginForm; 