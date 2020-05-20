const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser(require("../Driver").Driver).build();
var Selectors=require("../AppSelectorsRealSpot");
var title;
//var Msgs=require("../AppErrorMsgsRealSpot");
describe('PremiumPageTest', function(){
    this.timeout('1500000000');
    var Checkstring;
    it('should go to spotify.com and get its title',async function() {
        await driver.get("https://www.spotify.com/eg-en/");
        title= await driver.getTitle();
        await driver.sleep(5000);
        expect(title).to.equal('Music for everyone - Spotify');//testing that i reached the req page
    })
    it('should press on Premium button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.Premiumbutton)).click();
        await driver.sleep(5000);
        title = await driver.getTitle();
        expect(title).to.equal('Spotify');//testing that i reached the req page
    }) 

 ////////////////////////////////////////////////////////
    /*it('should press on Get 3 month free button which is at the blue background and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.Get3monthFreebutton)).click();
        await driver.sleep(5000);
        title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');//testing that i reached the req page
        await driver.get("https://www.spotify.com/eg-en/premium/?checkout=false");
    
    }) 
    it('should press on View Plans and get the new page title',async function() {
        
        await driver.findElement(By.xpath(Selectors.ViewPlansbutton)).click();
        await driver.sleep(5000);
        title = await driver.getCurrentUrl();
        expect(title).to.equal('https://www.spotify.com/eg-en/premium/?checkout=false#PLANS');//testing that i reached the req page
     
    }) 
    it('should press on Get Started in Individual Premium button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.GetStartedIndividualbutton)).click();
        await driver.sleep(5000);
        title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');//testing that i reached the req page
        await driver.get("https://www.spotify.com/eg-en/premium/?checkout=false#PLANS");
    }) */
    it('should press on Get Started in Family Premium button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.GetStartedFamilybutton)).click();
        await driver.sleep(5000);
        title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');//testing that i reached the req page
    }) 



   

 after(async () => await driver.quit());
});
