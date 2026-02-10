import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserTestData } from '../test-data/UserTestData';
import { UserLoginPage } from '../pages/UserLoginPage';
import { UserRegistrationPage } from '../pages/UserRegistrationPage';
import { CommonUtils } from '../utils/CommonUtils';
import { TestContext } from '../pages/TestContext';
import { UserDashBoardPage } from '../pages/UserDashBoardPage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';




test("User Registration", async ({ page }) => {

  const homePage = new HomePage(page);
  const userLoginPage = new UserLoginPage(page);
  const userRegistrationPage = new UserRegistrationPage(page);
  const userDashBoardPage = new UserDashBoardPage(page);
  const config = new TestConfig();

   await page.goto(config.baseURL);
   await expect(page).toHaveTitle(config.homePageTitle);

 await homePage.navigateByUserRole(page,UserRole.USER);
  await expect(page).toHaveTitle(config.userLoginPageTitle);

  await userLoginPage.clickCreateAccountLink();
  await expect(page).toHaveTitle("e-Banking");

  const email = config.userEmailId;
  const random = CommonUtils.generateRandomNumber();

  const userEmail = email.replace('@gmail.com',`${random}@gmail.com`);


  const userPassword = `${config.userPassword}${CommonUtils.generateRandomNumber()}`;
  
  await userRegistrationPage.userRegistration(
    `${config.userFirstName}${CommonUtils.generateRandomNumber()}`,
    config.userLastName,
    userEmail,
    `${config.userMobileNumber}${CommonUtils.generateRandomMobileNumber()}`,
    userPassword
  );

  //setting the values
  TestContext.userEmail = userEmail;
  TestContext.userPassword = userPassword;


    await userRegistrationPage.registrationAcceptAlert();

  await expect(page).toHaveTitle(config.userLoginPageTitle);

  userLoginPage.userLogin(TestContext.userEmail,TestContext.userPassword);

  
await expect(userDashBoardPage.newUserText).toHaveText('Alert ! New User, Account not opend yet');

  
});

