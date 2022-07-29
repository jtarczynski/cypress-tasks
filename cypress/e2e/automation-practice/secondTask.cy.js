/// <reference types="cypress" />
import { MainPage } from "../page-object/main-page";
import { CartPage } from "../page-object/cart-page";


context('second task', () => {

    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('Add products and check price', () => {
        it('should add 2 products to cart and check price', () => {
            let price_1 = MainPage.getPrice(1);
            MainPage.getProductAndClickAddToCart(1);
            MainPage.clickContinueShopping();
            let price_2 = MainPage.getPrice(2);
            MainPage.getProductAndClickAddToCart(2);


            MainPage.clickProceedToCheckout();
            CartPage.validateUnitPrice(1, price_1);
            CartPage.validateUnitPrice(2, price_2);

            let price = 0;
            price += Number(price_1.substring(1, 6)) + Number(price_2.substring(1, 6))

            CartPage.validateTotalPrice(price)

        })
    })
})
