/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit("http://www.webdriveruniversity.com/");
});

describe("Interact with dropdown lists via webdriver", () => {
  it("Select specific values via select dropdown lists", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get('#dropdowm-menu-1').select('c#').should('have.value' ,'c#')
    cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven')
    cy.get('#dropdowm-menu-3').select('jquery').should('have.value','jquery')
  });
});
