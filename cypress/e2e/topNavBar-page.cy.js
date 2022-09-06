///<reference types="cypress"/>
import topNavBar from '../support/page-objects/topNavBar-page.po'

describe("Validate Top Nav bar",()=>{

    const TopNavBar = new topNavBar();

    beforeEach("Validate page redirect to home page",()=>{
       TopNavBar.homePage();
    })

    it('Validate Register menu bar',()=>{
      TopNavBar.register();
    })

    it('Validate Login menu bar',()=>{
        TopNavBar.login();
      })

      it('Validate Wishlist menu bar',()=>{
        TopNavBar.wishlist();
      })

      it('Validate shoppingCart menu bar',()=>{
        TopNavBar.shoppingCart();
      })

})