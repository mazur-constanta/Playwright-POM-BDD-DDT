Feature: User login

Scenario: Successful login with the valid credentials
    Given the user is on the Login page
    When the user enters the valid email and password
    Then the user should see email and password in the url