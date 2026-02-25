import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';




export class UserAddPayeePage extends BasePage {

    readonly accountNumberTextFld: Locator;
    readonly confirmAccountNumberTextFld: Locator;
    readonly payeeNameTextFld: Locator;
    readonly submitBtn: Locator;
    constructor(page: Page) {
        super(page);
        this.accountNumberTextFld = page.locator("#accountnumber");
        this.confirmAccountNumberTextFld = page.locator("#conaccountnumber");
        this.payeeNameTextFld = page.locator("#acountholdername");
        this.submitBtn = page.getByText("Submit");
    }

    async addPayee(accountNumber: string, payeeName: string) {

        await this.accountNumberTextFld.fill(accountNumber);
        await this.confirmAccountNumberTextFld.fill(accountNumber);
        await this.payeeNameTextFld.fill(payeeName);
        await this.submitBtn.click();
    }

    async isPayeeExists(accountNumber: string) {

        const rows = this.page.locator("table tbody tr");

        if (await rows.count() === 0) {
            return false;
        }

        const count = await rows.count();

        for (let i = 0; i < count; i++) {

            const existingAccNo = await rows
                .nth(i)
                .locator("td:nth-child(5)")
                .innerText();

            if (existingAccNo.trim() === accountNumber.trim()) {
                return true;
            }
        }

        return false;
    }


}

