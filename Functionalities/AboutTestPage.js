"use strict";
require("../helpers/setup");
 
var wd = require("wd"),
    _ = require('underscore'),
    actions = require("../helpers/actions"),
    serverConfigs = require('../helpers/appium-servers');
  wd.addPromiseChainMethod('swipe', actions.swipe);


describe("SignUp Test", function () {
  this.timeout(30000000);
  var driver;
  var allPassed = true;
  var appSelectors=require("../helpers/AppSelectorsAndroid");
  before( async function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("../helpers/logging").configure(driver);
    
    
    
    var desired =_.clone(require("../helpers/caps").android);
    desired.automationName= "UiAutomator2",
    desired.appPackage= "com.example.spotify",
    desired.appActivity= "com.example.spotify.MainActivity" 

    return driver
      .init(desired)
      .setImplicitWaitTimeout(10000);
  });

  after( async function () {
    return driver
      .quit()
      .finally(function () {
      });
  });

  afterEach( async function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  it("should press on sign up button", async  function () {
    return driver
	  .sleep(10000)
    .elementById(appSelectors.SignupButton).click()
    .click()
    .sleep(3000)  
    .elementById(appSelectors.SignUpUserNameTextID)
    .text().should.become('Username');
  });
  
   ///////Displayname test cases testing
    /////test 1: very long max 30 length
  it("should test the username length", async  function () {
      return driver
      .sleep(5000)
        .elementById(appSelectors.SignUpUserNameID)
        .sendKeys('ffffffffffffffffsdddddddddddddddddssssssssssssssssssssssscfffffffgggghhh')
        .elementById(appSelectors.SignUpUserNameID)
        .text().should.become('ffffffffffffffffsddddddddddddddddd');
        ///check that it only accepts till the last d letter
       
  });
  /////test 2: only Special chars
  it("should test if the username is only Special chars", async  function () {
    return driver
    .sleep(5000)
      .elementById(appSelectors.SignUpPasswordID)///putting successful case for password to test the username
      .sendKeys('ayasameh99')
      .elementById(appSelectors.SignUpUserNameID)
      .clear()
      .elementById(appSelectors.SignUpUserNameID)
      .sendKeys('@#$%^')
      .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage) 
      .click()
      .sleep(3000)
      .elementById(appSelectors.SignUpUserNameTextID) ///to check that we are on the same page
      .text().should.become('Username');
  });
  /////test 3: only numbers
  it("should test if the username is only numbers", async function () {
    return driver
    .sleep(5000)
      .back().sleep(5000)
      .elementById(appSelectors.SignUpUserNameID)
      .clear()
      .elementById(appSelectors.SignUpUserNameID)
      .sendKeys('2345')
      .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage) 
      .click()
      .sleep(3000)
      .elementById(appSelectors.SignUpUserNameTextID) ///to check that we are on the same page
      .text().should.become('Username');
  });
  /////test 4: username is very short
  it("should test if the username is very short", async function () {
    return driver
    .sleep(5000)
      .back().sleep(5000)
      .elementById(appSelectors.SignUpUserNameID)
      .clear()
      .elementById(appSelectors.SignUpUserNameID)
      .sendKeys('1')
      .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage) 
      .click()
      .sleep(3000)
      .elementById(appSelectors.SignUpUserNameTextID) ///to check that we are on the same page
      .text().should.become('Username');
  });
  /////test 5: username is a decimal number
  it("should test if the username is a decimal number", async function () {
    return driver
    .sleep(5000)
      .back().sleep(5000)
      .elementById(appSelectors.SignUpUserNameID)
      .clear()
      .elementById(appSelectors.SignUpUserNameID)
      .sendKeys('2.345')
      .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage) 
      .click()
      .sleep(3000)
      .elementById(appSelectors.SignUpUserNameTextID) ///to check that we are on the same page
      .text().should.become('Username');
  });
    /////test 6: Not entered
  it("should test if the username is not entered", async function () {
      return driver
      .sleep(5000)
        .back().sleep(5000)
        .elementById(appSelectors.SignUpUserNameID)
        .clear()
        .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage) 
        .click()
        .sleep(3000)
        .elementById(appSelectors.SignUpUserNameTextID) ///to check that we are on the same page
        .text().should.become('Username');
  });
   ///////Password test cases testing
    /////test 1: Very Short password
  it("should test if the password is very Short", async function () {
      return driver
      .sleep(5000)
        .elementById(appSelectors.SignUpUserNameID)///putting successful case for username to test the password
        .sendKeys('ayasameh99')
        .elementById(appSelectors.SignUpPasswordID)
        .clear()
        .elementById(appSelectors.SignUpPasswordID)
        .sendKeys('f')
        .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage) 
        .click()  
        .sleep(3000)
        .elementById(appSelectors.SignUpUserNameTextID) ///to check that we are on the same page
        .text().should.become('Username'); 
  });
    /////test 2: Very Long
  it("should test if the password is very Long", async function () {
      return driver
      .sleep(5000)
        .back().sleep(5000)
        .elementById(appSelectors.SignUpPasswordID)
        .clear()
        .elementById(appSelectors.SignUpPasswordID)
        .sendKeys('ffffffffffffffffsdddddddddddddddddssssssssssssssssssssssscfffffffgggghhh')
        .elementById(appSelectors.SignUpPasswordID)
        .text().should.become('ffffffffffffffffsddddddddddddddddd');
        ///check that it only accepts till the last d letter  
  });
    /////test 3: Only numbers password
  it("should test if the password is Only numbers", async function () {
      return driver
      .sleep(5000)
        .elementById(appSelectors.SignUpPasswordID)
        .clear()
        .elementById(appSelectors.SignUpPasswordID)
        .sendKeys('123')
        .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage) 
        .click()  
        .sleep(3000)
        .elementById(appSelectors.SignUpUserNameTextID) ///to check that we are on the same page
        .text().should.become('Username'); 
  });
  /////test 4: only special chars
  it("should test if the password is only special chars", async function () {
    return driver
    .sleep(5000)
      .back().sleep(5000)
      .elementById(appSelectors.SignUpPasswordID)
      .clear()
      .elementById(appSelectors.SignUpPasswordID)
      .sendKeys('!@#$%^')
      .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage) 
      .click()  
      .sleep(3000)
      .elementById(appSelectors.SignUpUserNameTextID) ///to check that we are on the same page
      .text().should.become('Username'); 
  });
  /////test 5: only Decimal numbers
  it("should test if the password is only Decimal numbers", async function () {
    return driver
    .sleep(5000)
      .back().sleep(5000)
      .elementById(appSelectors.SignUpPasswordID)
      .clear()
      .elementById(appSelectors.SignUpPasswordID)
      .sendKeys('2.3456')
      .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage) 
      .click()  
      .sleep(3000)
      .elementById(appSelectors.SignUpUserNameTextID) ///to check that we are on the same page
      .text().should.become('Username'); 
  });
    ///////////////////////////////
    //successful case for username and password to get to the next page
  it("should put a successful case for username and password to get to the next page", async function () {
      return driver
      .sleep(3000)
      //.back().sleep(5000)
        .elementById(appSelectors.SignUpUserNameID)
        .sendKeys("akjdhbhfdvfv")  
        .elementById(appSelectors.SignUpPasswordID)
        .sendKeys("akjdhbh")
        .elementById(appSelectors.SignUpNextButtonOfThePassAndUsernamePage) 
        .click()
        .sleep(5000)
        .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
        .text().should.become('Email'); 
  });
    //////////////////////////////
   //////////email test cases
    ///////test1:invalid mail without @ or .com
  it("should test entering invalid email without @ or .com ", async function () {
    return driver
	  .sleep(3000)
      .elementById(appSelectors.SignUpEmailID)
      .sendKeys("fxv")
      .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
      .click()
      .sleep(3000)
      .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
      .text().should.become('Email'); 
  });
    ///////test2:invalid mail without  .com
    it("should test entering invalid email without  .com ", async function () {
      return driver
      .sleep(3000)
        .elementById(appSelectors.SignUpEmailID)
        .clear()
        .elementById(appSelectors.SignUpEmailID)
        .sendKeys("fxv@fgh")
        .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
        .click()
        .sleep(3000)
        .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
        .text().should.become('Email'); 
    });
    ///////test3:invalid mail without @
    it("should test entering invalid email without @ ", async function () {
      return driver
      .sleep(3000)
        .elementById(appSelectors.SignUpEmailID)
        .clear()
        .elementById(appSelectors.SignUpEmailID)
        .sendKeys("fxvfgh.com")
        .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
        .click()
        .sleep(3000)
        .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
        .text().should.become('Email'); 
    });
     ///////test4:invalid mail having special chars
    it("should test entering invalid email having special chars ", async function () {
      return driver
      .sleep(3000)
        .elementById(appSelectors.SignUpEmailID)
        .clear()
        .elementById(appSelectors.SignUpEmailID)
        .sendKeys("#$%@#$%.com")
        .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
        .click()
        .sleep(3000)
        .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
        .text().should.become('Email'); 
    });
    ///////test5:invalid mail such as 1@2.c
    it("should test entering invalid email such as 1@2.c ", async function () {
      return driver
      .sleep(3000)
        .elementById(appSelectors.SignUpEmailID)
        .clear()
        .elementById(appSelectors.SignUpEmailID)
        .sendKeys("1@2.c")
        .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
        .click()
        .sleep(3000)
        .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
        .text().should.become('Email'); 
    });
    ///////test6:invalid mail such as 1@2.anything
    it("should test entering invalid email such as 1@2.anything ", async function () {
      return driver
      .sleep(3000)
      .back().sleep(5000)
        .elementById(appSelectors.SignUpEmailID)
        .clear()
        .elementById(appSelectors.SignUpEmailID)
        .sendKeys("1@2.cbcjshd")
        .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
        .click()
        .sleep(3000)
        .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
        .text().should.become('Email'); 
    });
    ///////test7:invalid mail such as 1@2.co
    it("should test entering invalid email such as 1@2.co ", async function () {
      return driver
      .sleep(3000)
      .back().sleep(5000)
        .elementById(appSelectors.SignUpEmailID)
        .clear()
        .elementById(appSelectors.SignUpEmailID)
        .sendKeys("1@2.co")
        .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
        .click()
        .sleep(3000)
        .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
        .text().should.become('Email'); 
    });
  ///////test8:invalid mail such as anythingLong@anything.com
  it("should test entering invalid email such as anythingLong@anything.com ", async function () {
    return driver
    .sleep(3000)
    .back().sleep(5000)
      .elementById(appSelectors.SignUpEmailID)
      .clear()
      .elementById(appSelectors.SignUpEmailID)
      .sendKeys("sddddddddddddddddddddddddddddddghjddddddddddddddddddddddddddddddddddddddddddddddddd@gssfds.com")
      .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
      .click()
      .sleep(3000)
      .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
      .text().should.become('Email'); 
  });
  ///////test9:invalid mail such as anything@anythinglong.com
  it("should test entering invalid email such as anything@anythinglong.com ", async function () {
    return driver
    .sleep(3000)
    .back().sleep(5000)
      .elementById(appSelectors.SignUpEmailID)
      .clear()
      .elementById(appSelectors.SignUpEmailID)
      .sendKeys("sdddd@kkksssssssssghhhhhhhhssssssssssssssssssssssssssssssssssssssssssss.com")
      .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
      .click()
      .sleep(3000)
      .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
      .text().should.become('Email'); 
  });
  
    /////test 10: Not entered
  it("should test the email if it is not entered", async function () {
      return driver
      .sleep(3000)
      .back().sleep(5000)
        .elementById(appSelectors.SignUpEmailID)
        .clear()
        .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
        .click()
        .sleep(3000)
        .elementById(appSelectors.SignUpEmailTextID) ///to check that we are on the same page
        .text().should.become('Email'); 
  });

   ///////entering a successful case to reach the next page
  it("should enter a successful case for email and gender to reach the next page ", async function () {
    return driver
    .sleep(5000)
     .elementById(appSelectors.SignUpEmailID)
     .sendKeys("aya.sameh.99@gmail.com")
     .elementById(appSelectors.SignUpNextButtonOfTheEmailAndGenderPage)
     .click()
     .sleep(5000)
     .elementById(appSelectors.SignupDateOfBirthTextId)
     .text().should.become('Date of birth');
  });
   ///date of birth
       ////test1:a very old date 
       it("should test putting a very old date which must be refused", async function () {
         return driver
            .sleep(3000)
              .elementById(appSelectors.SignupDateOfBirthId)
              .click()
              .elementById(appSelectors.SignupYear)
              .click()
              .elementById(appSelectors.SignupYearsIDInSwipeList)
              .then(function (els){
                
                  return driver.swipe({
                    startX: '70', startY: '543',
                    endX: '70', endY: '1750',
                    duration: 200
                });
              })
              .elementByXPath(appSelectors.SignupYear2007BYXPATH)
              .click()
              .elementById(appSelectors.SignupDateOfBirthOkButton)
              .click()
              //.elementById(appSelectors.SignupDoneButton)
              //.click()
              //.sleep(3000)
              //.elementById(appSelectors.SignupDateOfBirthTextId)
              //.text().should.become('Date of birth');
            
        });
      ////test2: current date
      it("should test putting a recent date which must be refused", async function () {
        return driver
            .sleep(3000)
              .elementById(appSelectors.SignupDateOfBirthId)
              .click()
              .elementById(appSelectors.SignupYear)
              .click()
              .elementByXPath(appSelectors.SignupYear2022BYXPATH)
              .click()
              .elementById(appSelectors.SignupDateOfBirthOkButton)
              .click()
              //.elementById(appSelectors.SignupDoneButton)
              //.click()
              //.sleep(3000)
              //.elementById(appSelectors.SignupDateOfBirthTextId)
              //.text().should.become('Date of birth');  
      });
       ///Successful Case to Complete signUp Script
  it("should put a successful date to complete signingUp", async function () {
    return driver
        .sleep(3000)
          .elementById(appSelectors.SignupDateOfBirthId)
          .click()
          .elementById(appSelectors.SignupYear)
          .click()
          .elementById(appSelectors.SignupYearsIDInSwipeList)
          .then(function (els){
            
              return driver.swipe({
                startX: '70', startY: '543',
                endX: '70', endY: '1750',
                duration: 500
            });
          })
          .elementByXPath(appSelectors.SignupYear2007BYXPATH)
          .click()
          .elementById(appSelectors.SignupDateOfBirthOkButton)
          .click()
          //.elementById(appSelectors.SignupDoneButton)
          //.click()
          //.sleep(3000)
          //.elementById(appSelectors.AfterSignupDoneButtonTitleText)
          //.text().should.become('Made for you');
        
  });

});