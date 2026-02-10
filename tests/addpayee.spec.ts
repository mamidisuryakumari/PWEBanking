import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserLoginPage } from '../pages/UserLoginPage';
import { UserDashBoardPage } from '../pages/UserDashBoardPage';
import  { UserTestData } from '../test-data/UserTestData';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { CashhierLoginPage } from '../pages/CashierLoginPage';
import { CashierDashBoardPage } from '../pages/CashierDashBoardPage';
import { CashierAccountHoldersPage } from '../pages/CashierAccountHoldersPage';
import { UserAddPayeePage } from '../pages/UserAddpayeePage';
import { CashierTestData } from '../test-data/CashierTestData';
import { TestConfig } from '../test.config';

  

test("Add Payee ", async ({page})=>{
 
   const homePage = new HomePage(page);
   const userLoginpage = new UserLoginPage(page);
   const userDashBoardPage = new UserDashBoardPage(page);
   const adminLoginPage = new AdminLoginPage(page);  
   const adminDashBoardPage = new UserDashBoardPage(page);
   const cashierLoginPage = new CashhierLoginPage(page);
   const cashierDashBoardPage = new CashierDashBoardPage(page);
   const cashierAccountHoldersPage = new CashierAccountHoldersPage(page);
   const userAddPayeePage = new UserAddPayeePage(page);
   const config = new TestConfig();
   

   await page.goto(config.baseURL);
       await homePage.navigateByUserRole(page,"cashier");
       await cashierLoginPage.cashierLogin(config.cashierEmail,
           config.cashierPassword);
            await expect(page).toHaveTitle(config.cashierDashBoardPageTitle);
            await cashierDashBoardPage.navigateToAccountHoldersPage();
            
           const users = await cashierAccountHoldersPage.getAllAccountHolders();
   
   
    await page.goto(config.baseURL);
       await expect(page).toHaveTitle(config.homePageTitle);
       await homePage.navigateByUserRole(page,config.userRole);
       await expect(page).toHaveTitle(config.userLoginPageTitle);
       await userLoginpage.userLogin(config.username,
         config.password);
         await expect(page).toHaveTitle(config.userDashBoardPageTitle);

            await userDashBoardPage.navigateToAddPayeePage();
            await expect(page).toHaveTitle(config.userAddPayeePageTitle);

           while (true) {
    

    for (const user of users) {
        console.log(`Adding: ${user.name} - ${user.accountNumber}`);

        await userAddPayeePage.addPayee(user.accountNumber, user.name);

        await page.waitForTimeout(1000); // small wait
    }

    const moved = await cashierAccountHoldersPage.goToNextPageIfExists();
    if (!moved) break;
}
    


       

});