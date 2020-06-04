"use strict";
require("../helpers/setup");
 
var wd = require("wd"),
    _ = require('underscore'),
    actions = require("../helpers/actions"),
    serverConfigs = require('../helpers/appium-servers');
    wd.addPromiseChainMethod('swipe', actions.swipe);
describe("Choosing Music Quality Test", function () {
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
    desired.appActivity= "com.spotify.music.MainActivity" 

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
    it("should Login successfully", async  function () {
      return driver
      .sleep(10000)
      .elementByXPath(appSelectors.LogInButtonID).click()
      .sleep(2000)
      .elementById(appSelectors.EmailLogInID).sendKeys("hebanassif19@gmail.com")
      .elementById(appSelectors.PasswordLogInID).sendKeys("Heba1234")
      .elementByXPath(appSelectors.LogInButtonID).click()
      .sleep(20000)
      .elementById(appSelectors.SpotifyLogoHomeScreentitleId)
      .text().should.become('Good afternoon');
    });

  it("should press on Setting button", async  function () {
    return driver
	    .sleep(5000)
        .elementByXPath(appSelectors.SettingButton).click()
        .sleep(3000)  
        .elementById(appSelectors.SettingLabelID)
        .text().should.become('Settings');
  });
  it("should scroll down the page", async function () {
    return driver
        .sleep(5000)
          .then(function (els){
              return driver.swipe({
                startX: '32', startY: '1162',
                endX: '32', endY: '478',
                duration: 159
            });
          })  
  });
  it("should choose Low Music Quality and check if the Streaming quality successfully changed", async  function () {
    return driver
      .sleep(5000)
      .elementByClassName(appSelectors.MusicQualityTypeButtonClass).click()
      .sleep(3000) 
      .elementByXPath(appSelectors.LowQualityButton).click()
      .sleep(3000)
      .elementByXPath(appSelectors.MusicQualityTypeTextButton)
      .text().should.become('Low');
  });
  it("should press on Automatic Music Quality button and check if the Streaming quality successfully changed", async  function () {
    return driver
      .sleep(5000)
      .elementByClassName(appSelectors.MusicQualityTypeButtonClass).click()
      .sleep(3000) 
      .elementByXPath(appSelectors.AutomaticQualityButton).click()
      .sleep(3000)
      .elementByXPath(appSelectors.MusicQualityTypeTextButton)
      .text().should.become('Automatic');
  });
  it("should press on Normal Music Quality button and check if the Streaming quality successfully changed", async  function () {
    return driver
      .sleep(5000)
      .elementByClassName(appSelectors.MusicQualityTypeButtonClass).click()
      .sleep(3000) 
      .elementByXPath(appSelectors.NormalQualityButton).click()
      .sleep(3000)
      .elementByXPath(appSelectors.MusicQualityTypeTextButton)
      .text().should.become('Normal');
  });
  
  it("should press on High Music Quality button and check if the Streaming quality successfully changed", async  function () {
    return driver
      .sleep(5000)
      .elementByClassName(appSelectors.MusicQualityTypeButtonClass).click()
      .sleep(3000) 
      .elementByXPath(appSelectors.HighQualityButton).click()
      .sleep(3000)
      .elementByXPath(appSelectors.MusicQualityTypeTextButton)
      .text().should.become('High');
  });
  it("should press on Very High Music Quality button and check if the Streaming quality successfully changed", async  function () {
    return driver
      .sleep(5000)
      .elementByClassName(appSelectors.MusicQualityTypeButtonClass).click()
      .sleep(3000) 
      .elementByXPath(appSelectors.VeryHighQualityButton).click()
      .sleep(3000)
      .elementByXPath(appSelectors.MusicQualityTypeTextButton)
      .text().should.become('Very high');
  });

});  
