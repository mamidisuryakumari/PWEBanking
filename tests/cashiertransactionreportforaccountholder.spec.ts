import{test,expect,Page} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CashhierLoginPage } from '../pages/CashierLoginPage';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import { CashierDashBoardPage } from '../pages/CashierDashBoardPage';
import { CashierTransactionReportPage } from '../pages/CashierTransactionReportPage';

test('Cashier Transaction Report Between Dates for Account Holder', async ({page}) => {
     const homePage = new HomePage(page);
      const cashierLoginPage = new CashhierLoginPage(page);
      const config = new TestConfig();
      const cashierDashBoardPage= new CashierDashBoardPage(page);
      const cashierTransactionReportPage = new CashierTransactionReportPage(page);
    
      await page.goto(config.baseURL);
      await homePage.navigateByUserRole(page, UserRole.CASHIER);
      await cashierLoginPage.cashierLogin(config.cashierEmail,
        config.cashierPassword);
      await expect(page).toHaveTitle(config.cashierDashBoardPageTitle);

      await cashierDashBoardPage.navigateToCashierTransactionReportPage();
      expect(page).toHaveTitle(config.cashierTransactionReportPageTitle);

      await cashierTransactionReportPage.transactionReports(
        config.fromDate,config.toDate,config.selectAccountHolderName);

        const text = await cashierTransactionReportPage.getTransactionHistoryText()

      await expect(text).toContain(config.transactionHistorySuccessMsg);

});