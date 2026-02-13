import{test,expect,Page} from'@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserLoginPage } from '../pages/UserLoginPage';
import { UserRole } from '../pages/Enum';
import * as fs from 'fs';
import { TestConfig } from '../test.config';

//reading data from json file
const jsonPath = "test-data/invalidusers.json";
const loginData:any = JSON.parse(fs.readFileSync(jsonPath,'utf8'));

test.describe("User login with invalid values",()=>{
  for(const data of loginData){
    test(data.scenario, async ({ page }) => {
      const userLoginpage = new UserLoginPage(page);
      const homePage = new HomePage(page);  
      const config = new TestConfig();

      await page.goto(config.baseURL);
      await expect(page).toHaveTitle(config.homePageTitle);

      await homePage.navigateByUserRole(page, UserRole.USER);
      await expect(page).toHaveTitle(config.userLoginPageTitle);

      await userLoginpage.userLogin(data.email, data.password);

      // Decide which field to validate
      const fieldLocator =
        data.field === "username"
          ? page.locator("#email")
          : page.locator("#password");

      // Read browser-native message
      const validationMessage = await fieldLocator.evaluate(
        (el: HTMLInputElement) => el.validationMessage
      );

      const expectedMessage = data.expectedMessage;
      expect(validationMessage).toBe(expectedMessage);
    });
  }
});
     

   

  
