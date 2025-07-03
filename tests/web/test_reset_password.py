from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def test_reset_password():
    driver = webdriver.Chrome()

    try:
        driver.get("http://localhost:8081/")

        wait = WebDriverWait(driver, 10)
		
        wait.until(EC.element_to_be_clickable((By.ID, "goToLoginButton"))).click()

        wait.until(EC.presence_of_element_located((By.ID, "openResetPasswordModalButton"))).click()
        wait.until(EC.presence_of_element_located((By.ID, "resetPasswordInput"))).send_keys("melodia.musa@gmail.com")
        time.sleep(2)  
        pass
        wait.until(EC.presence_of_element_located((By.ID, "sentResetPasswordButton"))).click()

        
        print("Success")

    except Exception as e:
        print("Error:", e)

    finally:
        time.sleep(2)
        driver.quit()
