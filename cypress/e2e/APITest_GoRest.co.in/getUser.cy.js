///<reference types='cypress'/>

describe('Get API User tests', () => {

    it('Get users test', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users'
            
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.code).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(20)
        })
    })

    it('Get users by id test', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users/4050'

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.code).to.eq(200)
            expect(res.body.data.name).to.eq('Bhadran Saini')
            expect(res.body.data.email).to.eq('bhadran_saini@stracke-welch.co')
            expect(res.body.data.gender).to.eq('male')
            expect(res.body.data.status).to.eq('inactive')
        })
    })
})