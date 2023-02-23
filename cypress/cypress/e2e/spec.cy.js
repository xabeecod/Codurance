/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://tickets.vueling.com')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.wait(1000)
    // 2 adults
     cy.get('#DropDownListPassengerType_ADT_2').click()
    // 1 kid
    cy.get('#AvailabilitySearchInputSearchView_DropDownListPassengerType_CHD').select(1)
    cy.wait(1000)
    cy.get('#AvailabilitySearchInputSearchView_TextBoxMarketOrigin1')
    cy.wait(1000)
    cy.get('#AvailabilitySearchInputSearchView_TextBoxMarketOrigin1').click().type('Bar').wait(1000).type('Cypress.io{enter}')
    cy.get('#AvailabilitySearchInputSearchView_TextBoxMarketDestination1').click().type('Mad').wait(1000).type('Cypress.io{enter}')
    
    // departure dete
    cy.get('a[class="ui-state-default"').contains("24").click()
    // return date
    cy.get('a[class="ui-state-default"').contains("27").click().wait(1000)

    cy.get('#AvailabilitySearchInputSearchView_btnClickToSearchNormal > .bt_link').click()

  })
})
