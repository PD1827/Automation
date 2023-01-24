@Book_appointment
Feature: Apollo 24/7 Book Appointment

@Start_browser
Scenario: launch Browser
Given Initialize browser
When Browser opens
Then Browser is launched

@Successful_login
Scenario Outline: Login with valid data
Given User is on home page 
When User clicks on profile option
And User enters valid phone number <number>
And User clicks on next button
And User enters valid otp
Then User clicks on login button

 Examples:
 |number|
 |9689774038|
 
@BookAppointment_page
Scenario: Book appointment page
Given User is on home page 
When User clicks on book appointment
Then Book appointment page should be displayed

@Select_specialist
Scenario: Select specialist
Given User is on book appointment page 
When User selects specialist type from the given list
Then Navigate to doctor specialist page

@book_video_consult_successful
Scenario Outline: Select Book video consult 
Given User is on book appointment page 
When Navigate to doctor specialist page
And User selects doctor from the displayed list of doctors <Doctor>
Then Information of the selected doctor appears
And User selects book video consult option
Then A dialog box conataining details of video consultation appears
And User selects consult now option   
And Use selects payment button
Then Patient details are displayed
And User selects patients name
And User selects payment button
Then Payments page is displayed

Examples:
| Doctor |
| Dr. S Madhuri |

@Successful_logout
Scenario: logout
Given User is on home page 
When User clicks on profile button
Then User select logout button

@Close_Browser
Scenario: End browser session
Given End Browser




