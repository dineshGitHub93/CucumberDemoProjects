package com.cucumber.stepDefinitions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataTableWOHDef {
	WebDriver driver;

@Given("^user can to navigate login page$")
public void user_can_to_navigate_login_page() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "D:\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.get("https://opensource-demo.orangehrmlive.com/");
   
    }

@When("^user can enter the valid below credentials$")
public void user_can_enter_the_valid_below_credentials(DataTable dataTable) throws Throwable {
	
	List<String> credentials= dataTable.asList(String.class);
	String uname=credentials.get(0);
	String pwd = credentials.get(1);
	driver.findElement(By.id("txtUsername")).sendKeys(uname);
	driver.findElement(By.id("txtPassword")).sendKeys(pwd);
    
}

@When("^user can clicks on the login button$")
public void user_can_clicks_on_the_login_button() throws Throwable {

	driver.findElement(By.id("btnLogin")).click();
   }

@Then("^user can naviated to homepage$")
public void user_can_naviated_to_homepage() throws Throwable {

	boolean Ishomepage = driver.findElement(By.linkText("Welcome Admin")).isDisplayed();
	Assert.assertTrue(Ishomepage);
   }


}
