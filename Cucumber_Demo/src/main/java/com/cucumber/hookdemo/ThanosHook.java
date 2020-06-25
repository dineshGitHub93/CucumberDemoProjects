package com.cucumber.hookdemo;



import cucumber.api.java.After;
import cucumber.api.java.Before;


public class ThanosHook {
	
	@Before(order = 1)
	public void beforeSnapping() {
		
		System.out.println("Thano collecting the infinity stones");
	}
	
	@After(order = 1)
	public void afterSnapping() {
		
		System.out.println("After killing everyone, taking rest on garden ");
	}
	@Before(order = 0)
	public void beforetoBeforeScenario() {
		
		System.out.println("Thanos has to be born");
	}
	@After(order = 0)
	public void aftertoAfterScenario() {
		System.out.println("Finally thanos is also dying");
	}
}
