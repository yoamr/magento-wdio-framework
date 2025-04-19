
class CheckoutPage {
    async fillShippingDetails({ firstName, lastName, address, city, zip, country, phone }) {
        await $('input[name="firstname"]').setValue(firstName);
        await $('input[name="lastname"]').setValue(lastName);
        await $('input[name="street[0]"]').setValue(address);
        await $('input[name="city"]').setValue(city);
        await $('input[name="postcode"]').setValue(zip);
        await $('input[name="telephone"]').setValue(phone);
        await $('input[name="country_id"]').selectByVisibleText(country);
        await $('button.continue').click(); // Proceed to payment
    }

    async placeOrder() {
        await $('button.checkout').click();
    }

    async placeOrderWithoutShipping() {
        await $('button.checkout').click();
    }

    async fillGuestCheckout({ email, firstName, lastName, address, city, zip, country, phone }) {
        await $('input#customer-email').setValue(email);
        await this.fillShippingDetails({ firstName, lastName, address, city, zip, country, phone });
    }
}
export default new CheckoutPage();
