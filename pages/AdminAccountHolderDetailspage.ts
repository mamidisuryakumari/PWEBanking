
import { AdminNewAccountOpeningRequestPage } from "./AdminNewAccontOpeningRequestPage";
import { BasePage } from "./BasePage";
import { Page } from '@playwright/test';

export class AdminAccountHolderDetailsPage extends BasePage {

    readonly takeActionBtn;
    readonly takeActionLabelText;
    readonly remarkTextFld;
    readonly statusDropdown;
    readonly updateBtn;
    readonly initialAmountTextFld;

    constructor(page: Page) {
        super(page);
        this.takeActionBtn = page.getByRole("button", { name: 'Take Action' });
        this.takeActionLabelText = page.getByText("Take Action");
        this.remarkTextFld = page.getByPlaceholder("Remark");
        this.statusDropdown = page.locator("#status");
        this.updateBtn = page.getByRole("button", { name: 'Update' });
        this.initialAmountTextFld = page.getByPlaceholder("Initial Amount");
    }


    async userAccountApproval(remark:string,initialAmount:string,approvedText:string):Promise<AdminNewAccountOpeningRequestPage> {
        await this.takeActionBtn.click();
        await this.remarkTextFld.fill(remark);
        await this.statusDropdown.fill(approvedText);
        await this.initialAmountTextFld.fill(initialAmount);
        await this.updateBtn.click();
        return new AdminNewAccountOpeningRequestPage(this.page);
    }

    async accountApprovedAcceptAlert(){
        await this.page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
    }


}