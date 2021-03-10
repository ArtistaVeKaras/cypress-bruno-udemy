/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit(Cypress.env("webdriver_uni"));
});

describe("Handle js alert", () => {
  it("Confirm js alert contains the correct tetxt", () => {
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Validate js alert works correctly when clicked ok", () => {
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  /**
   * press the cancel button
   * same as the above but return false
   * to press the cancel button
   */
  it("Validate js alert works correctly when clicked on cancel challenge", () => {
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click();

    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get(".section-title >#confirm-alert-text").contains(
      "You pressed Cancel!"
    );
  });

  it("Validate js alert works correctly when clicked on cancel challenge", () => {
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});
