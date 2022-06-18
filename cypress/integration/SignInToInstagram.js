/// <reference types= "cypress" />

describe("Instagram Regression Test suite",  () => {

  
    it("Validate a user can login to Instagram successfully with valid credentials",  () => { 
    //it block starts here 
    // write your test in the it block
      //Open Instagram.
      cy.visit('https://www.instagram.com/')
      //Cypress gets the input field for instagram's username field
      cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ')
      .type('mack')
          //Cypress gets the password field for instagram’s username field
      cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ')
      .type('Password')
         //Click login
      cy.get('.sqdOP > .qF0y9')
      .click()
       //Cypress gets the error message on instagram
      cy.get('[data-testid=login-error-message]')
        // Cypress should check if this message is visible
      .should('be.visible')
    });// it block terminates here 
  
    
   } );