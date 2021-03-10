class AutoStoreSkinCarePO {
  addSkinCareProductToBasket() {
    globalThis.data.skinCare.forEach(function (element) {
      cy.addProductToBasket(element).then(() => {});
    });
    cy.get(".dropdown-toggle > .fa").click();
  }
}

export default AutoStoreSkinCarePO;
