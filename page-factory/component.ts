import { expect, Locator, Page, test } from '@playwright/test';
import { ComponentProps, LocatorProps } from '../types/page-factory/component';
import { locatorTemplateFormat } from '../utils/page-factory';
import { allure } from "allure-playwright";

export abstract class Component {
  page: Page;
  locator: string;
  private name: string | undefined;
  public abstract typeOf(): string;
 

  constructor({ page, locator, name }: ComponentProps) {
    this.page = page;
    this.locator = locator;
    this.name = name;
  }

  getLocator(props: LocatorProps = {}): Locator {
    const { locator, ...context } = props;
    const withTemplate = locatorTemplateFormat(locator || this.locator, context);
    
    return this.page.locator(withTemplate);
  }

  get componentName() {
    return this.name;
  }

  async shouldBeVisible(locatorProps: LocatorProps = {}){
    await allure.step(`${this.typeOf()} "${this.name}" should be visible on the page`, async () => {
      const locator = this.getLocator(locatorProps);
      await expect(locator).toBeVisible();
    });
  }

  async shouldHaveText(text: string, locatorProps: LocatorProps = {}){
    await allure.step(`${this.typeOf()} "${this.name}" should have text "${text}"`, async () => {
      const locator = this.getLocator(locatorProps);
      await expect(locator).toContainText(text);
    });
  }

  async click(locatorProps: LocatorProps = {}) {
    await allure.step(`Clicking the ${this.typeOf()} with name "${this.name}"`, async () => {
      const locator = this.getLocator(locatorProps);
      await locator.click();
    });
  }

  async textContent(locatorProps: LocatorProps = {}) {
    await allure.step(`Get textContent of ${this.typeOf()} with name "${this.name}"`, async () => {});
      const locator = this.getLocator(locatorProps);
      return await locator.textContent();  
  }
  
  async getAttribute(text: string, locatorProps: LocatorProps = {}){
    await allure.step(`${this.typeOf()} "${this.name}" get attribute "${text}"`, async () => {
      const locator = this.getLocator(locatorProps);
      return await locator.getAttribute(text);
    });
  }
}