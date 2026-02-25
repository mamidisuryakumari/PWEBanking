import { Locator, Page } from "@playwright/test";
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

    constructor(page: Page) {
        super(page);
        this.depositBtn = page.getByRole('button', { name: 'Deposit' });
        this.withdrawBtn = page.getByRole('button', { name: 'Withdraw' });
        this.amountTextFld = page.locator("#myModal input[name='amount']");
        this.withdrawAmountFld = page.getByPlaceholder('Amount').last();
        this.updateBtnFld = page.getByRole('button', { name: 'Update' });
        this.transactionTypeDropdown = page.locator("select[name='ttype']");
    }

    async amountIsDepositedToUser(depositeAmount: string, cashTransactionType: string) {
        await this.depositBtn.click();
        await this.amountTextFld.fill(depositeAmount);
        await this.transactionTypeDropdown.selectOption(cashTransactionType);
        await this.updateBtnFld.click();
    }

    async amountIsWithdrawFromUSerAccount(withdrawAmount: string) {
        await this.withdrawBtn.click();
        await this.withdrawAmountFld.fill(withdrawAmount);
        await this.updateBtnFld.click();
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