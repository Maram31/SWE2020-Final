
const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser(require("../Helpers/Driver").Driver).build();
var Selectors=require("../Helpers/AppSelectorsRealSpot");

describe('ArtistPageTest', function(){
      this.timeout('1500000000');
      var checkstring;
      
    it('should go to spotify.com/search  and get its title', async () => {
        await driver.get("https://open.spotify.com/search");
        checkstring = await driver.getTitle();
        await driver.sleep(5000);
        expect(checkstring).to.equal('Spotify - Search');//testing that i reached the req page
    })
    it('should search for a certain artist', async () => {
        await driver.findElement(By.xpath("//input[@data-testid='search-input'])")).sendKeys("tamer");
        await driver.sleep(5000);
        checkstring= await driver.findElement(By.xpath("//*[@id='searchPage']/div/div/section[1]/div/div[2]/div/div/div/div[2]/a/span")).getText();
        expect(checkstring).to.equal('Tamer Hosny');
        await driver.sleep(5000);
    }) 
    it('should follow the artist which appears from the search results', async () => {
        checkstring=await driver.findElement(By.xpath("//*[@id='searchPage']/div/div/section[1]/div/div[2]/div/div/div/div[2]/a/span"));
        await driver.sleep(5000);
        driver.actions.contextClick(checkstring).perform();
        await driver.findElement(By.xpath("//*[@id='main']/div/nav[6]/div[2]/span")).click();
        checkstring=await driver.findElement(By.xpath("//*[@id='main']/div/nav[6]/div[2]/span")).getText();
        expect(checkstring).to.equal('unfollow');
        await driver.sleep(5000);
    }) 
    it('should unfollow the artist which appears from the search results', async () => {
        await driver.findElement(By.xpath("//*[@id='main']/div/nav[6]/div[2]/span")).click();
        checkstring=await driver.findElement(By.xpath("//*[@id='searchPage']/div/div/section[1]/div/div[2]/div/div/div/div[2]/a/span"));
        await driver.sleep(5000);
        driver.actions.contextClick(checkstring).perform();
        checkstring=await driver.findElement(By.xpath("//*[@id='main']/div/nav[6]/div[2]/span")).getText();
        expect(checkstring).to.equal('follow');
        await driver.sleep(5000);
    }) 
    it('should follow the artist which appears from the search results and check the library', async () => {
        checkstring=await driver.findElement(By.xpath("//*[@id='searchPage']/div/div/section[1]/div/div[2]/div/div/div/div[2]/a/span"));
        await driver.sleep(5000);
        driver.actions.contextClick(checkstring).perform();
        await driver.findElement(By.xpath("//*[@id='main']/div/nav[6]/div[2]/span")).click();
        await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[2]/nav/ul/li[3]")).click();
        await driver.sleep(5000);
        await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[1]/header/div[3]/div/nav/ul/li[3]")).click()
        await driver.sleep(5000);
        checkstring=await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[1]/div/div/div/div[2]/a/span")).getText();
        expect(checkstring).to.equal('Tamer Hosny');
    }) 
    it('should unfollow the artist which appears from the search results and check the library', async () => {
        checkstring=await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[1]/div/div/div/div[2]/a/span"));
        await driver.sleep(5000);
        driver.actions.contextClick(checkstring).perform();
        await driver.findElement(By.xpath("//*[@id='main']/div/nav[6]/div[2]/span")).click();
        checkstring=await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/section/a")).getText();
        expect(checkstring).to.equal('FIND ARTISTS');
    }) 
    it('should search for a certain artist and open its page', async () => {
        await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[2]/nav/ul/li[2]/a")).click();
        await driver.findElement(By.xpath("//input[@data-testid='search-input'])")).sendKeys("tamer");
        await driver.sleep(5000);
        await driver.findElement(By.xpath("//*[@id='searchPage']/div/div/section[1]/div/div[2]/div/div/div/div[2]/a/span")).click();
        checkstring = await driver.getTitle();
        await driver.sleep(5000);
        expect(checkstring).to.equal('Spotify - Tamer Hosny');
    }) 
    it("should follow the artist from the artist's page ", async () => {
        await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[3]/div/button[2]")).click();
        checkstring =await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[3]/div/button[2]")).getText();
        expect(checkstring).to.equal('Following');
    }) 
    it("should unfollow the artist from the artist's page ", async () => {
        await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[3]/div/button[2]")).click();
        checkstring =await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[3]/div/button[2]")).getText();
        expect(checkstring).to.equal('Follow');
    }) 
    it("should follow the artist from the artist's page dropdown menu ", async () => {
        await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[3]/div/div/button")).click();
        await driver.findElement(By.xpath("//*[@id='main']/div/nav[6]/div[2]/span")).click();
        checkstring =await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[3]/div/button[2]")).getText();
        expect(checkstring).to.equal('Following');
    }) 
    it("should unfollow the artist from the artist's page dropdown menu", async () => {
        await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[3]/div/div/button")).click();
        await driver.findElement(By.xpath("//*[@id='main']/div/nav[6]/div[2]/span")).click();
        checkstring =await driver.findElement(By.xpath("//*[@id='main']/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[3]/div/button[2]")).getText();
        expect(checkstring).to.equal('Follow');
    }) 
    //follow/unfollow button
    //*[@id="main"]/div/nav[6]/div[2]/span
    //*[@id="main"]/div/nav[6]/div[2]
   

    //*[@id="main"]/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[3]/div/div/button
    //*[@id="main"]/div/div[2]/div[4]/div[1]/div/div[2]/section[1]/div[3]/div/div/button/div
    
    after(async () => await driver.quit());

});