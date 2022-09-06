/// <reference types="cypress"/>

import RegisterUser from "../support/page-objects/register.po";

describe("Test User Register Page", () => {
    var registerUser = new RegisterUser();

    //Fetch data from userData.json file
    before(() => {
        cy.fixture('/registerData.json').then((data) => {
            globalThis.data = data;
        })
    })

    //Visit login page
    beforeEach('Visit Registration Page', () => {
        cy.visit(Cypress.env("registerUrl"));
    })

    context('Url, title and Charset verification', () => {
        it('Verify the Url of Register page', () => {
            const registerUrl = cy.url();
            registerUrl.should('include', '/register');
            registerUrl.should('eq', 'https://demo.nopcommerce.com/register?returnUrl=%2F');
        })

        it('Verify character encoding for Active HTML document', () => {
            cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        })

        it('Verify the title of Register page', () => {
            cy.title({ timeout: 6000 }).should('contain', "nopCommerce demo store. Register");
        })
    });


    context('Check User Registration functionality', () => {

        it('Validate user should not be able to submit form with empty all Input Field', () => {
            registerUser.verifyRegisterButton();
            registerUser.verifyFnameErrorInfo();
            registerUser.verifyLnameErrorInfo();
            registerUser.verifyEmailErrorInfo();
            registerUser.verifyPasswordErrorInfo();
            registerUser.verifyConfirmPasswordErrorInfo();
        })

        it('Validate user should not be able to submit form with empty First Name Input Field', () => {
            registerUser.verifyLnameInput(data.UserLname);
            registerUser.verifyEmailInput(data.UserEmail);
            registerUser.verifyPasswordInput(data.UserPassword);
            registerUser.verifyConfirmPasswordInput(data.UserPassword);
            registerUser.verifyRegisterButton();

            //Display Error message
            registerUser.verifyFnameErrorInfo();
        })

        it('Validate user should not be able to submit form with empty Lname Name Input Field', () => {
            registerUser.verifyFnameInput(data.UserFname);
            registerUser.verifyEmailInput(data.UserEmail);
            registerUser.verifyPasswordInput(data.UserPassword);
            registerUser.verifyConfirmPasswordInput(data.UserPassword);
            registerUser.verifyRegisterButton();

            //Display Error message
            registerUser.verifyLnameErrorInfo();
        })

        it('Validate user should not be able to submit form with empty Email Input Field', () => {
            registerUser.verifyFnameInput(data.UserFname);
            registerUser.verifyLnameInput(data.UserLname);
            registerUser.verifyPasswordInput(data.UserPassword);
            registerUser.verifyConfirmPasswordInput(data.UserPassword);
            registerUser.verifyRegisterButton();

            //Display Error message
            registerUser.verifyEmailErrorInfo();
        })

        it('Validate user should not be able to submit form with Already exist Email Input Field', () => {
            registerUser.verifyFnameInput(data.UserFname);
            registerUser.verifyLnameInput(data.UserLname);
            registerUser.verifyPasswordInput(data.UserPassword);
            registerUser.verifyConfirmPasswordInput(data.UserPassword);
            registerUser.verifyRegisterButton();

            //Display Error message
            registerUser.verifyEmailErrorInfo();
        })

        it('Validate user should not be able to submit form with empty password Input Field but have confirm password field value', () => {
            registerUser.verifyFnameInput(data.UserFname);
            registerUser.verifyLnameInput(data.UserLname);
            registerUser.verifyEmailInput(data.UserEmail);
            registerUser.verifyConfirmPasswordInput(data.UserPassword);
            registerUser.verifyRegisterButton();
           
            //Display Error message
            registerUser.verifyPasswordErrorInfo();
        })

        it('Password must have at least 6 characters', () => {
            registerUser.verifyFnameInput(data.UserFname);
            registerUser.verifyLnameInput(data.UserLname);
            registerUser.verifyEmailInput(data.UserEmail);
            registerUser.verifyMinimumPasswordInput(data.UserMinPassword);
            registerUser.verifyRegisterButton();
           
            //Display Error message
            registerUser.verifyMinmumPasswordErrorInfo();
        })

        it('Validate user should not be able to submit form with empty confirm password Input Field', () => {
            registerUser.verifyFnameInput(data.UserFname);
            registerUser.verifyLnameInput(data.UserLname);
            registerUser.verifyEmailInput(data.UserEmail);
            registerUser.verifyPasswordInput(data.UserPassword);
            registerUser.verifyRegisterButton();

            //Display Error message
            registerUser.verifyConfirmPasswordErrorInfo();
        })

        it.only('Validate user should not be able to submit form if user enter worng confirm password', () => {
            registerUser.verifyFnameInput(data.UserFname);
            registerUser.verifyLnameInput(data.UserLname);
            registerUser.verifyEmailInput(data.UserEmail);
            registerUser.verifyPasswordInput(data.UserPassword);
            registerUser.verifyConfirmPasswordInput(data.UserWrongConfirmPassword);
            registerUser.verifyRegisterButton();

            //Display Error message
            registerUser.verifyNoMatchPasswordAndConfirmPassword();
        })

        it("Validate User register successfully", () => {
            registerUser.verifyPageTitleLabel();
            registerUser.verifyPersonalDetailsText();
            registerUser.verifyCompanyDetailsText();
            registerUser.verifyOptionsText();
            registerUser.verifyYourPassText();

            registerUser.verifyGenderField();

            registerUser.verifyMaleGenderChecked();
            registerUser.verifyFnameLabel();
            registerUser.verifyLnameLabel();
            registerUser.verifyDateOfBirthLabel();
            registerUser.verifyEmailLabel();
            registerUser.verifyCompanyNameLabel();
            registerUser.verifyNewsLetterCheckboxLabel();
            registerUser.verifyPasswordLabel();
            registerUser.verifyCompanyNameLabel();

            registerUser.verifyFnameInput(data.UserFname);
            registerUser.verifyLnameInput(data.UserLname);
            registerUser.verifyDateOfBirthDay().select('5');
            registerUser.verifyDateOfBirthMonth().select('April');
            registerUser.verifyDateOfBirthYear().select('1996');
            registerUser.verifyEmailInput(data.UserEmail);
            registerUser.verifyCompanyNameInput().type('Seva');
            registerUser.verifyNewsLetterCheckbox().should('be.checked');
            registerUser.verifyPasswordInput(data.UserPassword);
            registerUser.verifyConfirmPasswordInput(data.UserPassword);
            registerUser.verifyRegisterButton();
            registerUser.verifyRegisterConfirmInfo();
            registerUser.validateURL();
            registerUser.verifyContinueButton().click();
        });
    });


});