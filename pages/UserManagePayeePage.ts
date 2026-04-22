import { Page, Locator } from "playwright/types/test";
import { BasePage } from "./BasePage";
import { UserTransferAmountPage } from "./UserTransferAmountPage";

export class UserManagePayeePage extends BasePage {
    readonly transferAmountLink: Locator;
    readonly delete: Locator;
    readonly searchInput: Locator;

    constructor(page: Page) {
        super(page);
        this.transferAmountLink = page.locator('a').filter({ hasText: 'Transfer' });
        this.delete = page.locator('a').filter({ hasText: 'Delete' });
        this.searchInput= page.locator("input[type='search']");
    }

    async clickOnTransferAmountLink() {
        await this.transferAmountLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.transferAmountLink.click();
     }

    async enterPayeeAccountName(payeeAccountNumber: string) {
        await this.searchInput.waitFor({ state: 'visible', timeout: 10_000 });
        await this.searchInput.fill(payeeAccountNumber);
     }

     async clickOnDelete() {
        await this.delete.waitFor({ state: 'visible', timeout: 10_000 });
        await this.delete.click();
     }



    async deletePayee(payeeAccountNumber: string) {
        await this.enterPayeeAccountName(payeeAccountNumber);
        await this.clickOnDelete();
        return this;
    }

    async navigateToUserTransferAmountPage(payeeAccountNumber:string) {
        await this.enterPayeeAccountName(payeeAccountNumber);
        await this.clickOnTransferAmountLink();
        return new UserTransferAmountPage(this.page);
    }

    async getAllExistingPayeeAccountNumbers() {
        const rows = this.page.locator("table tbody tr");
        await rows.first().waitFor();
        return await this.page
            .locator("table tbody tr td:nth-child(5)")
            .allInnerTexts();
    }

}
