// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';


Cypress.Commands.add("adminLogin",(email,password)=>{

    cy.visit(Cypress.env('adminUrl'))
    cy.url().should('include','login');

    const adminEmailTest = cy.get('#Email')
    adminEmailTest.clear();
    adminEmailTest.type(email);

    const adminPasswordTest = cy.get('#Password')
    adminPasswordTest.clear();
    adminPasswordTest.type(password);

    const adminButton = cy.get('.button-1')
    adminButton.click();
})

