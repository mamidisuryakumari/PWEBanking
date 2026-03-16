import { Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { Locator } from "@playwright/test";

export class UpdateCashierDetailsPage extends BasePage {
    private readonly cashierLastNameFld: Locator;
    private readonly cashierAddressFld: Locator;
    private readonly cashierUpdateBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.cashierLastNameFld = page.locator('[name="lname"]');
        this.cashierAddressFld = page.locator('input[name="address"]');
        this.cashierUpdateBtn = page.getByRole("button" , {name:'Update'});
    }

    async updateCashierDetails(cashierLastName: string, cashierAddress: string) {
        await this.cashierLastNameFld.fill(cashierLastName);
        await this.cashierAddressFld.fill(cashierAddress);
        await this.cashierUpdateBtn.click();
        return this;
    }
}