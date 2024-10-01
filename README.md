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

to discover element xpath start appium inspector

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

use this command to run login and logout tests sequentially:

```bash
npm test -- --runInBand
```

to test device via WiFi:

1. connect device with USB cable
2. type "adb devices"
3. type "adb tcpip 5555" to setup port for connection
4. disconnect USB cable and type "adb connect <device-ip-address>:5555" find IP address in phone's settings
5. type "adb devices" to check if connected

Test files use environmental variables. Make sure to create .env file in root folder and set:  
EMAIL=account-email  
PASSWORD=account-password  
DEVICENAME=device-ip-address-including-port
