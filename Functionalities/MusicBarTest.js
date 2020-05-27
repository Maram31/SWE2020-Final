const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser(require("../Helpers/Driver").Driver).build();
var Selectors=require("../Helpers/AppSelectorsRealSpot");
var TestPerson=require("../Helpers/TestData");
var title;

describe('MusicBarTest', function(){
    this.timeout('1500000000');
    var Checkstring;
    beforeEach('Open the account and go to webplayer page',async function(){
        await driver.get("https://www.spotify.com/eg-en/");
        await driver.sleep(5000);
        title= await driver.getTitle();
        expect(title).to.equal('Music for everyone - Spotify');
        await (await driver.findElement(By.xpath(Selectors.SignInbuttonXbath))).click();
        await driver.sleep(5000);
        title= await driver.getTitle();
        expect(title).to.equal('Login - Spotify');
        await driver.findElement(By.id(Selectors.EmailID)).sendKeys(TestPerson.Email);
        await driver.findElement(By.id(Selectors.PasswordID)).sendKeys(TestPerson.Password);
        await driver.findElement(By.css(Selectors.RememberMeCss)).click();
        await driver.findElement(By.id(Selectors.LoginID)).click();
        await driver.sleep(5000);
        var title = await driver.getTitle();
        expect(title).to.equal('Account overview - Spotify');
        await driver.findElement(By.xpath(Selectors.WebPlayerFooterButtonXpath)).click();
        await driver.sleep(5000);
        var title = await driver.getTitle();
        expect(title).to.equal('Spotify - Web Player: Music for everyone');
    });

    it('Open profile and go to Set Password page',async function(){
        await driver.sleep(5000);
    });
  

 after(async () => await driver.quit());
});
