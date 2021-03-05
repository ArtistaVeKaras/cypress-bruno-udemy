/// <reference types="Cypress" />

describe('Validate webdriveruni homepage links', () =>{
    it('Confirm links redirect to the correct pages' ,() =>{ 
        cy.visit('http://www.webdriveruniversity.com/')
        cy.document().should('have.property', 'charset', 'UTF-8')
        cy.title().should('include','WebDriver')
        cy.get('#contact-us').invoke('removeAttr' ,'target').click({force: true})
        cy.url().should('include', 'Contact-Us')
        
        cy.go('back')
        cy.reload(true) //reload without using cache
        cy.go('forward')
        cy.url().should('include', 'Contact-Us')
        
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr','target').click({force: true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')
    })
    it('Confirm links redirect to the correct pages challenges' ,() =>{  
        cy.visit('http://www.webdriveruniversity.com/')
        cy.document().should('have.property', 'charset', 'UTF-8')
        cy.title().should('include','WebDriver')

        cy.get('#to-do-list').invoke('removeAttr' ,'target').click({force: true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
        cy.title().should('include','WebDriver')

    })
})