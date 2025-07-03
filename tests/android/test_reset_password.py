from appium import webdriver
from appium.webdriver.common.appiumby import AppiumBy
from appium.options.android import UiAutomator2Options


import time

def test_reset_password():
	options = UiAutomator2Options()
	options.set_capability("platformName", "Android")
	options.set_capability("deviceName", "emulator-5554")
	options.set_capability("app", "android/app/build/outputs/apk/debug/app-debug.apk")
	options.set_capability("automationName", "UiAutomator2")

	driver = webdriver.Remote("http://localhost:4723", options=options)

	go_to_login = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="goToLoginButton")
	go_to_login.click()
	time.sleep(5)
	
	open_reset_password_modal = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="openResetPasswordModalButton")
	open_reset_password_modal.click()
	
	time.sleep(5)
	email_input = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="resetPasswordInput")
	email_input.send_keys("melodia.musa@gmail.com")

	reset_button = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="sentResetPasswordButton")
	reset_button.click()


