
import { Given, When, Then } from '@wdio/cucumber-framework';
import CheckoutPage from '../../pages/checkout.page.js';
import ProductPage from '../../pages/product.page.js';

Given('I have a product in my cart', async () => {
    await browser.url('/what-is-new.html');
    await ProductPage.selectJacketAndAddToCart();
});

When('I checkout with valid information', async () => {
    await CheckoutPage.fillShippingDetails({
        firstName: 'Youssef',
        lastName: 'Abdalla',
        address: 'Test Street',
        city: 'Test City',
        zip: '111111',
        country: 'Egypt',
        phone: '01111111111'
    });
    await CheckoutPage.placeOrder();
});

Then('I should see an order confirmation message', async () => {
    await expect($('.checkout-success')).toHaveTextContaining('Thank you for your purchase');
});

When('I try to checkout without entering shipping address', async () => {
    await CheckoutPage.placeOrderWithoutShipping();
});

Then('I should see a shipping address error', async () => {
    await expect($('.field-error')).toBeDisplayed();
});

When('I checkout as a guest', async () => {
    await CheckoutPage.fillGuestCheckout({
        email: 'youssef2@test.com',
        firstName: 'Youssef',
        lastName: 'Abdalla',
        address: 'Test Street',
        city: 'Test City',
        zip: '111111',
        country: 'Egypt',
        phone: '01111111111'
    });
    await CheckoutPage.placeOrder();
});

Then('I should see an order confirmation without logging in', async () => {
    await expect($('.checkout-success')).toHaveTextContaining('Thank you for your purchase');
});
