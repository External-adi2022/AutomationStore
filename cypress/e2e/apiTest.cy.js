/// <reference types='cypress'/>

describe('API Request Check',()=>{
    it('Check get request', ()=>{
        cy.request('https://jsonplaceholder.typicode.com/comments').as('commentRequest')
        cy.wait(0)
        cy.get('@commentRequest').should((Response)=>{
            expect(Response.body).to.have.length(500);
        })
    })
})