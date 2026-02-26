import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { CashierAccountHoldersPage } from "./CashierAccountHoldersPage";
import { CashierTransactionReportPage } from "./CashierTransactionReportPage";


export class CashierDashBoardPage extends BasePage {
    readonly accountHolderMenu;
    readonly reportMenu;
    readonly transactionHistoryMenu;

    constructor(page: Page) {
        super(page);
        this.accountHolderMenu = page.getByText("Account Holders");
        this.reportMenu = page.locator("a[class='nav-link collapsed']");
        this.transactionHistoryMenu = page.getByRole('link', { name: "Txn History Report" });
    }

    async navigateToAccountHoldersPage() {
        await this.accountHolderMenu.click();
    }

    async navigateToCashierTransactionReportPage() {
        await this.reportMenu.click();
        await this.transactionHistoryMenu.click();
        return new CashierTransactionReportPage(this.page);
    }
}