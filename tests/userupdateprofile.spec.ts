import { test, expect, Page } from '@playwright/test';
import { UserDashBoardPage } from '../pages/UserDashBoardPage';
import { UserLoginPage } from '../pages/UserLoginPage';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import { UserProfilePage } from '../pages/UserProfilePage';

test("User profile update", async ({ page }) => {

    const userLoginpage = new UserLoginPage(page);
    const homePage = new HomePage(page);
    const config = new TestConfig();
    const userDashBoardPage = new UserDashBoardPage(page);
    const userProfilePage = new UserProfilePage(page);

    await page.goto("http://localhost/bankms/");
    await expect(page).toHaveTitle(config.homePageTitle);
    await homePage.navigateByUserRole(page, UserRole.USER);
    await expect(page).toHaveTitle(config.userLoginPageTitle);
    await userLoginpage.userLogin(config.username,
        config.password);
    await expect(page).toHaveTitle(config.userDashBoardPageTitle);

    await userDashBoardPage.navigateToUserProfilePage();

    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        expect(message).toContain(config.userProfileUpdateAlertMsg);
        await dialog.accept();
    })
    await userProfilePage.userProfileUpdate(
        config.userUpdateFirstName, config.userUpdateLastName, config.UserUpdateMobileNumber);

});