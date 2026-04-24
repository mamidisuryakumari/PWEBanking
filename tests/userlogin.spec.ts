import{test,expect} from'@playwright/test';
import { UserLoginPage } from '../pages/UserLoginPage';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import { UserDashBoardPage } from '../pages/UserDashBoardPage';


test("User login @user",async({page})=>{
    const userLoginpage = new UserLoginPage(page);
    const homePage = new HomePage(page);
    const config = new TestConfig();
    const loginPage = new UserLoginPage(page);
    const userDashBoardPage = new UserDashBoardPage(page);
    
    await page.goto(config.baseURL);
    await homePage.expectHomePageTitle(config.homePageTitle);
    await homePage.navigateByUserRole(page,UserRole.USER);
    await loginPage.expectLoginPageTitle(config.userLoginPageTitle);
    await userLoginpage.userLogin(config.username,
      config.password);
    await userDashBoardPage.expectUserDashBoardPageTitle(config.userDashBoardPageTitle);


});



