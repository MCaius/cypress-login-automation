import BasePage from './BasePage';
import loginForm from '../components/LoginForm';

export class LoginPage extends BasePage {
    constructor() {
        super();
        this.url = '/';
    }

    login(username, password) {
        loginForm
            .typeUsername(username)
            .typePassword(password)
            .clickLogin();
        return this;
    }

    loginWithEmptyFields(username, password) {
        loginForm
            .typeUsername(username)
            .clearUsername()
            .typePassword(password)
            .clearPassword()
            .clickLogin();
        return this;
    }

    loginWithoutPassword(username, password) {
        loginForm
            .typeUsername(username)
            .typePassword(password)
            .clearPassword()
            .clickLogin();
        return this;
    }

    verifyErrorMessage(message) {
        loginForm.verifyErrorMessage(message);
        return this;
    }
}