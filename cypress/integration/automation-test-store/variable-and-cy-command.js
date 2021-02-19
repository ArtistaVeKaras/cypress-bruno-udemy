/// <reference types="Cypress" />

describe("Verifying variables, cyress commands and hquery commands", () => {
    it("Navigating to specific product pages", () => {
      cy.visit("https://www.automationteststore.com/");
      cy.get('a[href*="product/category&path"]').contains('Skincare').click()
      cy.get('a[href*="product/category&path"]').contains('Makeup').click()
      cy.get('a[href*="product/category&path"]').contains('Men').click({force: true})
    })
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('a[href*="product/category&path"]').contains('Skincare').click()
        cy.contains('Skincare').then((headertxt) =>{
            cy.log(headertxt.text())
            expect(headertxt.text()).to.eq('Skincare')
        })
      })
})