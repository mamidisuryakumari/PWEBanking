import { test, expect, Page } from '@playwright/test';
import { UserDashBoardPage } from '../pages/UserDashBoardPage';
import { UserLoginPage } from '../pages/UserLoginPage';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import { UserProfilePage } from '../pages/UserProfilePage';

test("User profile update @user", async ({ page }) => {

    const userLoginpage = new UserLoginPage(page);
    const homePage = new HomePage(page);
    const config = new TestConfig();
    const userDashBoardPage = new UserDashBoardPage(page);
    const userProfilePage = new UserProfilePage(page);

    await page.goto(config.baseURL);
    await homePage.expectHomePageTitle(config.homePageTitle);
    await homePage.navigateByUserRole(page, UserRole.USER);
    await userLoginpage.expectLoginPageTitle(config.userLoginPageTitle);
    await userLoginpage.userLogin(config.username,
        config.password);
    await userDashBoardPage.expectUserDashBoardPageTitle(config.userDashBoardPageTitle);

    await userDashBoardPage.navigateToUserProfilePage();

    await userProfilePage.acceptUserProfileUpdateAlert(config.userProfileUpdateAlertMsg);
   
    await userProfilePage.userProfileUpdate(
        config.userUpdateFirstName, config.userUpdateLastName, config.UserUpdateMobileNumber);

});