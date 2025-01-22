const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

// Define all required directories
const REQUIRED_DIRS = {
  screenshots: path.join(__dirname, 'cypress', 'screenshots'),
  logs: path.join(__dirname, 'logs')
};

// Create necessary directories and initialize log file
const initializeDirectories = () => {
  // Create directories if they don't exist
  Object.values(REQUIRED_DIRS).forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

// Initialize everything before configuration
initializeDirectories();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    screenshotsFolder: REQUIRED_DIRS.screenshots,
    video: true,
    modifyObstructiveCode: false, // avoid boot protection
    chromeWebSecurity: false, // avoid boot protection
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // Register the log task
      on('task', {
        log(message) {
          console.log(message);
          const logPath = path.join(REQUIRED_DIRS.logs, 'cypress.log');
          const timestamp = new Date().toISOString();
          fs.appendFileSync(logPath, `${timestamp}: ${message}\n`);
          return null;
        },
        // Add task to ensure screenshot directory exists
        ensureScreenshotsFolder() {
          const screenshotsPath = path.join(__dirname, 'cypress', 'screenshots');
          if (!fs.existsSync(screenshotsPath)) {
            fs.mkdirSync(screenshotsPath, { recursive: true });
          }
          return null;
        }
      });

      // Ensure screenshots folder exists when Cypress starts
      on('before:run', async () => {
        await on('task', { ensureScreenshotsFolder: null });
      });
    },
    // Screenshot configuration
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true
  },
});
