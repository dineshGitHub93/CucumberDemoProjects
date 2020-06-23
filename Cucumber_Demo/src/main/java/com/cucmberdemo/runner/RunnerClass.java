package com.cucmberdemo.runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(features={"FeatureFiles/loginPagewithExamples.feature"}, 
glue= {"com.cucumber.stepDefinitions"},
dryRun= false,
/**
 * If dryRun is false it will turn on the execution.
 * It will generate the skeleton for missed feature file.
 * dryRun option is restrict the execution and ensure that the feature file is derived properly
 */

//strict = true
/**	
 * it will check the mapping of feature file and do the execution parallel 
 * Strict option is executing the program and then check whether the feature file is derived properly
 */
monochrome= true,
/**
 * It will provide the elegant output for use readability 
 * when monochrome option is true the output will be " 3 Steps (2 skipped, 1 undefined) "
 * when monochrome option is false the output will be " 3 Steps ([36m2 skipped[0m, [33m1 undefined[0m) "
 *
 */
plugin= {"html:report/WebReport", "json:report/jsonreport.json", "junit:report/cucumberXml.xml"}
/**
 * format option is help us to generate the different reports 
 * "format" is replaced a word by "plugin" 
 *
 */
)
public class RunnerClass {

	// it should help us to combine the feature file and the step definition
	// Runner define
	
}
