/// <reference types="Cypress"/>

import LoginUser from "../support/page-objects/login-page.po";

describe("Test Login Page", () => {

    var loginUser = new LoginUser();

    //Fetch data from userData.json file
    before(function () {
        cy.fixture('userData').then(function (data) {
            globalThis.data = data;
        })
    })

    //Visit login page
    beforeEach('On Login Page', () => {
        cy.visit(Cypress.env('loginUrl'));
    })

    //Verify Url and Title of login page
    context('Url and title verification', () => {

        it('Verify the Url of login page', () => {
            const loginUrl = cy.url();
            loginUrl.should('include', '/login');
            loginUrl.should('eq', 'https://demo.nopcommerce.com/login?returnUrl=%2F');
        })

        it('Verify character encoding for Active HTML document', () => {
            cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        })

        it('Verify the title of login page', () => {
            cy.title().should('eq', 'nopCommerce demo store. Login');
        })
    })

    //verify email and password field
    context('Login fields verification', () => {
        it('Email field should contain "Email:"', () => {
            loginUser.verifyEmailField();
        })

        it('Email field should contain "Password:"', () => {
            loginUser.verifyPasswordField();
        })

        it('Email field should contain "Log in"', () => {
            loginUser.verifyLoginButtonText();
        })
    })

    //Test Login Functionality
    context('Login functionality varification', () => {
        it('validate user login successfully with valid email and password', () => {
            specify('verify email Id', () => {
                loginUser.verifyEmail(data.UserEmail);
            })

          //  loginUser.verifyEmail(data.UserEmail);
            loginUser.verifyPassword(data.UserPassword);
            loginUser.verifyClickLogin();
        })

        it('Should not able to Login successfully via all field required', () => {
            loginUser.verifyClickLogin();
            loginUser.verifyEmailErrorInfo();
        })

        it('Should not able to Login successfully with Empty Email Id', () => {
            loginUser.verifyPassword(data.UserPassword);
            loginUser.verifyClickLogin();
            loginUser.verifyEmailErrorInfo();
        })

        it('Should not able to Login successfully with wrong Email Id', () => {
            loginUser.verifyEmail(data.WrongEmail);
            loginUser.verifyPassword(data.UserPassword);
            loginUser.verifyClickLogin();
            loginUser.verifyWrongEmailErrorInfo();
        })

        it('Should not able to Login successfully with wrong Password', () => {
            loginUser.verifyEmail(data.UserEmail);
            loginUser.verifyPassword(data.UserWrongPassword);
            loginUser.verifyClickLogin();
            loginUser.verifyWrongEmailErrorInfo();
        })
    })

})


