import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import { AdminDashboardPage } from '../pages/AdminDashboardPage';
import { AdminAddNewCashierPage } from '../pages/AdminAddNewCashierPage';
import { CommonUtils } from '../utils/CommonUtils';
import { TestContext } from '../pages/TestContext';
import { CashhierLoginPage } from '../pages/CashierLoginPage';


test('Admin add new cashier', async ({ page }) => {
        const homePage = new HomePage(page);
        const adminLoginPage = new AdminLoginPage(page);
        const config = new TestConfig();
        const adminDashboardPage = new AdminDashboardPage(page);
        const adminAddNewCashierPage = new AdminAddNewCashierPage(page);
        const testContext = new TestContext();
        const cashierLoginPage = new CashhierLoginPage(page);


        await page.goto(config.baseURL);
        await expect(page).toHaveTitle(config.homePageTitle);

        await homePage.navigateByUserRole(page, UserRole.ADMIN);
        await expect(page).toHaveTitle(config.adminLoginPageTitle);

        //admin login
        await adminLoginPage.adminLogin(config.adminEmail, config.adminPassword);
        await expect(page).toHaveTitle(config.adminDashboardPageTitle);
        await adminDashboardPage.navigateToAddCashierPage();
        await expect(page).toHaveTitle(config.adminAddCashierPageTitle);

        const email = config.cashierEmailId;
        const random = CommonUtils.generateRandomNumber();
        const cashierEmailId = email.replace('@gmail.com', `${random}@gmail.com`);


        await adminAddNewCashierPage.addCashier(
                `${config.cashierFName}${CommonUtils.generateRandomNumber}`,
                config.cashierLName,
                CommonUtils.generateRandomMobileNumber(),
                cashierEmailId, config.cashierGender, config.cashierDob,
                `${config.cashierEmployeeId}${random}`, config.cashierAddress,
                `${config.cashierPassword}${random}`)

        //set cashier values
        testContext.cashierEmployeeId = `${config.cashierEmployeeId}${random}`;
        testContext.cashierPassword = `${config.cashierPassword}${random}`;
        await page.waitForLoadState('load');
        await page.goto(config.cashierLoginPageURL);
        await expect(page).toHaveTitle(config.cashierLoginPageTitle);
       await  cashierLoginPage.cashierLogin(testContext.cashierEmployeeId, testContext.cashierPassword);
        await expect(page).toHaveTitle(config.cashierDashBoardPageTitle);


})