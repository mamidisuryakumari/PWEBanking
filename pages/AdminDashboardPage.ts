import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';
import { AdminNewAccountOpeningRequestPage } from './AdminNewAccontOpeningRequestPage';

export class AdminDashboardPage extends BasePage{
 readonly accountApproveMenu;
 readonly newRequestLink;
 readonly accountHolderLink;
    
 constructor(page:Page){
        super(page);
        this.accountApproveMenu = page.getByText("Account Approval");
        this.newRequestLink = page.getByText("New Request");
        this.accountHolderLink = page.getByText("Account Holders");
    }

    async navigateToNewAccountOpeningRequestsPage(){
        await this.accountApproveMenu.click();
        await this.newRequestLink.click();
        return new AdminNewAccountOpeningRequestPage(this.page)
    }

    async navigateToAccountHoldersPage(){
        await this.accountApproveMenu.click();

}
}