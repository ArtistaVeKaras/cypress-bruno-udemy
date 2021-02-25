class AutoStoreHairCarePagePo {
  addHairCareProductToBasket() {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToBasket(element).then(() => {
        // debugger;
        //freezes the test in dev tools.
      });
    });
    cy.get(".dropdown-toggle > .fa").click().debug();
  }
}
export default AutoStoreHairCarePagePo;
