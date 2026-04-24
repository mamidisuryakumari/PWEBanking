import { BasePage } from "./BasePage";
import { Page,expect } from "@playwright/test";

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
        this.submitBtn = page.locator('button').filter({ hasText: 'Submit' });
        this.transactionHistoryFld = page.locator("h5[class='m-0 font-weight-bold text-primary']");
    }

    async enterFromDate(fromDate: string) {
        await this.fromDateTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.fromDateTextFld.fill(fromDate);
    }

    async enterToDate(toDate: string) {
        await this.toDateTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.toDateTextFld.fill(toDate);
    }

    async selectAccountHolder(accountHolder: string) {
        await this.accountHolderDropdown.waitFor({ state: 'visible', timeout: 10_000 });
        await this.accountHolderDropdown.selectOption(accountHolder);
    }
        async clickOnSubmit() {
        await this.submitBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.submitBtn.click();
    }

    async transactionReports(fromDate: string, toDate: string, accountHolder: string) {
        await this.enterFromDate(fromDate);
        await this.enterToDate(toDate);
        await this.selectAccountHolder(accountHolder);
        await this.clickOnSubmit();
        return this;
    }

    async expectTransactionHistoryText(expectedText: string) {
        await this.transactionHistoryFld.waitFor({ state: 'visible', timeout: 10_000 });
        const actualText = await this.transactionHistoryFld.innerText();
        expect(actualText).toContain(expectedText);
    }

   
}