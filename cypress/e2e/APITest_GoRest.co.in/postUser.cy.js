///<reference types='cypress'/>

describe('Post User request API User', () => {

    it('Create user test', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',

            header{
            'Authorization': 'Bearer 8768b2974929d8b30969d06cd7ddd453b9a820f3577aec69ba0628c03e615ba9'
        },

            body: {
            "name": "Test Automation",
            "email": "testA@gmail.com",
            "gerder": "male",
            "status": "active"
        }
        }).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('name', 'Test Automation')
            expect(res.body.data).has.property('email', 'testA@gmail.com')
            expect(res.body.data).has.property('gerder', 'male')
            expect(res.body.data).has.property('status', 'active')
        })
})

})