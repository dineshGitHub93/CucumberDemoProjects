package com.cucmberdemo.runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(features={"FeatureFiles/loginPage.feature"}, 
glue= {"com.cucumber.stepDefinitions"} )
public class RunnerClass {

	// it should help us to combine the feature file and the step definition
	// Runner define
	
}
