import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dashboardTitle () {
        return $('div.app_logo');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('inventory.html');
    }
}

export default new DashboardPage();
