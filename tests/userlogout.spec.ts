import {test,expect,Locator,Dialog} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserLoginPage } from '../pages/UserLoginPage';
import { UserDashBoardPage } from '../pages/UserDashBoardPage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import { TestContext } from '../pages/TestContext';




test("User logout validation", async ({ page }) => {
  const testContext = new TestContext();
  const homePage = new HomePage(page);
    const userLoginpage = new UserLoginPage(page);  
    const userDashBoardPage = new UserDashBoardPage(page);
    const config = new TestConfig();

    await page.goto(config.baseURL);
    await homePage.navigateByUserRole(page, UserRole.USER);
    await userLoginpage.userLogin(config.username,
      config.password);
    await expect(page).toHaveTitle(config.userDashBoardPageTitle);
await userDashBoardPage.userLogout();
const modalText = await userDashBoardPage.getModalText();
expect(modalText).toContain(config.userLogoutMsg);

await userDashBoardPage.clickModalLogoutLink();
    await expect(page).toHaveTitle(config.userLoginPageTitle);

});