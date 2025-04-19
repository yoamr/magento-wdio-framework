
import { Given, When, Then } from '@wdio/cucumber-framework';
import RegistrationPage from '../../pages/registration.page.js';

Given('I am on the Create An Account page', async () => {
    await browser.url('/customer/account/create/');
});

When('I register with valid details', async () => {
    await RegistrationPage.register('Youssef', 'Abdalla', 'youssef2@test.com', 'Pass@123');
});

When('I register with an invalid email format', async () => {
    await RegistrationPage.register('Youssef', 'Abdalla', 'youssef2test.com', 'Pass@123');
});

When('I register without a password', async () => {
    await RegistrationPage.register('Youssef', 'Abdalla', 'youssef1test.com', '');
});

Then('I should see a registration success message', async () => {
    await expect($('.message-success')).toHaveTextContaining("Thank you for registering");
});

Then('I should see an invalid email error message', async () => {
    await expect($('#email_address-error')).toHaveTextContaining("Please enter a valid email address");
});

Then('I should see a password required error message', async () => {
    await expect($('#password-error')).toHaveTextContaining("This is a required field.");
});
