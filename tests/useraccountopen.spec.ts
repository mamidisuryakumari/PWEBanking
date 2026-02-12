import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserLoginPage } from '../pages/UserLoginPage';
import { UserDashBoardPage } from '../pages/UserDashBoardPage';
import { UserRegistrationPage } from '../pages/UserRegistrationPage';
import { UserTestData } from '../test-data/UserTestData';
import { CommonUtils } from '../utils/CommonUtils';
import { TestContext } from '../pages/TestContext';
import { UserAccountPage } from '../pages/UserAccountPage';
import { TestConfig } from '../test.config';


test("User Account Opening", async ({ page }) => {

    const homePage = new HomePage(page);
    const userLoginPage = new UserLoginPage(page);
    const userRegistrationPage = new UserRegistrationPage(page);
    const userDashBoardPage = new UserDashBoardPage(page);
    const userAccountPage = new UserAccountPage(page);
    const config = new TestConfig();

    await page.goto(config.baseURL);
    await expect(page).toHaveTitle(config.homePageTitle);
    await homePage.navigateByUserRole(page,UserRole.USER);
    await expect(page).toHaveTitle(config.userLoginPageTitle);

    await userLoginPage.clickCreateAccountLink();
    await expect(page).toHaveTitle("e-Banking");

    const email = UserTestData.validUserRegistrationDetails.userEmailId;
    const random = CommonUtils.generateRandomNumber();

    const userEmail = email.replace('@gmail.com', `${random}@gmail.com`);


    const userPassword = `${UserTestData.validUserRegistrationDetails.userPassword}${CommonUtils.generateRandomNumber()}`;

    //user registration
    await userRegistrationPage.userRegistration(
        `${UserTestData.validUserRegistrationDetails.userFirstName}${CommonUtils.generateRandomNumber()}`,
        UserTestData.validUserRegistrationDetails.userLastName,
        userEmail,
        `${UserTestData.validUserRegistrationDetails.userMobileNumber}${CommonUtils.generateRandomMobileNumber()}`,
        userPassword
    );

    //setting the values
    TestContext.userEmail = userEmail;
    console.log(TestContext.userEmail);
    TestContext.userPassword = userPassword;
    console.log(TestContext.userPassword);


    await userRegistrationPage.registrationAcceptAlert();

    await expect(page).toHaveTitle(config.userLoginPageTitle);

    //user login

    userLoginPage.userLogin(TestContext.userEmail, TestContext.userPassword);

    await expect(userDashBoardPage.newUserText).toHaveText(config.expectedNewUserText);

    await userAccountPage.clickOnAccountOpeningMenu();

    await expect(page).toHaveTitle(config.userAccountOpenPageTitle);

    await userAccountPage.userAccountOpenAcceptAlert();

    //user account open
    
    await userAccountPage.userAccountOpen(UserTestData.userAccountOpeningDetails.userAddressProofIdNumber,
        `${UserTestData.userAccountOpeningDetails.userPanCardNumber}${CommonUtils.generateRandomPANNumber}`,
        UserTestData.userAccountOpeningDetails.userAddress
    );

    

    await expect(userAccountPage.accountDetailsLabel).toHaveText(config.userAccountDetailsText);



});