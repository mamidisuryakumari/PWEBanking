import{test,expect} from'@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserLoginPage } from '../pages/UserLoginPage'; 
import { CashhierLoginPage } from '../pages/CashierLoginPage';
import { CashierTestData } from '../test-data/CashierTestData';
import { TestConfig } from '../test.config';

test("Cashier Login Test", async ({page})=>{

    const homePage = new HomePage(page);
    const cashierLoginPage = new CashhierLoginPage(page); 
    const config = new TestConfig();

    await page.goto(config.baseURL);
  //  await homePage.navigateByUserRole(page,"cashier");
    await cashierLoginPage.cashierLogin(config.cashierEmail,
        config.cashierPassword);
         await expect(page).toHaveTitle(config.cashierDashBoardPageTitle);
    });