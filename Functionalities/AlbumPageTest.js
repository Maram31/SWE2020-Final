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
            var desired = _.clone(require("../helpers/caps").android);
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
                .sleep(3000)
                .sleep(10000)
                .elementByXPath(appSelectors.LogInButtonID).click()
                .sleep(2000)
                .elementById(appSelectors.EmailLogInID).sendKeys("hebanassif19@gmail.com")
                .elementById(appSelectors.PasswordLogInID).sendKeys("Heba1234")
                .elementByXPath(appSelectors.LogInButtonID).click()
                .sleep(30000);

        });

        it("should test play button", async function () {
            return driver
                .elementById(appSelectors.SearchButtonID).click()
                .sleep(10000)
                .elementById(appSelectors.SearchFieldID).click()
                .elementById("com.spotify.music:id/query").sendKeys("thriller")
                .sleep(10000)
                .elementByXPath("//*[contains(@text, 'Album • Michael Jackson')]").click()
                .sleep(10000)
                .elementByXPath(appSelectors.PlayAlbumXpath).click()
                .sleep(10000);
        });

        it("should like and unlike album button", async function () {
            return driver
                .elementById(appSelectors.SearchButtonID).click()
                .sleep(10000)
                .elementById(appSelectors.SearchFieldID).click()
                .elementById("com.spotify.music:id/query").sendKeys("thriller")
                .sleep(10000)
                .elementByXPath("//*[contains(@text, 'Album • Michael Jackson')]").click()
                .sleep(10000)
                .elementByXPath('//android.widget.ImageButton[@content-desc="Like"]').click()
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Added to Your Library.')
                .sleep(2000)
                .elementByXPath('//android.widget.ImageButton[@content-desc="Unlike"]').click()
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Removed from Your Library.')
                .sleep(2000);
        });

        it("should like and unlike album option", async function () {
            return driver
                .elementById(appSelectors.SearchButtonID).click()
                .sleep(10000)
                .elementById(appSelectors.SearchFieldID).click()
                .elementById("com.spotify.music:id/query").sendKeys("thriller")
                .sleep(10000)
                .elementByXPath("//*[contains(@text, 'Album • Michael Jackson')]").click()
                .sleep(10000)
                .elementById("com.spotify.music:id/glue_overflow").click()
                .sleep(10000)
                .elementByXPath("//*[contains(@text, 'Like')]").click()
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Added to Your Library.')
                .sleep(2000)
                .elementById("com.spotify.music:id/glue_overflow").click()
                .sleep(10000)
                .elementByXPath("//*[contains(@text, 'Liked')]").click()
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Removed from Your Library.')
                .sleep(2000);
        });

        it("should like all songs in album option", async function () {
            return driver
                .elementById(appSelectors.SearchButtonID).click()
                .sleep(10000)
                .elementById(appSelectors.SearchFieldID).click()
                .elementById("com.spotify.music:id/query").sendKeys("thriller")
                .sleep(10000)
                .elementByXPath("//*[contains(@text, 'Album • Michael Jackson')]").click()
                .sleep(10000)
                .elementById("com.spotify.music:id/glue_overflow").click()
                .sleep(10000)
                .elementByXPath("//*[contains(@text, 'Like all songs')]").click()
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Added to Liked Songs.')
                .sleep(2000)
                .elementById("com.spotify.music:id/glue_overflow").click()
                .sleep(10000)
                .elementByXPath("//*[contains(@text, 'Liked all songs')]").click()
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Removed from Liked Songs.')
                .sleep(2000);
        });

        it("should like album then check it in liked album page", async function () {
            return driver
                .elementById(appSelectors.SearchButtonID).click()
                .sleep(10000)
                .elementById(appSelectors.SearchFieldID).click()
                .sleep(10000)
                .elementById("com.spotify.music:id/query").sendKeys("the dark side of the moon")
                .sleep(10000)
                .elementByXPath("//*[contains(@text, 'Album • Pink Floyd')]").click()
                .sleep(10000)
                .elementByXPath('//android.widget.ImageButton[@content-desc="Like"]').click()
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Added to Your Library.')
                .sleep(2000)
                .elementById(appSelectors.LibraryIconID).click()
                .sleep(5000)
                .elementByXPath("//*[contains(@text, 'Albums')]").click()
                .sleep(5000)
                .elementByXPath("//*[contains(@text, 'The Dark Side of the Moon')]").click()
                .sleep(5000)
                .elementByXPath('//android.widget.ImageButton[@content-desc="Unlike"]').click()
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Removed from Your Library.')
                .sleep(2000);
        });
    });