/// reference types="Cypress" />

describe('Original describe',()=>{

    before(function(){
        cy.log('Before is executed')
    })

    after(function(){
        cy.log('After is executed')
    })

    beforeEach(function(){
        cy.log('BeforeEach is executed')
    })

    afterEach(function(){
        cy.log('AfterEach is executed')
    })

    describe('I am inside the describe',()=>{
        it('Inside test case',()=>{
            cy.log('Inside test case.')
        })

    })

    it('First Test',()=>{
        cy.log('This is first test case.')
    })

    it('Second Test',()=>{
        cy.log('This is second test case.')
    })

    it('Third Test',()=>{
        cy.log('This is third test case.')
    })
})
