
class topNavBar{

    homePage(){
        cy.visit('/');
    }

    register(){
        cy.get('.header-links').find('.ico-register').should('exist').should('be.visible').as('register');
        cy.get('@register').invoke('text').should('include','Register');
        cy.get('@register').should('have.class','ico-register').and('have.attr','href').and('include','/register?returnUrl=%2F');
        cy.get('@register').trigger("mouseover").then((focusReg)=>{
            expect(focusReg).to.have.css("color","rgb(119, 119, 119)")
        });
        cy.get('@register').click().then(()=>{
           cy.url().should('include', '/register');
           cy.title().should('include','nopCommerce demo store. Register')
        })
    }

    login(){
        cy.get('.header-links').find('.ico-login').should('exist').should('be.visible').as('login');
        cy.get('@login').invoke('text').should('include','Log in');
        cy.get('@login').should('have.class','ico-login').and('have.attr','href').and('include','/login?returnUrl=%2F');
        cy.get('@login').trigger("mouseover").then((focusReg)=>{
            expect(focusReg).to.have.css("color","rgb(119, 119, 119)")
        }); 
        cy.get('@login').click().then(()=>{
            cy.url().should('include', '/login');
            cy.title().should('include','nopCommerce demo store. Login')
         })     
    }

    wishlist(){
        cy.get('.header-links').find('.ico-wishlist').should('exist').should('be.visible').as('wishlist');
        cy.get('@wishlist').should('have.class','ico-wishlist').and('have.attr','href').and('include','/wishlist');
        cy.get('@wishlist').trigger("mouseover").then((focusReg)=>{
            expect(focusReg).to.have.css("color","rgb(119, 119, 119)")
        });     
       cy.get('@wishlist').find('.wishlist-label').invoke('text').should('include','Wishlist');
       cy.get('@wishlist').find('.wishlist-qty').should('have.text','(0)')

       cy.get('@wishlist').click().then(()=>{
        cy.url().should('include', '/wishlist');
        cy.title().should('include','nopCommerce demo store. Wishlist')
     }) 
    }

    shoppingCart(){
        cy.get('#topcartlink').find('.ico-cart').should('exist').should('be.visible').as('ShoppingCart');
        cy.get('@ShoppingCart').should('have.class','ico-cart').and('have.attr','href').and('include','/cart');
        cy.get('@ShoppingCart').trigger("mouseover").then((focusReg)=>{
            expect(focusReg).to.have.css("color","rgb(119, 119, 119)")
        });     
        cy.get('@ShoppingCart').find('.cart-label').invoke('text').should('include','Shopping cart');
        cy.get('@ShoppingCart').find('.cart-qty').should('have.text','(0)')

        cy.get('@ShoppingCart').click().then(()=>{
            cy.url().should('include', '/cart');
            cy.title().should('include','nopCommerce demo store. Shopping Cart')
         }) 
    }


}

export default topNavBar;