import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class CashierDashBoardPage extends BasePage {
    readonly accountHolderMenu;

    constructor(page:Page) {
        super(page);
        this.accountHolderMenu = page.getByText("Account Holders");
    }   
    
    async navigateToAccountHoldersPage(){
        await this.accountHolderMenu.click();
    }
}