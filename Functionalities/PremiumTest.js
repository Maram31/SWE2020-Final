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

    it("try log in with correct email and password then logout", function () {
        return driver
          .sleep(3000)
          .elementById('com.example.spotify:id/login')
          .click()
          .sleep(10000)
          .elementById('com.example.spotify:id/usernameLoginEdittext')
          .sendKeys("ayaelsackaan.1999@gmail.com")
          .sleep(3000)
          .elementById('com.example.spotify:id/passwordLoginEdittext')
          .sendKeys("222")
          .sleep(3000)
          .elementById('com.example.spotify:id/loginButton')
          .click()
          .sleep(3000)
          .elementById('com.example.spotify:id/loginButton')
          .click()
          .sleep(5000)
    
          //.elementByXPath('/hierarchy/android.widget.Toast')
          //.text().should.become('YAY')
    });
    it("should press on search button", async  function () {
        return driver
          .sleep(10000)
            .elementById(appSelectors.SearchButton).click()
            .sleep(10000)  
            .elementById(appSelectors.SearchText)
            .text().should.become('Search');
    });
    it("should press on search icon to start searching", async  function () {
        return driver
          .sleep(10000)
            .elementById(appSelectors.TOPSearchiCON).click()
            .sleep(3000)
            .elementById(appSelectors.SearchText)
            .text().should.become('Search');
    });
    ///special char search $ ^ * ()+-= shows results doesn't contain these chars
    it("should press on search Bar and search for SPECIAL CHARS such as $()*+", async  function () {
        return driver
          .sleep(10000)
            .elementById(appSelectors.SearchBar).sendKeys("$()*+")
            .sleep(10000)  
            .elementById(appSelectors.FirstSearchResultText)
            .text().should.become('No Results Found');
    });
    it("should press on search Bar and search for infinty input", async  function () {
        return driver
          .sleep(10000)
            .elementById(appSelectors.SearchBar).sendKeys("gfgggggggggggggggggggggggggggggggggggggggsssssssssssssssssssssssshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjsxxxxxxxxxxx")
            .sleep(10000)  
            .elementById(appSelectors.FirstSearchResultText)
            .text().should.become('No Results Found');
    });
    
    it("should press on search Bar and search for more than one letter", async  function () {
        return driver
          .sleep(10000)
            .elementById(appSelectors.SearchBar).sendKeys("Cas")
            .sleep(10000)  
            .elementById(appSelectors.FirstSearchResultText)
            .text().should.become('Castle On The Hill');
    });
    //entering 3 then 4 no change but 5 then 4 it shows a different results for 4 ///each time different results for the same input
    //no "no results found" msg



});