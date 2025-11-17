import { browser } from '@wdio/globals'
import { Key } from 'webdriverio'


export default class Page {
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
