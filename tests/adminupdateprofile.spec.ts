import {test,expect} from '@playwright/test';
import { Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AdminLoginPage } from '../pages/admin/AdminLoginPage';
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';

test("Admin profile update @admin", async ({ page }) => {

    const homePage = new HomePage(page);
    const adminLoginPage = new AdminLoginPage(page);
    const adminDashboardPage = new AdminDashboardPage(page);
    const config = new TestConfig();

    await page.goto(config.baseURL);
    await homePage.expectHomePageTitle(config.homePageTitle);

    await homePage.navigateByUserRole(page, UserRole.ADMIN);
    await adminLoginPage.expectAdminLoginPageTitle(config.adminLoginPageTitle);

    await adminLoginPage.adminLogin(config.adminEmail, config.adminPassword);

    await adminDashboardPage.expectAdminDashboardPageTitle(config.adminDashboardPageTitle);

    
});