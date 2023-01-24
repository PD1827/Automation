package com.testrunner;

//import java.util.Scanner;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class ApolloPageFactory {
	WebDriver driver;
	@FindBy(xpath = "//div[@id='loginPopup']")
	@CacheLookup
	WebElement loginPopup;
	
	@FindBy(xpath = "//*[contains(text(), ' Always caring about your health, we are here to help you!')]")
	@CacheLookup
	WebElement welcomemsg;
	
	@FindBy(name="mobileNumber")
	@CacheLookup
	WebElement mobileNumber;
	
	@FindBy(xpath="//button[@title='Login']")
	@CacheLookup
	WebElement nextButton;
	
	@FindBy(xpath="//input[@class=\"MuiInputBase-input MuiInput-input\"]")
	@CacheLookup
	WebElement otp;
	
	@FindBy(xpath="//button[@title='Login']")
	@CacheLookup
	WebElement loginButton;
	
	@FindBy(xpath="//a[@href=\"/specialties\"]")
	@CacheLookup
	WebElement appointmentButton;
	
	@FindBy(xpath="//a[@href = '/specialties/dermatology']")
	@CacheLookup
	WebElement specialistButton;
	
	@FindBy(xpath="//*[@id=\"mainContainerCT\"]/div[2]/div[1]/div[2]/div[2]/div[3]/div/div[3]/div/input")
	@CacheLookup
	WebElement searchDoctor;
	
	@FindBy(xpath="//a[@href=\"/doctors/dr-s-madhuri-0c07c245-53d9-4e4f-bdb9-922e1b831a54\"]")
	@CacheLookup
	WebElement selectDoctor;
	
	@FindBy(xpath="//*[contains(text(), 'Book Video Consult')]")
	@CacheLookup
	WebElement videoConsultButton;
	
	@FindBy(xpath="//button[@title=\" Consult Now\"]")
	@CacheLookup
	WebElement consultnowButton;
	
	@FindBy(xpath="//button[@title=\"Pay\"]")
	@CacheLookup
	WebElement payButton;
	
	@FindBy(xpath="//button[@value=\"04010d42-3cc2-41dc-9818-75b8f2db2d09\"]")
	@CacheLookup
	WebElement addPatient;
	
	@FindBy(xpath="//*[contains(text(), 'Pay Rs. ')]")
	@CacheLookup
	WebElement payButton99;
	
	@FindBy(xpath="//div[@id=\"loginPopup\"]")
	@CacheLookup
	WebElement profileButton;
	
	@FindBy(xpath="//a[@href='javascript:void(0)']")
	@CacheLookup
	WebElement logout;
	


public ApolloPageFactory (WebDriver driver) {
	this.driver = driver;
	
	}

    public WebElement fieldLogin(){
	return loginPopup ;
	}

	public void clickLogin()
	{
	this.loginPopup.click();
	}
	
	public WebElement fieldWelcomemsg(){
	return welcomemsg ;
	}

	public void getWelcomemsg()
	{
	this.welcomemsg.getText();
	}

	public WebElement Mnumb(){
	return mobileNumber;
	}

	public void setMnumb(String mnumb)
	{
		
	this.mobileNumber.sendKeys(mnumb);
	}
	
	public WebElement fieldNext(){
	return nextButton ;
	}

	public void clickNext()
	{
	this.nextButton.click();
	}
		
	public WebElement fieldOtp(){
	return otp;
	}

	public void setOtp(String otp)
	{
	this.otp.sendKeys(otp);
	}
	
	public WebElement fieldLoginButton(){
	return loginButton;
	}

	public void clickLoginButton()
	{
	this.loginButton.click();
	}
	
	
	public WebElement fieldAppointmentButton(){
	return appointmentButton;
	}
	
	public void clickAppointmentButton()
	{
	this.appointmentButton.click();
	}
	
	public WebElement fieldSbutton(){
	return specialistButton;
	}
	
	public void clickSbutton()
	{
	this.specialistButton.click();
	}
		
	public WebElement fieldSearchdoctor(){
	return searchDoctor;
	}
				
	public void setSearchdoctor(String sdoctor)
	{
	this.searchDoctor.sendKeys(sdoctor);
	}
	
	public WebElement fieldSelectdoctor(){
	return selectDoctor;
	}
					
	public void clickSelectdoctor()
	{
	this.selectDoctor.click();
	}	
		
	public WebElement fieldVcbutton(){
	return videoConsultButton;
	}
						
	public void clickVcbutton()
	{
	this.videoConsultButton.click();
	}	
	
	public WebElement fieldSlbutton(){
	return consultnowButton;
	}
							
	public void clickSlbutton()
	{
	this.consultnowButton.click();
	}
					
	public WebElement fieldPbutton(){
	return payButton;
    }
									
    public void clickPbutton()
	{
	this.payButton.click();
    }		
	
	public WebElement fieldApatient(){
	return addPatient;
	}
				
	public void clickApatient()
	{
	this.addPatient.click();
	}	
	
	public WebElement fieldPbutton99(){
	return payButton99;
	}
					
	public void clickPbutton99()
	{
	this.payButton99.click();
	}	
	
	public WebElement fieldProfile(){
	return profileButton;
	}
								
	public void clickProfile()
	{
	this.profileButton.click();
	}	
    
    public WebElement fieldLogout(){
	return logout;
	}
								
	public void clickLogout()
	{
	this.logout.click();
	}	

	}	

    
	


