import { th } from "@faker-js/faker/.";
import { BasePage } from "./BasePage";
import { Page, Locator } from "@playwright/test";

export class AdminAddNewCashierPage extends BasePage {
    readonly cashierFirstNameTextFld: Locator;
    readonly cashierLastNameTextFld: Locator;
    readonly cashierMobileNumberTextFld: Locator;
    readonly cashierEmailTextFld: Locator;
    readonly cashierGenderDropdown: Locator;
    readonly cashierDobFld: Locator;
    readonly cashierEmployeeIdTextFld: Locator;
    readonly cashierAddressTextFld: Locator;
    readonly cashierPasswordTextFld: Locator;
    readonly cashierAddBtnFld: Locator;

    constructor(page: Page) {
        super(page);
        this.cashierFirstNameTextFld = page.locator("input[name='fname']");
        this.cashierLastNameTextFld = page.locator("input[name='lname']");
        this.cashierMobileNumberTextFld = page.locator("input[name='mobnum']");
        this.cashierEmailTextFld = page.locator("input[name='email']");
        this.cashierGenderDropdown = page.locator("select[name='gender']");
        this.cashierDobFld = page.locator("input[name='dob']")
        this.cashierEmployeeIdTextFld = page.locator("input[name='empid']");
        this.cashierAddressTextFld = page.locator('[name="address"]');
        this.cashierPasswordTextFld = page.locator('input[name="password"]');
        this.cashierAddBtnFld = page.getByRole("button", { name: 'Add' });
    }

    async addCashier(cashierFirstName: string, cashierLastName: string,
        cashierMobileNumber: string, cashierEmailId: string, cashierGender: string,
        cashierDob: string, cashierEmployeeId: string, cashierAddress: string, cashierPassword: string) {
        await this.cashierFirstNameTextFld.fill(cashierFirstName);
        await this.cashierLastNameTextFld.fill(cashierLastName);
        await this.cashierMobileNumberTextFld.fill(cashierMobileNumber);
        await this.cashierEmailTextFld.fill(cashierEmailId);
        await this.cashierGenderDropdown.selectOption(cashierGender);
        await this.cashierDobFld.fill(cashierDob);
        await this.cashierEmployeeIdTextFld.fill(cashierEmployeeId);
        await this.cashierAddressTextFld.fill(cashierAddress);
        await this.cashierPasswordTextFld.fill(cashierPassword);
        await this.cashierAddBtnFld.click();
        return this;
    }
}