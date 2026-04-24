
import { AdminAccountHolderDetailsPage } from "./AdminAccountHolderDetailspage";
import { BasePage, } from "../BasePage";
import { Page , expect} from '@playwright/test';

export class AdminNewAccountOpeningRequestPage extends BasePage {

    readonly searchTextFld;
    readonly viewLink;

    constructor(page: Page) {
        super(page);
        this.searchTextFld = page.locator("input[type='search']");
        this.viewLink = page.locator('a').filter({ hasText: 'View ' }).first();
    }

    async expectAdminNewAccountOpeningRequestPageTitle(expectedTitle: string) {
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async enterSearchText(searchText: string) {
        await this.searchTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.searchTextFld.fill(searchText);
    }

    async clickOnViewLink() {   
        await this.viewLink.waitFor({ state: 'visible', timeout: 10_000 });
        await this.viewLink.click();
    }

    async searchUserAccount() {
        const userRequestNames = await this.page
            .locator("table#dataTable tbody tr td:nth-child(2)")
            .allInnerTexts();
        if (userRequestNames.length === 0) {
            console.warn("No user account records available");
            return null;
        }
        for (const userRequestname of userRequestNames) {
            const name = userRequestname.trim();
            console.log(`Searching for: ${name}`);
            await this.clickOnViewLink();
            break;
        }
        return new AdminAccountHolderDetailsPage(this.page);
    }

}