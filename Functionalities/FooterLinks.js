"use strict";
const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser(require("../Helpers/Driver").Driver).build();
var Selectors=require("../Helpers/AppSelectorsRealSpot");
var TestPerson=require("../Helpers/TestData");
var title;

describe('Footer Links Test', function() {

    this.timeout('1500000000');
    var Checkstring;
    beforeEach('Open Spotify homepage',async function() {
        await driver.get("https://www.spotify.com/eg-en/");
        await driver.sleep(5000);
        
        title= await driver.getTitle();
        //expect(title).to.equal('Music for everyone - Spotify');
        await driver.getCurrentUrl().then(function(URL){expect(URL).equals("https://www.spotify.com/eg-en/")});

    });

    it('About Page',async function() {

        await driver.findElement(By.linkText(Selectors.AboutLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Contact - Spotify');
        await driver.sleep(1000);

    });

    it('Jobs Page',async function() {

        await driver.findElement(By.linkText(Selectors.JobsLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Join the band - Spotify Jobs');
        await driver.sleep(1000);

    });

    it('For the Record Page',async function() {

        await driver.findElement(By.linkText(Selectors.ForTheRecordLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Spotify — For the Record');
        await driver.sleep(1000);

    });

    it('For Artists Page',async function() {

        await driver.findElement(By.linkText(Selectors.ForArtistsLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Spotify for Artists');
        await driver.sleep(1000);

    });

    it('Developers Page',async function() {

        await driver.findElement(By.linkText(Selectors.DevelopersLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Home | Spotify for Developers');
        await driver.sleep(1000);

    });

    it('Brands Page',async function() {

        await driver.findElement(By.linkText(Selectors.BrandsLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Spotify For Brands');
        await driver.sleep(1000);

    });

    it('Investors Page',async function() {

        await driver.findElement(By.linkText(Selectors.InvestorsLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.contains('IR Home');
        await driver.sleep(1000);

    });

    it('Vendors Page',async function() {

        await driver.findElement(By.linkText(Selectors.VendorsLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Home - Spotify for Vendors');
        await driver.sleep(1000);

    });

    it('Legal Page',async function() {

        await driver.findElement(By.linkText(Selectors.LegalLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Terms and Conditions of Use');
        await driver.sleep(1000);

    });

    it('Privacy Center Page',async function() {

        await driver.findElement(By.linkText(Selectors.PrivacyCenterLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Privacy Center - Spotify');
        await driver.sleep(1000);

    });

    it('Privacy Policy Page',async function() {

        await driver.findElement(By.linkText(Selectors.PrivacyPolicyLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Privacy policy');
        await driver.sleep(1000);

    });

    it('Cookies Page',async function() {

        await driver.findElement(By.linkText(Selectors.CookiesLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('/legal/cookies-policy/');
        await driver.sleep(1000);

    });

    
    it('About Ads Page',async function() {

        await driver.findElement(By.linkText(Selectors.AboutAdsLinkText)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Privacy policy');
        await driver.sleep(1000);

    });

    
    it('Country Page',async function() {

        await driver.findElement(By.xpath(Selectors.CountryXpath)).click(); 
        await driver.sleep(1000);
        
        title= await driver.getTitle();
        expect(title).to.equal('Select your country - Spotify');
        await driver.sleep(1000);

    });
    
    after(async function() {
        await driver.quit();
    });

});
    
