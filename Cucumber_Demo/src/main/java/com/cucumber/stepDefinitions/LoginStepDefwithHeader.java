package com.cucumber.stepDefinitions;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class LoginStepDefwithHeader {
	
	WebDriver driver;

	@Given("^Enter the url navigate login page$")
	public void enter_the_url_navigate_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://opensource-demo.orangehrmlive.com/");
	   }

	@When("^enter the below userName and password$")
	public void enter_the_below_userName_and_password(DataTable dataTable) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		
		List<Map<String,String>> credentials = dataTable.asMaps(String.class, String.class);
		String userName = credentials.get(0).get("userName");
		String userPwd = credentials.get(0).get("userPassword");
		driver.findElement(By.id("txtUsername")).sendKeys("Admin");
		driver.findElement(By.id("txtPassword")).sendKeys("admin123");
	}

	@When("^click on the submit button$")
	public void click_on_the_submit_button() throws Throwable {

		driver.findElement(By.id("btnLogin")).click();
		   
	    }

}
