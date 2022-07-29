/// <reference types="cypress" />
import { CartPage } from "../page-object/cart-page";
import { MainPage } from "../page-object/main-page";


context('fourth task', () => {

    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })


    describe('add products and check prices', () => {
        let data;
        before(() => {
            cy.fixture('products').then((products) => {
                data = products
            });
        });


        it('should add products and check prices', () => {
            for (let i = 0; i < Object.keys(data).length; i++) {
                MainPage.getProductAndClickAddToCart(data[i].product_id);
                MainPage.clickContinueShopping();
            }

            MainPage.clickProceedToCheckout();
            CartPage.validateUnitPrice(1, data[0].price);
            CartPage.validateUnitPrice(2, data[1].price);

            let price = 0;
            for (let i = 0; i < Object.keys(data).length; i++) {
                price += Number(data[i].price.substring(1, 6))
            }

            CartPage.validateTotalPrice(price)
        })
    })
})
