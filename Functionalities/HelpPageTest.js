const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect} = require('chai');
const driver = new Builder().forBrowser(require("../Helpers/Driver").Driver).build();
var Selectors=require("../Helpers/AppSelectorsRealSpot");
describe('HelpPageTest', function(){
      this.timeout('1500000000');

      it('should go to spotify.com and get its title', async () => {
        await driver.get("https://www.spotify.com/eg-en/");
        const titleSpotHome = await driver.getTitle();
        await driver.sleep(5000);
        expect(titleSpotHome).to.equal('Music for everyone - Spotify');//testing that i reached the req page
    })
    it('should press on Help button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.HelpPageButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Support - Spotify');//testing that i reached the req page
        await driver.sleep(5000);
    }) 
    ///////////////Buttons Testing///////////////////
    
    it('should press on Cannot Log in Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.CannotLogInButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal("Can't log in - Spotify");//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Reset your password Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.ResetYourPassButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal("Reset your password - Spotify");//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Finding accounts Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.FindingAccountsButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal("Finding accounts - Spotify");//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Manage Payment Details Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.ManagePaymentDetailsButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal("Manage payment details - Spotify");//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Account Help Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.AccountHelpButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Account Help - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Payment Help Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.PaymentHelpButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Payment Help - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    

    it('should press on Subscription Options Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.SubscriptionOptionsButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Subscription Options - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Premium Family Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.PremiumFamilyButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Premium Family - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on PrivacyAndSecurity Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.PrivacyAndSecurityButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Privacy & Security - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    

    it('should press on Video tutorials Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.VideotutorialsButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Video Tutorials - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Getting started Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.GettingstartedButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Getting Started - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Playlists Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.PlaylistsButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Playlists - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Features Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.FeaturesButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Features - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    })
    it('should press on SystemAndsettings Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.SystemAndsettingsButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('System & Settings - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Trouble shooting Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.UsingSpotifyShowallButton)).click();
        await driver.findElement(By.xpath(Selectors.TroubleshootingButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Troubleshooting - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 



    it('should press on Speakers Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.SpeakersButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Speakers - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on TVs Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.TVsButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('TVs - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Cars Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.CarsButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Cars - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Gaming Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.GamingButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Gaming - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Smart Watches Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.SmartWatchesButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Smart Watches - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Smart Displays Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.ListenEverywhereShowallButton)).click();
        await driver.findElement(By.xpath(Selectors.SmartDisplaysButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Amazon smart displays - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Voice Assistants Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.ListenEverywhereShowallButton)).click();
        await driver.findElement(By.xpath(Selectors.VoiceAssistantsButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Voice Assistants - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Search Readmore Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.SearchReadmoreButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Search - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Playlist Readmore Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.PlaylistReadmoreButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Playlists - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Listen Offline Readmore Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.ListenOfflineReadmoreButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Download music and podcasts - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Radio Readmore Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.RadioReadmoreButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Spotify Radio - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Discover Weekly Readmore Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.DiscoverWeeklyReadmoreButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Made For You - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on SpotifyOnChromecast Readmore Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.SpotifyOnChromecastReadmoreButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Spotify on TV - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on Share Readmore Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.ShareReadmoreButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Share music and podcasts - Spotify');//testing that i reached the req page
        await driver.findElement(By.xpath(Selectors.BacktoHelpButton)).click();////getting back to the Help page
        await driver.sleep(5000);
    }) 
    it('should press on DataSlide Button1 and find the correct slide', async () => {
        await driver.findElement(By.xpath(Selectors.DataSlideButton1)).click();
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.WatchVideoButton1))//finding a specific element on the slide
        await driver.sleep(5000);
    }) 
    it('should press on Watch Video Button1 and see the video pop up', async () => {
        await driver.findElement(By.xpath(Selectors.DataSlideButton1)).click();
        await driver.findElement(By.xpath(Selectors.WatchVideoButton1)).click();
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.Border)).click();//clicking anywhere for the pop up video to disapear
    }) 
    it('should press on DataSlide Button2 and find the correct slide', async () => {
        await driver.findElement(By.xpath(Selectors.DataSlideButton2)).click();
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.WatchVideoButton2))//finding a specific element on the slide
        await driver.sleep(5000);
    }) 
    it('should press on Watch Video Button2 and see the video pop up', async () => {
        await driver.findElement(By.xpath(Selectors.DataSlideButton2)).click();
        await driver.findElement(By.xpath(Selectors.WatchVideoButton2)).click();
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.Border)).click();//clicking anywhere for the pop up video to disapear
    }) 
    it('should press on DataSlide Button3 and find the correct slide', async () => {
        await driver.findElement(By.xpath(Selectors.DataSlideButton3)).click();
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.WatchVideoButton3))//finding a specific element on the slide
        await driver.sleep(5000);
    }) 
    it('should press on Watch Video Button3 and see the video pop up', async () => {
        await driver.findElement(By.xpath(Selectors.DataSlideButton3)).click();
        await driver.findElement(By.xpath(Selectors.WatchVideoButton3)).click();
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.Border)).click();//clicking anywhere for the pop up video to disapear
    }) 
    it('should press on DataSlide Button4 and find the correct slide', async () => {
        await driver.findElement(By.xpath(Selectors.DataSlideButton4)).click();
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.WatchVideoButton4))//finding a specific element on the slide
        await driver.sleep(5000);
    }) 
    it('should press on Watch Video Button4 and see the video pop up', async () => {
        await driver.findElement(By.xpath(Selectors.DataSlideButton4)).click();
        await driver.findElement(By.xpath(Selectors.WatchVideoButton4)).click();
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.Border)).click();//clicking anywhere for the pop up video to disapear
    }) 
    it('should press on DataSlide Button5 and find the correct slide', async () => {
        await driver.findElement(By.xpath(Selectors.DataSlideButton5)).click();
        await driver.sleep(5000);
        await driver.findElement(By.xpath(Selectors.WatchVideoButton5))//finding a specific element on the slide
        await driver.sleep(5000);
    }) 
    it('should press on Watch Video Button5 and see the video pop up', async () => {
        await driver.findElement(By.xpath(Selectors.DataSlideButton5)).click();
        await driver.findElement(By.xpath(Selectors.WatchVideoButton5)).click();
        await driver.sleep(8000);
        await driver.findElement(By.xpath(Selectors.Border)).click();//clicking anywhere for the pop up video to disapear
    })

    it('should press on Find Answers Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.FindAnswersButton)).click();
        await driver.sleep(5000);
        //var wind=driver.getWindowHandle();
        //wait driver.switchTo().window("https://community.spotify.com/t5/Spotify-Answers/tkb-p/Spotify-Answers?_ga=2.27400948.97180223.1589808787-679065576.1584204532")
        //const titleSpotReg = await driver.getTitle();
        //expect(wind).to.equal('Spotify Answers - The Spotify Community');//testing that i reached the req page
        //see that a new website is opened
       //////////////////////////////////
    }) 
    it('should press on Get Spotify Button and get the new page title', async () => {
        await driver.findElement(By.xpath(Selectors.GetSpotifyButton)).click();
        await driver.sleep(5000);
        const titleSpotReg = await driver.getTitle();
        expect(titleSpotReg).to.equal('Sign up - Spotify');//testing that i reached the req page
        
    }) 

    
    
    after(async () => await driver.quit());

});