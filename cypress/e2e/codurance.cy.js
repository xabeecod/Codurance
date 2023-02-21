/// <reference types="Cypress" />

describe('OpenWeather', () => {

 /*   beforeEach ('Common date', () => {
        baseUrl = "http://api.openweathermap.org/"
        APIkey = "c867e0d33a197ee4c986b13a9338a32d"
    })*/

    it('Test Case 1', () => {
            //cy.visit(Cypress.env("baseUrl"))

      //      cy.visit("https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=c867e0d33a197ee4c986b13a9338a32d").then((response) =>  {
        cy.request('POST',"https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=c867e0d33a197ee4c986b13a9338a32d")
            .then(intercept("POST","api.openweather",(req) => 
            {
            // you can now access the request body, response body, status,
            log(req.body)
            })
    })
  })
