import test from '@playwright/test';
import { LocatorProps } from '../types/page-factory/component';
import { Component } from './component';
import { allure } from "allure-playwright";

export class Button extends Component {
  typeOf(){
    return 'button';
  }

  async hover(locatorProps: LocatorProps = {}){
    await allure.step(`Hovering the ${this.typeOf()} with name "${this.componentName}"`, async () => {
      const locator = this.getLocator(locatorProps);
      await locator.hover();
    });
  }

  async doubleClick(locatorProps: LocatorProps = {}) {
    await allure.step(`Double clicking ${this.typeOf()} with name "${this.componentName}"`, async () => {
      const locator = this.getLocator(locatorProps);
      await locator.dblclick();
    });
  }
}