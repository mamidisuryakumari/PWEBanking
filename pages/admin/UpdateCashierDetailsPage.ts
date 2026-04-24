import { expect, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { Locator } from "@playwright/test";
import { e } from "@faker-js/faker/dist/airline-Dz1uGqgJ";

export class UpdateCashierDetailsPage extends BasePage {
    private readonly cashierLastNameFld: Locator;
    private readonly cashierAddressFld: Locator;
    private readonly cashierUpdateBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.cashierLastNameFld = page.locator('[name="lname"]');
        this.cashierAddressFld = page.locator('input[name="address"]');
        this.cashierUpdateBtn = page.locator('button').filter({ hasText: 'Update' });
    }

    async expectUpdateCashierDetailsPageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async enterCashierLastName(cashierLastName: string) {
        await this.cashierLastNameFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierLastNameFld.fill(cashierLastName);
    }

    async enterCashierAddress(cashierAddress: string) {
        await this.cashierAddressFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierAddressFld.fill(cashierAddress);
    }

    async clickOnCashierUpdateBtn() {
        await this.cashierUpdateBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierUpdateBtn.click();
    }

    async updateCashierDetails(cashierLastName: string, cashierAddress: string) {
        await this.enterCashierLastName(cashierLastName);
        await this.enterCashierAddress(cashierAddress);
        await this.clickOnCashierUpdateBtn();
        return this;
    }
}