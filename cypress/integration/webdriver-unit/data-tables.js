/// <reference types="Cypress" />


describe('Handling data via webdriveruni', () =>{
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.document().should('have.property', 'charset', 'UTF-8')
        cy.title().should('include','WebDriver')
        cy.get('#data-table').invoke('removeAttr' ,'target').click({force: true})
    })
    it('Calculate ans assert the total age of all users', ()=>{
        const userDatails = [];
        let num = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) =>{
            userDatails[index] = $el.text()
        }).then(() =>{
            var i;
            for (var i = 0; i < userDatails.length; i++){
                if(Number(userDatails[i]))
                num += Number(userDatails[i])
                // cy.log(userDatails[i])
            }
            cy.log("The total number of ages is: " + num)
            expect(num).to.equal(322)
        })
    })
    it.only('Calcaluta the age of a given user based on the last name' ,() =>{
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) =>{
            cy.log($el.text()) //logs all the last names
            if($el.text() === 'Woods'){
                //the next command will move to where the age is stored
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) =>{
                    // const userAge = age.text()
                    expect(age.text()).to.equal('80')
                }) 
            }

        })
    })
})