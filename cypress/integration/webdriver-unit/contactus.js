/// <reference types="Cypress" />

describe('Test Contact Us form via WebDriverUni', () =>{
    it('should be able to submit a successful submission via contact us form' ,() =>{ 
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.property', 'charset', 'UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        cy.get('[name="first_name"]').type('Akira')
        cy.get('[name="last_name"]').type('Last_name')
        cy.get('[name="email"]').type('test@eamil.com')
        cy.get('textarea.feedback-input').type('This is obly a comment')
        cy.get('[type="submit"]').click()
        cy.contains('Thank You for your Message!').should('have.text' ,'Thank You for your Message!')
    })
    it('should not be able to submit a successful submission via contact us form as all fields are required' ,() =>{ 
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Akira')
        cy.get('[name="last_name"]').type('Last_name') 
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    })
})