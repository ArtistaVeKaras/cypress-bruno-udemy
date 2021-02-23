/// <reference types="Cypress" />

describe("Add multiple items to basket", () => {
  before(function () {
    cy.fixture("product").then(function (data) { //reads data from json file
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    cy.visit("https://www.automationteststore.com/");
    cy.get('a[href*="product/category&path"]').contains("Hair Care").click();
  });
  it("Add specific items to basket", () => {
     globalThis.data.productName.forEach(function(element){
         cy.addProductToBasket(element)
     })
  });
});
