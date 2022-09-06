/// <reference types="cypress"/>

class RegisterUser {

    visitRegister() {
        cy.visit('/register');
    }

    verifyPageTitleLabel() {
        const registerLabel = cy.contains('Register');
        registerLabel.should('exist');
    }

    verifyPersonalDetailsText() {
        return cy.get('[method] .fieldset:nth-of-type(1) strong').should('exist');
    }

    verifyCompanyDetailsText() {
        return cy.get('[method] .fieldset:nth-of-type(2) strong').should('exist');
    }

    verifyOptionsText() {
        return cy.get('[method] .fieldset:nth-of-type(3) strong').should('exist');
    }

    verifyYourPassText() {
        return cy.get('[method] .fieldset:nth-of-type(4) strong').should('exist');
    }

    verifyGenderField() {
        const genderField = cy.get('[for="gender"]');
        genderField.should('be.visible');
        genderField.should('contain', 'Gender');
    }

    verifyGenderLabel() {
        return cy.get('[for="gender"]').should('exist').should('have.text', 'Gender:');
    }

    verifyMaleGenderChecked() {
        return cy.get('#gender').find('[type="radio"]').first().check();
    }

    verifyFnameLabel() {
        return cy.get('[for="FirstName"]').should('exist').should('have.text', 'First name:');
    }

    verifyFnameInput(UserFname) {
        return cy.get('#FirstName').should('exist').type(UserFname);
    }

    verifyFnameErrorInfo() {
        return cy.get('#FirstName-error').should('exist').should('have.text','First name is required.');
    }

    verifyLnameLabel() {
        return cy.get('[for="LastName"]').should('exist').should('have.text', 'Last name:');
    }

    verifyLnameInput(UserLname) {
        return cy.get('#LastName').should('exist').type(UserLname);
    }

    verifyLnameErrorInfo() {
        return cy.get('#LastName-error').should('exist').should('have.text', 'Last name is required.');
    }

    verifyDateOfBirthLabel() {
        return cy.get('.date-of-birth label').should('exist').should('have.text', 'Date of birth:');
    }

    verifyDateOfBirthDay() {
        return cy.get('select[name="DateOfBirthDay"]').should('exist');
    }

    verifyDateOfBirthMonth() {
        return cy.get('select[name="DateOfBirthMonth"]').should('exist');
    }

    verifyDateOfBirthYear() {
        return cy.get('select[name="DateOfBirthYear"]').should('exist');
    }

    verifyEmailLabel() {
        return cy.get('[for="Email"]').should('exist').should('have.text', 'Email:');
    }

    verifyEmailInput(UserEmail) {
        return cy.get('#Email').should('exist').type(UserEmail);
    }

    verifyEmailErrorInfo() {
        return cy.get('#Email-error').should('exist').should('have.text', 'Email is required.');
    }

    verifyCompanyNameLabel() {
        return cy.get('[for="Company"]').should('exist').should('have.text', 'Company name:');
    }

    verifyCompanyNameInput() {
        return cy.get('#Company').should('exist');
    }

    verifyNewsLetterCheckboxLabel() {
        return cy.get('[for="Newsletter"]').should('exist').should('have.text', 'Newsletter:');
    }

    verifyNewsLetterCheckbox() {
        return cy.get('#Newsletter').should('exist');
    }

    verifyPasswordLabel() {
        return cy.get('[for="Password"]').should('exist').should('have.text', 'Password:');
    }

    verifyPasswordInput(UserPassword) {
        return cy.get('#Password').should('exist').type(UserPassword);
    }

    verifyPasswordErrorInfo() {
        return cy.get('#Password-error').should('exist').should('have.text', 'Password is required.');
    }

    verifyMinimumPasswordInput(UserMinPassword) {
        return cy.get('#Password').should('exist').type(UserMinPassword);
    }

    verifyMinmumPasswordErrorInfo() {
        return cy.get('#Password-error').should('exist').should('have.text', 'Password must meet the following rules: must have at least 6 characters');
    }

    verifyConfirmPasswordLabel() {
        return cy.get('[for="ConfirmPassword"]').should('exist').should('have.text', 'Confirm password:');
    }

    verifyConfirmPasswordInput(UserPassword) {
        return cy.get('#ConfirmPassword').should('exist').type(UserPassword);
    }

    verifyConfirmPasswordErrorInfo() {
        return cy.get('#ConfirmPassword-error').should('exist').should('have.text', 'Password is required.');
    }

    verifyNoMatchPasswordAndConfirmPassword(){
        return cy.get('#ConfirmPassword-error').should('exist').should('have.text','The password and confirmation password do not match.');
    }

    verifyRegisterButton() {
        return cy.get('#register-button').should('exist').should('have.text', 'Register').click();
    }

    verifyRegisterConfirmInfo() {
        return cy.get('.result').should('exist').contains('Your registration completed');
    }

    validateURL() {
        return cy.url().should('include', '/registerresult');
    }

    verifyContinueButton() {
        return cy.get('.button-1.register-continue-button').should('exist').contains('Continue');
    }

}

export default RegisterUser;