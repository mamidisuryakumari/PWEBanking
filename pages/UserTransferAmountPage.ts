import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class UserTransferAmountPage extends BasePage {

    readonly amountTextFld:Locator;
    readonly submitBtn:Locator;

   constructor(page:Page){
    super(page);
    this.amountTextFld = page.locator("input[name='amount']");
    this.submitBtn = page.locator('button').filter({ hasText: 'Submit' });
}

async enterAmount(amount:string){
    await this.amountTextFld.waitFor({ state: 'visible', timeout: 10_000 });
    await this.amountTextFld.fill(amount);
}

async clickOnSubmit(){  
    await this.submitBtn.waitFor({ state: 'visible', timeout: 10_000 });
    await this.submitBtn.click();
}

async transferAmountToPayee(amount:string){
    await this.enterAmount(amount);
    await this.clickOnSubmit();
    return this;
}

}