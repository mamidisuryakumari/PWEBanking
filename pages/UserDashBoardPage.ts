import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserAddPayeePage } from './UserAddPayeePage';
import { UserManagePayeePage } from './UserManagePayeePage';
import { UserProfilePage } from './UserProfilePage';
import { CashierProfilePage } from './CashierProfilePage';



export class UserDashBoardPage extends BasePage {

  readonly newUserText: Locator;
  readonly accountOpeningMenu: Locator;
  readonly addPayeeMenu: Locator;
  readonly addPayeeLink: Locator;
  readonly userProfileMenu: Locator;
  readonly userProfileLink;
  readonly logoutLink: Locator;
  readonly logoutLink1: Locator;
  readonly managePayeeMenu: Locator;
  readonly modalTextMsg;
  readonly changePasswordLink: Locator;
 
  constructor(page: Page) {
    super(page);
    this.newUserText = page.locator("div[class='alert alert-danger']");
    this.accountOpeningMenu = page.locator('span').filter({ hasText: 'Account Openning' });
    this.addPayeeMenu = page.locator('span').filter({ hasText: 'Payee / Beneficiary' });
    this.addPayeeLink = page.locator('a').filter({ hasText: 'Add' });
    this.userProfileMenu = page.locator('span').filter({ hasText: 'Automation User' });
    this.userProfileLink = page.locator('a').filter({ hasText: 'Profile' });
    this.logoutLink = page.locator('a').filter({ hasText: 'Logout' }).first();
    this.logoutLink1 = page.locator('a').filter({ hasText: 'Logout' }).last();
    this.changePasswordLink = page.locator('a').filter({ hasText: 'Change Password' });
    this.managePayeeMenu = page.locator('a').filter({ hasText: 'Manage' });
    this.modalTextMsg = page.getByText('Select "Logout" below if you are ready to end your current session.');
   
  }

  async expectUserDashBoardPageTitle(expectedTitle: string) {
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async clickOnUserProfileMenu() {
    await this.userProfileMenu.waitFor({ state: 'visible', timeout: 10_000 });
    await this.userProfileMenu.click();
  }
  
  async clickOnUserProfileLink() {
    await this.userProfileLink.waitFor({ state: 'visible', timeout: 10_000 });
    await this.userProfileLink.click();
  }

  async navigateToUserProfilePage() {
    await this.clickOnUserProfileMenu();
    await this.clickOnUserProfileLink();
    return new UserProfilePage(this.page);
  }

  async expectNewUserText(expectedText: string) {
    await this.newUserText.waitFor({ state: 'visible', timeout: 10_000 });
    await expect(this.newUserText).toContainText(expectedText);
  }

  async getNewUserAccountText() {
    await this.newUserText.waitFor({ state: 'visible', timeout: 10_000 });
    return this.newUserText.innerText();
  }

  async clickOnAccountOpeningMenu() {
    await this.accountOpeningMenu.click();
  }

  async navigateToAddPayeePage() {
    await this.addPayeeMenu.click();
    await this.addPayeeLink.click();
    return new UserAddPayeePage(this.page);
  }


  async navigateToManagePayeePage() {
    await this.addPayeeMenu.click();
    await this.managePayeeMenu.click();
    return new UserManagePayeePage(this.page);
  }

  async getModalText() {
    const message = await this.modalTextMsg.textContent();
    return message;
  }

  async clickOnUserLogoutLink() {
    await this.logoutLink.waitFor({ state: 'visible', timeout: 10_000 });
    await this.logoutLink.click();
  }

  async userLogout() {
    await this.clickOnUserProfileMenu();
    await this.clickOnUserLogoutLink();
    return this;
  }

  async clickModalLogoutLink() {
    await this.logoutLink1.click();
  }


}