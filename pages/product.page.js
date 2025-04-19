
class ProductPage {
    async selectJacketAndAddToCart() {
        await $('a[title*="Jacket"]').click();
        await $('[option-label="M"]').click();
        await $('[option-label="Black"]').click();
        await $('button[title="Add to Cart"]').click();
    }
}
export default new ProductPage();
