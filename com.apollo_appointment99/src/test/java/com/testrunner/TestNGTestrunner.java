package com.testrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
//import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		features = "Feature",
		glue = "step_definition",
		plugin = { "pretty",
				"json:src/test/resources/cucumber-reports/Cucumber.json",
				"junit:src/test/resources/cucumber-reports/Cucumber.xml",
				"html:src/test/resources/cucumber-reports/Cucumber.html"},
		monochrome = true,
		tags = {"@Book_appointment"}
		)

public class TestNGTestrunner extends AbstractTestNGCucumberTests{

}


