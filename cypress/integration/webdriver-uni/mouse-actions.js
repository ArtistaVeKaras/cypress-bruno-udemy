/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.document().should("have.property", "charset", "UTF-8");
    cy.title().should("include", "WebDriver");
    cy.get('#actions').invoke("removeAttr", "target").click();
  });
  
  describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
      cy.get('#draggable').trigger('mousedown',{which: 1})
      cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})

    })
    it('should be able to double click the element' , () =>{
        cy.get('#double-click').dblclick
    })
    it.only('should be able to click and hold the button and get attr of that btn' ,()=>{
        cy.get('#click-box').trigger('mousedown' ,{which: 1}).then(($el) =>{
            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    })
})