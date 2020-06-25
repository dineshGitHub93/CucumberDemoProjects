package com.cucumber.hookdemo;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class ThanosHook {
	
	@Before
	public void beforeSnapping() {
		
		System.out.println("Thano collecting the infinity stones");
	}
	
	@After
	public void afterSnapping() {
		
		System.out.println("After killing everyone, taking rest on garden ");
	}

}
