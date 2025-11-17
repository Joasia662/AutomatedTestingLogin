import { $ } from '@wdio/globals'
import Page from './page.js';


class DashboardPage extends Page {
    get dashboardTitle() {
        return $('div.app_logo');
    }
    open() {
        return super.open('inventory.html');
    }
}

export default new DashboardPage();
