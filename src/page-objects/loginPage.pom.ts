import { Locator, Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    public emailLocator!: Locator;
    public passwordLocator!: Locator;
    public signInButtonLocator!: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailLocator = page.getByRole('textbox', { name: 'email' });
        this.passwordLocator = page.getByRole('textbox', { name: 'password' });
        this.signInButtonLocator = page.getByRole('button', { name: 'Sign In' });
    }
    
    async goToUrl(relativePath: string) {
        await this.page.goto(relativePath);
    }

    async login(email: string, password: string) {
        await this.emailLocator.fill(email);
        await this.passwordLocator.fill(password);
        await this.signInButtonLocator.click();
    }
}