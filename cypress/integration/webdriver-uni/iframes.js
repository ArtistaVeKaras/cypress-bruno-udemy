/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit("/");
});

describe("Handle Iframes & Models", () => {
  it("Handle webdriver iframe * Models", () => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });

    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });
    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find(".modal-body").as("model");
    cy.get("@model").should(($expectTxt) => {
      expect($expectTxt.text()).to.include(
        "Welcome to webdriveruniversity.com"
      );
    });
    /**
     * clicks the last button from the pop alert
     * within the iframe
     */
    cy.get("@iframe").find(".modal-footer>.btn.btn-default").first().as("btn");
    cy.get("@btn").click();
  });
});
