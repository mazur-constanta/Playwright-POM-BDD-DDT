import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { page, loginPage } from '../browserSetup';

Given("the user is on the Login page", async () => {
  await loginPage.goToUrl('/account/');
});

When("the user enters the valid email and password", async () => {
  await loginPage.login('test@example.com', 'pass123');
});

Then("the user should see email and password in the url", async () => {  
  const currentUrl = new URL(page.url());
  expect(currentUrl.searchParams.get('email')).toContain('test@example.com');
  expect(page.url()).toContain('pass123');
});