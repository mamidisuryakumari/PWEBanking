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
import { CashierDashBoardPage } from '../pages/CashierDashBoardPage';


test('Admin add new cashier @admin', async ({ page }) => {
        const homePage = new HomePage(page);
        const adminLoginPage = new AdminLoginPage(page);
        const config = new TestConfig();
        const adminDashboardPage = new AdminDashboardPage(page);
        const adminAddNewCashierPage = new AdminAddNewCashierPage(page);
        const testContext = new TestContext();
        const cashierLoginPage = new CashhierLoginPage(page);
        const cashierDashBoardPage = new CashierDashBoardPage(page);


        await page.goto(config.baseURL);
        await homePage.expectHomePageTitle(config.homePageTitle);

        await homePage.navigateByUserRole(page, UserRole.ADMIN);
        await adminLoginPage.expectAdminLoginPageTitle(config.adminLoginPageTitle);

        //admin login
        await adminLoginPage.adminLogin(config.adminEmail, config.adminPassword);
        await adminDashboardPage.expectAdminDashboardPageTitle(config.adminDashboardPageTitle);
        await adminDashboardPage.navigateToAddCashierPage();
        await adminAddNewCashierPage.expectAdminAddNewCashierPageTitle(config.adminAddCashierPageTitle);

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
        await cashierLoginPage.expectLoginPageTitle(config.cashierLoginPageTitle);
        await cashierLoginPage.cashierLogin(testContext.cashierEmployeeId, testContext.cashierPassword);
        await cashierDashBoardPage.expectCashierDashBoardPageTitle(config.cashierDashBoardPageTitle);


})

test('Admin delete cashier @admin', async ({ page }) => {

        const homePage = new HomePage(page);
        const adminLoginPage = new AdminLoginPage(page);
        const config = new TestConfig();
        const adminDashboardPage = new AdminDashboardPage(page);
        const adminAddNewCashierPage = new AdminAddNewCashierPage(page);
        const testContext = new TestContext();
        const cashierDetailsPage = new CashierDetailsPage(page);


        await page.goto(config.baseURL);
        await homePage.expectHomePageTitle(config.homePageTitle);

        await homePage.navigateByUserRole(page, UserRole.ADMIN);
        await adminLoginPage.expectAdminLoginPageTitle(config.adminLoginPageTitle);

        //admin login
        await adminLoginPage.adminLogin(config.adminEmail, config.adminPassword);
        await adminDashboardPage.expectAdminDashboardPageTitle(config.adminDashboardPageTitle);
        await adminDashboardPage.navigateToAddCashierPage();
        await adminAddNewCashierPage.expectAdminAddNewCashierPageTitle(config.adminAddCashierPageTitle);

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
        await cashierDetailsPage.expectCashierDetailsPageTitle(config.cashierDetailsPageTitle);

        page.once('dialog', async (dialog) => {
                const message = dialog.message();
                await expect(message).toContain(config.cashierDeleteAlertMsg);
                await dialog.accept();
        });

        await cashierDetailsPage.deleteEmployeeId(testContext.cashierEmployeeId);



});