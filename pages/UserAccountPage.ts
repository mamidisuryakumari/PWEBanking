import { Page, Locator } from '@playwright/test';
import { BasePage } from "./BasePage";
import { TestConfig } from '../test.config';
import path from 'path';


export class UserAccountPage extends BasePage {

     config = new TestConfig();

    readonly page: Page;
    readonly accountOpeningMenu: Locator;
    readonly addressProofDropDown: Locator;
    readonly addressProofIdNumberTextFld: Locator;
    readonly uploadAddressProof: Locator;
    readonly uploadPanCard: Locator;
    readonly pancardNumberTextFld: Locator;
    readonly addressTextFld: Locator;
    readonly dobfld: Locator;
    readonly acceptTermCheckbox: Locator;
    readonly submitBtn: Locator;

    readonly accountDetailsLabel: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;
        this.accountOpeningMenu = page.getByText("Account Openning");
        this.addressProofDropDown = page.locator("select[class='form-control']");
        this.addressProofIdNumberTextFld = page.locator("#addpidnum");
        this.uploadAddressProof = page.locator("#attaddproof");
        this.uploadPanCard = page.locator("#uplpancard")
        this.addressTextFld = page.locator("textarea[name='address']");
        this.pancardNumberTextFld = page.locator("#pancardnum");
        this.dobfld = page.locator("#dob");
        this.acceptTermCheckbox = page.locator("#tandc");
        this.submitBtn = page.locator("#submit");
        this.accountDetailsLabel = page.getByText("Account Details");

    }

    async clickOnAccountOpeningMenu():Promise<UserAccountPage>{
        await this.accountOpeningMenu.click();
        return new UserAccountPage(this.page);
    }


    async userAccountOpen(addressProofIdNumber: string, 
        userAadhaarCardImg:string,
        userPanCardImg:string,panCardNumber: string, address: string,
    dob:string
    ): Promise<UserAccountPage> {
        await this.addressProofDropDown.selectOption(this.config.selectAadhaarCard);
        await this.addressProofIdNumberTextFld.fill(addressProofIdNumber);
       await this.uploadAddressProof.setInputFiles(userAadhaarCardImg);
        await this.uploadPanCard.setInputFiles(userPanCardImg);
        await this.pancardNumberTextFld.fill(panCardNumber),
            await this.addressTextFld.fill(address),
            await this.dobfld.fill(dob);
            await this.acceptTermCheckbox.click(),
            await this.submitBtn.click();
        return this;
    }

    async userAccountOpenAcceptAlert(){
        await this.page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
    }



}