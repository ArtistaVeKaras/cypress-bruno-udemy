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
        cy.contains('Skincare').then(($headertxt) =>{
            cy.log($headertxt.text())
            expect($headertxt.text()).to.eq('Skincare')
        })
      })
      it.only("Navigating to specific product pages", () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact');

        //Use cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name:')
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_12').should('contain','Email:')
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_13').should('contain','Enquiry:')
    
        //Jquery approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(($itemText) =>{
          const firstNameTxt = $itemText.find('#field_11').text()
          expect(firstNameTxt).to.contain('First name:')
        }) 
      })
})