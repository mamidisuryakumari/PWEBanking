import { test, Page, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UserLoginPage } from '../pages/UserLoginPage';
import { UserDashBoardPage } from '../pages/UserDashBoardPage';
import { AdminLoginPage } from '../pages/AdminLoginPage';
import { CashhierLoginPage } from '../pages/CashierLoginPage';
import { CashierDashBoardPage } from '../pages/CashierDashBoardPage';
import { CashierAccountHoldersPage } from '../pages/CashierAccountHoldersPage';
import { TestConfig } from '../test.config';
import { UserAddPayeePage } from '../pages/UserAddPayeePage';
import { UserRole } from '../pages/Enum';
import { TestContext } from '../pages/TestContext';
import { UserManagePayeePage } from '../pages/UserManagePayeePage';


test("Delete payee from user account", async ({ page }) => {

  const testContext = new TestContext();
  const homePage = new HomePage(page);
  const userLoginpage = new UserLoginPage(page);
  const userDashBoardPage = new UserDashBoardPage(page);
  const cashierLoginPage = new CashhierLoginPage(page);
  const cashierDashBoardPage = new CashierDashBoardPage(page);
  const cashierAccountHoldersPage = new CashierAccountHoldersPage(page, testContext);
  const userAddPayeePage = new UserAddPayeePage(page);
  const config = new TestConfig();
  const userManagePayeePage = new UserManagePayeePage(page);

  await page.goto(config.baseURL);
  //cashier login
  await homePage.navigateByUserRole(page, UserRole.CASHIER);
  await cashierLoginPage.cashierLogin(config.cashierEmail,
    config.cashierPassword);
  await expect(page).toHaveTitle(config.cashierDashBoardPageTitle);
  await cashierDashBoardPage.navigateToAccountHoldersPage();
  await expect(page).toHaveTitle(config.cashierAccountHoldersPageTitle);
  //capture account holder details
  const accountHolderList: any = await cashierAccountHoldersPage.getAllAccountHolders();
  console.log("Total account holders fetched:", accountHolderList.length);

  //user login 
  await page.goto(config.userLoginPageURL);
  await expect(page).toHaveTitle(config.userLoginPageTitle);
  await userLoginpage.userLogin(config.username,
    config.password);
  await expect(page).toHaveTitle(config.userDashBoardPageTitle);
  await userDashBoardPage.navigateToManagePayeePage();
  //existing payee account numbers
  const existingPayeesList = await userManagePayeePage.getAllExistingPayeeAccountNumbers();
  console.log("Existing Payees:", existingPayeesList);
  await userDashBoardPage.navigateToAddPayeePage();
  await expect(page).toHaveTitle(config.userAddPayeePageTitle);


  for (const account of accountHolderList) {

    console.log("Checking:", account.accNumber);

    if (existingPayeesList.includes(account.accNumber.trim())) {
      console.log(`Skipping ${account.accNumber}`);
      continue;
    }

    let dialogMessage = "";

    page.once('dialog', async (dialog) => {
      dialogMessage = dialog.message();
      console.log(`Dialog message: ${dialogMessage}`);
      await dialog.accept();
    });

    await userAddPayeePage.addPayee(account.accNumber, account.name);
    testContext.payeeAccountNumber = account.accNumber;
    console.log("Added payee account number: ", testContext.payeeAccountNumber);

    await page.waitForTimeout(500);

    if (dialogMessage.includes(config.userPayeeAddedSuccessMsg)) {
      console.log("Payee added successfully:", account.name);
      break;
    }

    if (dialogMessage.includes(config.userAlreadyAddedAlertMsg)) {
      console.log("Account already added, trying next...");
      continue;
    }
  }

  page.once('dialog', async (dialog) => {
    const message = dialog.message();
    console.log(message);
    await expect(message).toContain(config.userDeletePayeeAlertMsg);
    await dialog.accept();
  });

  //delete payee
  await userManagePayeePage.deletePayee(testContext.payeeAccountNumber);
  console.log(`Deleted payee with account number: ${testContext.payeeAccountNumber}`);
});

