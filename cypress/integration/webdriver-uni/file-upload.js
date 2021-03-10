/// <reference types="Cypress" />

describe("Test upload webdriveruni", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("webdriver_uni"));
    cy.document().should("have.property", "charset", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("Upload a file....", () => {
    cy.fixture("cube.png", "base64").then((fileContent) => {
      cy.get("#myFile").attachFile(
        {
          fileContent,
          fileName: "cube.png",
          mimeType: "image.png",
        },
        {
          uploadType: "input",
        }
      );
    });
    cy.get("#submit-button").click();
  });

  it("Upload no file....", () => {
    cy.get("#submit-button").click();
  });
});
