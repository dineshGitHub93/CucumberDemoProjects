package com.cucumber.stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginDefinitions {
	WebDriver driver;
	
@Given("^user is entering Guru(\\d+) Demo$")
public void user_is_entering_Guru_Demo(int arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	System.setProperty("webdriver.chrome.driver","D:\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("http://demo.guru99.com/V4/");
}

@Then("^enter the user name and password$")
public void enter_the_user_name_and_password() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.name("uid")).sendKeys("mngr267315");
    driver.findElement(By.name("password")).sendKeys("vypepEp");

}

@Then("^click on submit button$")
public void click_on_submit_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.name("btnLogin")).click();
}

@Then("^user should navigates to home page of Guru(\\d+) Demo$")
public void user_should_navigates_to_home_page_of_Guru_Demo(int arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
   if(driver.getTitle().contains(" Guru99 Bank Manager HomePage ")) {
    	System.out.println("Login successfully ");
    }else {
    	System.out.println("Login not successfully");
    }
}
}

