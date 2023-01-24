package com.testrunner;




import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			junit= "--step-notifications",
					plugin = {"json:target/cucumber.json", 
							"html:target", 
							"junit:target/Cucumber.xml"						
							},
			features="Feature",
			glue={"step_definition"}
			,tags={"@Book_appointment "}		
			)
	public class Testrunner {

	}