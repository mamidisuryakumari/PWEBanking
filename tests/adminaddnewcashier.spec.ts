import { test} from "./fixtures/auth.fixtures";
import { TestConfig } from '../test.config';
import { CommonUtils } from '../utils/CommonUtils';
import { TestContext } from '../pages/TestContext';





test.describe.serial('Add cashier', () => {

  let testContext: TestContext;

  test('Admin add new cashier @admin', async ({ authPage,adminDashboardPage,
        adminAddNewCashierPage}) => {

    const config = new TestConfig();

    testContext = new TestContext();

    await authPage.goto(config.adminDashBoardPageURL);
    await adminDashboardPage.expectAdminDashboardPageTitle(config.adminDashboardPageTitle);
    await adminDashboardPage.navigateToAddCashierPage();
    await adminAddNewCashierPage.expectAdminAddNewCashierPageTitle(config.adminAddCashierPageTitle);

    const random = CommonUtils.generateRandomNumber();
    const cashierEmailId = config.cashierEmailId.replace(
      '@gmail.com',
      `${random}@gmail.com`
    );

    await adminAddNewCashierPage.addCashier(
      `${config.cashierFName}${random}`,
      config.cashierLName,
      CommonUtils.generateRandomMobileNumber(),
      cashierEmailId,
      config.cashierGender,
      config.cashierDob,
      `${config.cashierEmployeeId}${random}`,
      config.cashierAddress,
      `${config.cashierPassword}${random}`
    );

    // Save data for next tests
    testContext.cashierEmployeeId = `${config.cashierEmployeeId}${random}`;
    testContext.cashierPassword = `${config.cashierPassword}${random}`;
  });

  test('Cashier login with newly created credentials @cashier', async ({ authPage,cashierLoginPage,
        cashierDashBoardPage}) => {
    const config = new TestConfig();
   

    await authPage.goto(config.cashierLoginPageURL);
    await cashierLoginPage.expectLoginPageTitle(config.cashierLoginPageTitle);

    await cashierLoginPage.cashierLogin(
      testContext.cashierEmployeeId,
      testContext.cashierPassword
    );

    await cashierDashBoardPage.expectCashierDashBoardPageTitle(
      config.cashierDashBoardPageTitle
    );
  });

});