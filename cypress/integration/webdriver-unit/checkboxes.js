/// <reference types="Cypress" />

describe('Verify chekcboxes via webdriveruni ', () =>{
    it('Confirm links redirect to the correct pages' ,() =>{ 
        cy.visit('http://www.webdriveruniversity.com/')
        cy.document().should('have.property', 'charset', 'UTF-8')
        cy.title().should('include','WebDriver')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr' ,'target').click()
       
    })
})