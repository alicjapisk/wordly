from appium import webdriver
from appium.options.ios import XCUITestOptions
from appium.options.android import UiAutomator2Options

def create_ios_driver():
    options = XCUITestOptions()
    options.set_capability("platformVersion", "17.5")
    options.set_capability("deviceName", "iPhone 15")
    options.set_capability("bundleId", "com.anonymous.wordly")
    options.set_capability("noReset", True)

    driver = webdriver.Remote("http://localhost:4723", options=options)
    return driver

def create_android_driver():
    options = UiAutomator2Options()
    options.set_capability("platformName", "Android")
    options.set_capability("deviceName", "emulator-5554")
    options.set_capability("app", "android/app/build/outputs/apk/debug/app-debug.apk")
    options.set_capability("automationName", "UiAutomator2")

    driver = webdriver.Remote("http://localhost:4723", options=options)
    return driver
