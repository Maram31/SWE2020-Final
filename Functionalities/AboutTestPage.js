"use strict";
require("../helpers/setup");
 
var wd = require("wd"),
    _ = require('underscore'),
    actions = require("../helpers/actions"),
    serverConfigs = require('../helpers/appium-servers');
  wd.addPromiseChainMethod('swipe', actions.swipe);


describe("About Spotify Test", function () {
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
    desired.appPackage= "com.example.spotify",
    desired.appActivity= "com.example.spotify.MainActivity" 

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
        .elementByXPath(appSelectors.AboutButton)
        .text().should.become('About');
  });
  it("should press on About button", async  function () {
    return driver
	    .sleep(10000)
        .elementByXPath(appSelectors.AboutButton).click()
        .sleep(3000)  
        //.elementById(appSelectors.)
        //.text().should.become('Terms and conditions');
  });


});