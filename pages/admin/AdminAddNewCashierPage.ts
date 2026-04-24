import { th } from "@faker-js/faker/.";
import { BasePage } from "../BasePage";
import { Page, Locator, expect } from "@playwright/test";
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
        this.cashierAddBtnFld = page.locator('button').filter({ hasText: 'Add' });

        this.cashierMenu = page.locator('span').filter({ hasText: "Cashier" });
        this.manageCashierLink = page.locator('a').filter({ hasText: 'Manage Cashier' });
    }

    async expectAdminAddNewCashierPageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async enterCashierFirstName(cashierFirstName: string) {
        await this.cashierFirstNameTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierFirstNameTextFld.fill(cashierFirstName);
    }

    async enterCashierLastName(cashierLastName: string) {
        await this.cashierLastNameTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierLastNameTextFld.fill(cashierLastName);
    }

    async enterCashierMobileNumber(cashierMobileNumber: string) {
        await this.cashierMobileNumberTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierMobileNumberTextFld.fill(cashierMobileNumber);
    }

    async enterCashierEmailId(cashierEmailId: string) {
        await this.cashierEmailTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierEmailTextFld.fill(cashierEmailId);
    }

    async selectCashierGender(cashierGender: string) {
        await this.cashierGenderDropdown.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierGenderDropdown.selectOption(cashierGender);
    }

    async enterCashierDob(cashierDob: string) {
        await this.cashierDobFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierDobFld.fill(cashierDob);
    }

    async enterCashierEmployeeId(cashierEmployeeId: string) {
        await this.cashierEmployeeIdTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierEmployeeIdTextFld.fill(cashierEmployeeId);
    }

    async enterCashierAddress(cashierAddress: string) {
        await this.cashierAddressTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierAddressTextFld.fill(cashierAddress);
    }

    async enterCashierPassword(cashierPassword: string) {
        await this.cashierPasswordTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierPasswordTextFld.fill(cashierPassword);
    }

    async clickOnCashierAddBtn() {
        await this.cashierAddBtnFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierAddBtnFld.click();
    }

    async clickOnCashierMenu() {
        await this.cashierMenu.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierMenu.click();
    }

    async clickOnManageCashierLink() {
        await this.manageCashierLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.manageCashierLink.click();
    }

    async addCashier(cashierFirstName: string, cashierLastName: string,
        cashierMobileNumber: string, cashierEmailId: string, cashierGender: string,
        cashierDob: string, cashierEmployeeId: string, cashierAddress: string, cashierPassword: string) {
        await this.enterCashierFirstName(cashierFirstName);
        await this.enterCashierLastName(cashierLastName);
        await this.enterCashierMobileNumber(cashierMobileNumber);
        await this.enterCashierEmailId(cashierEmailId);
        await this.selectCashierGender(cashierGender);
        await this.enterCashierDob(cashierDob);
        await this.enterCashierEmployeeId(cashierEmployeeId);
        await this.enterCashierAddress(cashierAddress);
        await this.enterCashierPassword(cashierPassword);
        await this.clickOnCashierAddBtn();
        return this;
    }

    async navigateToCashierDetailsPage() {
        await this.clickOnCashierMenu();
        await this.clickOnManageCashierLink();
        return new CashierDetailsPage(this.page);
    }
}