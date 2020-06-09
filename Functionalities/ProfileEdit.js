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

    before("should Login successfully", async function () {
      return driver
        .elementByXPath(appSelectors.LogInButtonID).click()
        .sleep(500)
        .elementById(appSelectors.EmailLogInID).sendKeys("maram311999@hotmail.com")
        .elementById(appSelectors.PasswordLogInID).sendKeys("MaramHosni31")
        .elementByXPath(appSelectors.LogInButtonID).click()
        .sleep(500)

        .elementByXPath(appSelectors.SettingButton).click()
        .sleep(500)
  
        .elementById(appSelectors.GoToProfileID).click()
        .sleep(500)

        .elementById(appSelectors.EditProfileID).click()
        .sleep(500)  
    });

    
    it("Change Display Name", async function () {
        return driver
        .elementById(appSelectors.DisplayNameID).clear()
        .sleep(500)
        
        .elementById(appSelectors.DisplayNameID).sendKeys('MaramH')
        .sleep(500) 

        .elementByXPath(appSelectors.SaveChangesXpath).click()
        .sleep(500)

        .elementById(appSelectors.TitleNameID)
        .text().should.become('MaramH');        
      });


    it("Choose Photo", async function () {
      return driver
      .elementById(appSelectors.EditProfileID).click()
      .sleep(500)  

      .elementById(appSelectors.ChangePhotoID).click()
      .sleep(500)

      .elementByXPath(appSelectors.ChoosePhotoXpath).click()
      .sleep(1000)

      .elementById(appSelectors.AllowPermissionID).click()
      .sleep(1000)

      .elementByXPath(appSelectors.PhotosFolderXpath).click()
      .sleep(500)

      .elementByXPath(appSelectors.CameraFolderXpath).click()
      .sleep(500)
      
      .elementByXPath(appSelectors.FirstPhotoXpath).click()
      .sleep(500)

      .elementById(appSelectors.UsePhotoID).click()
      .sleep(500)

      .elementByXPath(appSelectors.SaveChangesXpath).click()
      .sleep(1000)     
    });

    it("Remove Photo", async function () {
        return driver
        .resetApp()
        .sleep(1000)
        .elementByXPath(appSelectors.LogInButtonID).click()
        .sleep(500)
        .elementById(appSelectors.EmailLogInID).sendKeys("maram311999@hotmail.com")
        .elementById(appSelectors.PasswordLogInID).sendKeys("MaramHosni31")
        .elementByXPath(appSelectors.LogInButtonID).click()
        .sleep(500)

        .elementByXPath(appSelectors.SettingButton).click()
        .sleep(500)
  
        .elementById(appSelectors.GoToProfileID).click()
        .sleep(500)

        .elementById(appSelectors.EditProfileID).click()
        .sleep(500)  

        .elementById(appSelectors.ChangePhotoID).click()
        .sleep(500)
  
        .elementByXPath(appSelectors.RemovePhotoXpath).click()
        .sleep(500)      

        .elementByXPath(appSelectors.SaveChangesXpath).click()
        .sleep(1500)  
      });

  
  });