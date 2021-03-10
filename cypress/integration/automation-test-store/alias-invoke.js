/// <reference types="Cypress" />
beforeEach(() => {
  cy.visit("https://www.automationteststore.com/");
});

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.get('a[href*="product/category&path"]').contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbNail");
    cy.get("@productThumbNail").its("length").should("be.gt", 5);
    cy.get("@productThumbNail").should("include", "Seaweed Conditioner");
  });

  it("Validate a specific product thumbnail challenge", () => {
    cy.get(".thumbnail").as("thumbnail");
    cy.get("@thumbnail").should("have.length", 16);
    cy.get("@thumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it("Lists the amount of non sale product items", () => {
    cy.get(".thumbnail").as("thumbnail");
    cy.get("@thumbnail")
      .find(".oneprice")
      .each(($el) => {
        cy.log($el.text());
      });
  });

  /**
   * same as the above it only splits the
   * $ sign fron the text
   */
  it("Lists the total amount of non sale items", () => {
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get("@itemPrice").then(($linkTxt) => {
      var itemPrice = $linkTxt.split("$");
      for (var i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]); //log each index of the array
      }
    });
  });

  /**
   * same as the above but logs the items prices
   * for the Makeup page
   */
  it("should list the amount of all products in the makeup page", () => {
    cy.get('a[href*="product/category&path"]').contains("Makeup").click();
    cy.get(".pricetag.jumbotron")
      .find(".oneprice")
      .invoke("text")
      .as("itemPrice");
    cy.get("@itemPrice").then(($listPrice) => {
      var itemPrice = $listPrice.split("$");
      for (var i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
      }
    });
  });

  it.only("this test is the same as the above but logs the total amount of the price items", () => {
    cy.get(".pricetag.jumbotron")
      .find(".oneprice")
      .invoke("text")
      .as("itemPrice"); //non sale prices
    cy.get(".pricetag.jumbotron")
      .find(".pricenew")
      .invoke("text")
      .as("newPrice"); // new sale prices

    var itemsTotal = 0;
    cy.get("@itemPrice").then(($linkTxt) => {
      var itemsPriceTotal = 0;
      var price = $linkTxt.split("$");

      for (var i = 0; i < price.length; i++) {
        cy.log(price[i]);
        itemsPriceTotal += Number(price[i]);
      }
      itemsTotal = +itemsPriceTotal;
      cy.log("Non sale price items total: " + itemsTotal);
    });

    cy.get("@newPrice")
      .then(($linkTxt) => {
        var saleItemPrice = 0;
        var salePriceTotal = $linkTxt.split("$");

        for (var i = 0; i < salePriceTotal.length; i++) {
          cy.log(salePriceTotal[i]);
          saleItemPrice += Number(salePriceTotal[i]);
        }
        itemsTotal = +saleItemPrice;
        cy.log("New sale price items total: " + saleItemPrice);
      })
      .then(() => {
        cy.log("The total price of all products: " + itemsTotal);
        expect(itemsTotal).to.equal(527.45);
      });
  });
});
