import { Locator, Page ,expect} from "@playwright/test";
import { BasePage } from "./BasePage";
import { CashierAccountHoldersPage } from "./CashierAccountHoldersPage";
import { TransactionTye } from "../enum/StatusEnum";

export class CashierUserDetailsPage extends BasePage {

    readonly depositBtn: Locator;
    readonly withdrawBtn: Locator;
    readonly amountTextFld: Locator;
    readonly withdrawAmountFld: Locator;
    readonly updateBtnFld: Locator;
    readonly transactionTypeDropdown: Locator;
    readonly withdrawUpdateBtnFld: Locator;

    constructor(page: Page) {
        super(page);
        this.depositBtn = page.locator('button').filter({ hasText: 'Deposit' }).first();
        this.withdrawBtn = page.locator('button').filter({ hasText: 'Withdraw' }).first();
        this.amountTextFld = page.locator("#myModal input[name='amount']");
        this.withdrawAmountFld = page.locator("#myModal1 input[name='amount']");
        this.updateBtnFld = page.locator('button').filter({hasText:'Update'}).first();
        this.withdrawUpdateBtnFld = page.locator('button').filter({hasText:'Update'}).nth(1);
        this.transactionTypeDropdown = page.locator("select[name='ttype']");
    }

    async expectCashierUserDetailsPageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async clickOnDepositBtn() {
        await this.depositBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.depositBtn.click();
    }

    async clickOnWithdrawBtn() {
        await this.withdrawBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.withdrawBtn.click();
    }

    async enterDepositAmount(depositeAmount: string) {
        await this.amountTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.amountTextFld.fill(depositeAmount);
    }

    async enterWithdrawAmount(withdrawAmount: string) {
        await this.withdrawAmountFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.withdrawAmountFld.fill(withdrawAmount);
    }

    async selectTransactionType(cashTransactionType: string) {
        await this.transactionTypeDropdown.waitFor({ state: 'visible', timeout: 10_000 });
        await this.transactionTypeDropdown.selectOption(cashTransactionType);
    }

    async clickOnUpdateBtn() {
        await this.updateBtnFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.updateBtnFld.click();
    }

    async clickOnWithdrawUpdateBtn() {
        await this.withdrawUpdateBtnFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.withdrawUpdateBtnFld.click();
    }

    async amountIsDepositedToUser(depositeAmount: string, cashTransactionType: string) {
        await this.clickOnDepositBtn();
        await this.enterDepositAmount(depositeAmount);
        await this.selectTransactionType(cashTransactionType);
        await this.clickOnUpdateBtn();
    }

    async amountIsWithdrawFromUSerAccount(withdrawAmount: string) {
        await this.clickOnWithdrawBtn();
        await this.enterWithdrawAmount(withdrawAmount);
        await this.clickOnWithdrawUpdateBtn();
    }

    async calculateUserAccountBalance() {
        let balance = 0;
        const rows = this.page.locator("table[id='datatable'] tbody tr");
        await rows.first().waitFor();
        const rowsCount = await rows.count();
        for (let i = 0; i < rowsCount; i++) {
            const depositAmountText = (await (rows.nth(i).locator("td:nth-child(3)").innerText())).trim();
            const withdrawAmountText = (await (rows.nth(i).locator("td:nth-child(4)").innerText())).trim();
            const statusText = (await rows.nth(i).locator("td:nth-child(5)").innerText()).trim();

            const depositAmount = parseFloat(depositAmountText);
            const withdrawAmount = parseFloat(withdrawAmountText);
            if (statusText === TransactionTye.CREDIT) {
                balance += depositAmount;
            } else {
                balance += withdrawAmount;
            }
        }
        console.log('Balance is' + balance);
        return balance;

    }

}