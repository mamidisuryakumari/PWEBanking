import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserLoginPage } from '../pages/UserLoginPage';
import { UserDashBoardPage } from '../pages/UserDashBoardPage';
import { UserRegistrationPage } from '../pages/UserRegistrationPage';
import { CommonUtils } from '../utils/CommonUtils';
import { TestContext } from '../pages/TestContext';
import { UserAccountPage } from '../pages/UserAccountPage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';


test("User Account Opening @user", async ({ page }) => {

    const homePage = new HomePage(page);
    const userLoginPage = new UserLoginPage(page);
    const userRegistrationPage = new UserRegistrationPage(page);
    const userDashBoardPage = new UserDashBoardPage(page);
    const userAccountPage = new UserAccountPage(page);
    const config = new TestConfig();
    const testContext = new TestContext();

    await page.goto(config.baseURL);
    await homePage.expectHomePageTitle(config.homePageTitle);
    await homePage.navigateByUserRole(page, UserRole.USER);
    await userLoginPage.expectLoginPageTitle(config.userLoginPageTitle);
    await userLoginPage.clickCreateAccountLink();
    await userRegistrationPage.expectRegistrationPageTitle(config.userRegistrationPageTitle);

    const email = config.userEmailId;
    const random = CommonUtils.generateRandomNumber();
    const userEmail = email.replace('@gmail.com', `${random}@gmail.com`);
    const userPassword = `${config.userPassword}${CommonUtils.generateRandomNumber()}`;

    //user registration
    await userRegistrationPage.userRegistration(
        `${config.userFirstName}${CommonUtils.generateRandomNumber()}`,
        config.userLastName,
        userEmail,
        `${config.userMobileNumber}${CommonUtils.generateRandomMobileNumber()}`,
        userPassword
    );

    //setting the values
    testContext.email = userEmail;
    testContext.password = userPassword;

    await userLoginPage.expectLoginPageTitle(config.userLoginPageTitle);

    //user login
    userLoginPage.userLogin(testContext.email, testContext.password);
    await userDashBoardPage.expectNewUserText(config.expectedNewUserText);
    await userAccountPage.clickOnAccountOpeningMenu();
    await userAccountPage.expectAccountOpenPageTitle(config.userAccountOpenPageTitle);
   // await CommonUtils.acceptAlert(page);
   await userAccountPage.userAccountOpenAcceptAlert();

    //user account open
    await userAccountPage.userAccountOpen(
        config.selectAadhaarCard,
        config.userAddressProofIdNumber,
        config.userAadhaarCardPath,
        config.userPanCardPath,
        `${config.userPanCardNumber}${CommonUtils.generateRandomPANNumber}`,
        config.userAddress,
        config.userDOB
    );

    await userAccountPage.expectAccountDetailsText(config.userAccountDetailsText);

    

});