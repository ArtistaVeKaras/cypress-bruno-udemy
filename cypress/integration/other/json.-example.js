/// <reference types="cypress" />

describe("JSON Object", () => {
  it("JSON Object exmaple", () => {
    const exampleObj = {
      "key": "Tim",
      "key2": "Jone",
    };

    cy.log(exampleObj["key"]);
    cy.log(exampleObj["key2"]);
    cy.log(exampleObj.key);
  });
});
