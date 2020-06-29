package com.cucumber.hookdemo;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class BackGroundHook {
	

	
	@Before()
	public void executeBeforeFirstScenario() {
		System.out.println("This method will execute before all secnario");
	}
	
	@After()
	public void executeAfterSecoundScenario() {
		System.out.println("This method will execute after all method");
	}
	


	
}
