import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserDashBoardPage } from './UserDashBoardPage';
import { UserRegistrationPage } from './UserRegistrationPage';


export class UserLoginPage extends BasePage {
    readonly page: Page;
    private readonly userEmailId: Locator;
    private readonly userPassword: Locator;
    private readonly userLoginBtn: Locator;
    private readonly createAccountLink: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.userEmailId = page.getByPlaceholder('Enter Email Address...'); 
        this.userPassword = page.getByPlaceholder('Password');
        this.userLoginBtn = page.getByRole('button', { name: 'login' });
        this.createAccountLink = page.getByRole('link', { name: 'Create an Account!' });
    }



    async clickCreateAccountLink(): Promise<UserRegistrationPage> {
        await this.createAccountLink.click();
        return new UserRegistrationPage(this.page);
    }

    async userLogin(userEmailId: string, userPassword: string): Promise<UserDashBoardPage> {
        await this.userEmailId.fill(userEmailId);
        await this.userPassword.fill(userPassword);
        await this.userLoginBtn.click();
        return new UserDashBoardPage(this.page);
    }

}