import{test,expect,Page} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { AdminTestData } from '../test-data/AdminTestData';
import { UserTestData } from '../test-data/UserTestData';
import { AdminDashboardPage } from '../pages/AdminDashboardPage';
import { AdminNewAccountOpeningRequestPage } from '../pages/AdminNewAccontOpeningRequestPage';
import { AdminAccountHolderDetailsPage } from '../pages/AdminAccountHolderDetailspage';
import { TestConfig } from '../test.config';


test("Admin Approve user Request", async ({page})=>{

    const homePage = new HomePage(page);
        const adminLoginPage = new AdminLoginPage(page);
        const adminDashboardPage = new AdminDashboardPage(page);
        const adminNewAccountOpeningRequestPage = new AdminNewAccountOpeningRequestPage(page);
        const adminAccountHolderDetailsPage = new AdminAccountHolderDetailsPage(page);
        const config = new TestConfig();
    
        await page.goto(config.baseURL);
        await expect(page).toHaveTitle(config.homePageTitle);
        
       // await  homePage.navigateByUserRole(page, config.adminRole);
        await expect(page).toHaveTitle(config.adminLoginPageTitle);
    
        await adminLoginPage.adminLogin(config.adminEmail,config.adminPassword);
    
        await expect(page).toHaveTitle(config.adminDashboardPageTitle);

        await adminDashboardPage.navigateToNewAccountOpeningRequestsPage();

        await expect(page).toHaveTitle(config.adminNewAccountOpeningRequestPageTitle);

        await adminNewAccountOpeningRequestPage.searchUserAccount();

        await expect(page).toHaveTitle(config.adminAccountHolderDetailsPageTitle);

          await adminAccountHolderDetailsPage.accountApprovedAcceptAlert();

        await adminAccountHolderDetailsPage.userAccountApproval(config.remark,
            config.initialAmount,config.approvedStatus);

                   await expect(page).toHaveTitle(config.adminNewAccountOpeningRequestPageTitle);
            

});