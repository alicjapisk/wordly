from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.ios import XCUITestOptions

import time

def test_register():
	options = XCUITestOptions()
	options.set_capability("platformVersion", "17.5")
	options.set_capability("deviceName", "iPhone 15")
	options.set_capability("app", "ios/build/Build/Products/Debug-iphonesimulator/wordly.app")

	driver = webdriver.Remote("http://localhost:4723", options=options)
	time.sleep(5)
	goToRegister = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="goToRegisterButton")
	goToRegister.click()
	emailInput = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="emailInput")
	emailInput.send_keys("melodia.musa+4@gmail.com")
	passwordInput = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="passwordInput")
	passwordInput.send_keys("Dupadupa123!")
	confirmPasswordInput = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="confirmPasswordInput")
	confirmPasswordInput.send_keys("Dupadupa123!")
	registerButton = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="registerButton")
	registerButton.click()

	

