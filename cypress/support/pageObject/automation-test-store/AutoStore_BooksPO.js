class AutoStoreBooksPo {
  addBooksProductToBasket() {
    globalThis.data.bookName.forEach(function (element) {
      cy.addProductToBasket(element).then(() => {});
    });
    cy.get(".dropdown-toggle > .fa").click();
  }
}

export default AutoStoreBooksPo;
