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
        this.cashierUpdateBtn = page.getByRole("button", { name: 'Update' });
    }

    async cashierProfileUpdate(cashierFirstName: string, cashierLastName: string, cashierAddress: string) {
        await this.cashierFirstNameTextFld.fill(cashierFirstName);
        await this.cashierLastNameTextFld.fill(cashierLastName);
        await this.cashierAddressTextFld.fill(cashierAddress);
        await this.cashierUpdateBtn.click();
        return this;
    }
}