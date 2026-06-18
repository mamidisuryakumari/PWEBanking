import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ override: true });

export default defineConfig({
  testDir: './tests',
  globalSetup: './global.setup.ts',
  fullyParallel: true,
  retries: 0,
  workers: 1,
  reporter: [
    ['html'],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],

  use: {
    baseURL: process.env.BASE_URL ?? process.env.baseUrl ?? 'http://localhost/bankms/',
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    permissions: ['geolocation'],
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
