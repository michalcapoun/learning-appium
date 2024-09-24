const wdio = require("webdriverio");
require("dotenv").config();

describe("login test", () => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  let driver;

  beforeAll(async () => {
    const options = {
      capabilities: {
        "appium:automationName": "UiAutomator2",
        "appium:platformName": "Android",
        "appium:platformVersion": "14",
        "appium:deviceName": "RZCW41J69CE",
        "appium:newCommandTimeout": 36000,
        "appium:connectHardwareKeyboard": true,
      },
      connectionRetryTimeout: 10000,
      connectionRetryCount: 3,
      port: 4723,
      hostname: "localhost",
    };

    jest.setTimeout(30000); // Set a timeout for this test

    try {
      console.log("Connecting to WebDriver with options:", options);
      driver = await wdio.remote(options);
      console.log("WebDriver session started:", driver);
    } catch (error) {
      console.error("Error initializing WebDriver:", error);
      throw error;
    }
  }, 30000);

  afterAll(async () => {
    await driver.deleteSession();
  });

  test("should login with valid credentials", async () => {
    const userIcon = await driver.$(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.Button[1]'
    );
    await userIcon.click();

    const registerButton = await driver.$(
      '(//android.widget.Button[@content-desc="Registrovat / Přihlásit"])[2]'
    );
    await registerButton.click();

    const usernameField = await driver.$(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[1]/android.widget.EditText/android.widget.EditText'
    );
    await usernameField.addValue(email);

    const continueButton = await driver.$(
      '(//android.widget.Button[@content-desc="Pokračovat"])[2]'
    );
    await continueButton.click();

    const passwordField = await driver.$(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[1]/android.widget.EditText/android.widget.EditText'
    );
    await passwordField.addValue(password);

    const loginButton = await driver.$(
      '(//android.widget.Button[@content-desc="Přihlásit"])[4]'
    );
    await loginButton.click();

    const checkBox = await driver.$(
      '//android.widget.Button[@content-desc="Souhlasím s podmínkami užívání aplikace"]'
    );
    await checkBox.click();

    const startButton = await driver.$(
      '(//android.widget.Button[@content-desc="Začít poslouchat"])[2]'
    );
    await startButton.click();
  });
});
