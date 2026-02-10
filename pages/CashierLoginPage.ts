import { BasePage } from "./BasePage";
import { Page } from '@playwright/test';

export class CashhierLoginPage extends BasePage {

    readonly cashierEmailFld;
    readonly cashierPasswordFld;
    readonly loginBtn;
    constructor(page:Page) {
        super(page);
        this.cashierEmailFld = page.locator("#empid");
        this.cashierPasswordFld = page.locator("#password");
        this.loginBtn = page.getByRole("button", { name: 'Login' });
    }

    async cashierLogin(cashierEmail:string,cashierPassword:string){
       await this.cashierEmailFld.fill(cashierEmail);
       await this.cashierPasswordFld.fill(cashierPassword);
       await this.loginBtn.click();  
    }

}