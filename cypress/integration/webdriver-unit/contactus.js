/// <reference types="Cypress" />

describe("Test Contact Us form via WebDriverUni", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.visit(Cypress.env("webdriver_uni") + "/Contact-Us/contactus.html");
    // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.document().should("have.property", "charset", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
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
  it("should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.webdriverUniSubmissionForm(
      globalThis.data.first_name,
      globalThis.data.last_name,
      " ",
      globalThis.data.comment,
      "body",
      "Error: Invalid email address"
    );
  });
  /**
   * does the same as the above
   * but extract data from the env file
   * */
  it("should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.webdriverUniSubmissionForm(
      Cypress.env("firstName"),
      Cypress.env("lastName"),
      " ",
      globalThis.data.comment,
      "body",
      "Error: Invalid email address"
    );
  });
  /**
   * this test does not open a new tab
   * when clicking on a new link tab
   * the jquery removeAttr eliminates this
   */
  it("should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit(Cypress.env("webdriver_uni"));
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type(globalThis.data.first_name);
    cy.get('[name="last_name"]').type(globalThis.data.last_name);
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
