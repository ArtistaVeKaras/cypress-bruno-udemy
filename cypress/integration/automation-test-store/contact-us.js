/// <reference types="Cypress" />

describe('Test Contact Us form via Automation Test Store', () =>{
    it('should be able to submit a successful submission via contact us form' ,() =>{ 
       cy.visit('https://www.automationteststore.com/')
       cy.get('a[href$="contact"]').click()
       cy.get('#ContactUsFrm_first_name').type('Akira')
       cy.get('#ContactUsFrm_email').type('joe@gmail.com')
       cy.get('#ContactUsFrm_email').should('have.attr' ,'name' ,'email')
       cy.get('#ContactUsFrm_enquiry').type('do you provid any discount')
       cy.get('button[title="Submit"]').click()
       cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    })
})