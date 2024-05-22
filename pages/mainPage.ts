import { Page, expect } from "@playwright/test";
import { Navbar } from '../component/navigation/navbar';


// главная страница сайта
export default class MainPage {
    private isMob: boolean | undefined;

    readonly navbar: Navbar;

    constructor(private readonly page: Page, isMob: boolean | undefined) {
        this.isMob = isMob;
      
        this.navbar = new Navbar(page, isMob);
    } 

}