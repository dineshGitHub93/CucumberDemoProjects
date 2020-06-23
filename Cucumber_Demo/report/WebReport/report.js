$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/loginPagewithExamples.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature for Orange HRM Application with Data table with Header",
  "description": "",
  "id": "login-feature-for-orange-hrm-application-with-data-table-with-header",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Login page validation with Data table with Header # When we have Examples option in feature the scenario should be Scenario Outline",
  "description": "",
  "id": "login-feature-for-orange-hrm-application-with-data-table-with-header;login-page-validation-with-data-table-with-header-#-when-we-have-examples-option-in-feature-the-scenario-should-be-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click submit button",
  "keyword": "And "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "login-feature-for-orange-hrm-application-with-data-table-with-header;login-page-validation-with-data-table-with-header-#-when-we-have-examples-option-in-feature-the-scenario-should-be-scenario-outline;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 9,
      "id": "login-feature-for-orange-hrm-application-with-data-table-with-header;login-page-validation-with-data-table-with-header-#-when-we-have-examples-option-in-feature-the-scenario-should-be-scenario-outline;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 10,
      "id": "login-feature-for-orange-hrm-application-with-data-table-with-header;login-page-validation-with-data-table-with-header-#-when-we-have-examples-option-in-feature-the-scenario-should-be-scenario-outline;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Login page validation with Data table with Header # When we have Examples option in feature the scenario should be Scenario Outline",
  "description": "",
  "id": "login-feature-for-orange-hrm-application-with-data-table-with-header;login-page-validation-with-data-table-with-header-#-when-we-have-examples-option-in-feature-the-scenario-should-be-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginExamplesDef.navigate_to_login_page()"
});
formatter.result({
  "duration": 31661430100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 7
    },
    {
      "val": "admin123",
      "offset": 19
    }
  ],
  "location": "LoginExamplesDef.enter_and(String,String)"
});
formatter.result({
  "duration": 875966700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});