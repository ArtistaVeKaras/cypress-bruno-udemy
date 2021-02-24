/// <reference types="Cypress" />
import AutoStore from "../../support/pageObject/automation-test-store/AutoStore_HomePage";
import AutoStoreHairCarePagePo from "../../support/pageObject/automation-test-store/AutoStore_HairCarePage_PO";

describe("Add multiple items to basket", () => {
  const autoStore = new AutoStore();
  const hairCare = new AutoStoreHairCarePagePo();
  before(function () {
    cy.fixture("product").then(function (data) {
      // reads data from json file both config work based on your machine
      this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    autoStore.visitAutoStore();
    autoStore.clickTheHairLink();
  });

  it("Add specific items to basket", () => {
    globalThis.data.productName.forEach(function (element) {
      hairCare.addProductToBasket(element);
    });
  });
});
