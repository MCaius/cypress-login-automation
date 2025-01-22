// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Handle test completion logging
afterEach(function () {
  const testState = this.currentTest.state;
  const testTitle = this.currentTest.title;
  
  // Take screenshot on failure
  if (testState === 'failed') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotName = `${testTitle}-${timestamp}`;
    cy.screenshot(screenshotName, { capture: 'fullPage' });
  }
  
  // Log test status
  const status = testState === 'passed' ? 'PASSED' : 'FAILED';
  cy.task('log', `Test "${testTitle}" has ${status}`);
});
  
  