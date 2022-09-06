///<reference types="cypress"/>

describe('Get api user Request',()=>{

    it('Get request',()=>{

        cy.request({
            method:'GET',
            url : 'http://localhost:3000/posts/2'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.author).to.eq('Bob')
        })
    })

    it('Get users request by ID',()=>{

        cy.request({
            method:'GET',
            url : 'http://localhost:3000/posts/3'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.title).to.eq('How are you')
        })
    })
})