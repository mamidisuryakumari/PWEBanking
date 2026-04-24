
import { AdminNewAccountOpeningRequestPage } from "./AdminNewAccontOpeningRequestPage";
import { BasePage } from "../BasePage";
import { Page,expect } from '@playwright/test';

export class AdminAccountHolderDetailsPage extends BasePage {

    readonly takeActionBtn;
    readonly takeActionLabelText;
    readonly remarkTextFld;
    readonly statusDropdown;
    readonly updateBtn;
    readonly initialAmountTextFld;

    constructor(page: Page) {
        super(page);
        this.takeActionBtn = page.locator('button', { hasText: 'Take Action' });
        this.takeActionLabelText = page.locator('h5').filter({ hasText: 'Take Action' });
        this.remarkTextFld = page.locator("textarea[name='remark']");
        this.statusDropdown = page.locator("#status");
        this.updateBtn = page.locator('button', { hasText: 'Update' });
        this.initialAmountTextFld = page.locator("#iniamt");
    }

    async expectAdminAccountHolderDetailsPageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async clickOnTakeActionBtn() {
        await this.takeActionBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.takeActionBtn.click();
    }

    async enterRemark(remark: string) {
        await this.takeActionBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.remarkTextFld.fill(remark);
    }

    async selectStatus(status: string) {
        await this.takeActionBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.statusDropdown.selectOption(status);
    }

    async enterInitialAmount(initialAmount: string) {
        await this.takeActionBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.initialAmountTextFld.fill(initialAmount);
    }

    async clickOnUpdateBtn() {
        await this.takeActionBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.updateBtn.click();
    }

    async userAccountApproval(remark: string, initialAmount: string, approvedText: string): Promise<AdminNewAccountOpeningRequestPage> {
        await this.clickOnTakeActionBtn();
        await this.enterRemark(remark);
        await this.selectStatus(approvedText);
        await this.enterInitialAmount(initialAmount);
        await this.clickOnUpdateBtn();
        return new AdminNewAccountOpeningRequestPage(this.page);
    }

    async userAccountReject(remark: string, rejectedText: string) {
        await this.clickOnTakeActionBtn();
        await this.enterRemark(remark);
        await this.selectStatus(rejectedText);
        await this.clickOnUpdateBtn();
    }


}