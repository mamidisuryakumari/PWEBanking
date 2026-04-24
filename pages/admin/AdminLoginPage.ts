import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "../BasePage";
import { AdminDashboardPage } from "./AdminDashboardPage";
import { en } from "@faker-js/faker/.";

export class AdminLoginPage extends BasePage {

    readonly adminEmail: Locator;
    readonly adminPassword: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.adminEmail = page.locator("#email");
        this.adminPassword = page.locator("#password");
        this.loginBtn = page.locator('button').filter({ hasText: 'Login' });
        //  this.loginBtn = page.getByRole("button",{name:'Login'});
    }

    async expectAdminLoginPageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        const actualTitle = await this.page.title();
        expect(actualTitle).toBe(expectedTitle);
    }
    
    async enterAdminEmail(adminEmail: string) {
        await this.adminEmail.waitFor({ state: 'visible', timeout: 10_000 });
        await this.adminEmail.fill(adminEmail);
    }

    async enterAdminPassword(adminPassword: string) {
        await this.adminPassword.waitFor({ state: 'visible', timeout: 10_000 });
        await this.adminPassword.fill(adminPassword);
    }

    async clickLoginBtn() {
        await this.loginBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.loginBtn.click();
    }

    async adminLogin(adminEmail: string, adminPassword: string) {
        await this.enterAdminEmail(adminEmail);
        await this.enterAdminPassword(adminPassword);
        await this.clickLoginBtn();
        return new AdminDashboardPage(this.page);
    }

}