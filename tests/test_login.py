from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.ios import XCUITestOptions

import time

def test_login():
	options = XCUITestOptions()
	options.set_capability("platformVersion", "17.5")
	options.set_capability("deviceName", "iPhone 15")
	options.set_capability("app", "ios/build/Build/Products/Debug-iphonesimulator/wordly.app")

	driver = webdriver.Remote("http://localhost:4723", options=options)
	time.sleep(5)
	goToLogin = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="goToLoginButton")
	goToLogin.click()

	email_input = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="emailInput")
	email_input.send_keys("melodia.musa@gmail.com")

	password_input = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="passwordInput")
	password_input.send_keys("Dupadupa123!")

	login_button = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="loginButton")
	login_button.click()


