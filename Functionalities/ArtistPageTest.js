"use strict";
require("../helpers/setup");
 
var wd = require("wd"),
    _ = require('underscore'),
    actions = require("../helpers/actions"),
    serverConfigs = require('../helpers/appium-servers');
    wd.addPromiseChainMethod('swipe', actions.swipe);
describe("Artist Page Test", function () {
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
      .sleep(10000)
      .elementById(appSelectors.SpotifyLogoHomeScreentitleId)
      .text().should.become('Good afternoon');
    });

  it("should Search on a certain artist and open it's page", async  function () {
    return driver
	    .sleep(5000)
        .elementById(appSelectors.SearchButtonID).click()
        .sleep(3000)  
        .elementById(appSelectors.Searchfield).click()
        .elementById(appSelectors.Searchfieldtext).sendKeys("Tamer Hosny")
        .elementById(appSelectors.SearchfirstResult).click()
        .sleep(3000)
        .elementById(appSelectors.FollowandUnfollowbutton)
        .text().should.become('FOLLOW OFF');
  });
  it("should follow the first result artist", async  function () {
    return driver
	    .sleep(5000)
        .elementById(appSelectors.FollowandUnfollowbutton).click()
        .sleep(3000)
        .elementById(appSelectors.FollowandUnfollowbutton)
        .text().should.become('FOLLOWING ON');
  });
 
  it("should check the library with the new followed artist", async  function () {
    return driver
	    .sleep(5000)
        .elementById(appSelectors.LibraryIconID).click()
        .sleep(3000)  
        .elementByXPath(appSelectors.ArtistInLibraryButtonXpath).click()
        .sleep(3000)
        .elementByXPath(appSelectors.FirstArtistInLibrarytextXpath)
        .text().should.become('Tamer Hosny')
        .elementByXPath(appSelectors.FirstArtistInLibraryXpath).click()
  });
  it("should unfollow the same artist choosen before", async  function () {
    return driver
        .sleep(5000)
        .elementById(appSelectors.FollowandUnfollowbutton).click()
        .sleep(3000)
        .elementById(appSelectors.FollowandUnfollowbutton)
        .text().should.become('FOLLOW OFF');
  });
  it("should check the library that the unfollowed artist removed successfully", async  function () {
    return driver
	    .sleep(5000)
        .elementById(appSelectors.LibraryIconID).click()
        .sleep(3000)  
        .elementByXPath(appSelectors.ArtistInLibraryButtonXpath).click()
        .sleep(3000)
        .elementById(appSelectors.AddArtistButton)
        .text().should.become('ADD ARTISTS')
  });
  it("should Search on a certain artist and open it's page", async  function () {
    return driver
	    .sleep(5000)
        .elementById(appSelectors.SearchButtonID).click()
        .sleep(3000)  
        .elementById(appSelectors.Searchfield).click()
        .elementById(appSelectors.Searchfieldtext).sendKeys("Tamer Hosny")
        .elementById(appSelectors.SearchfirstResult).click()
        .sleep(3000)
        .elementById(appSelectors.FollowandUnfollowbutton)
        .text().should.become('FOLLOW OFF');
  });
  it("should follow the first result artist from the dropdown menu", async  function () {
    return driver
	    .sleep(5000)
        .elementById(appSelectors.ArtistDropDownMenu).click()
        .elementByXPath(appSelectors.FollowandUnfollowInDropdownMenuXpath).click()
        .sleep(3000)
        .elementById(appSelectors.FollowandUnfollowbutton)
        .text().should.become('FOLLOWING ON');
  });
 
  it("should check the library with the new followed artist", async  function () {
    return driver
	    .sleep(5000)
        .elementById(appSelectors.LibraryIconID).click()
        .sleep(3000)  
        .elementByXPath(appSelectors.ArtistInLibraryButtonXpath).click()
        .sleep(3000)
        .elementByXPath(appSelectors.FirstArtistInLibrarytextXpath)
        .text().should.become('Tamer Hosny')
        .elementByXPath(appSelectors.FirstArtistInLibraryXpath).click()
  });
  it("should unfollow the same artist choosen before from the dropdown menu", async  function () {
    return driver
        .sleep(5000)
        .elementById(appSelectors.ArtistDropDownMenu).click()
        .elementByXPath(appSelectors.FollowandUnfollowInDropdownMenuXpath).click()
        .sleep(3000)
        .elementById(appSelectors.FollowandUnfollowbutton)
        .text().should.become('FOLLOW OFF');
  });
  it("should check the library that the unfollowed artist removed successfully", async  function () {
    return driver
	    .sleep(5000)
        .elementById(appSelectors.LibraryIconID).click()
        .sleep(3000)  
        .elementByXPath(appSelectors.ArtistInLibraryButtonXpath).click()
        .sleep(3000)
        .elementById(appSelectors.AddArtistButton)
        .text().should.become('ADD ARTISTS')
  });
  it("should add an artist from the library and check if it is added successfully", async  function () {
    return driver
	    .sleep(5000)
        .elementById(appSelectors.AddArtistButton).click()
        .sleep(3000)  
        .elementByXPath(appSelectors.FirstResultFromAddArtistXpath).click()
        .sleep(3000)
        .elementById(appSelectors.DoneButtonInAddArtist).click()
        .sleep(10000) 
        .elementByXPath(appSelectors.FirstArtistInLibrarytextXpath)
        .text().should.become('Pinkfong')
  });

});  