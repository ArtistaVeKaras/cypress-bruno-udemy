const {
  Before,
  After,
  Given,
  Then,
} = require("cypress-cucumber-preprocessor/steps");
const url = "https://google.com";

Given("I open Google page", () => {
  cy.visit(url);
});
