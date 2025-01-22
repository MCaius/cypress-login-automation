# Cypress Login Form Automation
A comprehensive example of automated testing using Cypress and the Page Object Model pattern, enhanced with a component-based architecture. This project demonstrates automated testing of the SauceDemo website's login functionality, implementing best practices such as Page Objects, Component Objects, and structured test organization.

## 🚀 Features
- Modern component-based architecture
- Page Object Model (POM) implementation
- Automatic screenshot capture on test failure
- Comprehensive logging system
- Test data management using fixtures
- Organized test structure:
  - Component-level testing
  - Page-level testing
  - End-to-end scenarios

## 🛠️ Tech Stack
- Cypress
- JavaScript
- Node.js
- Chrome (default browser)

## 📋 Prerequisites
- Node.js (v14 or higher)
- Chrome browser installed
- Git

## 🔧 Installation
1. Clone the repository:
```bash
git clone https://github.com/MCaius/cypress-login-automation
```
2. Navigate to the project directory:
```bash
cd cypress-login-automation
```
3. Install dependencies:
```bash
npm install
```

## 🔧 Configuration
1. Open Cypress:
```bash
npx cypress open
```
or
```bash
npx cypress run
```

## 🏗️ Project Structure
```
cypress/
├── e2e/
│   └── login-tests/
│       ├── emptyFieldsLogin.cy.js
│       ├── successfulLogin.cy.js
│       └── validUsernameError.cy.js
├── fixtures/
│   └── users.json
└── support/
    ├── components/
    │   ├── AppLogo.js
    │   └── LoginForm.js
    └── pages/
        ├── BasePage.js
        ├── InventoryPage.js
        └── LoginPage.js
```

## 🧪 Test Scenarios
- **UC-1**: Validates login form with empty credentials
  - Types and clears credentials
  - Verifies empty field error message
- **UC-2**: Tests login attempt with username only
  - Validates password requirement error
- **UC-3**: Verifies successful login
  - Tests navigation to inventory page
  - Validates logo presence

## 📝 Architecture Highlights
- **Component-Based Structure**: Reusable UI components (LoginForm, AppLogo)
- **Page Objects**: Encapsulated page-specific logic
- **Base Page**: Common functionality inheritance
- **Fixtures**: External test data management

## 📊 Test Reports
- Automatic screenshot capture on failure
- Console-based test results
- Custom logging to `cypress.log`
- Video recording of test runs

## ⚙️ Configuration
Key configurations in `cypress.config.js`:
- Base URL configuration
- Screenshot and video settings
- Custom task definitions
- Directory structure initialization

## 👤 Author
MCaius

## 🙏 Acknowledgments
- SauceDemo for providing the test website
- Cypress team for the excellent documentation and framework

## 📝 Task Description
Launch URL: https://www.saucedemo.com/

**UC-1 Test Login form with empty credentials:**
- Enter and clear credentials
- Verify "Username is required" error

**UC-2 Test Login form with partial credentials:**
- Enter username only
- Verify "Password is required" error

**UC-3 Test Login form with valid credentials:**
- Login with valid credentials
- Verify successful navigation to inventory page

Implementation follows best practices:
- Component-based architecture
- Page Object Pattern
- Fixture-based test data
- Automated logging and screenshots
