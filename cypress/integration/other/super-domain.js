/// <reference types="Cypress" />

describe('Test Contact Us form via WebDriverUni', () =>{
    it('should not be able to access to different domains' ,() =>{ 
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.visit('https://automationteststore.com/')

    })
    it.only('should not be able to access to different domains via use actions' ,() =>{ 
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('a[href*="automationtest"]').invoke('removeAttr','taget').click({force: true})

    })
})