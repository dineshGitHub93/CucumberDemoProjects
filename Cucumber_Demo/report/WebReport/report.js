$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginDatawithHeader.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature for Orange HRM Application with Data table with Header",
  "description": "",
  "id": "login-feature-for-orange-hrm-application-with-data-table-with-header",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DataDriven"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Login page validation with Data table with Header",
  "description": "",
  "id": "login-feature-for-orange-hrm-application-with-data-table-with-header;login-page-validation-with-data-table-with-header",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Enter the url navigate login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter the below userName and password",
  "rows": [
    {
      "cells": [
        "userName",
        "userPassword"
      ],
      "line": 6
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefwithHeader.enter_the_url_navigate_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefwithHeader.enter_the_below_userName_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefwithHeader.click_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("loginPage.feature");
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
formatter.uri("loginwithdataDriven.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature for Orange HRM Application with Data table with out Header",
  "description": "",
  "id": "login-feature-for-orange-hrm-application-with-data-table-with-out-header",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DataDriven"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Login page validation with Data table with out Header",
  "description": "",
  "id": "login-feature-for-orange-hrm-application-with-data-table-with-out-header;login-page-validation-with-data-table-with-out-header",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user can to navigate login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user can enter the valid below credentials",
  "rows": [
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user can clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user can naviated to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTableWOHDef.user_can_to_navigate_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DataTableWOHDef.user_can_enter_the_valid_below_credentials(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DataTableWOHDef.user_can_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DataTableWOHDef.user_can_naviated_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("loginwithparam.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature for Orange HRM Application with Parameter",
  "description": "",
  "id": "login-feature-for-orange-hrm-application-with-parameter",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DataDriven"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Login page validation with Parameter",
  "description": "",
  "id": "login-feature-for-orange-hrm-application-with-parameter;login-page-validation-with-parameter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user should to navigate login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user enter the valid userName as \"Admin\" and Password as \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user is able to naviated to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefWithParam.user_should_to_navigate_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 38
    },
    {
      "val": "admin123",
      "offset": 62
    }
  ],
  "location": "LoginStepDefWithParam.the_user_enter_the_valid_userName_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefWithParam.clicks_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefWithParam.user_is_able_to_naviated_to_homepage()"
});
formatter.result({
  "status": "skipped"
});
});