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

    it("should press on Premium button", async  function () {
      return driver
        .sleep(10000)
          .elementByXPath(appSelectors.PremiumButton).click()
          .sleep(3000)  
          .elementByXPath(appSelectors.PremiumPageTitle)
          .text().should.become('Take control of your music with Premium');
    });
    it("should press on Get Premium button", async  function () {
      return driver
        .sleep(10000)
          .elementByXPath(appSelectors.GetPremiumButton).click()
          .sleep(3000)  
          //.elementById(appSelectors.)
          //.text().should.become('Terms and conditions');
    });


});