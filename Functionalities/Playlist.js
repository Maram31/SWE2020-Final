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
    before('Open the account and go to webplayer page',async function() {
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

    it('Create playlist then add song from random playlist then delete it',async function() {

        await driver.findElement(By.xpath(Selectors.CreateNewPlaylistXpath)).click(); 

        driver.sleep(3000);
        
        await driver.findElement(By.xpath(Selectors.CreateNewPlaylistTextInputXpath)).sendKeys('Dance'); 

        driver.sleep(3000);
        
        await driver.findElement(By.xpath(Selectors.ConfirmCreateNewPlaylistXpath)).click(); 

        driver.sleep(3000);

        await driver.get("https://open.spotify.com/");
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://open.spotify.com/")});

        await driver.findElement(By.xpath(Selectors.HomeFirstPlaylistXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.PlaylistFirstSongXpath)).click(); 
        await driver.findElement(By.xpath(Selectors.PlaylistFirstSongXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.AddToPlaylistOptionXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.AddToFirstPlaylistXpath)).click(); 

        await driver.sleep(3000);      
      
        await driver.findElement(By.linkText(Selectors.LibraryLinkText)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.FirstCreatedPlaylistXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.FirstSongXpath)).click(); 
        await driver.findElement(By.xpath(Selectors.FirstSongXpath)).click();  
        
        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.RemoveFromPlaylistOptionXpath)).click(); 

        await driver.sleep(3000);     


        await driver.findElement(By.xpath(Selectors.CreatedPlaylistDetailsXpath)).click(); 
        await driver.findElement(By.xpath(Selectors.CreatedPlaylistDetailsXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.CreatedPlaylistDeleteXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.PlaylistDeleteButtonXpath)).click(); 

        await driver.sleep(3000);  

    });

    it('Select random playlist then add song to another playlist',async function() {

        await driver.get("https://open.spotify.com/");
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://open.spotify.com/")});

        await driver.findElement(By.xpath(Selectors.HomeFirstPlaylistXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.FirstSongXpath)).click(); 

        await driver.findElement(By.xpath(Selectors.FirstSongXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.AddToPlaylistOptionXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.AddToFirstPlaylistXpath)).click(); 

        await driver.sleep(3000);      

    }); 
    

    it('Select random playlist then add song to new created playlist',async function() {

        await driver.get("https://open.spotify.com/");
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://open.spotify.com/")});
        
        await driver.findElement(By.xpath(Selectors.HomeSixthPlaylistXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.FirstSongXpath)).click(); 

        await driver.findElement(By.xpath(Selectors.FirstSongXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.AddToPlaylistOptionXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.NewPlaylistXpath)).click(); 

        await driver.sleep(3000);    

        await driver.findElement(By.xpath(Selectors.NewPlaylistInputXpath)).sendKeys('Country'); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.NewPlaylistConfirmXpath)).click(); 

        await driver.sleep(3000);    

    }); 


    it('Search for song and add to playlist',async function() {

        await driver.get("https://open.spotify.com/");
        await driver.sleep(3000);
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://open.spotify.com/")});
        
        await driver.findElement(By.xpath(Selectors.SearchIconXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.SearchBarXpath)).sendKeys('Baby Shark'); 

        await driver.sleep(5000)

        await driver.findElement(By.xpath(Selectors.SongSearchResultXpath)).click(); 

        await driver.sleep(3000)        

        await driver.findElement(By.xpath(Selectors.FirstSongXpath)).click(); 
        await driver.findElement(By.xpath(Selectors.FirstSongXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.AddToPlaylistOptionXpath)).click(); 

        await driver.sleep(3000);    
        
        await driver.findElement(By.xpath(Selectors.AddToFirstPlaylistXpath)).click(); 

        await driver.sleep(3000); 

    });   

    after(async function() {
        await driver.findElement(By.xpath(Selectors.UserIconXpath)).click(); 

        await driver.sleep(3000);

        await driver.findElement(By.xpath(Selectors.LogoutXpath)).click(); 

        await driver.sleep(3000);

        await driver.quit();

    });

});
    
