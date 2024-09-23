// This sample code supports WebdriverIO client >=8
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

import { remote } from "webdriverio";
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
  const el1 = await driver.$("accessibility id:mujRozhlas");
  await el1.click();
  const el2 = await driver.$(
    '-android uiautomator:new UiSelector().description("Přeskočit").instance(1)'
  );
  await el2.click();
  const el3 = await driver.$(
    '-android uiautomator:new UiSelector().description("Začít poslouchat").instance(1)'
  );
  await el3.click();
  const el4 = await driver.$(
    "accessibility id:Souhlasím s podmínkami užívání aplikace"
  );
  await el4.click();
  const el5 = await driver.$(
    '-android uiautomator:new UiSelector().description("Začít poslouchat").instance(1)'
  );
  await el5.click();
  await driver.deleteSession();
}

main().catch(console.log);
