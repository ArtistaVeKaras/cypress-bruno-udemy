/// <reference types="Cypress" />
import AutoStore from "../../support/pageObject/automation-test-store/AutoStore_HomePage";

describe("Automation Test Store", () => {
  beforeEach(() => {
    const autoStore = new AutoStore();
    cy.visit(Cypress.env("autoStore"));
    autoStore.clickTheHairLink();
  });

  it("Log information of all hair products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index:" + index, " : " + $el.text()); //iterate each element and log the results
    });
  });

  it("Add specific product to basket", () => {
    /**
     * this test takes a parameter from the command file
     * and its possible to change the desired product
     */
    cy.addProduct("Pantene Pro-V Conditioner, Classic Care");
  });

  it("Add another specific product to baske onet", () => {
    cy.addProduct("Eau Parfumee au The Vert Shampoo");
  });

  it("Add another specific product to basket two", () => {
    cy.addProduct("Seaweed Conditioner");
  });

  it("Add another specific product to basket three", () => {
    cy.addProduct("Curls to straight Shampoo");
  });
});
