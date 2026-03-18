import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CashierAccountHoldersPage } from "./CashierAccountHoldersPage";
import { CashierTransactionReportPage } from "./CashierTransactionReportPage";
import { CashierProfilePage } from "./CashierProfilePage";


export class CashierDashBoardPage extends BasePage {
    readonly accountHolderMenu: Locator;
    readonly reportMenu: Locator;
    readonly transactionHistoryMenu: Locator;
    readonly cashierMenu: Locator;
    readonly cashierProfileMenu: Locator;
    readonly cashierLogoutLink: Locator;
    readonly modalTextMsg;
    readonly logoutLink;
    constructor(page: Page) {
        super(page);
        this.accountHolderMenu = page.getByText("Account Holders");
        this.reportMenu = page.locator("a[class='nav-link collapsed']");
        this.transactionHistoryMenu = page.getByRole('link', { name: "Txn History Report" });
        this.cashierMenu = page.locator("img[class='img-profile rounded-circle']");
        this.cashierProfileMenu = page.getByRole('link', { name: 'Profile' });
        this.cashierLogoutLink = page.locator('a').filter({ hasText: 'Logout' }).first();
        this.modalTextMsg = page.getByText('Select "Logout" below if you are ready to end your current session.');
        this.logoutLink = page.getByRole('link', { name: 'Logout' }).last();
    }

    async navigateToAccountHoldersPage() {
        await this.accountHolderMenu.click();
    }

    async navigateToCashierTransactionReportPage() {
        await this.reportMenu.click();
        await this.transactionHistoryMenu.click();
        return new CashierTransactionReportPage(this.page);
    }
    async navigateToCashierProfilePage() {
        await this.cashierMenu.click();
        await this.cashierProfileMenu.click();
        return new CashierProfilePage(this.page);
    }

    async cashierLogout() {
        await this.cashierMenu.click();
        await this.cashierLogoutLink.click();
    }

    async getModalText() {
        const message = await this.modalTextMsg.textContent();
        return message;
    }

    async clickModalLogoutLink() {
        await this.logoutLink.click();
    }

}