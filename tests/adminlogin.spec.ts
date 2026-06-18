import { test} from "./fixtures/auth.fixtures";
import { expect } from "@playwright/test";
import { HomePage } from '../pages/HomePage';
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { AdminLoginPage } from '../pages/admin/AdminLoginPage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import fs from 'fs';
import path from 'path';

test.only("Verify Admin Dashboard Loads @admin", async ({ authPage }) => {

    const adminDashboardPage = new AdminDashboardPage(authPage);
    const config = new TestConfig();

await authPage.goto(config.adminDashBoardPageURL);
    await adminDashboardPage.expectAdminDashboardPageTitle(config.adminDashboardPageTitle);
    console.log("Admin Dashboard loaded successfully");
});

//Reading data from json
const jsonPath = path.resolve(__dirname, "../test-data/invalidAdmin.json");
const adminLoginData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

test.describe("Admin login with invalid values @admin", () => {

    test.beforeEach(async ({ page }) => {
        const config = new TestConfig();
        const homePage = new HomePage(page);
        await page.goto(config.baseURL);
        await homePage.expectHomePageTitle(config.homePageTitle);
    });
    for (const data of adminLoginData) {
        test(data.scenario, async ({ page }) => {
            const adminLoginPage = new AdminLoginPage(page);
            const homePage = new HomePage(page);
            const config = new TestConfig();


            await homePage.navigateByUserRole(page, UserRole.ADMIN);
            await adminLoginPage.expectAdminLoginPageTitle(config.adminLoginPageTitle);

            await adminLoginPage.adminLogin(data.email, data.password);

            // Decide which field to validate
            const fieldLocator =
                data.field === "username"
                    ? page.locator("#email")
                    : page.locator("#password");

            // Read browser-native message
            const validationMessage = await fieldLocator.evaluate(
                (el: HTMLInputElement) => el.validationMessage
            );

            const expectedMessage = data.expectedMessage;
            expect(validationMessage).toBe(expectedMessage);
        });

    }
});

