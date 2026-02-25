import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class UserTransferAmountPage extends BasePage {

    readonly amountTextFld:Locator;
    readonly submitBtn:Locator;

   constructor(page:Page){
    super(page);
    this.amountTextFld = page.getByPlaceholder("Amount");
    this.submitBtn = page.getByRole('button',{name: 'Submit'});
}

async transferAmountToPayee(amount:string){
await this.amountTextFld.fill(amount);
await this.submitBtn.click();
return this;
}

}