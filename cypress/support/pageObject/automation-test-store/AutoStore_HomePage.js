class AutoStore {
  visitAutoStore() {
    cy.visit(Cypress.env("autoStore"));
  }
  clickTheHairLink() {
    cy.get('a[href*="product/category&path"]').contains("Hair Care").click();
  }
  clickTheBookLink() {
    cy.get('a[href*="product/category&path"]').contains("Books").click();
  }

  clickTheSkinCare() {
    cy.get('a[href*="product/category&path"]').contains("Skincare").click();
  }
}

export default AutoStore;
