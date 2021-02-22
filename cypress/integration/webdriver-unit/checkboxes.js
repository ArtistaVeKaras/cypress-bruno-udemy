/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('http://www.webdriveruniversity.com/')
    cy.document().should('have.property', 'charset', 'UTF-8')
    cy.title().should('include','WebDriver')
})

describe('Verify chekcboxes via webdriveruni ', () =>{
    it.skip('Check and validate checkboxes' ,() =>{ 
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr' ,'target').click()
        cy.get('#checkboxes > :nth-child(1) > input').as('option1')
        cy.get('@option1').check().should('be.checked')
    })
    it.skip('Check an validate checkboxes are unchecked', () =>{
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr' ,'target').click({force: true})
        cy.get('#checkboxes > :nth-child(5) > input').as('option3')
        cy.get('@option3').uncheck().should('not.be.checked')
    })
    it('Check multiple checkboxes', () =>{
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr' ,'target').click({force: true})
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).check().should('be.checked')
    })
})