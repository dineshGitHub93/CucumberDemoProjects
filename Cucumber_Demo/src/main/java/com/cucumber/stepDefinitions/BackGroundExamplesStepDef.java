package com.cucumber.stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BackGroundExamplesStepDef {
	
	@Given("^The Student finished high school$")
	public void the_Student_finished_high_school() throws Throwable {
		
		System.out.println("The Student finished high school");
		
	}

	@Given("^The Student finished higher secoundary school$")
	public void the_Student_finished_higher_secoundary_school() throws Throwable {

		System.out.println("The Student finished higher secoundary school");
	}

	@Given("^the student apply for the Medical course$")
	public void the_student_apply_for_the_Medical_course() throws Throwable {

		System.out.println("the student apply for the Medical course");
	}

	@When("^the student cleared the entrance exam$")
	public void the_student_cleared_the_entrance_exam() throws Throwable {
		
		System.out.println("the student cleared the entrance exam");
	
	}

	@Then("^the student is eligible for joining any Medical institute$")
	public void the_student_is_eligible_for_joining_any_Medical_institute() throws Throwable {
		
			System.out.println("the student is eligible for joining any Medical institute");
	
	}

	@Given("^the student applied for the Engineering Course$")
	public void the_student_applied_for_the_Engineering_Course() throws Throwable {
			System.out.println("the student applied for the Engineering Course");
	
	}

	@When("^the student has a sayable cut off$")
	public void the_student_has_a_sayable_cut_off() throws Throwable {
			System.out.println("the student has a sayable cut off");
	}

	@Then("^the student is eligible for joining any Engineering institute$")
	public void the_student_is_eligible_for_joining_any_Engineering_institute() throws Throwable {
		
			System.out.println("the student is eligible for joining any Engineering institute");
	}



}
