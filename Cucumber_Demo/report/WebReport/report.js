$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginPage.feature");
formatter.feature({
  "line": 2,
  "name": "To Verify page navigation of Guru99 Demo site",
  "description": "",
  "id": "to-verify-page-navigation-of-guru99-demo-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@loginwithmultiplescenario"
    },
    {
      "line": 1,
      "name": "@DataDriven"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login page Verification with valid credentilas",
  "description": "",
  "id": "to-verify-page-navigation-of-guru99-demo-site;login-page-verification-with-valid-credentilas",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@loginwithvalidcredentials"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is entering Guru99 Demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter the user name and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should navigates to home page of Guru99 Demo",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 21
    }
  ],
  "location": "LoginDefinitions.user_is_entering_Guru_Demo(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginDefinitions.enter_the_user_name_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginDefinitions.click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 42
    }
  ],
  "location": "LoginDefinitions.user_should_navigates_to_home_page_of_Guru_Demo(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Login page Verification with invalid credentials",
  "description": "",
  "id": "to-verify-page-navigation-of-guru99-demo-site;login-page-verification-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@loginwithinvalidcredentials"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is entering Guru99 Demo",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "enter the user name and password",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should navigates to home page of Guru99 Demo",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 21
    }
  ],
  "location": "LoginDefinitions.user_is_entering_Guru_Demo(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginDefinitions.enter_the_user_name_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginDefinitions.click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 42
    }
  ],
  "location": "LoginDefinitions.user_should_navigates_to_home_page_of_Guru_Demo(int)"
});
formatter.result({
  "status": "skipped"
});
});