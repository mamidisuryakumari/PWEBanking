import{test,expect} from'@playwright/test';
import { UserLoginPage } from '../pages/UserLoginPage';
import { HomePage } from '../pages/HomePage';
import { UserTestData } from '../test-data/UserTestData';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';


test("User login",async({page})=>{
    const userLoginpage = new UserLoginPage(page);
    const homePage = new HomePage(page);
    const config = new TestConfig();
    
    await page.goto(config.baseURL);
    await expect(page).toHaveTitle(config.homePageTitle);
    await homePage.navigateByUserRole(page,UserRole.USER);
    await expect(page).toHaveTitle(config.userLoginPageTitle);
    await userLoginpage.userLogin(config.username,
      config.password);
      await expect(page).toHaveTitle(config.userDashBoardPageTitle);


});



