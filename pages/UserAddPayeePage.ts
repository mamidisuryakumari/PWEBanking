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
        this.submitBtn = page.locator('button').filter({ hasText: 'Submit' });
    }

    async expectUserAddPayeePageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle(expectedTitle);
    }
    
    async enterAccountNumber(accountNumber: string) {
        await this.accountNumberTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.accountNumberTextFld.fill(accountNumber);
    }

    async enterConfirmAccountNumber(accountNumber: string) {
        await this.confirmAccountNumberTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.confirmAccountNumberTextFld.fill(accountNumber);
    }

    async enterPayeeName(payeeName: string) {
        await this.payeeNameTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.payeeNameTextFld.fill(payeeName);
    }

    async clickOnSubmit() {
        await this.submitBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.submitBtn.click();
    }

    async addPayee(accountNumber: string, payeeName: string) {
        await this.enterAccountNumber(accountNumber);
        await this.enterConfirmAccountNumber(accountNumber);
        await this.enterPayeeName(payeeName);
        await this.clickOnSubmit();
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

