import { chromium, FullConfig } from "@playwright/test";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { HomePage } from "./pages/HomePage";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { TestConfig } from "./test.config";
import { UserRole } from "./pages/Enum";

dotenv.config({ override: true });

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const homePage = new HomePage(page);
  const adminLoginPage = new AdminLoginPage(page);
  const testConfig = new TestConfig();
  const baseUrl = process.env.BASE_URL ?? process.env.baseUrl ?? testConfig.baseURL;
  console.log("BASE_URL:", process.env.BASE_URL);
  const adminEmail = process.env.ADMIN_EMAIL ?? process.env.adminEmail ?? testConfig.adminEmail;
  const adminPassword = process.env.ADMIN_PASSWORD ?? process.env.adminPassword ?? testConfig.adminPassword;
  const storageStatePath = path.resolve(__dirname, "tests", "fixtures", "auth", "admin.json");

  fs.mkdirSync(path.dirname(storageStatePath), { recursive: true });

  await page.goto(baseUrl);
  await homePage.expectHomePageTitle(testConfig.homePageTitle);
  await homePage.navigateByUserRole(page, UserRole.ADMIN);
  await adminLoginPage.expectAdminLoginPageTitle(testConfig.adminLoginPageTitle);
  await adminLoginPage.adminLogin(adminEmail, adminPassword);


  await page.context().storageState({ path: storageStatePath });
  await browser.close();
}

export default globalSetup;
