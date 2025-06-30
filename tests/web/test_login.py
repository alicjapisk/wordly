from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def test_login():
    driver = webdriver.Chrome()

    try:
        driver.get("http://localhost:8081/")

        wait = WebDriverWait(driver, 10)

        wait.until(EC.element_to_be_clickable((By.ID, "goToLoginButton"))).click()

        email_input = wait.until(EC.presence_of_element_located((By.ID, "emailInput")))
        email_input.send_keys("melodia.musa@gmail.com")

        password_input = driver.find_element(By.ID, "passwordInput")
        password_input.send_keys("Dupadupa123!")

        login_button = driver.find_element(By.ID, "loginButton")
        login_button.click()

        wait.until(EC.presence_of_element_located((By.ID, "dashboard")))
        
        print("Success")

    except Exception as e:
        print("Error:", e)

    finally:
        time.sleep(2)
        driver.quit()
