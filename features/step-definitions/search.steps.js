
import { Given, When, Then } from '@wdio/cucumber-framework';
import SearchPage from '../../pages/search.page.js';

Given('I am on the home page', async () => {
    await browser.url('/');
});

When(/^I search for "([^"]*)"$/, async (keyword) => {
    await SearchPage.searchFor(keyword);
});

Then(/^I should see products related to "([^"]*)"$/, async (keyword) => {
    await expect($('div.products-grid')).toBeDisplayed();
});

Then('I should see a "no results" message', async () => {
    await expect($('.message.notice')).toHaveTextContaining("Your search returned no results.");
});
