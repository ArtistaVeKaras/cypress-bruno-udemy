const {
  Before,
  After,
  Given,
  Then,
} = require("cypress-cucumber-preprocessor/steps");
let stub;

Before(() => {
  cy.log("Executing before step");
  stub = cy.stub();
});

const url = "https://webdriveruniversity.com/Login-Portal/index.html";

Given("I access the WebdriverUnicersity Login Portal page", () => {
  cy.visit(url);
});

When("I enter a username {word}", (username) => {
  cy.get("#text").type(username);
});

And("I enter a password {word}", (password) => {
  cy.get("#password").type(password);
});

And("I click on the login button", () => {
  cy.get("#login-button").click();
  cy.on("window:alert", stub);
});

Then(
  "I should be presented with the following message {word} {word}",
  (message, message1) => {
    const expectedMessage = message + " " + message1;
    cy.log(expectedMessage);
    cy.log(stub.getCall(0));
    expect(stub.getCall(0)).to.be.calledWith(expectedMessage);
  }
);
