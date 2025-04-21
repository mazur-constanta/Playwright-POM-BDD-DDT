import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage.pom';
import loginData from '../test-data/loginData.json';

loginData.forEach(({ email, password}) => {
    test(`User can login with email: ${email} and password: ${password} - data-driven`, async ({ page }) => {
        let loginPage = new LoginPage(page);
        await loginPage.goToUrl('/account/');
        await loginPage.login(email, password);
    
        await expect(page).toHaveURL(new RegExp(password));
    })
})

