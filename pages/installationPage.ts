import { Page } from "@playwright/test";
import { Text } from '../page-factory/text';
import { allure } from "allure-playwright";

export default class InstallationPage {
    private isMob: boolean | undefined;

    private readonly Title = new Text({ page: this.page, locator: "//h1[text()='{searchText}']", name: 'Заголовок h1 страницы' });

    constructor(private readonly page: Page, isMob: boolean | undefined) {
        this.isMob = isMob;
    }

    async checkHeaderText(searchText: string) {
        await allure.step("Check the header text are present", async () => {  
            await this.Title.shouldBeVisible({ searchText });
            await this.Title.shouldHaveText(searchText, { searchText });
        });
    } 
}