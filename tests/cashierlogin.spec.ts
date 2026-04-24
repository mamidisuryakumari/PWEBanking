import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CashhierLoginPage } from '../pages/CashierLoginPage';
import { CashierTestData } from '../test-data/CashierTestData';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import fs from 'fs';
import path from 'path';
import { CashierDashBoardPage } from '../pages/CashierDashBoardPage';

test("Cashier Login Test @cashier", async ({ page }) => {

  const homePage = new HomePage(page);
  const cashierLoginPage = new CashhierLoginPage(page);
  const cashierDashBoardPage = new CashierDashBoardPage(page);
  const config = new TestConfig();

  await page.goto(config.baseURL);
  await homePage.navigateByUserRole(page, UserRole.CASHIER);
  await cashierLoginPage.cashierLogin(config.cashierEmail,
    config.cashierPassword);
  await cashierDashBoardPage.expectCashierDashBoardPageTitle(config.cashierDashBoardPageTitle);
});

//Reading data from json
const jsonPath = path.resolve(__dirname, "../test-data/invalidcashierlogindata.json");
const cashierLoginData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

test.describe("Cashier login with invalid values @cashier", () => {

    test.beforeEach(async ({ page }) => {
        const config = new TestConfig();
        const homePage = new HomePage(page);
        
        await page.goto(config.baseURL);
        await homePage.expectHomePageTitle(config.homePageTitle);
    });
    for (const data of cashierLoginData) {
        test(data.scenario, async ({ page }) => {
            const cashierLoginPage = new CashhierLoginPage(page);
            const homePage = new HomePage(page);
            const config = new TestConfig();


            await homePage.navigateByUserRole(page, UserRole.CASHIER);
            await cashierLoginPage.expectLoginPageTitle(config.cashierLoginPageTitle);

            await cashierLoginPage.cashierLogin(data.employeeId, data.password);

            // Decide which field to validate
            const fieldLocator =
                data.field === "employeeId"
                    ? page.locator("#empid")
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