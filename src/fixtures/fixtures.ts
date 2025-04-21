import { test as base, expect } from '@playwright/test';

const test = base.extend<{
    testData: { email: string; password: string };
    authenticatedUser: { };
}>({
    testData: async ({}, use) => {
        const data = { email: "test@example.com", password: "pass123" };
        await use(data);
    },
    authenticatedUser: [async({ page, testData }, use) => {
        await page.goto("https://binaryville.com/account/");

        await page.getByRole("textbox", { name: "email" }).fill(testData.email);
        await page.getByRole("textbox", { name: "password" }).fill(testData.password);
        await page.getByRole('button', { name: 'Sign in' }).click();

        await use(page)
    }, { auto: true }]
});

test("Should log in with the test data", async ({ page, testData }) => {

    const url = page.url();
    expect(url).toContain(testData.password);
})