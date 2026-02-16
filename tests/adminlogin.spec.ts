import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AdminDashboardPage } from '../pages/AdminDashboardPage';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';

test("Admin Login", async ({ page }) => {

    const homePage = new HomePage(page);
    const adminLoginPage = new AdminLoginPage(page);
    const config = new TestConfig();

    await page.goto(config.baseURL);
    await expect(page).toHaveTitle(config.homePageTitle);
    
    await  homePage.navigateByUserRole(page,UserRole.ADMIN);
    await expect(page).toHaveTitle(config.adminLoginPageTitle);

    await adminLoginPage.adminLogin(config.adminEmail,config.adminPassword);

    await expect(page).toHaveTitle(config.adminDashboardPageTitle);


});