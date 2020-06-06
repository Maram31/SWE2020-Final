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

    beforeEach('Open the account and go to webplayer page',async function(){
        await driver.get("https://www.spotify.com/eg-en/");
        await driver.sleep(10000);
        title= await driver.getTitle();
        //expect(title).to.equal('Music for everyone - Spotify');
        await (await driver.findElement(By.xpath(Selectors.SignInbuttonXbath))).click();
        await driver.sleep(10000);
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
        title = await driver.getTitle();
       // expect(title).to.equal('Spotify');
        //await driver.sleep(10000);
        await driver.findElement(By.xpath(Selectors.LikedSongsButtonXpath)).click();
        await driver.sleep(20000); 
        Checkstring = await driver.findElement(By.xpath(Selectors.LikedSongsLabelXpath)).getText();
        expect(Checkstring).to.equal('Liked Songs');
    });

    it('Search for a song then play it',async function(){
        await driver.findElement(By.xpath(Selectors.SearchButtonXpath)).click();
        await driver.sleep(20000);
        await driver.findElement(By.xpath(Selectors.SearchBarXpath)).sendKeys('baby shark');
        await driver.sleep(20000);
        await driver.findElement(By.xpath('//*[@id="main"]/div/div[2]/div[4]/div[1]/div/div[2]/div/div/div/section[2]/div/div[2]/div[1]/div/div/div[3]/a/span')).click();
        await driver.sleep(20000);
        await driver.findElement(By.xpath(Selectors.LikedSongsButtonXpath)).click();
        await driver.sleep(20000); 
        Checkstring = await driver.findElement(By.xpath(Selectors.LikedSongsLabelXpath)).getText();
        expect(Checkstring).to.equal('Liked Songs');
    });
    
    it('Test save to liked songs',async function(){
        await driver.findElement(By.xpath(Selectors.LikeSongButtonXpath)).click();
        await driver.sleep(20000);
        Checkstring=await driver.findElement(By.xpath(Selectors.LikeSongButtonXpath)).getAttribute("title");
        expect(Checkstring).to.equal('Remove from your Liked Songs');
        Checkstring=await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).getText();
        await driver.sleep(10000);
        CurrentSong=await driver.findElement(By.xpath('//*[@id="main"]/div/div[3]/div[4]/div[1]/div/div[2]/section[1]/div[4]/section/ol/div[1]/div/li/div[2]/div/div[1]')).getText();
        expect(Checkstring).to.equal(CurrentSong);
    });

    it('Test remove from liked songs',async function(){
        await driver.findElement(By.xpath(Selectors.LikeSongButtonXpath)).click();
        await driver.sleep(20000);
        Checkstring=await driver.findElement(By.xpath(Selectors.LikeSongButtonXpath)).getAttribute("title");
        expect(Checkstring).to.equal('Save to your Liked Songs');
        Checkstring=await driver.findElement(By.xpath(Selectors.SongNameButtonXpath)).getText();
        await driver.sleep(10000);
        CurrentSong=await driver.findElement(By.xpath('//*[@id="main"]/div/div[3]/div[4]/div[1]/div/div[2]/section[1]/div[4]/section/ol/div[1]/div/li/div[2]/div/div[1]')).getText();
        expect(Checkstring).to.not.equal(CurrentSong);
    });

    it('Test play button',async function(){
        await driver.findElement(By.xpath(Selectors.PlayButtonInLikedSongsXpath)).click();
        await driver.sleep(20000);
        Checkstring = await driver.findElement(By.xpath(Selectors.PlaybackBarProgressTime1Xpath)).getText();
        expect(Checkstring).to.not.equal('0:00');
        await driver.sleep(5000); 
    });

    it('Search for a song then play it',async function(){
        await driver.findElement(By.xpath(Selectors.SearchButtonXpath)).click();
        await driver.sleep(20000);
        await driver.findElement(By.xpath(Selectors.SearchBarXpath)).sendKeys('baby shark');
        await driver.sleep(20000);
        await driver.findElement(By.xpath('//*[@id="main"]/div/div[3]/div[4]/div[1]/div/div[2]/div/div/div/section[2]/div/div[2]/div[1]/div/div/div[2]/button')).click();
        await driver.sleep(20000);
        await driver.findElement(By.xpath(Selectors.LikedSongsButtonXpath)).click();
        await driver.sleep(20000); 
        Checkstring = await driver.findElement(By.xpath(Selectors.LikedSongsLabelXpath)).getText();
        expect(Checkstring).to.equal('Liked Songs');
        await driver.findElement(By.xpath(Selectors.LikeSongButtonXpath)).click();
        await driver.sleep(20000);
        Checkstring=await driver.findElement(By.xpath(Selectors.LikeSongButtonXpath)).getAttribute("title");
        expect(Checkstring).to.equal('Remove from your Liked Songs');
    });

    it('Test unlike option',async function(){
        await driver.findElement(By.xpath(Selectors.MoreOptionsButtonXpath)).click();
        await driver.sleep(10000);
        await driver.findElement(By.xpath(Selectors.LikedSongsOptionXpath)).click();
        await driver.sleep(20000);
    });

    afterEach('LogOut',async function(){
        await driver.findElement(By.xpath('//*[@id="main"]/div/div[2]/div[1]/header/div[4]/button')).click();
        await driver.sleep(10000);
        await driver.findElement(By.xpath('//*[@id="main"]/div/div[2]/div[1]/header/div[4]/ul/li[4]/button')).click();
        await driver.sleep(20000);
    });
  
 after(async () => await driver.quit());
});
