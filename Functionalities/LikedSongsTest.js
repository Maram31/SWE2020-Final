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
                .sleep(30000)
        });

        it("should test like and unlike song", async function () {
            return driver
                .elementById(appSelectors.SearchButtonID).click()
                .sleep(10000)
                .elementById(appSelectors.SearchFieldID).click()
                .elementById("com.spotify.music:id/query").sendKeys("baby shark")
                .sleep(10000)
                .elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[1]").click()
                .sleep(10000)
                .elementByXPath("//*[contains(@text, 'SHUFFLE PLAY')]").click()
                .sleep(10000)
                .elementById(appSelectors.MuiscBarID).click()
                .sleep(3000)
                .elementById(appSelectors.LikeSongButtonID).click()
                .sleep(1000)
                .elementById(appSelectors.ToastID).text().should.become('Added to Liked Songs.')
                .sleep(2000)
                .elementById(appSelectors.LikeSongButtonID).click()
                .sleep(1000)
                .elementById(appSelectors.ToastID).text().should.become('Removed from Liked Songs.')
                .sleep(2000);
        });


        it("should test like and unlike song option", async function () {
            return driver
                .elementById(appSelectors.SearchButtonID).click()
                .sleep(10000)
                .elementById(appSelectors.SearchFieldID).click()
                .elementById("com.spotify.music:id/query").sendKeys("baby shark")
                .sleep(10000)
                .elementByXPath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[1]").click()
                .sleep(10000)
                .elementByXPath("//*[contains(@text, 'SHUFFLE PLAY')]").click()
                .sleep(10000)
                .elementById(appSelectors.MuiscBarID).click()
                .sleep(3000)
                .elementById(appSelectors.DropDownMenu).click()
                .sleep(1000)
                .elementById(appSelectors.LikeSongOption).click()
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Added to Liked Songs.')
                .sleep(2000)
                .elementById(appSelectors.DropDownMenu).click()
                .sleep(1000)
                .elementById(appSelectors.LikeSongOption).click()
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Removed from Liked Songs.')
                .sleep(2000);
        });

        it("should test play button in liked songs page", async function () {
            return driver
                .elementById(appSelectors.LibraryIconID).click()
                .sleep(5000)
                .elementByXPath(appSelectors.LikeSongIconXpath).click()
                .sleep(5000)
                .elementById(appSelectors.PlayButtonInLikeSongsID).click()
                .sleep(5000)
        });

        it("should test unlike button in liked songs page", async function () {
            return driver
                .elementById(appSelectors.LibraryIconID).click()
                .sleep(5000)
                .elementByXPath(appSelectors.LikeSongIconXpath).click()
                .sleep(5000)
                .elementByXPath(appSelectors.StopLikingSongButtonXpath).click()
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Removed from Liked Songs.')
                .sleep(2000);
        });

        it("should test add to playlist option in liked songs page", async function () {
            return driver
                .elementById(appSelectors.LibraryIconID).click()
                .sleep(5000)
                .elementByXPath(appSelectors.LikeSongIconXpath).click()
                .sleep(5000)
                .elementByXPath(appSelectors.MoreOptionsInLikeSongsXpath).click()
                .sleep(5000)
                .elementByXPath(appSelectors.AddToPlaylist2OptionXpath).click()
                .sleep(1000)
                .elementByXPath(appSelectors.PlaylistNameXpath).click()
                .sleep(1000)
                .sleep(500)
                .elementById(appSelectors.ToastID).text().should.become('Added to Heba.')
                .sleep(2000);
        });

    });