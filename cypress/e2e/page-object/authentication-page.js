export class AuthenticationPage {

    static checkIfAuthenticationPageIsOpen() {
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account');
    }

    static openAuthenticationPage() {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    static clickSignIn() {
        cy.get('#SubmitLogin').click();
    }
}