package com.cucumber.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionfortaggedHooks {
	
	@Given("^this is the first step$")
	public void this_is_the_first_step() throws Throwable {
		System.out.println("first step");
}

	@When("^this is the scound step$")
	public void this_is_the_scound_step() throws Throwable {
		System.out.println("scound_step");
}

	@Then("^This is the third step$")
	public void this_is_the_third_step() throws Throwable {
		System.out.println("third step");
}

}
