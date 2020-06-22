package com.cucumber.stepDefinitions;

import cucumber.api.java.en.Given;

public class ExpressionStepDefinitions {
	
	
/*	 Method written by manual 
 * @Given("^I have (\\d+) laptop$")
	public void I_have_1_laptop(int count) {
		System.out.println("Laptop Count :"+count);
	}
*/
	@Given("^I have (\\d+) laptop$")
	public void i_have_laptop(int arg1) throws Throwable {
		System.out.println("Laptop Count :"+arg1);
	}
	
	/* Floating value 89.7 is consider two different argument while generating by auto 
	 * 
	 * @Given("^I have completed my degree with (\\d+)\\.(\\d+) percentage$") public
	 * void i_have_completed_my_degree_with_percentage(int arg1, int arg2) throws
	 * Throwable { // Write code here that turns the phrase above into concrete
	 * actions throw new PendingException(); }
	 */

	@Given("^I have completed my degree with (\\d+\\.\\d+) percentage$") 
	public void i_have_completed_my_degree_with_percentage(float percen) throws Throwable {
		
		System.out.println("I have completed my drgree with "+percen);
	}
	
	@Given("^\"(.*?)\" is cousin of \"(.*?)\" and \"(.*?)\"$")
	public void is_cousin_of_and(String nm1, String nm2, String nm3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println(nm1+ " is cousin of "+nm2+" and "+nm3);
	}
}
