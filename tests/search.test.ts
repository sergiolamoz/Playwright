import test, { expect } from "../fixtures/basePages";
import { allure } from "allure-playwright";

test('Open playwright main page and search installation guide', async ({ page, main, installation }) => {  
  allure.parentSuite("Web Interface");
  allure.suite("Main Pages");
  allure.severity("critical");

  await page.goto('/', { waitUntil: 'networkidle' });
  await main.navbar.checkNavbarElementsVisible();
  await main.navbar.openSearch();
  await main.navbar.searchModal.findResult({ keyword: 'Installation', resultNumber: 0 });
  await installation.checkHeaderText("Installation");
});
