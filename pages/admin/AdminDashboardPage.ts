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

    constructor(page: Page) {
        super(page);
        this.accountApproveMenu = page.getByText("Account Approval");
        this.newRequestLink = page.getByText("New Request");
        this.accountHolderLink = page.getByText("Account Holders");
        this.cashierMenu = page.getByText("Cashier",{exact:true});
        this.addCashierLink = page.getByRole("link", { name: 'Add Cashier' });
        this.manageCashierLink = page.getByRole("link", { name: 'Manage Cashier' });
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
}