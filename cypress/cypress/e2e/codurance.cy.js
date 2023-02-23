/// <reference types="Cypress" />

describe('OpenWeather', () => {

     it('Test main properties (GET)', () => {
 
         let res
         cy.request('GET', Cypress.env("baseUrl")+"data/2.5/weather?lat="
            +Cypress.env("lat001")+"&lon="
            +Cypress.env("lon001")+"&appid="
            +Cypress.env("APIkey"))
             .should((response) => {
                 expect(response.status).to.eq(200)

                 expect(response.body).has.property('coord')
                 expect(response.body).has.property('weather')
                 expect(response.body).has.property('base')
                 expect(response.body).has.property('main')
                 expect(response.body).has.property('visibility')
                 expect(response.body).has.property('wind')
                 expect(response.body).has.property('clouds')
                 expect(response.body).has.property('dt')
                 expect(response.body).has.property('sys')
                 expect(response.body).has.property('timezone')
                 expect(response.body).has.property('id')
                 expect(response.body).has.property('name')
                 expect(response.body).has.property('cod')

              })
            })

     it('Test main properties (POST)', () => {

         cy.request('POST', Cypress.env("baseUrl")+"data/2.5/weather?lat="
            +Cypress.env("lat002")+"&lon="
            +Cypress.env("lon002")+"&appid="
            +Cypress.env("APIkey"))
             .should((response) => {
                 expect(response.status).to.eq(200)

                 expect(response.body).has.property('coord')
                 expect(response.body).has.property('weather')
                 expect(response.body).has.property('base')
                 expect(response.body).has.property('main')
                 expect(response.body).has.property('visibility')
                 expect(response.body).has.property('wind')
                 expect(response.body).has.property('clouds')
                 expect(response.body).has.property('dt')
                 expect(response.body).has.property('sys')
                 expect(response.body).has.property('timezone')
                 expect(response.body).has.property('id')
                 expect(response.body).has.property('name')
                 expect(response.body).has.property('cod')

              })
            })

    it('Test nested values', () => {
        cy.api('GET', Cypress.env("baseUrl")+"data/2.5/weather?lat="
        +Cypress.env("lat001")+"&lon="
        +Cypress.env("lon001")+"&appid="
        +Cypress.env("APIkey"))
        .should((response) => {
            expect(response.status).to.eq(200)
        })
             cy.contains('"coord"').should('exist')
             cy.contains('"lat"').should('exist')
             cy.contains('"lon"').should('exist')
             cy.contains('"loX666":').should('not.exist')       // negative case
             
             cy.contains('"weather":').should('exist')
             cy.contains('"id":').should('exist')               // id has many occurrences!!!
             cy.contains('"main"').should('exist')              // main has many occurences!!!
             cy.contains('"icon"').should('exist')

             cy.contains('"base"').should('exist')
             cy.contains('"main"').should('exist')              // main has many occurences!!!
             cy.contains('"temp"').should('exist')
             cy.contains('"feels_like"').should('exist')
             cy.contains('"temp_min"').should('exist')
             cy.contains('"temp_max"').should('exist')
             cy.contains('"pressure"').should('exist')
             cy.contains('"humidity"').should('exist')
             cy.contains('"sea_level"').should('exist')
             cy.contains('"grnd_level"').should('exist')

             cy.contains('"visibility"').should('exist')

             cy.contains('"wind"').should('exist')
             cy.contains('"speed"').should('exist')
             cy.contains('"deg"').should('exist')
             cy.contains('"gust"').should('exist')

             cy.contains('"clouds"').should('exist')
             cy.contains('"all"').should('exist')

             cy.contains('"dt"').should('exist')

             cy.contains('"sys"').should('exist')
             cy.contains('"type"').should('exist')
             cy.contains('"id"').should('exist')                        // id has many occurrences!!!
             cy.contains('"country"').should('exist')
             cy.contains('"sunrise"').should('exist')
             cy.contains('"sunset"').should('exist')

             cy.contains('"timezone"').should('exist')

             cy.contains('"id"').should('exist')

             cy.contains('"name"').should('exist')

             cy.contains('"cod"').should('exist')
             
          })
 })