Feature: User login

@smoke
Scenario: Successful login with the valid credentials
    Given the user is on the Login page
    When the user enters the valid email and password
        | email           | password   |
        | john.smith@gmail.com | Password123 |
        | data.driven@yopmail.com | Pass456789 |
    Then the user should see email and password in the url