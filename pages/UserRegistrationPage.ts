import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserLoginPage } from './UserLoginPage';


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
        this.userFirstName = page.getByRole('textbox', { name: 'First Name' });
        this.userLastName = page.getByRole('textbox', { name: 'Last Name' });
        this.userEmailId = page.getByRole('textbox', { name: 'Email Address' });
        this.userMobileNumber = page.getByRole('textbox', { name: 'Mobile Number' });
        this.userPassword = page.getByRole('textbox', { name: 'Password' });
        this.userRegisterBtn = page.getByRole('button', { name: 'Register Account' });
    }

async userRegistration(userFirstName: string, userLastName: string,
        userEmailId: string, userMobileNumber: string, userPassword: string
    ): Promise<UserLoginPage> {
       await  this.userFirstName.fill(userFirstName);
        await this.userLastName.fill(userLastName);
        await this.userEmailId.fill(userEmailId);
        await this.userMobileNumber.fill(userMobileNumber);
        await this.userPassword.fill(userPassword);
        await this.userRegisterBtn.click();
        return new UserLoginPage(this.page);
    }

    async registrationAcceptAlert(){
        await this.page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
    }

   

}