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
        +Cypress.env("lat002")+"&lon="
        +Cypress.env("lon002")+"&appid="
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

  it('Request FR', () => {

    cy.api('GET', Cypress.env("baseUrl")+"data/2.5/weather?lat="
        +Cypress.env("lat003")+"&lon="
        +Cypress.env("lon003")+"&appid="
        +Cypress.env("APIkey"))
        .should((response) => {
          expect(response.status).to.eq(200)
          })
          cy.contains('"Paris"').should('exist')

        })

  it('Request CO', () => {

  cy.api('GET', Cypress.env("baseUrl")+"data/2.5/weather?lat="
      +Cypress.env("lat004")+"&lon="
      +Cypress.env("lon004")+"&appid="
      +Cypress.env("APIkey"))
      .should((response) => {
        expect(response.status).to.eq(200)
        })
        cy.contains('"Medellín"').should('exist')

      })

  it('Tiem request US', () => {

    cy.api('POST', Cypress.env("baseUrl")+"data/2.5/weather?lat="
        +Cypress.env("lat005")+"&lon="
        +Cypress.env("lon005")+"&appid="
        +Cypress.env("APIkey"))
        .should((response) => {
          expect(response.status).to.eq(200)
          })
          cy.contains('"New York"').should('exist')

        })

  it('Request HU', () => {

    cy.api('POST', Cypress.env("baseUrl")+"data/2.5/weather?lat="
        +Cypress.env("lat006")+"&lon="
        +Cypress.env("lon006")+"&appid="
        +Cypress.env("APIkey"))
        .should((response) => {
          expect(response.status).to.eq(200)
          })
          cy.contains('Budapest').should('exist')
  })

  it('Request AFG', () => {

    cy.api('POST', Cypress.env("baseUrl")+"data/2.5/weather?lat="
        +Cypress.env("lat007")+"&lon="
        +Cypress.env("lon007")+"&appid="
        +Cypress.env("APIkey"))
        .should((response) => {
          expect(response.status).to.eq(200)
          })
          cy.contains('Kabul').should('exist')
  })

  it('Request Antartica', () => {

    cy.api('POST', Cypress.env("baseUrl")+"data/2.5/weather?lat="
        +Cypress.env("lat008")+"&lon="
        +Cypress.env("lon008")+"&appid="
        +Cypress.env("APIkey"))
        .should((response) => {
          expect(response.status).to.eq(200)
          })
          cy.contains('Globe').should('exist')
  })

  it('Request Granada', () => {

    cy.api('GET', Cypress.env("baseUrl")+"data/2.5/weather?lat="
        +Cypress.env("lat009")+"&lon="
        +Cypress.env("lon009")+"&appid="
        +Cypress.env("APIkey"))
        .should((response) => {
          expect(response.status).to.eq(200)
          })
          cy.contains('Granada').should('exist')
          cy.contains('ES').should('exist')
  })


it('Wrong latitude!', () => {

  cy.api({
    method: 'GET', 
    url:    Cypress.env("baseUrl")+"data/2.5/weather?lat="
          +Cypress.env("lat010")+"&lon="
          +Cypress.env("lon010")+"&appid="
          +Cypress.env("APIkey"),
    failOnStatusCode: false,
    headers:
    {
        'Authorization': 'Basic dXNlckB1c2VyOnVzZXI=',
        'Content-Type': 'text/plain'
    }})
      .should((response) => {
        expect(response.status).to.eq(400)
        })
        cy.contains('wrong latitude"').should('exist')
})  


})