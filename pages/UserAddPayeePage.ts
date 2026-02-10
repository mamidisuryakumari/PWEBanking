import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class UserAddPayeePage extends BasePage {

    readonly accountNumberTextFld: Locator;
    readonly confirmAccountNumberTextFld: Locator;
    readonly payeeNameTextFld: Locator;
    readonly submitBtn: Locator;
    constructor(page: Page) {
        super(page);
        this.accountNumberTextFld = page.locator("#accountnumber");
        this.confirmAccountNumberTextFld = page.locator("#conaccountnumber");
        this.payeeNameTextFld = page.locator("#acountholdername");
        this.submitBtn = page.getByText("Submit");
    }

    async addPayee(accountNumber: string, payeeName: string) {
      
        await this.accountNumberTextFld.fill(accountNumber);
        await this.confirmAccountNumberTextFld.fill(accountNumber);
        await this.payeeNameTextFld.fill(payeeName);
         await this.page.waitForTimeout(2000);
        await this.submitBtn.click();
       
    }
}

