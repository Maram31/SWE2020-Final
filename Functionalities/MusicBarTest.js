"use strict";
require("../helpers/setup");
 
var wd = require("wd"),
    _ = require('underscore'),
    actions = require("../helpers/actions"),
    serverConfigs = require('../helpers/appium-servers');
    wd.addPromiseChainMethod('swipe', actions.swipe);
describe("Music Bar Teasr",
 function () {
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
        .elementByXPath("//*[contains(@text, 'LOG IN')]").click()
          .sleep(2000)
          .elementById("com.spotify.music:id/username_text").sendKeys("hebanassif19@gmail.com")
          .elementById("com.spotify.music:id/password_text").sendKeys("Heba1234")
          .elementByXPath("//*[contains(@text, 'LOG IN')]").click()
          .sleep(10000)

    });
    /*
  it("should search for a song then play it", async  function () {
    return driver
      .sleep(20000)
      .elementById(appSelectors.SearchButtonID).click()
      .sleep(3000)  
      .elementById(appSelectors.SearchFieldID).sendKeys("baby shark")
      .sleep(3000)
      .elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[1]").click()
      .sleep(3000)
  });*/
  
});