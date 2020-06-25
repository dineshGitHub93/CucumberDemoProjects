$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Iam_inevitable_hook.feature");
formatter.feature({
  "line": 2,
  "name": "Explaning about hook",
  "description": "",
  "id": "explaning-about-hook",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Hooks"
    }
  ]
});
formatter.before({
  "duration": 1095800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Hook scenario Explanation",
  "description": "",
  "id": "explaning-about-hook;hook-scenario-explanation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Thanos has the Infinity Stones",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Thanos snaps his fingers",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "half of the living things died",
  "keyword": "Then "
});
formatter.match({
  "location": "ThanosStepDefinitionForHooks.thanos_has_the_Infinity_Stones()"
});
formatter.result({
  "duration": 461765000,
  "status": "passed"
});
formatter.match({
  "location": "ThanosStepDefinitionForHooks.thanos_snaps_his_fingers()"
});
formatter.result({
  "duration": 176300,
  "status": "passed"
});
formatter.match({
  "location": "ThanosStepDefinitionForHooks.half_of_the_living_things_died()"
});
formatter.result({
  "duration": 190000,
  "status": "passed"
});
formatter.after({
  "duration": 361100,
  "status": "passed"
});
});