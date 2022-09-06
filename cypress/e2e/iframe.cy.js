/// <reference types='cypress'/>
/// <reference types='cypress-iframe'/>

describe('Cypress Iframe',()=>{
    it('IFrame test Jquery Draggable',()=>{
        cy.visit('https://jqueryui.com/draggable/');
        cy.frameLoaded('.demo-frame')
        cy.iframe().find('#draggable').then(function(dragText){
            const dgText = dragText.text();
            cy.task('log',dgText);
            
        })
    })
})