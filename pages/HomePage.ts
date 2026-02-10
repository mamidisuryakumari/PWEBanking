import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserLoginPage } from './UserLoginPage';

import { TestConfig } from '../test.config';
import { UserRole } from './Enum';


export class HomePage extends BasePage {

    readonly userAccountHolderLink: Locator;
    readonly cashierLink: Locator;
    readonly adminLink: Locator;

    constructor(page: Page) {
        super(page);
        this.userAccountHolderLink = page.getByRole("link", { name: 'User/Account Holder' }).nth(1);
        this.cashierLink = page.getByRole("link", { name: 'Cashier' }).nth(1);
        this.adminLink = page.getByRole("link", { name: 'Admin' }).nth(1);
    }


    async navigateByUserRole(page: Page, role: UserRole) {
        
        switch (role) {
            case UserRole.USER:
               await  this.userAccountHolderLink.click();
                break;

            case UserRole.ADMIN:
              await this.adminLink.click();
                break;

            case UserRole.CASHIER:
               await this.cashierLink.click();
                break;

            default:
                throw new Error(`Invalid role provided: ${role}`);
        }
    }


    async clickLoginLink(): Promise<UserLoginPage> {
        this.userAccountHolderLink.click();
        return new UserLoginPage(this.page);
    }


}