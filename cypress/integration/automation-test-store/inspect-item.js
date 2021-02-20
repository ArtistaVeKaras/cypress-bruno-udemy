/// <reference types="Cypress" />

describe("Automation Test Store", () => {
  it("should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.document().should("have.property", "charset", "UTF-8");
    cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then((itemHeader) =>{
      console.log('Selected text is: ' + itemHeader.text())
    })
    console.log('this shoul log now')
  });
  it("should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
  });
});
