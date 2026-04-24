import { BasePage } from "./BasePage";
import { Locator, Page } from '@playwright/test';




export class CashierProfilePage extends BasePage {
    readonly cashierFirstNameTextFld: Locator;
    readonly cashierLastNameTextFld: Locator;
    readonly cashierAddressTextFld: Locator;
    readonly cashierUpdateBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.cashierFirstNameTextFld = page.locator('input[name="fname"]');
        this.cashierLastNameTextFld = page.locator('input[name="lname"]');
        this.cashierAddressTextFld = page.locator('input[name="address"]');
        this.cashierUpdateBtn = page.locator('button').filter({ hasText: 'Update' });
    }

    async enterCashierFirstName(cashierFirstName: string) {
        await this.cashierFirstNameTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierFirstNameTextFld.fill(cashierFirstName);
    }

    async enterCashierLastName(cashierLastName: string) {
        await this.cashierLastNameTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierLastNameTextFld.fill(cashierLastName);
    }

    async enterCashierAddress(cashierAddress: string) {
        await this.cashierAddressTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierAddressTextFld.fill(cashierAddress);
    }

        async clickOnCashierUpdateBtn() {   
        await this.cashierUpdateBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierUpdateBtn.click();
    }

    async cashierProfileUpdate(cashierFirstName: string, cashierLastName: string, cashierAddress: string) {
        await this.enterCashierFirstName(cashierFirstName);
        await this.enterCashierLastName(cashierLastName);
        await this.enterCashierAddress(cashierAddress);
        await this.clickOnCashierUpdateBtn();
        return this;
    }
}