import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  //Global Setup to run before all tests
  globalSetup: './global-setup',
  testDir: './tests',
  timeout: 60 * 1000 * 3,
  retries: 2,
  expect: {
    timeout: 10 * 1000,
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['allure-playwright',
      {
        detail: false,
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: 'on',

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://playwright.dev/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'android',
      testMatch: /\[mobile\].*/,
      use: { ...devices['Pixel 7'] ,
      },
    }

  ],
});
