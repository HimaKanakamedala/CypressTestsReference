/// <reference types="cypress" />
describe('My3 Login',function(){
it('Valid Login Test',function(){
  cy.visit('https://new.three.co.uk/account/login#/')
  cy.get('#MSISDN').type('447367438486').then(($number) => {
   const mobileNumber = $number.val()
     cy.log(mobileNumber)

  cy.get('#login-next-msisdn').click()
  cy.get('h1').should('have.text','Login to My3')
  cy.get('#my3_login_form > label.msisdn-label > span > input').then(($mNumber) => {
    const mobileNumber2 = $mNumber.val()
      cy.log(mobileNumber2)
    expect(mobileNumber).to.eq(mobileNumber2)
 })
})
cy.get('input[type=password]').type('onlinetest1')
cy.get('#my3-login-submit').click()
cy.get('title').should('have.text','My3 Home - New My3')
}

)

}
)

