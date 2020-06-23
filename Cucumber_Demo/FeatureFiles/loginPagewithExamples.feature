@simplelogin
Feature: Login feature for Orange HRM Application with Data table with Header
Scenario Outline: Login page validation with Data table with Header # When we have Examples option in feature the scenario should be Scenario Outline
Given Navigate to login page
When enter "<userName>" and "<password>" 
And click submit button

Examples:

|userName|password|
|Admin|admin123|


