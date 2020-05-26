"use strict";
require("../helpers/setup");
 
var wd = require("wd"),
    _ = require('underscore'),
    actions = require("../helpers/actions"),
    serverConfigs = require('../helpers/appium-servers');
  wd.addPromiseChainMethod('swipe', actions.swipe);


describe("Audio Quality Test", function () {
  this.timeout(30000000);
  var driver;
  var allPassed = true;
  var appSelectors=require("../helpers/AppSelectorsAndroid");
  before( async function () {
        var serverConfig = serverConfigs.local;
        driver = wd.promiseChainRemote(serverConfig);
        require("../helpers/logging").configure(driver);
    
    
    
        var desired =_.clone(require("../helpers/caps").android);
        desired.automationName= "UiAutomator2",
        desired.appPackage= "com.spotify.lite",
        desired.appActivity= "com.spotify.lite.features.main.MainActivity" 

        return driver
      .init(desired)
      .setImplicitWaitTimeout(10000);
    });

  after( async function () {
    return driver
      .quit()
      .finally(function () {
      });
    });

  afterEach( async function () {
        allPassed = allPassed && this.currentTest.state === 'passed';
    });

  it("should press on Setting button", async  function () {
    return driver
	    .sleep(10000)
        .elementByXPath(appSelectors.SettingButton).click()
        .sleep(3000)  
        .elementByXPath(appSelectors.AudioQualityButton)
        .text().should.become('Audio Quality');
    });
  it("should press on Audio Quality button", async  function () {
    return driver
	    .sleep(10000)
        .elementByXPath(appSelectors.AudioQualityButton).click()
        .sleep(3000)  
        .elementById(appSelectors.BasicQualityButtonId)
        .text().should.become('Basic');
    });
  it("should press on Normal Audio Quality button then back and check if the audio quality successfully changed", async  function () {
    return driver
	    .sleep(10000)
        .elementById(appSelectors.NormalQualityButtonId).click()
        .sleep(3000) 
        .elementByXPath(appSelectors.BackToAudioQualityButton).click() 
        .sleep(3000)
        .elementById(appSelectors.AudioQualitysubTitleId)
        .text().should.become('Normal');
    });
  it("should press on Basic Audio Quality button then back and check if the audio quality successfully changed", async  function () {
    return driver
        .sleep(10000)
        .elementByXPath(appSelectors.AudioQualityButton).click()
        .sleep(3000) 
        .elementById(appSelectors.BasicQualityButtonId).click()
        .sleep(3000) 
        .elementByXPath(appSelectors.BackToAudioQualityButton).click() 
        .sleep(3000)
        .elementById(appSelectors.AudioQualitysubTitleId)
        .text().should.become('Basic');
    });
    it("should press on High Audio Quality button then back and check if the audio quality successfully changed", async  function () {
        return driver
            .sleep(10000)
            .elementByXPath(appSelectors.AudioQualityButton).click()
            .sleep(3000) 
            .elementById(appSelectors.HighQualityButtonId).click()
            .sleep(3000) 
            .elementByXPath(appSelectors.BackToAudioQualityButton).click() 
            .sleep(3000)
            .elementById(appSelectors.AudioQualitysubTitleId)
            .text().should.become('High');
    });

});  
