class AutoStore{
  visitAutoStore(){
    cy.visit(Cypress.env("autoStore"))
  }
  clickTheHairLink(){
    cy.get('a[href*="product/category&path"]').contains("Hair Care").click();
  }
}

export default AutoStore;