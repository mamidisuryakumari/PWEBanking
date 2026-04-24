import { BasePage } from "./BasePage";
import { Page,expect } from '@playwright/test';

export class CashhierLoginPage extends BasePage {

    readonly cashierEmailFld;
    readonly cashierPasswordFld;
    readonly loginBtn;
    constructor(page:Page) {
        super(page);
        this.cashierEmailFld = page.locator("#empid");
        this.cashierPasswordFld = page.locator("#password");
        this.loginBtn = page.locator('button').filter({hasText:'Login'});
    }

    async expectLoginPageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async enterCashierEmail(cashierEmail:string){   
        await this.cashierEmailFld.fill(cashierEmail);
    }

    async enterCashierPassword(cashierPassword:string){
        await this.cashierPasswordFld.fill(cashierPassword);
    }

    async clickLoginBtn(){
        await this.loginBtn.click();
    }

    async cashierLogin(cashierEmail:string,cashierPassword:string){
       await this.enterCashierEmail(cashierEmail);
       await this.enterCashierPassword(cashierPassword);
       await this.clickLoginBtn(); 
    }

}