/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
    cy.fixture('userDetails').then(function (data) {
      this.date = data;
      globalThis.data = data;
    });
  });
  it("should be able to submit a successful submission via contact us form", () => {
    cy.get('a[href$="contact"]')
      .click()
      .then(($contacText) => {
        cy.log("The element text is: ", $contacText.text());
      });
    cy.get("#ContactUsFrm_first_name").type(globalThis.data.first_name);
    cy.get("#ContactUsFrm_email").type(globalThis.data.email);
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("do you provid any discount");
    cy.get('button[title="Submit"]').click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
    cy.log("Test has been completed");
  });
});
