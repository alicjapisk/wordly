from appium.webdriver.common.appiumby import AppiumBy
from credentials import create_ios_driver
import time

def test_login():
	try:
		# Use create_android_driver() to test on Android
		driver = create_ios_driver()
		goToLogin = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="goToLoginButton")
		goToLogin.click()

		time.sleep(5)
		
		email_input = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="emailInput")
		email_input.send_keys("melodia.musa@gmail.com")

		password_input = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="passwordInput")
		password_input.send_keys("Dupadupa123!")

		login_button = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="loginButton")
		login_button.click()

	except Exception as e:
		print("Error during test:", e)
	finally:
		driver.quit()
