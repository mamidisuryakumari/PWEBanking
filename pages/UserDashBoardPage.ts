import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserAddPayeePage } from './UserAddPayeePage';
import { UserManagePayeePage } from './UserManagePayeePage';
import { UserProfilePage } from './UserProfilePage';


export class UserDashBoardPage extends BasePage {

  readonly newUserText: Locator;
  readonly accountOpeningMenu: Locator;
  readonly addPayeeMenu: Locator;
  readonly addPayeeLink: Locator;
  readonly userProfileMenu: Locator;
  readonly userProfileLink;
  readonly logoutLink: Locator;
  readonly logoutLink1:Locator;
  readonly managePayeeMenu: Locator;
  readonly modalTextMsg;
  readonly changePasswordLink:Locator;
  
  constructor(page: Page) {
    super(page);
    this.newUserText = page.locator("div[class='alert alert-danger']");
    this.accountOpeningMenu = page.getByText("Account Openning");
    this.addPayeeMenu = page.getByText("Payee / Beneficiary");
    this.addPayeeLink = page.getByRole('link', { name: 'Add' });
    this.userProfileMenu = page.getByText("Automation User");
    this.userProfileLink = page.getByRole('link', {name:"Profile"});
    this.logoutLink =page.getByRole('link', { name: 'Logout' }).first();
    this.logoutLink1 =page.getByRole('link', { name: 'Logout' }).last();
    this.changePasswordLink = page.getByRole('link',{name: 'Change Password'})
    this.managePayeeMenu = page.getByRole('link', {name:'Manage'});
    this.modalTextMsg = page.getByText('Select "Logout" below if you are ready to end your current session.');
  }

async navigateToUserProfilePage(){
  await this.userProfileMenu.click();
  await this.userProfileLink.click();
  return new UserProfilePage(this.page);
}

  async getNewUserAccountText(){
    return this.newUserText.innerText();
  }

  async clickOnAccountOpeningMenu(){
   await this.accountOpeningMenu.click();
  }

  async navigateToAddPayeePage(){
    await this.addPayeeMenu.click();
    await this.addPayeeLink.click();
     return new UserAddPayeePage(this.page);
    }
   

  async navigateToManagePayeePage(){
    await this.addPayeeMenu.click();
    await this.managePayeeMenu.click();
      return new UserManagePayeePage(this.page);
  }

  async getModalText(){
    const message = await this.modalTextMsg.textContent();
    return message;
   }
  
  async userLogout(){
    await this.userProfileMenu.click();
    await this.logoutLink.click();
    return this;
  }

  async clickModalLogoutLink(){
    await this.logoutLink1.click();
  }
}