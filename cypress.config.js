const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com", // กำหนด baseUrl
    setupNodeEvents(on, config) {
      // implement node event listeners here
        
    },
  },
});
