import MainPage from "../pages/mainPage";
import InstallationPage from "../pages/installationPage";

import { test as baseTexst } from "@playwright/test";


const test = baseTexst.extend<{
    main: MainPage;
    installation: InstallationPage;
}>({
    main: async ({ page, isMobile }, use) => {
        await use(new MainPage(page, isMobile));
    },
    installation: async ({ page, isMobile }, use) => {
        await use(new InstallationPage(page, isMobile));
    },
})
export default test;
export const expect = test.expect;