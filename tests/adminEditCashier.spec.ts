import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { TestConfig } from '../test.config';
import { AdminLoginPage } from '../pages/admin/AdminLoginPage';
import { TestContext } from '../pages/TestContext';
import { CashhierLoginPage } from '../pages/CashierLoginPage';
import { UserRole } from '../pages/Enum';
import { CommonUtils } from '../utils/CommonUtils';
import { AdminAddNewCashierPage } from '../pages/admin/AdminAddNewCashierPage';
import { CashierDetailsPage } from '../pages/admin/CashierDetailsPage';
import { UpdateCashierDetailsPage } from '../pages/admin/UpdateCashierDetailsPage';


test("Admin Edit cashier details", async ({ page }) => {

    const homePage = new HomePage(page);
    const adminLoginPage = new AdminLoginPage(page);
    const config = new TestConfig();
    const adminDashboardPage = new AdminDashboardPage(page);
    const testContext = new TestContext();
    const cashierLoginPage = new CashhierLoginPage(page);
    const adminAddNewCashierPage = new AdminAddNewCashierPage(page);
    const cashierDetailsPage = new CashierDetailsPage(page);
    const updateCashierDetailsPage = new UpdateCashierDetailsPage(page);

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

    await cashierDetailsPage.navigateToupdateCashierDetailsPage();
    await expect(page).toHaveTitle(config.updateCashierDetailsPageTitle)

    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        expect(message).toBe(config.cashierDetailsUpdateMsg);
        dialog.accept();
    });

    await updateCashierDetailsPage.updateCashierDetails(
        config.cashierUpadetLastName,
        config.cashierUpdateAddress);
        console.log("Cashier details updated successfully");
    });