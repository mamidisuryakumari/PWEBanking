import { Page, Locator,expect } from '@playwright/test';
import { BasePage } from '../BasePage';
import { AdminNewAccountOpeningRequestPage } from './AdminNewAccontOpeningRequestPage';
import { AdminAccountHolderDetailsPage } from './AdminAccountHolderDetailspage';
import { AdminAddNewCashierPage } from './AdminAddNewCashierPage';

export class AdminDashboardPage extends BasePage {
    readonly accountApproveMenu: Locator;
    readonly newRequestLink: Locator;
    readonly accountHolderLink: Locator;
    readonly cashierMenu: Locator;
    readonly addCashierLink: Locator;
    readonly manageCashierLink: Locator;
    readonly adminMenu: Locator;
    readonly adminLogoutLink: Locator;
    readonly modalTextMsg: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        super(page);
        this.accountApproveMenu = page.locator('span').filter({ hasText: "Account Approval" });
        this.newRequestLink = page.locator('a').filter({ hasText: "New Request" });
        this.accountHolderLink = page.locator('a').filter({ hasText: "Account Holder" });
        this.cashierMenu = page.locator('span').filter({ hasText: "Cashier" });
        this.addCashierLink = page.locator('a').filter({ hasText: "Add Cashier" });
        this.manageCashierLink = page.locator('a').filter({ hasText: 'Manage Cashier' });
        this.adminLogoutLink = page.locator('a').filter({ hasText: 'Logout' }).first();
        this.adminMenu = page.locator('span').filter({ hasText: "Admin Test" });
        this.modalTextMsg =page.locator("div[class='modal-body']");
        this.logoutLink = page.locator('a').filter({ hasText: 'Logout' }).last();
    }

    async expectAdminDashboardPageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        const actualTitle = await this.page.title();
        expect(actualTitle).toBe(expectedTitle);
    }

    async clickOnAccountApproveMenu() {
        await this.accountApproveMenu.waitFor({ state: 'visible', timeout: 10_000 });
        await this.accountApproveMenu.click();
    }

    async clickOnNewRequestLink() {
        await this.newRequestLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.newRequestLink.click();
    }

    async clickOnAccountHolderLink() {
        await this.accountHolderLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.accountHolderLink.click();
    }

    async clickOnCashierMenu() {
        await this.cashierMenu.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierMenu.click();
    }

    async clickOnAddCashierLink() {
        await this.addCashierLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.addCashierLink.click();
    }

    async clickOnManageCashierLink() {  
        await this.manageCashierLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.manageCashierLink.click();
    }


    async clickOnAdminLogoutLink() {    
        await this.adminLogoutLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.adminLogoutLink.click();
     }

     async clickOnAdminMenu(){
        await this.adminMenu.waitFor({ state: 'visible', timeout: 10_000 });
        await this.adminMenu.click();
     }

     async clickOnLogoutLink() {
        await this.logoutLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.logoutLink.click();
     }

    async navigateToNewAccountOpeningRequestsPage() {
        await this.clickOnAccountApproveMenu();
        await this.clickOnNewRequestLink();
        return new AdminNewAccountOpeningRequestPage(this.page)
    }

    async navigateToAccountHoldersPage() {
        await this.clickOnAccountApproveMenu();
        await this.clickOnAccountHolderLink();
        return new AdminAccountHolderDetailsPage(this.page);
    }

    async navigateToAddCashierPage() {
        await this.clickOnCashierMenu();
        await this.clickOnAddCashierLink();
        return new AdminAddNewCashierPage(this.page);
    }

    async adminLogout() {
        await this.clickOnAdminMenu();
        await this.clickOnAdminLogoutLink();
    }

    async expectLogoutModalText(expectedText: string) {
        await this.modalTextMsg.waitFor({ state: 'visible', timeout: 10_000 });
        const actualText = await this.getModalText();
        expect(actualText).toBe(expectedText);
    }

    async getModalText() {
        const message = await this.modalTextMsg.textContent();
        return message;
    }

    async clickModalLogoutLink() {
        await this.clickOnLogoutLink();
    }
}