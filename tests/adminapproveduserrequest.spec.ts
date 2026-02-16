import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { AdminDashboardPage } from '../pages/AdminDashboardPage';
import { AdminNewAccountOpeningRequestPage } from '../pages/AdminNewAccontOpeningRequestPage';
import { AdminAccountHolderDetailsPage } from '../pages/AdminAccountHolderDetailspage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import { CommonUtils } from '../utils/CommonUtils';


test("Admin Approve user Request", async ({ page }) => {

  const homePage = new HomePage(page);
  const adminLoginPage = new AdminLoginPage(page);
  const adminDashboardPage = new AdminDashboardPage(page);
  const adminNewAccountOpeningRequestPage = new AdminNewAccountOpeningRequestPage(page);
  const adminAccountHolderDetailsPage = new AdminAccountHolderDetailsPage(page);
  const config = new TestConfig();

  await page.goto(config.baseURL);
  await expect(page).toHaveTitle(config.homePageTitle);

  await homePage.navigateByUserRole(page, UserRole.ADMIN);
  await expect(page).toHaveTitle(config.adminLoginPageTitle);

  await adminLoginPage.adminLogin(config.adminEmail, config.adminPassword);

  await expect(page).toHaveTitle(config.adminDashboardPageTitle);

  await adminDashboardPage.navigateToNewAccountOpeningRequestsPage();

  await expect(page).toHaveTitle(config.adminNewAccountOpeningRequestPageTitle);

  

  const isUserFound = await adminNewAccountOpeningRequestPage.searchUserAccount();

   if (!isUserFound) {
    console.log("Skipping title validation because no user found");
    return;
}
 await expect(page).toHaveTitle(config.adminAccountHolderDetailsPageTitle);

  await CommonUtils.acceptAlert(page);

  await adminAccountHolderDetailsPage.userAccountApproval(config.remark,
    config.initialAmount, config.approvedStatus);

  await expect(page).toHaveTitle(config.adminNewAccountOpeningRequestPageTitle);


});