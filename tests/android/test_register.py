from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.android import UiAutomator2Options

import time

def test_register():
	options = UiAutomator2Options()
	options.set_capability("platformName", "Android")
	options.set_capability("deviceName", "emulator-5554")
	options.set_capability("app", "android/app/build/outputs/apk/debug/app-debug.apk")
	options.set_capability("automationName", "UiAutomator2")

	driver = webdriver.Remote("http://localhost:4723", options=options)
	goToRegister = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="goToRegisterButton")
	goToRegister.click()

	time.sleep(5)

	emailInput = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="emailInput")
	emailInput.send_keys("melodia.musa+4@gmail.com")
	passwordInput = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="passwordInput")
	passwordInput.send_keys("Dupadupa123!")
	confirmPasswordInput = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="confirmPasswordInput")
	confirmPasswordInput.send_keys("Dupadupa123!")
	registerButton = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="registerButton")
	registerButton.click()

	

