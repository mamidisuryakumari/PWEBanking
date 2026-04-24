import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TestConfig } from '../test.config';
import { CashhierLoginPage } from '../pages/CashierLoginPage';
import { UserRole } from '../pages/Enum';
import { CashierDashBoardPage } from '../pages/CashierDashBoardPage';
import { CashierProfilePage } from '../pages/CashierProfilePage';

test('Cashier profile update @cashier', async({page}) => {

    const homePage = new HomePage(page);
      const cashierLoginPage = new CashhierLoginPage(page);
      const config = new TestConfig();
      const cashierDashBoardPage = new CashierDashBoardPage(page);
      const cashierProfilePage = new CashierProfilePage(page);
    
      await page.goto(config.baseURL);
      await homePage.navigateByUserRole(page, UserRole.CASHIER);
      await cashierLoginPage.cashierLogin(config.cashierEmail,
        config.cashierPassword);
      await expect(page).toHaveTitle(config.cashierDashBoardPageTitle);

      await cashierDashBoardPage.navigateToCashierProfilePage();
      await expect(page).toHaveTitle(config.cashierProfilePageTitle);

      page.on('dialog', async (dialog) => {
        const message = dialog.message();
        expect(message).toBe(config.cashierProfileUpdateSuccessMsg);
        dialog.accept();
      });

      await cashierProfilePage.cashierProfileUpdate(
        config.cashierFirstName,config.cashierLastName,config.cashierAddress);
        await expect(page).toHaveTitle(config.cashierProfilePageTitle);
      
});