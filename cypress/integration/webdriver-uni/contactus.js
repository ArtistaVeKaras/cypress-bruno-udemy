/// <reference types="Cypress" />
import HomePage_PO from "../../support/pageObject/webdriver-uni/Homepage_PO";
import ContactUsPage_PO from "../../support/pageObject/webdriver-uni/ContactUsPage_PO";

describe("Test Contact Us form via WebDriverUni", () => {
  const contactUsPage = new ContactUsPage_PO();
  const homepage = new HomePage_PO();

  before(function () {
    /**
     * get data from the fixture file
     */
    cy.fixture("example").then(function (data) {
      this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    Cypress.config("defaultCommandTimeout", 2000); //overrides the default set timeout to 20s
    homepage.visitHomePage();
    homepage.contactUsPage();
    // cy.visit(Cypress.env("webdriver_uni") + "/Contact-Us/contactus.html"); // both methods work
    // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
  });

  it("should be able to submit a successful submission via contact us form", () => {
    contactUsPage.contactFormSubmission(
      globalThis.data.first_name,
      globalThis.data.last_name,
      globalThis.data.email,
      globalThis.data.comment,
      "h1",
      "Thank You for your Message!"
    );
  });

  /**
   * the same as the above but
   * uses the cypress command.Add file
   */
  it.only("should not be able to submit a successful submission via contact us form as all fields are required", () => {
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
   * and does not include the email
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
   * the jquery removeAttr eliminates this....
   * this is just a comment
   */
  it("should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit(Cypress.env("webdriver_uni"));
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type(globalThis.data.first_name);
    cy.get('[name="last_name"]').type(globalThis.data.last_name);
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });

  /**
   * the same as the above but the test only runs if
   * the browser is set to firefox
   */
  it("should not be able to submit a successful submission via contact us form as all fields are required", () => {
    if (Cypress.isBrowser("firefox")) {
      cy.log("I am running in a firefox browser");
      //code block goes here
    } else {
      cy.visit(Cypress.env("webdriver_uni"));
      cy.get("#contact-us")
        .invoke("removeAttr", "target")
        .click({ force: true });
      cy.get('[name="first_name"]').type(globalThis.data.first_name);
      cy.get('[name="last_name"]').type(globalThis.data.last_name);
      cy.get('[type="submit"]').click();
      cy.get("body").contains("Error: all fields are required");
    }
  });
});
