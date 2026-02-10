import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CashierAccountHoldersPage extends BasePage{
    
    readonly firstAccountNumber: Locator;
    readonly firstAccountHolderName: Locator;

    constructor(page:Page){
        super(page);
        // Assuming the first row in the account holders table
        
        this.firstAccountNumber = page.locator('table tbody tr:first-child td:nth-child(5)'); // Adjust selector as needed
        this.firstAccountHolderName = page.locator('table tbody tr:first-child td:nth-child(2)'); // Adjust selector as needed
    }

    async getFirstAccountNumber(): Promise<string> {
        return await this.firstAccountNumber.textContent() || '';
    }

    async getFirstAccountHolderName(): Promise<string> {
        return await this.firstAccountHolderName.textContent() || '';
    }

    async getAllAccountHolders(): Promise<{ name: string; accountNumber: string }[]> {
        const rows = this.page.locator('table tbody tr');
        const count = await rows.count();
        const holders: { name: string; accountNumber: string }[] = [];
        for (let i = 0; i < count; i++) {
            const name = await rows.nth(i).locator('td:nth-child(2)').textContent();
            const accountNumber = await rows.nth(i).locator('td:nth-child(5)').textContent();
            if (name && accountNumber) {
                holders.push({ name: name.trim(), accountNumber: accountNumber.trim() });
            }
        }
        return holders;
    }

    async goToNextPageIfExists(): Promise<boolean> {
    const nextBtn = this.page.locator('a:has-text("Next")');

    if (await nextBtn.isVisible() && await nextBtn.isEnabled()) {
        await nextBtn.click();
        await this.page.waitForLoadState("networkidle");
        return true;
    }
    return false;
}
}