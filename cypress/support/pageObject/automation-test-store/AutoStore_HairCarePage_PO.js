class AutoStoreHairCarePagePo {
  addHairCareProductToBasket() {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToBasket(element).then(() => {});
    });
    // cy.get(".dropdown-toggle > .fa").click().debug();
    cy.get(".dropdown-toggle > .fa").click();
  }
}
export default AutoStoreHairCarePagePo;
