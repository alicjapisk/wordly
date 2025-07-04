from appium.webdriver.common.appiumby import AppiumBy
from credentials import create_ios_driver
import time

def test_reset_password():
	try:
		# Use create_android_driver() to test on Android
		driver = create_ios_driver()

		go_to_login = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="goToLoginButton")
		go_to_login.click()
		
		open_reset_password_modal = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="openResetPasswordModalButton")
		open_reset_password_modal.click()
		
		time.sleep(5)
		email_input = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="resetPasswordInput")
		email_input.send_keys("melodia.musa@gmail.com")

		sent_reset_password = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="sentResetPasswordButton")
		sent_reset_password.click()
	
	except Exception as e:
		print("Error during test:", e)

	finally:
		driver.quit()

