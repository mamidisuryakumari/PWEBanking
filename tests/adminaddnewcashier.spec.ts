import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AdminLoginPage } from '../pages/admin/AdminLoginPage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { AdminAddNewCashierPage } from '../pages/admin/AdminAddNewCashierPage';
import { CommonUtils } from '../utils/CommonUtils';
import { TestContext } from '../pages/TestContext';
import { CashhierLoginPage } from '../pages/CashierLoginPage';
import { CashierDetailsPage } from '../pages/admin/CashierDetailsPage';


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
                `${config.cashierFName}${CommonUtils.generateRandomNumber()}`,
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
        await cashierLoginPage.cashierLogin(testContext.cashierEmployeeId, testContext.cashierPassword);
        await expect(page).toHaveTitle(config.cashierDashBoardPageTitle);


})

test('Admin delete cashier', async ({ page }) => {

        const homePage = new HomePage(page);
        const adminLoginPage = new AdminLoginPage(page);
        const config = new TestConfig();
        const adminDashboardPage = new AdminDashboardPage(page);
        const adminAddNewCashierPage = new AdminAddNewCashierPage(page);
        const testContext = new TestContext();
        const cashierDetailsPage = new CashierDetailsPage(page);


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
                `${config.cashierFName}${CommonUtils.generateRandomNumber()}`,
                config.cashierLName,
                CommonUtils.generateRandomMobileNumber(),
                cashierEmailId, config.cashierGender, config.cashierDob,
                `${config.cashierEmployeeId}${random}`, config.cashierAddress,
                `${config.cashierPassword}${random}`)
        testContext.cashierEmployeeId = `${config.cashierEmployeeId}${random}`;

        await adminAddNewCashierPage.navigateToCashierDetailsPage();
        await expect(page).toHaveTitle(config.cashierDetailsPageTitle);

        page.once('dialog', async (dialog) => {
                const message = dialog.message();
                await expect(message).toContain(config.cashierDeleteAlertMsg);
                await dialog.accept();
        });

        await cashierDetailsPage.deleteEmployeeId(testContext.cashierEmployeeId);



});