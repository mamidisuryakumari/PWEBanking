import { BasePage } from "./BasePage";
import {Page,Locator} from '@playwright/test';
export class UserChangePasswordPage extends BasePage{
readonly currentPassword:Locator;
readonly newPassword:Locator;
readonly confirmPassword:Locator;

constructor(page:Page){
    super(page);
    this.currentPassword = page.locator("#currentpassword");
    this.confirmPassword = page.locator("#newpassword");
    this.newPassword = page.locator("#confirmpassword");
}
}