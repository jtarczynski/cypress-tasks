export class MainPage {

    static openAutomationPracticePage() {
        cy.visit("http://automationpractice.com/index.php");
    }

    static clickCategory(name) {
        cy.get('#block_top_menu').contains(name).click();
    }

    static clickShoppingCart() {
        cy.get('.shopping_cart').contains("Cart").click();
    }

    static clickSignIn() {
        cy.get('.login').contains("Sign in").click();
    }

    static clickContinueShopping() {
        cy.get('.continue').contains('Continue shopping').click();
    }

    static getProductAndClickAddToCart(id) {
        cy.get(`[data-id-product=${id}]`).contains('Add to cart').click();
    }

    static clickProceedToCheckout() {
        cy.get('.button-container').contains('Proceed to checkout').click();
    }

    static getPrice(number) {
        let object = Cypress.$(`#homefeatured > :nth-child(${number}) > .product-container > .right-block > .content_price > .price`)
        return object[0].innerHTML.trim()
    }
}
