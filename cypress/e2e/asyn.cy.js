/// reference types="Cypress" />

describe('Asynchronous Check',()=>{

    it('Cypress is working Asynchoronously', ()=>{
        cy.pause()
        cy.visit("https://accounts.google.com/")

        cy.get('h1#headingText').find('span').should('have.text','साइन इन')
        cy.get('h1#headingText').find('span').then(function(e){
            const headText = e.text();
            console.log(headText)
        })
        
        console.log('I am working Asychronous')
        console.log("Take a note")
    })
})
