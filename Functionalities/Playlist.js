"use strict";

const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser(require("../Helpers/Driver").Driver).build();
var Selectors=require("../Helpers/AppSelectorsRealSpot");
var TestPerson=require("../Helpers/TestData");
var title;

describe('PlaylistTest', function(){
    this.timeout('1500000000');
    var Checkstring;
    beforeEach('Open the account and go to webplayer page',async function(){
        await driver.get("https://www.spotify.com/eg-en/");
        await driver.sleep(5000);
        
        title= await driver.getTitle();
        //expect(title).to.equal('Music for everyone - Spotify');
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://www.spotify.com/eg-en/")});

        await driver.findElement(By.xpath(Selectors.SignInbuttonXbath)).click();
        await driver.sleep(5000);
        
        title= await driver.getTitle();
        //expect(title).to.equal('Login - Spotify');
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://accounts.spotify.com/en/login?continue=https:%2F%2Fwww.spotify.com%2Feg-en%2Faccount%2Foverview%2F")});

        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.Email2);
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.Password2);
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();
        await driver.findElement(By.id(Selectors.LoginID)).click();
        await driver.sleep(5000);
        
        title = await driver.getTitle();
        expect(title).to.equal('Account overview - Spotify');
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://www.spotify.com/eg-en/account/overview/")});

        await driver.findElement(By.xpath(Selectors.WebPlayerFooterButtonXpath)).click();
        await driver.sleep(5000);
        
        title = await driver.getTitle();
        //expect(title).to.equal('Spotify');
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://open.spotify.com/")});

    });


    it('Create Playlist',async function(){
        //await driver.findElement(By.xpath(Selectors.CreateNewPlaylistXpath)).click(); 

        await driver.sleep(3000);
        
        //await driver.findElement(By.linkText(Selectors.LibraryLinkText)).click(); 

        //await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.FirstPlaylistXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.SecondSongXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.SecondSongAddToPlaylistXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.AddToSecondPlaylistXpath)).click(); 

        await driver.sleep(3000);

        //await driver.findElement(By.xpath(Selectors.InputNewPlaylistNameXpath)).sendKeys('Pop');

        //await driver.sleep(1000);

        //await driver.findElement(By.xpath(Selectors.ConfirmCreateNewPlaylistXpath)).click(); 

        //await driver.sleep(3000);      

        
    });

   

 after(async () => await driver.quit());
});
