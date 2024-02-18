const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com", // กำหนด baseUrl
    invalidProperty: true,
    pageLoadTimeout:  10000
    
  },
  mocha: {
    reporter: "cypress-mochawesome",
    reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      html: true,
      json: true
    }
  }
});
