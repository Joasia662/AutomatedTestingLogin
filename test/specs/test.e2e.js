import { expect } from '@wdio/globals'
import { invalidUsers, validUsers } from '../data/user.js';

import DashboardPage from '../pageobjects/dashboard.page.js'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });


    invalidUsers.forEach(user => {
        it(`UC-1 Should display error about required username for user: ${user.username}`, async () => {

            //arrange        
            await LoginPage.inputUsername.setValue(user.username);
            await LoginPage.inputPassword.setValue(user.password);


            await LoginPage.clearInput(LoginPage.inputUsername);
            await LoginPage.clearInput(LoginPage.inputPassword);

            //act
            await LoginPage.btnSubmit.click();

            //assert
            await expect(LoginPage.flashCard).toBeExisting()
            await expect(LoginPage.flashCard).toHaveText(
                expect.stringContaining('Username is required'))
        })

    });

    invalidUsers.forEach(user => {
        it(`UC-2 Should display error about required password for user: ${user.username}`, async () => {
            //arrange
            await LoginPage.inputUsername.setValue(user.username);
            await LoginPage.inputPassword.setValue(user.password);
            await LoginPage.clearInput(LoginPage.inputPassword);

            //act
            await LoginPage.btnSubmit.click();

            //assert
            await expect(LoginPage.flashCard).toBeExisting()
            await expect(LoginPage.flashCard).toHaveText(
                expect.stringContaining('Password is required'))

        })
    })

    validUsers.forEach(user => {
        it(`UC-3 Should display Swag Labs when login is successfull for user: ${user.username}`, async () => {
            //arrange
            await LoginPage.inputUsername.setValue(user.username);
            await LoginPage.inputPassword.setValue(user.password);

            //act
            await LoginPage.btnSubmit.click();

            //assert
            await expect(DashboardPage.dashboardTitle).toBeExisting()
            await expect(DashboardPage.dashboardTitle).toHaveText(
                expect.stringContaining('Swag Labs'))
        });
    });

})

