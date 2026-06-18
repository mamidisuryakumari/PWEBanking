import { test as base, BrowserContext, Page } from '@playwright/test';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { HomePage } from '../../pages/HomePage';
import { AdminLoginPage } from '../../pages/admin/AdminLoginPage';
import { AdminDashboardPage } from '../../pages/admin/AdminDashboardPage';
import { AdminAddNewCashierPage } from '../../pages/admin/AdminAddNewCashierPage';
import { CashhierLoginPage } from '../../pages/CashierLoginPage';
import { CashierDashBoardPage } from '../../pages/CashierDashBoardPage';
import { CashierDetailsPage } from '../../pages/admin/CashierDetailsPage';

dotenv.config({ override: true });

export const AUTH_STATE_PATH = path.join(
  __dirname,
  'auth',
  'admin.json'
);

const baseUrl = process.env.BASE_URL ?? process.env.baseUrl ?? 'http://localhost/bankms/';

type AuthFixtures = {
  authContext: BrowserContext;
  authPage: Page;
  adminLoginPage: AdminLoginPage;
  homePage: HomePage;
  adminDashboardPage: AdminDashboardPage;
  adminAddNewCashierPage: AdminAddNewCashierPage;
  cashierLoginPage: CashhierLoginPage;
  cashierDashBoardPage: CashierDashBoardPage;
  cashierDetailsPage: CashierDetailsPage;
};

export const test = base.extend<AuthFixtures>({
  authContext: async ({ browser }, use) => {
    const contextOptions = fs.existsSync(AUTH_STATE_PATH)
      ? { storageState: AUTH_STATE_PATH }
      : {};

    const context = await browser.newContext(contextOptions);

    await use(context);
    await context.close();
  },

  authPage: async ({ authContext }, use) => {
    const page = await authContext.newPage();
    await page.goto(baseUrl, {
      waitUntil: 'domcontentloaded',
    });
   await use(page);
   await page.close();
  },

  homePage: async ({ authPage }:{authPage:Page}, use) => {
    const homePage = new HomePage(authPage);

    await use(homePage);
  },

  adminLoginPage: async ({ authPage }:{authPage:Page}, use) => {
    const adminLoginPage = new AdminLoginPage(authPage);

    await use(adminLoginPage);
  },

  adminDashboardPage: async ({ authPage }:{authPage:Page}, use) => {
    const adminDashboardPage = new AdminDashboardPage(authPage);
    await use(adminDashboardPage);
  },

adminAddNewCashierPage: async ({ authPage }:{authPage:Page}, use) => {
    const adminAddNewCashierPage = new AdminAddNewCashierPage(authPage);
    await use(adminAddNewCashierPage);
  },

cashierLoginPage: async ({ authPage }:{authPage:Page}, use) => {
    const cashierLoginPage = new CashhierLoginPage(authPage);
    await use(cashierLoginPage);
  },

  cashierDetailsPage: async ({ authPage }:{authPage:Page}, use) => {
    const cashierDetailsPage = new CashierDetailsPage(authPage);
    await use(cashierDetailsPage);
  },
   cashierDashBoardPage: async ({ authPage }:{authPage:Page}, use) => {
    const cashierDashBoardPage = new CashierDashBoardPage(authPage);
    await use(cashierDashBoardPage);
  }





});