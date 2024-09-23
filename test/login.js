// This sample code supports WebdriverIO client >=8
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

import { remote } from "webdriverio";

import { config } from "dotenv";

config();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

async function main() {
  const caps = {
    "appium:automationName": "UiAutomator2",
    "appium:platformName": "Android",
    "appium:platformVersion": "14",
    "appium:deviceName": "RZCW41J69CE",
    "appium:newCommandTimeout": 3600,
    "appium:connectHardwareKeyboard": true,
  };
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: caps,
  });

  if (!email || !password) {
    console.error(
      "Email or password is undefined. Please check your .env file."
    );
  }

  const el1 = await driver.$("accessibility id:Další");
  await el1.click();
  const el2 = await driver.$("accessibility id:Profil uživatele");
  await el2.click();
  const el3 = await driver.$(
    '-android uiautomator:new UiSelector().description("Registrovat / Přihlásit").instance(1)'
  );
  await el3.click();
  const el4 = await driver.$(
    '-android uiautomator:new UiSelector().className("android.widget.EditText").instance(1)'
  );
  await el4.addValue(email);
  const el5 = await driver.$(
    '-android uiautomator:new UiSelector().description("Pokračovat").instance(1)'
  );
  await el5.click();
  const el6 = await driver.$(
    '-android uiautomator:new UiSelector().className("android.widget.EditText").instance(2)'
  );
  await el6.addValue(password);
  const el7 = await driver.$(
    '-android uiautomator:new UiSelector().description("Přihlásit").instance(3)'
  );
  await el7.click();
  const el8 = await driver.$(
    "accessibility id:Souhlasím s podmínkami užívání aplikace"
  );
  await el8.click();
  const el9 = await driver.$(
    '-android uiautomator:new UiSelector().description("Začít poslouchat").instance(1)'
  );
  await el9.click();
  await driver.deleteSession();
}

main().catch(console.log);
