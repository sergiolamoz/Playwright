import { test } from '@playwright/test';
import { allure } from "allure-playwright";

test('open page ', async ({ page }) => {  
  allure.parentSuite("Web Interface");
  allure.suite("Main Pages");
  allure.severity("critical");

  await page.goto('/', { waitUntil: 'networkidle' });
});
