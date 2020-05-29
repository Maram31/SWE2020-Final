"use strict";
require("../helpers/setup");
 
var wd = require("wd"),
    _ = require('underscore'),
    actions = require("../helpers/actions"),
    serverConfigs = require('../helpers/appium-servers');
describe("SearchPage Test", function () {
    this.timeout(300000);
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

  it("should press on Premium button", async  function () {
    return driver
      .sleep(10000)
      .elementById(appSelectors.PremiumButtonID).click()
      .sleep(3000)  
      .elementById(appSelectors.PremiumPageTitleID)
      .text().should.become('Try Premium free for 3 months');
  });
  it("should press on Get Premium button", async  function () {
    return driver
      .sleep(10000)
      .elementByXPath(appSelectors.GetPremiumButton).click()
      .sleep(3000)  
      .elementById(appSelectors.GetPremiumCloseID).click()
  });
  it("should press on Get Premium Individual button", async  function () {
    return driver
      .sleep(10000)
      .elementByXPath(appSelectors.GetPremiumIndividualButton).click()
      .sleep(3000)  
      .elementById(appSelectors.GetPremiumCloseID).click()
  });
  it("should press on Get Premium Family button", async  function () {
    return driver
      .sleep(10000)
      .elementByXPath(appSelectors.GetPremiumFamilyButton).click()
      .sleep(3000)  
      .elementById(appSelectors.GetPremiumCloseID).click()
  });
});