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

    before('Open the account and go to an album page',async function(){
        await driver.get("https://www.spotify.com/eg-en/");
        await driver.sleep(10000);
        title= await driver.getTitle();
        expect(title).to.equal('Music for everyone - Spotify');
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
        expect(title).to.equal('Spotify');
        await driver.sleep(10000);
        await driver.findElement(By.xpath(Selectors.SearchButtonXpath)).click();
        await driver.sleep(20000);
        await driver.findElement(By.xpath(Selectors.SearchBarXpath)).sendKeys('Thriller');
        await driver.sleep(20000);
        await driver.findElement(By.xpath('//*[@id="main"]/div/div[3]/div[4]/div[1]/div/div[2]/div/div/div/section[2]/div/div[2]/div[1]/div/div/div[3]/a')).click();
        await driver.sleep(20000);
        Checkstring= await driver.findElement(By.xpath(Selectors.AlbumLabelXpath)).getText();
        expect(Checkstring).to.equal('ALBUM');
    });

    it('Test play button',async function(){
        await driver.findElement(By.xpath(Selectors.PlayButtonInAlpumPageXpath)).click();
        await driver.sleep(20000);
        Checkstring = await driver.findElement(By.xpath(Selectors.PlayButtonInAlpumPageXpath)).getText();
        expect(Checkstring).to.not.equal('0:00');
        await driver.sleep(5000); 
    });

    it('Test like album',async function(){
        await driver.findElement(By.xpath(Selectors.LikeButtonInAlpumPageXpath)).click();
        await driver.sleep(20000);
        Checkstring=await driver.findElement(By.xpath(Selectors.LikeButtonInAlpumPageXpath)).getAttribute("title");
        expect(Checkstring).to.equal('Remove from Your Library');
    });

    it('Test unlike albbum',async function(){
        await driver.findElement(By.xpath(Selectors.LikeButtonInAlpumPageXpath)).click();
        await driver.sleep(20000);
        Checkstring=await driver.findElement(By.xpath(Selectors.LikeButtonInAlpumPageXpath)).getAttribute("title");
        expect(Checkstring).to.equal('Save to Your Library');
    });

    it('Test save album to library',async function(){
        await driver.findElement(By.xpath(Selectors.MoreOptionsInAlpumPageXpath)).click();
        await driver.findElement(By.xpath(Selectors.SaveToLibOptionXpath)).click();
        await driver.sleep(20000);
        Checkstring=await driver.findElement(By.xpath(Selectors.LikeButtonInAlpumPageXpath)).getAttribute("title");
        expect(Checkstring).to.equal('Remove from Your Library');
    });

    it('Test remove album from library',async function(){
        await driver.findElement(By.xpath(Selectors.MoreOptionsInAlpumPageXpath)).click();
        await driver.findElement(By.xpath(Selectors.SaveToLibOptionXpath)).click();
        await driver.sleep(20000);
        Checkstring=await driver.findElement(By.xpath(Selectors.LikeButtonInAlpumPageXpath)).getAttribute("title");
        expect(Checkstring).to.equal('Save to Your Library');
    });
    
 after(async () => await driver.quit());
});
