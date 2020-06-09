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
        .elementByXPath(appSelectors.LogInButtonID).click()
        .sleep(1000)
        .elementById(appSelectors.EmailLogInID).sendKeys("maram311999@hotmail.com")
        .elementById(appSelectors.PasswordLogInID).sendKeys("MaramHosni31")
        .elementByXPath(appSelectors.LogInButtonID).click()
        .sleep(1000)

    });



    it("search for song then check if it appears in notification bar", async function () {
      return driver
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
      .elementById(appSelectors.PlayButtonNotificationId).click()
      .sleep(4000)

      .elementById(appSelectors.NextButtonNotificationId).click()
      .sleep(4000)

      .elementById(appSelectors.HideButtonNotificationId).click()
      .sleep(4000)
      .back();
      
    });

  });