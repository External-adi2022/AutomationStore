///<reference types='cypress'/>

//This example demonstrate how we test website, by following some of the steps.
describe('My First Test', () => {

    //Step 1: Visit a page
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
    })

    //Step 2: Query for an element
    it('Finds the content "type"', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type')
    })

    //Step 3: Click an element
    it('Clicks the link "type"', () => {
        cy.visit('https://example.cypress.io')
        cy.contains('type').click()
    })

    //Step 4: Make an assertion
    it('clicking "type" navigates to a new url', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    })

    //Adding more commands and assertions
    it('Gets, types and asserts', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify
        // that the value has been updated
        cy.get('#email1')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })

})