package com.cucmberdemo.runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(features={"FeatureFiles/loginPagewithExamples.feature"}, 
glue= {"com.cucumber.stepDefinitions"},
//dryRun= true,
strict = true

/**
 * @author Dinesh
 * If dryRun is false it will turn on the execution.
 * It will generate the skeleton for missed feature file.	
 * dryRun option is restrict the execution and ensure that the feature file is derived properly 
 * Strict option is executing the program and then check whether the feature file is derived properly
 */
)
public class RunnerClass {

	// it should help us to combine the feature file and the step definition
	// Runner define
	
}
