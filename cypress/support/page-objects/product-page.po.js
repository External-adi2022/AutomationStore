


class AddProduct {

    visitCreateProduct() {
        return cy.visit(Cypress.env('addProductUrl'));
    }

    inputProductName(prductName) {
        const inputProductNameVal = cy.get('input#Name')
        inputProductNameVal.should('exist')
        inputProductNameVal.type(prductName);
    }

    inputShortDesc(productShortDesc) {
        const inputShortDescVal = cy.get('#ShortDescription')
        inputShortDescVal.should('exist')
        inputShortDescVal.type(productShortDesc);
    }

    selectCategories(categories) {
        var stringCategory = String(categories);
        const categoriesVal = cy.get('#SelectedCategoryIds_listbox')
        categoriesVal.should('exist')
        categoriesVal.find('.k-item')
        categoriesVal.eq(0)
        categoriesVal.contains(stringCategory)
        categoriesVal.click({ force: true });
    }

    selectManufacturers(Manufacturers) {
        var manufactureVal = cy.get('#SelectedManufacturerIds_listbox')
        manufactureVal.should('exist')
        manufactureVal.find('.k-item')
        manufactureVal.eq(0)
        manufactureVal.contains(Manufacturers)
        manufactureVal.click({ force: true })
        manufactureVal.should('not.be.visible');
    }

    checkPublished() {
        const checkPublishedVal = cy.get('input#Published')
        checkPublishedVal.should('exist')
        checkPublishedVal.should('be.checked');
    }

    checkShowOnHomePage() {
        const checkShowOnHomePageVal = cy.get('input#ShowOnHomepage')
        checkShowOnHomePageVal.should('exist')
        checkShowOnHomePageVal.check()
        checkShowOnHomePageVal.should('be.checked');
    }

    selectProductType(ProductType) {
        const productTypeVal = cy.get('#ProductTypeId')
        productTypeVal.select(ProductType).trigger('mouseup');
    }

    selectVender(Vender) {
        const stringVender = cy.get('select#VendorId')
        stringVender.select(Vender).trigger('mouseup');
    }

    clickSaveButton() {
        const clickSaveButton = cy.get('button[name="save"]')
        clickSaveButton.should('exist')
        clickSaveButton.click();
    }

    verifyProductName_error() {
        const ProductName_error = cy.get('#Name-error')
        ProductName_error.should('exist')
        ProductName_error.should('have.text', 'Please provide a name.');

        const ProductName_error2 = cy.get('.validation-summary-errors')
        ProductName_error2.should('exist')
        ProductName_error2.should('have.text', 'Please provide a name.');
    }

    verifyProductSuccessfullyAddedInfo() {
        const productInfo = cy.get('.alert-dismissable').should('exist').should('have.text', ' The new product has been added successfully. ');
    }

    ValidateUrlAfterSaveProduct() {
        return cy.url().should('include', '/List');
    }

    verifyProName_MinMaxLength(ProductName_MaxValue) {
        cy.get('input#Name').should('exist').type(ProductName_MaxValue)
    }

    verifyProName_MinMaxLength_ErrorInfo() {
        cy.get('#Name-error').should('exist').should('have.text', '\'Name\' must be between 0 and 400 characters.')
    }

    verifyProShortDesc_MinMaxLength(productShortDesc_maxValue){
        cy.get('#ShortDescription').should('exist').type(productShortDesc_maxValue)
    }


}

export default AddProduct;