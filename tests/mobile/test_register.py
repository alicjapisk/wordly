from appium.webdriver.common.appiumby import AppiumBy
from credentials import create_ios_driver
import time

def test_register():

	# Use create_android_driver() to test on Android
	driver = create_ios_driver()
	try:
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
		
	except Exception as e:
		print("Error during test:", e)
	
	finally:
		driver.quit()

	

