import { th } from "@faker-js/faker/.";
import { BasePage } from "../BasePage";
import { Page, Locator } from "@playwright/test";
import { CashierDetailsPage } from "./CashierDetailsPage";

export class AdminAddNewCashierPage extends BasePage {
    private readonly cashierFirstNameTextFld: Locator;
    private readonly cashierLastNameTextFld: Locator;
    private readonly cashierMobileNumberTextFld: Locator;
    private readonly cashierEmailTextFld: Locator;
    private readonly cashierGenderDropdown: Locator;
    private readonly cashierDobFld: Locator;
    private readonly cashierEmployeeIdTextFld: Locator;
    private readonly cashierAddressTextFld: Locator;
    private readonly cashierPasswordTextFld: Locator;
    private readonly cashierAddBtnFld: Locator;
    private readonly cashierMenu: Locator;
    private readonly manageCashierLink: Locator;

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

        this.cashierMenu = page.getByText("Cashier", { exact: true });
        this.manageCashierLink = page.getByRole("link", { name: 'Manage Cashier' });
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

    async navigateToCashierDetailsPage() {
        await this.cashierMenu.click();
        await this.manageCashierLink.click();
        return new CashierDetailsPage(this.page);
    }
}