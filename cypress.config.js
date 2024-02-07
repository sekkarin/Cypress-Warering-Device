const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com", // กำหนด baseUrl
    invalidProperty: true,
    pageLoadTimeout:  10000
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
        
    // },
  },
});
