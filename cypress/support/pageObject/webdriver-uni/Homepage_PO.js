class HomePage_PO {
  visitHomePage() {
    cy.log("Starting Test:");
    cy.visit(Cypress.env("webdriver_uni"));
  }
  contactUsPage() {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.document().should("have.property", "charset", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
  }
}

export default HomePage_PO;
