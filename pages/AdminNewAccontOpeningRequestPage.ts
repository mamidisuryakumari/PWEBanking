import { AdminTestData } from "../test-data/AdminTestData";
import { AdminAccountHolderDetailsPage } from "./AdminAccountHolderDetailspage";
import { BasePage } from "./BasePage";
import { Page } from '@playwright/test';

export class AdminNewAccountOpeningRequestPage extends BasePage {

    readonly searchTextFld;
    readonly viewLink;



    constructor(page: Page) {
        super(page);
        this.searchTextFld = page.getByRole("searchbox", { name: 'search' });
        this.viewLink = page.getByRole("link", { name: 'View' });

    }

    async navigateToAdminAccountHolderDetailsPage() {
      //  await ElementUtils.enterText(this.searchTextFld, AdminTestData.newUserAccountRequestName);


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
         //   await ElementUtils.enterText(this.searchTextFld, name);
          //  await ElementUtils.clickElement(this.viewLink);
            
            break;
        } 
        return new AdminAccountHolderDetailsPage(this.page);
    }


}