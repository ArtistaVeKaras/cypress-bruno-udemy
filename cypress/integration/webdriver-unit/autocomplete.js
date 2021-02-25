/// <reference types="Cypress" />

beforeEach(() => {
  // cy.viewport(550, 650);
  cy.visit("https://www.webdriveruniversity.com/");
  cy.document().should("have.property", "charset", "UTF-8");
  cy.title().should("include", "WebDriver");
});

describe("Interact with autocomplpete", () => {
  it("Select specific product via autocomplpete list", () => {
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();

    cy.get("#myInput").type("a");
    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const prod = $el.text();
        cy.log(prod);
        const productSelect = "Avacado";
        if (prod === productSelect) {
          $el.click();
          cy.get("#submit-button").click();
          cy.url().should("include", productSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("g");
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const prod = $el.text();
          const productSelect = "Grapes";
          if (prod === productSelect) {
            $el.click();
            cy.get("#submit-button").click();
            cy.url().should("include", "Grapes");
          }
        });
      });
  });
});
