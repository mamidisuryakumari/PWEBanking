import { Page, Locator } from "playwright/types/test";
import { BasePage } from "./BasePage";
import { UserTransferAmountPage } from "./UserTransferAmountPage";

export class UserManagePayeePage extends BasePage {
    readonly transferAmountLink: Locator;
    readonly delete: Locator;
    readonly searchInput: Locator;

    constructor(page: Page) {
        super(page);
        this.transferAmountLink = page.getByRole('link', { name: 'Transfer' });
        this.delete = page.getByRole('link', { name: 'Delete' });
        this.searchInput= page.getByRole('searchbox', { name: 'search' });}

    async deletePayee(payeeAccountNumber: string) {
        await this.searchInput.fill(payeeAccountNumber);
       await this.delete.click();
       return this;
    }

    async navigateToUserTransferAmountPage(payeeAccountNumber:string) {
        await this.searchInput.fill(payeeAccountNumber)
        await this.transferAmountLink.click();
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
