import { BasePage } from "../BasePage";
import { Locator, Page } from "@playwright/test";
import { UpdateCashierDetailsPage } from "./UpdateCashierDetailsPage";

export class CashierDetailsPage extends BasePage {
    private readonly cashierSearchFld: Locator;
    private readonly cashierDeleteFld: Locator;
    private readonly cashierEditLink: Locator;

    constructor(page: Page) {
        super(page);
        this.cashierSearchFld = page.getByLabel('Search:');
        this.cashierDeleteFld = page.getByRole('link', { name: 'Delete' });
        this.cashierEditLink =page.locator('a').filter({ hasText: 'Edit' }).first();
    }

    async deleteEmployeeId(cashierEmployeeId: string) {
        await this.cashierSearchFld.fill(cashierEmployeeId);
        await this.cashierDeleteFld.click();
        return this;
    }

    async navigateToupdateCashierDetailsPage() {
        await this.cashierEditLink.click();
        return new UpdateCashierDetailsPage(this.page);
    }
}