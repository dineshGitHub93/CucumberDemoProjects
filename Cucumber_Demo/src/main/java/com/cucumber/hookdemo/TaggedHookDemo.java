package com.cucumber.hookdemo;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class TaggedHookDemo {
	
	@Before("@First")
	public void executeBeforeFirstScenario() {
		System.out.println("This method will execute before first secnario");
	}
	
	@After("@Secound")
	public void executeAfterSecoundScenario() {
		System.out.println("This method will execute after secound method");
	}
}
