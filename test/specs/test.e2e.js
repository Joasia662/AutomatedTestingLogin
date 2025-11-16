import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        await browser.url("https://www.saucedemo.com/");

        
        await LoginPage.inputUsername.click();
        await LoginPage.inputUsername.setValue('Test');
        await LoginPage.inputPassword.click();
        await LoginPage.inputPassword.setValue('Test');

    
        await LoginPage.clearInput(LoginPage.inputUsername);
        await LoginPage.clearInput(LoginPage.inputPassword);

        //await browser.pause(5000);
        await LoginPage.btnSubmit.click();
        
        await expect(LoginPage.flashCard).toBeExisting()
        await expect(LoginPage.flashCard).toHaveText(
            expect.stringContaining('Username is required'))
    })
})

