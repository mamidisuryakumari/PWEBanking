import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { AdminDashboardPage } from "./AdminDashboardPage";

export class AdminLoginPage extends BasePage {

    readonly adminEmail:Locator;
    readonly adminPassword:Locator;
    readonly loginBtn :Locator;

    constructor(page: Page) {
        super(page);
        this.adminEmail = page.getByRole("textbox", {name:'email'});
        this.adminPassword = page.getByRole("textbox",{name:'password'});
        this.loginBtn = page.getByRole("button",{name:'Login'});
    }

    async adminLogin(adminEmail:string,adminPassword:string){
        await this.adminEmail.fill(adminEmail);
        await this.adminPassword.fill(adminPassword);
        await this.loginBtn.click();
        return new AdminDashboardPage(this.page);
    }

}