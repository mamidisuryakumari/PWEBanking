import { Page, Locator } from '@playwright/test';
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
        this.accountApproveMenu = page.getByText("Account Approval");
        this.newRequestLink = page.getByText("New Request");
        this.accountHolderLink = page.getByText("Account Holders");
        this.cashierMenu = page.getByText("Cashier", { exact: true });
        this.addCashierLink = page.getByRole("link", { name: 'Add Cashier' });
        this.manageCashierLink = page.getByRole("link", { name: 'Manage Cashier' });
        this.adminLogoutLink = page.locator('a').filter({ hasText: 'Logout' }).first();
        this.adminMenu = page.getByText("Admin Test");
        this.modalTextMsg = page.getByText('Select "Logout" below if you are ready to end your current session.');
        this.logoutLink = page.getByRole('link', { name: 'Logout' }).last();
    }

    async navigateToNewAccountOpeningRequestsPage() {
        await this.accountApproveMenu.click();
        await this.newRequestLink.click();
        return new AdminNewAccountOpeningRequestPage(this.page)
    }

    async navigateToAccountHoldersPage() {
        await this.accountApproveMenu.click();
        return new AdminAccountHolderDetailsPage(this.page);
    }

    async navigateToAddCashierPage() {
        await this.cashierMenu.click();
        await this.addCashierLink.click();
        return new AdminAddNewCashierPage(this.page);
    }

    async adminLogout() {
        await this.adminMenu.click();
        await this.adminLogoutLink.click();
    }

    async getModalText() {
        const message = await this.modalTextMsg.textContent();
        return message;
    }

    async clickModalLogoutLink() {
        await this.logoutLink.click();
    }
}