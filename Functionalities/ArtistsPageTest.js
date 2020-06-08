
const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser(require("../Helpers/Driver").Driver).build();
var Selectors=require("../Helpers/AppSelectorsRealSpot");

describe('ArtistPageTest', function(){
      this.timeout('1500000000');
      var checkstring;
      
    it('should go to spotify.com  and login successfully', async () => {
        await driver.get("https://open.spotify.com");
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.LoginInbuttonXbath)).click();
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.EmailboxXpath)).sendKeys("hebanassif19@gmail.com");
        await driver.findElement(By.xpath(Selectors.PassWordboxXpath)).sendKeys("Heba1234");
        await driver.findElement(By.xpath(Selectors.LoggingInButtonXpath)).click();
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.SearchButton)).click();
        checkstring = await driver.getTitle();
        expect(checkstring).to.equal('Spotify – Search');//testing that i reached the req page
    })
    it('should search for a certain artist', async () => {
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys("Tamer Hosny");
        await driver.sleep(5000);
        checkstring= await driver.findElement(By.xpath(Selectors.FirstSearchResultText)).getText();
        expect(checkstring).to.equal('Tamer Hosny');
        await driver.sleep(5000);
    }) 
    
    it('should search for a certain artist and open its page', async () => {
        await driver.findElement(By.xpath(Selectors.FirstSearchResult)).click();
        await driver.sleep(8000);
        checkstring = await driver.getTitle();
        expect(checkstring).to.equal('Spotify – Tamer Hosny');
    }) 
    it("should follow the artist from the artist's page ", async () => {
        await driver.findElement(By.xpath(Selectors.FollowAndUnFollowButton)).click();
        await driver.sleep(5000);
        checkstring =await driver.findElement(By.xpath(Selectors.FollowAndUnFollowButton)).getText();
        expect(checkstring).to.equal('FOLLOWING');
    }) 
    it("should check the library with the new followed artists ", async () => {
        await driver.findElement(By.xpath(Selectors.LibraryButton)).click();
        await driver.findElement(By.xpath(Selectors.ArtistsInLibraryButton)).click();
        await driver.sleep(8000);
        checkstring =await driver.findElement(By.xpath(Selectors.FirstArtistTextInLibraryButton)).getText();
        expect(checkstring).to.equal('Tamer Hosny');
    })
    
    it("should unfollow the artist from the artist's page ", async () => {
        await driver.findElement(By.xpath(Selectors.FirstArtistInLibraryButton)).click();
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.FollowAndUnFollowButton)).click();
        await driver.sleep(5000);
        checkstring =await driver.findElement(By.xpath(Selectors.FollowAndUnFollowButton)).getText();
        expect(checkstring).to.equal('FOLLOW');
    }) 
    it("should check the library with the unfollowed artists removed successfuly", async () => {
        await driver.findElement(By.xpath(Selectors.LibraryButton)).click();
        await driver.findElement(By.xpath(Selectors.ArtistsInLibraryButton)).click();
        await driver.sleep(8000);
        checkstring =await driver.findElement(By.xpath(Selectors.FindArtistsButton)).getText();
        expect(checkstring).to.equal('FIND ARTISTS');
    })
    it('should search for a certain artist', async () => {
        await driver.findElement(By.xpath(Selectors.SearchButton)).click();
        await driver.sleep(3000);
        await driver.findElement(By.xpath(Selectors.SearchBar)).sendKeys("Tamer Hosny");
        await driver.sleep(5000);
        checkstring= await driver.findElement(By.xpath(Selectors.FirstSearchResultText)).getText();
        expect(checkstring).to.equal('Tamer Hosny');
        await driver.sleep(5000);
    }) 
    
    it('should search for a certain artist and open its page', async () => {
        await driver.findElement(By.xpath(Selectors.FirstSearchResult)).click();
        await driver.sleep(8000);
        checkstring = await driver.getTitle();
        expect(checkstring).to.equal('Spotify – Tamer Hosny');
    }) 
    it("should follow the artist from the artist's page dropdown menu ", async () => {
        await driver.findElement(By.xpath(Selectors.ArtistDropDownMenuButton)).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath(Selectors.ArtistDropDownMenuSecondOptionButton)).click();
        await driver.sleep(5000);
        checkstring =await driver.findElement(By.xpath(Selectors.FollowAndUnFollowButton)).getText();
        expect(checkstring).to.equal('FOLLOWING');
    }) 
    it("should check the library with the new followed artists ", async () => {
        await driver.findElement(By.xpath(Selectors.LibraryButton)).click();
        await driver.findElement(By.xpath(Selectors.ArtistsInLibraryButton)).click();
        await driver.sleep(5000);
        checkstring =await driver.findElement(By.xpath(Selectors.FirstArtistTextInLibraryButton)).getText();
        expect(checkstring).to.equal('Tamer Hosny');
    })
    it("should unfollow the artist from the artist's page dropdown menu", async () => {
        await driver.findElement(By.xpath(Selectors.FirstArtistInLibraryButton)).click();
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.ArtistDropDownMenuButton)).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath(Selectors.ArtistDropDownMenuSecondOptionButton)).click();
        await driver.sleep(5000);
        checkstring =await driver.findElement(By.xpath(Selectors.FollowAndUnFollowButton)).getText();
        expect(checkstring).to.equal('FOLLOW');
    }) 
    it("should check the library with the unfollowed artists removed successfuly", async () => {
        await driver.findElement(By.xpath(Selectors.LibraryButton)).click();
        await driver.findElement(By.xpath(Selectors.ArtistsInLibraryButton)).click();
        await driver.sleep(5000);
        checkstring =await driver.findElement(By.xpath(Selectors.FindArtistsButton)).getText();
        expect(checkstring).to.equal('FIND ARTISTS');
    })
    it("should press on add Artist button In the library and check if it is working", async () => {
        await driver.findElement(By.xpath(Selectors.FindArtistsButton)).click();
        await driver.sleep(5000);
        checkstring = await driver.getTitle();
        expect(checkstring).to.equal('Spotify – Search');//testing that i reached the req page
    })
    
    after(async () => await driver.quit());

});