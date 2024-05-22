import { Page, expect } from '@playwright/test';
import { Link } from '../../page-factory/link';
import { Button } from '../../page-factory/button';
import { allure } from "allure-playwright";
import { SearchModal } from '../modals/searchModal';


export class Navbar {
  private isMob: boolean | undefined;
  readonly searchModal: SearchModal;

  private readonly BrandLink = new Link({ page: this.page, locator: "//a[.='Playwright']", name: 'Логотип-ссылка' });
  private readonly DocsLink = new Link({ page: this.page, locator: "//a[contains(text(),'Docs')]", name: 'Документация' });
  private readonly ApiLink = new Link({ page: this.page, locator: "//a[text()='API']", name: 'API' });
  private readonly ProgrammingLanguageLink = new Link({ page: this.page, locator: "//a[@class='navbar__link']", name: 'Выбор языка программирования' });
  private readonly CommunityLink = new Link({ page: this.page, locator: "//a[text()='Community']", name: 'Комьюнити' });
  private readonly SearchButton = new Button({ page: this.page, locator: "//button[@class='DocSearch DocSearch-Button']", name: 'Кнопка поиска' });

  constructor(private readonly page: Page, isMob: boolean | undefined) {
    this.isMob = isMob;
    this.searchModal = new SearchModal(page, isMob);
  }

  async checkNavbarElementsVisible() {
    await allure.step("Check visibility of all navbar elements", async () => {
      await this.BrandLink.shouldBeVisible();
      await this.DocsLink.shouldBeVisible();
      await this.ApiLink.shouldBeVisible();
      await this.ProgrammingLanguageLink.shouldBeVisible();
      await this.CommunityLink.shouldBeVisible();
      await this.SearchButton.shouldBeVisible();
    });
  }

  async visitDocs() {
    await allure.step("Open docs link", async () => {
      await this.DocsLink.click();
      await expect(this.page).toHaveURL(/docs\/intro/);
    });
  }

  async visitApi() {
    await allure.step("Open api link", async () => {
      await this.ApiLink.click();
      await expect(this.page).toHaveURL(/docs\/api\/class-playwright/);
    });
  }

  async openSearch() {
    await allure.step("Open search modal", async () => {
      await this.SearchButton.shouldBeVisible();
      await this.SearchButton.click();
      await this.searchModal.modalIsOpened();
    });
  }

}