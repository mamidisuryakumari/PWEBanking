import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { AdminDashboardPage } from '../pages/AdminDashboardPage';
import { AdminNewAccountOpeningRequestPage } from '../pages/AdminNewAccontOpeningRequestPage';
import { AdminAccountHolderDetailsPage } from '../pages/AdminAccountHolderDetailspage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import { CommonUtils } from '../utils/CommonUtils';
import { UserRegistrationPage } from '../pages/UserRegistrationPage';
import { UserLoginPage } from '../pages/UserLoginPage';
import { UserDashBoardPage } from '../pages/UserDashBoardPage';
import { UserAccountPage } from '../pages/UserAccountPage';
import { TestContext } from '../pages/TestContext';


test("Admin Approve user Request", async ({ page }) => {

  const homePage = new HomePage(page);
  const adminLoginPage = new AdminLoginPage(page);
  const adminDashboardPage = new AdminDashboardPage(page);
  const adminNewAccountOpeningRequestPage = new AdminNewAccountOpeningRequestPage(page);
  const adminAccountHolderDetailsPage = new AdminAccountHolderDetailsPage(page);
  const config = new TestConfig();
  const userRegistrationPage = new UserRegistrationPage(page);
  const userLoginPage = new UserLoginPage(page);
  const userDashBoardPage = new UserDashBoardPage(page);
  const userAccountPage = new UserAccountPage(page);
  const testContext = new TestContext();


  await page.goto(config.baseURL);
  await expect(page).toHaveTitle(config.homePageTitle);
  await homePage.navigateByUserRole(page, UserRole.USER);
  await expect(page).toHaveTitle(config.userLoginPageTitle);
  await userLoginPage.clickCreateAccountLink();
  await expect(page).toHaveTitle("e-Banking");

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

  await expect(page).toHaveTitle(config.userLoginPageTitle);

  //user login
  userLoginPage.userLogin(testContext.email, testContext.password);
  await expect(userDashBoardPage.newUserText).toHaveText(config.expectedNewUserText);
  await userAccountPage.clickOnAccountOpeningMenu();
  await expect(page).toHaveTitle(config.userAccountOpenPageTitle);
  await CommonUtils.acceptAlert(page);

  //user account open
  await userAccountPage.userAccountOpen(
    config.userAddressProofIdNumber,
    config.userAadhaarCardPath,
    config.userPanCardPath,
    `${config.userPanCardNumber}${CommonUtils.generateRandomPANNumber}`,
    config.userAddress,
    config.userDOB
  );


  await expect(userAccountPage.accountDetailsLabel).toHaveText(config.userAccountDetailsText);

  //navigate to admin login page
  await page.goto(config.adminLoginPageURL);
  await expect(page).toHaveTitle(config.adminLoginPageTitle);
  await adminLoginPage.adminLogin(config.adminEmail, config.adminPassword);
  await expect(page).toHaveTitle(config.adminDashboardPageTitle);
  await adminDashboardPage.navigateToNewAccountOpeningRequestsPage();
  await expect(page).toHaveTitle(config.adminNewAccountOpeningRequestPageTitle);
  await adminNewAccountOpeningRequestPage.searchUserAccount();
  await expect(page).toHaveTitle(config.adminAccountHolderDetailsPageTitle);
  await CommonUtils.acceptAlert(page);
  await adminAccountHolderDetailsPage.userAccountApproval(config.remark,
    config.initialAmount, config.approvedStatus);
  await expect(page).toHaveTitle(config.adminNewAccountOpeningRequestPageTitle);


});