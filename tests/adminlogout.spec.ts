import {test,expect} from '@playwright/test';
import { Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AdminLoginPage } from '../pages/admin/AdminLoginPage';
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';


test('Admin logout @admin', async ({ page }) => {

    const homePage = new HomePage(page);
    const adminLoginPage = new AdminLoginPage(page);
    const config = new TestConfig();
    const adminDashboardPage = new AdminDashboardPage(page);

    await page.goto(config.baseURL);
    await homePage.expectHomePageTitle(config.homePageTitle);
    await homePage.navigateByUserRole(page, UserRole.ADMIN);

    //admin login
    await adminLoginPage.adminLogin(config.adminEmail, config.adminPassword);
    await adminDashboardPage.expectAdminDashboardPageTitle(config.adminDashboardPageTitle);

    //admin logout
    await adminDashboardPage.adminLogout();
     const modalText = await adminDashboardPage.getModalText();
  expect(modalText).toContain(config.userLogoutMsg);

  await adminDashboardPage.clickModalLogoutLink();
    await adminLoginPage.expectAdminLoginPageTitle(config.adminLoginPageTitle);

});