import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserLoginPage } from '../pages/UserLoginPage';
import { UserRegistrationPage } from '../pages/UserRegistrationPage';
import { TestConfig } from '../test.config';
import * as fs from 'fs';
import { UserRole } from '../pages/Enum';
import path from 'path';

//reading data from json file
const jsonPath = path.resolve(__dirname,"../test-data/invaliduserregistration.json");
const registrationData: any = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

test.describe("User Registration with invalid values @user", () => {

    test.beforeEach(async ({ page }) => {
        const config = new TestConfig();
        const  homePage = new HomePage(page);
       
        await page.goto(config.baseURL);
        await homePage.expectHomePageTitle(config.homePageTitle);
    });

    for (const data of registrationData) {
        test(data.scenario, async ({ page }) => {
            const homePage = new HomePage(page);
            const userLoginPage = new UserLoginPage(page);
            const userRegistrationPage = new UserRegistrationPage(page);
            const config = new TestConfig();

            await homePage.navigateByUserRole(page, UserRole.USER);
            await userLoginPage.expectLoginPageTitle(config.userLoginPageTitle);
            await userLoginPage.clickCreateAccountLink();

            await userRegistrationPage.userRegistration(
                data.userFirstName,
                data.userLastName,
                data.userEmailId,
                data.userMobileNumber,
                data.userPassword
            );
            
            //validation for required fields
            let fieldLocator;
            switch (data.field) {
                case "userFirstName":
                    fieldLocator = userRegistrationPage.userFirstName;
                    break;
                case "userLastName":
                    fieldLocator = userRegistrationPage.userLastName;
                    break;
                case "userEmailId":
                    fieldLocator = userRegistrationPage.userEmailId;
                    break;
                case "userMobileNumber":
                    fieldLocator = userRegistrationPage.userMobileNumber;
                    break;
                case "userPassword": fieldLocator = userRegistrationPage.userPassword;
                    break;
                default:
                    throw new Error(`Invalid field name: ${data.field}`);
            }

            // Read browser-native validation message
            const validationMessage = await fieldLocator.evaluate(
                (el: HTMLInputElement) => el.validationMessage
            );

            expect(validationMessage).toBe(data.expectedMessage);
        });
    }
});