const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser(require("../Helpers/Driver").Driver).build();
var Selectors=require("../Helpers/AppSelectorsRealSpot");
var title;

describe('PremiumPageTest', function(){
    this.timeout('1500000000');
    var Checkstring;
    it('should go to spotify.com and get its title',async function() {
        await driver.get("https://www.spotify.com/eg-en/");
        title= await driver.getTitle();
        await driver.sleep(8000);
        expect(title).to.equal('Listening is everything - Spotify');//testing that i reached the req page
    })
    it('should press on Premium button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.Premiumbutton)).click();
        await driver.sleep(5000);
        title = await driver.getTitle();
        expect(title).to.equal('Spotify');//testing that i reached the req page
    }) 

 ////////////////////////////////////////////////////////
 ///before logging in
    it('should press on Get 3 month free button which is at the blue background and get the new page title',async function() {
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
    }) 
    it('should press on Get Started in Family Premium button and get the new page title',async function() {
    
        await driver.findElement(By.xpath(Selectors.GetStartedFamilybutton)).click();
        await driver.sleep(5000);
        title = await driver.getTitle();
        expect(title).to.equal('Login - Spotify');//testing that i reached the req page
    }) 
    ///////////////////////////
    ///After logging in
    it('should Login successfuly',async function() {
        await driver.get("https://www.spotify.com/eg-en/premium/?checkout=false");
        await driver.findElement(By.xpath(Selectors.Loginbutton)).click();
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.EmailboxXpath)).sendKeys("hebanassif19@gmail.com");
        await driver.findElement(By.xpath(Selectors.PassWordboxXpath)).sendKeys("Heba1234");
        await driver.findElement(By.xpath(Selectors.LoggingInButtonXpath)).click();
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.PremiumbuttonafterLoggingIn)).click();
        await driver.sleep(8000);
        title = await driver.getTitle();
        expect(title).to.equal('Spotify');//testing that i reached the req page
    }) 
    it('should press on Get 3 month free button which is at the blue background and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.Get3monthFreebutton)).click();
        await driver.sleep(5000);
        title=await  driver.findElement(By.xpath("/html/body/div[3]/div/div/div/div/div/div/div[2]/div/h4/p")).getText();
        expect(title).to.equal('49.99 EGP / month after trial');//testing that i reached the req page
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
        title=await  driver.findElement(By.xpath("/html/body/div[3]/div/div/div/div/div/div/div[2]/div/h4/p")).getText();
        expect(title).to.equal('49.99 EGP / month after trial');//testing that i reached the req page
        await driver.get("https://www.spotify.com/eg-en/premium/?checkout=false#PLANS");
    }) 
    it('should press on Get Started in Family Premium button and get the new page title',async function() {
        await driver.findElement(By.xpath(Selectors.GetStartedFamilybutton)).click();
        await driver.sleep(5000);
        title=await  driver.findElement(By.xpath("/html/body/div[3]/div/div/div/div/div/div/div[2]/div/h4/p")).getText();
        expect(title).to.equal('79.99 EGP / month after trial');//testing that i reached the req page
    }) 
   

 after(async () => await driver.quit());
});
