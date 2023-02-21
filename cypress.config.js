const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      chromeWebSecurity: false
    },
  env: {
      baseUrl: "http://api.openweathermap.org/",
      APIkey: "c867e0d33a197ee4c986b13a9338a32d",
      lat001: "57",
      lat001: "2" 
      },
  },
});
