import { test} from "./fixtures/auth.fixtures";
import { expect } from "@playwright/test";
import { TestConfig } from '../test.config';
import { CommonUtils } from '../utils/CommonUtils';
import { TestContext } from '../pages/TestContext';



test('Admin add cashier and delete cashier @admin', async ({authPage,adminDashboardPage,adminAddNewCashierPage
    ,cashierDetailsPage}) => {

    const config = new TestConfig();
    const testContext = new TestContext();

    await test.step('Open Admin Dashboard', async () => {
        await authPage.goto(config.adminDashBoardPageURL);
        await adminDashboardPage.expectAdminDashboardPageTitle(
            config.adminDashboardPageTitle
        );
    });

    await test.step('Navigate to Add Cashier Page', async () => {
        await adminDashboardPage.navigateToAddCashierPage();
        await adminAddNewCashierPage.expectAdminAddNewCashierPageTitle(
            config.adminAddCashierPageTitle
        );
    });

    await test.step('Add New Cashier', async () => {

        const random = CommonUtils.generateRandomNumber();

        const cashierEmailId = config.cashierEmailId.replace(
            '@gmail.com',
            `${random}@gmail.com`
        );

        testContext.cashierEmployeeId = `${config.cashierEmployeeId}${random}`;

        await adminAddNewCashierPage.addCashier(
            `${config.cashierFName}${random}`,
            config.cashierLName,
            CommonUtils.generateRandomMobileNumber(),
            cashierEmailId,
            config.cashierGender,
            config.cashierDob,
            testContext.cashierEmployeeId,
            config.cashierAddress,
            `${config.cashierPassword}${random}`
        );
    });

    await test.step('Navigate to Cashier Details Page', async () => {
        await adminAddNewCashierPage.navigateToCashierDetailsPage();

        await cashierDetailsPage.expectCashierDetailsPageTitle(
            config.cashierDetailsPageTitle
        );
    });

    await test.step('Search Cashier by Employee ID', async () => {
        await cashierDetailsPage.searchEmployeeId(
            testContext.cashierEmployeeId
        );
    });

    await test.step('Delete Cashier', async () => {

        authPage.once('dialog', async (dialog) => {
            const message = dialog.message();
            await expect(message).toContain(
                config.cashierDeleteAlertMsg
            );
            await dialog.accept();
        });

        await cashierDetailsPage.deleteEmployeeId();
    });

});