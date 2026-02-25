import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { TestContext } from './TestContext';
import { ne, th } from '@faker-js/faker/.';
import { CashierUserDetailsPage } from './CashierUserDetailsPage';

export class CashierAccountHoldersPage extends BasePage {

    readonly firstAccountNumber: Locator;
    readonly firstAccountHolderName: Locator;
    readonly searchTextFld: Locator;
    readonly viewLink:Locator;
   // readonly nextBtn: Locator;

    constructor(page: Page, private context: TestContext) {
        super(page);
        this.firstAccountNumber = page.locator('table tbody tr:first-child td:nth-child(5)');
        this.firstAccountHolderName = page.locator('table tbody tr:first-child td:nth-child(2)');
        this.viewLink = page.getByRole('link', {name: 'View'});
        this.searchTextFld = page.locator("input[type = 'search']");
      //  this.nextBtn = page.getByRole('button', { name: 'Next' });  
    }

    async navigateToCashierUserDetailsPage(accountNumber:string){
        await this.searchTextFld.fill(accountNumber);
        await this.viewLink.click();
        return new CashierUserDetailsPage(this.page);
    }

    async captureAccountHolderDetails() {
        const name = await this.firstAccountHolderName.textContent();
        const accountNumber = await this.firstAccountNumber.textContent();

        this.context.payeeAccountNumber = name ? name.trim() : '';
        console.log(`Captured Account Holder Name: ${this.context.payeeHolderName}`);
        this.context.payeeAccountNumber = accountNumber ? accountNumber.trim() : '';
        console.log(`Captured Account Number: ${this.context.payeeAccountNumber}`);
    }


   async getAllAccountHolders() {
    const users: { name: string, accNumber: string }[] = [];

    while (true) {

        const rows = this.page.locator("table tbody tr");
        await rows.first().waitFor();

        const count = await rows.count();

        for (let i = 0; i < count; i++) {
            const name = await rows.nth(i).locator("td:nth-child(2)").innerText();
            const accNumber = await rows.nth(i).locator("td:nth-child(5)").innerText();

            users.push({
                name: name.trim(),
                accNumber: accNumber.trim()
            });
        }

        const nextButtonContainer = this.page.locator('li#dataTable_next');
        const classValue = await nextButtonContainer.getAttribute('class');

        // If next is disabled → we are on last page
        if (classValue?.includes('disabled')) {
            break;
        }

        await nextButtonContainer.locator('a').click();
        await this.page.waitForSelector("table tbody tr");

        // Better wait than networkidle for pagination tables
        await this.page.waitForTimeout(1000);
    }

    console.log(users.length);
    return users;
}
}