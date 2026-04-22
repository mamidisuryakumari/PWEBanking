import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserDashBoardPage } from './UserDashBoardPage';
import { UserRegistrationPage } from './UserRegistrationPage';
import { time } from 'console';


export class UserLoginPage extends BasePage {
    readonly page: Page;
    private readonly userEmailId: Locator;
    private readonly userPassword: Locator;
    private readonly userLoginBtn: Locator;
    private readonly createAccountLink: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.userEmailId = page.locator('#email');
        this.userPassword = page.locator('#password');
        this.userLoginBtn = page.locator('button').filter({ hasText: 'Login' });
        this.createAccountLink = page.locator('a').filter({ hasText: 'Create an Account!' });
    }



    async clickCreateAccountLink(): Promise<UserRegistrationPage> {
        await this.createAccountLink.waitFor({ state: 'visible',  timeout: 10_000 });
        await this.createAccountLink.click();
        return new UserRegistrationPage(this.page);
    }

    async expectLoginPageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle(expectedTitle);
    }


    async enterUserEmailId(userEmailId: string) {
        await this.userEmailId.waitFor({ state: 'visible', timeout: 10_000 });
        await this.userEmailId.fill(userEmailId);
    }

    async enterUserPassword(userPassword: string) {
        await this.userPassword.waitFor({ state: 'visible', timeout: 10_000 });
        await this.userPassword.fill(userPassword);
    }

    async clickLoginButton() {
        await this.userLoginBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.userLoginBtn.click();
    }

    async userLogin(userEmailId: string, userPassword: string): Promise<UserDashBoardPage> {
        await this.enterUserEmailId(userEmailId);
        await this.enterUserPassword(userPassword);
        await this.clickLoginButton();
        return new UserDashBoardPage(this.page);
    }

}