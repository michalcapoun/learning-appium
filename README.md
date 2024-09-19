# learning-appium

### Installation

1. install node.js - https://nodejs.org/en/download/package-manager/current

to check current version

```bash
node -v
```

and

```bash
npm -v
```

2. install Appium

```bash
npm i -g appium
```

to check current version

```bash
appium -v
```

Java Development Kit (JDK) - check with "javac -version", install here https://www.oracle.com/cz/java/technologies/downloads/

Appium Inspector - https://github.com/appium/appium-inspector/releases
Android Command Line Tools - https://developer.android.com/studio
Environmental variables ANDROID_HOME and JAVA_HOME
setx ANDROID_HOME "%LOCALAPPDATA%\Android"
setx JAVA_HOME "%ProgramFiles%\Java\jdk-22"

path:
%JAVA_HOME%\bin
%ANDROID_HOME%\bin
%ANDROID_HOME%\build-tools
%ANDROID_HOME%\platform-tools

UIAutomator2 - appium driver install uiautomator2
WebdriverIO 'npm i --save-dev webdriverio'

run cmd as admin

```bash
adb devices
```

to start appium server

```bash
appium
```

press CTRL + C to quit
