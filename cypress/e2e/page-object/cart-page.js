export class CartPage {

    static validateUnitPrice(number, price) {
        cy.get(`#cart_summary > tbody > :nth-child(${number}) > .cart_unit > .price`).find('.price').should('have.text', price);
    }

    static validateTotalPrice(price) {
        cy.get('#total_product').invoke('text').should((total_price) => {
            expect(total_price).to.equal('$' + price.toFixed(2));
        })
    }
}
