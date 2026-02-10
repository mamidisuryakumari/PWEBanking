import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class UserDashBoardPage extends BasePage {

  readonly newUserText: Locator;
  readonly accountOpeningMenu: Locator;
  readonly addPayeeMenu: Locator;
  readonly addPayeeLink: Locator;
  
  constructor(page: Page) {
    super(page);
    this.newUserText = page.locator("div[class='alert alert-danger']");
    this.accountOpeningMenu = page.getByText("Account Openning");
    this.addPayeeMenu = page.getByText("Payee / Beneficiary");
    this.addPayeeLink = page.getByRole('link', { name: 'Add' });
  }



  async getNewUserAccountText(){
    return this.newUserText.innerText();
  }

  async clickOnAccountOpeningMenu(){
   await this.accountOpeningMenu.click();
  }

  async navigateToAddPayeePage(){
    await this.addPayeeMenu.click();
    await this.addPayeeLink;
    
  }
  
}