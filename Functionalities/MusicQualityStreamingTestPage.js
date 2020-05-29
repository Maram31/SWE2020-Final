"use strict";
require("../helpers/setup");
 
var wd = require("wd"),
    _ = require('underscore'),
    actions = require("../helpers/actions"),
    serverConfigs = require('../helpers/appium-servers');
  wd.addPromiseChainMethod('swipe', actions.swipe);


describe("Music Quality Streaming Test", function () {
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
        desired.appPackage= "com.spotify.music",
        desired.appActivity= "com.spotify.music.main.MainActivity" 

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
        .elementByXPath(appSelectors.MusicQualityButton)
        .text().should.become('Streaming');
  });
  it("should choose Low Music Quality and check if the Streaming quality successfully changed", async  function () {
    return driver
      .sleep(10000)
      .elementByXPath(appSelectors.MusicQualityTypeButton).click()
      .sleep(3000) 
      .elementByXPath(appSelectors.LowQualityButton).click()
      .elementByXPath(appSelectors.MusicQualityTypeButton)
      .text().should.become('Low');
  });
  it("should press on Automatic Music Quality button and check if the Streaming quality successfully changed", async  function () {
    return driver
      .sleep(10000)
      .elementByXPath(appSelectors.MusicQualityTypeButton).click()
      .sleep(3000) 
      .elementByXPath(appSelectors.AutomaticQualityButton).click()
      .elementByXPath(appSelectors.MusicQualityTypeButton)
      .text().should.become('Automatic');
  });
  it("should press on Normal Music Quality button and check if the Streaming quality successfully changed", async  function () {
    return driver
      .sleep(10000)
      .elementByXPath(appSelectors.MusicQualityTypeButton).click()
      .sleep(3000) 
      .elementByXPath(appSelectors.NormalQualityButton).click()
      .elementByXPath(appSelectors.MusicQualityTypeButton)
      .text().should.become('Normal');
  });
  
  it("should press on High Music Quality button and check if the Streaming quality successfully changed", async  function () {
    return driver
      .sleep(10000)
      .elementByXPath(appSelectors.MusicQualityTypeButton).click()
      .sleep(3000) 
      .elementByXPath(appSelectors.HighQualityButton).click()
      .elementByXPath(appSelectors.MusicQualityTypeButton)
      .text().should.become('High');
  });
  it("should press on Very High Music Quality button and check if the Streaming quality successfully changed", async  function () {
    return driver
      .sleep(10000)
      .elementByXPath(appSelectors.MusicQualityTypeButton).click()
      .sleep(3000) 
      .elementByXPath(appSelectors.VeryHighQualityButton).click()
      .elementByXPath(appSelectors.MusicQualityTypeButton)
      .text().should.become('Very high');
  });

});  
