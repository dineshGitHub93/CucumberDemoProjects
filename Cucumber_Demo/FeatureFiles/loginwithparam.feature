Feature: Login feature for Orange HRM Application with Parameter
Scenario: Login page validation with Parameter
Given user should to navigate login page
When the user enter the valid userName as "Admin" and Password as "admin123"
And clicks the login button
Then user is able to naviated to homepage