package com.cucumber.stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class LoginExamplesDef {
	
		WebDriver driver;
	@Given("^Navigate to login page$")
	public void navigate_to_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://opensource-demo.orangehrmlive.com/");	}

	@When("^enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_and(String uname, String upwd) throws Throwable {
		driver.findElement(By.id("txtUsername")).sendKeys(uname);
		driver.findElement(By.id("txtPassword")).sendKeys(upwd);}

	/*@When("^click submit button$")
	public void click_submit_button() throws Throwable {
		driver.findElement(By.id("btnLogin")).click();
	}*/


}
