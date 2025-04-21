import { Before, After } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test';
import { LoginPage } from './page-objects/loginPage.pom';

let page: Page;
let browser: Browser;
let loginPage: LoginPage;

Before(async() => {
    browser = await chromium.launch({ headless: true })
    const context = await browser.newContext({
      baseURL: 'https://binaryville.com'
    });
    page = await context.newPage();
    loginPage = new LoginPage(page);
});

After(async() => {
    await browser.close()
});

export  { page, loginPage }