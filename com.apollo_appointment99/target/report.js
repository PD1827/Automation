$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Appointment.feature");
formatter.feature({
  "name": "Apollo 24/7 Book Appointment",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Book_appointment"
    }
  ]
});
formatter.scenario({
  "name": "launch Browser",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Book_appointment"
    },
    {
      "name": "@Start_browser"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Initialize browser",
  "keyword": "Given "
});
formatter.match({
  "location": "ApolloTestSteps.initialize_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browser opens",
  "keyword": "When "
});
formatter.match({
  "location": "ApolloTestSteps.browser_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browser is launched",
  "keyword": "Then "
});
formatter.match({
  "location": "ApolloTestSteps.browser_is_launchedn()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Successful_login"
    }
  ]
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on profile option",
  "keyword": "When "
});
formatter.step({
  "name": "User enters valid phone number \u003cnumber\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on next button",
  "keyword": "And "
});
formatter.step({
  "name": "User enters valid otp",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "number"
      ]
    },
    {
      "cells": [
        "9689774038"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Book_appointment"
    },
    {
      "name": "@Successful_login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "ApolloTestSteps.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on profile option",
  "keyword": "When "
});
formatter.match({
  "location": "ApolloTestSteps.user_clicks_on_profil_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid phone number 9689774038",
  "keyword": "And "
});
formatter.match({
  "location": "ApolloTestSteps.user_enters_invalid_phone_number(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using name\u003dmobileNumber\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LIN51007411\u0027, ip: \u002710.103.3.229\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.testrunner.ApolloPageFactory.setMnumb(ApolloPageFactory.java:112)\r\n\tat step_definition.ApolloTestSteps.user_enters_invalid_phone_number(ApolloTestSteps.java:116)\r\n\tat ✽.User enters valid phone number 9689774038(Feature/Appointment.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on next button",
  "keyword": "And "
});
formatter.match({
  "location": "ApolloTestSteps.user_clicks_on_next_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters valid otp",
  "keyword": "And "
});
formatter.match({
  "location": "ApolloTestSteps.user_enters_valid_otp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "ApolloTestSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Book appointment page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Book_appointment"
    },
    {
      "name": "@BookAppointment_page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "ApolloTestSteps.user_is_on_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LIN51007411\u0027, ip: \u002710.103.3.229\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\PRANDESA\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49718}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 76db79b2d34b6eedf1c2f6fafafd2b0e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat step_definition.ApolloTestSteps.user_is_on_home_page(ApolloTestSteps.java:84)\r\n\tat ✽.User is on home page(Feature/Appointment.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on book appointment",
  "keyword": "When "
});
formatter.match({
  "location": "ApolloTestSteps.user_clicks_on_book_appointment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Book appointment page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ApolloTestSteps.book_appointment_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Select specialist",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Book_appointment"
    },
    {
      "name": "@Select_specialist"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on book appointment page",
  "keyword": "Given "
});
formatter.match({
  "location": "ApolloTestSteps.user_is_on_book_appointment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects specialist type from the given list",
  "keyword": "When "
});
formatter.match({
  "location": "ApolloTestSteps.user_selects_specialist_type_from_the_given_list()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LIN51007411\u0027, ip: \u002710.103.3.229\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\PRANDESA\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49718}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 76db79b2d34b6eedf1c2f6fafafd2b0e\n*** Element info: {Using\u003dxpath, value\u003d//a[@href \u003d \u0027/specialties/dermatology\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy18.click(Unknown Source)\r\n\tat com.testrunner.ApolloPageFactory.clickSbutton(ApolloPageFactory.java:158)\r\n\tat step_definition.ApolloTestSteps.user_selects_specialist_type_from_the_given_list(ApolloTestSteps.java:173)\r\n\tat ✽.User selects specialist type from the given list(Feature/Appointment.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Navigate to doctor specialist page",
  "keyword": "Then "
});
formatter.match({
  "location": "ApolloTestSteps.navigate_to_doctor_specialist_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Select Book video consult",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@book_video_consult_successful"
    }
  ]
});
formatter.step({
  "name": "User is on book appointment page",
  "keyword": "Given "
});
formatter.step({
  "name": "Navigate to doctor specialist page",
  "keyword": "When "
});
formatter.step({
  "name": "User selects doctor from the displayed list of doctors \u003cDoctor\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Information of the selected doctor appears",
  "keyword": "Then "
});
formatter.step({
  "name": "User selects book video consult option",
  "keyword": "And "
});
formatter.step({
  "name": "A dialog box conataining details of video consultation appears",
  "keyword": "Then "
});
formatter.step({
  "name": "User selects consult now option",
  "keyword": "And "
});
formatter.step({
  "name": "Use selects payment button",
  "keyword": "And "
});
formatter.step({
  "name": "Patient details are displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User selects patients name",
  "keyword": "And "
});
formatter.step({
  "name": "User selects payment button",
  "keyword": "And "
});
formatter.step({
  "name": "Payments page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Doctor"
      ]
    },
    {
      "cells": [
        "Dr. S Madhuri"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Select Book video consult",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Book_appointment"
    },
    {
      "name": "@book_video_consult_successful"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on book appointment page",
  "keyword": "Given "
});
formatter.match({
  "location": "ApolloTestSteps.user_is_on_book_appointment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to doctor specialist page",
  "keyword": "When "
});
formatter.match({
  "location": "ApolloTestSteps.navigate_to_doctor_specialist_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects doctor from the displayed list of doctors Dr. S Madhuri",
  "keyword": "And "
});
formatter.match({
  "location": "ApolloTestSteps.user_selects_doctor_from_the_displayed_list_of_doctors(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LIN51007411\u0027, ip: \u002710.103.3.229\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\PRANDESA\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49718}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 76db79b2d34b6eedf1c2f6fafafd2b0e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"mainContainerCT\"]/div[2]/div[1]/div[2]/div[2]/div[3]/div/div[3]/div/input}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.testrunner.ApolloPageFactory.setSearchdoctor(ApolloPageFactory.java:167)\r\n\tat step_definition.ApolloTestSteps.user_selects_doctor_from_the_displayed_list_of_doctors(ApolloTestSteps.java:190)\r\n\tat ✽.User selects doctor from the displayed list of doctors Dr. S Madhuri(Feature/Appointment.feature:39)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Information of the selected doctor appears",
  "keyword": "Then "
});
formatter.match({
  "location": "ApolloTestSteps.information_of_the_selected_doctor_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects book video consult option",
  "keyword": "And "
});
formatter.match({
  "location": "ApolloTestSteps.user_selects_book_video_consult_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "A dialog box conataining details of video consultation appears",
  "keyword": "Then "
});
formatter.match({
  "location": "ApolloTestSteps.a_dialog_box_conataining_details_of_video_consultation_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects consult now option",
  "keyword": "And "
});
formatter.match({
  "location": "ApolloTestSteps.user_selects_consult_now_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Use selects payment button",
  "keyword": "And "
});
formatter.match({
  "location": "ApolloTestSteps.use_selects_payment_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Patient details are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ApolloTestSteps.patient_details_are_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects patients name",
  "keyword": "And "
});
formatter.match({
  "location": "ApolloTestSteps.user_selects_patients_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User selects payment button",
  "keyword": "And "
});
formatter.match({
  "location": "ApolloTestSteps.user_selects_payment_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Payments page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ApolloTestSteps.payments_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Book_appointment"
    },
    {
      "name": "@Successful_logout"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "ApolloTestSteps.user_is_on_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LIN51007411\u0027, ip: \u002710.103.3.229\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\PRANDESA\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49718}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 76db79b2d34b6eedf1c2f6fafafd2b0e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat step_definition.ApolloTestSteps.user_is_on_home_page(ApolloTestSteps.java:84)\r\n\tat ✽.User is on home page(Feature/Appointment.feature:56)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on profile button",
  "keyword": "When "
});
formatter.match({
  "location": "ApolloTestSteps.user_clicks_on_profile_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "ApolloTestSteps.user_select_logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "End browser session",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Book_appointment"
    },
    {
      "name": "@Close_Browser"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "End Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "ApolloTestSteps.end_Browser()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: unable to connect to renderer\n  (failed to check if window was closed: disconnected: unable to connect to renderer)\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LIN51007411\u0027, ip: \u002710.103.3.229\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\PRANDESA\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49718}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 76db79b2d34b6eedf1c2f6fafafd2b0e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat step_definition.ApolloTestSteps.end_Browser(ApolloTestSteps.java:282)\r\n\tat ✽.End Browser(Feature/Appointment.feature:62)\r\n",
  "status": "failed"
});
});