
import BasePage from './base.page.js';

class SearchPage extends BasePage {
    get searchInput() { return $('#search'); }
    get searchBtn() { return $('button[type="submit"]'); }

    searchFor(item) {
        this.searchInput.setValue(item);
        this.searchBtn.click();
    }
}

export default new SearchPage();
