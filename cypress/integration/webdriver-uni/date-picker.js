/// <reference types="Cypress" />

describe('Test Datepicker via webdriveruni', () =>{
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.document().should('have.property', 'charset', 'UTF-8')
        cy.title().should('include','WebDriver')
        cy.get('#datepicker').invoke('removeAttr' ,'target').click()
        cy.get('#datepicker').click()

    })
    it('Select date-picker from date picker', ()=>{
        
        // let date = new Date()
        // date.setDate(date.getDate())
        // cy.log(date.getDate()) //get current day i.e 22

        // let date1 = new Date()
        // date1.setDate(date.getDate() + 5)
        // cy.log(date1.getDate()) //get future day with 5 days added to the current date i.e 22 + 5 = 27
        
        
        var date = new Date()
        date.setDate(date.getDate()+243)//plus 1 will add an extra day to the current date

        const futureYear = date.getFullYear();
        const futureMonth = date.toLocaleString('default',{month:'long'})
        const futureDay = date.getDate()

        cy.log('Future year to select: ' + futureYear)
        cy.log('Future month to select: ' + futureMonth)
        cy.log('Future day to select: ' + futureDay)
        cy.get('.input-group-addon').click()

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then($datePicker =>{
                cy.log('The future date is: '+$datePicker.text())//log all months until it reaches the desired date
                if(!$datePicker.text().includes(futureYear)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() =>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then($datePicker =>{
                    if(!$datePicker.text().includes(futureMonth)){
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                }) 
            })
        }
        function selectDay () {
            cy.get('[class="day"]').contains(futureDay).click()
        }
        selectMonthAndYear()
        selectDay()
    })
})