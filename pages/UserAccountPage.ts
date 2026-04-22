import { Page, Locator, expect } from '@playwright/test';
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
        this.accountOpeningMenu = page.locator('span').filter({ hasText: 'Account Openning' });
        this.addressProofDropDown = page.locator("select[class='form-control']");
        this.addressProofIdNumberTextFld = page.locator("#addpidnum");
        this.uploadAddressProof = page.locator("#attaddproof");
        this.uploadPanCard = page.locator("#uplpancard")
        this.addressTextFld = page.locator("textarea[name='address']");
        this.pancardNumberTextFld = page.locator("#pancardnum");
        this.dobfld = page.locator("#dob");
        this.acceptTermCheckbox = page.locator("#tandc");
        this.submitBtn = page.locator("#submit");
        this.accountDetailsLabel = page.locator('h3').filter({ hasText: 'Account Details' });

    }

    async clickOnAccountOpeningMenu(): Promise<UserAccountPage> {
        await this.accountOpeningMenu.waitFor({ state: 'visible', timeout: 10_000 });
        await this.accountOpeningMenu.click();
        return new UserAccountPage(this.page);
    }

    async expectAccountOpenPageTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async selectAddressProofType(proofType: string) {
        await this.addressProofDropDown.waitFor({ state: 'visible', timeout: 10_000 });
        await this.addressProofDropDown.selectOption(proofType);
    }

    async enterAddressProofIdNumber(addressProofIdNumber: string) {
        await this.addressProofIdNumberTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.addressProofIdNumberTextFld.fill(addressProofIdNumber);
    }

    async uploadAddressProofFile(userAadhaarCardImg: string) {
        await this.uploadAddressProof.waitFor({ state: 'visible', timeout: 10_000 });
        await this.uploadAddressProof.setInputFiles(userAadhaarCardImg);
    }

    async uploadPanCardFile(userPanCardImg: string) {
        await this.uploadPanCard.waitFor({ state: 'visible', timeout: 10_000 });
        await this.uploadPanCard.setInputFiles(userPanCardImg);
    }

    async enterPanCardNumber(panCardNumber: string) {
        await this.pancardNumberTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.pancardNumberTextFld.fill(panCardNumber);
    }

    async enterAddress(address: string) {
        await this.addressTextFld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.addressTextFld.fill(address);
    }

    async enterDob(dob: string) {
        await this.dobfld.waitFor({ state: 'visible', timeout: 10_000 });
        await this.dobfld.fill(dob);
    }

    async clickOnAcceptTerms() {
        await this.acceptTermCheckbox.waitFor({ state: 'visible', timeout: 10_000 });
        await this.acceptTermCheckbox.click();
    }
    async clickOnSubmit() {
        await this.submitBtn.waitFor({ state: 'visible', timeout: 10_000 });
        await this.submitBtn.click();
    }

    async userAccountOpen(aadhaarCard: string, addressProofIdNumber: string,
        userAadhaarCardImg: string,
        userPanCardImg: string, panCardNumber: string, address: string,
        dob: string
    ): Promise<UserAccountPage> {
        await this.selectAddressProofType(aadhaarCard);
        await this.enterAddressProofIdNumber(addressProofIdNumber);
        await this.uploadAddressProofFile(userAadhaarCardImg);
        await this.uploadPanCardFile(userPanCardImg);
        await this.enterPanCardNumber(panCardNumber);
        await this.enterAddress(address);
        await this.enterDob(dob);
        await this.clickOnAcceptTerms();
        await this.clickOnSubmit();
        return this;
    }

    async userAccountOpenAcceptAlert() {
        await this.page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
    }

    async expectAccountDetailsText(expectedText: string) {
        await this.accountDetailsLabel.waitFor({ state: 'visible', timeout: 10_000 });
        await expect(this.accountDetailsLabel).toHaveText(expectedText);
    }



}