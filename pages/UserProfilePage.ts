import { BasePage} from "./BasePage";
import { Page,Locator} from '@playwright/test';

export class UserProfilePage extends BasePage{
readonly userFirstName:Locator;
readonly userLastName:Locator;
readonly mobileNumber:Locator;

constructor(page:Page){
    super(page);
    this.userFirstName = page.locator("#fname");
    this.userLastName = page.locator("#lname");
    this.mobileNumber = page.locator("#mobno");
}

async userProfileUpdate(firstName:string, lastName:string, mobileNumber:string){
    await this.userFirstName.fill(firstName);
    await this.userLastName.fill(lastName);
    await this.mobileNumber.fill(mobileNumber);
}

}