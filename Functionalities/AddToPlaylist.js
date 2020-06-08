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

    it("search for song and add it to a new playlist", async function () {
        return driver
        .elementById(appSelectors.SearchButtonID).click()
        .sleep(1000)
        .elementById(appSelectors.SearchFieldID).click()
        .elementById(appSelectors.SearchBarID).click()
  
        .elementById(appSelectors.SearchBarID).sendKeys("Baby Shark")
        .sleep(1000)

        .elementByXPath(appSelectors.FirstSearchResultXpath).click()
        .sleep(1000)
        
        .elementByXPath(appSelectors.AddToPlaylistButtonXpath).click()
        .sleep(1000) 

        .elementById(appSelectors.CreateNewPlaylistID).click()
        .sleep(1000)
       
        .elementById(appSelectors.PlaylistInputID).sendKeys('Country')
        .sleep(1000)
       
        .elementById(appSelectors.ConfirmCreatePlaylistID).click()
        .sleep(1000)
  
        .elementById(appSelectors.ToastID)
        .text().should.become('Added to Country.');
      });

      it("search for song and add it again to already existed playlist", async function () {
        return driver
        .elementById(appSelectors.SearchButtonID).click()
        .sleep(1000)
        .elementById(appSelectors.SearchFieldID).click()
        .elementById(appSelectors.SearchBarID).click()
  
        .elementById(appSelectors.SearchBarID).sendKeys("Baby Shark")
        .sleep(1000)
  
        .elementByXPath(appSelectors.FirstSearchResultXpath).click()
        .sleep(1000)
  
        .elementByXPath(appSelectors.AddToPlaylistButtonXpath).click()
        .sleep(1000)
       
        .elementByXPath(appSelectors.FirstPlaylistButtonXpath).click()
        .sleep(1000)
       
        .elementById(appSelectors.AddAnywayButtonID).click()
        .sleep(1000)
  
        .elementById(appSelectors.ToastID)
        .text().should.become('Added to Country.');
  
      });

      it("Remove song from playlist", async function () {
        return driver
        .elementById(appSelectors.LibraryIconID).click()
        .sleep(1000)

        .elementByXPath(appSelectors.FirstPlaylistXpath).click()        
        .sleep(1000)
        
        .elementById(appSelectors.EditPlaylistID).click()
        .sleep(1000)

        .elementByXPath(appSelectors.SongOptionXpath).click()        
        .sleep(1000)

        .elementByXPath(appSelectors.RemoveSongFromPlaylistXpath).click()        
        
        .elementById(appSelectors.ToastID)
        .text().should.become('Removed from Country.')
        .sleep(1000);
      });     
      
      it("Delete playlist", async function () {
        return driver
        .elementById(appSelectors.LibraryIconID).click()
        .sleep(1000)

        .elementByXPath(appSelectors.FirstPlaylistXpath).click()        
        .sleep(1000)
        
        .elementById(appSelectors.OptionsID).click()
        .sleep(1000)

        .elementByXPath(appSelectors.DeletePlaylistXpath).click()        
        .sleep(1000)

        .elementById(appSelectors.ConfirmDeletePlaylistID).click()        
        .sleep(1000)
        
      });


      it("Create new playlist and add songs to it", async function () {
        return driver
        .elementById(appSelectors.SearchButtonID).click()
        .sleep(1000)
        .elementById(appSelectors.SearchFieldID).click()
        .elementById(appSelectors.SearchBarID).click()
  
        .elementById(appSelectors.SearchBarID).sendKeys("Baby Shark")
        .sleep(1000)

        .elementByXPath(appSelectors.FirstSearchResultXpath).click()
        .sleep(1000)
        
        .elementByXPath(appSelectors.AddToPlaylistButtonXpath).click()
        .sleep(1000) 

        .elementById(appSelectors.CreateNewPlaylistID).click()
        .sleep(1000)
       
        .elementById(appSelectors.PlaylistInputID).sendKeys('Country')
        .sleep(1000)
       
        .elementById(appSelectors.ConfirmCreatePlaylistID).click()
        .sleep(1000)
  
        .elementById(appSelectors.ToastID)
        .text().should.become('Added to Country.');
      });
      
  });