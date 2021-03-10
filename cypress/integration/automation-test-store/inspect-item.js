/// <reference types="Cypress" />

describe("Automation Test Store", () => {
  it("should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.document().should("have.property", "charset", "UTF-8");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(($itemHeader) => {
        console.log("Selected text is: " + $itemHeader.text());
      });
    /**
     * the log function will be executed right before the code is executed
     * the .then logs only after a a certain conditions is meet
     */
    console.log("this should log First");
  });

  it("should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
