/// <reference types="cypress" />
describe('Register your interest for samsung',function(){
    
    it('Launch Rigister Form',function(){
        cy.visit('https://www.three.co.uk/samsung/register-your-interest')
        cy.title().should('eq','Register your interest | Samsung Phones & Tablets | Three')
        cy.clearCookie('queueit_js_three_www_userverified')
    })
     it('Fill the form fields',function(){
         cy.get('#ryi').within(($form) => {
             cy.get('input[name=firstName]').type('Test')
             cy.get('input[name=surname]').type('Cypres')
             cy.get('input[name=emailAddress]').type('me@me.com')
             cy.get('#threeDevice_1400551587822').check()
             cy.get('input[name=existingContactNumber]').type('07665667654')
             cy.get('input[name=postcode]').type('Sl6 1EH')
             cy.get('button[type=submit]').click()
            })
            

     })
})
