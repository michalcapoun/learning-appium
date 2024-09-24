const wdio = require("webdriverio");

describe("logout test", () => {
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
    const userIcon = await driver.$('//android.view.View[@content-desc="BA"]');
    await userIcon.click();

    const logoutButton = await driver.$(
      '(//android.widget.Button[@content-desc="Odhlásit"])[2]'
    );
    await logoutButton.click();

    const confirmLogout = await driver.$(
      '//android.widget.Button[@content-desc="Odhlásit"]'
    );
    await confirmLogout.click();

    const close = await driver.$(
      '(//android.widget.Button[@content-desc="Zavřít"])[2]'
    );
    await close.click();
  });
});
