/// <reference types="Cypress" />

describe("Test Contact Us form via WebDriverUni", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.document().should("have.property", "charset", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.fixture("example").then(function (data) {
      this.data = data;
      globalThis.data = data;
    });
  });
  it("should be able to submit a successful submission via contact us form", () => {
    cy.webdriverUniSubmissionForm(
      globalThis.data.first_name,
      globalThis.data.last_name,
      globalThis.data.email,
      globalThis.data.comment,
      "h1",
      "Thank You for your Message!"
    );
  });
  it.only("should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.webdriverUniSubmissionForm(globalThis.data.first_name, globalThis.data.last_name, " ", globalThis.data.comment,  "body", "Error: Invalid email address")
  });
  /**
   * this test does not open a new tab
   * when clicking on a new link tab
   * the jquery removeAttr eliminates this
   */
  it("should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type(globalThis.data.first_name);
    cy.get('[name="last_name"]').type(last_name);
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
