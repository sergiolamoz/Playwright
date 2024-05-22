import { Page, expect } from '@playwright/test';
import { Button } from '../../page-factory/button';
import { Text } from '../../page-factory/text';
import { Input } from '../../page-factory/input';
import { ListItem } from '../../page-factory/list-item';
import { allure } from "allure-playwright";

type FindResult = {
    keyword: string;
    resultNumber: number;
};

export class SearchModal {
    private isMob: boolean | undefined;

    private readonly searchInput = new Input({ page: this.page, locator: "//input[@id='docsearch-input']", name: 'Строка поиска' });
    private readonly searchResult = new ListItem({ page: this.page, locator: "//li[@id='docsearch-item-{resultNumber}']", name: 'Результат поиска' });

    constructor(private readonly page: Page, isMob: boolean | undefined) {
        this.isMob = isMob;
    }

    async modalIsOpened() {
        await allure.step("A modal search window has opened", async () => {
            await this.searchInput.shouldBeVisible();
        });
    }

    async findResult({ keyword, resultNumber }: FindResult) {
        await allure.step("Search some text and select first element of search results", async () => {
            await this.searchInput.fill(keyword);
            await this.searchResult.click({ resultNumber });
        });
    }
}