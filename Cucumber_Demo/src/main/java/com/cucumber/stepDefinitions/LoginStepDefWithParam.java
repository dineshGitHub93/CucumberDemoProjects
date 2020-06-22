package com.cucumber.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefWithParam {

		WebDriver driver;
		
	@Given("^user should to navigate login page$")
	public void user_should_to_navigate_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://opensource-demo.orangehrmlive.com/");
	   }

	@When("^the user enter the valid userName as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void the_user_enter_the_valid_userName_as_and_Password_as(String uname, String pwd) throws Throwable {
		driver.findElement(By.id("txtUsername")).sendKeys(uname);
		driver.findElement(By.id("txtPassword")).sendKeys(pwd);
	    }

	@When("^clicks the login button$")
	public void clicks_the_login_button() throws Throwable {

		driver.findElement(By.id("btnLogin")).click();
	   }

	@Then("^user is able to naviated to homepage$")
	public void user_is_able_to_naviated_to_homepage() throws Throwable {

		boolean Ishomepage = driver.findElement(By.linkText("Welcome Admin")).isDisplayed();
		Assert.assertTrue(Ishomepage);
		driver.quit();
	   }

	



}
