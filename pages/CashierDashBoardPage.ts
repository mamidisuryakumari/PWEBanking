import { Locator, Page ,expect} from "@playwright/test";
import { BasePage } from "./BasePage";
import { CashierAccountHoldersPage } from "./CashierAccountHoldersPage";
import { CashierTransactionReportPage } from "./CashierTransactionReportPage";
import { CashierProfilePage } from "./CashierProfilePage";


export class CashierDashBoardPage extends BasePage {
    readonly accountHolderMenu: Locator;
    readonly reportMenu: Locator;
    readonly transactionHistoryMenu: Locator;
    readonly cashierMenu: Locator;
    readonly cashierProfileMenu: Locator;
    readonly cashierLogoutLink: Locator;
    readonly modalTextMsg: Locator;
    readonly logoutLink: Locator;
    constructor(page: Page) {
        super(page);
        this.accountHolderMenu = page.locator('span').filter({ hasText: " Account Holders" });
        this.reportMenu = page.locator('span').filter({ hasText: "Report" });
        this.transactionHistoryMenu = page.locator('a').filter({ hasText: "Txn History Report" }); 
        this.cashierMenu = page.locator("img[class='img-profile rounded-circle']");
        this.cashierProfileMenu = page.locator('a').filter({ hasText: "Profile" });
        this.cashierLogoutLink = page.locator('a').filter({ hasText: 'Logout' }).first();
        this.modalTextMsg = page.locator("div[class='modal-body']");
        this.logoutLink = page.locator('a').filter({ hasText: 'Logout' }).last();
    }

    async expectCashierDashBoardPageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async clickOnAccountHolderMenu() {
        await this.accountHolderMenu.waitFor({ state: 'visible', timeout: 10_000 });
        await this.accountHolderMenu.click();
    }

    async clickOnReportMenu() {
        await this.reportMenu.waitFor({ state: 'visible', timeout: 10_000 });
        await this.reportMenu.click();
    }

    async clickOnTransactionHistoryMenu() {
        await this.transactionHistoryMenu.waitFor({ state: 'visible', timeout: 10_000 });
        await this.transactionHistoryMenu.click();
    }

        async clickOnCashierMenu() {
        await this.cashierMenu.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierMenu.click();
    }
        async clickOnCashierProfileMenu() {
        await this.cashierProfileMenu.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierProfileMenu.click();
    }

    async clickOnCashierLogoutLink() {
        await this.cashierLogoutLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.cashierLogoutLink.click();
    }

    async clickOnLogoutLink() {
        await this.logoutLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.logoutLink.click();
    }

    async navigateToAccountHoldersPage() {
        await this.clickOnAccountHolderMenu();
    }

    async navigateToCashierTransactionReportPage() {
        await this.clickOnReportMenu();
        await this.clickOnTransactionHistoryMenu();
        return new CashierTransactionReportPage(this.page);
    }
    async navigateToCashierProfilePage() {
        await this.clickOnCashierMenu();
        await this.clickOnCashierProfileMenu();
        return new CashierProfilePage(this.page);
    }

    async cashierLogout() {
        await this.clickOnCashierMenu();
        await this.clickOnCashierLogoutLink();
    }

    async getModalText() {
        const message = await this.modalTextMsg.textContent();
        return message;
    }

    async clickModalLogoutLink() {
        await this.clickOnLogoutLink();
    }

}