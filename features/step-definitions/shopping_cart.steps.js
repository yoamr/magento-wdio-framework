
import { Given, When, Then } from '@wdio/cucumber-framework';
import ProductPage from '../../pages/product.page.js';
import CartPage from '../../pages/cart.page.js';

Given('I am on the What\'s New page', async () => {
    await browser.url('/what-is-new.html');
});

When('I add a Jacket to the cart', async () => {
    await ProductPage.selectJacketAndAddToCart();
});

Then('I should see a success message for adding to cart', async () => {
    await expect($('.message-success')).toHaveTextContaining('You added');
});

When('I view the cart', async () => {
    await CartPage.viewCart();
});

Then('I should see the product details in the cart', async () => {
    await expect($('.product-item-name')).toBeDisplayed();
});

When('I update the product quantity in the cart', async () => {
    await CartPage.updateQuantity(2);
});

Then('I should see a cart update success message', async () => {
    await expect($('.message-success')).toHaveTextContaining('was updated in your shopping cart');
});

When('I remove the product from the cart', async () => {
    await CartPage.removeProduct();
});

Then('the product should no longer be in the cart', async () => {
    await expect($('.cart-empty')).toBeDisplayed();
});
