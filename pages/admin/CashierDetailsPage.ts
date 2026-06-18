import { BasePage } from "../BasePage";
import { Locator, Page, expect } from "@playwright/test";
import { UpdateCashierDetailsPage } from "./UpdateCashierDetailsPage";

export class CashierDetailsPage extends BasePage {
    private readonly cashierSearchFld: Locator;
    private readonly cashierDeleteFld: Locator;
    private readonly cashierEditLink: Locator;

    constructor(page: Page) {
        super(page);
        this.cashierSearchFld = page.locator("input[type='search']");
        this.cashierDeleteFld = page.locator('a').filter({ hasText: 'Delete' });
        this.cashierEditLink =page.locator('a').filter({ hasText: 'Edit' }).first();
    }

        async expectCashierDetailsPageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async enterCashierEmployeeId(cashierEmployeeId: string) {
        await this.cashierSearchFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierSearchFld.fill(cashierEmployeeId);
    }

    async clickOnCashierDelete() {
        await this.cashierDeleteFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierDeleteFld.click();
    }

    async clickOnCashierEditLink() {
        await this.cashierEditLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierEditLink.click();
    }

    async searchEmployeeId(cashierEmployeeId: string) {
        await this.enterCashierEmployeeId(cashierEmployeeId);
        return this;
    }

    async deleteEmployeeId() {
        await this.clickOnCashierDelete();
        return this;
    }

    async navigateToupdateCashierDetailsPage() {
        await this.clickOnCashierEditLink();
        return new UpdateCashierDetailsPage(this.page);
    }
}