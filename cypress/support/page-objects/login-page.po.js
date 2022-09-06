/// <reference types="cypress"/>

class LoginUser{

    //method for verification of different Field in login page
    verifyEmailField(){
       const emailField =  cy.get('label[for="Email"]')
       emailField.should('exist');
       emailField.should('have.text','Email:')
    }

    verifyEmailErrorInfo() {
        return cy.get('#Email-error').should('exist')
        .should('have.text', 'Please enter your email');
    }

    verifyWrongEmailErrorInfo() {
        return cy.get('.message-error').should('exist')
        .should('have.text', 'Login was unsuccessful. Please correct the errors and try again.No customer account found\n');
    }

    verifyPasswordField(){
        const emailField =  cy.get('label[for="Password"]')
        emailField.should('exist');
        emailField.should('have.text','Password:')
     }

     verifyLoginButtonText(){
        const emailField =  cy.get('.button-1.login-button')
        emailField.should('exist');
        emailField.should('have.text','Log in')
     }

    //method for verification of different Input Field functionality in login page
    verifyEmail(email){
        const emailText = cy.get('#Email');
        emailText.should('exist');
        emailText.type(email);
    }

    verifyPassword(password){
        const passText = cy.get('#Password');
        passText.should('exist');
        passText.type(password);
    }

    verifyClickLogin(){
        const clickLogin = cy.get('.button-1.login-button');
        clickLogin.should('exist');
        clickLogin.should('be.visible')
        clickLogin.click();
    }

}

export default LoginUser;

