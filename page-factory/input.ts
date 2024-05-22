import test, { expect } from '@playwright/test';
import { LocatorProps } from '../types/page-factory/component';
import { Component } from './component';
import { allure } from "allure-playwright";


export class Input extends Component {
  typeOf(): string {
    return 'input';
  }

  async fill(value: string, locatorProps: LocatorProps = {}) {
    await allure.step(`Fill ${this.typeOf()} "${this.componentName}" to value "${value}"`, async () => {
      const locator = this.getLocator(locatorProps);
      await locator.fill(value);
    });
  }

  async shouldHaveValue(value: string, locatorProps: LocatorProps = {}) {
    await allure.step(`Checking that ${this.typeOf()} "${this.componentName}" has a value "${value}"`, async () => {
      const locator = this.getLocator(locatorProps);
      await expect(locator).toHaveValue(value);
    });
  }
}