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

    constructor(page: Page) {
        super(page);
        this.accountHolderMenu = page.getByText("Account Holders");
        this.reportMenu = page.locator("a[class='nav-link collapsed']");
        this.transactionHistoryMenu = page.getByRole('link', { name: "Txn History Report" });
        this.cashierMenu = page.locator("img[class='img-profile rounded-circle']");
        this.cashierProfileMenu = page.getByRole('link', { name: 'Profile' });

    }

    async navigateToAccountHoldersPage() {
        await this.accountHolderMenu.click();
    }

    async navigateToCashierTransactionReportPage() {
        await this.reportMenu.click();
        await this.transactionHistoryMenu.click();
        return new CashierTransactionReportPage(this.page);
    }
    async navigateToCashierProfilePage(){
        await this.cashierMenu.click();
        await this.cashierProfileMenu.click();
        return new CashierProfilePage(this.page);
    }

}