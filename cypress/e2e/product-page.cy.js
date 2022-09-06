/// <reference types="Cypress"/>

import AddProduct from "../support/page-objects/product-page.po";

describe("Login Page", () => {

    var addProdruct = new AddProduct();

    //Fetch data from userData.json file
    before(() => {
        cy.fixture('/product.json').then(function (proData) {
            globalThis.proData = proData;
        })
    })

    //Login into admin page
    beforeEach('Log in into admin page', function () {
        cy.adminLogin('admin@yourstore.com', 'admin')
        addProdruct.visitCreateProduct();
    })

    //Validate the addition of product
    context('Add and Verify Product', () => {

        it.only('validate to add product with required value', () => {
            addProdruct.inputProductName(proData.productName);
            addProdruct.inputShortDesc(proData.productShortDesc);
            addProdruct.selectCategories(proData.categories);
            addProdruct.selectManufacturers(proData.Manufacturers);
            addProdruct.checkPublished();
            addProdruct.checkShowOnHomePage();
            addProdruct.selectProductType(proData.ProductType);
            addProdruct.selectVender(proData.Vender);
            addProdruct.clickSaveButton();
            addProdruct.ValidateUrlAfterSaveProduct();
        })

        it('Should not able to save product with all empty Input field', () => {
            addProdruct.clickSaveButton();
            addProdruct.verifyProductName_error();
        })

        it('Validate product Name must be between 0 and 400 characters', () => {
            addProdruct.verifyProName_MinMaxLength(proData.ProductName_MaxValue);
            addProdruct.clickSaveButton();
            addProdruct.verifyProName_MinMaxLength_ErrorInfo();    
        })

       
    })
})


