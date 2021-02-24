class AutoStoreHairCarePagePo {
  addProductToBasket(productName) {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes(productName)) {
        cy.log($el.text());
        cy.get(".productcart").eq(index).click();
      }
    });
  }
}

export default AutoStoreHairCarePagePo;
