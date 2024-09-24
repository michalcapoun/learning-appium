# learning-appium

### Installation

1. install node.js - https://nodejs.org/en/download/package-manager/current

2. install Appium

```bash
npm i -g appium
```

3. install Java Development Kit (JDK) - https://www.oracle.com/cz/java/technologies/downloads/

4. install Appium Inspector - https://github.com/appium/appium-inspector/releases

5. install Android Command Line Tools - https://developer.android.com/studio

6. set Environmental variables ANDROID_HOME and JAVA_HOME
   setx ANDROID_HOME "%LOCALAPPDATA%\Android"
   setx JAVA_HOME "%ProgramFiles%\Java\jdk-22"

path:
%JAVA_HOME%\bin
%ANDROID_HOME%\bin
%ANDROID_HOME%\build-tools
%ANDROID_HOME%\platform-tools

7. install UIAutomator2 - appium driver install uiautomator2

8. install WebdriverIO 'npm i --save-dev webdriverio'

9. connect mobile device

10. run cmd as admin

```bash
adb devices
```

11. start appium server

```bash
appium
```

press CTRL + C to quit

12. start appium inspector

```bash
{
"appium:automationName": "UiAutomator2",
"appium:platformName": "Android",
"appium:platformVersion": "14",
"appium:deviceName": "device id found by adb devices command",
"appPackage": "cz.rozhlas.mujrozhlas",
"appActivity": "cz.rozhlas.mujrozhlas.MainActivity"
}
```
