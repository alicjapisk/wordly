from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.ios import XCUITestOptions

import time

def test_reset_password():
	options = XCUITestOptions()
	options.set_capability("platformVersion", "17.5")
	options.set_capability("deviceName", "iPhone 15")
	options.set_capability("bundleId", "com.anonymous.wordly")
	options.set_capability("noReset", True)

	driver = webdriver.Remote("http://localhost:4723", options=options)

	go_to_login = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="goToLoginButton")
	go_to_login.click()
	time.sleep(5)
	
	open_reset_password_modal = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="openResetPasswordModalButton")
	open_reset_password_modal.click()
	
	time.sleep(5)
	email_input = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="resetPasswordInput")
	email_input.send_keys("melodia.musa@gmail.com")

	login_button = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="sentResetPasswordButton")
	login_button.click()


