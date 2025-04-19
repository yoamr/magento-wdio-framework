
class CartPage {
    async viewCart() {
        await $('.showcart').click();
        await $('a.viewcart').click();
    }

    async updateQuantity(quantity) {
        await $('input.qty').setValue(quantity);
        await $('[title="Update Shopping Cart"]').click();
    }

    async removeProduct() {
        await $('a.action.delete').click();
        await $('button.action-accept').click(); // Confirm deletion
    }
}
export default new CartPage();
