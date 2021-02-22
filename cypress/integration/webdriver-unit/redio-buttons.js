/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit("http://www.webdriveruniversity.com/");
});

describe("Handle radio-buttons", () => {
  it("Check specific radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr' ,'target').click({force: true})
    cy.get('#radio-buttons').find("[type='radio']").first().check().should('be.checked')
    cy.get('#radio-buttons').find("[type='radio']").eq(4).check()
  });
  it("Validate the specific state of the radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr' ,'target').click({force: true})
    
    cy.get('#radio-buttons-selected-disabled').as('radioOption')
    cy.get('@radioOption').find("[value='lettuce']").check()
    cy.get('@radioOption').find("[value='lettuce']").check()
    cy.get('@radioOption').find("[value='cabbage']").should('be.disabled')
    
    /** 
     * alternative way of doing the same as the above
    */
    cy.get("[value='lettuce']").check().should('be.checked')
    cy.get("[value='pumpkin']").check().should('be.checked')
    cy.get("[value='cabbage']").should('be.disabled')
  });
});
