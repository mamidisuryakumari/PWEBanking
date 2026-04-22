import { en } from "@faker-js/faker/.";
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

async enterUserFirstName(firstName:string){
    await this.userFirstName.waitFor({state:'visible', timeout:10_000});
    await this.userFirstName.fill(firstName);
}

async enterUserLastName(lastName:string){
    await this.userLastName.waitFor({state:'visible', timeout:10_000});
    await this.userLastName.fill(lastName);
}

async enterUserMobileNumber(mobileNumber:string){
    await this.mobileNumber.waitFor({state:'visible', timeout:10_000});
    await this.mobileNumber.fill(mobileNumber);
}

async userProfileUpdate(firstName:string, lastName:string, mobileNumber:string){
    await this.enterUserFirstName(firstName);
     await this.enterUserLastName(lastName);
     await this.enterUserMobileNumber(mobileNumber);

}
}