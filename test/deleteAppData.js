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
  await driver
    .action("pointer")
    .move({ duration: 0, x: 602, y: 47 })
    .down({ button: 0 })
    .move({ duration: 1000, x: 638, y: 1448 })
    .up({ button: 0 })
    .perform();
  const el1 = await driver.$("accessibility id:Nastavení");
  await el1.click();
  const el2 = await driver.$("accessibility id:Prohledat nastavení");
  await el2.click();
  const el3 = await driver.$(
    "id:com.android.settings.intelligence:id/search_src_text"
  );
  await el3.addValue("mujrozhlas");
  const el4 = await driver.$(
    "id:com.android.settings.intelligence:id/result_container"
  );
  await el4.click();

  await driver
    .action("pointer")
    .move({ duration: 0, x: 576, y: 1671 })
    .down({ button: 0 })
    .move({ duration: 1000, x: 641, y: 566 })
    .up({ button: 0 })
    .perform();
  const el5 = await driver.$(
    '-android uiautomator:new UiSelector().className("android.widget.RelativeLayout").instance(9)'
  );
  await el5.click();
  const el6 = await driver.$("id:com.android.settings:id/button1");
  await el6.click();
  const el7 = await driver.$("id:android:id/button1");
  await el7.click();
  await driver.executeScript("mobile: pressKey", [{ keycode: 3 }]);
  await driver.deleteSession();
}

main().catch(console.log);
