/// <reference types="cypress" />
import { AuthenticationPage } from "../page-object/authentication-page";
import { MainPage } from "../page-object/main-page";


context('first task', () => {

    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })


    describe('log in', () => {
        let data;
        before(() => {
            cy.fixture('credentials').then((credentials) => {
                data = credentials
            });
        });


        it('should log in', () => {
            for (let i = 0; i < Object.keys(data).length; i++) {
                MainPage.clickSignIn();
                AuthenticationPage.checkIfAuthenticationPageIsOpen();

                cy.get('#email').type(data[i].email);
                cy.get('#passwd').type(data[i].password);

                AuthenticationPage.clickSignIn();
                AuthenticationPage.openAuthenticationPage();
            }
        })
    })
})
