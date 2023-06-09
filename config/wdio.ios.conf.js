const path =require('path');
const { config } = require('./wdio.shared.conf');

//
// ============
// Runner Configuration
// ============
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
    '../test/specs/ios/ios-todo*.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'ios',
        'appium:platformVersion': '14.5',
        'appium:deviceName':'iPhone 12 Pro Max',
        'appium:automationName':'XCUITest',
        ///Users/habensimanjuntak/Documents/QA/automation/myauto/mobile/webdriverio-appium-v8/app/android/ApiDemos-debug.apk
        'appium:app': path.join(process.cwd(),'app/ios/MVCTodo.app'),
    }
];


// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium'];

exports.config = config;