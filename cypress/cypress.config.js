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
      lon001: "2" ,
      lat002: "41",
      lon002: "2" ,
      lat003: "48.85",
      lon003: "2.35",
      lat004: "6.24",
      lon004: "-75.58",
      lat005: "40.71",
      lon005: "-74.00",
      lat006: "47.49",
      lon006: "19.03",
      lat007: "34.528",
      lon007: "69.18",
      lat008: "0",
      lon008: "0",
      lat009: "37.19",
      lon009: "-3.61",
      lat010: "-0.67", 
      lat010: "-90.32",
      },
  },
})
