@loginwithmultiplescenario
Feature: To Verify page navigation of Guru99 Demo site

@loginwithvalidcredentials
Scenario: Login page Verification with valid credentilas
	Given user is entering Guru99 Demo
	Then  enter the user name and password
	And   click on submit button
	Then  user should navigates to home page of Guru99 Demo 

@loginwithinvalidcredentials
Scenario: Login page Verification with invalid credentials
	Given user is entering Guru99 Demo
	Then  enter the user name and password
	And   click on submit button
	Then  user should navigates to home page of Guru99 Demo 
	