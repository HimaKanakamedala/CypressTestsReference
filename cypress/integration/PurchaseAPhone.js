/// <reference types="cypress" />
describe('purchase a phone',function(){
    it('Navigate to device listing pae',function(){
        cy.visit('/')
        cy.get('a[title="Want to shop?"]')
          .click()
        cy.title().should('include', 'Three Store - Phones, Mobile Broadband & SIMs')
        cy.get(':nth-child(1) > .feature-icon')
          .click()
        cy.title().should('include','Mobile Phone Deals – Contract & Pay As You Go | Three')
        cy.clearCookie('queueit_js_three_www_userverified')
        cy.clearCookie('APACHE-COOKIE')
    })

    it ('reveal all Phones',function(){
        cy.get('section.undefined.ShowMore.sc-VigVT.giOujP').then(($el) => {
          const buttonName = $el.find('.ShowMore__btn')
          while (buttonName.is(":visible"))
          {
          buttonName.click()
           }

      })
       // cy.get('#root').find('button[title="Show 12 more phones"]').click()
        //cy.get('.ShowMore__btn').click()
        //cy.get('.ShowMore__btn').should('have.text','Show 10 more phones').click()
        //cy.get('.deviceTile').should('have.length',45)
    })
      
   it('select a phone',function(){
     cy.get('section.Planlist.sc-gZMcBi.iwopdu').find('.deviceTile').each(($el,index,$list) => {
     const deviceName = $el.find('span.device-title__name')
     if (deviceName.text() === 'iPhone SE 2020')
     {
     deviceName.click()
             
     }
             
        
    })
      //cy.title().should('eq','iPhone SE 2020 - Specs, Contracts & Best Deals | Three')
      //cy.get('#see-all-plans').click().title().should('eq','iPhone SE 2020 - Specs, Contracts & Best Deals | Three')
     // cy.get('button.three-button-tab.py-3').click()
        
  })
   
          

})

