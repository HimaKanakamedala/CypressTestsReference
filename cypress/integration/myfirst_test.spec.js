describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('http://www.three.co.uk/')
      cy.title().should('eq','Savings on SIM, Smartphones and Mobile Broadband | Three')
    })
  })