import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";

export class CashierTransactionReportPage extends BasePage {
    readonly fromDateTextFld;
    readonly toDateTextFld;
    readonly accountHolderDropdown;
    readonly submitBtn;
    readonly transactionHistoryFld;

    constructor(page: Page) {
        super(page);
        this.fromDateTextFld = page.locator("input[name='fromdate']");
        this.toDateTextFld = page.locator("input[name='todate']");
        this.accountHolderDropdown = page.locator("select[name='accountholder']");
        this.submitBtn = page.getByRole("button", { name: 'Submit' });
        this.transactionHistoryFld = page.locator("h5[class='m-0 font-weight-bold text-primary']");
    }

    async transactionReports(fromDate: string, toDate: string, accountHolder: string) {
        await this.fromDateTextFld.fill(fromDate);
        await this.toDateTextFld.fill(toDate);
        await this.accountHolderDropdown.selectOption(accountHolder);
        await this.submitBtn.click();
        return this;
    }

    async getTransactionHistoryText() {
        return await this.transactionHistoryFld.innerText();
    }
}