"use strict";
const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser(require("../Helpers/Driver").Driver).build();
var Selectors=require("../Helpers/AppSelectorsRealSpot");
var TestPerson=require("../Helpers/TestData");
var title;

describe('PlaylistTest', function() {

    this.timeout('1500000000');
    var Checkstring;
    before('Login to account and go to account overview',async function() {

        await driver.get("https://www.spotify.com/eg-en/");
        await driver.sleep(2000);
        
        title= await driver.getTitle();
        //expect(title).to.equal('Music for everyone - Spotify');
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://www.spotify.com/eg-en/")});

        await driver.findElement(By.xpath(Selectors.SignInbuttonXbath)).click();
        await driver.sleep(3000);
        
        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.Email2);
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.Password2);
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();
        await driver.findElement(By.id(Selectors.LoginID)).click();
        await driver.sleep(3000);
        
        title = await driver.getTitle();
        expect(title).to.equal('Account overview - Spotify');
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://www.spotify.com/eg-en/account/overview/")});

    });

    

    it('Recover deleted playlist',async function() {
        
        await driver.findElement(By.xpath(Selectors.RecoverPlaylistXpath)).click(); 
        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.RestoreButtonXpath)).click(); 
        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.RestoredXpath)).click();  
        await driver.sleep(3000);

        await driver.get("https://open.spotify.com/");
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://open.spotify.com/")});

        await driver.findElement(By.linkText(Selectors.LibraryLinkText)).click(); 
        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.FirstCreatedPlaylistXpath)).click(); 
        await driver.sleep(3000);

    }); 
    
    after(async () => await driver.quit());

});
    
