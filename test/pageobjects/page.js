import { browser } from '@wdio/globals'
import { Key } from 'webdriverio'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(path)
    }

    // Fix to clearValue not working: https://github.com/webdriverio/webdriverio/issues/1140#issuecomment-1781221384
    async clearInput (input) {
        await input.doubleClick();
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys([Key.Ctrl]);
        await browser.keys([Key.Delete]);
    }
}
