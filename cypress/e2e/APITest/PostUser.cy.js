///<reference types="cypress"/>

describe('Post API user Request', () => {

    it('Create User test', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/posts'
        },
            {
                body: {
                    "title": "Test Automation",
                    "author": "Aashish",
                    "desc": "Hi I am Automation Engineer"
                }
            }).then((res) => {
                expect(res.body.status).to.eq(201);
                expect(res.body.title).has.property('title', 'Test Automatiom');
                expect(res.body.author).has.property('author', 'Aashish');
                expect(res.body.desc).has.property('desc', 'Hi I am Automation Engineer');
            })
    })
})