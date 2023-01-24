package step_definition;

import java.io.FileInputStream;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;
//import java.util.function.Function;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.By;
//import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
//import org.openqa.selenium.support.ui.FluentWait;
//import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.testrunner.ApolloPageFactory;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ApolloTestSteps {
	
	public static WebDriver driver;
	private ApolloPageFactory apollo;
	XSSFWorkbook wb;
    XSSFSheet sh;
    XSSFRow  row;
    XSSFCell  cell;
    
    @Before
    public void openBrowser() throws Exception{
    	apollo = new ApolloPageFactory(driver);
    	
    	//using pagefactory file as reference....
		apollo=PageFactory.initElements(driver, ApolloPageFactory .class);
		
		//reading file from excel....
		FileInputStream fread=new FileInputStream("./Exceldata/abs.xlsx");
		wb=new XSSFWorkbook(fread);
		
    }
    
    @Given("Initialize browser")
    public void initialize_browser() throws Exception {
    	
    	//launching web browser....
		String userProfile= "C:\\Users\\PRANDESA\\AppData\\Local\\Google\\Chrome\\User Data\\";
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\pparagde\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--user-data-dir="+userProfile);
		options.addArguments("--profile-directory=Default");
		options.addArguments("--start-maximized");
		options.addArguments("--disable-notifications");
		driver = new ChromeDriver(options);		

    }

    @When("Browser opens")
    public void browser_opens() {
    	
    	System.out.println("Browser opens");
        
    }

    @Then("Browser is launched")
    public void browser_is_launchedn() {
    	System.out.println("Browser is launched");
    	
    }
	
	@Given("User is on home page")
	public void user_is_on_home_page() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(500, TimeUnit.SECONDS);
	    driver.get("https://www.apollo247.com/");
	    System.out.println("User is on home page");
	    
	    
	    driver.manage().timeouts().pageLoadTimeout(500, TimeUnit.SECONDS);
	    String welcomemsg = driver.findElement(By.xpath("//*[contains(text(), ' Always caring about your health, we are here to help you!')]")).getText();
	    //String welcomemsg = apollo.getWelcomemsg();
	    System.out.println(welcomemsg);   
		sh=wb.getSheet("Sheet1");
		
		//value passed from excelsheet...........
		Assert.assertEquals(sh.getRow(2).getCell(1).getStringCellValue(),welcomemsg);
		System.out.println("Test passed");
		
		
	    
	}

	@When("User clicks on profile option")
	public void user_clicks_on_profil_option() throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver,120);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@id='loginPopup']")));
		apollo.clickLogin();
		
		
	    
	}

	@When("User enters valid phone number (.*)")
	public void user_enters_invalid_phone_number(String number) throws InterruptedException{
		
		//parameterization............
		apollo.setMnumb(number);
		driver.manage().timeouts().implicitlyWait(500, TimeUnit.SECONDS);
		
	}

	@When("User clicks on next button")
	public void user_clicks_on_next_button() throws InterruptedException {	
		
		apollo.clickNext();
			
	}

	@When("User enters valid otp")
	public void user_enters_valid_otp() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(500, TimeUnit.SECONDS);
		System.out.println("Enter otp:");
		Scanner sc = new Scanner(System.in);
		String otp = sc.nextLine();	
		apollo.setOtp(otp);
		Thread.sleep(3000);
		sc.close();
	}

	@Then("User clicks on login button")
	public void user_clicks_on_login_button() throws InterruptedException {
		
		apollo.clickLoginButton();
		Thread.sleep(3000);
		
	}
	
	@When("User clicks on book appointment")
	public void user_clicks_on_book_appointment() {
		WebDriverWait wait = new WebDriverWait(driver,120);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//a[@href=\"/specialties\"]")));
		apollo.clickAppointmentButton();
		
		 
	}
	
	@Then("Book appointment page should be displayed")
	public void book_appointment_page_should_be_displayed()  {
		
		System.out.println("user is on book appointment page");
		driver.manage().timeouts().pageLoadTimeout(500, TimeUnit.SECONDS);
	}
	
	@Given("User is on book appointment page")
	public void user_is_on_book_appointment_page()   {
		
		System.out.println("user is on book appointment page");	 
		
	}
	
	@When("User selects specialist type from the given list")
	public void user_selects_specialist_type_from_the_given_list()   {
		
	    apollo.clickSbutton();
	    driver.manage().timeouts().pageLoadTimeout(500, TimeUnit.SECONDS);

	}
	
	@Then("Navigate to doctor specialist page")
	public void navigate_to_doctor_specialist_page() {
		
		System.out.println("Navigate to doctor specialist page");
		
	
	}
	
	
	@When("User selects doctor from the displayed list of doctors (.*)")
	public void user_selects_doctor_from_the_displayed_list_of_doctors(String Doctor) throws InterruptedException {
		
		apollo.setSearchdoctor(Doctor);
		Thread.sleep(3000);
	    apollo.clickSelectdoctor();
	    Thread.sleep(3000);
		
//		sh=wb.getSheet("Sheet1");
//		
//		//value passed from excelsheet............
//		apollo.setSearchdoctor(sh.getRow(2).getCell(0).getStringCellValue());
//		Thread.sleep(3000);
//	    apollo.clickSelectdoctor();
//	    Thread.sleep(3000);
	}

	@Then("Information of the selected doctor appears")
	public void information_of_the_selected_doctor_appears(){
		System.out.println("Information of the selected doctor appears");
		driver.manage().timeouts().pageLoadTimeout(500, TimeUnit.SECONDS);
	}


	@Then("User selects book video consult option")
	public void user_selects_book_video_consult_option() throws InterruptedException  {
	    apollo.clickVcbutton();
	    Thread.sleep(3000);
	}

	@Then("A dialog box conataining details of video consultation appears")
	public void a_dialog_box_conataining_details_of_video_consultation_appears()  {
		System.out.println("A dialog box conataining details of video consultation appears");
		
	}

	@Then("User selects consult now option")
	public void user_selects_consult_now_option() throws InterruptedException {
		WebDriverWait wait = new WebDriverWait(driver,120);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@title=\" Consult Now\"]")));
		apollo.clickSlbutton();
		
		
	}

	@Then("Use selects payment button")
	public void use_selects_payment_button()  throws InterruptedException{
	    apollo.clickPbutton();
	    Thread.sleep(2000);
	    
	     
	}

	@Then("Patient details are displayed")
	public void patient_details_are_displayed() {
		System.out.println("Patient details are displayed");
		
	}

	@Then("User selects patients name")
	public void user_selects_patients_name() {
	    apollo.clickApatient();
	    driver.manage().timeouts().pageLoadTimeout(600, TimeUnit.SECONDS);  
	}

	@Then("User selects payment button")
	public void user_selects_payment_button() throws InterruptedException {
	    apollo.clickPbutton99();
	    Thread.sleep(3000); 
	}

	@Then("Payments page is displayed")
	public void payments_page_is_displayed()  {
		System.out.println("Payments page is displayed");
		driver.manage().timeouts().pageLoadTimeout(500, TimeUnit.SECONDS); 
	}

	
	@When("User clicks on profile button")
	public void user_clicks_on_profile_button() {
		WebDriverWait wait = new WebDriverWait(driver,120);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@id=\"loginPopup\"]")));
	    apollo.clickProfile();  
	    
	}
	
	@Then("User select logout button")
	public void user_select_logout_button() {
	    apollo.clickLogout();
	    driver.manage().timeouts().implicitlyWait(600, TimeUnit.SECONDS);
	}
	
	@Given("End Browser")
	public void end_Browser() {
		System.out.println("Closing the Browser");
	    driver.close();
	    
	    
	}

}
