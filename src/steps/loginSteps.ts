import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page, loginPage } from '../browserSetup';

let lastEmail: string;
let lastPassword: string;

Given("the user is on the Login page", async () => {
  await loginPage.goToUrl('/account/');
});

When("the user enters the valid email and password", async (table) => {
  for (const row of table.hashes()) {
    lastEmail = row.email;
    lastPassword = row.password;
    await loginPage.login(lastEmail, lastPassword);
  }
});

Then("the user should see email and password in the url", async () => {
  const currentUrl = new URL(page.url());
  expect(currentUrl.searchParams.get('email')).toBe(lastEmail);
  expect(currentUrl.searchParams.get('password')).toBe(lastPassword);
});