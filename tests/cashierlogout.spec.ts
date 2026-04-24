import { test, expect } from '@playwright/test';
import { Page } from '@playwright/test';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import { HomePage } from '../pages/HomePage';
import { CashhierLoginPage } from '../pages/CashierLoginPage';
import { CashierDashBoardPage } from '../pages/CashierDashBoardPage';

test('Cashier logout @cashier', async ({ page }) => {

    const homePage = new HomePage(page);
    const cashierLoginPage = new CashhierLoginPage(page);
    const config = new TestConfig();
    const cashierDashBoardPage = new CashierDashBoardPage(page);

    await page.goto(config.baseURL);
    await homePage.navigateByUserRole(page, UserRole.CASHIER);
    await expect(page).toHaveTitle(config.cashierLoginPageTitle);
    await cashierLoginPage.cashierLogin(config.cashierEmail,
        config.cashierPassword);
    await expect(page).toHaveTitle(config.cashierDashBoardPageTitle);

    await cashierDashBoardPage.cashierLogout();
     const modalText = await cashierDashBoardPage.getModalText();
  expect(modalText).toContain(config.userLogoutMsg);

  await cashierDashBoardPage.clickModalLogoutLink();
    await expect(page).toHaveTitle(config.cashierLoginPageTitle);

});