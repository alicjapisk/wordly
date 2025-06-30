from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.android import UiAutomator2Options

import time

def test_login():
	options = UiAutomator2Options()
	options.set_capability("platformName", "Android")
	options.set_capability("deviceName", "emulator-5554")
	options.set_capability("app", "android/app/build/outputs/apk/debug/app-debug.apk")
	options.set_capability("automationName", "UiAutomator2")

	driver = webdriver.Remote("http://localhost:4723", options=options)
	goToLogin = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="goToLoginButton")
	goToLogin.click()
	time.sleep(5)

	email_input = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="emailInput")
	email_input.send_keys("melodia.musa@gmail.com")

	password_input = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="passwordInput")
	password_input.send_keys("Dupadupa123!")

	login_button = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="loginButton")
	login_button.click()


