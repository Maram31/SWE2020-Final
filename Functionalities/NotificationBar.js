"use strict";
require("../helpers/setup");

var wd = require("wd"),
  _ = require('underscore'),
  actions = require("../helpers/actions"),
  serverConfigs = require('../helpers/appium-servers');
wd.addPromiseChainMethod('swipe', actions.swipe);
describe("Notification Bar Test",
  function () {
    this.timeout(300000);
    var driver;
    var allPassed = true;
    var appSelectors = require("../helpers/AppSelectorsAndroid");
    before(async function () {
      var serverConfig = serverConfigs.local;
      driver = wd.promiseChainRemote(serverConfig);
      require("../helpers/logging").configure(driver);
      var desired = _.clone(require("../helpers/caps").androidVirtualMM);
      desired.automationName = "UiAutomator2",
        desired.appPackage = "com.spotify.music",
        desired.appActivity = "com.spotify.music.MainActivity"

      return driver
        .init(desired)
        .setImplicitWaitTimeout(10000);
    });
    after(async function () {
      return driver
        .quit()
        .finally(function () {
        });
    });

    afterEach(async function () {
      allPassed = allPassed && this.currentTest.state === 'passed';
    });

    beforeEach("should Login successfully", async function () {
      return driver
        .resetApp()
        .sleep(1000)
        .elementByXPath(appSelectors.LogInButtonID).click()
        .sleep(1000)
        .elementById(appSelectors.EmailLogInID).sendKeys("maram311999@hotmail.com")
        .elementById(appSelectors.PasswordLogInID).sendKeys("MaramHosni31")
        .elementByXPath(appSelectors.LogInButtonID).click()
        .sleep(1000)

    });



    it("search for song then check if it appears in notification bar", async function () {
      return driver
      //.sleep(1000)
      .elementById(appSelectors.SearchButtonID).click()
      .sleep(1000)
      .elementById(appSelectors.SearchFieldID).click()
      .elementById(appSelectors.SearchBarID).click()

      .elementById(appSelectors.SearchBarID).sendKeys("Baby Shark")
      .sleep(1000)
      .elementByXPath(appSelectors.FirstSearchResultXpath).click()
      .sleep(1000)
      
      .elementByXPath(appSelectors.ShufflePlayButtonXpath).click()
      .sleep(1000)

      .openNotifications()
      .sleep(1000)
      .elementByXPath(appSelectors.PauseButtonNotificationXpath).click()
      .sleep(1000)

      .elementByXPath(appSelectors.PlayButtonNotificationXpath).click()
      .sleep(1000)
      .back();
      
    });
/*
    it("open random song then check if it appears in notification bar", async function () {
        return driver
        //.sleep(1000)
        .elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/androidx.recyclerview.widget.RecyclerView[2]/android.view.ViewGroup[3]/android.widget.TextView").click()
        .sleep(1000)
  
        .elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.Button").click()
        .sleep(1000)  

        .openNotifications()
        .sleep(1000)
        .elementByXPath(appSelectors.PauseButtonNotificationXpath).click()
        .sleep(1000)
  
        .elementByXPath(appSelectors.PlayButtonNotificationXpath).click()
        .sleep(1000)
  
      });
      */
  });