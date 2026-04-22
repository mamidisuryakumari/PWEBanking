import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserLoginPage } from './UserLoginPage';
import { CommonUtils } from '../utils/CommonUtils';


export class UserRegistrationPage extends BasePage {
    readonly page: Page;
    readonly userFirstName: Locator;
    readonly userLastName: Locator;
    readonly userEmailId: Locator;
    readonly userMobileNumber: Locator;
    readonly userPassword: Locator
    readonly userRegisterBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.userFirstName = page.locator('#fname');
        this.userLastName = page.locator('#lname');
        this.userEmailId = page.locator('#email');
        this.userMobileNumber = page.locator('#mobno');
        this.userPassword = page.locator('#password');
        this.userRegisterBtn = page.locator('button').filter({ hasText: 'Register Account' });
    }

    async expectRegistrationPageTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async enterUserFirstName(userFirstName: string) {
        await this.userFirstName.waitFor({ state: 'visible', timeout: 10_000 });
        await this.userFirstName.fill(userFirstName);
    }

    async enterUserLastName(userLastName: string) {
        await this.userLastName.waitFor({ state: 'visible', timeout: 10_000 });
        await this.userLastName.fill(userLastName);
    }

    async enterUserEmailId(userEmailId: string) {
        await this.userEmailId.waitFor({ state: 'visible', timeout: 10_000 });
        await this.userEmailId.fill(userEmailId);
    }

    async enterUserMobileNumber(userMobileNumber: string) {
        await this.userMobileNumber.waitFor({ state: 'visible', timeout: 10_000 });
        await this.userMobileNumber.fill(userMobileNumber);
    }

    async enterUserPassword(userPassword: string) {
        await this.userPassword.waitFor({ state: 'visible', timeout: 10_000 });
        await this.userPassword.fill(userPassword);
    }

    async clickRegisterButton() {
        await this.userRegisterBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.userRegisterBtn.click();
    }

    async userRegistration(userFirstName: string, userLastName: string,
        userEmailId: string, userMobileNumber: string, userPassword: string
    ): Promise<UserLoginPage> {
        await this.enterUserFirstName(userFirstName);
        await this.enterUserLastName(userLastName);
        await this.enterUserEmailId(userEmailId);
        await this.enterUserMobileNumber(userMobileNumber);
        await this.enterUserPassword(userPassword);
        await this.clickRegisterButton();
        return new UserLoginPage(this.page);
    }
       
    }

    

   

