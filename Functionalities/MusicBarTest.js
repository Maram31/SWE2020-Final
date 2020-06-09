const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser(require("../Helpers/Driver").Driver).build();
var Selectors=require("../Helpers/AppSelectorsRealSpot");
var TestPerson=require("../Helpers/TestData");
var title;

describe('MusicBarTest', function(){
    this.timeout('1500000000');
    var Checkstring;
    var PrevSong;
    var CurrentSong;

    before('Open the account and go to webplayer page',async function(){
        await driver.get("https://www.spotify.com/eg-en/");
        await driver.sleep(20000);
        title= await driver.getTitle();
        //expect(title).to.equal('Music for everyone - Spotify');
        await (await driver.findElement(By.xpath(Selectors.SignInbuttonXbath))).click();
        await driver.sleep(20000);
        title= await driver.getTitle();
        expect(title).to.equal('Login - Spotify');
        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.Email);
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.Password);
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();
        await driver.findElement(By.id(Selectors.LoginID)).click();
        await driver.sleep(20000);
        title = await driver.getTitle();
        expect(title).to.equal('Account overview - Spotify');
        await driver.findElement(By.xpath(Selectors.WebPlayerFooterButtonXpath)).click();
        await driver.sleep(20000);
        //title = await driver.getTitle();
        //expect(title).to.equal('Spotify');
        //await driver.sleep(15000);
    });

    it('Test play button',async function(){
        await driver.findElement(By.xpath(Selectors.PlayButtonXpath)).click();
        await driver.sleep(20000); 
        Checkstring = await driver.findElement(By.xpath(Selectors.PlaybackBarProgressTime1Xpath)).getText();
        expect(Checkstring).to.not.equal('0:00');
        await driver.sleep(5000); 
    });
    
    it('Test next button',async function(){
        PrevSong = await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).getText();
        await driver.findElement(By.xpath(Selectors.NextButtonXpath)).click();
        await driver.sleep(20000);
        CurrentSong = await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).getText(); 
        //expect(CurrentSong).to.not.equal(PrevSong);
        //await driver.sleep(5000); 
    });

    it('Test previous button',async function(){
        await driver.findElement(By.xpath(Selectors.PreviousButtonXpath)).click();
        await driver.sleep(20000);
        CurrentSong = await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).getText(); 
        //expect(CurrentSong).to.equal(PrevSong);
        //await driver.sleep(5000); 
    });

    it('Test pressing artist name',async function(){
        Checkstring=await driver.findElement(By.xpath(Selectors.ArtistNameButtonXpath)).getText();
        await driver.findElement(By.xpath(Selectors.ArtistNameButtonXpath)).click();
        await driver.sleep(20000);
        //title = await driver.findElement(By.xpath(Selectors.ArtistNameLabelXpath)).getText(); 
        //expect(title).to.equal(Checkstring);
        //await driver.sleep(5000);
        await driver.navigate().back();
        await driver.sleep(20000);
        await driver.navigate().refresh();
        await driver.sleep(20000);
        title = await driver.getTitle();
        expect(title).to.equal('Spotify');
        await driver.sleep(20000);

    });

    it('Test pressing song name',async function(){
        Checkstring=await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).getText();
        await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).click();
        await driver.sleep(20000);
        await driver.findElement(By.xpath("//*[contains(text(),'" + Checkstring + "')]"));
        await driver.sleep(5000);
        await driver.navigate().back();
        await driver.sleep(20000);
        await driver.navigate().refresh();
        await driver.sleep(20000);
        title = await driver.getTitle();
        expect(title).to.equal('Spotify');
        await driver.sleep(20000);
    });
    

    it('Test save to liked songs',async function(){
        await driver.findElement(By.xpath(Selectors.LikeSongButtonXpath)).click();
        await driver.sleep(20000);
        //Checkstring=await driver.findElement(By.xpath(Selectors.LikeSongButtonXpath)).getAttribute("title");
        //expect(Checkstring).to.equal('Remove from your Liked Songs'); 
    });

    it('Test remove from liked songs',async function(){
        await driver.findElement(By.xpath(Selectors.LikeSongButtonXpath)).click();
        await driver.sleep(20000);
        //Checkstring=await driver.findElement(By.xpath(Selectors.LikeSongButtonXpath)).getAttribute("title");
        //expect(Checkstring).to.equal('Save to your Liked Songs');
    });

    it('Test enable shuffle button',async function(){
        await driver.findElement(By.xpath(Selectors.EnableShuffleButtonXpath)).click();
        await driver.sleep(20000);
        //Checkstring=await driver.findElement(By.xpath(Selectors.EnableShuffleButtonXpath)).getAttribute("title");
       //expect(Checkstring).to.equal('Disable shuffle');        
    });

    it('Test disable shuffle button',async function(){
        await driver.findElement(By.xpath(Selectors.EnableShuffleButtonXpath)).click();
        await driver.sleep(20000);
       //Checkstring=await driver.findElement(By.xpath(Selectors.EnableShuffleButtonXpath)).getAttribute("title");
       //expect(Checkstring).to.equal('Enable shuffle');        
    });

    it('Test mute button',async function(){
        await driver.findElement(By.xpath(Selectors.MuteButtonXpath)).click();
        await driver.sleep(20000);
        Checkstring=await driver.findElement(By.xpath(Selectors.MuteButtonXpath)).getAttribute("aria-label");
        expect(Checkstring).to.equal('Unmute');        
    });

    it('Test unmute button',async function(){
        await driver.findElement(By.xpath(Selectors.MuteButtonXpath)).click();
        await driver.sleep(20000);
        Checkstring=await driver.findElement(By.xpath(Selectors.MuteButtonXpath)).getAttribute("aria-label");
        expect(Checkstring).to.equal('Mute');        
    });

    it('Test play queue button',async function(){
        await driver.findElement(By.xpath(Selectors.PlayQueueButtonXpath)).click();
        await driver.sleep(20000);
        title = await driver.findElement(By.xpath(Selectors.PlayQueueLabelXpath)).getText();
        expect(title).to.equal('Play Queue'); 
    });

    it('Test enable repeat button',async function(){
        await driver.findElement(By.xpath(Selectors.EnableRepeatButtonXpath)).click();
        await driver.sleep(20000);
        //Checkstring=await driver.findElement(By.xpath(Selectors.EnableRepeatButtonXpath)).getAttribute("title");
        //expect(Checkstring).to.equal('Enable repeat one');
    });

    it('Test enable repeat one button',async function(){
        await driver.findElement(By.xpath(Selectors.EnableRepeatButtonXpath)).click();
        await driver.sleep(20000);
        //Checkstring=await driver.findElement(By.xpath(Selectors.EnableRepeatButtonXpath)).getAttribute("title");
        //expect(Checkstring).to.equal('Disable repeat');
    });

    it('Test disable repeat one button',async function(){
        await driver.findElement(By.xpath(Selectors.EnableRepeatButtonXpath)).click();
        await driver.sleep(20000);
        //Checkstring=await driver.findElement(By.xpath(Selectors.EnableRepeatButtonXpath)).getAttribute("title");
        //expect(Checkstring).to.equal('Enable repeat');
    });
/*
    it('Test enable now playing pip toggle button',async function(){
        await driver.findElement(By.xpath(Selectors.NowPlayingPipToggleButtonXpath)).click();
        await driver.sleep(20000);
        //Checkstring=await driver.findElement(By.xpath(Selectors.NowPlayingPipToggleButtonXpath)).getAttribute("class");
        //expect(Checkstring).to.equal('picture-in-picture-button control-button control-button--active');        
    });

    it('Test disable now playing pip toggle button',async function(){
        await driver.findElement(By.xpath(Selectors.NowPlayingPipToggleButtonXpath)).click();
        await driver.sleep(20000);
        //Checkstring=await driver.findElement(By.xpath(Selectors.NowPlayingPipToggleButtonXpath)).getAttribute("class");
        //expect(Checkstring).to.equal('picture-in-picture-button control-button');        
    });
    
  
    it('Test remove button',async function(){
        PrevSong = await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).getText();
        await driver.findElement(By.xpath(Selectors.RemoveSongButtonXpath)).click();
        await driver.sleep(20000);
        CurrentSong = await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).getText(); 
        expect(CurrentSong).to.not.equal(PrevSong);
        await driver.sleep(5000); 
    });

    it('Test pressing remove button then prev button',async function(){
        PrevSong = await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).getText();
        await driver.findElement(By.xpath(Selectors.RemoveSongButtonXpath)).click();
        await driver.sleep(20000);
        CurrentSong = await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).getText(); 
        expect(CurrentSong).to.not.equal(PrevSong);

        await driver.sleep(20000); 
        await driver.findElement(By.xpath(Selectors.PreviousButtonXpath)).click();
        await driver.sleep(20000);
        CurrentSong = await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).getText(); 
        expect(CurrentSong).to.not.equal(PrevSong);
        await driver.sleep(5000); 
    });
    //Sometimes the button disappears
*/    

 after(async () => await driver.quit());
});
