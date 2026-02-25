import { test, expect, Page } from '@playwright/test';
import { TestConfig } from '../test.config';
import { UserRole } from '../pages/Enum';
import { CashhierLoginPage } from '../pages/CashierLoginPage';
import { CashierDashBoardPage } from '../pages/CashierDashBoardPage';
import { HomePage } from '../pages/HomePage';
import { CashierUserDetailsPage } from '../pages/CashierUserDetailsPage';
import { CashierAccountHoldersPage } from '../pages/CashierAccountHoldersPage';
import { TestContext } from '../pages/TestContext';


test('Cashier deposits amount to the user account', async ({ page }) => {
  const config = new TestConfig();
  const testContext = new TestContext();
  const homePage = new HomePage(page);
  const cashierLoginPage = new CashhierLoginPage(page);
  const cashierDashBoardPage = new CashierDashBoardPage(page);
  const cashierUserDetailsPage = new CashierUserDetailsPage(page);
  const cashierAccountHolderDetailsPage = new CashierAccountHoldersPage(page, testContext);

  await page.goto(config.baseURL);
  await homePage.navigateByUserRole(page, UserRole.CASHIER);
  await cashierLoginPage.cashierLogin(config.cashierEmail,
    config.cashierPassword);
  await expect(page).toHaveTitle(config.cashierDashBoardPageTitle);

  await cashierDashBoardPage.navigateToAccountHoldersPage();
  await expect(page).toHaveTitle(config.cashierAccountHoldersPageTitle);


  await cashierAccountHolderDetailsPage.navigateToCashierUserDetailsPage(config.userAccountNumber);
  await expect(page).toHaveTitle(config.cashierUserDetailsPagetitle);
  const depositAmount = 100;
  const balanceLocator = page.locator(".badge.badge-primary");
  const previousBalance = parseFloat(
    (await balanceLocator.innerText()).trim()
  );
  console.log("Previous amount is ", previousBalance);

  page.on('dialog', async (dialog) => {
    const message = dialog.message();
    expect(message).toContain(config.transactionAlertMsg);
    await dialog.accept();
  });
  //amount deposited
  await cashierUserDetailsPage.amountIsDepositedToUser(config.depositAmount, config.transactionType);

  await cashierAccountHolderDetailsPage.navigateToCashierUserDetailsPage(config.userAccountNumber);

  const updatedBalance = parseFloat((await (await balanceLocator).innerText()).trim());
  console.log("Updated amount is ", updatedBalance);

  await expect(updatedBalance).toBe(previousBalance + depositAmount);
});

test('Cashier withdraw amount from the user account', async ({ page }) => {
  const config = new TestConfig();
  const testContext = new TestContext();
  const homePage = new HomePage(page);
  const cashierLoginPage = new CashhierLoginPage(page);
  const cashierDashBoardPage = new CashierDashBoardPage(page);
  const cashierUserDetailsPage = new CashierUserDetailsPage(page);
  const cashierAccountHolderDetailsPage = new CashierAccountHoldersPage(page, testContext);

  await page.goto(config.baseURL);
  await homePage.navigateByUserRole(page, UserRole.CASHIER);
  await cashierLoginPage.cashierLogin(config.cashierEmail,
    config.cashierPassword);
  await expect(page).toHaveTitle(config.cashierDashBoardPageTitle);

  await cashierDashBoardPage.navigateToAccountHoldersPage();
  await expect(page).toHaveTitle(config.cashierAccountHoldersPageTitle);


  await cashierAccountHolderDetailsPage.navigateToCashierUserDetailsPage(config.userAccountNumber);
  await expect(page).toHaveTitle(config.cashierUserDetailsPagetitle);
  const withdrawAmount = 100;
  const balanceLocator = page.locator(".badge.badge-primary");
  const previousBalance = parseFloat(
    (await balanceLocator.innerText()).trim()
  );
  console.log("Previous amount is ", previousBalance);

  page.on('dialog', async (dialog) => {
    const message = dialog.message();
    expect(message).toContain(config.transactionAlertMsg);
    await dialog.accept();
  });
  //amount withdraw
  await cashierUserDetailsPage.amountIsWithdrawFromUSerAccount(config.withdrawAmount);

  await cashierAccountHolderDetailsPage.navigateToCashierUserDetailsPage(config.userAccountNumber);

  const updatedBalance = parseFloat((await (await balanceLocator).innerText()).trim());
  console.log("Updated amount is ", updatedBalance);

  await expect(updatedBalance).toBe(previousBalance - withdrawAmount);
});